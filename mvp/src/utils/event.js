class Event {
    constructor(sender) {
        this.sender = sender
        this._listeners = []
    }

    attach(callback) {
        this._listeners.push(callback)
    }

    notify(args) {
        for(let i = 0; i < this._listeners.length; i++) {
            this._listeners[i](this.sender, args)
        }
    }
}

export default Event