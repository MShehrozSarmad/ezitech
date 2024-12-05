import particleLogo from '../assets/particleLogo.png';

import React from "react";
import ParticleImage, { Vector, forces } from "react-particle-image";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Check for black areas (low RGB values) and non-transparent pixels
    return pixel.r < 50 && pixel.g < 50 && pixel.b < 50 && pixel.a > 128; // Adjust alpha threshold if needed
  },
  color: ({ x, y, image }) => "rgba(255,255,255)", // White particles
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

const Logo = () => {
  return (
    <ParticleImage
      src={particleLogo}
      scale={1}
      entropy={20}
      maxParticles={1500}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      particleOptions={particleOptions}
      backgroundColor="transparent"
    />
  );
};

export default Logo;
