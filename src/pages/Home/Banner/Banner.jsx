import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
const Banner = () => {
  const bannerInfo = (
    <div className="absolute rounded-lg flex items-center top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  text-white  ">
      <div className="md:w-5/12 space-y-5 pl-10">
        <h2 className=" text-4xl md:text-7xl ">Affordable Price For Car Servicing</h2>
        <p>
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div>
          <button className="btn btn-warning">Discover More</button>
          <button className="btn btn-outline btn-success">
            Latest Project
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[37.5rem]">
        <img src={img1} className="w-full h-full rounded-lg" />
        {
            bannerInfo
        }
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[37.5rem]">
        <img src={img2} className="w-full h-full" />
        {
            bannerInfo
        }
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[37.5rem]">
        <img src={img3} className="w-full h-full" />
        {
            bannerInfo
        }
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[37.5rem]">
        <img src={img4} className="w-full h-full" />
        {
            bannerInfo
        }
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
