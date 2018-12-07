export class AuthDetail {
    guid  : string;
    login : string;
    token : string;
    password : string;

    public clear() {
        this.guid = null;
        this.login = null;
        this.token = null;
        this.password = null;
    }
}