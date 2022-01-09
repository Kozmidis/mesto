export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this.nameUser = document.querySelector(nameSelector);
        this.jobUser = document.querySelector(jobSelector);
        this.avatarUser = document.querySelector(avatarSelector);
    }

    setUserInfo(data) {
        this.nameUser.textContent = data.name;
        this.jobUser.textContent = data.about;
        this.avatarUser.src = data.avatar;
        this.avatarUser.alt = data.name;
    }

    getUserInfo() {
        return {
            name: this.nameUser.textContent,
            about: this.jobUser.textContent,
        };
    }
}