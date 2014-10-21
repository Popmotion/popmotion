/*
	Bezier function generator
        
    Gaëtan Renaudeau's original BezierEasing
    You're a hero
    https://github.com/gre/bezier-easing/blob/master/index.js  
    https://github.com/gre/bezier-easing/blob/master/LICENSE
*/
"use strict";

var newtonIterations = 8,
  	newtonMinSlope = 0.001,
  	subdivisionPrecision = 0.0000001,
  	subdivisionMaxIterations = 10,
  	kSplineTableSize = 11,
	kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
	float32ArraySupported = 'Float32Array' in global,

	Bezier = function (mX1, mY1, mX2, mY2) {
		var self = this;
		
		this.precompute(mX1, mY1, mX2, mY2);

    	return function (t) {
    		return self.calcBezier(self.getTForX(t, mX1, mX2), mY1, mY2);
    	}
    };
    
Bezier.prototype = {

	precompute: function (mX1, mY1, mX2, mY2) {
		this.mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
		this.calcSampleValues(mX1, mX2);
	},
	
	calcSampleValues: function (mX1, mX2) {
		for (var i = 0; i < kSplineTableSize; ++i) {
			this.mSampleValues[i] = this.calcBezier(i * kSampleStepSize, mX1, mX2);
		}
	},

	newtonRaphsonIterate: function (t, guess, mX1, mX2) {
		var i = 0,
			currentSlope,
			currentX;
		
		for (i; i < newtonIterations; ++i) {
			currentSlope = this.getSlope(guess, mX1, mX2);
			
			if (currentSlope !== 0.0) {
				currentX = this.calcBezier(guess, mX1, mX2) - t;
				guess -= currentX / currentSlope;
			}
		}
		return t;
	},
	
	binarySubdivide: function (t, aA, aB, mX1, mX2) {
		var i = 0,
			currentX,
			currentT;
			
		do {
			currentT = aA + (aB - aA) / 2.0;
			currentX = this.calcBezier(currentT, mX1, mX2) - t;
			
			if (currentX > 0.0) {
				aB = currentT;
			} else {
				aA = currentT;
			}
		} while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
		
		return currentT;
	},

	getTForX: function (t, mX1, mX2) {
		var intervalStart = 0.0,
			currentSample = 1,
			lastSample = kSplineTableSize - 1,
			dist,
			guess,
			initialSlope;
			
		for (intervalStart; currentSample != lastSample && this.mSampleValues[currentSample] <= t; ++currentSample) {
			intervalStart += kSampleStepSize;
		}
		
		--currentSample;

		dist = (t - this.mSampleValues[currentSample] / (this.mSampleValues[currentSample + 1] - this.mSampleValues[currentSample]));
		
		guess = intervalStart + dist * kSampleStepSize;
		initialSlope = this.getSlope(guess, mX1, mX2);

		if (initialSlope === newtonMinSlope) {
			t = this.newtonRaphsonIterate(t, guess, mX1, mX2);
		} else if (initialSlope == 0.0) {
			t = guess;
		} else {
			t = this.binarySubdivide(t, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
		}
		return t;
	},

	getSlope: function (t, a1, a2) {
		return 3.0 * this.A(a1, a2) * t * t + 2.0 * this.B(a1, a2) * t + this.C(a1);
	},

	calcBezier: function (t, a1, a2) {
		return ((this.A(a1, a2) * t + this.B(a1, a2)) * t + this.C(a1)) * t;
	},
	
	A: function (a1, a2) {
		return 1.0 - 3.0 * a2 + 3.0 * a1;
	},
	
	B: function (a1, a2) {
		return 3.0 * a2 - 6.0 * a1;
	},
	
	C: function (a1) {
		return 3.0 * a1;
	}
};

module.exports = Bezier;