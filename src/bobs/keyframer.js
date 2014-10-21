/*
	Keyframer
*/
"use strict";

var KEY = require('../opts/keys.js'),
	calc = require('../utils/calc.js'),
	Keyframer = function () {},
	keyframer,
	testPos = 0.5,
	keyframes = [
		{
			position: 0,
			target: 300,
			x: 5
		},
		{
			position: 30,
			target: 500,
			x: 20
		},
		{
			position: 35,
			target: 800,
			x: 20
		},
		{
			position: 78,
			target: 1000,
			x: 30
		},
		{
			position: 100,
			target: 1100,
			x: 100
		}
	];

Keyframer.prototype = {
	
	getRanges: function () {
		var keyframe,
			pos = testPos * 100;
		
		this.search(keyframes, pos);
	},
	
	search: function (kf, pos) {
		var numKeyframes = kf.length,
			lastPosition = kf[numKeyframes - 1].position,
			found = false,
			output = {},
			i = 0;
		
		for (i; i < numKeyframes; i++) {
			if (kf[i].position > pos || kf[i].position === lastPosition) {
				found = true;
				output = this.createRange(kf[i-1], kf[i], pos);
			} else if (kf[i].position === pos) {
				found = true;
				output = this.createRange(kf[i], kf[i+1], pos);
			} 
			
			if (found === true) {
				break;
			}
		}
		
		console.log(output);
	},
	
	createRange: function (from, to, pos) {
		var key,
			output = {
				values: {}
			};
		
		for (var key in from) {
			if (from.hasOwnProperty(key)) {
				output.values[key] = {
					from: from[key],
					to: to[key]
				};	
			}
		}
		
		output.progress = calc.progress(pos, from.position, to.position);
		
		return output;
	}
	
};

keyframer = new Keyframer();

module.exports = keyframer;