import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginactions } from './store/redux';
import { useDispatch } from 'react-redux'; 

const Login = () => {
    const apikey = import.meta.env.VITE_REACT_APP_API_KEY;
    const reginput=useRef()
    const regpass=useRef()
    const logininput=useRef()
    const loginpassword=useRef()
    const [formState, setFormState] = useState(false);
    const navigate=useNavigate()
    const dispatch = useDispatch();

    const handleRegister = () => {
        setFormState(!formState);
    };


    const onregsterhandler=async(e)=>{
        e.preventDefault()
        const email=reginput.current.value
        const pass=regpass.current.value
        console.log(email,pass)
         try{
            const response= await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apikey}`,{
                method:"POST",
                body:JSON.stringify({
                  email:email ,
                  password:pass,
                  returnSecureToken:true
                  }),
                  headers:{ 
                    "Content-Type":"application/json"
                    }

            })
            if(response.ok){
                const data=await response.json()
                
                console.log(data)
                reginput.current.value=''
                regpass.current.value=''
                alert('regestration success')
                 
               
            }
            

         }catch(e){
            console.log(e)

         }

    }
    const onloginhandler=async(e)=>{
        e.preventDefault()
        const email=logininput.current.value
        const pass=loginpassword.current.value
        console.log(email,pass)
         try{
            const response= await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apikey}`,{
                method:"POST",
                body:JSON.stringify({
                  email:email ,
                  password:pass,
                  returnSecureToken:true
                  }),
                  headers:{ 
                    "Content-Type":"application/json"
                    }

            })
            if(response.ok){
                const data=await response.json()
                
                logininput.current.value=''
                loginpassword.current.value=''
                alert('login success')
                dispatch(loginactions.setlogout())
                navigate('/')
                
               
            }
            

         }catch(e){
            console.log(e)

         }

    }
    



    return (
        <div className="flex items-center justify-center min-h-screen  absolute top-0 left-28 right-28  text-white">
            <div className="w-full max-w-md p-6 bg-red-950 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {formState ? 'Register' : 'Login'}
                </h2>
                {
                    //login
                    !formState && (
                        <form onSubmit={onloginhandler}  className="space-y-4">
                            <div>
                                <label className="block text-lg font-semibold">Email:</label>
                                <input 
                                 ref={logininput}
                                    type="text" 
                                    name="username" 
                                    className="w-full p-2 mt-1 text-black  border-2 border-[#800000] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a52a2a]"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-semibold">Password:</label>
                                <input 
                                ref={loginpassword}
                                    type="password" 
                                    name="password" 
                                    className="w-full p-2 mt-1 text-black border-2 border-[#800000] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a52a2a]"
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="w-full p-2 text-lg font-bold bg-[#660000] rounded-lg hover:bg-[#a52a2a] transition-colors"
                            >
                                Submit
                            </button>
                            <div className="text-center">
                                <span>Don't have an account? </span>
                                <button 
                                    type="button" 
                                    onClick={handleRegister} 
                                    className="text-[#a52a2a] underline hover:text-[#a52a2a]/75"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    )
                }
                {
                    //regester
                    formState && (
                        <form onSubmit={onregsterhandler}  className="space-y-4">
                            <div>
                                <label className="block text-lg font-semibold">Email:</label>
                                <input 
                                ref={reginput}
                                    type="email" 
                                    name="email" 
                                    className="w-full p-2 mt-1 text-black border-2 border-[#800000] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a52a2a]"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-semibold">Password:</label>
                                <input 
                                ref={regpass}
                                    type="password" 
                                    name="pass" 
                                    className="w-full p-2 mt-1 text-black border-2 border-[#800000] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a52a2a]"
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="w-full p-2 text-lg font-bold bg-[#660000] rounded-lg hover:bg-[#a52a2a] transition-colors"
                            >
                                Submit
                            </button>
                            <div className="text-center">
                                <span>Have an account? </span>
                                <button 
                                    type="button" 
                                    onClick={handleRegister} 
                                    className="text-[#a52a2a] underline hover:text-[#a52a2a]/75"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    )
                }
            </div>
        </div>
    );
};

export default Login;
