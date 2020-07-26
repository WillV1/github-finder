import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from './ImageCard';

const UserItem = ({user: {login, avatar_url, html_url}}) => {


  return (
    <div>
      <ImageCard
        image={avatar_url}
        login={login}
        html={html_url}

      />
    </div>
  )

}

UserItem.propTypes = {
  user: PropTypes.object.isRequired

}

export default UserItem;