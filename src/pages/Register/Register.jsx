import { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const {signUp}=useContext(AuthContext)
    const handlerForm=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        // console.log(name,email,password)
        signUp(email,password)
        .then(result=>{
            const createdUser=result.user;
            console.log(createdUser)
        })
        .catch(error=>{
            console.error(error.message);
        })
        
    }
    return (
        <div className="hero min-h-screen">
      <div className="hero-content w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 ">
            <img src={img} alt="" />
        </div>
        <div className="lg:w-1/2 border-2  lg:py-20">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
          <form className="card-body" onSubmit={handlerForm}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name='name'
                className="input input-bordered"
              />
            </div>
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type='submit'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;