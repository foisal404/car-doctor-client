import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id,title,img,price}=service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="service"
          className="h-[200px] w-full mx-5 mt-5"
        />
      </figure>
      <div className="card-body m-5">
        <h2 className="card-title">{title}</h2>
        <p className="text-left text-red-600">Price : ${price}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary" ><Link to={`booking/${_id}`}>Book Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
