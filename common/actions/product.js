import { MANAGE_ADDRESS, ADD_TO_CART, DECREMENT_CART } from './index';

export const addToCart = () => ({
  type: ADD_TO_CART,
});

export const decrementCart = () => ({
  type :DECREMENT_CART,
})

export const addAddress = (obj) =>(dispatch,state)=> {
  const { addresses } = state().product;
  dispatch({ type:MANAGE_ADDRESS,addresses:[...addresses,obj] })
}

export const editAddress = (obj) =>(dispatch,state)=> {
  const { addresses } = state().product;
  const modifiedAddress = addresses.filter(address=>(address.id !== obj.id))
  dispatch({ type:MANAGE_ADDRESS,addresses:[...modifiedAddress,obj] })
}

export const removeAddress = (obj) =>(dispatch,state)=> {
  const { addresses } = state().product;
  dispatch({ type:MANAGE_ADDRESS,addresses:addresses.filter(address=>(address.id !== obj.id)) })
}


