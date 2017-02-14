class Dispatcher {
    constructor() {
        this.isDispatching = false;
    }
    dispatch(action) {
        if (this.isDispatching) {
            throw new Error('Cannot dispatch in the middle of a dispatch');
        }
        this.isDispatching = true;
        // TODO: Pass to stores
        this.isDispatching = false;
    }
}

export default new Dispatcher();