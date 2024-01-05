import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownMenu, Input } from 'semantic-ui-react';
import { BsArrowBarDown, BsArrowDown, BsDownload, BsMenuDown, BsSquareFill } from 'react-icons/bs';
import { CgArrowDown } from 'react-icons/cg';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import {AiOutlineDown} from 'react-icons/ai'
import { color } from '@mui/system';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/Sidebar';
import Image1 from "../../assets/image1.png";


export const Homepage = ()=>{
    return(
        <div className='bg-white m-0 p-0'>
        {/* <Navbar/> */}
        <Navbar/>
        <div className='container bg-white m-0 p-0'>   
<div className='row'>
  <div className='col-2' style={{backgroundColor:"#F4F4F4"}}>
<Sidebar/></div>
<div className='col text-center mb-0' style={{marginTop:"10vh", justifyContent:"center" }}>
<img style={{width:"301px"}} src={Image1} alt="" />
<h4 style={{marginTop:"10px"}}>Welcome to Digitalflake Admin</h4></div><br />  
      
</div></div></div>
    
    );
}