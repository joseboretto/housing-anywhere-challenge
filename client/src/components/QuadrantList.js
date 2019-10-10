import React, {Component} from "react";
import Quadrant from "./Quadrant";

class QuadrantList extends Component {
  constructor() {
    super();
    this.state = {
      drones: []
    };
  }

  componentDidMount() {
    this.getDrones()
  }

  getDrones() {
    console.log('getDrones')
    fetch('http://localhost:9000/api/v1/drones')
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        this.setState({drones: data})
        console.log(this.state)
      })
      .catch(console.log)
  }

  render() {
    const {drones} = this.state;
    return (
      <div>
        <Quadrant drones={drones}> </Quadrant>
      </div>
    );
  }
}

export default QuadrantList;
