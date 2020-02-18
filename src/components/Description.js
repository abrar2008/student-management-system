import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {AuthButton} from '../App'
import withAuthorization from '../auth/withAuthorization';
import { db } from "../firebase";
import SignOutButton from '../auth/SignOut'

export  class Descriptions extends Component {
 
    render() {
     
        return (
            <div class="wrap">
  <header>
    <div class="container">
      <h1><Link to='/'>Student's site</Link></h1>
      <nav>
        <ul className="navig">
          <li className="dsh"><Link to='/layout' className='m4' >DASHBOARD</Link></li>
          <li  className="hi" style={{marginTop:'-38px',marginLeft:'50pc'}}><SignOutButton/></li>
        </ul>
      </nav>
      
    </div>
  </header>
  <div className="container">
    <aside style={{width:'188px', marginTop:'18px', marginLeft:'-15px'}}>
      <h3>Categories</h3>
      <ul className="categories">
        <li><span><Link to ="/program">Programs</Link></span></li>
        <li><span><Link to ="/exam">Exam Details</Link></span></li>
        <li><span><Link to ="/notes">Notes</Link></span></li>
        <li><span><Link to ="/announcement">Announcements</Link></span></li>
        <li><span><Link to ="/description">Descriptions</Link></span></li>
        
        
        <li><span><Link to ="/quiz">Quiz </Link></span></li>
        
        
        
      </ul>
      
      
    </aside>
    <section id="content">
    <div class="inside">
        <h2> DESCRIPTION</h2>
 </div>
    </section>
    
  </div>
  
</div>

        );
    }
}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Descriptions);

