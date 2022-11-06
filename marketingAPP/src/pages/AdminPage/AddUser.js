import React from 'react';

const AddUser = () => {
    return (

        <div className="container mt-5 pt-4 p   b-4 row  ">
            <div className="col-0 col-md-2 col-xl-3"></div>
            <div
                className=" shadow pt-4 pb-4 col-12 col-md-8 col-xl-6"
                style={{
                    direction: 'rtl',
                    backgroundColor: 'rgb(239, 239, 239)'
                }}>
                <p className="text-center fs-3">
                    فرم ثبت کاربر جدید</p>
                <form className="m-5">
                    <div className="row mb-3 ">
                       
                        <div className="">
                            <input type="text" placeholder="نام و نام خانوادگی" className="form-control" id="name"/>
                        </div>
                    </div>
                    <div className="mb-3">
                     
                        <div className="">
                            <input type="number" placeholder="شماره تلفن همراه" className="form-control" id="price"/>
                        </div>
                    </div>

                    <div className="mb-3">
                   
                    
                    <div className="input-group mb-3">
                      
                        <input
                            type="password"
                            id="pass1"
                            className="form-control"
                            placeholder="گدرواژه جدید"
                            
                         />
                         <button type='button' className="input-group-text" id="basic-addon2" onClick={ ()=>{ document.getElementById('pass1').setAttribute('type',document.getElementById("pass1").getAttribute('type')=='text'?'password':'text')}}>&#128065;</button>

                    </div>
                    </div>

                    <div className="mb-3">
                    
                    <div className="input-group mb-3">
                             <input
                            type="password"
                            id="pass2"
                            className="form-control"
                            placeholder="تکرار گذرواژه جدید" />
                          
                        <button type='button' className="input-group-text" id="basic-addon2" onClick={ ()=>{ document.getElementById('pass2').setAttribute('type',document.getElementById("pass2").getAttribute('type')=='text'?'password':'text')}}>&#128065;</button>
                    </div>
                    </div>

                    <div className=" mb-3 ">
                        
                        <div className="">
                            <input type="text" placeholder='آدرس' className="form-control" id="name"/>
                        </div>
                    </div>

                    <fieldset className="mb-3">
                        <legend className="col-form-label  ">نوع کاربری</legend>
                        <div className="text-end  ">
                            <div className="form-check form-check-inline me-4 ">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gridRadios"
                                    id="gridRadios1"
                                    value="1"
                                    defaultChecked="defaultChecked"/>
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    بازاریاب
                                </label>
                            </div>
                            <div className="form-check form-check-inline ">
                                <input
                                    className="form-check-input "
                                    type="radio"
                                    name="gridRadios"
                                    id="gridRadios2"
                                    value="2  "/>
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    فروشنده
                                </label>
                            </div>

                        </div>
                    </fieldset>

                    <button
                        type="submit"
                        className="btn btn-primary w-75 bg-secondary mt-5  "
                        style={{
                            right: '12.5%',
                            transform: 'translateX(-12.5%)'
                        }}>ثبت کاربر جدید</button>
                </form>
            </div>
            <div className='col-0 col-md-2 col-xl-3'></div>
        </div>
    )
}
export default AddUser;