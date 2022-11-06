/// mediator of project, connecting to api


import {retData,dL} from './data';
export {recieveData,sendData};

function recieveData(page,type){
    
//should recieve data from api base on type of data needed
  switch(type){
    case 'product':
        console.log(retData(page,'0'));
        return retData(page,'0');
    case 'factors': 
        return retData(page,'1');
      
  }

    
    
}

export function dataLength(type){
    // switch(type){
    //     case 'product':
    //         return dataLength(type);
    //     case 'factors':
    //         return dataLength(type);

    // }

    return dL(type);
}




// id 1 is set price for products
  const sendData= (id,loginKey,data,updater)=> {
    let success=true;
    switch (id) {
        case 1:
           return  setPrice(loginKey,data,updater);

            break;
    
        default:
            break;

    }

   
  
    
}



const setPrice = (loginKey,data,updateri)=>{
    setTimeout(() => {
        console.log(loginKey,JSON.stringify(data));
    updateri();
        return true;
    }, 2000);
    
}