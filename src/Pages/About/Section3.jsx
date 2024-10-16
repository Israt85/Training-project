import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";
import img2 from '../../assets/aboutsec3.jpeg'
import play from '../../assets/play.png'

const Section3 = () => {
    return (
        <div>
            <div className='max-w-8xl mx-auto h-[531px] py-10 text-white bg-gradient-to-t from-[#3B480D] to-[#D0FD3E]'>
           <div className="flex justify-center gap-10">
            <div>
                <p className="font-teko text-6xl font-bold">
                    600K+
                  
                </p>
                <p>  WORKING HOURS</p>
            </div>
            <div>
                <p className="font-teko text-6xl font-bold">
                    790+
                  
                </p>
                <p>  SUCCESS PROGRAM</p>
            </div>
            <div>
                <p className="font-teko text-6xl font-bold">
                2558+
                  
                </p>
                <p> HAPPY CLIENTS </p>
            </div>
            <div>
                <p className="font-teko text-6xl font-bold">
                   830+
                  
                </p>
                <p> PERFECT BODIES</p>
            </div>
            </div>
            
        </div>
        <div className="max-w-3xl mx-auto -mt-80 h-[550px]">
        <img src={img2} alt="" />
       <div className="w-full -mt-64 border">
       <img className="mx-auto w-[100px] h-[100px]" src={play} alt="" />
       </div>

        </div>
        </div>
    );
};

export default Section3;