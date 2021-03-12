import React from 'react';
import styled from 'styled-components';
import useClipboard from 'react-use-clipboard';

const ContactWrap = styled.div`
  height: 250px;
  padding: 15px;
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 30px 0;
  font-size: 40px;
  font-weight: 900;
`;

const Email = styled.button`
  margin: 10px 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 20px;

  &:hover {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const AlertBox = styled.span`
  width: 80px;
  padding: 3px;
  border-radius: 3px;
`;

function Contact() {
  const [isCopied, setCopied] = useClipboard('okdohyuk@gmail.com', {
    successDuration: 1000,
  });
  return (
    <ContactWrap>
      <Title>Contact</Title>
      <Email onClick={setCopied}>okdohyuk@gmail.com</Email>
      {isCopied ? <AlertBox>복사완료!</AlertBox> : ''}
    </ContactWrap>
  );
}

export default Contact;
