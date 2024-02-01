import { Chrono } from "react-chrono";
import DuAccess from "../assets/DU-AccES.mp4";
import "../styles/parcours.scss";

const Parcours = () => {

  const items = [
    {
      title: "2023 - 2024",
      cardTitle: "Développeur Full Stack en alternance",
      cardSubtitle:"3WA Academy",
      cardDetailedText: "Cette formation développeur full-stack en alternance prépare au métier de développeur full-stack, c'est-à-dire être capable de concevoir et réaliser de A à Z un site ou une application web et mobile, de comprendre et de travailler sur “toute la slack”.",
      media: {   
        type: "IMAGE",
        source: {
          url: "https://iutp.univ-poitiers.fr/geii/wp-content/uploads/sites/21/2014/03/Logo-GEII-fond-transparent-HR.gif",
        }
      }
    },
    {
      title: "2022 - 2023",
      cardTitle: "Réparateur Informatique",
      cardSubtitle:"Econocom Factory",
      cardDetailedText: "Mon premier travail dans lequel j'ai pu me faire une expérience dans le monde professionnel. En charge de la réparation hardware et software d'appareils électroniques (ordinateurs, téléphones etc)",
      media: {   
        type: "IMAGE",
        source: {
          url: "https://iutp.univ-poitiers.fr/geii/wp-content/uploads/sites/21/2014/03/Logo-GEII-fond-transparent-HR.gif",
        }
      }
    },
    {
      title: "2021 - 2022",
      cardTitle: "BUT Informatique 1ère année",
      cardSubtitle:"Université Montpellier-Sète",
      cardDetailedText: "Le B.U.T informatique articule des enseignements théoriques et des travaux pratiques. Il permet de développer des connaissances et des compétences techniques spécialisées en informatique.",
      media: {   
        type: "IMAGE",
        source: {
          url: "https://iutp.univ-poitiers.fr/geii/wp-content/uploads/sites/21/2014/03/Logo-GEII-fond-transparent-HR.gif",
        }
      }
    },
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
    <div className="parcours">
      <Chrono 
        items={items} 
        mode="VERTICAL_ALTERNATING"  
        hideControls
        enableOutline
        enableBreakPoint verticalBreakPoint={900}
        mediaHeight={300}
        classNames={{
          title: 'parcours-title',
          cardTitle: 'parcours-card-title',
          cardSubTitle: 'parcours-subtitle',
          cardDetailedText: 'parcours-detailed-text',
        }}
        theme={{
          primary: '#27272E',
          secondary: '#32363b',
          cardBgColor: '#32363b',
          titleColor: 'black',
          titleColorActive: '#ff014f',
        }}
      />    
    </div>
  );
};

export default Parcours;