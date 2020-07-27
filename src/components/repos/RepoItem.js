import React from 'react';
import PropTypes from 'prop-types';
import RepoCard from './RepoCard';


const RepoItem = ({ repo }) => {


  return (
    <div>
      <RepoCard
        html={repo.html_url}
        name={repo.name}
      />
    </div>

  )

}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired

}

export default RepoItem;