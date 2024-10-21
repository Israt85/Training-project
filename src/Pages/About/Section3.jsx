import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";
import img2 from '../../assets/aboutsec3.jpeg'
import play from '../../assets/play.png'

const Section3 = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto h-[531px] py-10 text-white bg-gradient-to-t from-[#3B480D] to-[#D0FD3E]'>
            <div className="grid pt-8 lg:grid-cols-4 grid-cols-2 justify-center mx-10 items-center px-4 gap-10">
  <div className="text-center">
    <p className="font-teko text-4xl lg:text-6xl font-bold">
      600K+
    </p>
    <p>WORKING HOURS</p>
  </div>
  <div className="text-center">
    <p className="font-teko text-4xl lg:text-6xl font-bold">
      790+
    </p>
    <p>SUCCESS PROGRAM</p>
  </div>
  <div className="text-center">
    <p className="font-teko text-4xl lg:text-6xl font-bold">
      2558+
    </p>
    <p>HAPPY CLIENTS</p>
  </div>
  <div className="text-center">
    <p className="font-teko text-4xl lg:text-6xl font-bold">
      830+
    </p>
    <p>PERFECT BODIES</p>
  </div>
</div>

            
        </div>
        <div className="max-w-3xl relative mx-auto -mt-80 lg:-mt-96 h-auto md:h-[500px]">
        <img className="my-16" src={img2} alt="" />
       <div className="w-full flex justify-center items-center absolute inset-0 border">
       <img className="  mx-auto w-20 h-20  lg:w-[100px] lg:h-[100px]" src={play} alt="" />
       </div>

        </div>
        </div>
    );
};

export default Section3;