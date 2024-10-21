import React from 'react';
import HeadingTitle from '../../Shared/HeadingTitle/HeadingTitle';
import img1 from '../../assets/sec3img1.jpeg'
import sec3logo from '../../assets/logosec3.png'
import logo2 from '../../assets/logo2.png'
import img2 from '../../assets/sec3img2.jpeg'
import img3 from '../../assets/sec3img3.jpeg'
import img4 from '../../assets/sec3img4.jpeg'
import logo4 from '../../assets/logo3.png'

const Section3 = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-8xl my-20 mx-auto h-[471px] py-10 text-white bg-gradient-to-t from-[#3B480D] to-[#D0FD3E]'>
                <HeadingTitle title={'OUR SERVICES'} subtitle="SOLUTIONS FOR MOVING BETTER       
& FEELING A HEALTHIER"></HeadingTitle>

            </div>
            <div className='grid grid-cols-1 lg:h-[1300px] md:grid-cols-2 gap-8 -mt-60 px-4 lg:px-8'>
                <div className='relative w-full mx-auto h-full'>
                    <img className='w-full h-full object-cover' src={img1} alt="" />
                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'>
                    <div className='absolute bottom-0 left-0 p-6 text-white'>
                        <img className='mt-6' src={sec3logo} alt="" />
                        <h1 className='my-2 text-3xl font-medium font-teko'>
                            PERSONAL TRAINING
                        </h1>
                        <p className='xl:w-[441px] text-base lg:h-[46px] w-full text-gray-300 lg:my-2'>Get customized workout plans with one-on-one coaching to help you reach your fitness goals safely and effectively.</p>
                        <button className='flex gap-2 mt-1 items-center'>Read More <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="24" rx="12" fill="url(#paint0_linear_301_1368)" />
                            <path d="M18.0875 11.4492C18.693 11.8203 18.693 12.6992 18.0875 13.0703L11.2125 17.1328C10.5875 17.5039 9.80625 17.0547 9.80625 16.3125V8.1875C9.80625 7.38672 10.6461 7.05469 11.2125 7.38672L18.0875 11.4492Z" fill="white" />
                            <defs>
                                <linearGradient id="paint0_linear_301_1368" x1="14" y1="0" x2="14" y2="24" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D0FD3E" />
                                    <stop offset="1" stop-color="#3B480D" />
                                </linearGradient>
                            </defs>
                        </svg>
                        </button>

                    </div>
                    </div>
                </div>
                <div className='relative w-full h-full mx-auto'>
<img className='w-full h-full object-cover' src={img2} alt="" />
<div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'>
<div className='absolute left-0 bottom-0 right-0 p-6 text-white'>
<img className='my-4' src={logo2} alt="" />
<h1 className='lg:my-2 text-3xl font-medium font-teko'>
YOGA LESSON
</h1>
<p className='xl:w-[441px] text-base lg:h-[46px] w-full text-gray-300 lg:my-2'>Experience guided yoga sessions to improve flexibility, balance, and mental well-being, suitable for all skill levels.</p>
<button className='flex gap-2 mt-1 items-center'>Read More <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28" height="24" rx="12" fill="url(#paint0_linear_301_1368)"/>
<path d="M18.0875 11.4492C18.693 11.8203 18.693 12.6992 18.0875 13.0703L11.2125 17.1328C10.5875 17.5039 9.80625 17.0547 9.80625 16.3125V8.1875C9.80625 7.38672 10.6461 7.05469 11.2125 7.38672L18.0875 11.4492Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_301_1368" x1="14" y1="0" x2="14" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="#D0FD3E"/>
<stop offset="1" stop-color="#3B480D"/>
</linearGradient>
</defs>
</svg>
</button>

</div>
</div>
</div>
<div className='w-full relative mx-auto h-full'>
<img className='w-full h-full object-cover' src={img3} alt="" />
<div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'>
<div className='absolute left-0 right-0 bottom-0 p-6 text-white'>
<svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M82.7422 27.8125C82.7422 24.3087 81.3503 20.9485 78.8728 18.471C76.3952 15.9934 73.035 14.6016 69.5312 14.6016H16.6875C13.6147 14.603 10.6385 15.6755 8.27121 17.6345C5.90388 19.5935 4.29348 22.3165 3.71716 25.3347C3.14084 28.353 3.63467 31.4777 5.11365 34.1711C6.59262 36.8646 8.96423 38.9582 11.8203 40.0917V69.5312C11.8203 70.8221 12.3331 72.0601 13.2459 72.9729C14.1586 73.8856 15.3966 74.3984 16.6875 74.3984H69.5312C70.8221 74.3984 72.0601 73.8856 72.9729 72.9729C73.8856 72.0601 74.3984 70.8221 74.3984 69.5312V40.0917C76.8574 39.1137 78.9667 37.421 80.454 35.2321C81.9414 33.0433 82.7384 30.4588 82.7422 27.8125ZM15.9922 69.5312V41.0234C16.2216 41.0234 16.4546 41.0234 16.6875 41.0234C17.2407 41.0234 17.7713 40.8037 18.1625 40.4125C18.5537 40.0213 18.7734 39.4907 18.7734 38.9375C18.7734 38.3843 18.5537 37.8537 18.1625 37.4625C17.7713 37.0713 17.2407 36.8516 16.6875 36.8516C14.2902 36.8516 11.9911 35.8992 10.2959 34.2041C8.60075 32.5089 7.64842 30.2098 7.64842 27.8125C7.64842 25.4152 8.60075 23.1161 10.2959 21.4209C11.9911 19.7258 14.2902 18.7734 16.6875 18.7734H50.0625C52.4598 18.7734 54.7589 19.7258 56.4541 21.4209C58.1492 23.1161 59.1015 25.4152 59.1015 27.8125C59.1015 30.2098 58.1492 32.5089 56.4541 34.2041C54.7589 35.8992 52.4598 36.8516 50.0625 36.8516C49.5093 36.8516 48.9787 37.0713 48.5875 37.4625C48.1963 37.8537 47.9765 38.3843 47.9765 38.9375C47.9765 39.4907 48.1963 40.0213 48.5875 40.4125C48.9787 40.8037 49.5093 41.0234 50.0625 41.0234C50.2954 41.0234 50.5283 41.0234 50.7578 41.0234V69.5312C50.7578 69.7157 50.6845 69.8925 50.5541 70.0229C50.4238 70.1533 50.2469 70.2266 50.0625 70.2266H16.6875C16.5031 70.2266 16.3262 70.1533 16.1958 70.0229C16.0654 69.8925 15.9922 69.7157 15.9922 69.5312ZM69.5312 36.8516C68.978 36.8516 68.4474 37.0713 68.0563 37.4625C67.6651 37.8537 67.4453 38.3843 67.4453 38.9375C67.4453 39.4907 67.6651 40.0213 68.0563 40.4125C68.4474 40.8037 68.978 41.0234 69.5312 41.0234C69.7642 41.0234 69.9971 41.0234 70.2265 41.0234V69.5312C70.2265 69.7157 70.1533 69.8925 70.0229 70.0229C69.8925 70.1533 69.7156 70.2266 69.5312 70.2266H54.874C54.9084 69.9963 54.927 69.764 54.9297 69.5312V40.0917C56.9309 39.2967 58.7076 38.0246 60.1048 36.3861C61.5021 34.7475 62.4776 32.7923 62.9465 30.6906C63.4153 28.5888 63.3633 26.4043 62.795 24.3273C62.2267 22.2503 61.1592 20.3436 59.6856 18.7734H69.5312C71.9285 18.7734 74.2277 19.7258 75.9228 21.4209C77.618 23.1161 78.5703 25.4152 78.5703 27.8125C78.5703 30.2098 77.618 32.5089 75.9228 34.2041C74.2277 35.8992 71.9285 36.8516 69.5312 36.8516Z" fill="white"/>
</svg>

<h1 className='lg:my-2 text-3xl font-medium font-teko'>
Nutrition Coaching
</h1>
<p className='xl:w-[441px] text-base lg:h-[46px] w-full text-gray-300 lg:my-2'>Receive tailored meal plans and expert advice to support healthy eating habits and achieve your wellness goals.</p>
<button className='flex mt-1 gap-2 items-center'>Read More <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28" height="24" rx="12" fill="url(#paint0_linear_301_1368)"/>
<path d="M18.0875 11.4492C18.693 11.8203 18.693 12.6992 18.0875 13.0703L11.2125 17.1328C10.5875 17.5039 9.80625 17.0547 9.80625 16.3125V8.1875C9.80625 7.38672 10.6461 7.05469 11.2125 7.38672L18.0875 11.4492Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_301_1368" x1="14" y1="0" x2="14" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="#D0FD3E"/>
<stop offset="1" stop-color="#3B480D"/>
</linearGradient>
</defs>
</svg>
</button>

</div>
</div>
</div>
<div className='w-full mx-auto relative h-full'>
<img className='h-full w-full object-cover' src={img4} alt="" />
<div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'>
<div className='absolute left-0 right-0 bottom-0 p-6 text-white'>
<img className='my-4' src={logo4} alt="" />
<h1 className='lg:my-2 text-3xl font-medium font-teko'>
ONLINE COACHING
</h1>
<p className='xl:w-[445px] text-base lg:h-[65px] w-full lg:my-2 text-gray-300'>Access personalized fitness and nutrition coaching from anywhere with our flexible, online programs designed for your lifestyle.</p>
<button className='flex mt-1 gap-2 items-center'>Read More <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28" height="24" rx="12" fill="url(#paint0_linear_301_1368)"/>
<path d="M18.0875 11.4492C18.693 11.8203 18.693 12.6992 18.0875 13.0703L11.2125 17.1328C10.5875 17.5039 9.80625 17.0547 9.80625 16.3125V8.1875C9.80625 7.38672 10.6461 7.05469 11.2125 7.38672L18.0875 11.4492Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_301_1368" x1="14" y1="0" x2="14" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="#D0FD3E"/>
<stop offset="1" stop-color="#3B480D"/>
</linearGradient>
</defs>
</svg>
</button>

</div>
</div>
</div>
            </div>

        </div>
    );
};

export default Section3;