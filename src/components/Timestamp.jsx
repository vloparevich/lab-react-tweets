import React from 'react';

export default function Timestamp(props) {
  const { actualTime } = props;
  return (
    <React.Fragment>
      <span className='timestamp'>{actualTime}</span>
    </React.Fragment>
  );
}
