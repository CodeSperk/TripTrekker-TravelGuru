import BannerContent from "../../shared/banner/BannerContent";

// import Swiper JS
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper styles
import "swiper/css/bundle";

// custom swiper styles
import "./customSwiper.css";

// import pictures
import sajek from "../../assets/images/Sajek.jpg";
import sreemongol from "../../assets/images/Sreemongol.jpg";
import sundorbon from "../../assets/images/sundorbon.jpg";

const Home = () => {
  const swiper = new Swiper('.swiper',{
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    grabCursor:true,
    initialSlide:1,
    keyboard:{
      enabled: true,
      onlyInViewport: false,
    },
    slideActiveClass: "border-[#F9A51A]",
    spaceBetween:20,
    slidePerView:3,

  })

  return (
    <div className="text-justify">
      <BannerContent></BannerContent>

  

     
    </div>
  );
};

export default Home;
