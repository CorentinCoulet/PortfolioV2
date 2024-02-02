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
          url: "https://cdn3.talentsdunumerique.com/sites/default/files/styles/max_325x325/public/logos/logo3warouge_0.jpg.webp?itok=5Z6_PUZx",
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
          url: "https://media.licdn.com/dms/image/C4E0BAQFAsEIPXXBUNA/company-logo_200_200/0/1673595477543/sofi_groupe_logo?e=2147483647&v=beta&t=P_dpAe6io61ORxgp22op-u_mfCA3NwAMYfdK_eArE0A",
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
          url: "https://media.licdn.com/dms/image/C4D0BAQGi6MNx24YYug/company-logo_200_200/0/1631313331606?e=2147483647&v=beta&t=C1vx7my20fJ7tMb4FeRr-U0Bpby_dcoOwVgf0VyPE_g",
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
      cardDetailedText: "Le DUT GEII est une formation professionnalisante comprenant des enseignements en mathématiques, physique appliquée et anglais complétés par des enseignements en énergie, électronique, systèmes embarqués, commande des systèmes automatisés, automatismes, robotique.",
      media: {   
        type: "IMAGE",
        source: {
          url: "https://iutp.univ-poitiers.fr/geii/wp-content/uploads/sites/21/2014/03/Logo-GEII-fond-transparent-HR.gif",
        }
      }
    },
    {
      title: "2018-2020",
      cardTitle: "Bac STI2D Option SIN",
      cardSubtitle:"Lycée Saint Joseph Pierre Rouge",
      cardDetailedText: "La série STI2D (Sciences et Techniques de l'Ingénieur et du Développement Durable) permet d’acquérir des compétences technologiques étendues, transversales à tous les domaines industriels, ainsi que des compétences approfondies dans un champ de spécialité.",
      media: {   
        type: "IMAGE",
        source: {
          url: "https://image.jimcdn.com/app/cms/image/transf/none/path/sef1ec10cfe474565/image/id6e0719a22d4a8b7/version/1539033317/image.png",
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