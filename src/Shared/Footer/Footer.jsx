import React from 'react';
import footer from '../../assets/footerright.png';
import footer2 from '../../assets/footerleft.png';
import logo from '../../assets/Logotraining.png';

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto h-auto bg-black'>
            <div className='flex justify-between py-10 items-center'>

                <div className='lg:block hidden'>
                    <img className='lg:w-[300px] lg:h-[300px]' src={footer2} alt="" />
                </div>


                <div className='text-center flex-grow'>
                    <img className='w-[150px] h-[140px] mx-auto' src={logo} alt="" />

                    <div className='flex justify-center my-4'>

                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.799805" y="0.469727" width="44" height="44" rx="22" fill="#212121" />
                            <path d="M27.1525 23.8447H24.5157V31.7197H21.0001V23.8447H18.1173V20.6104H21.0001V18.1143C21.0001 15.3018 22.6876 13.7197 25.254 13.7197C26.4845 13.7197 27.7853 13.9658 27.7853 13.9658V16.7432H26.3439C24.9376 16.7432 24.5157 17.5869 24.5157 18.501V20.6104H27.6447L27.1525 23.8447Z" fill="white" />
                        </svg>
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-4'>
                            <rect x="0.5" y="0.469727" width="44" height="44" rx="22" fill="#212121" />
                            <path d="M32.2682 17.4872C32.1799 17.1416 32.0107 16.822 31.7745 16.5546C31.5383 16.2873 31.2419 16.08 30.9098 15.9497C27.6961 14.7085 22.5811 14.7197 22.2998 14.7197C22.0186 14.7197 16.9036 14.7085 13.6898 15.9497C13.3577 16.08 13.0613 16.2873 12.8251 16.5546C12.589 16.822 12.4197 17.1416 12.3314 17.4872C12.0886 18.4229 11.7998 20.1329 11.7998 22.9697C11.7998 25.8066 12.0886 27.5166 12.3314 28.4522C12.4196 28.798 12.5888 29.1179 12.825 29.3854C13.0612 29.6529 13.3576 29.8603 13.6898 29.9907C16.7686 31.1785 21.5873 31.2197 22.2379 31.2197H22.3617C23.0123 31.2197 27.8339 31.1785 30.9098 29.9907C31.242 29.8603 31.5384 29.6529 31.7747 29.3854C32.0109 29.1179 32.18 28.798 32.2682 28.4522C32.5111 27.5147 32.7998 25.8066 32.7998 22.9697C32.7998 20.1329 32.5111 18.4229 32.2682 17.4872ZM25.3551 23.581L21.6051 26.206C21.4929 26.2846 21.3614 26.3309 21.2247 26.34C21.0881 26.3492 20.9515 26.3207 20.8299 26.2577C20.7083 26.1947 20.6062 26.0996 20.5348 25.9828C20.4634 25.8659 20.4254 25.7317 20.4248 25.5947V20.3447C20.4248 20.2075 20.4625 20.073 20.5337 19.9557C20.6049 19.8384 20.7069 19.7429 20.8287 19.6796C20.9504 19.6163 21.0871 19.5876 21.224 19.5966C21.3609 19.6056 21.4927 19.6519 21.6051 19.7307L25.3551 22.3557C25.4538 22.4248 25.5343 22.5168 25.5899 22.6237C25.6455 22.7305 25.6745 22.8492 25.6745 22.9697C25.6745 23.0902 25.6455 23.2089 25.5899 23.3158C25.5343 23.4227 25.4538 23.5146 25.3551 23.5838V23.581Z" fill="white" />
                        </svg>
                    </div>


                    <div className='max-w-[800px] px-2 mx-auto text-gray-400'>
                        <p className='my-2 text-xs'>andrewspersonaltraining19@gmail.com</p>
                        <p>211 Shumaker Road, Buckingham, VA 23921, United States</p>
                    </div>


                    <div className='flex flex-wrap items-center gap-4 mb-6 my-3 list-none justify-center text-gray-400'>
                        <li className='hover:text-white'>Home</li>
                        <li className='hover:text-white'>About</li>
                        <li className='hover:text-white'>Contact</li>
                        <li className='hover:text-white'>Terms & Conditions</li>
                    </div>


                    <p className='text-center text-gray-600 px-1'>Andrews Personal Training © 2024 All Rights Reserved</p>
                </div>

                <div className='lg:block hidden'>
                    <img className='w-[300px] h-[300px]' src={footer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
