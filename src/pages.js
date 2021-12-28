import React from "react"
import {Link, useLocation} from "react-router-dom"
import 'vitessce/dist/es/production/static/css/index.css';
import { Vitessce } from 'vitessce';
import myViewConfig from './my-view-config.json';
import Footer from './components/Footer'
import Footer2 from './components/Footer2'


export function Home(){
  return(
    <div id="content-wrap">
      <div className="topnav">
        <Link className="active" to="/">BrianCellData.org</Link>
        <Link to="/viewer">Viewer</Link>
        <div className="topnav-right">
          <Link to="/docs">Docs</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div>
      <div>
        Amet excepturi iure eveniet quia voluptatibus cupiditate? Totam amet repudiandae mollitia laudantium nesciunt itaque Quos eligendi voluptate libero dolor eligendi Rem non nisi nisi ratione ab Ea nesciunt ipsum officia.
      </div>
      <div>
        Amet excepturi iure eveniet quia voluptatibus cupiditate? Totam amet repudiandae mollitia laudantium nesciunt itaque Quos eligendi voluptate libero dolor eligendi Rem non nisi nisi ratione ab Ea nesciunt ipsum officia.
      </div>
      <div>
        Amet excepturi iure eveniet quia voluptatibus cupiditate? Totam amet repudiandae mollitia laudantium nesciunt itaque Quos eligendi voluptate libero dolor eligendi Rem non nisi nisi ratione ab Ea nesciunt ipsum officia.
      </div>
      <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com"/>
      <div><img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com"/></div>
      <div><img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com"/></div>
    </div>
      <Footer2 className="footer"/>
    </div>
  );

}


export function Viewer(){
  return (
    <div>
      <div className="topnav">
        <Link to="/">BrianCellData.org</Link>
        <Link className="active" to="/viewer">Viewer</Link>
        <div className="topnav-right">
          <Link to="/docs">Docs</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div>
        <Vitessce
          config={myViewConfig}
          height={800}
          theme="light"
        />
      </div>
    </div>
  );
}



export function Docs(){
  return (
    <div>
      <div className="topnav">
        <Link to="/">BrianCellData.org</Link>
        <div className="topnav-right">
          <Link className="active" to="/docs">Docs</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div>
        <h1>Replace this by readthedocs link</h1>
      </div>
    </div>
  );
}


export function About(){
  return (
    <div>
      <div className="topnav">
        <Link to="/">BrianCellData.org</Link>
        <div className="topnav-right">
          <Link to="/docs">Docs</Link>
          <Link className="active" to="/about">About</Link>
        </div>
      </div>
      <div>
        <h1>Created by Macosko Lab at the Broad Institute of MIT and Harvard</h1>
      </div>
    </div>
  );
}


export function Whoops404(){

  let location = useLocation();
  return(
    <div> 
      <h1>Resource not found at {location.pathname}!</h1>
    </div>
  );
}
