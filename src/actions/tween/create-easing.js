import Bezier from './Bezier';

/*
    Mirror easing
    
    Mirrors the provided easing function, used here for mirroring an
    easeIn into an easeInOut
    
    @param [number]: Progress, from 0 - 1, of current shift
    @param [function]: The easing function to mirror
    @returns [number]: The easing-adjusted delta
*/
const mirrorEasing = method => (progress, strength) => (progress <= 0.5) ? method(2 * progress, strength) / 2 : (2 - method(2 * (1 - progress), strength)) / 2;
        
/*
    Reverse easing
    
    Reverses the output of the provided easing function, used for flipping easeIn
    curve to an easeOut.
    
    @param [number]: Progress, from 0 - 1, of current shift
    @param [function]: The easing function to reverse
    @returns [number]: The easing-adjusted delta
*/
const reverseEasing = method => (progress, strength) => 1 - method(1 - progress, strength);

/*
    Easing class

    If provided easing function, returns easing function with 
    in/out/inOut variations

    If provided four arguments, returns new Bezier class instead.
*/
export default function createEasing (x1, y1, x2, y2) {
    const method = x1;
    let easingFunction;

    // If this is a bezier curve, return a bezier function
    if (arguments.length > 1) {
        easingFunction = new Bezier(x1, y1, x2, y2);

    } else {
        easingFunction = (progress, strength) => method(progress, strength);
        easingFunction.in = (progress, strength) => method(progress, strength);
        easingFunction.out = reverseEasing(method);
        easingFunction.inOut = mirrorEasing(method);
    }

    return easingFunction;
}
