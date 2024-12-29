import React, { useEffect } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Reviews = () => {
    const questions = [
        { title: "What is your favorite hobby?", link: "/" },
        { title: "What is your favorite travel destination?", link: "/" },
        { title: "What is your favorite travel destination?", link: "/" },
        { title: "What is your favorite hobby?", link: "/" },
        { title: "What is your favorite travel destination?", link: "/" },



    ];


    const rows = [[], [], []];
    questions.forEach((question, index) => {
        rows[index % 3].push(question);
        console.log("Test Question ", question, index % 3);
    });

    return (
        <div className="grid grid-row-3 md:grid-row-3 gap-4" >
            {rows.map((row, index) => (
                <Marquee
                    key={index}
                    direction={index % 3 === 0 ? 'right' : index % 3 === 1 ? 'left' : 'right'}
                    speed={index % 3 === 0 ? '30' : index % 3 === 1 ? '50' : '30'}
                    gradient={false}
                >
                    <div className="flex">
                        {row.map((question, index) => (

                            <div key={index} className='bg-gray-600 text-white font-roboto rounded-md p-3 flex space-x-1 m-1 hover:underline hover:underline-offset-1'>
                                <Link to={question.link} className='flex items-center  '>
                                    <p>{question.title}</p>
                                    <span><MdOutlineArrowOutward size={20} color='white' /></span>
                                </Link>
                            </div>
                        ))}

                    </div>
                </Marquee>
            ))}

        </div >
    );
};

export default Reviews;