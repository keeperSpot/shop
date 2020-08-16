import React,{ useState } from "react";
import { createState } from 'common/helpers/createState';
import { AddProductFields } from 'common/formFields/addProduct.formFields';
import { MaterialCommunityIcons } from 'react-web-vector-icons';
import { AddProductCard } from '../../components/cards/addProductCard';

export const GroceriesForm = () => {
  const [dropdownData,setDropdown] = useState('')
  const [form,setForm] = useState([{}])

  return(
    <div className='justify-center'>
      <div className='m-5 p-5 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 '>
        <AddProductCard />
        <div className='flex flex-col justify-center items-center
         shadow m-2 rounded bg-white cursor-default'>
          <MaterialCommunityIcons name='plus-circle-outline' className='bg-gray-700' size={30} />
          <text className='text-gray-700  text-lg font-bold'>Add Variant</text>
        </div>
      </div>
    </div>
  );
};
