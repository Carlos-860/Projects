import React from 'react';
import styled from 'styled-components';

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg" alt="" />
      </Background>
      <ImageTitle>
        <img src="/images/viewers-disney.png" alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>

        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>

        <AddButton>
          <span>+</span>
        </AddButton>

        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>

      <SubTitle>2018 - 7m Family, Fantasy, Kids, Animation</SubTitle>

      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illum magni delectus natus odio? Recusandae perferendis cum, minima similique magnam repellat! Reprehenderit, laudantium
        accusantium, hic molestiae eius libero recusandae voluptas assumenda nisi ratione quam ullam nemo earum praesentium omnis non.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgba(249, 249, 249);
  color: rgba(249, 249, 249);
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 24px;
    color: #fff;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background-color: #000;
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
