import React, {Component} from "react";
import Quadrant from "./Quadrant";
import {subscribeToTimer, subscribeToDroneUpdate} from '../utils/socketClient';
import Drone from "./Drone";

class QuadrantList extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
    subscribeToDroneUpdate((err, drone) => this.setState({
      drone
    }));

    this.state = {
      dronesList: [],
      droneMapByQuadrantMap: {},
      timestamp: 'no timestamp yet',
      drone: 'no drone yet'
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
        this.setState({dronesList: data})
        const droneMapByQuadrantMap = data.reduce((map, obj) => {
          const result = {...map};
          if (!result[obj.quadrant]) {
            result[obj.quadrant] = {
              [obj.id]: obj,
            };
          } else {
            result[obj.quadrant][obj.id] = obj
          }
          return result;
        }, {});
        this.setState({droneMapByQuadrantMap});
        console.log(this.state)
      })
      .catch(console.log)
  }

  render() {
    const {droneMapByQuadrantMap, timestamp, drone} = this.state;
    let quadrantListRender = {}
    if (droneMapByQuadrantMap){
      quadrantListRender =Object.keys(droneMapByQuadrantMap).map(key => (
        <div className="col-xs-6">
          <Quadrant droneMap={droneMapByQuadrantMap[key]} id={key} />
        </div>
      ))
    }
    return (
      <div>
        <div className="row">{quadrantListRender}</div>
        <p className="">
          This is the timer value:
          {' '}
          {timestamp}
        </p>
        <p className="">
          drone:
          {' '}
          {drone.x}
        </p>
      </div>
    );
  }
}

export default QuadrantList;
