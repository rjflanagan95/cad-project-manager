import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="job-form section">
        <div className="table-header">Add a Job</div>
        <form>
          <div>
            <label for="job-num">Job Number: </label>
            <input type="text" id="job-num" name="job_number"></input>
          </div>
          <div>
            <label for="fixture-req">Fixture Required? </label>
            <input type="checkbox" id="fixture-req" name="fixture_requirement"></input>
          </div>
          <div>
            <label for="drawing-req">Drawing Required? </label>
            <input type="checkbox" id="drawing-req" name="drawing_requirement"></input>
          </div>
          <div>
            <label for="job-notes">Notes: </label>
            <input type="text" id="job-notes" name="job_notes"></input>
          </div>
          <div>
            <button type="submit">Add Job</button>
          </div>
        </form>
      </div>
      <div className="models section">
        <div className="table-header">CAD Models</div>
        <table>
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
        </table>
      </div>
      <div className="fixtures section">
        <div className="table-header">Fixtures</div>
        <table>
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
        </table>
      </div>
      <div className="drawings section">
        <div className="table-header">Drawings</div>
        <table>
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
        </table>
      </div>
    </div>
  );
}

export default App;
