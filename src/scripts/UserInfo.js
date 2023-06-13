export default class UserInfo {
    constructor(input) {
        this._profileName = document.querySelector(input.profileNameSelector); 
        this._profileJob = document.querySelector(input.profileJobSelector); 
    }

    //возвращает объект с данными пользователя, которые вставляются в форму при открытии попапа
    getUserInfo() {
        return { username: this._profileName.textContent, job: this._profileJob.textContent };
    }

    //принимает новые данные пользователя и добавляет их в профиль
    setUserInfo(inputNewInfo) {
        this._profileName.textContent = inputNewInfo.username;
        this._profileJob.textContent = inputNewInfo.job;
    }
}