module.exports = {
    // [boolean]: True if Action is current active
    active: false,
    
    // [number]: Progress represented in a range of 0 - 1
    progress: 0,
    
    // [int]: Time elapsed in milliseconds
    elapsed: 0,
    
    // [int]: Number of frames Action has been inactive
    inactiveFrames: 0,
    
    // [int]: 1 = forward, -1 = backwards
    playDirection: 1,
    
    // [int]: Number of times values have been flipped
    flipCount: 0,
    
    // [int]: Number of times values have been looped
    loopCount: 0,
    
    // [int]: Number of times values have been yoyoed
    yoyoCount: 0
};