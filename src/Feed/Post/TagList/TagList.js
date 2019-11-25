import React, {Component} from 'react';
import './TagList.scss'

class TagList extends Component {
    render() {
        return (
            <div className="TagList">
                {this.props.tags.map((tag,i) => {
                    return <div key={i} className="tag">
                        <a href="#">#{tag}</a>
                    </div>
                })}
            </div>
        );
    }
}

export default TagList;