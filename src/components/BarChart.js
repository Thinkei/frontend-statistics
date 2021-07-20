import Bar from './Bar';

const BarChart = () => {
  const fileNames = [
    '2021-07-08.json',
    '2021-06-22.json',
    '2021-06-19.json',
    '2021-06-08.json',
    '2021-06-04.json',
    '2021-06-02.json',
  ];
  const heroDesignData = fileNames.map(fileName => {
    const file = require('../data/' + fileName);
    return {
      name: file.date,
      value: Math.round(file.ratio['value']),
    };
  });

  const velonicData = heroDesignData.map(data => ({
    name: data.name,
    value: 100 - data.value,
  }));

  const barHeight = 30;
  const velonicColour = '#b30000';
  const heroDesignColour = '#348AA7';

  const barGroupHeroDesign = heroDesignData.map((data, idx) => (
    <g key={data.name} transform={`translate(0, ${idx * barHeight})`}>
      <Bar data={data} height={barHeight} colour={heroDesignColour} />
    </g>
  ));

  const barGroupVelonicDesign = velonicData.map((data, idx) => (
    <g key={data.name} transform={`translate(0, ${idx * barHeight})`}>
      <Bar data={data} height={barHeight} colour={velonicColour} />
    </g>
  ));

  return (
    <svg width="700" height="800">
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
  );
};

export default BarChart;
