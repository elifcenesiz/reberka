import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.div`
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-direction: column;
      margin-bottom: 80px;
      @media (max-width: 768px) {
            height: 100px;
      }
      
      `
const Border1 = styled.div`
      display: flex;
      width: 15%;
      height: 50%;
      border-top: 6px solid #38659A;
      border-left: 6px solid #38659A;
      border-width: 10px;
      margin-left: -250px;
      opacity: 0.5;

      `

const Border2 = styled.div`
      display: flex;
      width: 15%;
      height: 50%;
      border-bottom: 6px solid #38659A;
      border-right: 6px solid #38659A;
      border-width: 10px;
      margin-right: -250px;
      opacity: 0.5;
      `

const HeadingText = styled.p `
      font-size: 32px;
      color: #000;
      font-weight: 700;
      text-align: center;
      @media (max-width: 968px) {
            font-size: 40px;
      }
      @media (max-width: 768px) {
            font-size: 30px;
      }
      `



const Heading = ({ text }) => {
      return (
            <HeadingWrapper>
                  <Border1 />
                  <HeadingText>
                        {text}
                  </HeadingText>
                  
                  <Border2 />
            </HeadingWrapper>
      );
}
export default Heading; 