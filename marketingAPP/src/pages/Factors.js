import React, {Children, useEffect, useRef, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {recieveData, dataLength} from './Transfering';
const itemstyle = {
    // height: '50px', margin: '6px', padding: '3px', verticalAlign: 'middle',
    // display: 'flex', flexWrap: 'wrap', alignContent: 'center', justifyContent:
    // 'flex-start',

}



const Factors = () => {
    const counter = useRef(0);
    const [items, setItems] = useState(
        () => recieveData(counter.current, 'factors')
    );
    useEffect(() => {
        counter.current = counter.current + 1;
        console.log('effected');
    }, [items]);
    return (
        <div
            className='container'
            id="scrolable"
            style={{
                "height" : "400px",
                "overflow" : "auto"
            }}>

            <InfiniteScroll dataLength={items.length}
                //This is important field to render the next data
                next={() => {
                    setItems(prev => [
                        ...prev,
                        ...recieveData(counter.current, 'factors')
                    ]);
                }} hasMore={((dataLength('factors')) / 10) > counter.current} loader={<h4> Loading ...</h4>} endMessage={<p className = 'alert alert-warning mt-3' style = {{width:'100%' , textAlign:'center'}} > اطلاعات دیگری موجود نیست</p>} scrollableTarget="scrolable">

  
                <table className='table table-striped table-hover' >
                <thead className='table-dark'>
                <tr>
                    <th>
                     بازاریاب
                    </th>
                    <th>
                    فروشنده
                    </th>
                    <th>
                    تاریخ
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item, i) => {
                        return(
                            
                                    <tr key={i}>
                                <td>{item.sName}</td>
                                <td>{item.mName}</td>
                                <td>{item.date}</td>
                            </tr>

                            
                        )})
                }
                </tbody>
                </table>
                {
                    // items.map((item, i) => {
                    //     return(
                    //     <div className='row'>
                    //      <ListItem  idm={item.mName} ids={item.sName} date={item.date} />
                    //     <div className='factoritem ' style={itemstyle} key={i}>
                    //         <span className='col-6 col-sm-3 col-lg-2 col-xl-1 my-auto'>{item.sName}</span>
                    //         <span className='col-6 col-sm-3 col-lg-2 col-xl-1 my-auto'>
                    //             {item.mName}</span>
                    //         <span className='col-12 col-sm-6 col-lg-8 col-xl-10 my-auto'>
                    //             {item.date}
                    //         </span>
                    //     </div>
                    //     </div>
                        
                    //     )
                    // })
                }

            </InfiniteScroll>

        </div>
    )
}

export default Factors;
