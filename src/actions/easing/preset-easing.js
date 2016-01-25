/*
    Easing functions
    ----------------------------------------
    
    Generates and provides easing functions based on baseFunction definitions
    
    A call to easingFunction.get('functionName') returns a function that can be passed:
        @param [number]: Progress 0-1
        @param [number] (optional): Amp modifier, only accepted in some easing functions
                                    and is used to adjust overall strength
        @return [number]: Eased progress
        
    We can generate new functions by sending an easing function through easingFunction.extend(name, method).
    Which will make nameIn, nameOut and nameInOut functions available to use.
        
    Easing functions from Robert Penner
    http://www.robertpenner.com/easing/
        
    Bezier curve interpretor created from Gaëtan Renaudeau's original BezierEasing  
    https://github.com/gre/bezier-easing/blob/master/index.js  
    https://github.com/gre/bezier-easing/blob/master/LICENSE

    Anticipate easing created by Elliot Gino
    https://twitter.com/ElliotGeno
*/
// Imports
import easingFunction from './create-easing';
import cubicBezier from './create-bezier';
import { each } from '../../inc/utils';

// Values
const DEFAULT_BACK_STRENGTH = 1.525;
const DEFAULT_POW_STRENGTH = 2;

// Utility functions
const generatePowerEasing = strength => (progress, strength) => baseEasing.ease(progress, strength);

/*
    Each of these base functions is an easeIn
    
    On init, we use .mirror and .reverse to generate easeInOut and
    easeOut functions respectively.
*/
let baseEasing = {
    ease: (progress, strength = DEFAULT_POW_STRENGTH) => progress ** strength,
    circ: progress => 1 - Math.sin(Math.acos(progress)),
    back: (progress, strength = DEFAULT_BACK_STRENGTH) => (progress * progress) * ((strength + 1) * progress - strength)
};

['cubic', 'quart', 'quint'].forEach((easingName, i) => baseEasing[easingName] = generatePowerEasing(i + 3));

// Generate in/out/inOut variations
each(baseEasing, (baseEase, key) => {
    let easingFunction = easingFunction(baseEase);
    baseEasing[`${key}In`] = easingFunction.in;
    baseEasing[`${key}Out`] = easingFunction.out;
    baseEasing[`${key}InOut`] = easingFunction.inOut;
});

baseEasing.linear = progress => progress;
baseEasing.anticipate = (progress, strength = DEFAULT_BACK_STRENGTH) =>
    ((progress*=2) < 1) ? 0.5 * baseEasing.backIn(progress, strength) :  0.5 * (2 - Math.pow(2, -10 * (progress - 1)));

baseEasing.easingFunction = easingFunction;
baseEasing.cubicBezier = cubicBezier;
baseEasing.modifyEase = (easing, ...args) => (progress) => easing(progress, ...args);

export default baseEasing;