import React,{ useState } from "react";
import { PasswordInput } from "components/forminputcomponent/passwordInput";
import { TextInput } from "components/forminputcomponent/textInput";
import { DropdownInput } from "components/forminputcomponent/dropdownInput";
import { CheckboxInput } from "components/forminputcomponent/checkboxInput";
import { createState } from 'common/helpers/createState';
import { AddProductFields } from 'common/formFields/addProduct.formFields';
import { FormItemCreate } from '../../hocs/formItemCreate';

export const GroceriesForm = () => {

  const [dropdownData,setDropdown] = useState('')
  const [form,setForm] = useState(createState(AddProductFields))

  return(
    <div className='justify-center'>
      <h1 className='m-5'> 3 Easy steps </h1>
      <div className='m-5 p-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>
        {AddProductFields.map(Field=>(
          FormItemCreate(
            form,
            setForm,
            Field.key,
            Field.kwargs,
            Field.type,Field.others,
            Field.customLabel,Field.noLabel
          )
        ))}
      </div>
      <h1 className='m-5'>Add Custom Fields</h1>
      {/* <div className='flex justify-center'> */}
      {/*  /!* eslint-disable-next-line react/button-has-type *!/ */}
      {/*  <button */}
      {/*    onClick={()=>{}} */}
      {/*    className=' */}
      {/*    no-outline */}
      {/*    bg-transparent */}
      {/*    hover:bg-blue-500 text-blue-700 */}
      {/*    font-semibold hover:text-white py-2 px-4 border */}
      {/*    border-blue-500 hover:border-transparent rounded'> */}
      {/*    Add Field */}
      {/*  </button> */}
      {/* </div> */}

      <div className='m-5 p-5  w-2/3 grid grid-cols-1 md:grid-cols-2 '>
        <div className='m-5 p-5'>
          <div className='h-64 bg-gray-300' />
          <CheckboxInput />
          <CheckboxInput />
        </div>
      </div>
    </div>
  );
};
