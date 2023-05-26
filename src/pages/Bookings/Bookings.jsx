import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";
import { toast } from "react-toastify";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
      method:"GET",
      headers:{
        authorization:`Bearer ${localStorage.getItem("Car_Access_Token")}`
      }
    })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
//   console.log(bookings);
  // console.log(bookings)
  const handleDelate=(id)=>{
    fetch(`http://localhost:5000/bookings/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.deletedCount>0){
        toast("delete booking !",{
          
          theme: "dark",
          })
        const remaining=bookings.filter(book=>book._id!==id)
        setBookings(remaining)
      }
    })
  }
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((book) => (
              <BookingRow key={book._id} data={book} handleDelate={handleDelate}>{book.title}</BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
