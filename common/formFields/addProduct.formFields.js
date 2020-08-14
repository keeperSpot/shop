import { FORM_ELEMENT_TYPES } from 'common/constants/formFields.constant';

const options=[
  { value:'MI',label:'Xiomi Mi' },
  { value:'Sony',label:'Sony' },
  { value:'Samsung',label:'Samsung' },
  { value:'Realme',label:'Realme' },
]

export const AddProductFields = [
  {
    key:'brand_name',
    type:FORM_ELEMENT_TYPES.SELECT,
    others:{
      options
    },
    customLabel:'Brand Name'
  },{
    key:'name',
    type:FORM_ELEMENT_TYPES.INPUT,
    others:{
      suggestions:[]
    },
    customLabel:'Product Name'
  },{
    key:'country',
    type:FORM_ELEMENT_TYPES.INPUT,
    others:{
      suggestions:[]
    },
    customLabel:'Product Country'
  },{
    key:'brand_country',
    type:FORM_ELEMENT_TYPES.INPUT,
    others:{
      suggestions:[]
    },
    customLabel:'Brand Country'
  },{
    key:'price',
    type:FORM_ELEMENT_TYPES.INPUT,
    others:{
      suggestions:[]
    }
  },
]
