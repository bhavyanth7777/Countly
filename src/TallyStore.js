// Import Event Emitter
import EventEmitter from 'EventEmitter';
// Import the dispatcher
import Dispatcher from './Dispatcher';

// Private variable - stores the application state
var tally = {
    count: 0
};

//Private Mutation Methods - mutates the application state
const increment = () => { 
    tally.count += 1;
}

const decrement = () => {
    tally.count -= 1;
}

const zero = () => {
    tally.count = 0;
}


class TallyStore extends EventEmitter {
    getTally(){
        return Object.assign({}, tally);
    }
    // Public Functions
    addChangeListener(callback) { 
    this.addListener('CHANGE', callback); 
  } 
    removeChangeListener(callback) { 
    this.removeListener('CHANGE', callback); 
  } 
    emitChange() { 
    this.emit('CHANGE'); 
  } 
}

// Receive action and call appropriate function
const handleAction = (action) => {
    switch(action.type){
        case 'INCREMENT':
            increment();
            break;
        case 'DECREMENT':
            decrement();
            break;
        case 'ZERO':
            zero();
            break;
        default:
            //do nothing
    }
    instance.emitChange();
};

Dispatcher.register(handleAction);
const instance = new TallyStore();
export default instance;
