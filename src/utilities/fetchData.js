const getSuspender = (promise) => {
  let status = 'pending';
  let response;

  const suspender = promise.then(
    (res) => {
      status = 'success';
      response = res;
    },
    (err) => {
      status = 'error';
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };

  return { read };
};

export function fetchData(url, params = {}) {
  if (!('headers' in params)) {
    params.headers = {
      'Content-Type': 'application/json;charset=utf-8',
    };
  }

  if ('body' in params) {
    params.body = JSON.stringify(params.body);
  }

  const promise = fetch(url, params)
    .then((response) => response.json())
    .then((json) => json);

  return getSuspender(promise);
}
