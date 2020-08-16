import { FORM_ELEMENT_TYPES } from '../constants/formFields.constant';

export const CategoryBasedFields ={
  mobiles:[
    {
      key:'screenResolution',
      type:FORM_ELEMENT_TYPES.INPUT,
      customLabel: 'Screen Resolution',
      others:{}
    },
    {
      key:'processor',
      type:FORM_ELEMENT_TYPES.INPUT,
      customLabel: 'Processor',
      others:{}
    },
    {
      key:'battery',
      type:FORM_ELEMENT_TYPES.INPUT,
      customLabel: 'Battery',
      others:{}
    },
  ],
  watches:[
    {
      key:'diameter',
      type:FORM_ELEMENT_TYPES.INPUT,
      customLabel: 'Diameter',
      others:{}
    },
    {
      key:'type',
      type:FORM_ELEMENT_TYPES.INPUT,
      customLabel: 'Type',
      others:{}

    },
    {
      key:'waterProof',
      type:FORM_ELEMENT_TYPES.INPUT,
      customLabel: 'Water Proof',
      others:{}
    },
  ],
}
