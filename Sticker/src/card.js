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
            editting: false,
            data : this.props.data,
            xDef : this.props.xDef,
            yDef : this.props.yDef
        };
        // console.log(this.props.xDef+"  "+ this.props.yDef);
        this.textfiledRef=React.createRef();
     
     this.enterArea = this.enterArea.bind(this);
     this.exitArea = this.exitArea.bind(this);
     this.leaveProp = this.leaveProp.bind(this);
    this.foucusHappen = this.foucusHappen.bind(this);
   this.save = this.save.bind(this);
   this.autosave = this.autosave.bind(this);
   this.changeHandler = this.changeHandler.bind(this)
   this.handleDrag = this.handleDrag.bind(this);
   this.saver = "";
   this.blur = this.blur.bind(this);
       
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
        styletheme : {display :'none'},
        
    })
  }else{
    this.setState({
        styletheme : {display :'none'},
        themenum : num,
        editting :true
    })
  }
}
changeHandler(event){
    event.preventDefault();
    this.setState({
        data : event.target.value
    })
     this.setState({editting : true});
    // this.autosave();
}


autosave(){
    this.saver=setTimeout(() => {
        this.save();
    }, 500);
}
blur(){
    if(this.saver!==""){
       window.clearTimeout(this.saver);
       this.autosave();
    }
}
save(){
    // console.log("data"+ this.state.data)
    if(this.state.editting == true){
        this.props.dataSave(this.props.id,this.state.data,this.state.themenum);
        // console.log("changed");
        this.setState({ editting : false})}
    else{
        // console.log("no change");
    }
    
}
componentWillMount(){
    // console.log(this.key)
}

handleDrag(e,data){
   e.preventDefault()
 this.props.uppos(data.x,data.y,this.props.id);
}

 render(){
    let theme = "card theme-"+this.state.themenum;
    
     return(

    
          <Draggable  disabled={this.state.drcheck}  defaultPosition={{x:this.state.xDef , y: this.state.yDef}} onStop={this.handleDrag} >
              
                    <div className={theme} style={this.state.focusTheme}  onMouseEnter={this.foucusHappen} onMouseLeave={this.save}>
                    
                    <div className="cardHeader" onMouseEnter={this.enterArea} onMouseLeave={this.exitArea}>
                        
                        <a><Clear  onClick={()=>{this.props.delete(this.props.id)} }/></a>
                       
                       
                       
                    </div>
                    <textarea resize ="false" className="cardBody" type="textfiled" onBlur={this.blur} onChange={this.changeHandler} ref={this.textfiledRef} value={this.state.data}/>
                    <div className="cardProp">
                    
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