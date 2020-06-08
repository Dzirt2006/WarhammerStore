import React from 'react';
import { connect } from 'react-redux';
import { fetchGoods } from '../redux/goods'
import { addProductAction, addAmountOfProduct } from '../redux/shoppingCart';
import { Link } from 'react-router-dom';
import Product from './Product';

export class AllGoods extends React.Component {

  componentDidMount() {
    this.props.getGoods();
  }

  handleOnClickBuyIt = params => async event => {
    if (this.props.order.products.length > 0) {
      const id = this.props.order.products.map(product => (product.id));
      if (id.includes(params.id)) {
        this.props.addAmount(params.id);
      } else {
        this.props.addProduct(params);
      }
    } else {
      this.props.addProduct(params);
    }
  }

  render() {
    console.log(this.props)
    const goods = this.props.goods.all;
    if (goods.length > 0) {
      return (
        <div>
          <div className='container'>
            {goods.map(product => (
              <Product staff={product} key={product.id} onClick={this.handleOnClickBuyIt} />
            ))
            } </div >
        </div>
      );
    } else {
      return (
        <div className='robotCard' key='0' >
          <h3 > Loading... </h3>
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    goods: state.goods,
    order: state.order,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGoods: () => dispatch(fetchGoods()),
    addProduct: (product) => dispatch(addProductAction(product)),
    addAmount: (id) => dispatch(addAmountOfProduct(id)),
  };
};

export default connect(mapState, mapDispatchToProps)(AllGoods);