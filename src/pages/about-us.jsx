import React from 'react'
import Layout from '../Components/Layout'
import { FaArrowRight } from "react-icons/fa6";
import Reviews from '../Components/Reviews';

const about_us = () => {
    const chooseUs = [
        "At Mantra Mountain, we are more than just a destination.",
        "We are a journey—a journey to self-discovery, inner peace, and transformation. With world-class amenities, a supportive community, and a deep reverence for nature, we offer an experience that will stay with you long after you leave.",
        "Our team of experienced professionals is dedicated to providing personalized care and guidance to help you achieve your goals.",
        "We offer a variety of programs and activities designed to promote physical, mental, and spiritual well-being."
    ]
    return (
        <Layout className='bg-red-700 min-h-screen'>
            <div className='container mx-auto p-6'>
                <div className='flex flex-col lg:flex-row justify-evenly items-center'>
                    <div className='lg:w-1/2 p-4'>
                        <h1 className='font-bold p-6 text-4xl'>About Us</h1>
                        <p className='mb-4'>Welcome to Mantra Mountain, your gateway to a world of tranquility, inspiration, and transformation. Nestled amidst nature’s most breathtaking landscapes, Mantra Mountain offers a harmonious blend of serenity and adventure, tailored for seekers of peace and purpose.</p>
                        <p className='mb-4'>At Mantra Mountain, we believe in fostering connections—not only with nature but also within ourselves. Whether you’re here to retreat, rejuvenate, or rediscover your inner strength, we’re committed to crafting experiences that leave a lasting impact on your mind, body, and soul.</p>
                    </div>

                    <div className='lg:w-1/2 p-4'>
                        <img src="/aboutusImage.png" alt="About Us" className='w-full h-auto rounded-lg shadow-lg' />
                    </div>
                </div>

                {/* vision */}
                <div className='mt-12'>
                    <div>
                        <h1 className='font-bold p-6 text-4xl'>Vision</h1>
                    </div>
                    <div>
                        <p className='mb-4'>To become a global haven for personal growth, spiritual awakening, and sustainable living by blending the wisdom of ancient traditions with modern comforts. We envision a world where every individual finds their mantra and discovers their unique path to fulfillment.</p>
                    </div>
                </div>

                {/* why choose us */}
                <div className='mt-12'>
                    <div>
                        <h1 className='font-bold p-6 text-4xl'>Why Choose Us?</h1>
                    </div>
                    <div>
                        <ul className=''>
                            {chooseUs.map((item, index) => (
                                <li key={index} className="mb-2 flex items-center">
                                    <FaArrowRight color="red" size={50} className="p-2" />
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Reviews />
            </div>
        </Layout>
    )
}

export default about_us