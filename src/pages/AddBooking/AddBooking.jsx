import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const AddBooking = () => {
    const {user}=useContext(AuthContext)
  const loader = useLoaderData();
  const { _id,title,img,price } = loader;
  console.log(loader);
  const handlerBooking = (event) => {
    event.preventDefault();
    const book=event.target;
    const name=book.name.value;
    const date=book.date.value;
    const email=book.email.value;
    const price=book.price.value;
    const details={
        email,name,
        date,price,
        img,service_id:_id,title
    }
    console.log(details)
    fetch('http://localhost:5000/bookings',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(details)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
  };
  return (
    <div>
      <h2>hello {title}</h2>
      <form className="card-body" onSubmit={handlerBooking}>
        <div className="grid grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="price"
              defaultValue={`$` + price}
              name="price"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-error" type="submit">
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooking;
