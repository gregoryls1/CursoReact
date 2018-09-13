import React, { Component } from 'react';

import MenuSuperior from './Components/MenuSuperior/MenuSuperior'
import RouterLink from './RouterLinks'
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <MenuSuperior/>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <RouterLink/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
