import IUserService from "../contract/IUserService";
import User from "../model/User";

interface responseObjectModel {
    name: string;
    username: string;
}

class APIv2UserService implements IUserService {
    async getUser(
        id: string,
        callback: (user: User | undefined) => void
    ): Promise<void> {
        try {
            const response = await fetch(`/api/user/${id}`);
            if (!response.ok) throw new Error("Error");
            const user: responseObjectModel = await response.json();
            callback(new User(id, user.name, user.username));
        } catch (error) {
            callback(undefined);
            console.error(
                "APIv2UserService.getUser(): Unable to fetch data from API"
            );
        }
    }
}
export default APIv2UserService;
