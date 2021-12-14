import React from "react"
import {Link, useLocation} from "react-router-dom"
import 'vitessce/dist/es/production/static/css/index.css';
import { Vitessce } from 'vitessce';
import myViewConfig from './my-view-config.json';

export function Home(){
  return(
  <div>
    <div className="topnav">
      <Link className="active" to="/">BrianCellData.org</Link>
      <div className="topnav-right">
        <Link to="/docs">Docs</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
      <Vitessce
            config={myViewConfig}
            height={800}
            theme="light"
      />
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
    <h1>Replace this by read the docs link</h1>
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
    <h1>Created by Macosko Lab at Broad Institute of MIT and Harvard</h1>
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
