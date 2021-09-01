import User from "./User";

interface IUserService {
    getUser(
        id: string,
        callback: (user: User | undefined) => void
    ): Promise<void>;
}

export default IUserService;
