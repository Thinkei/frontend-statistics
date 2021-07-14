import React from 'react';
import BarGroup from './BarGroup';
import '../App.css';

const BarChart = () => {
  const data = [
    { name: 'Hero Design', value: 60 },
    { name: 'Velonic', value: 40 },
  ];
  const barHeight = 30;

  const barGroups = data.map((d, i) => (
    <g transform={`translate(0, ${i * barHeight})`}>
      <BarGroup d={d} barHeight={barHeight} />
    </g>
  ));

  return (
    <svg width="800" height="300">
      <g className="container">
        <text className="title" x="10" y="30">
          Week beginning 9th July
        </text>
        <g className="chart" transform="translate(100,60)">
          {barGroups}
        </g>
      </g>
    </svg>
  );
};

export default BarChart;
