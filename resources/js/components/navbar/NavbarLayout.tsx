import "../../../css/navbar.css";
import blogConfig from "../../utilities/config";
import getNavbarButtons from "./NavbarButtons";

function NavbarLayout() {
    return (
        <header>
            <nav>
                <h1>{blogConfig.getBlogName()}</h1>
                <div className="nav-btn-group">{getNavbarButtons()}</div>
            </nav>
        </header>
    );
}

export default NavbarLayout;
