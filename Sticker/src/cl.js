import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isNumber } from 'util';
import {Alarm} from '@material-ui/icons'


class Reset extends Component{

    constructor(props) {
      super(props);
    
      this.state = {
         amin:10
      }
    }

    render() {
      return (
      <div>
        {this.state.amin}<Alarm />
      </div>
      )
    }
    
}
Reset.propTypes={
    name:function(props){
        if(isNumber(props.name))
        {
        console.error("This is a number but we want a String");
        
            
        }
        else{
            console.log("Tnks for the correct version");
            
        }
    }
}
export default Reset;