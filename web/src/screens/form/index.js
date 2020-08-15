import React from "react";
import { PasswordInput } from "../../components/forminputcomponent/passwordInput";
import { TextInput } from "../../components/forminputcomponent/textInput";
import { DropdownInput } from "../../components/forminputcomponent/dropdownInput";
import { CheckboxInput } from "../../components/forminputcomponent/checkboxInput";
import { PriceInput } from "../../components/forminputcomponent/priceInput";

export const GroceriesForm = () => {
  const name="Name Of Product";
  const price="Price";
  const weight="Weight";
  const quantity="No of Pieces";
  const example1="Surf Excel";
  const example2="10";
  const example3="1 kg";
  return(
    <div className='flex justify-center bg-gray-200 h-screen'>
      <div className=''>
        <h1 className='mt-5'> One Easy step </h1>
        <p className='mt-0'>Please provide us with product details</p>
      </div>
      <div className='m-5 p-5  w-2/3 grid grid-cols-1 md:grid-cols-2 shadow-xl bg-white rounded'>
        <div className=' m-5 p-5'>
          <TextInput {...{ labelText:name,placeholderText:example1 }} />
          <PriceInput />
          <div className='flex'>
            <TextInput {...{ labelText:quantity,placeholderText:example2 }} />
            <TextInput {...{ labelText:weight,placeholderText:example3 }} />
          </div>
          
          <DropdownInput />
        </div>
        <div className='m-5 p-5'>
          <div className='h-64 bg-gray-300' />
          <CheckboxInput />
          <CheckboxInput />
        </div>
      </div>
    </div>
  );
};