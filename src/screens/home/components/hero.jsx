
import HeroBackground from '../../../assets/backgrounds/carousel-bg-1.png';
import { ArrowUpIcon } from '../../../assets/icons';


const Hero = () => {
  return (
    <div 
    className="min-h-screen flex flex-col justify-center items-center gap-10 bg-cover bg-center"
     style={{ backgroundImage: `url(${HeroBackground})` }}
    >
      <div className='pt-20 flex flex-col space-y-6 text-center mt-10'>
        <h1 className='text-7xl text-white font-bold'>We offer a wide range <br/>of services.</h1>
        <p className='font-bold text-white'>"Hospitality & Event Management, Wedding Catering & Private  Functions, Recreational<br/> Services, Sales & Promotion Services,  Technical & Utility Services, Building Cleaning &<br/> Maintenance,  Housekeeping & Pantry Services, Guest House Management."</p>
      </div>

      <div className='flex items-center gap-3 bg-primary py-3 px-6 rounded-full text-white uppercase text-lg font-bold'>
        <span>Take Counsel</span>
        <div className='flex justify-center items-center size-10 rounded-full bg-white'>
          <img src={ArrowUpIcon} alt="Arrow Up" width={20} height={20} className='rotate-225'/>
        </div>
      </div>

      <div className='flex justify-center items-center size-10 rounded-full bg-white mt-10'>
        <img src={ArrowUpIcon} alt="Arrow Up" width={20} height={20}/>
      </div>
    </div>
  );
};

export default Hero;