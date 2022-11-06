import React from 'react';

import AT from './MainContext';
const Product = ({children,product, returnId,Order}) => {
()=>{
    console.log(prodata);
}
    let id = product.id;
    let name = product.name;
    let price = product.price;
    let measuringType = product.measuringType;
    
    return (
    //    measuringType 0 is weigth and 1 is count
           
            <div  className="card m-3" style={{'width': '300px', 'minWidth': '300px'}}>
                <div className="card-header">{name}</div>
                <div className="card-body">
                    <span className='fw-bolder'>{price}</span>
                    {
                        measuringType == 0
                            ? ' (وزنی) '
                            : ' (عددی) '
                    }</div> 
                <div className="card-footer">
                    {children} 
                </div>

            </div>
       
                
    )

}
export default Product;