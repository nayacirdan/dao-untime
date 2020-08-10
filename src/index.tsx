import * as React from 'react'
import PriceOption, {Option} from "./components/PriceOption";
import BtnWithIcon from "./components/BtnWithIcon";
import IconCart from "./components/IconCart";
import styled from "styled-components";
import {ChosenPrice, CardHeaders, PriceOptions, ProductEquipmentCard, ToCardContainer} from './components/StyledCard'


interface PricesOptions {
  prices: Option[]
  onSubmit: (ev: React.FormEvent<HTMLFormElement>) => void
}


const TestApp: React.FC<PricesOptions> = ({prices, onSubmit}) => {
  const [checkedPrice, setCheckedPrice] = React.useState(prices[0].price);
  const [checkedOption, setCheckedOption] = React.useState(prices[0]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, option: Option) => {
    const valueArr = event.target.value.split('-');
    setCheckedPrice(parseFloat(valueArr[1]));
    setCheckedOption(option);
  };

  return (
    <ProductEquipmentCard>
      <CardHeaders>
        <span>Тип</span>
        <span>Ціна</span>
      </CardHeaders>
      <form onSubmit={onSubmit}>
        <PriceOptions>

          {prices.map((option) => (<PriceOption option={option}
                                                key={option.type}
                                                checkedDefaultOption={prices[0]}
                                                onChange={(ev) => handleChange(ev, option)}
                                                isChecked={checkedOption === option}
          />))}

        </PriceOptions>
        <ToCardContainer>
          <ChosenPrice>{checkedPrice} грн</ChosenPrice>
          <BtnWithIcon icon={(<IconCart color='#FFFFFF' iconClassName='icon-btn'/>)} type='submit' text={'До кошика'}/>
        </ToCardContainer>
      </form>
    </ProductEquipmentCard>
  )
}

export default TestApp
