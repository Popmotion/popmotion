/*
    Anatomy of a Rubix:
    
        Props
            surpressMethod [boolean]:
                If not true, will create Action shorthand method 
                with the name of the rubix, ie .play()

            calculatesVelocity [boolean]:
                Set to true if your Rubix will calculate
                the new Value velocity (otherwise Redshift may override it)
                
        Methods
            updateInput
                Run once per frame, before Values are processed. .play uses this
                to update the timer, .track uses it to check the input device.

                @param [Action]: The Action being processed
                @param [object]: Action properties
                @param [int]: Duration since the last frame in milliseconds
            
            process (required)
                Run once for every Action value, this method returns the latest value

                @param [string]: Name of value being processed
                @param [Value]: Value being processed
                @param [object]: Action values
                @param [object]: Action properties
                @param [Action]: Action
                @param [int]: Duration since the last frame in milliseconds
                @return [int]: Latest value
                
            limit
                Run once for every Action value, this can be used to limit the value
                within any parameters
                
                @param [int]: Value returned from process method
                @param [Value]: Value being processed
                @return [int]: Latest value
                
            hasEnded (required)
                Returns true if this current Action has ended. Redshift will
                then check the Action's queue or yoyo/loop properties to decide
                what action to take next
                
                @param [Action]: Action being processed
                @param [boolean]: True if any value has changed
*/            
module.exports = {};