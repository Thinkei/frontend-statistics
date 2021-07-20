const BarGroup = props => {
  const barPadding = 2;
  const barColour = props.barColour;
  const widthScale = d => d * 10;

  const width = widthScale(props.d.value);
  const yMid = props.barHeight * 0.5;

  return (
    <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">
        {props.d.name}
      </text>
      <rect
        y={barPadding * 0.5}
        width={width}
        height={props.barHeight - barPadding}
        fill={barColour}
      />
      <text
        className="value-label"
        x={width - 8}
        y={yMid}
        alignmentBaseline="middle"
      >
        {props.d.value}
      </text>
    </g>
  );
};

export default BarGroup;
