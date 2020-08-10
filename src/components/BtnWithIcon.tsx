import React from 'react';

import styled from "styled-components";

const Button=styled.button`
background-color: #6CA22C;
color: #fff;
padding:16px;
display:flex;
justify-content:space-between;
align-items:center;
font-weight: bold;
font-size: 14px;
cursor:pointer;
box-shadow:none;
border-radius: 8px;
border:none;
:hover {
background-color:#578323;
}
`;

const BtnText=styled.span`
margin-left:8px;
`

interface ButtonProps {
  icon: React.ReactElement
  text?: string
  type: 'submit' | 'button'
}

const BtnWithIcon:React.FC<ButtonProps> = ({icon, text, type}) => {
  return (
    <Button type={type} className='btn'>
      {icon}
      <BtnText className='btn-text'>{text}</BtnText>
    </Button>
  );
};

export default BtnWithIcon;
