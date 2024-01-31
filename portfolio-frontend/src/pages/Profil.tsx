import "../styles/profil.scss";
import Parcours from "../components/Parcours";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Realisations from "../components/Realisations";
import { useState } from "react";

const Profil = () => {
    const [ongletActif, setOngletActif] = useState("parcours");

    const changerOnglet = (onglet: string) => {
        setOngletActif(onglet);
      };

    return (
        <div className="profil">
            <div>
                <h2>Mon Profil</h2>
                <ul>
                    <li 
                        onClick={() => changerOnglet("parcours")} 
                        className={ongletActif === "parcours" ? "actif actif1" : ""}
                    >Parcours </li>
                    <li
                        onClick={() => changerOnglet("competences")} 
                        className={ongletActif === "competences" ? "actif" : ""}
                    >Skills</li>
                    <li
                        onClick={() => changerOnglet("experience")} 
                        className={ongletActif === "experience" ? "actif" : ""}
                    >Expérience</li>
                    <li
                        onClick={() => changerOnglet("realisations")} 
                        className={ongletActif === "realisations" ? "actif actif2" : ""}
                    >Projets</li>
                </ul>
            </div>
            <div>
                {ongletActif === "parcours" && <Parcours />}
                {ongletActif === "competences" && <Skills />}
                {ongletActif === "experience" && <Experience />}
                {ongletActif === "realisations" && <Realisations />}
            </div>
        </div>
    );
  };
  
  export default Profil;