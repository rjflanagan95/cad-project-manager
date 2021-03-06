import React from 'react';
import './App.css';

import JobForm from "./components/JobForm/JobForm";

function App() {
  return (
    <div className="App">
      <JobForm />
      <div className="models section">
        <div className="table-header">CAD Models</div>
          <table>
            <tbody>
              <tr>
                <th>Job Number</th>
                <th>Progress</th>
                <th>Modeled?</th>
                <th>Initial Check</th>
                <th>Other Check</th>
                <th>Fixture Required?</th>
                <th>Drawing Required?</th>
                <th>Notes</th>
              </tr>
              <tr>
                <td>0000</td>
                <td>0%</td>
                <td><input type="checkbox"></input></td>
                <td><input type="checkbox"></input></td>
                <td><input type="checkbox"></input></td>
                <td><input type="checkbox"></input></td>
                <td><input type="checkbox"></input></td>
                <td><input type="text"></input></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="fixtures section">
          <div className="table-header">Fixtures</div>
          <table>
            <tbody>
              <tr>
                <th>Job Number</th>
                <th>Fixture Progress</th>
                <th>Initial Check</th>
                <th>Other Check</th>
                <th>Notes</th>
              </tr>
              <tr>
                <td>0000</td>
                <td>0%</td>
                <td><input type="checkbox"></input></td>
                <td><input type="checkbox"></input></td>
                <td><input type="text"></input></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="drawings section">
          <div className="table-header">Drawings</div>
          <table>
            <tbody>
              <tr>
                <th>Job Number</th>
                <th>Drawing Progress</th>
                <th>Initial Check</th>
                <th>Other Check</th>
                <th>Notes</th>
              </tr>
              <tr>
                <td>0000</td>
                <td>0%</td>
                <td><input type="checkbox"></input></td>
                <td><input type="checkbox"></input></td>
                <td><input type="text"></input></td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
