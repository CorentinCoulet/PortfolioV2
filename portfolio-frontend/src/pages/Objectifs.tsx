import "../styles/objectifs.scss";

const Objectifs = () => {
  return (
    <div className="objectifs">
        <p>Objectifs</p>
        <h2>Ce que je souhaite faire</h2>
        <ul>
            <li>
                <div>
                    <p>Développeur Back-End</p>
                    <div>
                        Le développeur Back-end programme 
                        la partie cachée d'une solution web,
                        le côté serveur, admistrateur d'une app
                        ou d'un site web.
                    </div>  
                </div>
            </li>
            <li>
                <div>
                    <p>Développeur Front-End</p>
                    <div>
                        Le développeur Front-End programme la partie
                        visible, l'interface utilisateur d'une app ou
                        d'un site web.
                    </div>  
                </div>
            </li>
            <li>
                <div>
                    <p>Développeur Full Stack</p>
                    <div>
                        Le développeur Full Stack est un développeur
                        touche-à-tout et complet, qui travaille à la
                        fois côté Back-End et Front-End.
                    </div>  
                </div>
            </li>
        </ul>
    </div>
  );
};

export default Objectifs;
