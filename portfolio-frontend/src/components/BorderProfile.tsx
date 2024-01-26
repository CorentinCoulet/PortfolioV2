import photo from "../../public/moi.jpg";
import '../styles/borderProfile.scss';

const BorderProfile = () => {

    return (
        <div className="boxImg">
            <img src={photo} alt="moi" className="ma tête"/>
        </div>   
    );
}

export default BorderProfile;