import React from "react";

class DroneForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: null,
      y: null,
      typeOfMovement: null,
      quadrant: null
    };
    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const {target} = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const {name} = target;
    this.setState({
      [name]: value
    });
    console.log(`Change detected. State updated${name} = ${value}`);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postDrone()
  }

  postDrone() {
    let body = JSON.stringify(this.state);
    console.log('postDrone', body)
    fetch('http://localhost:9000/api/v1/drones',
      {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: body
      })
      .then(res => res.json())
      .then((data) => {
        this.setState({data})
        console.log(this.state)
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h1>Drone Form</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="xInput">X Position</label>
              <input
                type="number"
                name="x"
                value={this.state.x}
                onChange={this.handleChange}
                className="form-control"
                id="xInput"
                placeholder="X Position"
              />
            </div>
            <div className="form-group">
              <label htmlFor="yInput">Y Position</label>
              <input
                name="y"
                type="number"
                value={this.state.y}
                onChange={this.handleChange}
                className="form-control"
                id="yInput"
                placeholder="Y Position"
              />
            </div>
            <div className="form-group">
              <label htmlFor="typeOfMovement">Type of Movement</label>
              <select
                className="form-control"
                id="typeOfMovement"
                name="typeOfMovement"
                value={this.state.typeOfMovement}
                onChange={this.handleChange}
              >
                <option>Select</option>
                <option>LINEAR</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="quadrantInput">Quadrant</label>
              <input
                name="quadrant"
                type="number"
                value={this.state.quadrant}
                onChange={this.handleChange}
                className="form-control"
                id="quadrantInput"
                placeholder="Quadrant"
              />
            </div>
            <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
        </div>
      </div>
    );
  }
}


export default DroneForm;
