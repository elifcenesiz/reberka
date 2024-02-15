import React from 'react';
import styled from 'styled-components';


const Line1 = styled.div`
  width: 49%;
  border-top: 3px solid #fff;

`;

const Line2 = styled.div`
  width: 49%;
  border-top: 3px solid #fff;
  margin-right: 0px;

`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
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

const Line = () => {
    return (
        <LineDiv>
        <Line1 />
        <Dot />
        <Line2 />
        </LineDiv>
    );
    }

export default Line;