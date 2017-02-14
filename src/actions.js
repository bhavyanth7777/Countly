import Dispatcher from './Dispatcher';
// ACTION CREATORS

export const increment = () => {
    const action = {
        type: 'INCREMENT'
    };
    Dispatcher.dispatch(action);
};

export const decrement = ()=> {
    const action = {
        type: 'DECREMENT'
    };
    Dispatcher.dispatch(action);
};

export const zero = ()=> {
    const action = {
        type: 'ZERO'
    }
    Dispatcher.dispatch(action);
};