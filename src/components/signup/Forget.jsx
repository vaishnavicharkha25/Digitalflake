import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css';
import { Link } from 'react-router-dom';
export const Forget = ()=>{
    return(
        
        <div style={{justifyContent:"center"}}> 
        <form class="shadow-lg  bg-body rounded" style={{justifyContent:"center"}}>
            <div className='form-group'>
            <h3 style={{color:"#662671", fontSize:"32px", paddingTop:"5vh"}}>Did you forget your password?</h3>
            <div style={{textAlign:"center", color:"#655A5A"}}>Enter your email address and we'll send you a link to restore password</div><br/>
            
            <div className='mx-5'>
            <label style={{marginTop:"2vh", marginBottom:"2vh"}}>Email Address</label>
            <input type="email" className='form-control' id="email" name="email" />
            </div><br/>
            
           
            <div className='text-center mx-5'>
           <Link to='/'> <button type="button" className="btn btn-dark form-control" style={{backgroundColor:"#5C218B"}}>Request reset link</button> </Link>
            
            
            </div>
            <p style={{textAlign:"center"}}> <a href='/' style={{textAlign:"center", marginLeft:"2vw", marginTop:"2vh",paddingBottom:"5vh", marginBottom:"5vh"}}>back to log in</a></p>
            </div>
        </form></div> 
        
    );
}