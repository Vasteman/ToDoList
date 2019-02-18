import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome APP</li>
    </ul>
  )
}

const AppHeader = () => <h1>My ToDo List</h1>

const SearchPanel = () => <input placeholder="search" />

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));