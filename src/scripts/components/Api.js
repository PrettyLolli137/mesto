export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
        this._authorization = options.headers.authorization
    }

    // Приватный метод для проверки ответа сервера
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    // Получение информации о пользователе
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: { authorization: this._authorization }
        })
            .then(this._checkResponse);
    }

    // Редактирование информации о пользователе
    setUserInfo(data) {
        console.log(data);
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.job,
            })
        })
            .then(this._checkResponse);
    }

    // Изменение аватара пользователя
    updateUserAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.url,
            })
        })
            .then(this._checkResponse);
    }

    // Получение списка карточек
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    // Добавление новой карточки
    addCard(cardInfo) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: cardInfo.name,
                link: cardInfo.link,
            })
        })
            .then(this._checkResponse);
    }

    // Удаление карточки
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: { authorization: this._authorization }
        })
            .then(this._checkResponse);
    }

    // Поставить лайк карточке
    likeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: { authorization: this._authorization }
        })
            .then(this._checkResponse);
    }

    // Убрать лайк с карточки
    unlikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: { authorization: this._authorization }
        })
            .then(this._checkResponse);
    }
}



/*

                avatar: dataUser.url,


    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
        this._authorization = options.headers.authorization;
    }

    //Проверка
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ой! Ошибка: ${res.status}`);
    }

    //Загрузка информации о пользователе с сервера
    getProfileInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: { authorization: this._authorization }
        })
            .then(this._checkResponse);
    }

    //Загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: { authorization: this._authorization }
        })
            .then(this._checkResponse);
    }

    //Редактирование профиля
    patchProfileInfo(dataUser) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: dataUser.username,
                about: dataUser.job,
            })
        })
            .then(this._checkResponse);
    }

    //Обновление аватара пользователя
    patchAvatar(dataUser) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: dataUser.avatar,
            })
        })
            .then(this._checkResponse);
    }

    //Добавление новой карточки
    postNewCard(dataCard) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: dataCard.name,
                link: dataCard.link,
            })
        })
            .then(this._checkResponse);
    }

    // Постановка лайка
    putLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: { authorization: this._authorization }
        })
            .then(this._checkResponse);
    }

    // Снятие лайка
    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: { authorization: this._authorization }
        })
            .then(this._checkResponse)
    }

    //Удаление карточки
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: { authorization: this._authorization }
        })
            .then(this._checkResponse)
    }
}
*/