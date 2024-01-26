import "../styles/navBar.scss";
import twitter from "../../public/twitter.svg";
import linkedin from "../../public/linkedin.svg";
import moi2 from "../../public/moi2.jpg";

const Navbar = () => {
  return (
    <nav className="navBar">
        <div>
            <img src={moi2} alt="ma tête"/>
            <ul>
                <li><a href="#">ACCUEIL</a></li>
                <li><a href="#">OBJECTIFS</a></li>
                <li><a href="#">PROFIL</a></li>
                <li><a href="#">CONTACTS</a></li>
            </ul>
        </div>
        <div>
            <p>SUIVEZ MOI</p>
            <ul>
                <li><a><img src={twitter} alt="logo twitter"/></a></li>
                <li><a><img src={linkedin} alt="logo linkedin"/></a></li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
