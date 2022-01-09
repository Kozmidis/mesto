export default class Api {
    constructor(data) {
        this._address = data.address;
        this._headers = data.headers;
    }

    _resultResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getUserProfile() {
        return fetch(`${this._address}/users/me`, {
            method: "GET",
            headers: this._headers,
        }).then(this._resultResponse);
    }

    getUserCards() {
        return fetch(`${this._address}/cards`, {
            method: "GET",
            headers: this._headers,
        }).then(this._resultResponse);
    }

    addCard(data) {
        return fetch(`${this._address}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            }),
        }).then(this._resultResponse);
    }

    setUserProfile(data) {
        return fetch(`${this._address}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            }),
        }).then(this._resultResponse);
    }

    editAvatar(data) {
        return fetch(`${this._address}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            }),
        }).then(this._resultResponse);
    }

    removeCard(id) {
        return fetch(`${this._address}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._resultResponse);
    }

    addLike(id) {
        return fetch(`${this._address}/cards/likes/${id}`, {
            method: "PUT",
            headers: this._headers,
        }).then(this._resultResponse);
    }

    removeLike(id) {
        return fetch(`${this._address}/cards/likes/${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._resultResponse);
    }
}