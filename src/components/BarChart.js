import React from 'react';
import BarGroup from './BarGroup';
import DrawTable from './DrawTable';
import '../App.css';

const BarChart = () => {
  const heroDesign = [];
  const velonic = [];
  const fileName = [
    '2021-07-08.json',
    '2021-06-22.json',
    '2021-06-19.json',
    '2021-06-08.json',
    '2021-06-04.json',
    '2021-06-02.json',
  ];
  for (let i = 0; i < fileName.length; i++) {
    let JSON = require('../data/' + fileName[i]);
    heroDesign.push({
      name: JSON.date,
      value: Math.round(JSON.ratio['value']),
    });
    velonic.push({
      name: JSON.date,
      value: 100 - Math.round(JSON.ratio['value']),
    });
  }

  const barHeight = 30;
  const velonicColour = '#b30000';
  const heroDesignColour = '#348AA7';

  const barGroupHeroDesign = heroDesign.map((d, i) => (
    <g transform={`translate(0, ${i * barHeight})`}>
      <BarGroup d={d} barHeight={barHeight} barColour={heroDesignColour} />
    </g>
  ));

  const barGroupVelonicDesign = velonic.map((d, i) => (
    <g transform={`translate(0, ${i * barHeight})`}>
      <BarGroup d={d} barHeight={barHeight} barColour={velonicColour} />
    </g>
  ));

  return (
    <div className="chart-and-table">
      <svg width="950" height="800">
        <g className="container">
          <text className="title" x="100" y="30">
            Hero Design migration rate
          </text>
          <g className="chart" transform="translate(100,60)">
            {barGroupHeroDesign}
          </g>

          <text className="title" x="100" y="330">
            Velonic usage rate
          </text>
          <g className="chart" transform="translate(100, 360)">
            {barGroupVelonicDesign}
          </g>
        </g>
      </svg>
      <DrawTable />
    </div>
  );
};

export default BarChart;
