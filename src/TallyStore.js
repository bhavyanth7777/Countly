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


class TallyStore {
    getTally(){
        return Object.assign({}, tally);
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
