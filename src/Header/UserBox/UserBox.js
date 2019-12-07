import React, {Component} from 'react';
import config from "../../config";
import {Link} from "react-router-dom";

class UserBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        fetch(config.apiUrl + '/api/users/me', {
            credentials: "include"
        })
            .then(res => res.json())
            .then(user => {
                this.setState({
                    user: user
                });
            })
            .catch(e => console.log(e))
    }

    render() {
        return (
            <div className="user-actions">
                {this.state.user
                    ? <span>Hello {this.state.user.username}</span>
                    : <div>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </div>
                }
            </div>
        );
    }
}

export default UserBox;