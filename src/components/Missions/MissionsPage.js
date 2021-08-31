const MissionsItem = (prop) => {
  const { name, description } = prop;

  return (

    <tr>
      <td className="mission-title">{name}</td>
      <td className="mission-description">{description}</td>
      <td>
        <button className="mission-button" type="button">Not a Member</button>
      </td>
      <td>
        <button className="mission-button-join" type="button">Join Mission</button>
      </td>
    </tr>

  );
};

export default MissionsItem;
