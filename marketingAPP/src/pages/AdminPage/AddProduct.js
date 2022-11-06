import React from 'react';



const AddProduct =()=>{
   
    return (
        
        <div className="container mt-5 pt-4 p   b-4 row  " >
            <div className="col-0 col-md-2 col-xl-3"> </div>
            <div className=" shadow pt-4 pb-4 col-12 col-md-8 col-xl-6" style={{direction:'rtl' , backgroundColor: 'rgb(239, 239, 239)'}}>
            <p className="text-center fs-3"> فرم ثبت کالا</p>
            <form className="m-5">
                
               
                <div className="mb-3">
                    <input type="text" placeholder='نام کالا' className="form-control" id="name" />
                </div>
                
              
                <div className="mb-3">
                    <input type="number" placeholder='قیمت' className="form-control" id="price" />
                </div>
                
                <fieldset className="  ">
                <legend className="col-form-label mb-1 mt-3  ">نوع محاسبه</legend>
                <div className=" text-end">
                    <div className="form-check form-check-inline me-4">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="1" defaultChecked />
                    <label className="form-check-label" htmlFor="gridRadios1">
                        وزنی
                    </label>
                    </div>
                    <div className="form-check form-check-inline ">
                    <input className="form-check-input " type="radio" name="gridRadios" id="gridRadios2" value="2  " />
                    <label className="form-check-label" htmlFor="gridRadios2">
                    تعدادی
                    </label>
                    </div>
                    
                </div>
                </fieldset>
              
                <button type="button" className="btn btn-primary w-75  mt-5 bg-secondary " style={{right: '12.5%',transform:'translateX(-12.5%)'}}>ثبت کالا</button>
            </form>
            </div>
            <div className='col-0 col-md-2 col-xl-3'> </div>
    </div>
    )


}
export default AddProduct;