import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
  // Armazenando no estado
  state = {
    products: [],
    productInfo: {},
    page: 1
  };

  // Metodo executado assim que o componente for executado em tela
  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;
    
    // Atualizando a variavel de estado ('state')
    this.setState({ products: docs, productInfo, page });

    console.log('loadProducts', response.data.docs);
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  };

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  };

  // O render pode depender do 'state' (Estado) da aplicação
  render() {
    const { products, page, productInfo } = this.state;
    return (
      <div className="product-list">
        <h1>Main - Contagem de produtos: {this.state.products.length}</h1>
        {products.map(product => (
          // <h2 key={product._id}>{product.title}</h2>
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href="http://github.com">Acessar</a>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={productInfo.pages === page} onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    );
  }
}