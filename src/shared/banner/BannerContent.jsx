import Button from "../button/Button";

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";
// custom styles for swiper
import "./customSwiperStyles.css";

const BannerContent = () => {
  const bookingBtnC = <div>Booking</div>;

 const swiper = new Swiper('.swiper',{
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2.5,
    autoplay:{
      delay:5000,
    },
    grabCursor:true,
    initialSlide:0,
    keyboard:{
      enabled: true,
      onlyInViewport: false,
    },
    slideActiveClass: "border-[#F9A51A]",
    spaceBetween:20,

  })

  return (
    <div className="max-w-[1440px] mx-auto w-full bg-[url('https://i.ibb.co/VWSJFD4/banner-bg.jpg')]">

      <div className="bg-black bg-opacity-60 h-full w-full pl-3 md:pl-12 lg:pl-16 2xl:pl-32">

      <div className="flex flex-col md:flex-row gap-8 py-20">
        <div className="text-white md:w-1/3">
          <h1 className="uppercase text-white font-BebasNeue">Cox Bazar</h1>
          <p className="mb-4">
            Cox Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <Button text={bookingBtnC}></Button>
        </div>

        {/* swiper */}
        <div className="md:w-2/3">
          <div className="swiper w-full">

            {/* swiper slides */}
            <div className="swiper-wrapper ">
              <div className="swiper-slide border-4 border-transparent rounded-3xl h-[450px]">
                <img src="https://i.ibb.co/XSkbCBk/Sajek.jpg" alt="" className="max-h-[500px] w-auto rounded-3xl w-full"/>
              </div>
              <div className="swiper-slide border-4 border-transparent rounded-3xl h-[450px]">
                <img src="https://i.ibb.co/G7hyCWq/Sreemongol.jpg" alt="" className="max-h-[500px] w-full rounded-3xl"/>
              </div>
              <div className="swiper-slide border-4 border-transparent rounded-3xl h-[450px]">
                  <img src="https://i.ibb.co/KGbrsyb/sundorbon.jpg" alt="" className="max-h-[500px] rounded-3xl w-full"/>
              </div>
              <div className="swiper-slide border-4 border-transparent rounded-3xl h-[450px]">
                <img src="https://i.ibb.co/KGbrsyb/sundorbon.jpg" alt="" className="max-h-[500px] rounded-3xl w-full"/>
              </div>
        
            </div>

            {/* swiper next-prev */}
            <div className="swiper-next-prev">
              <div className="swiper-button-prev swiper-button"></div>
              <div className="swiper-button-next swiper-button"></div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BannerContent;
