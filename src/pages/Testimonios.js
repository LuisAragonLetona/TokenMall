import React from 'react';

import { caracteristicasData } from '../data';
import Testimonialslider from './TestimonialSlider';
const Testimonios = () => {
    const { title, subtitle, list } = caracteristicasData;
    return (
        <section>
            <div className='container-fluid mx-auto'>
                <div className='bg-accent-primary min-h-[600px]'
                data-aos='fade-up'
                data-aos-offset='300'
                >
                    <div className='flex flex-col justify-center px-2 xl:px-0 h-[800px]'>
                        <h2 className='h2 text-white text-center mb-[80px]'>
                        Testimonios
                    </h2>
                        <Testimonialslider />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Testimonios;