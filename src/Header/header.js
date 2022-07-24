import "./header.css";
import Logo from "../assests/instaclone.svg";
import Camera from "../assests/camera.gif";

const Header = () => {
    return (
        <>
            <div className="nav">
                <a href="/"> <img src={Logo} alt="insta-logo" id="logo" title="Go to Home Page"></img></a>
                <a href="./postform"><img src={Camera} alt="camera" id="camera" title="Post now your memories!"></img></a>
            </div>
        </>
    )
}
export default Header;