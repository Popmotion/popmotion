"use strict";

var Sequence = function Sequence() {};

Sequence.prototype = {};

module.exports = Sequence;

var actor1 = new Actor(),
    actor2 = new Actor(),
    setGradient = new Role({
    onChange: function onChange(output) {
        this.element.setAttribute(output.test);
    },
    get: function get() {
        return this.element.getAttribute(key);
    }
}),

// you can add a role to either an action or the actor

moveRight = new Action();

foo = new Tween({
    translateX: 400,
    translateY: '+=70'
});

/*
    foo = set of controls
        .play()
 */

var moveRight = actor1.action(foo).as(CSSRole.map({
    x: 'translateX',
    y: 'translateY'
}), setGradient);

actor1.as(CSSRole).set('display', 'block').play(foo);

moveRight.start();

springBack = new Simulate.Spring({
    translateX: 40,
    translateY: 60
}, {
    friction: .25,
    spring: 300
});

drag = new Listen({
    translateX: 'x',
    translateY: 'y'
});

pointer = new Input(event);

box.play(foo);
box.run(springBack).then(function () {
    return box.play(roll);
}).then(function () {
    return ball.flip();
});

box.track(drag, pointer);