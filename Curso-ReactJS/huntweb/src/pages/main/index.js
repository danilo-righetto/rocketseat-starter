import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
  // Armazenando no estado
  state = {
    products: []
  };

  // Metodo executado assim que o componente for executado em tela
  componentDidMount(){
    this.loadProducts();
  }

   loadProducts = async () => {
    const response = await api.get(`/products`);
    
    // Atualizando a variavel de estado ('state')
    this.setState({ products: response.data.docs });

    console.log('loadProducts', response.data.docs);
  };

  // O render pode depender do 'state' (Estado) da aplicação
  render() {
    const { products } = this.state;
    return (
      <div className="product-list">
        <h1>Main - Contagem de produtos: {this.state.products.length}</h1>;
        {products.map(product => (
          // <h2 key={product._id}>{product.title}</h2>
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href="">Acessar</a>
          </article>
        ))}
      </div>
    );
  }
}