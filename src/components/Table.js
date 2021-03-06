const Table = ({ data }) => {
  const velonicComponents = Object.keys(data);

  const velonicData = velonicComponents.map(key => ({
    name: key,
    freq: data[key],
  }));

  const tableData = velonicData.map((rowData, idx) => (
    <tr key={rowData.name}>
      <td> {idx + 1} </td>
      <td> {rowData.name}</td>
      <td>{rowData.freq}</td>
    </tr>
  ));

  return (
    <div className="freq-table">
      <h2>Velonic components that still be used</h2>
      <table>
        <tbody>
          <tr>
            <th> Index </th>
            <th> In used Velonic </th>
            <th> Freq </th>
          </tr>
        </tbody>

        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

export default Table;
