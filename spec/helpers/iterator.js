function iterator(mod, data) {
  for (const [func, args] of Object.entries(data)) {
    it(args['description'], () => {
      expect(mod[func](...args['params'])).toEqual(args['expect']);
    });
  }
}

export default iterator;
