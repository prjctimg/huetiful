function _iterator(_module = {}, _data = {}) {
  for (const [func, args] of Object.entries(_data)) {
    it(args['description'], () => {
      expect(_module[func](...args['params'])).toEqual(args['expect']);
    });
  }
}

export default _iterator;
