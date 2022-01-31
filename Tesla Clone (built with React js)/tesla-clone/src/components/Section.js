import React from 'react';
import styled from 'styled-components';

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>

      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>

          {
            rightBtnText && <RightButton>{rightBtnText}</RightButton>
            /* If the right button text exists then only print it. */
          }
        </ButtonGroup>

        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => `url("/images/${props.bgImage}")`} no-repeat center/cover;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

// Use the LeftButton as reference
const RightButton = styled(LeftButton)`
  background-color: #ffffff;
  opacity: 0.65;
  color: #000000;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
