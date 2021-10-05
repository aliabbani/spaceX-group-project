/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
const Missions = (props) => {
  const { missions } = props;
  const { missionsTemp } = missions;
  return (
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
          {missionsTemp.map((mission) => (
            <>
              <th scope="row">{mission.mission_name}</th>
              <td colSpan="2">{mission.description}</td>
            </>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
export default Missions;
