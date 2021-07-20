const Bar = ({ data, height, colour }) => {
  const padding = 2;
  const width = data.value * 10;
  const yMid = height * 0.5;

  return (
    <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">
        {data.name}
      </text>
      <rect
        y={padding * 0.5}
        width={width}
        height={height - padding}
        fill={colour}
      />
      <text
        className="value-label"
        x={width - 8}
        y={yMid}
        alignmentBaseline="middle"
      >
        {data.value}
      </text>
    </g>
  );
};

export default Bar;
