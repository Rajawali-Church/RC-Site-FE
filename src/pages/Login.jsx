import React, { useEffect, useRef, useState } from "react";
import background from '../assets/login_back.jpg';
import logo from '../assets/rc_logo.png';
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/sliceUser";
import { useNavigate } from "react-router-dom";

function Login() {

    const api_url = process.env.REACT_APP_API_URL;

    const [action, setAction] = useState('login');
    const [loginInputData, setLoginInputData] = useState({username: '', password: ''});
    const [signUpinputData, setSignUpInputData] = useState({full_name: '', username: '', password: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [test, setTest] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const refLogin = useRef(null), refSignup = useRef(null);

    const startAnimate = () => {
        const login = refLogin.current;
        const signup = refSignup.current;

        if (action === 'login') {
            login.classList.add("hidden");
            signup.classList.remove("hidden");
            signup.classList.add("flex");
            login.classList.add("inactive-dx");
            signup.classList.add("active-sx");
            login.classList.remove("active-dx");
            signup.classList.remove("inactive-sx");
            
            setAction('signup');
        } else {
            signup.classList.add("hidden");
            login.classList.remove("hidden");
            login.classList.add("flex");
            login.classList.add("active-dx");
            signup.classList.add("inactive-sx");    
            login.classList.remove("inactive-dx");
            signup.classList.remove("active-sx");
            
            setAction('login');
        }
    }

    const handleInputSignIn = (e) => {
        setLoginInputData({...loginInputData, [e.target.name]: e.target.value});
    }

    const handleInputSignUp = (e) => {
        setSignUpInputData({...signUpinputData, [e.target.name]: e.target.value});
    }

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            setTest('bisa 1');
            const res = await axios.post(api_url + '/login', loginInputData);
            setTest('bisa 2');

            console.log(res.data);

            dispatch(saveUser(
                {
                    token: res.data.data.token,
                    full_name: res.data.data.user.full_name,
                    role_id: res.data.data.user.role_id,
                    username: res.data.data.user.username,
                    id: res.data.data.user.id,
                }
            ));

            navigate('/dashboard');

            setIsLoading(false);
        } catch (err) {
            setTest(err);
            console.log(err.response);

            if (err.response.status === 422) {

            } else if (err.response.status === 500) {

            } else {

            }

            setIsLoading(false);
        }
    }

    useEffect(() => {
        const introSection = document.getElementById("modal");
        introSection.style.opacity = 0;
        setTimeout(() => {
            introSection.style.transition = "opacity 1s";
            introSection.classList.add("slide-in");
            introSection.style.opacity = 1;
        }, 1);

    }, []);

    return (
        <div className="relative flex flex-col items-center place-content-center bg-black w-screen h-screen text-white">
            <img src={background} className="z-0 opacity-60 absolute w-screen h-screen object-cover" />
            
            <input type="text" className="text-black" value={test}></input>

            <div className="z-10 flex items-center gap-2 mb-4">
                <img onClick={() => navigate('/')} className="h-16 cursor-pointer" src={logo} />
                <p className="text-4xl font-semibold mb-4">Rajawali Church</p>
            </div>

            <div id="modal" className="relative z-10 lg:w-1/3 sm:w-11/12 p-6 bg-gray-800">
                <div ref={refLogin} className="active-dx flex flex-col items-center w-full">
                    <p className="text-2xl mb-10 font-bold">Sign in to Your Account</p>
                    <div className="w-full">
                        <label className="text-base">Username</label>
                        <input onChange={handleInputSignIn} name="username" className="mt-2 rounded-lg w-full bg-gray-700 border-gray-600" type="text" required />
                        
                        <div className="my-7"></div>

                        <label className="text-base">Password</label>
                        <input onChange={handleInputSignIn} name="password" className="mt-2 rounded-lg w-full bg-gray-700 border-gray-600" type="password" required />

                        <div className="mt-7 flex place-content-between">
                            <div className="gap-2 flex items-center">
                                <input className="rounded bg-gray-700 border-gray-600" type="checkbox" />
                                <p className="text-sm">Remember me</p>
                            </div>
                            <div className="text-sm">
                                <a className="text-blue-500 hover:underline font-semibold cursor-pointer">Forgot Password?</a>
                            </div>
                        </div>

                        <div className="my-6"></div>

                        <button onClick={handleLogin} className="flex flex-col items-center w-full mb-3 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg p-2">
                            <p className="flex items-center">
                                {isLoading ? (
                                    <div>
                                        <svg aria-hidden="true" className="inline w-3 h-3 mr-1 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                    </div>
                                ) : null}
                                Log in to your account
                            </p>
                        </button>
                        <div className="w-full text-center">
                            <a onClick={startAnimate} className="text-blue-500 hover:underline font-semibold cursor-pointer">Don't have an account?</a>
                        </div>
                    </div>
                </div>
                <div ref={refSignup} className="hidden inactive-sx flex-col items-center">
                    <p className="text-2xl mb-10 font-bold">Sign up new account</p>
                    <div className="w-full">
                        <label className="text-base">Full Name</label>
                        <input onChange={handleInputSignUp} name="full_name" className="mt-2 rounded-lg w-full bg-gray-700 border-gray-600" type="text" required />

                        <div className="my-7"></div>

                        <label className="text-base">Username</label>
                        <input onChange={handleInputSignUp} name="username" className="mt-2 rounded-lg w-full bg-gray-700 border-gray-600" type="text" required />

                        <div className="my-7"></div>

                        <label className="text-base">Password</label>
                        <input onChange={handleInputSignUp} name="password" className="mt-2 rounded-lg w-full bg-gray-700 border-gray-600" type="password" required />

                        <div className="mt-7 flex place-content-between">
                            <div className="gap-2 flex items-center">
                                <input className="rounded bg-gray-700 border-gray-600" type="checkbox" />
                                <p className="text-sm">Remember me</p>
                            </div>
                        </div>

                        <div className="my-6"></div>

                        <button className="w-full mb-3 text-center text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg p-2">Sign up your account</button>
                        <div className="w-full text-center">
                            <a onClick={startAnimate} className="text-blue-500 hover:underline font-semibold cursor-pointer">Have an account?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;