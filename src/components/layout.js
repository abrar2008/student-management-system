import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import page1 from '../images/1page-img.jpg'
import { AuthButton } from '../App';
import Navigation from '../auth/Navigation';
import withAuthorization from '../auth/withAuthorization';
import { db } from "../firebase";
import SignOutButton from '../auth/SignOut'


 class Layout extends Component {


  

    render() {
      
        return (
          <div>
          
            <div class="wrap">
             
  <header>
    <div class="container">
      <h1><Link to='/layout'></Link></h1>
      <nav>
        <ul className="navig">
          <li className="dsh"><Link to='/layout' className='m4' >DASHBOARD</Link></li>
          <li  className="hi" style={{marginTop:'-38px',marginLeft:'50pc'}}><SignOutButton/></li>
         
        </ul>
      </nav>
      
    </div>
  </header>
  <div className="container">
    <aside style={{width:'180px', marginTop:'18px', marginLeft:'-15px'}}>
      <h3>Categories</h3>
      <ul className="categories">
        <li><span><Link to ="/program">Programs</Link></span></li>
        <li><span><Link to ="/exam">Exam Details</Link></span></li>
        <li><span><Link to ="/notes">Notes</Link></span></li>
        <li><span><Link to ="/announcement">Announcements</Link></span></li>
        
        <li><span><Link to ="/description">Descriptions</Link></span></li>
        
        <li><span><Link to ="/quiz">Quiz </Link></span></li>
        
        
        
      </ul>
      <form action="#" id="newsletter-form">
        
      </form>
      
      
    </aside>
    <section id="content">
      <div id="banner">
        <h2>Professional <span>Online Education </span></h2>
        
      </div>

      <div class="inside">
        <h2>Recent <span>Articles</span></h2>
        <ul class="list" style={{padding:'5px'}}>
          <li><span><img alt="hello" src={icon1}/></span>
            <h4>About Template</h4>
            <p>Eusus consequam vitae habitur amet nullam vitae condis phasellus sed justo. Orcivel mollis intesque eu sempor ridictum a non laorem lacingilla wisi.</p>
          </li>
          <li><span><img alt="hello"  src={icon2}/></span>
            <h4>Branch Office</h4>
            <p>Eusus consequam vitae habitur amet nullam vitae condis phasellus sed justo. Orcivel mollis intesque eu sempor ridictum a non laorem lacingilla wisi.</p>
          </li>
          <li class="last" ><span><img alt="hello" src={icon3}/></span>
            <h4>Student’s Time</h4>
            <p>Eusus consequam vitae habitur amet nullam vitae condis phasellus sed justo. Orcivel mollis intesque eu sempor ridictum a non laorem lacingilla wisi.</p>
          </li>
        </ul><br/>
        <h2>Move Forward <span>With Your Education</span></h2>
        <p><span class="txt1">Eusus consequam</span> vitae habitur amet nullam vitae condis phasellus sed justo. Orcivel mollis intesque eu sempor ridictum a non laorem lacingilla wisi. </p>
        <div class="img-box"><img alt="hello" src={page1}/>Eusus consequam vitae habitur amet nullam vitae condis phasellus sed justo. Orcivel mollis intesque eu sempor ridictum a non laorem lacingilla wisi. Nuncrhoncus eros  facilis tor mauris tincidunt et vitae morbi. Velelit condimentes in laorem quis nullamcorper nam fauctor feugiat pellent sociis.</div>
        <p class="p0">Eusus consequam vitae habitur amet nullam vitae condis phasellus sed justo. Orcivel mollis intesque eu sempor ridictum a  lacingilla wisi.</p>
      </div>
    </section>
    
  </div>
  
</div>
</div>
        );
    }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Layout);
