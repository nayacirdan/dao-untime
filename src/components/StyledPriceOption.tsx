import styled from "styled-components";

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: transparent;
  border:1px solid #6CA22C;
  border-radius:50%;
  ::after {
  content: "";
  position: absolute;
  display: none;
  left: 7px;
  top: 7px;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
    background-color:#6CA22C;
  border-radius:50%;
}
`

type LabelProps = {
  isChecked: boolean
}

export const OptionType = styled.span`
`

export const OptionContainer = styled.label<LabelProps>`
display:flex;
justify-content: space-between;
align-items: center;
font-size: 16px;
margin-bottom: 12px;
color: ${(props) => props.isChecked ? '#000' : '#999'};
cursor:pointer;

& > span {
font-weight: ${(props) => props.isChecked ? 'bold' : 'normal'};
}
`
export const OptionCombiner = styled.div`
display:flex;
align-items: center;
position: relative;
&>${OptionType} {
margin-left:40px;
}
`


export const OptionRadio = styled.input`
background-color:red;
position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
:checked ~ ${Checkmark}{

};
:checked ~ ${Checkmark}:after {
  display: block;
};
`
