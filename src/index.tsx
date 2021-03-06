import React from 'react';
import ReactDOM from 'react-dom';
import Dandy from '@jocelynmutso/dandy-doc/build/src';
import zlib from 'zlib';
import { wrenchTheme } from './themes';
import reportWebVitals from './reportWebVitals';
import logo from './logo.png';


interface DandySite {
  build?: number, 
  files: DandyMD[]
}

interface DandyMD {
  url: string;
  name: string;
  content?: string;
  build?: {modified: number, created: number}
}

let compiledSite: DandySite | undefined;
try {
  const compressed = process.env.REACT_APP_SITE ? process.env.REACT_APP_SITE : "";
  const envSite = zlib.inflateSync(Buffer.from(compressed, 'base64')).toString();
  
  const start = envSite.indexOf("{");
  if(start > -1) {
    compiledSite = JSON.parse(envSite.substring(start));
  }
} catch (err) {
  console.log("failed to load compiled site: JSON: " + err, process.env.REACT_APP_SITE);
  compiledSite = undefined;
}

let md: DandySite;
if(compiledSite) {
  md = compiledSite;
  console.log("compiled site");
} else {
  console.log("uncompiled site");
  interface RequireContext {
    keys(): string[];
    (id: string): { default: string};
  }
  const requireModule: RequireContext = require.context("./markdown/", true, /\.md$/)
  const files = requireModule
    .keys()
    .map((fileName: string) => ({
      url: requireModule(fileName).default, 
      name: fileName 
    }));
    
    md = { files };
}


const brandImage = <img src={logo} style={{height: 40, width: 225}} alt="logo"/>;
ReactDOM.render( 
  <Dandy theme={wrenchTheme} md={md} brand={{logo: brandImage}} />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
