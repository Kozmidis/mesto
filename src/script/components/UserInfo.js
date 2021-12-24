export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this.nameUser = document.querySelector(nameSelector);
        this.jobUser = document.querySelector(jobSelector);
    }

    setUserInfo(data) {
        this.nameUser.textContent = data.user;
        this.jobUser.textContent = data.userjob;
    }

    getUserInfo() {
        return {
            name: this.nameUser.textContent,
            job: this.jobUser.textContent,
        };
    }
}