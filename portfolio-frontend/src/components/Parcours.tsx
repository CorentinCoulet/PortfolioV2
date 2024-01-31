import { Chrono } from "react-chrono";
import Sti2d from "../../public/filiere-sti2d.png";

const Parcours = () => {

  const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: Sti2d
      }
    }
  },];

  return (
    <div>
      <Chrono items={items} mode="VERTICAL"/>    
    </div>
  );
};

export default Parcours;