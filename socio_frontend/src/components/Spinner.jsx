import React from 'react';
import {DNA} from 'react-loader-spinner';


const Spinner = ({message}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
    <DNA
    type="DNA"
    color="#808080"
    height={80}
    width={80}
    className="m-5"/>
    <p className="text-lg text-center px-2">{message}</p>
    </div>
  )
}

export default Spinner