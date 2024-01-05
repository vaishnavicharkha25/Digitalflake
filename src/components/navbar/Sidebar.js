import 'bootstrap/dist/css/bootstrap.min.css';
import { CgHome } from "react-icons/cg"
import { TbCategory } from "react-icons/tb";
import { LuPackage } from "react-icons/lu";



const Sidebar = ()=>{
    return(
        
        <div class="container">
        <div class="content">
            
        </div>
        <div class="sidebar">

        
    
       <div style={{height:"100vh", width:"20vw"}}>
        <ul class="nav flex-column">
  <li class="nav-item">
    <div className='row'>
        <div className='col-1 mt-1'>
        <CgHome/>
        </div>
        <div className='col'>
        <a class="nav-link" href="/homepage">Home</a>

        </div>
    </div></li>
    <div className='row'>
        <div className='col-1 mt-1'>
        <TbCategory/>
        </div>
        <div className='col'>
        <a class="nav-link" href="/category">Category</a>

        </div>
    </div>
    <div className='row'>
        <div className='col-1 mt-1'>
        <LuPackage/>
        </div>
        <div className='col'>
        <a class="nav-link" href="/products">Products</a>

        </div>
    </div>
    

</ul>
       </div></div></div>
        
    );
}
export default Sidebar