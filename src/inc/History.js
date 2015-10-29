const maxHistorySize = 3;

class History {

    /*
        History constructor
        
        @param [var]: Variable to store in first history slot
        @param [int] (optional): Maximum size of history
    */
    constructor(obj, max = maxHistorySize) {
        this.max = max;
        this.entries = [];
        this.add(obj);
    }

    /*
        Push new var to history
        
        Shift out oldest entry if we've reached maximum capacity
        
        @param [var]: Variable to push into history.entries
    */
    add(obj) {
        this.entries.push(obj);
        
        if (this.getSize() >= this.max) {
            this.entries.shift();
        }
    }
    
    /*
        Get variable at specified index

        @param [int]: Index
        @return [var]: Var found at specified index
    */
    get(i = this.getSize() - 1) {
        return this.entries[i];
    }
    
    /*
        Get the second newest history entry
        
        @return [var]: Entry found at index size - 2
    */
    getPrevious() {
        return this.get(this.getSize() - 2);
    }
    
    /*
        Get current history size
        
        @return [int]: Current length of entries.length
    */
    getSize() {
        return this.entries.length;
    }
}

module.exports = History;