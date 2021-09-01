const MissionsPage = (prop) => {
  const {
    joinMissionHandler, id, name, description, reserved, leaveMissionHandler,
  } = prop;

  let button;
  if (!reserved) {
    button = <button type="button" className="mission-button-join" onClick={() => joinMissionHandler(id)}>Join Mission</button>;
  } else {
    button = <button type="button" className="mission-button-badge" onClick={() => leaveMissionHandler(id)}>Leave Mission</button>;
  }

  let badge;
  if (!reserved) {
    badge = <span className="mission-button">Not a Member</span>;
  } else {
    badge = <span className="join-badge ">Active Member</span>;
  }

  return (

    <tr>
      <td className="mission-title">{name}</td>
      <td className="mission-description">{description}</td>
      <td>
        {badge}
      </td>
      <td>
        {button}
      </td>
    </tr>

  );
};

export default MissionsPage;
