import React from 'react';

export default function Message(props) {
  const { message } = props;
  return (
    <React.Fragment>
      <p className='message'>{message}</p>
    </React.Fragment>
  );
}
