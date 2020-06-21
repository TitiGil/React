import React from 'react';
import {DeleteForever,RestoreFromTrash} from "@material-ui/icons/";
import ReactTooltip from 'react-tooltip';
import color from '@material-ui/core/colors/red';
import { red, lightGreen, deepOrange } from '@material-ui/core/colors';

class Del extends React.Component{

    constructor(props) {
        super(props);
        
        this.state={
          data: this.props.data,
          id : this.props.id
        }
    }
    



    
    render() {
      return (
        <div className='delItem'>
            <p data-tip data-for="dataFull" style ={{display: 'inline'}}>{this.state.data}</p><DeleteForever  data-tip data-for="dfe" className="delforever"   onClick={()=>{this.props.deletePermanently(this.state.id)}}>  </DeleteForever><RestoreFromTrash  data-tip data-for="rft" className="restorefromtrash" onClick={()=>{this.props.restolist(this.state.id)}}></RestoreFromTrash>
            <ReactTooltip backgroundColor="#470904" textColor="white" arrowColor="#AEE882 " place="left" id="dfe">Delete Item Permanently</ReactTooltip>
            <ReactTooltip backgroundColor="#034f15" textColor="white" place="left" arrowColor="#AEE882 " id="rft">Restore Item To List</ReactTooltip>
           
        </div>

      
      )
    }


}
export default Del;