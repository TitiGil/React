
import React, { Component } from 'react';
import {render} from 'react-dom';
import {hello,goodBye} from './lib';
import Reset from './cl.js'
import App from './App';


render( 
    <div>
        <App />
    </div>
    
    ,document.getElementById("react-container"))