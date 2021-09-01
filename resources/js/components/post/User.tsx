interface responseObjectModel {
    name: string;
    user_name: string;
}

class User {
    private name: string;
    private user_name: string;
    private user_id: string;

    constructor(user_id: string, name: string, user_name: string) {
        this.user_id = user_id;
        this.name = name;
        this.user_name = user_name;
    }

    getId() {
        return this.name;
    }

    getName() {
        return this.name;
    }

    getUserName() {
        return this.user_name;
    }
}

export default User;
