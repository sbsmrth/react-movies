
export async function fetchData(url, params = {}) {
  if (!('headers' in params)) {
    params.headers = {
      'Content-Type': 'application/json;charset=utf-8',
    };
  }

  if ('body' in params) {
    params.body = JSON.stringify(params.body);
  }

  return fetch(url, params)
    .then((response) => response.json());

}
