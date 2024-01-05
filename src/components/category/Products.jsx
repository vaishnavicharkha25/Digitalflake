import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownMenu, Input } from 'semantic-ui-react';
import { BsArrowBarDown, BsArrowDown, BsDownload, BsMenuDown, BsSquareFill } from 'react-icons/bs';
import { CgArrowDown, CgEditBlackPoint, CgPen } from 'react-icons/cg';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import {AiOutlineDown} from 'react-icons/ai'
import { color } from '@mui/system';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/Sidebar';
import { LuDelete } from 'react-icons/lu';



 const Products = ()=>{
    return(
        <div className='bg-white m-0 p-0'>
        {/* <Navbar/> */}
        <Navbar/>
        <div className='container bg-white m-0 p-0'>   
<div className='row'>
  <div className='col-2' style={{backgroundColor:"#F4F4F4"}}>
<Sidebar/></div>
<div className='col text-center mb-0' style={{marginTop:"10vh", justifyContent:"center" }}>
<div class="shadow-lg p-3 bg-body rounded">
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Milk</td>
      <td>@Lorem Ipsum is simply dummy text</td>
      <td>Active</td>
      <td><CgPen></CgPen></td>
      <td><LuDelete/></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Milk</td>
      <td>@Lorem Ipsum is simply dummy text</td>
      <td>Active</td>
      <td><CgPen></CgPen></td>
      <td><LuDelete/></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Milk</td>
      <td>@Lorem Ipsum is simply dummy text</td>
      <td>Active</td>
      <td><CgPen></CgPen></td>
      <td><LuDelete/></td>
    </tr>
  </tbody>
</table>
</div><br />  
      
</div></div></div></div>
    
    );
}
export default Products