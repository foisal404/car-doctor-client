import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [services,SetServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>SetServices(data))
    },[])
  return (
    <div className="text-center my-20">
      <h2 className="text-orange-600 text-sm font-bold">About Us</h2>
      <h2 className="text-5xl">Our Service Area</h2>
      <p className="my-5">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which dont look even slightly believable.
      </p>
      <div className="grid grid-cols-3 gap-6 justify-items-center mt-12">
        {
            services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Service;
