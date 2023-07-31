import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
export default function Carousel() {
  const carouselRefs = [useRef(null), useRef(null), useRef(null)];

  const [carousel, setCarousel] = useState([
    { id: 1, position: 1, color: "pink" },
    { id: 2, position: 2, color: "yellow" },
    { id: 3, position: 3, color: "lightblue" },
  ]);

  const rotateClockWise = () => {
    carouselRefs.forEach((box) => {
      //! can't access custom dom properties theough current
      const position = box.current.getAttribute("position");
      switch (true) {
        case position == 0:
          console.log(box);
          box.current.style.transform =
            "translateX(0px) perspective(100px) translateZ(25px)";
          box.current.style.zIndex = "101";
          box.current.setAttribute("position", "1");
          break;
        case position == 1:
          box.current.style.transform =
            "translateX(50%) perspective(100px) translateZ(0)";
          box.current.style.zIndex = "50";
          box.current.setAttribute("position", "2");
          break;
        case position == 2:
          box.current.style.transform = "translateX(-50%)";
          box.current.setAttribute("position", "0");
          break;
      }
    });
  };

  const rotateCounterClockwise = () => {
    carouselRefs.forEach((box) => {
      //! can't access custom dom properties theough current
      const position = box.current.getAttribute("position");
      switch (true) {
        case position == 0:
          box.current.style.zIndex = "25";
          box.current.style.transform =
            "translateX(50%) perspective(100px) translateZ(0)";
          box.current.setAttribute("position", "2");

          break;
        case position == 1:
          box.current.style.zIndex = "50";
          console.log(box);
          box.current.style.transform = "translateX(-50%)";
          box.current.setAttribute("position", "0");

          break;
        case position == 2:
          box.current.style.zIndex = "101";
          box.current.style.transform =
            "translateX(0px) perspective(100px) translateZ(25px)";
          box.current.setAttribute("position", "1");
          break;
      }
    });
  };

  return (
    <StyledCarousel>
      <div
        className="previous"
        onClick={() => {
          rotateCounterClockwise();
        }}
      >
        <BsArrowLeftCircleFill />
      </div>

      <div className="box-container">
        {carousel.map((box, index) => (
          <div
            key={box.id}
            className="box"
            style={{ backgroundColor: box.color }}
            ref={carouselRefs[index]}
            position={index}
          ></div>
        ))}
      </div>
      <div
        className="next"
        onClick={() => {
          rotateClockWise();
        }}
      >
        <BsArrowRightCircleFill />
      </div>
    </StyledCarousel>
  );
}

const StyledCarousel = styled.div`
  display: grid;
  align-items: center;
  /* justify-items: center; */

  padding: 0 var(--padding-sides);
  grid-template-columns: auto auto auto;
  /* gap: 15px; */

  .box-container {
    min-width: 400px;
    min-height: 170px;
    display: grid;
    justify-items: center;

    /* grid-template-columns: minmax(auto, 290px); */
  }

  .box {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 290px;
    max-height: 170px;
    /* aspect-ratio: 1 / 1; */
    /* height: 170px; */
    border: 2px solid #333;
  }

  .box-container :nth-child(1) {
    z-index: 100;
    background-color: tan;
    transform: translatex(-50%);
  }

  .box-container :nth-child(2) {
    z-index: 101;
    transform: perspective(100px) translateZ(25px);
  }

  .box-container :nth-child(3) {
    transform: translatex(50%);
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

  .previous {
    justify-self: right;
  }

  .previous,
  .next {
    font-size: 48px;
  }

  @media (max-width: 800px) {
    /* change carousel to something modile */
  }
`;

// const rotateClockwise = () => {
//   console.log("rotate clockwise!");
//   const box1 = document.querySelector(".box-container :nth-child(1) ");
//   const box2 = document.querySelector(".box-container :nth-child(2)");
//   const box3 = document.querySelector(".box-container :nth-child(3)");

//   box1.style.transform = "translateX(20%) ";

//   box2.style.transform = "translateX(100%) ";
// };
