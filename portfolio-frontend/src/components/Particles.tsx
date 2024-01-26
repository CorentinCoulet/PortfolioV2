import { useMemo, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { IOptions, RecursivePartial } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
//import { loadAll } from "@tsparticles/all";  
//import { loadFull } from "tsparticles";

interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent = (props: ParticlesComponentProps) => {

  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    const initialiseParticles = async () => {
      await initParticlesEngine(async (engine) => {      
        await loadSlim(engine);
        setParticlesReady(true);
      });
    }
    initialiseParticles();
  }, []);

  const options = useMemo(
    (): RecursivePartial<IOptions> => {
      return {
        background: {
          color: "#27272E",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        autoPlay: true,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 100,
            },
          },
        },
        particles: {
          links: {
            enable: true,
            distance: 200,
          },
          move: {
            enable: true,
            speed: { min: 3, max: 6},
          },
          opacity: {
            value: { min: 0.3, max: 0.7},
          },
          size: {
            value: { min: 1, max: 3},
          }
        },
      };
  }, []); 


  return <Particles id={props.id} options={options} />;
};

export default ParticlesComponent;