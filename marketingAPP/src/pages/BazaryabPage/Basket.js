import React, {Component, useRef, useState} from 'react';
import {
    Document,
    Text,
    View,
    Page,
    StyleSheet,
    PDFViewer,
    PDFDownloadLink
} from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import Product from '../Product';
import {recieveData} from '../Transfering';

class AddBasket extends Component {

    constructor(props) {
        super(props);
        this.props.pro;
        this.inp = React.createRef();
        this.state = {
            inValue: '',
            status: 'new',
            displayCan: 'none'
        }
        this.updateCounter = this
            .updateCounter
            .bind(this);
        this.resetValue = this
            .resetValue
            .bind(this);
        this.setStatus = this
            .setStatus
            .bind(this);
    }
    updateCounter(evt) {
        this.setState({inValue: evt.target.value})
    }

    resetValue() {
        this.setState({inValue: ''})
    }
    setStatus(s) {
        this.setState({status: s})
    }
    render() {
        if (this.state.status == 'new') {

            return (
                <div className='d-grid gap-2 mx-auto '>

                    <input
                        type='text'
                        value={this.state.inValue}
                        ref={this.inp}
                        onChange={evt => {
                            this.updateCounter(evt);
                            if (evt.currentTarget.value !== '') {
                                this.setState({displayCan: 'block'});
                            } else {
                                this.setState({displayCan: 'none'});
                            }
                        }}/>

                    <button
                        className='btn btn-primary btn-block'
                        onClick={(evt) => {
                            
                            this.state.inValue==''?console.log('Wrong value'):
                            this
                                .props
                                .addList(
                                    "new",
                                    this.props.pro,
                                    this.state.inValue,
                                    this.resetValue,
                                    this.setStatus
                                );
                            
                            this.setState({displayCan: 'none'});
                        }}>افزودن به لیست</button>
                    <button
                        className='btn  btn-outline-dark'
                        onClick={() => {
                            this.resetValue();
                            this.setState({displayCan: 'none'});
                        }}
                        style={{
                            display: this.state.displayCan
                        }}>
                        انصراف

                    </button>

                </div>
            )
        } else {
            return (
                <div className='d-flex flex-column '>
                    <span className=' alert alert-info  '>این محصول در لیست موجود است</span>

                    <button
                        className='btn btn-success btn-outline-success mb-2 '
                        onClick={() => {
                            this
                                .props
                                .addList(
                                    "update",
                                    this.props.pro,
                                    this.state.inValue,
                                    this.resetValue,
                                    this.setStatus
                                );
                            this.setState({status: "new"})
                        }}>
                        افزودن به قبلی
                    </button>

                    <button
                        className='btn btn-outline-secondary '
                        onClick={() => {
                            this.setState({status: "new"})
                        }}>
                        انصراف
                    </button>

                </div>
            )

        }
    }

}
// create a list of purchases as a PDF file
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});
const ExportPdf = () => {
    return (

        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>

    )

}

class Basket extends Component {
    constructor(props) {
        console.log(recieveData(0, 'product'));
        super(props);
        this.state = {
            products: recieveData(0, 'product'),
            listBasket: null,
            exPDF: true

        }

        this.addList = this
            .addList
            .bind(this);
    }

    addList(type, pro, count, resetValue, setStatus) {

        console.log("addlist");
        if (type == "new") {

            if (this.state.listBasket == null) {
                this.setState((prev) => ({
                    listBasket: [
                        {
                            'pro': pro,
                            'count': count
                        }
                    ]
                }));
            } else {
                let check = true;
                for (let item of this.state.listBasket) {

                    if (item.pro.id == pro.id) {
                        check = false;
                        break;
                    }
                }

                if (check) {
                    this.setState(() => ({

                        listBasket: [
                            ...this.state.listBasket, {
                                'pro': pro,
                                'count': count
                            }
                        ]
                    }));
                } else {

                    setStatus("exist");
                }

                console.log(check);
            }
        } else {
            console.log("update")

        }

        resetValue();

    }

    render() {

        return (
            <div>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        this
                            .state
                            .products
                            .map(pro => {
                                return <Product product={pro} key={pro.id}><AddBasket pro={pro} addList={this.addList}/></Product>
                            })
                    }

                </div>
                <hr/>
                <div id='list-basket'>
                    {this.state.listBasket == null && <div className='alert alert-secondary'>'لیست سفارش خالیست'</div>}
                    {
                        this.state.listBasket != null && <div>
                        <div className='table-responsive'>
                                <table
                                    className=' table table-striped table-borderless caption-top table-hover'>
                                    <caption>سبد سفارش</caption>
                                    <thead>
                                        <tr className='table-success'>
                                            <th>ردیف</th>
                                            <th>نام
                                            </th>
                                            <th>قیمت
                                            </th>
                                            <th>تعداد
                                            </th>
                                            <th>
                                                مجموع
                                            </th>

                                        </tr>

                                    </thead>
                                    <tbody>
                                        {
                                            this
                                                .state
                                                .listBasket
                                                .map((item, index) => {
                                                    return (

                                                        <tr
                                                            key={item.pro.id}
                                                            id={item.pro.id}
                                                            onClick={e => {
                                                                console.log(e.currentTarget.attributes['id'].value)
                                                            }}>
                                                            <td>{index}</td>
                                                            <td>{item.pro.name}
                                                            </td>
                                                            <td>{item.pro.price}</td>
                                                            <td>{item.count}</td>
                                                            <td>
                                                                {
                                                                    (item.count * parseFloat(item.pro.price.replace(',', '')))
                                                                        .toString()
                                                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                                                }</td>

                                                        </tr>

                                                    )
                                                })
                                        }
                                    </tbody>
                                </table>
                                </div>

                                 {
                                    this.state.exPDF
                                        ? (
                                            <div className='d-flex flex-column flex-sm-row flex-wrap gap-2 gap-sm-4 justify-content-center'>

                                                <button
                                                    className='btn btn-success '
                                                    onClick={() => {
                                                        this.setState({exPDF: false})
                                                    }
}>

                                                    صدور فاکتور به همراه PDF
                                                </button>
                                                <button className='btn btn-primary' onClick={()=>this.setState({listBasket: null,exPDF:true})} >
                                                صدور فاکتور
                                                </button>

                                                <button
                                                    className='btn btn-danger mr-3'
                                                    onClick={() => this.setState({listBasket: null})}>
                                                    پاکسازی لیست
                                                </button>
                                            </div>
                                        )
                                        : (
                                            <div>
                                            
                                            <PDFDownloadLink document={<ExportPdf />} fileName="test.pdf">

                                                {
                                                    ({blob, url, loading, error}) => loading
                                                        ? 'در حال پردازش'
                                                        :<span  className='text-success text-decoration-none fs-5 fw-bold'>از اینجا دانلود کنید</span> 
                                                }
                                            </PDFDownloadLink>
                                            <button
                                                    className='btn btn-danger mr-3'
                                                    onClick={() => {this.setState({listBasket: null,exPDF:true});}}>
                                                    صدور لیست جدید
                                                </button>
                                            </div>

                                        )
                                }

                                
                            </div>

                    }

                </div>
            </div>
        )
    }
}

export default Basket;