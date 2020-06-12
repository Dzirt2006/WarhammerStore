import React from 'react';
import { connect } from 'react-redux';
import ProductTray from './ProductsTray';


export class SubmitOrder extends React.Component {

    handleOnClick = () => async event => {

    }


    render() {
        const order = this.props.order.products;
        const user = this.props.user.user;
        return (<div className='submitContainer'>
            <div className='productTray'>
                <ProductTray products={order} />
            </div>
            <div className='confirmationForm'>
                <form >
                    <div>
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label for="Adress">Adress</label>
                        <input type="Adress" id="adress" name="adress" placeholder={user.adress? user.adress:'Enter your Adress'} required />
                    </div>
                    <button type="submit">Confirm Order</button>
                </form>
            </div>
        </div>)
    }
}

const mapState = state => {
    return {
        order: state.order,
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    };
};



export default connect(mapState, mapDispatchToProps)(SubmitOrder);