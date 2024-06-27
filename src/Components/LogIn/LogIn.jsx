import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../../Firebase.init";
import { useState } from "react";

const LogIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [viewer, setViewer] = useState(null);

    const handleGoogleLog = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setViewer(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out");
                setViewer(null);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <div>
                {viewer ? (
                    <>

                        <div className="card bg-base-100 w-96 md:ml-[400px] shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={viewer.photoURL}
                                    alt="User Avatar"
                                    className="rounded-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{viewer.displayName}</h2>
                                <p>{viewer.email}</p>
                                <div className="card-actions">
                                    <button onClick={handleLogOut} className="btn mt-3 hover:border-[2px] hover:border-black" > Log Out</button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="hero bg-base-200 min-h-screen">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Login now!</h1>
                                    <p className="py-6">
                                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                </div>
                                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                    <form className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" placeholder="password" className="input input-bordered" required />
                                            <label className="label">
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                            </label>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn">Login</button>
                                            <button onClick={handleGoogleLog} className="btn  mt-3 hover:border-[2px] hover:border-black"
                                            >
                                                <FcGoogle /> Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </>

                )}
            </div>
            <Footer />
        </div>
    );
};

export default LogIn;
