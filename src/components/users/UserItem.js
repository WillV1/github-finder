import React, {Component} from 'react';
import ImageCard from './ImageCard';

class UserItem extends Component {
     

    render() {
      const {login, avatar_url, html_url} = this.props.user
        
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
}

export default UserItem;