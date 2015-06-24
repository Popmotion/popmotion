module.exports = {
    // [number]: Current target value
    to: undefined,

    // [number]: Maximum permitted value during .track and .run
    min: undefined,
    
    // [number]: Minimum permitted value during .track and .run
    max: undefined,
    
    // [number]: Origin
    origin: 0,
    
    // [boolean]: Set to true when both min and max detected
    hasRange: false,

    // [boolean]: Round output if true
    round: false,
    
    // [string]: Route
    route: 'values',
    
    // [string]: Non-namespaced output value
    name: '',
    
    // [string]: Unit string to append to value on ourput
    unit: undefined,
    
    parent: '',
    
    unitName: '',

    /*
        Link properties
    */

    // [string]: Name of value to listen to
    link: undefined,
    
    // [array]: Linear range of values (eg [-100, -50, 50, 100]) of linked value to map to .mapTo
    mapLink: undefined,
    
    // [array]: Non-linear range of values (eg [0, 1, 1, 0]) to map to .mapLink - here the linked value being 75 would result in a value of 0.5
    mapTo: undefined,
    
	// [number]: Factor of input movement to direct output
	amp: 1,


    /*
        .run() properties
    */

    /*
        .play() properties
    */

    /*
        .track() properties
    */

    // [number]: Factor of movement outside of maximum range (ie 0.5 will move half as much as 1)
    escapeAmp: 0
};