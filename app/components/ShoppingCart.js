import React from 'react';
import { connect } from 'react-redux';
import App from './test'
import {getMe} from '../redux/user'
import ProductTray from './ProductsTray';


export class ShoppingCart extends React.Component {

    handleOnClick = () => async event => {
        console.log(await this.props.getAuth());
        const auth=await this.props.getAuth()
        if(!auth.email){
            this.props.history.push('/login');
        }else{
            this.props.history.push('/submit_order');
        }    
    }
    render() {
        const order = this.props.order.products;
        if (order.length > 0) {
            return (
                <div>
                    <center> <h1>Shopping Cart</h1>
                        <ProductTray products={order} />
                    </center>
                    <button onClick={this.handleOnClick()}>Submit</button>
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
        user:state.user,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getAuth: () => dispatch(getMe()),  
    };
  };



export default connect(mapState,mapDispatchToProps)(ShoppingCart);