"use strict";

var // [number]: Default max size of history
    maxHistorySize = 3,
    
    /*
        History constructor
        
        @param [var]: Variable to store in first history slot
        @param [int] (optional): Maximum size of history
    */
    History = function (obj, max) {
        this.max = max || maxHistorySize;
        this.entries = [];
        this.add(obj);
    };
    
History.prototype = {
    
    /*
        Push new var to history
        
        Shift out oldest entry if we've reached maximum capacity
        
        @param [var]: Variable to push into history.entries
    */
    add: function (obj) {
        var currentSize = this.getSize();
        
        this.entries.push(obj);
        
        if (currentSize >= this.max) {
            this.entries.shift();
        }
    },
    
    /*
        Get variable at specified index

        @param [int]: Index
        @return [var]: Var found at specified index
    */
    get: function (i) {
        i = (typeof i === 'number') ? i : this.getSize() - 1;

        return this.entries[i];
    },
    
    /*
        Get the second newest history entry
        
        @return [var]: Entry found at index size - 2
    */
    getPrevious: function () {
        return this.get(this.getSize() - 2);
    },
    
    /*
        Get current history size
        
        @return [int]: Current length of entries.length
    */
    getSize: function () {
        return this.entries.length;
    }
    
};

module.exports = History;