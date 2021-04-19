class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getMovies() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: this._headers,
    })
      .then((res) => this._checkRequest(res));
  }

  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }
}

const configApi = {
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: { 'Content-Type': 'application/json'},
};

const moviesApi = new MoviesApi(configApi);

export default moviesApi;
