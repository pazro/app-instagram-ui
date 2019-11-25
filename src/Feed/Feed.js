import React, {Component} from 'react';
import "./Feed.scss";
import Post from "./Post/Post";
import {BeatLoader} from 'react-spinners';

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/evyros/fake-api/posts")
            .then(res => res.json())
            .then(posts => {
                this.setState({
                    isLoading: false,
                    posts
                });
            });
    }

    render() {
        if(this.state.isLoading) {
            return (
                <div className="loader">
                    <BeatLoader
                        color={'#faebd7'}
                        size={'25'}
                        sizeUnit={'px'}
                    />
                </div>
            )
        }
        return (
            <div className="Feed">
                {this.state.posts.map((post, index) => {
                    return <Post
                        user={post.userId}
                        image={post.image}
                        title={post.title}
                        likes={post.likes}
                        tags={post.tags}
                        created={post.created}
                        key={index}/>
                })}
            </div>
        );
    }
}

export default Feed;