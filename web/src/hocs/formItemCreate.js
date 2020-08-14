import React from 'react';
import { FORM_ELEMENT_TYPES } from 'common/constants/formFields.constant';
import { TextInput } from 'components/forminputcomponent/textInput';
import { DropdownInput } from '../components/forminputcomponent/dropdownInput';

export const FormItemCreate = (form,setForm, key,
  kwargs,
  type, others, customLabel, noLabel) => {
  const placeholder=noLabel ? null : customLabel || key.charAt(0).toUpperCase() + key.slice(1)
  switch (type) {
    case FORM_ELEMENT_TYPES.INPUT:
      return (
        <TextInput {...{ value:form[key],
          setValue:(e)=>{setForm({ ...form,[key]:e })},
          placeholder,
          suggestions:others.suggestions||[],
          labelText:others.label,
          kwargs
        }} />
      );
    case FORM_ELEMENT_TYPES.SELECT:
      return (
        <DropdownInput {...{ ...{ value:form[key],
          setValue:(e)=>{setForm({ ...form,[key]:e })},
          placeholder,
          options:others.options,
        } }} />
      )
    default :return null
  }
}
