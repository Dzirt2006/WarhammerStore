import React from 'react';
import { connect } from 'react-redux';
import App from './test'
import {getMe} from '../redux/user'


export class ShoppingCart extends React.Component {

    handleOnClick = () => async event => {
        console.log(!!this.props.getAuth().email)
        if(!this.props.getAuth().email){
            console.log('Complete!');
            this.props.history.push('/login');
        }else{
            this.props.history.push('/');
        }
        
    }
    render() {
        console.log(this.props)
        const order = this.props.order.products;
        let totalAmount = 0;
        order.map(product => {
            totalAmount += product.price * product.total_amount;
        })
        if (order.length > 0) {
            return (
                <div>
                    <center> <h1>Shopping Cart</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>amout</th>
                                    <th>Price</th>
                                </tr>
                                {order.map(product => (
                                    <tr key={product.id}>
                                        <td><img src={product.imgUrl} width="200" height="200" /></td>
                                        <td>{product.name}</td>
                                        <td>{product.total_amount}</td>
                                        <td>{product.price * product.total_amount}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="3" align="right"><b>Subtotal:</b></td>
                                    <td>{totalAmount}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={this.handleOnClick()}>Submit</button>
                    </center>
                </div>
            );
        } else {
            return (
                <div className='robotCard' key='0' >
                    <center><h3>Sorry...=( Your cart is empty.</h3></center>
                    {/* <button onClick={this.handleOnClickBuyIt()}>click me</button> */}
                    <App />
                </div>
            )
        }
    }
}

const mapState = state => {
    return {
        order: state.order,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getAuth: () => dispatch(getMe()),  
    };
  };



export default connect(mapState,mapDispatchToProps)(ShoppingCart);