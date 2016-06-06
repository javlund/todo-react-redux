import React from 'react';
import ListContainer from '../containers/listcontainer';
import FormContainer from '../containers/formcontainer';

class App extends React.Component {
  render() {
    return <div className="container">
      <h2>Todo list</h2>
      <ListContainer />
      <FormContainer />
    </div>;
  }
}

export default App;
