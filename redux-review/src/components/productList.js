import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doRequest } from '../actions';
import { cardapio } from '../cardapio';

class ProductList extends Component {
  render() {
    const { order, request } = this.props;
    return (
      <div>
        <h1>Lista de Produtos</h1>
        <ul>
            {cardapio.map((item => <li>
            {item}
            <button onClick={ () => request(item)}>Pedir</button>
        </li>))}
        </ul>
        <ul>
        {order.map((pedido) => <li>{pedido}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
 order: state.productsReducer.food,
});

const mapDispatchToProps = (dispatch) => ({
  request: (food) => dispatch(doRequest(food))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
