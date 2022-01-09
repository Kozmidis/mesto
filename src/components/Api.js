export default class Api {
    constructor({ address, token }) {
        this._address = address;
        this._token = token;
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
            headers: {
                authorization: this._token,
            },
        }).then(this._resultResponse);
    }

    getUserCards() {
        return fetch(`${this._address}/cards`, {
            method: "GET",
            headers: {
                authorization: this._token,
            },
        }).then(this._resultResponse);
    }

    addCard(data) {
        return fetch(`${this._address}/cards`, {
            method: "POST",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            }),
        }).then(this._resultResponse);
    }

    setUserProfile(data) {
        return fetch(`${this._address}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            }),
        }).then(this._resultResponse);
    }

    editAvatar(data) {
        return fetch(`${this._address}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                avatar: data.avatar,
            }),
        }).then(this._resultResponse);
    }

    removeCard(id) {
        return fetch(`${this._address}/cards/${id}`, {
            method: "DELETE",
            headers: {
                authorization: this._token,
            },
        }).then(this._resultResponse);
    }

    addLike(id) {
        return fetch(`${this._address}/cards/likes/${id}`, {
            method: "PUT",
            headers: {
                authorization: this._token,
            },
        }).then(this._resultResponse);
    }

    removeLike(id) {
        return fetch(`${this._address}/cards/likes/${id}`, {
            method: "DELETE",
            headers: {
                authorization: this._token,
            },
        }).then(this._resultResponse);
    }
}