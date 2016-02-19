import Action from '../actions/Action';
import { getProgressFromValue, getValueFromProgress, ease, restrict } from '../inc/calc';

/*
    Methods and properties to add to bound Actions
*/
const boundOnStart = (action) => action.actor.activateAction(action.id, action);
const boundOnStop = (action) => action.actor.deactivateAction(action.id);
const boundProps = (actor) => ({
    actor: actor,
    isPriority: true,
    on: actor.on,
    _onStart: boundOnStart,
    _onStop: boundOnStop,
    onRender: undefined
});

export default class Actor extends Action {
    constructor(...args) {
        super(...args);
        this.activeActions = {};
        this.numActiveActions = 0;
    }

    set(props, instant) {
        if (instant || !this.behaviour) {
            super.set(props);
            this.once();
        } else {
            const action = this.reducer(props);
            if (action) {
                this.start(action);
            }
        }
    }

    /*
        Bind Action to Actor
    */
    bind(action) {
        const inheritedAction = action.inherit();
        let newValues = {};
        let hasNewValues = false;

        // Create values on actor that don't exist
        for (let key in inheritedAction.values) {
            if (inheritedAction.values.hasOwnProperty(key) && !this.values.hasOwnProperty(key)) {
                newValues[key] = inheritedAction.values[key];
                hasNewValues = true;
            }
        }

        if (hasNewValues) {
            this.set({ values: newValues });
        }

        return inheritedAction.set(boundProps(this, inheritedAction));
    }

    /*
        Start Actor

        If Action is provided, bind it to this Actor and start

        @param (optional) [Action]
    */
    start(action) {
        super.start();

        if (action) {
            const boundAction = this.bind(action);
            boundAction.start();

            return boundAction;
        } else {
            for (let key in this.activeActions) {
                if (this.activeActions.hasOwnProperty(key)) {
                    const action = this.activeActions[key];
                    if (!action.isActive) {
                        action.start();
                    }
                }
            }
        }

        return this;
    }

    stop() {
        super.stop();

        for (let key in this.activeActions) {
            if (this.activeActions.hasOwnProperty(key)) {
                this.activeActions[key].stop();
            }
        }

        return this;
    }

    willRender(actor, frameStamp, elapsed) {
        for (let i = 0; i < this.numValueKeys; i++) {
            const key = this.valueKeys[i];
            const value = this.values[key];
            let newCurrent = (value.numDrivers) ? this.activeActions[value.drivers[0]].values[key].current : value.current;

            if (value.numDrivers > 1) {
                if (value.blendCurve) {
                    const action = this.activeActions[value.drivers[1]];
                    const blendProgress = getProgressFromValue(action.elapsed, value.blendCurve[0][0], value.blendCurve[2][0]);
                    const aP = getValueFromProgress(blendProgress, value.blendCurve[0][1], value.blendCurve[1][1]);
                    const bP = getValueFromProgress(blendProgress, value.blendCurve[1][1], value.blendCurve[2][1]);
                    const cP = getValueFromProgress(blendProgress, aP, bP);
                    newCurrent = cP;
                }
            }

            value.current = newCurrent;
        }

        return super.willRender(actor, frameStamp, elapsed);
    }

    /*
        Add active actions

        @param [number]
        @param [Action]
    */
    activateAction(id, action) {
        this.activeActions[id] = action;
        this.numActiveActions++;

        for (let i = 0; i < action.numValueKeys; i++) {
            const key = action.valueKeys[i];
            const actionValue = action.values[key];
            const value = this.values[key];
            const driverIndex = value.drivers.indexOf(id);

            if (driverIndex !== -1) {
                value.drivers.splice(driverIndex, 1);
            } else {
                value.numDrivers++;
            }

            value.target = actionValue.to;

            // Pass Actor value properties to Action
            actionValue.velocity = value.velocity;
            actionValue.current = value.current;

            // Add to drivers list
            value.drivers.push(id);

            // If we have to blend this Action in, create quadratic blend curve points
            if (value.numDrivers > 1 && action.additive) {
                const previousAction = this.activeActions[value.drivers[value.numDrivers - 2]];
                const previousActionValue = previousAction.values[key];
                const ACCURACY = 60;

                /*
                    TODO:
                        Deal with linear beziers when resolving (seperate function for eahc)
                        Generate blend function here:
                        Think about other blend modes - MVP?? This is cool enough for now
                */


                if (previousAction.elapsed && previousActionValue) {
                    const totalDuration = previousActionValue.delay + previousActionValue.duration;
                    const timeAtPreviousTweenEnd = totalDuration - previousAction.elapsed;
                    const positionAtPreviousTweenEnd = ease(restrict(getProgressFromValue(timeAtPreviousTweenEnd - actionValue.delay, 0, actionValue.duration), 0, 1), actionValue.from, actionValue.to, actionValue.ease);
                    const timeStepToTest = timeAtPreviousTweenEnd / ACCURACY;
                    const biggerAtBlendStart = (actionValue.from > value.current);
                    const biggerAtBlendEnd = (positionAtPreviousTweenEnd > previousActionValue.to);
                    const crossover = (biggerAtBlendStart !== biggerAtBlendEnd);

                    value.blendCurve = [[0, previousActionValue.current], [timeAtPreviousTweenEnd, positionAtPreviousTweenEnd]];

                    // If the two tweens crossover, find out where/when to add a point to our quadratic curve
                    if (crossover) {
                        let foundP1 = false;
                        let foundP2 = false;

                        for (let i2 = 0; i2 < ACCURACY; i2++) {
                            const timeStep = i2 * timeStepToTest;
                            const previousTweenPositionAtTime = Math.min(ease(getProgressFromValue(previousAction.elapsed + timeStep - previousActionValue.delay, 0, previousActionValue.duration), previousActionValue.from, previousActionValue.to, previousActionValue.ease), 1);
                            const positionAtTime = ease(getProgressFromValue(timeStep - actionValue.delay, 0, actionValue.duration), actionValue.from, actionValue.to, actionValue.ease); 

                            if (!foundP1 && ((biggerAtBlendStart && previousTweenPositionAtTime > positionAtTime) || (!biggerAtBlendStart && previousTweenPositionAtTime < positionAtTime))) {
                                value.blendCurve.splice(1, 0, [timeStep, positionAtTime]);
                                foundP1 = true;
                            }

                            if (!foundP2 && ((biggerAtBlendStart && value.current > positionAtTime) || (!biggerAtBlendStart && value.current < positionAtTime))) {
                                value.blendCurve[value.blendCurve.length - 1] = [timeStep, positionAtTime];
                                foundP2 = true;
                            }

                            if (foundP1 && foundP2) {
                                break;
                            }
                        }
                    }
                }
            }
        }

        if (this.numActiveActions) {
            super.start();
        }
    }

    /*
        Remove active actions

        @param [number]
    */
    deactivateAction(id) {
        const action = this.activeActions[id];

        for (let i = 0; i < action.numValueKeys; i++) {
            const key = action.valueKeys[i];
            const value = this.values[key];
            const driverIndex = value.drivers.indexOf(id);

            if (driverIndex !== -1) {
                value.drivers.splice(driverIndex, 1);
                value.numDrivers--;
            }
        }

        delete this.activeActions[id];
        this.numActiveActions--;

        if (!this.numActiveActions && this.isActive) {
            super.stop();
        }
    }

    getDefaultValue() {
        return {
            ...super.getDefaultValue(),
            drivers: [],
            numDrivers: 0
        };
    }
}