import React, {Component} from 'react';
import ImageCard from './ImageCard';

class UserItem extends Component {
    constructor() {
        super();
        this.state = {
          id: 'id',
          login: 'mojombo',
          avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
          html_url: "https://github.com/mojombo"
        }
      }

    render() {
        return (
            <div>
               <ImageCard image={this.state.avatar_url}/> 
            </div>
        )
    }
}

export default UserItem;