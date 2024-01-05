import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Image1 from "../../assets/image1.png";
import { Forget } from '../signup/Forget';
import { Homepage } from '../homepage/Homepage';
import { padding } from '@mui/system';



export const Login = ()=>{
  
    return(
        
            <div className='mt-5'>
                
        <form  class="shadow-lg p-3 mb-5 bg-body rounded">
            <div className="l1 mt-5 pb-2">  
            <img className='w-20 mx-auto'style={{width:"250px"}} src={Image1} alt="HTML icon" />
            </div>
            <p style={{textAlign:"center", marginTop:"0px",paddingTop:"0", fontSize:"32px", color:"#717070", font:"Poppins"}}>Welcome to Digitalflake Admin</p>
            <div className='mx-4'>
            <label style={{marginTop:"2vh", marginBottom:"2vh", color:"#676767"}} htmlFor="email">Email ID</label>
            <input type="email" className='form-control' id="email" name="email" />
            </div>
            <div className='mx-4'>
            <label style={{marginTop:"2vh", marginBottom:"2vh",color:"#676767" }} htmlFor="password">Password</label>
            <input type="password" className='form-control' id="password" name="password" />
            
            </div><div className='text-end'><a href='/forget' style={{color:"#A08CB1"}}>Forgot Password?</a></div><br/>
            <div className='text-center mx-4'>
            <Link to='/homepage'> <button type="button" className=" btn form-control" style={{backgroundColor:"#5C218B", color:"white", borderRadius:"8px"}}> Login</button></Link> <br /><br />
            
            
            </div>

        </form></div>
        
    );
}