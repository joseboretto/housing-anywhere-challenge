import React from "react";
import {Scatter} from 'react-chartjs-2';
import PropTypes from "prop-types";
import Drone from "./Drone";

// https://github.com/jerairrest/react-chartjs-2

class Quadrant extends React.Component {
  constructor() {
    super();

    this.state = {
      id: null,
      droneMap: null,
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          data: [{
            x: 0,
            y: 10
          }, {
            x: 10,
            y: 5
          }, {
            x: 50,
            y: 47
          }, {
            x: 2,
            y: 2
          }]
        }], labels: []
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{ticks: {min: 0, max: 100, stepSize: 20}}],
          xAxes: [{ticks: {min: 0, max: 100, stepSize: 20}}]
        }
      }
    };
  }

  render() {
    const {drones, droneMap} = this.props;
    const DroneListRender = Object.keys(droneMap).map(key => (
      <div className="col-xs-6">
        <Drone key={droneMap[key].id} id={droneMap[key].id} x={droneMap[key].x} y={droneMap[key].y} quadrant={droneMap[key].quadrant} />
      </div>
    ));
    const {data, options, id} = this.state;
    console.log('droneMap', droneMap, 'id', id)
    const divStyle = {
      width: '250px',
      height: '250px'
    };
    return (
      <div>
        <h2>Quadrant 1</h2>
        <div className="row">{DroneListRender}</div>
        <div style={divStyle}>
          <Scatter data={data} options={options} width={250} height={250} />
        </div>
      </div>
    )
      ;
  }
}

// Quadrant.propTypes = {
//   id: PropTypes,
//   droneMap: PropTypes
// };
export default Quadrant;
