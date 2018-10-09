import React, { Component } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import EuroJackpotResults from './EuroJackpotResults';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header/>
          <EuroJackpotResults />
        </Layout>
      </div>
    );
  }
}

export default App;
