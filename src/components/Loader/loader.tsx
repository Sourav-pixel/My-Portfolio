// Loader.js
import React from "react";
import styled, { keyframes } from "styled-components";

const rotateCube = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  perspective: 1000px;
`;

const RubiksCube = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotateCube} 5s infinite linear;
`;

const Face = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const FrontFace = styled(Face)`
  transform: translateZ(100px);
`;

const BackFace = styled(Face)`
  transform: rotateY(180deg) translateZ(100px);
`;

const LeftFace = styled(Face)`
  transform: rotateY(-90deg) translateZ(100px);
`;

const RightFace = styled(Face)`
  transform: rotateY(90deg) translateZ(100px);
`;

const TopFace = styled(Face)`
  transform: rotateX(90deg) translateZ(100px);
`;

const BottomFace = styled(Face)`
  transform: rotateX(-90deg) translateZ(100px);
`;

const Cube = styled.div`
  width: calc(100% / 3);
  height: calc(100% / 3);
  box-sizing: border-box;
  border: 1px solid #000;
`;

const colors = [
  "#ff3d00",
  "#ffeb3b",
  "#4caf50",
  "#2196f3",
  "#ffffff",
  "#ff3d00",
  "#ffeb3b",
  "#4caf50",
  "#2196f3",
];

const Loader = () => (
  <LoaderWrapper>
    <RubiksCube>
      <FrontFace>
        {colors.map((color, index) => (
          <Cube key={index} style={{ background: color }} />
        ))}
      </FrontFace>
      <BackFace>
        {colors.map((color, index) => (
          <Cube key={index} style={{ background: color }} />
        ))}
      </BackFace>
      <LeftFace>
        {colors.map((color, index) => (
          <Cube key={index} style={{ background: color }} />
        ))}
      </LeftFace>
      <RightFace>
        {colors.map((color, index) => (
          <Cube key={index} style={{ background: color }} />
        ))}
      </RightFace>
      <TopFace>
        {colors.map((color, index) => (
          <Cube key={index} style={{ background: color }} />
        ))}
      </TopFace>
      <BottomFace>
        {colors.map((color, index) => (
          <Cube key={index} style={{ background: color }} />
        ))}
      </BottomFace>
    </RubiksCube>
  </LoaderWrapper>
);

export default Loader;
