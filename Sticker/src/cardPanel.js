import React, { Component } from 'react';
import ReactToolTip from "react-tooltip";
import Drawer from "@material-ui/core/Drawer";

import './style.scss'
import  Card  from './card';
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { blue } from '@material-ui/core/colors';
import Del from "./delItem";



class CardPanel extends Component {
    
    constructor(props) {
        super(props)
        this.state={
            check:true,
            mess:"",
            data:"",
            index :0,
            cards : this.fetchData(),
            trash:this.fetchTrash(),
            arrange :false,
            keys:0,
            lastId : this.fetchCounter(),
            controlStyle:{zIndex:0},
            Drawer : false
            
        }
        this.fetchCounter = this.fetchCounter.bind(this);
        this.handle = this.handle.bind(this);
        this.st = this.st.bind(this);
        this.sto = this.sto.bind(this);
        this.retfile = this.retfile.bind(this);
      this.indexer = this.indexer.bind(this);
      this.getIndex = this.getIndex.bind(this);

      this.counter=[0,0,0,0,0,0];
     
      this.addToTrash = this.addToTrash.bind(this);
      this.fetchData = this.fetchData.bind(this);
      this.arranging = this.arranging.bind(this);
      this.add = this.add.bind(this)
      this.setNewPosition = this.setNewPosition.bind(this)
      this.dataSave = this.dataSave.bind(this);
      this.fetchTrash = this.fetchTrash.bind(this);
      this.toggleDrawer = this.toggleDrawer.bind(this);
     this.restorToList = this.restorToList.bind(this);
      this.deletePermanently = this.deletePermanently.bind(this)
      
      this.theme = createMuiTheme(
          {
              palette : {
                  secondary : blue
              }
          }
      )
      

  
    // this.controlFocus = this.controlFocus.bind(this);
    
    //   console.log(this.state.cards);
    }



setNewPosition(x,y,id){
    let temp= this.state.cards;

    for(let i in temp){
     
      if( temp[i].id===id )
       {temp[i].posX=x ;
        temp[i].posY=y;} 
       }
        // console.log("id : "+ id + " prev: "+k.id +" x : " +x + " y :" + y );
    
    // console.log("temp : "+temp);
    this.setState({
     cards : temp
    })
    
    // console.log(this.state.cards);
}

    // Read data from dataBase
    fetchData(){

        return ( [ 
                        {
                    
                        'id' : '1 ',
                        'theme' : 1 ,
                        'data'  : 'this a test for theme one',
                        'posX'  : 100,
                        'posY'  : 200
                    }
                     ,
                   {  
                        'id':'2',
                        'theme' : 2  ,
                        'data'  : 'this a test for theme two',
                        'posX'  : 200,
                        'posY'  : 100
                    
                  },
                    {
                        'id':'3',
                        'theme' : 2 ,
                        'data'  : 'this a test for theme two',
                        'posX'  : 300,
                        'posY'  : 450
                    },
                   { 
                         'id':'4',
                        'theme' : 5 ,
                        'data'  : 'this a test for theme three',
                        'posX'  : 600,
                        'posY'  : 200
                    }
                   ]
               
        )
                }
    
    fetchTrash(){
        return (
                  [ 
                {
            
                'id' : '10 ',
                'theme' : 1 ,
                'data'  : 'this a test for deleted item and test elipsiss in css class',
                'posX'  : 365,
                'posY'  : 400
                 }
                ]
                )
    }

    fetchCounter(){
        return 10;
        /** This function must return the number of last id has set for cards */
    }
            
    

  
    // increase index of card one level to bring it front with css z-index option
    indexer(){
       this.setState({
           index : this.state.index+1,
           controlStyle :{zIndex:this.state.index+2}
       })
    }


    getIndex()
    {
        return this.state.index;
    }

    retfile(comp){
        // console.log(comp.context);
        
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
    


 

   arranging(type){
     
       let temp = this.state.cards;
       let counter=0;
       let counterx = {};
       let countery = {};
    
       temp.map( (item , i) => {
          if(counterx[item.theme]===undefined ){
            counterx[item.theme] = counter; countery[item.theme] = 0  ; counter++;
          }else
          {
            countery[item.theme]++ ;
          }
          if(type){
          item.posX=10+(counterx[item.theme]*190);
          item.posY=40+(countery[item.theme]*200);
          }
          else{
            item.posX=10+(counterx[item.theme]*190);
            item.posY=40+(countery[item.theme]*40);
          }
       })
       
    //    console.log("temp 1 : "+temp);
       this.setState({
           arrange : !this.state.arrange,
           cards :  temp,
           keys: this.state.keys===0 ?this.state.cards.length:0
          
        
       })
  
   }

    add(){
     
        let newElement={'id':this.state.lastId+1+"",'theme':1,'data':"",'posX':40,'posY':40};
        //  console.log( newElement);
        this.setState(prevState=>({
                // cards : this.state.cards.concat({'id':5,'theme':4,'data':"",'posX':40,'posY':40})
                cards:[...prevState.cards,newElement],
                lastId : prevState.lastId+1
            }))


            /** Add new elemet to database */
    }

    addToTrash(id){
        // console.log("delete : "+id);
        let temp1=[];
        let temp2;
        
       this.state.cards.forEach(element => {
            if(element.id!==id){
                temp1.push(element);
            }else
            {
                temp2=element;
            }
        })

            this.setState(prevState =>({
                cards : temp1 ,
                trash : prevState.trash.concat(temp2) 
            }));
    //    temp1=temp1.filter();
    
    /** send data to trash in DB */
    }


    /** save data to DB and the local cards */
    dataSave(id,data,theme)
    {
        let temp = this.state.cards;
       
        temp.forEach(element => {
            if(element.id===id){
                element.data=data;
                element.theme=theme;
              
            }
        });
        this.setState({
            cards:temp,
            editting : false,
            keys:this.state.keys===0 ?this.state.cards.length:0
        })
        /** save to DB code should be written below */
        /** code to save in db HERE */
    }
toggleDrawer() {
   

    this.setState({ Drawer : !this.state.Drawer });
  
}
    
restorToList(id){

    let temp1=[];
    let temp2;
    
   this.state.trash.forEach(element => {
        if(element.id!==id){
            temp1.push(element);
        }else
        {
            temp2=element;
        }
    })

        this.setState(prevState =>({
            trash : temp1 ,
            cards :prevState.cards.concat(temp2)
        }));

  
        
    /** send data to trash in DB */
}
deletePermanently(id){


    this.setState(prevState=>({
        trash : prevState.trash.filter(item =>{
            return item.id === id ? false : true
        }),
       
   
}))


}   
 render(){
        // console.log(this.state.cards);
        // console.log(this.state.trash);
        const tr=this.state.trash.length===0? <span style={{color : 'white'}} > There Is no item in trash list  !! </span> :  this.state.trash.map((item,i) =>{
            return <Del data={item.data} id={item.id} deletePermanently={this.deletePermanently} restolist={this.restorToList} key={Math.random()  }></Del>
               })
        
           

        return (
           
            <div className="container">
                {/* {console.log("final")} */}
                    {/* {console.log( this.state.cards)} */}
               <div  className="controlPanel"  style={this.state.controlStyle}>
                     <button className="sortbutton" onClick={()=>this.arranging(0)} data-tip data-for="sortS">S</button>
                     <button className="sortbutton fsort" onClick={()=>this.arranging(1)} data-tip data-for="sortf">FS</button>
                     <button className="sortbutton addbutton" onClick={this.add} data-tip data-for="add">+</button>
                     <button className="sortbutton trash" onClick={this.toggleDrawer} data-tip data-for="trash"><DeleteOutline /></button>
                 
                     <ReactToolTip id="sortS" place="bottom">compound Sort </ReactToolTip>
                     <ReactToolTip id="sortf" place="bottom">Fragmented Sort </ReactToolTip>
                     <ReactToolTip id="add" place="bottom">Add new one </ReactToolTip>
                     <ReactToolTip id="trash" place="bottom">Deleted Notes </ReactToolTip>
                     </div>
               
               
               {this.state.cards.map((i,k)=>(
                   
                    <Card  delete={this.addToTrash} theme={i.theme} id={i.id} uppos={this.setNewPosition} data={i.data} key={this.state.keys+k+i.id} indexer={this.indexer} getIndex={this.getIndex} xDef={i.posX} yDef={i.posY} dataSave={this.dataSave} />
                ))}
                
                     
                    
                    <Drawer  theme={this.theme} anchor="left" open={this.state.Drawer } onClose={this.toggleDrawer}>
                  
                      {tr}
                    </Drawer>
                    
                  
                
                
              
            </div>
        )
    // }

          
        }
    
};

export default CardPanel;