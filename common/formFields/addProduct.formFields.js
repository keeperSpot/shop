import { FORM_ELEMENT_TYPES } from 'common/constants/formFields.constant';

const options=[
  { value:'MI',label:'Xiomi Mi' },
  { value:'Sony',label:'Sony' },
  { value:'Samsung',label:'Samsung' },
  { value:'Realme',label:'Realme' },
]

const categories = [
  {
    value:'mobiles',
    label:'Mobiles'
  },
  {
    value:'watches',
    label:'Watches'
  }
]

export const AddProductFields = [
  {
    key:'brand_name',
    type:FORM_ELEMENT_TYPES.INPUT,
    others:{
      suggestions:options,
    },
    // defaultValue: 'Brand Name',
    customLabel:'Brand Name'
  },{
    key:'name',
    type:FORM_ELEMENT_TYPES.INPUT,
    others:{
      suggestions:[]
    },
    // defaultValue: 'Product Name',
    customLabel:'Product Name'
  },
  {
    key:'category',
    type:FORM_ELEMENT_TYPES.SELECT,
    others:{
      suggestions:categories,
      options:categories
    },
    defaultValue:'mobiles'
  },
  {
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
