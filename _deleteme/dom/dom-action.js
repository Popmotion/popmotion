"use strict";

var Action = require('../action/action.js'),
    calc = require('../utils/calc.js'),
    parse = function () {},
    outputCss = require('./output.js'),
    body,
    
    /*
        Dom Action controller
        
        @param [DOM element]
    */
    DomAction = function (element) {
        this.dom = element;
        this.css = {};
        
        this.action = new Action({
            dom: element,
            scope: this,
            onChange: outputCss
        });
    };
    
DomAction.prototype = {
    /*
        Animate provided properties
        
        @param [object]: Object of valid CSS properties to animate
        @param [number] (optional): Duration in ms
        @param [string] (optional): Name of easing function
        @param [function](optional): onEnd callback
    */
    play: function () {
        this.action.play(parse.playArgs.apply(parse, arguments));
        return this;
    },
    
    /*
        Track
        
        @param [object] (optional): Object of valid CSS properties to track
        @param [event || Input): Originating pointer event or Input
    */
    track: function () {
        this.action.track.apply(this.action, parse.trackArgs.apply(parse, arguments));
        return this;
    },
    
    /*
        
    */
    run: function () {
        this.action.run(parse.valuesToCSS(arguments[0]));
        return this;
    },
    
    /*
        Returns element width
        
        @return [number]: width in px
    */
    width: function () {
        return this.dom.offsetWidth;
    },
    
    /*
        Returns element height
        
        @return [number]: height in px
    */
    height: function () {
        return this.dom.offsetHeight;
    },
    
    /*
        Returns absolute pageX
        
        @return [number]: pageX in px
    */
    x: function () {
        return this.rect().x;
    },
    
    /*
        Returns absolute pageY
        
        @return [number]: pageY in px
    */
    y: function () {
        return this.rect().y;
    },
    
    /*
        Returns X of element center
        
        @return [number]: Element center X in px
    */
    centerX: function () {
        return this.rect().centerX;
    },
    
    /*
        Returns Y of element center
        
        @return [number]: Element center Y in px
    */
    centerY: function () {
        return this.rect().centerY;
    },
    
    /*
        Radius of element (if element is circular)
        
        @return [number]: Radius of element
    */
    radius: function () {
        return this.width() / 2;
    },
    
    /*
        Returns element position relative to viewport
            left/right/top/bottom/width/height
        
        @return [object]: Element position
    */
    clientRect: function () {
        return this.dom.getBoundingClientRect();
    },
    
    /*
        Returns element position relative to viewport
        and document
            Viewport: left/right/top/bottom/width/height
            Document: x/y/centerX/centerY
    */
    rect: function () {
        var rect = this.clientRect(),
            bodyRect = body.clientRect();
        
        rect.x = rect.left - bodyRect.left;
        rect.y = rect.top - bodyRect.top;
        rect.centerX = rect.x + (rect.width / 2);
        rect.centerY = rect.y + (rect.height / 2);
        
        return rect;
    },
    
    centerDistance: function () {
        var rect = this.rect(),
            targetRect = target.rect();
            
        return redshift.calc.distance2D({
                x: rect.centerX,
                y: rect.centerY
            },{
                x: targetRect.centerX,
                y: targetRect.centerY
            });
    },

    /*
        Return distance between two circular objects
        
        @param [Core]: Target element
        @return [number]: Distance in px
    */
    radialDistance: function (target) {
        var rect = this.rect(),
            targetRect = target.rect(),
            thisRadius = rect.width / 2,
            targetRadius = targetRect.width / 2,
            centerDistance = calc.distance2D({
                x: rect.centerX,
                y: rect.centerY
            },{
                x: targetRect.centerX,
                y: targetRect.centerY
            });
            
        return centerDistance - targetRadius - thisRadius;
    },
    
    /*
        Check for radial collision with target
        
        @param [Core]: Target element
        @return [boolean]: True if collision
    */
    radialCollision: function (target) {
        return (this.radialDistance(target) <= 0) ? true : false;
    }
};

// Create a single reference to the body tag
body = new DomAction(document.body);
    
module.exports = DomAction;