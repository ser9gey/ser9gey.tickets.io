import React from 'react';
import './_App.scss'
import AppHeader from '../app-header/AppHeader'
import AppMain from '../app-main/AppMain'

const App = () => {
  return (
    <div className="app">
      <div className="app-wrapper">
        <div className="app-container">
          <AppHeader />
          <AppMain />
        </div>
      </div>
    </div>
  );
}

export default App;
