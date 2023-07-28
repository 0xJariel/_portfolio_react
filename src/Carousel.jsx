import React from "react";
import { styled } from "styled-components";
import { useState } from "react";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    { id: 1, color: "pink" },
    { id: 2, color: "yellow" },
    { id: 3, color: "lightblue" },
  ];

  const rotateClockWise = () => {};

  return (
    <StyledCarousel>
      <div className="previous">previous</div>

      <div className="box-container">
        {carouselData.map((box) => (
          <div key={box.id} className="box"></div>
        ))}
      </div>
      <div
        className="next"
        onClick={() => {
          rotateClockwise();
        }}
      >
        next
      </div>
    </StyledCarousel>
  );
}

const StyledCarousel = styled.div`
  display: grid;
  align-items: center;

  padding: 0 var(--padding-sides);
  grid-template-columns: auto auto auto;
  gap: 15px;

  .box-container {
    min-width: 450px;
    min-height: 170px;
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 290px));
    justify-content: center;
    align-items: center;
  }

  .box {
    content: "";
    width: 100%;
    height: 100%;
    max-width: 290px;
    max-height: 170px;
    /* aspect-ratio: 1 / 1; */
    /* height: 170px; */
    border: 2px solid #333;
  }

  .box-container :nth-child(1) {
    z-index: 75;
    transform: translateX(25%);
  }

  .box-container :nth-child(2) {
    z-index: 100;
    transform: perspective(100px) translateZ(25px);
  }

  .box-container :nth-child(3) {
    z-index: 50;
    transform: translateX(-25%);
  }

  #box1 {
    background-color: pink;
  }
  #box2 {
    background-color: yellow;
  }
  #box3 {
    background-color: lightblue;
  }

  @media (max-width: 800px) {
    /* change carousel to something modile */
  }
`;

const rotateClockwise = () => {
  console.log("rotate clockwise!");
  const box1 = document.querySelector(".box-container :nth-child(1) ");
  const box2 = document.querySelector(".box-container :nth-child(2)");
  const box3 = document.querySelector(".box-container :nth-child(3)");

  box1.style.transform = "translateX(20%) ";

  box2.style.transform = "translateX(100%) ";
};
