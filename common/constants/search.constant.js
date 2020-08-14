export const SEARCH_CONST = {
  'product_search':{
    API_FETCH:true,
    CONFIG:{ url:'/search',method:'get',queryParameter:'q',payload:null }
  },
  'sideBarLinks':{
    API_FETCH:false,
    CONFIG:{ queryParameter:'title' }
  },
  'dropDown':{
    API_FETCH:false
  }
}