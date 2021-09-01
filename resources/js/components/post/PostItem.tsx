import "../../../css/post-item.css";
import Button from "@material-ui/core/Button";
import { createTheme, Theme, ThemeProvider } from "@material-ui/core/styles";

const noPaddingTextButton: Theme = createTheme({
    overrides: {
        MuiButton: {
            text: {
                padding: "0",
                color: "var(--main-font-color)",
                transition: "color var(--transition-delay)",
            },
            root: {
                background: "var(--card-background)",
            },
        },
    },
});

interface PostItemProps {
    title: string;
    localDate: string;
    description: string;
    thumbnailURL: string;
    customTheme?: Theme;
}

function PostItem(props: PostItemProps) {
    const { title, localDate, description, thumbnailURL, customTheme } = props;
    return (
        <ThemeProvider theme={customTheme ? customTheme : noPaddingTextButton}>
            <Button style={{ width: "100%" }} className="post-item-container">
                <img src={thumbnailURL} alt={`Thumbnail of ${title}`} />
                <div className="right-container">
                    <h2 className="post-title">{title}</h2>
                    <h3 className="post-date">{localDate}</h3>
                    <p className="post-desc">{description}</p>
                </div>
            </Button>
        </ThemeProvider>
    );
}

export default PostItem;
