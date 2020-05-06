import React, { Component } from 'react';
import './App.css';
import {Layout, Navigation, Content, Drawer, Header} from 'react-mdl';
import Homepage from './components/homepage';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header title="Title" scroll>
                  <Navigation>
                      <a href='/'>Link</a>
                      <a href='/'>Link</a>
                      <a href='/'>Link</a>
                      <a href='/'>Link</a>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <a href='/'>Link</a>
                      <a href='/'>Link</a>
                      <a href='/'>Link</a>
                      <a href='/'>Link</a>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Homepage/>
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
