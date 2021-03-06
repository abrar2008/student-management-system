import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {AuthButton} from '../App'
import withAuthorization from '../auth/withAuthorization';
import { db } from "../firebase";
import SignOutButton from '../auth/SignOut'

export  class Programs extends Component {
  
    render() {
        return (
            <div class="wrap">
  <header>
    <div class="container">
      <h1><Link to='/'>Student's site</Link></h1>
      <nav>
        <ul className="navig">
          <li className="dsh"><Link to='/layout' className='m4' >DASHBOARD</Link></li>
          {/* <li><a href="about-us.html" class="m2">About Us</a></li>
          <li><a href="articles.html" class="m3">Our Articles</a></li> */}
          <li  className="hi" style={{marginTop:'-38px',marginLeft:'50pc'}}><SignOutButton/></li>
          {/* <li class="last"><a href="sitemap.html" class="m5">Sitemap</a></li> */}
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
        <h2>PROGRAMS</h2><br/>
        <h2>We are <span>Offering these programs</span></h2> <br/>
        
 </div>
 <h4><span>Computer Sciences</span></h4>
 <h4><span>Computer Engineering</span></h4>
 <h4><span>Software Engineering</span></h4>
 <h4><span>Electrical Engineering</span></h4>
 <h4><span>Civil Engineering</span></h4>
 <h4><span>Mechanical Engineering</span></h4>
 <h4><span>Eleectronics Engineering</span></h4>
    </section>
    
  </div>
  
</div>

        );
    }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Programs);

