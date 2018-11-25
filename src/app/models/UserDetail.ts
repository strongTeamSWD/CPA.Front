export class UserDetail {
    guid  : string;
    login : string;
    token : string;

    public clear() {
        this.guid = null;
        this.login = null;
        this.token = null;
    }
}