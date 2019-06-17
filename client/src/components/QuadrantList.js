import React, { Component } from "react";
import Quadrant from "./Quadrant";

class QuadrantList extends Component {
  constructor() {
    super();
    this.state = {
      drones: [
        {
          id: "11f1aad0-6eb4-11e9-8bd9-b75f6fe1565c",
          x: 1,
          y: 2,
          quadrant: 10
        },
        {
          id: "11f1aad1-6eb4-11e9-8bd9-b75f6fe1565c",
          x: 1,
          y: 2,
          quadrant: 10
        },
        {
          id: "11f1aad2-6eb4-11e9-8bd9-b75f6fe1565c",
          x: 1,
          y: 2,
          quadrant: 10
        },
        {
          id: "11f1aad3-6eb4-11e9-8bd9-b75f6fe1565c",
          x: 1,
          y: 2,
          quadrant: 10
        },
        {
          id: "11f1aad4-6eb4-11e9-8bd9-b75f6fe1565c",
          x: 1,
          y: 2,
          quadrant: 10
        },
        { id: "11f1aad5-6eb4-11e9-8bd9-b75f6fe1565c", x: 1, y: 2, quadrant: 10 }
      ]
    };
  }

  render() {
    const { drones } = this.state;
    return (
      <div>
        <Quadrant drones={drones}> </Quadrant>
      </div>
    );
  }
}

export default QuadrantList;
