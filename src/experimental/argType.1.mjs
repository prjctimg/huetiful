import _ from 'lodash';

// argType is a contract that checks the argument type and returns the appropiate mapping rules
export var argType = (arg, cb) => {

    if (typeof arg === []) {
        return _.map(arg, val => cb(val));
    } else if (typeof arg === {}) {
        return _.forIn(arg, (val) => typeof val === [] ? _.map(val, el => cb(el)) : cb(val));
    } else { return cb(arg); }
};
