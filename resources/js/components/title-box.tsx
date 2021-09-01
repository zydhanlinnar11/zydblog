import "../../css/title-box.css";

interface TitleBoxProps {
    title: string;
    backgroundURL: string;
}

const TitleBox = (props: TitleBoxProps) => {
    const { title, backgroundURL } = props;
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundURL})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="title-box-container"
        >
            <h1 className="title-box-post-title">{title}</h1>
        </div>
    );
};

export default TitleBox;
