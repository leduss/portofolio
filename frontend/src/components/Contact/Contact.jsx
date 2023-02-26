import React, { useEffect, useState } from "react";
import downloading from "./assets/CV.pdf";

function Contact() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  // eslint-disable-next-line no-unused-vars
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;
  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center bg-black relative"
      id="contact"
    >
      <button type="button" className="bg-white">
        <a href={downloading} target="_blank" rel="noreferrer">
          <img src={downloading} alt="" />
          Télécharger mon CV
        </a>
      </button>
      <h1 className="text-white">
        {`Hi! I'm `}{" "}
        <span className="text-white">
          <span className="">{text}</span>
        </span>
      </h1>
    </div>
  );
}

export default Contact;
