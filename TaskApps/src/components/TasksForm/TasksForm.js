import React from 'react';
import './TasksForm.css';
import { datos }  from '../../tasks.json';

class TasksForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = { datos: datos};
          this.hadlendinput = this.hadlendinput.bind(this);
          this.SaveForm = this.SaveForm.bind(this);
          this.hadleAddToDo = this.hadleAddToDo.bind(this);
    }


    hadleAddToDo(dato){
        this.state({
          datos: [...this.state.datos, dato]
        })
    }

hadlendinput(e){
  const {value, name} = e.target;
  this.setState({
    [name]:value
  })
  console.log(this.state);
}

    SaveForm(e){
        e.preventDefault();
        this.props.onAddToDo(this.state)
        console.log("sending data...");
    }

      render() {
           return (
                <div className="card">
                      <form className="card-body" onSubmit={this.SaveForm}>
                          <div className="form-group">
                            <input type="text" name="title" className="form-control" placeholder="title"  onChange={this.hadlendinput} />
                          </div>
                          <div className="form-group">
                            <input type="text" name="responsible" className="form-control" placeholder="responsible"  onChange={this.hadlendinput}/>
                          </div>
                          <div className="form-group">
                            <input type="text" name="description" className="form-control" placeholder="description"  onChange={this.hadlendinput}/>
                          </div>
                          <div className="form-group">
                          <select name="priority" className="form-control"  onChange={this.hadlendinput}>
                                <option value="low">low</option>
                                <option value="high">high</option>
                                <option value="medium">medium</option>
                              </select>

                          </div>
                           <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
              );
     }
  }

export default TasksForm;
