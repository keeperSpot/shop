import React from "react";
import { GridCard } from "../../components/gridCard";

export const ProductList = () => {
  const data=[
    {
      name:"product 1",
      price:"234$",
      details:"1 kg",
      inStock:"18",
      start:"5"
    },
    {
      name:"product 1",
      price:"234$",
      details:"1 kg",
      inStock:"18",
      start:"5"
    },
    {
      name: "product 1",
      price: "234$",
      details: "1 kg",
      inStock: "18",
      start: "5"
    },
    {
      name:"product 1",
      price:"234$",
      details:"1 kg",
      inStock:"18",
      start:"5"
    },
    {
      name:"product 1",
      price:"234$",
      details:"1 kg",
      inStock:"18",
      start:"5"
    },
    {
      name:"product 1",
      price:"234$",
      details:"1 kg",
      inStock:"18",
      start:"5"
    },
    {
      name: "product 1",
      price: "234$",
      details: "1 kg",
      inStock: "18",
      start: "5"
    },
    {
      name:"product 1",
      price:"234$",
      details:"1 kg",
      inStock:"18",
      start:"5"
    },
    {
      name:"product 1",
      price:"234$",
      details:"1 kg",
      inStock:"18",
      start:"5"
    }
  ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {data.map((product,index)=>(
        <div className='m-3 p-3'>
          <GridCard {...{ product }} key='index' />
        </div>
      ))}
    </div>
  )
}