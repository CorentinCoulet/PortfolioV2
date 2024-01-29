import "../styles/objectifs.scss";
import Arrow from "../../public/right-arrow.png";

const Objectifs = () => {
  return (
    <div className="objectifs">
        <p>Objectifs</p>
        <h2>Ce que je souhaite faire</h2>
        <ul>
            <li>
                <div className="service">
                    <h3>Développeur Back-End</h3>
                    <div>
                        Le développeur Back-end programme 
                        la partie cachée d'une solution web,
                        le côté serveur, admistrateur d'une app
                        ou d'un site web.
                    </div> 
                    <a>
                        <img src={Arrow} alt="flèche droite" className="feather-arrow-right"></img>
                    </a> 
                </div>
            </li>
            <li>
                <div className="service">
                    <h3>Développeur Front-End</h3>
                    <div>
                        Le développeur Front-End programme la partie
                        visible, l'interface utilisateur d'une app ou
                        d'un site web.
                    </div>  
                    <a>
                        <img src={Arrow} alt="flèche droite" className="feather-arrow-right"></img>
                    </a>
                </div>
            </li>
            <li>
                <div className="service">
                    <h3>Développeur Full Stack</h3>
                    <div>
                        Le développeur Full Stack est un développeur
                        touche-à-tout et complet, qui travaille à la
                        fois côté Back-End et Front-End.
                    </div> 
                    <a>
                        <img src={Arrow} alt="flèche droite" className="feather-arrow-right"></img>
                    </a> 
                </div>
            </li>
        </ul>
    </div>
  );
};

export default Objectifs;
