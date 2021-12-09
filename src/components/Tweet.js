import User from './User';
import ProfileImage from './ProfileImage';
import Message from './Message';
import Actions from './Actions';
import React from 'react';

function Tweet(props) {
  return (
    <React.Fragment>
      {props.content.map((tweet, index, array) => {
        return (
          <div className='tweet' key={index}>
            <ProfileImage imageUrl={tweet.user.image} />
            <div className='body'>
              <div className='top'>
                <User details={tweet} />
              </div>
              <Message message={tweet.message} />
              <div className='actions'>
                {/* Font Awesome icons */}
                <Actions />
              </div>
            </div>
            <i className='fas fa-ellipsis-h'></i>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Tweet;
