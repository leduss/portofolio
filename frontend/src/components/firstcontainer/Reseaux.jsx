import React from "react";
import downloading from "@components/Contact/assets/CV.pdf";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";

function Reseaux() {
  return (
    <div className="space-y-5 w-2/6 p-2 h-full max-sm:w-10/12 flex flex-col items-center justify-center">
      <button type="button" className="button">
        <a href={downloading} target="_blank" rel="noreferrer">
          Télécharger mon CV
        </a>
      </button>
      <div className="text-white flex justify-center gap-10">
        <a
          href="https://www.linkedin.com/in/julien-dussart/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 text-5xl max-sm:text-2xl "
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/leduss"
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-500 text-5xl max-sm:text-2xl"
        >
          <BsGithub />
        </a>
        <a
          href="mailto:mailpro@juliendussart.fr"
          className="hover:text-green-500 text-5xl max-sm:text-2xl"
        >
          <MdContactMail />
        </a>
      </div>
    </div>
  );
}

export default Reseaux;
