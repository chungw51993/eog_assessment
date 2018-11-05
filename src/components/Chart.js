import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import moment from 'moment';

class Chart extends Component {
  render() {
    const { drones } = this.props;
    const x = drones.map((d) => {
      const time = moment(d.timestamp).format('HH:mm MMM DD, YYYY');
      return time
    })
    const y = drones.map((d) => {
      return d.metric;
    })
    return (
      <Plot
          data={[
            {
              x,
              y,
              type: 'scatter',
              mode: 'lines',
              marker: {color: 'blue'},
            },
          ]}
          layout={{
            width: "100%",
            height: "100%",
            margin: {
              l: 50,
              r: 50,
              b: 50,
              t: 50,
              pad: 4
            },
          }}
        />
    )
  }
}

export default Chart;
