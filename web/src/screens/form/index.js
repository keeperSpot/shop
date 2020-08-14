import React from "react";
import { PasswordInput } from "../../components/forminputcomponent/passwordInput";
import { TextInput } from "../../components/forminputcomponent/textInput";
import { DropdownInput } from "../../components/forminputcomponent/dropdownInput";
import { CheckboxInput } from "../../components/forminputcomponent/checkboxInput";

export const GroceriesForm = () => {
  const name="Name Of Product";
  const price="Price";
  const weight="Weigth";
  const extraDetails="Extra Details";
  return(
    <div className='flex justify-center mt-5 '>
      <h1 className='my-5'> 3 Easy steps </h1>
      <div className='m-5 p-5  w-2/3 grid grid-cols-1 md:grid-cols-2 shadow-xl'>
        <div className=' m-5 p-5'>
          <TextInput {...{ labelText:name }} />
          <TextInput {...{ labelText:price }} />
          <TextInput {...{ labelText:weight }} />
          <TextInput {...{ labelText:extraDetails }} />
          <PasswordInput />
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