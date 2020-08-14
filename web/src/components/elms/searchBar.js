import React,{ useState } from 'react';
// import {} from '../hooks/auth';
// import { useUser } from 'common/hooks/auth';
// import {SEARCH_CONST} from '../common/constants/search.constant.js'
import { search } from '../../common/actions/search';

export const SearchBar = ({ callBack, _for, payload,qp }) => {// for is reserved so _for
    
  const searchWrap = (_q,__for,_payload,_qp) =>{// i changed q to _q and others too bc its already decleard in the upper scope.
    callBack(search(_q,__for,_payload,_qp))
  }

  return(
    <div className='p-4'>
      <input
        placeholder='Search'
        className='bg-white shadow rounded p-2 w-48 my-4'
        onKeyUp={q=>{searchWrap(q.target.value,_for,payload,qp)}}
        />
    </div>
  )
};
