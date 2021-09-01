import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

const MissionsPage = (prop) => {
  const {
    joinMissionHandler, id, name, description, reserved, leaveMissionHandler,
  } = prop;

  let button;
  if (!reserved) {
    button = (
      <Button variant="contained" color="primary" onClick={() => joinMissionHandler(id)}>
        Join Mission
      </Button>
    );
  } else {
    button = (
      <Button variant="contained" color="secondary" onClick={() => leaveMissionHandler(id)}>
        Leave Mission
      </Button>
    );
  }

  let badge;
  if (!reserved) {
    badge = <Chip label="Not a Member" color="primary" />;
  } else {
    badge = <Chip label="Active Member" color="secondary" />;
  }

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{description}</TableCell>
      <TableCell align="right">{badge}</TableCell>
      <TableCell align="right">{button}</TableCell>

    </TableRow>

  );
};

export default MissionsPage;
