class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  addUser(data) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => this._checkRequest(res));
  }

  authUser(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => this._checkRequest(res));
  }

  getJWT(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => this._checkRequest(res));
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
    })
      .then((res) => this._checkRequest(res));
  }

  getUserProfile() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
      .then((res) => this._checkRequest(res));
  }

  editUserProfile(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then((res) => this._checkRequest(res));
  }

  postMovies(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then((res) => this._checkRequest(res));
  }

  deleteMovies(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
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
 //url: 'http://localhost:3000',
url: 'https://api.grinev.xyz',
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
};

const api = new MainApi(configApi);

export default api;
