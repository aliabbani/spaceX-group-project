import React from 'react';
import '../stylesheet/missionInfo.css';

const MissionInfo = () => (
  <table className="table table-striped table-bordered">
    <thead>
      <tr>
        <td colSpan="1">Mission</td>
        <td colSpan="2" className="description-row">Description</td>
        <td colSpan="1">Status</td>
        <td colSpan="1">{' '}</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Thaicon</th>
        <td colSpan="2">1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <th scope="row">telStar</th>
        <td colSpan="2">11</td>
        <td>22</td>
        <td>33</td>
      </tr>
      <tr>
        <th scope="row">lorem</th>
        <td colSpan="2">111</td>
        <td>222</td>
        <td>333</td>
      </tr>
      <tr>
        <th scope="row">test</th>
        <td colSpan="2">1111</td>
        <td>2222</td>
        <td>3333</td>
      </tr>
    </tbody>
  </table>
);

export default MissionInfo;
