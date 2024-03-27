import React from 'react';
import LineChart from './Component/LineChart'; // Adjust the path based on your project structure
import dat from './Component/returns'; // Assuming you've imported the returns.json file
import data from './Component/tabledata'
import Table from './Component/Table';

const App = () => {
  return (
    <div>
      <h1>Drawdown Periods</h1>
      <LineChart data={dat.data.combined} />
      <Table data={data} />
    </div>
  );
};

export default App;
