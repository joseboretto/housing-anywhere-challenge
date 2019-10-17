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
    fetch('http://localhost:9000/api/v1/drones/updatePosition',
      {
        method: 'post',
        headers: {'Content-Type': 'application/json'}
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
            <input type="submit" value="Update Drone Position" className="btn btn-primary"/>
          </form>
        </div>
      </div>
    );
  }
}


export default DroneForm;
