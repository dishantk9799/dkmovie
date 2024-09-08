import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosInformationCircle } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";

function About() {
    document.title = 'Dkmovie - About';
    const navigate = useNavigate();
    
    return (
        <>
            <div className='overflow-hidden w-full min-h-screen bg-gradient-to-r from-[#0c0c0c] to-[#24cfa724] flex flex-col justify-start items-center'>
                {/* Nav */}
                <div className='flex flex-col w-full h-[10%] bg-gradient-to-r from-[#0d342b] to-[#0c0c0c] border-b-[2px] border-zinc-400 sm:border-none'>
                    <div className='w-full h-full px-5 py-2 flex items-center justify-between text-zinc-400 sm:px-10'>
                        <div className='trend flex justify-center items-center gap-1'>
                            <span className='mt-1 text-lg sm:text-3xl'><IoIosInformationCircle /></span>
                            <h1 className='text-[8vw] font-semibold sm:text-[2vw]'>About</h1>
                        </div>
                        <Link onClick={() => navigate(-1)}>
                            <FaRegWindowClose className='text-red-800 hover:text-red-600 text-2xl sm:text-4xl' />
                        </Link>
                    </div>
                </div>

                {/* About content */}
                <div className='flex flex-col items-start justify-start w-full px-4 py-4 sm:px-8 sm:py-8 text-zinc-200'>
                    <div className='w-full sm:w-[60%]'>
                        <h2 className='text-5xl  font-semibold text-[#24cfa7] sm:text-[10vw]'>Dkmovie</h2>
                        <p className='text-base mt-5 font-light sm:text-lg  sm:mt-16'>
                            At <span className='font-semibold text-[#24cfa7]'>Dkmovie</span>, we are passionate about delivering the latest trailers of movies, TV shows, and much more directly to you. Our goal is to provide an engaging platform for all entertainment enthusiasts to discover and enjoy new content.
                        </p>
                        <p className='text-base sm:text-lg leading-relaxed mt-8 font-light'>
                            My name is <span className='font-semibold text-[#24cfa7]'>Dishant Kumawat</span>, and I have always loved the world of movies and TV shows. With Dkmovie, I strive to create a space where you can explore and enjoy trailers for the latest and greatest entertainment.
                        </p>
                        <p className='text-base sm:text-lg leading-relaxed mt-8 font-light'>
                            Whether you're looking for the next blockbuster film, a binge-worthy series, or something new to explore, Dkmovie is here to bring you closer to the stories and characters you love.
                        </p>
                        <p className='text-base sm:text-lg leading-relaxed mt-5 sm:mt-16 font-light'>
                            Thank you for visiting us. Enjoy your time on Dkmovie!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
