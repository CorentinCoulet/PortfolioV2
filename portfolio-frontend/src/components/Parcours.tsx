import { Chrono } from "react-chrono";
import DuAccess from "../assets/DU-AccES.mp4";

const Parcours = () => {

  const items = [
    
    
    {
      title: "Décembre 2020 - Juin 2021",
      cardTitle: "DU AccES",
      cardSubtitle:"Université Montpellier-Sète",
      cardDetailedText: "Le DU AccES s’adresse aux diplômé·e·s d’un baccalauréat technologique ou général, néo-bachelier·ère·s ou étudiant·e·s en réorientation, qui souhaitent consolider leurs connaissances et compétences académiques en vue d’une poursuite d’études universitaires.",
      media: {   
        type: "VIDEO",
        source: {
          url: DuAccess,
        }
      }
    },
    {
      title: "Septembre 2018- Novembre 2020",
      cardTitle: "DUT GEII",
      cardSubtitle:"Université Montpellier-Sète",
      cardDetailedText: "Le DUT GEII est une formation professionnalisante comprenant des enseignements en mathématiques, physique appliquée et anglais complétés par des enseignements en énergie, électronique, systèmes embarqués, informatique des systèmes industriels : contrôle, commande des systèmes automatisés, réseaux de communications industrielles, automatismes, robotique.",
      media: {   
        type: "IMAGE",
        source: {
          url: "https://iutp.univ-poitiers.fr/geii/wp-content/uploads/sites/21/2014/03/Logo-GEII-fond-transparent-HR.gif",
        }
      }
    },
    {
      title: "2018-2020",
      cardTitle: "Bac STI2D",
      cardSubtitle:"Lycée Saint Joseph Pierre Rouge",
      cardDetailedText: "La série STI2D permet d’acquérir des compétences technologiques étendues, transversales à tous les domaines industriels, ainsi que des compétences approfondies dans un champ de spécialité.",
      media: {   
        type: "IMAGE",
        source: {
          url: "https://lycee-paul-heroult.fr/wp-content/uploads/2019/06/ico-web-filiere-sti2d.png",
        }
      }
    },
  ];

  return (
    <div>
      <Chrono items={items} mode="VERTICAL_ALTERNATING"/>    
    </div>
  );
};

export default Parcours;