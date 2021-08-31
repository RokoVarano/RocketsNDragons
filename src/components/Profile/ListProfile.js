import {
  List, ListItem, ListItemText, Divider,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const ListProfile = ({ data }) => {
  const iteration = (data) => data.map((item) => (
    <div key={data.id}>
      <Divider />
      <ListItem>
        <ListItemText primary={item} />
      </ListItem>
      <Divider />
    </div>
  ));

  return (
    <List>
      {iteration(data)}
    </List>
  );
};

ListProfile.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListProfile;
