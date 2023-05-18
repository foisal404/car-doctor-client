import { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
const Login = () => {
    const {signUPWithGoogle,logIn}=useContext(AuthContext)
    const handlerForm=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        logIn(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    const withGoogle=()=>{
        signUPWithGoogle()
        .then((result)=>{
            const loggedUser=result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 ">
            <img src={img} alt="" />
        </div>
        <div className="lg:w-1/2 border-2  lg:py-20">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form className="card-body" onSubmit={handlerForm}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name='email'
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name='password'
                className="input input-bordered"
              />
              <label className="label">
                <p>
                  New Here? go to <Link to='/register' className='text-orange-600'>register</Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error" type='submit'>Login</button>
            </div>
          </form>
          <div className="form-control mx-7 mt-6">
              <button className="btn btn-error" onClick={withGoogle}>Login With google</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
