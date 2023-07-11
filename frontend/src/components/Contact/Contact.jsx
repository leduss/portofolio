import React from "react";
import downloading from "./assets/CV.pdf";

function Contact() {
  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center bg-black relative"
      id="contact"
    >
      <button type="button" className="bg-white">
        <a href={downloading} target="_blank" rel="noreferrer">
          <img src={downloading} alt="" className="hidden" />
          Télécharger mon CV
        </a>
      </button>
    </div>
  );
}

export default Contact;
