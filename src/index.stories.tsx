import * as React from 'react'
import TestApp from './'

const Regular: React.FC = () => {
  const prices = [
    {
      type: '500 г',
      price: 500,
      name:'priceOption'
    },
    {
      type: '100 г',
      price: 150,
      name:'priceOption'
    },
    {
      type: '50 г',
      price: 90,
      name:'priceOption'
    }
  ]

  const handleSubmit = (ev:React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    // tslint:disable-next-line:no-console
    alert(`Product with option ${ev.currentTarget.priceOption.value} was added to cart`);
  }
  return (
    <TestApp prices={prices} onSubmit={handleSubmit}/>
  )
}

export {Regular}

export default {
  title: 'Common/TestApp',
}
