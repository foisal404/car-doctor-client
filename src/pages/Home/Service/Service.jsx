import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [asc, setAsc] = useState(true);
  const [services, SetServices] = useState([]);
  const refFeild=useRef(null)
  const [search,setSearch]=useState('')
  const handleSearch=()=>{
    setSearch(refFeild.current.value);
  }
  useEffect(() => {
    fetch(`http://localhost:5000/services?sort=${asc ? "asc" : "desc"}&search=${search}`)
      .then((res) => res.json())
      .then((data) => SetServices(data));
  }, [asc,search]);
  // console.log(services)
  return (
    <div className="text-center my-20">
      <h2 className="text-orange-600 text-sm font-bold">About Us</h2>
      <h2 className="text-5xl">Our Service Area</h2>
      <p className="my-5">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which dont look even slightly believable.
      </p>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered"
          ref={refFeild}
        />
        <button onClick={handleSearch} className="btn">Q</button>
      </div>
      <button className="text-red-500" onClick={() => setAsc(!asc)}>
        {asc ? "Price : high to low" : "Price : low to high"}
      </button>
      <div className="grid grid-cols-3 gap-6 justify-items-center mt-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
