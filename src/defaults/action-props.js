module.exports = {
    // [string]: What to use to process this aciton
    rubix: 'play',
    
    // [number]: Multiply output value by
    amp: 1,
    
    // [number]: Multiply output value outside min/max by
    escapeAmp: 0,
    
    // [number]: Delay this action by x ms
    delay: 0,
    
    // [number]: Time of animation (if animating) in ms
    duration: 400,
    
    // [string]: Ease animation
    ease: 'easeInOut',
    
    // [number]: Multiply progress by this (.5 is half speed)
    dilate: 1,
    
    // [int]: Number of frames Action has been inactive
    inactiveFrames: 0,
    
    // [number]: Number of frames of no change before Action is declared inactive
    maxInactiveFrames: 3,
    
    // [boolean || number]: Number of times to loop values, true for indefinite
    loop: false,
    
    // [boolean || number]: Number of times to yoyo values, true for indefinite
    yoyo: false,
    
    // [boolean || number]: Number of times to flip values, true for indefinite
    flip: false,
    
    // [function]: Callback when Action process starts
    onStart: undefined,
    
    // [function]: Callback when any value changes
    onChange: undefined,
    
    // [function]: Callback every frame
    onFrame: undefined,
    
    // [function]: Callback when Action process ends
    onEnd: undefined
};