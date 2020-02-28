import React from 'react';

class Lesson extends React.Component {
    render() {
        return (
            <div className="list-group-item">{this.props.children}</div>
        );
    }
}

export default Lesson;


