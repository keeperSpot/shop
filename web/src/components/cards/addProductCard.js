import React,{ useState,useEffect } from 'react';
import { search } from 'common/actions/search';
import { CategoryBasedFields } from 'shared/formFields/categoryBasedFields';
import { createState } from '../../common/helpers/createState';
import { AddProductFields } from '../../common/formFields/addProduct.formFields';
import { FormItemCreate } from '../../hocs/formItemCreate';

const InputField=({ placeholder,
  suggestions, value,
  setValue,kwargs,className })=>{
  const [options,setOptions] = useState(suggestions)
  return(
    <div className={className}>
      <div className=''>
        <input
          onKeyUp={(e)=>{
            setOptions(search(e.target.value,null,suggestions,'value'))}}
          value={value}
          className='
          w-full
          text-gray-700
          bg-transparent leading-tight focus:border-2 outline-none'
          id={value}
          onChange={(e)=> {
            setValue(e.target.value)
          }}
          type='text'
          placeholder={placeholder}
          {...kwargs} />
        <div className='pin-t pin-l rounded shadow-md  relative'>
          {options?(
            <ul className='absolute bg-white z-10 rounded-md shadow-lg'>
              {value.length>1?(options||[]).map((option=>(
                <li>
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                  <p
                    onClick={()=>{setValue(option.value); setOptions([])}}
                    className='p-2 block text-black hover:bg-grey-light cursor-pointer'
                  >
                    {option.label}
                  </p>
                </li>
              ))):null}
            </ul>
          ):null}
        </div>
      </div>
    </div>
  )
}

export const AddProductCard = () => {
  const [form,setForm] = useState({ ...createState(AddProductFields),
    ...createState(CategoryBasedFields.mobiles) })
  useEffect(()=>{
    const newField = { ...form,...createState(CategoryBasedFields[form.category]) }
    setForm(newField)
  },[form.category])
  return (
    <div className='shadow m-2 rounded bg-white'>
      <div className='flex justify-start items-center '>
        <div className='flex-initial'>
          <InputField
            className='mx-4 my-2 p-2'
            {...{ value:form[AddProductFields[0].key],
              setValue:(e)=>{
                setForm({ ...form,[AddProductFields[0].key]:e })},
              placeholder:AddProductFields[0].customLabel,
              suggestions:AddProductFields[0].others.suggestions||[],
              labelText:AddProductFields[0].label,
              kwargs:AddProductFields[0].kwargs,
            }} />
        </div>
        -
        <div className='flex-initial'>
          <InputField
            className=' mx-4 my-2 p-2'
            {...{ value:form[AddProductFields[1].key],
              setValue:(e)=>{
                setForm({ ...form,[AddProductFields[1].key]:e })},
              placeholder:AddProductFields[1].customLabel,
              suggestions:AddProductFields[1].others.suggestions||[],
              labelText:AddProductFields[1].label,
              kwargs:AddProductFields[1].kwargs,
            }} />
        </div>
      </div>
      <div className='w-1/2'>
        {AddProductFields.slice(2,3).map(Field=>(
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
      <div className='mx-4 p-2'>
        <div className='flex justify-start items-start'>
          <text className='text-gray-700  text-sm font-bold'>
            Size :
          </text>
          <div className=''>
            <InputField
              className='px-2'
              {...{ value:form[AddProductFields[3].key],
                setValue:(e)=>{
                  setForm({ ...form,[AddProductFields[3].key]:e })},
                placeholder:AddProductFields[3].customLabel,
                suggestions:AddProductFields[3].others.suggestions||[],
                labelText:AddProductFields[3].label,
                kwargs:AddProductFields[3].kwargs,
                defaultValue:AddProductFields[3].others.defaultValue,
              }} />
          </div>
        </div>
        {CategoryBasedFields[form.category]?CategoryBasedFields[form.category].map((Item)=>  (
          <div className='flex justify-start items-start'>
            <text className='text-gray-700  text-sm font-bold'>
              {Item.customLabel}
              {' '}
              :
            </text>
            <div className=''>
              <InputField
                className='px-2'
                {...{ value:form[Item.key],
                  setValue:(e)=>{
                    setForm({ ...form,[Item.key]:e })},
                  placeholder:Item.customLabel,
                  // suggestions:Item.others.suggestions||[],
                  labelText:Item.label,
                  kwargs:Item.kwargs,
                  defaultValue:Item.others.defaultValue,
                }} />
            </div>
          </div>
        )):null}
      </div>
    </div>
  );
};

