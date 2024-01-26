import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
//import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
// import PropTypes from 'prop-types';
import { Engine } from "tsparticles-engine";
//import { ParticleOutType } from "@tsparticles/engine";

interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = (props) => {

  const options = useMemo(
    () => {
      return {
        background: {
          color: "#000",
        },
        fullScreen: {
          enable: true,
          zIndex: -5,
        },
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
            modes: {
              push: {
                quantity: 10,
              },
              repulse: {
                distance: 100,
              },
            },
          }
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

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesProps = useMemo(() => ({ init: particlesInit}), [particlesInit]);

  return <Particles id={props.id} {...particlesProps} options={options} />;
};

export default ParticlesComponent;