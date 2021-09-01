import File from "../model/File";

interface IFileService {
    getFile(
        file_name: string,
        callback: (file: File | undefined) => void
    ): Promise<void>;
}

export default IFileService;
