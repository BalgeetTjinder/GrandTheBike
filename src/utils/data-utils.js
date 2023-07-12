const handlePromise = (promise) => {
    return promise
      .then(data => ([data, undefined]))
      .catch(error => Promise.resolve([undefined, error]));
}

const handleRequest = (fn, msg) => async (...args) => await fn(...args).catch(e => Error(`${msg} caused by: ${e}`));

export {
  handlePromise,
  handleRequest
};
