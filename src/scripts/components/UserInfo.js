export default class UserInfo {
    constructor(input) {
        this._profileName = document.querySelector(input.profileNameSelector);
        this._profileJob = document.querySelector(input.profileJobSelector);
        this._profileAvatar = document.querySelector(input.profileImgSelector);

    }

    // Возвращает объект с данными пользователя, которые вставляются в форму при открытии попапа
    getUserInfo() {
        return {
            username: this._profileName.textContent,
            job: this._profileJob.textContent,
        };
    }
    // Принимает новые данные пользователя и добавляет их в профиль
    setUserInfo({username,job, avatar }) {
        this._profileName.textContent = username;
        this._profileJob.textContent = job;
        this._profileAvatar.src = avatar;
    }
   
}

/*
export default class UserInfo {
    constructor(input) {
        this._profileName = document.querySelector(input.profileNameSelector); 
        this._profileJob = document.querySelector(input.profileJobSelector); 
        
        this._profileAvatar = document.querySelector(input.profileImgSelector);
        this._profileAvatar.src = avatar;

    }

    //возвращает объект с данными пользователя, которые вставляются в форму при открытии попапа
    getUserInfo() {
        return { username: this._profileName.textContent, job: this._profileJob.textContent};
    }

    //принимает новые данные пользователя и добавляет их в профиль
    setUserInfo(inputNewInfo) {
        this._profileName.textContent = inputNewInfo.username;
        this._profileJob.textContent = inputNewInfo.job;
        
    }
}

*/