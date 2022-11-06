import React, {} from 'react';
import {sendData, recieveData} from '../Transfering';
import Product from '../Product';

class SetPrice extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"/>

                <button
                    className="btn btn-outline-secondary w-25"
                    type="button"
                    id="button-addon1"
                    onClick={() => {
                        console.log('id : ' + this.props.id);
                        this
                            .props
                            .updatePro(this.props.id, 'fgfg', '3000', 'weight',this.props.updateri)
                    }}>ثبت</button>

            </div>
        );
    }

}
class Pricing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: recieveData(0,'product'),
            canUpdate: false
        }
        this.updateri=this.updateri.bind(this);
        this.returnId = this
            .returnId
            .bind(this);
        this.updateProduct = this
            .updateProduct
            .bind(this);
        
    }

  

    returnId(id) {
        console.log(id);
    }

    updateProduct(i, n, p, m,updateri) {

       let res= sendData(1, '100', {
            id: i,
            name: n,
            price: p,
            measuringType: m
        },updateri)
        console.log('result : '+res);
    }
    componentDidUpdate() {
        console.log('update');
    }

    updateri() {
        console.log("updating!!!");
        this.setState({
            canUpdate : true
        });
    }

    render() {
        return (
            <div className="d-flex flex-wrap justify-content-center">
                {
                    this
                        .state
                        .products
                        .map((pro) => {
                            return <Product product={pro} key={pro.id} returnId={this.returnId}><SetPrice id={pro.id} updatePro={this.updateProduct} updateri={this.updateri} /></Product>
                        })
                }       

                <button onClick={() => sendData(1, '100', test)}>login</button>
            </div>

        )
    }
}
export default Pricing;