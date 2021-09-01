import IFileService from "../contract/IFileService";
import File from "../model/File";
import User from "../model/User";

interface responseObjectModel {
    file_name: string;
    url: string;
}

class APIv2FileService implements IFileService {
    async getFile(
        file_name: string,
        callback: (file: File | undefined) => void
    ): Promise<void> {
        try {
            const response = await fetch(`/api/file/${file_name}`);
            if (!response.ok) throw new Error("Error");
            const file: responseObjectModel = await response.json();
            callback(new File(file.file_name, file.url));
        } catch (error) {
            callback(undefined);
            console.error(
                "APIv2FileService.getFile(): Unable to fetch data from API"
            );
        }
    }
}
export default APIv2FileService;
