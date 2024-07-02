import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Registration = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name*</span>
          </label>
          <input type="text" placeholder="First Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" placeholder="Last Name" className="input input-bordered" />
         </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" placeholder="User Name" className="input input-bordered" />
         </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date Of Birth</span>
          </label>
          <input type="date"  className="input input-bordered" />
         </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number" placeholder="Phone Number" className="input input-bordered" />
         </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nationality</span>
          </label>
          <input type="text" placeholder="Nationality" className="input input-bordered" />
         </div>
         <h1>Already Have an account.<span><a href="/login" className="link link-error">Log In</a></span></h1>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
      </form>
    </div>
  </div>
</div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;