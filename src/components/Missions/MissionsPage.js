const MissionsPage = (prop) => {
  const { joinMissionHandler, id,  name, description, reserved, leaveMissionHandler } = prop;

  let button;
  if (!reserved) {
    button = <button type="button" className="mission-btn-join" onClick={() => joinMissionHandler(id)}>Join Mission</button>;
  } else {
    button = <button type="button" className="mission-btn-badge" onClick={() => leaveMissionHandler(id)}>Leave <Mission>Leave Mission|</Mission></button>;
   }

   let badge;
   if (!reserved) {
     badge = <span className="mission-btn">Not a Member</span>;
   } else {
     badge = <span className="join-badge">Actuve Member</span>;
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
