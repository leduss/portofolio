import img1BQ from "./assets/Capturedecran20221205101849.png";
import img2BQ from "./assets/BQ2.png";
import img3BQ from "./assets/bq3.png";
import imgWF1 from "./assets/Screenshot_2022-11-28_at_21-29-48_Wild_Festival.png";
import html from "./assets/html-1.svg";
import css from "./assets/css-3.svg";
import js from "./assets/javascript-1.svg";
import react from "./assets/react-2.svg";
import tailwind from "./assets/tailwind-css-2.svg";
import express from "./assets/express-109.svg";
import node from "./assets/nodejs-icon.svg";
import heure from "./assets/heure.png";
import heure2 from "./assets/heure2.png";
import serenity from "./assets/serenity.png";
import goop1 from "./assets/goop&.png";
import goop2 from "./assets/goop2.png";
import goop3 from "./assets/goop3.png";
import goop4 from "./assets/goop4.png";
import goop5 from "./assets/goop5.png";
import redux from "./assets/redux-icon.svg";
import mysql from "./assets/mysql-6.svg";
import check1 from "./assets/check1.png";
import check2 from "./assets/check2.png";
import check3 from "./assets/check3.png";

const projet = [
  {
    id: 1,
    title: "Projet 1",
    name: "Bordeaux Quizzz",
    theme: "Un quizzz permettant de faire découvrir Bordeaux.",
    img: [
      {
        id: 1,
        src: img1BQ,
      },
      {
        id: 2,
        src: img3BQ,
      },
      {
        id: 3,
        src: img2BQ,
      },
    ],
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
    img: [
      {
        id: 1,
        src: imgWF1,
      },
    ],
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
    img: [
      {
        id: 1,
        src: heure,
      },
      {
        id: 2,
        src: heure2,
      },
    ],
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
    title: "Hackaton 2",
    name: "GOOP",
    theme:
      "Le hackaton 2 était sur le thème du covoiturage en collectivité. Nous sommes partis sur une application de covoiturage pour les employés d'une mairie.",
    img: [
      {
        id: 1,
        src: goop1,
      },
      {
        id: 2,
        src: goop2,
      },
      {
        id: 3,
        src: goop3,
      },
      {
        id: 4,
        src: goop4,
      },
      {
        id: 5,
        src: goop5,
      },
    ],
    lien: "",
    techno: {
      src1: html,
      src2: css,
      src3: js,
      src4: react,
      src5: mysql,
    },
  },
  {
    id: 5,
    title: "Projet 3",
    name: "Serenity",
    theme:
      "Plateforme d'accompagnement et de prise en charge de patients en vue d'une prochaine intervention. Elle permet de vous mettre en relation avec le corps médical afin de suivre toutes les étapes pré-opératoires mais aussi post-opératoires.",
    img: [
      {
        id: 1,
        src: serenity,
      },
    ],
    lien: "",
    techno: {
      src1: react,
      src2: tailwind,
      src3: node,
      src4: express,
      src5: mysql,
    },
  },
  {
    id: 6,
    title: "Checkpoint 4",
    name: "Mon SAPL",
    theme:
      "Examen personnel de fin de formation. Le thème était libre. Mon choix s'est porté sur une application permettant à des personnes atteintes d'une maladie auto immune de gérer leur prise de sang mensuel.",
    img: [
      {
        id: 1,
        src: check1,
      },
      {
        id: 2,
        src: check2,
      },
      {
        id: 3,
        src: check3,
      },
    ],
    lien: "",
    techno: {
      src1: react,
      src2: tailwind,
      src3: redux,
      src4: node,
      src5: express,
      src6: mysql,
    },
  },
];

export default projet;
