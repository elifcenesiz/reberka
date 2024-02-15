import React from 'react';
import styled from 'styled-components';


const CircleDivWrapper = styled.div`
  width: 400px; 
  height: 400px;
  border-radius: 50%;
  background-color: rgba(94, 102, 112, 0.7);
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  z-index: 2; /* Set z-index to be in front of the image */


`;

const RectangleDivWrapper = styled.div`
  width: 16vw;
  height: 320px;
  background-color: rgba(94, 102, 112, 0.8);
  //background-color: rgba(205, 205, 215, 0.8);
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.4rem;
  z-index: 2; /* Set z-index to be in front of the image */
`;


const TextWrapper = styled.div`
  max-height: 300px;
  width: 90%;
  position: absolute;
  color: #fff;
  //color: #3b3b3b;
  ${CircleDivWrapper}:hover & {
    color: rgba(171, 190, 212, 1);
  }
`;

const Line = styled.div`
  width: 49%;
  border-top: 2px solid #fff;
  //border-top: 2px solid rgba(91, 101, 112, 1);

`;

const Line2 = styled.div`
  width: 49%;
  border-top: 2px solid #fff;
  //border-top: 2px solid rgba(91, 101, 112, 1);
  margin-right: 0px;

`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  //background-color: rgba(91, 101, 112, 1);
  margin-left: 10px;
  margin-right: 10px;
  margin-top: -5px;

`;

const LineDiv = styled.div`
margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;

`;


const RoundedBox = ({ title, text }) => {
  return (
    <RectangleDivWrapper>
      <TextWrapper>
        <h3 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '20px' }}>
          {title}
        </h3>

        <LineDiv>
          <Line />
          <Dot />
          <Line2 />
        </LineDiv>
        <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '20px' }}>
          {text}
        </p>
      </TextWrapper>
    </RectangleDivWrapper>
  );
};

export default RoundedBox;
