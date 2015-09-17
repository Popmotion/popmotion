var Action = require('./Action.es6');

class Sync extends Action {
   /*
        Process new value
        
        Return existing current
        
        @param [Value]: Current value
    */
    process(value) {
        return value.current;
    }
    
    /*
        Has Action ended?
        
        Returns true to end immedietly
        
        @return [boolean]: true
    */
    hasEnded() {
        return true;
    }
}

module.exports = Sync;