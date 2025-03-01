import React from 'react';
import { motion } from 'framer-motion';
import End from '../components/end.jsx';


const Footer = () => {
  return (
<section className='h-min-content flex-col flex justify-center items-center mt-44'>

    {/* <div className='flex flex-col justify-between items-center mt-7 '>
    <End client:load/></div> */}
   


<div className='flex w-full justify-start items-end '>
    <ul className='flex flex-row  gap-10 p-40'>

        <li >
            <a className='font-mono text-5xl text-secondary' href="mailto:enzo.buranello.pro@gmail.com">mail</a>
        </li>

        <li>
            <a className='font-mono text-5xl text-secondary' href="">phone</a>
        </li>

        <li>
            <a className='font-mono text-5xl text-secondary' href="https://dribbble.com/enooui">dribbble</a>
        </li>
    
    </ul>
</div>


</section>
  );
};

export default Footer;