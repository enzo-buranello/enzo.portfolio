import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
<section className='h-min-content flex-col flex justify-center items-center mb-16'>
<div className="border-t-2 border-gray-300  w-5/6" />

<div className='flex w-full justify-start items-end h-[50rem]'>
    <ul className='flex flex-row  gap-10 p-40'>

        <li >
            <a className='font-mono text-5xl text-secondary' href="">mail</a>
        </li>

        <li>
            <a className='font-mono text-5xl text-secondary' href="">phone</a>
        </li>

        <li>
            <a className='font-mono text-5xl text-secondary' href="">dribbble</a>
        </li>
    
    </ul>
</div>

</section>
  );
};

export default Footer;