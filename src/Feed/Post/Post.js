import React, {Component} from 'react';
import Moment from 'react-moment';
import "./Post.scss";
import { FaUserCircle, FaRegHeart, FaRegComment, FaRegShareSquare, FaRegBookmark } from 'react-icons/all';
import TagList from "./TagList/TagList";
import config from '../../config';


class Post extends Component {

    render() {
        return (
            <div className="post">
                <div className="post-header">
                    <div className="user-details">
                        <FaUserCircle className="user-icon"/>
                        <h4 className="user-id">{this.props.user}</h4>
                    </div>
                    <div className="created">
                        <Moment format="MMM DD, YYYY">{this.props.created}</Moment>
                    </div>
                </div>

                <img src={config.apiUrl + '/' + this.props.image} alt="image" className="post-image" />
                <div className="post-reactions">
                    <div className="like-comment-share">
                        <button className="action-button">
                            <FaRegHeart className="icon" />
                        </button>
                        <button className="action-button">
                            <FaRegComment className="icon" />
                        </button>
                        <button className="action-button">
                            <FaRegShareSquare className="icon" />
                        </button>
                    </div>
                    <div className="bookmark">
                        <button className="action-button">
                            <FaRegBookmark className="icon" />
                        </button>
                    </div>
                </div>
                <div className="post-details">
                    <span className="post-likes">{this.props.likes} Likes</span>
                    <p className="post-title">{this.props.title}</p>
                    <TagList tags={this.props.tags} className="tags-list" />
                </div>
            </div>
        );
    }
}

export default Post;