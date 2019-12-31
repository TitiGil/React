import React, { PureComponent, Component } from 'react'
import Draggable from 'react-draggable';
import { Clear, ThreeSixty, Timer} from '@material-ui/icons';
import {Fullscreen,Delete,Settings} from '@material-ui/icons';




class Card extends Component{
    constructor(props) {
        super(props);
        
        this.state ={
            drcheck : true,
            themenum : this.props.theme,
            styletheme : {display : 'none'},
            focusTheme : {zIndex:0},
            editting: false
        };
        this.textfiledRef=React.createRef();
     
     this.enterArea = this.enterArea.bind(this);
     this.exitArea = this.exitArea.bind(this);
     this.leaveProp = this.leaveProp.bind(this);
    this.foucusHappen = this.foucusHappen.bind(this);
   this.save = this.save.bind(this);
   this.autosave = this.autosave.bind(this);
   this.changeHandler = this.changeHandler.bind(this)
   
       
    }

  
foucusHappen(){
    this.props.indexer();

    this.textfiledRef.current.focus();
    this.setState({
        focusTheme : {zIndex : this.props.getIndex() }
    });
    

}

enterArea(){
this.setState({
    drcheck : false
})

}
exitArea(){
this.setState({
    drcheck : true
})
}
leaveProp(num){
  if( num == 0){
    this.setState({
        styletheme : {display :'none'}
    })
  }else{
    this.setState({
        styletheme : {display :'none'},
        themenum : num
    })
  }
}
changeHandler(){
    this.setState({editting : true});
    this.autosave();
}
autosave(){
    setTimeout(() => {
        this.save();
    }, 2000);
}
save(){
    if(this.state.editting == true){
        console.log("changed");
        this.setState({ editting : false})}
    else{
       // console.log("no change");
    }
    
}
componentWillMount(){
    console.log(this.key)
}
 render(){
    let theme = "card theme-"+this.state.themenum;
    
     return(

    
          <Draggable disabled={this.state.drcheck}  >
              
                    <div className={theme} style={this.state.focusTheme}  onMouseEnter={this.foucusHappen} onMouseLeave={this.save}>
                    
                    <div className="cardHeader" onMouseEnter={this.enterArea} onMouseLeave={this.exitArea}>
                        
                        <a><Clear  /></a>
                        <a> <Fullscreen /></a>
                       
                       
                    </div>
                    <textarea resize ="false" className="cardBody" type="textfiled" onChange={this.changeHandler} ref={this.textfiledRef} />
                    <div className="cardProp">
                    <a><Delete /></a>
                    <a> <Settings onClick={()=>(  this.setState({ styletheme : {display : 'block'}}) )}/></a>
                         
                       
                    </div>
                    <div className="themeSelector" style={this.state.styletheme}  onMouseLeave={()=>(this.leaveProp(0))}>
                        <div className="rel kind-1" onClick={()=>(this.leaveProp(1))}></div>
                        <div className="rel kind-2" onClick={()=>(this.leaveProp(2))}></div>
                        <div className="rel kind-3" onClick={()=>(this.leaveProp(3))}></div>
                        <div className="rel kind-4" onClick={()=>(this.leaveProp(4))}></div>
                        <div className="rel kind-5" onClick={()=>(this.leaveProp(5))}></div>
                        <div className="rel kind-6" onClick={()=>(this.leaveProp(6))}></div>
                    </div>
          </div>
            
          </Draggable>
      
     )
 }
};

export default Card;