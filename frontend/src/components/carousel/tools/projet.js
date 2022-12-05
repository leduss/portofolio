import img1BQ from "./assets/Capturedecran20221205101849.png";
import img2BQ from "./assets/BQ2.png";
import imgWF1 from "./assets/Screenshot_2022-11-28_at_21-29-48_Wild_Festival.png";
import imgDH1 from "./assets/DH1.png";
import html from "./assets/html-1.svg";
import css from "./assets/css-3.svg";
import js from "./assets/javascript-1.svg";
import react from "./assets/react-2.svg";

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
    theme: "Une application permettant de réserver un festival.",
    img: imgWF1,
    lien: false,
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
      "Premier hackaton de 24H à la wild, le thème était le voyage. Une superbe expérience humaine. Et pour couronner le tout, nous avons gagner ce hackaton.",
    img: imgDH1,
    imgsup:
      "./assets/Opera_Instantané_2022-12-05_103255_odyssey.wildcodeschool.com-removebg-preview.png",
    lien: "https://dazzling-toffee-ce31cf.netlify.app/",
    techno: {
      src1: html,
      src2: css,
      src3: js,
      src4: react,
    },
  },
];

export default projet;
