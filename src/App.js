import React, { Component } from 'react';
import './App.css';
import {Layout, Navigation, Content, Drawer, Header} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header title="GBK" scroll>
                  <Navigation>
                      <Link to='/card'>Card</Link>
                      <Link to='/about'>About</Link>
                  </Navigation>
              </Header>
              <Drawer title="Menu">
                  <Navigation>
                      <Link to='/card'>Card</Link>
                      <Link to='/about'>About</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
