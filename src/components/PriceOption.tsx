import React from 'react';
import {OptionCombiner, OptionContainer, OptionRadio, Checkmark, OptionType} from './StyledPriceOption'

export type Option = {
  type: string
  name: string
  price: number
}


interface PriceOptionProps {
  option: Option
  checkedDefaultOption: Option
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  isChecked: boolean
}

const PriceOption: React.FC<PriceOptionProps> = ({option, checkedDefaultOption, onChange, isChecked}) => {

  return (
    <OptionContainer isChecked={isChecked}>
      <OptionCombiner>
        <OptionRadio type='radio'
                     name={option.name}
                     value={`${option.type}-${option.price}`}
                     defaultChecked={checkedDefaultOption === option}
                     onChange={onChange}
        />
        <Checkmark/>
        <OptionType>
          {option.type}
        </OptionType>
      </OptionCombiner>
      <span>
        {option.price} грн
      </span>
    </OptionContainer>
  );
};

export default PriceOption;
