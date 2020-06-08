import React from 'react';
import { connect } from 'react-redux';


export class ShoppingCart extends React.Component {



    render() {
        console.log(this.props)
        const order = this.props.order.products;
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
                                        <td>{product.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </center>
                </div>
            );
        } else {
            return (
                <div className='robotCard' key='0' >
                    <center><h3>Your cart</h3></center>
                </div>
            )
        }
    }
}

const mapState = state => {
    console.log('mapto', state.order)
    return {
        order: state.order,
    };
};



export default connect(mapState)(ShoppingCart);