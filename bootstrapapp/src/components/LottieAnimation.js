import React from "react";
import Lottie from "react-lottie";
import musicgalimg from "../animations/musicgal.json";

const LottieAnimation = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: musicgalimg,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };

  return (
    <div>
      <h3>Lottie</h3>
      <br></br>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default LottieAnimation;
