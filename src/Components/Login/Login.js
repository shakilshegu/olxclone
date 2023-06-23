import React,{useState,useContext} from 'react';
import { FirebseContext } from '../../store/Context';
import{useNavigate}from "react-router-dom"
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const Navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebseContext)

  const handleLogin =(e)=>{
    e.preventDefault()
    console.log("new Email = "+email);
    console.log("new Password = "+ password);

    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      Navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
