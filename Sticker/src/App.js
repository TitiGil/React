import React, { Component } from 'react'

import {hello,goodBye} from './lib';
import Draggable from 'react-draggable';
import './style.scss'
import  Card  from './card';

class App extends Component {
    
    constructor(props) {
        super(props)
        this.state={
            check:true,
            mess:"",
            data:"",
            index :0

        }
        this.handle = this.handle.bind(this);
        this.st = this.st.bind(this);
        this.sto = this.sto.bind(this);
        this.retfile = this.retfile.bind(this);
      this.indexer = this.indexer.bind(this);
      this.getIndex = this.getIndex.bind(this);
      
      
    }
    indexer(){
       this.setState({
           index : this.state.index+1
       })
    }
    getIndex()
    {
        return this.state.index;
    }

    retfile(comp){
        console.log(comp.context);
        
    }
    handle(){
        this.setState(state =>({
            check: !this.state.check
        }));
        
    }
    st(){
        this.setState(state =>(
            {mess : "you are moving button"}
        ));
    }
    sto(){
        this.setState(state =>(
            {mess : this.refs.test.value}
        ))
    }
    render(){
        var a=[1,2,2,3,3,3,3,4,5,6];
      
        return (
            <div className="container"  >
                {a.map((i,k)=>(
                    <Card theme={i} key={k} indexer={this.indexer} getIndex={this.getIndex}/>
                ))}
                     
                   
                
                
              
            </div>
        )
          
        }
    
};

export default App;