import React from 'react';
import styled from 'styled-components';

function movies(props) {
  return (
    <Container>
      <h4>{props.heading}</h4>
      <Content>
        <Wrap>
          <img src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="https://m.media-amazon.com/images/M/MV5BZjg2ZTM3OTgtY2ExMS00OGM4LTg3NDEtNjQ0MjJiZDFmMGFkXkEyXkFqcGdeQXVyMDY3OTcyOQ@@._V1_SX300.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="https://m.media-amazon.com/images/M/MV5BNThjZDgwZTYtMjdmYy00ZmUyLTk4NTUtMzdjZmExODQ3ZmY4XkEyXkFqcGdeQXVyMjkzMDgyNTg@._V1_SX300.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/" alt="" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default movies;

const Container = styled.div`
  margin-top: 20px;
`;
const Content = styled.div`
  display: grid;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 50px;
`;

const Wrap = styled.div`
  width: 100%;
  height: 200px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
