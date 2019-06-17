import React from "react";
import Drone from "./Drone";

class Quadrant extends React.PureComponent {
  render() {
    const { drones } = this.props;
    console.log(this.props);
    const DroneListRender = drones.map(drone => (
      <div className="col-xs-6">
        <Drone key={drone.id} id={drone.id} x={drone.x} y={drone.y} quadrant={drone.quadrant}/>
      </div>
    ));
    return (
      <div>
        <h2>Name 12</h2>
        <div className="row">{DroneListRender}</div>
      </div>
    );
  }
}

export default Quadrant;
