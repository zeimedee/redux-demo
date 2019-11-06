import React from 'react';
import List from './list'
import Cform from './form';
import Posts from './post'
import './App.css';

function App() {
  return (
    <div className="">
        <div>
            <h1>Articles</h1>
            <List />
        </div>
        <div>
            <h2>Add a new article</h2>
            <Cform />
        </div>
        <div>
          <h3>API ARTICLES</h3>
          <Posts />
        </div>
    </div>
  );
}

export default App;
