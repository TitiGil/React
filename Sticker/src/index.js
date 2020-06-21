
import React, { Component } from 'react';
import {render} from 'react-dom';
import {hello,goodBye} from './lib';
import Reset from './cl.js'
import CardPanel from './cardPanel';


render( 
    <div>
        <CardPanel />
    </div>
    
    ,document.getElementById("react-container"))