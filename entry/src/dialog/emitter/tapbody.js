function tapbodyEmitter(app) {
  return (args, cb) => {
    app.on('tapbody', cb);
  };
}

export {
  tapbodyEmitter
};
