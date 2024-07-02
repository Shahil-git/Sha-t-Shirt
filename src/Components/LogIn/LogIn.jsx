import { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase.init";

const LogIn = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const [viewer, setViewer] = useState(null);
    const [error, setError] = useState('');

    

    const handleGoogleLog = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setViewer(user);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    };

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                const logInGit = result.user;
                console.log(logInGit);
                setViewer(logInGit);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    };
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if(password < 6){
            setError("Password should be at least 6 characters")
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setViewer(result.user);
                setError('');
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    };

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out");
                setViewer(null);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    };

    return (
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <div>
                {viewer ? (
                    <div className="card bg-base-100 w-96 md:ml-[400px] shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={viewer.photoURL} alt="User Avatar" className="rounded-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{viewer.displayName}</h2>
                            <p>{viewer.email}</p>
                            <div className="card-actions">
                                <button onClick={handleLogOut} className="btn mt-3 hover:border-[2px] hover:border-black">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="hero bg-base-200 min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Login now!</h1>
                                <p className="py-6">
                                Access your account to continue exploring amazing products and services tailored just for you. If you don't have an account, feel free to register and join our community!
                                </p>
                            </div>
                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <form onSubmit={handleRegister} className="card-body">
                                    {error && <p className="text-red-500">{error}</p>}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <p>Don't have an account please <a href="/Registration" className="link link-secondary">Registration</a> </p>
                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn hover:border-[2px] hover:border-black">
                                            Register
                                        </button>
                                        <button type="button" onClick={handleGoogleLog} className="btn mt-3 hover:border-[2px] hover:border-black flex items-center justify-center gap-2">
                                            <FcGoogle /> Login with Google
                                        </button>
                                        <button type="button" onClick={handleGitHubSignIn} className="btn mt-3 hover:border-[2px] hover:border-black flex items-center justify-center gap-2">
                                            <FaGithub /> Login with GitHub
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default LogIn;
