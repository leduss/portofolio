import img1BQ from "./assets/Capturedecran20221205101849.png";
import img2BQ from "./assets/BQ2.png";
import imgWF1 from "./assets/Screenshot_2022-11-28_at_21-29-48_Wild_Festival.png";
import html from "./assets/html-1.svg";
import css from "./assets/css-3.svg";
import js from "./assets/javascript-1.svg";
import react from "./assets/react-2.svg";
import tailwind from "./assets/tailwind-css-2.svg";
import express from "./assets/express-109.svg";
import node from "./assets/nodejs-icon.svg";
import heure from "./assets/dernière heure.png";
import serenity from "./assets/Capture d’écran 2023-02-14 à 15.23.35.png";

const projet = [
  {
    id: 1,
    title: "Projet 1",
    name: "Bordeaux Quizzz",
    theme: "Un quizzz permettant de faire découvrir Bordeaux.",
    img: img1BQ,
    imgsup: img2BQ,
    lien: "https://alexandrepre.github.io/bordeuxquizz/",
    techno: {
      src1: html,
      src2: css,
      src3: js,
      src4: false,
    },
  },
  {
    id: 2,
    title: "Projet 2",
    name: "Wild Festival",
    theme:
      "Plateforme recensant des artistes et des festivals et permettant des réserver places pour un festival.",
    img: imgWF1,
    lien: "",
    techno: {
      src1: html,
      src2: css,
      src3: js,
      src4: react,
    },
  },
  {
    id: 3,
    title: "Hackaton 1",
    name: "Dernière Heure",
    theme:
      "Le sujet était le voyage. Nous avons donc décidé de partir sur une agence de voyage en l'an 2132. Celle-ci vous permet de sauver vos fesses 1h avant la fin du monde et de vous offrir des destinations idylliques (ou pas).  En plus d'une expérience humaine incroyable, nous avons remporté ce premier Hackathon 🥇!",
    img: heure,
    lien: "https://dazzling-toffee-ce31cf.netlify.app/",
    techno: {
      src1: html,
      src2: css,
      src3: js,
      src4: react,
    },
  },
  {
    id: 4,
    title: "Projet 3",
    name: "Serenity",
    theme:
      "Plateforme d'accompagnement et de prise en charge de patients en vue d'une prochaine intervention. Elle permet de vous mettre en relation avec le corps médical afin de suivre toutes les étapes pré-opératoires mais aussi post-opératoires.",
    img: serenity,
    imgsup:
      "./assets/Opera_Instantané_2022-12-05_103255_odyssey.wildcodeschool.com-removebg-preview.png",
    lien: "",
    techno: {
      src1: react,
      src2: tailwind,
      src3: node,
      src4: express,
    },
  },
];

export default projet;
