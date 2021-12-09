import React from 'react';

export default function ProfileImage(props) {
  const { imageUrl } = props;
  return (
    <React.Fragment>
      <img src={imageUrl} className='profile' alt='profile' />
    </React.Fragment>
  );
}
