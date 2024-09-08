import React from 'react'
import Swal from 'sweetalert2'
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Contact() {
    document.title = 'Dkmovie - Contact Us';
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "660beee5-b988-458e-b37b-00af60ead742");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });

            event.target.reset();
        } else {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong, please try again.",
                icon: "error"
            });
        }
    };

    return (
        <>
            <div className='overflow-hidden w-full h-screen bg-gradient-to-r from-[#0c0c0c] to-[#24cfa724] flex flex-col justify-start items-start'>
                {/* nav */}
                <div className='flex flex-col w-full h-[10%] bg-gradient-to-r from-[#0d342b] to-[#0c0c0c] border-b-[2px] border-zinc-400 sm:border-none'>
                    <div className='w-full h-full px-5 py-2 flex items-center justify-between text-zinc-400 sm:px-10 '>
                        <div className='trend flex justify-center items-center gap-1 '><span className=' sm:text-2xl'><FaPhoneAlt /></span><h1 className='text-[5vw] font-semibold sm:text-[2vw]'>Contact Us</h1></div>
                        <Link onClick={() => navigate(-1)}><FaRegWindowClose className='text-red-800 hover:text-red-600 text-2xl sm:text-4xl' /></Link>
                    </div>
                </div>
                {/* contact */}
                <div className='w-full h-full flex justify-center items-center'>
                    <form onSubmit={onSubmit} className='w-[85%] bg-zinc-800 py-5 px-4 rounded-md text-white sm:px-5 sm:w-[30%]'>
                        <h1 className='text-2xl font-bold text-center'>Contact Form</h1>
                        <div className='mt-6'>
                            <label className='font-medium'>Full Name</label>
                            <input name='name' type="text" className='w-full h-10 mt-1 bg-transparent border-[2px] border-[#24cfa6] outline-none rounded-md p-2' placeholder='Enter your name' required />
                        </div>
                        <div className='mt-5'>
                            <label className='font-medium'>Email Address</label>
                            <input name='email' type="email" className='w-full h-10 mt-1 bg-transparent border-[2px] border-[#24cfa6] outline-none rounded-md p-2' placeholder='Enter your email' required />
                        </div>
                        <div className='mt-5'>
                            <label className='font-medium'>Your Message</label>
                            <textarea name='message' className='w-full mt-1 h-40 bg-transparent border-[2px] border-[#24cfa6] outline-none rounded-md p-2 resize-none sm:h-48' placeholder='Enter your message'></textarea>
                        </div>
                        <button type='submit' className='px-3 py-2 mt-4 w-full font-medium rounded-md duration-300 text-lg text-white bg-[#24cfa6] hover:bg-[#167c64]'>Sent Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;
