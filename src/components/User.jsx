import React from 'react';
import Timestamp from './Timestamp';

export default function User(props) {
  const { details } = props;
  return (
    <React.Fragment>
      <span className='user'>
        <span className='name'>{details.user.name}</span>
        <span className='handle'>{details.user.handle}</span>
      </span>
      <Timestamp actualTime={details.timestamp} />
    </React.Fragment>
  );
}
