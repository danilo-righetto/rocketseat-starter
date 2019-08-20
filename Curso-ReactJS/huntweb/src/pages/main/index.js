import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
  // Metodo executado assim que o componente for executado em tela
  componentDidMount(){
    this.loadProducts();
  }

   loadProducts = async () => {
    const response = await api.get(`/products`);
    console.log('loadProducts', response.data.docs);
  };

  render() {
    return <h1>Main - Hello Rocketseat</h1>;
  }
}