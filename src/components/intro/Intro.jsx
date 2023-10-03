import "./intro.scss";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="man.png" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hii There, I'm</h2>
          <h1>Shivankit Agarwal</h1>
          <h3>
            {/* typewriter.typeString('Hello World!')
          .pauseFor(2500)
          .deleteAll()
          .typeString('Strings can be removed')
          .pauseFor(2500)
          .deleteChars(7)
          .typeString('<strong>altered!</strong>')
          .pauseFor(2500)
          .start(); */}

            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Front-end Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Good Listener")
                  .pauseFor(600)
                  .deleteAll()
                  .typeString("Front-end Developer")
                  .start();
              }}
            />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
