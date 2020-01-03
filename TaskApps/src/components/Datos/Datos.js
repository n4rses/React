import React from 'react';
import { datos }  from '../../tasks.json';
import './Datos.css';


class Datos extends React.Component {
  constructor(props) {
      super(props);
      this.state = { datos: datos};

    };



      render() {
        console.log(this.state.datos);
            const datos = this.state.datos.map((dato,i) => {
                          return (
                            <div className ="col-md-4">
                              <div className ="card mt-4">
                                <div className ="card-header">
                                  <h5>{dato.title}</h5>
                                  <span className="badge badge-pill badge-danger ml-2">{dato.priority}</span>
                                </div>
                                <div className ="card-body">
                                {dato.description}
                                </div>
                                <div className ="card-footer">
                                {dato.responsible}
                                </div>
                              </div>
                            </div>
                          )
           })
           return (
                <div className="container">
                  <div className="row">
                      {datos}
                  </div>
                </div>
              );
     }
  }

export default Datos;
