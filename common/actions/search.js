import React,{ useState } from 'react';

import { SEARCH_CONST } from '../constants/search.constant'

const searchInPayload = (payload,queryParameter,q) => {
  const result=[];
  let i;
  q=q.toLowerCase();
  for(i in payload){
    if(payload[i][queryParameter].toLowerCase().indexOf(q)!==-1){
      // console.log(data[i]['name'].indexOf(q),data[i])
      result.push(payload[i])
    }
  }
  return result
}

export const search = (q,_for,payload,qp) =>{
  // const queryParameter=SEARCH_CONST[_for]['CONFIG']['queryParameter'];
  // const fetchResult=SEARCH_CONST[_for]['API_FETCH'];
  const fetchResult=false;
  const queryParameter=qp;
  if(fetchResult){
    // fetch request logic
  }else{
    return searchInPayload(payload,queryParameter,q)
  }
  return null;
}