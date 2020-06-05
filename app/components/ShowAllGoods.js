import React from 'react';
import { connect } from 'react-redux';
import { fetchGoods} from '../redux/goods'
import { Link } from 'react-router-dom';
import Product from './Product';

export class AllGoods extends React.Component {

  componentDidMount() {
    this.props.getGoods();
  }


  render() {
    console.log(this.props)
    const goods = this.props.goods.all;
    if (goods.length > 0) {
      return (
        <div> 
          <div className='container'>
            {goods.map(product => (
              <Product staff={product} key={product.id} />
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
    goods: state.goods
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGoods: () => dispatch(fetchGoods())
  };
};

export default connect(mapState, mapDispatchToProps)(AllGoods);