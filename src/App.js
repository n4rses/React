import React from 'react';

import './App.css';

import Navigation from './components/Navigation/Navigation';

import Datos from './components/Datos/Datos.js';
import TasksForm from './components/TasksForm/TasksForm.js';
import { datos }  from './tasks.json';
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { datos: datos};
        
    }


render() {

      return (
        <div className="">
        <Navigation titulo="Tasks" />
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-4">
                  <TasksForm onAddToDo={this.hadleAddToDo}/>
                </div>
                <div className="col-md-8">
                  <Datos/>
                </div>
            </div>
        </div>


        </div>
      );
    }
}

export default App;
