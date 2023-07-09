export default function curry(fn) {
    return curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args)
        }
        return fn(...args)
    }
}
