import { styled } from "styled-components";
import Carousel from "./Carousel";

const Highlights = () => {
  return (
    <HighlightsSection>
      <h1 className="heading">Project Highlights</h1>
      <div className="carousel">
        <Carousel />
      </div>
      <div className="skills">
        <div className="example-skill"></div>
        <div className="example-skill"></div>
        <div className="example-skill"></div>
        <div className="example-skill"></div>
      </div>
      <div className="footer">
        <a href="#">-- All Projects</a>
      </div>
    </HighlightsSection>
  );
};

export default Highlights;

const HighlightsSection = styled.section`
  display: grid;
  height: 100vh;
  justify-items: center;

  .heading {
    background-color: gray;
  }

  .carousel {
    display: grid;
    background-color: red;
    width: 100%;
    height: 400px;
  }

  .skills {
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-content: start;
  }

  .example-skill {
    width: 40px;
    height: 40px;
    background-color: green;
  }

  .footer {
  }

  @media (max-width: 800px) {
    .skills {
      grid-template-columns: repeat(2, auto);
    }
  }
`;
