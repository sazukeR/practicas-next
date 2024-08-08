import React from 'react';

const PokemonsPage = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>ARTIST</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
      </tbody>
    </table>
  );
};
export default PokemonsPage;
