class File {
    private file_name: string;
    private url: string;

    constructor(file_name: string, url: string) {
        this.file_name = file_name;
        this.url = url;
    }

    getFileName() {
        return this.file_name;
    }

    getUrl() {
        return this.url;
    }
}

export default File;
