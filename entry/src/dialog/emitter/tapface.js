function tapfaceEmitter(app) {
  return (args, cb) => {
    app.on('tapface', cb);
  };
}

export {
  tapfaceEmitter
};
