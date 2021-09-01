interface PostOptionalAttributes {
    description?: string;
    slug?: string;
    author?: string;
    sanitizedHtml?: string;
}

class Post {
    private title: string;
    private dateISOFormatString: string;
    private coverFileName: string;
    private postOptionalAttributes?: PostOptionalAttributes;

    constructor(
        title: string,
        dateISOFormatString: string,
        coverFileName: string,
        postOptionalAttributes?: PostOptionalAttributes
    ) {
        this.title = title;
        this.dateISOFormatString = dateISOFormatString;
        this.coverFileName = coverFileName;
        this.postOptionalAttributes = postOptionalAttributes;
    }

    getTitle(): string {
        return this.title;
    }

    getDateISOFormatString(): string {
        return this.dateISOFormatString;
    }

    getLocalDateString(): string {
        return new Date(this.getDateISOFormatString()).toLocaleString();
    }

    getCoverFileName(): string {
        return this.coverFileName;
    }

    getDescription(): string | undefined {
        return this.postOptionalAttributes?.description;
    }

    getSlug(): string | undefined {
        return this.postOptionalAttributes?.slug;
    }

    getAuthor(): string | undefined {
        return this.postOptionalAttributes?.author;
    }

    getSanitizedHtml(): string {
        if (this.postOptionalAttributes?.sanitizedHtml)
            return this.postOptionalAttributes.sanitizedHtml;
        return "<h1>No content available</h1>";
    }

    getURL(): string | undefined {
        if (!this.getSlug()) return this.getSlug();
        return `/post/${this.getSlug()}`;
    }
}

export default Post;
