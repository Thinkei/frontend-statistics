import React from 'react';
import '../App.css';

const DrawTable = () => {
  const data = require('../data/2021-07-08.json')['@ehrocks/react-velonic'];
  const velonic = [];
  const dataKey = Object.keys(data);
  for (let i = 0; i < dataKey.length; i++) {
    velonic.push({
      name: dataKey[i],
      freq: data[dataKey[i]],
    });
  }

  const renderTableData = velonic.map((d, i) => (
    <tr>
      <td> {i + 1} </td>
      <td> {d.name}</td>
      <td>{d.freq}</td>
    </tr>
  ));

  return (
    <div className="freq-table">
      <h2>Velonic components that still be used</h2>
      <table>
        <tr>
          <th> Index </th>
          <th> In used Velonic </th>
          <th> Freq </th>
        </tr>

        <tbody>{renderTableData}</tbody>
      </table>
    </div>
  );
};

export default DrawTable;