import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchGolfer, fetchGolferName } from '../../actions';

import DisplayTable from './DisplayTable';

const GolfIndex = props => {
  const dispatch = useDispatch();

  const request = () => {
    const response = dispatch(fetchGolfer());
    const r = dispatch(fetchGolferName())
  };

  useEffect(() => {
    request();
  }, []);

  return <DisplayTable />;
};

const mapStateToProps = state => {
  return {
    golfers: state,
  };
};

export default connect(mapStateToProps, { fetchGolfer, fetchGolferName })(GolfIndex);
