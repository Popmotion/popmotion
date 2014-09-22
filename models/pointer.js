"use strict";

var calc = require('../utils/calc.js'),
    defaults = require('../opts/defaults.js'),
    util = require('../utils/utils.js'),
    History = require('../controllers/history.js'),
    Point = require('./point.js'),
    Offset = require('./offset.js'),
    Velocity = require('./velocity.js'),
    PointerController = function () {},
    pointerController;

PointerController.prototype = {
    
    current: new Point(),
    history: undefined,
    inactiveFrames: 0,
    isDrag: false,
    isTouch: false,
    offset: new Offset(),
    origin: new Point(),
    velocity: new Velocity(),
    
    /*
        Initalise the pointer
        
        @param [object]: Coordinates of init point
        @param [boolean]: True if mouse is pointer
        @param [boolean]: True if this is a drag event
    */
    init: function (point, isTouch, isDrag) {
        point = new Point(point);

        this.history = new History(point);
        this.current = point;
        this.origin = point;
        this.isTouch = isTouch;
        this.isDrag = isDrag;
        this.offset = new Offset();
        this.velocity = new Velocity();
    },
    
    
    /*
        Pointer input has moved, add to history
        
        @param [object]: Coordinates of new point
    */
    moved: function (point) {
        point = new Point(point);
        this.history.add(point);
    },
    
    
    /*
        Check for movement and update pointer object's properties on new frame
    */
    update: function () {
        var latestPointer = this.history.getLatest(),
            pointerActive = util.hasMoved(this.current, latestPointer),
            movement;
        
        // Pointer has moved between frames, update pointer props 
        if (pointerActive) {

            // Calculate velocity from last position
            movement = calc.offset(this.current, latestPointer);
            this.velocity = new Velocity(
                movement.angle,
                movement.distance,
                //calc.distance1D(this.offset.angle, movement.angle),
                movement.x,
                movement.y,
                movement.z
            );

            // Update current coordinates
            this.current = latestPointer;
            
            // Reset inactive frame count
            this.inactiveFrames = 0;
            
        // Pointer is inactive and frame limit reached
        } else if (!pointerActive && this.inactiveFrames >= defaults.pointer.maxInactiveFrames) {
            
            // Set speed to zero
            this.velocity = new Velocity();

        // Pointer is inactive
        } else {
            // Increment inactive frame counter
            this.inactiveFrames++;
        }
    }
};

pointerController = new PointerController();

module.exports = pointerController;