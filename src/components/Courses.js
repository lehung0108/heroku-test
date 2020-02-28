import React from 'react';
import Lesson from './Lesson';


class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShowOutline: false};
        this.handleClick = this.handleClick.bind(this);
        this.registerCourse = this.registerCourse.bind(this);
        this.handleToggleOutline = this.handleToggleOutline.bind(this);
        this.username = React.createRef();
    }

    handleClick() {
        alert(this.props.name);
    }

    registerCourse() {
        console.log(this.username.current.value);
    }

    

    showButtonFree() {
        const isFree = this.props.free;
        if(isFree) {
            return  <div className="panel-footer">
                        <div className="btn-group">
                            <button type="button" className="btn btn-warning" onClick={this.handleClick}>View 1</button>
                            <button type="button" className="btn btn-danger">View 2</button>
                            <button type="button" className="btn btn-success">View 3</button>
                        </div>
                    </div>
        } else {
            return <div className="panel-footer">
                        <div className="input-group">
                            <input 
                                className="form-control" 
                                placeholder="username" 
                                ref={this.username}
                            />
                            <span className="input-group-btn">
                                <button 
                                    className="btn btn-info" 
                                    type="button"
                                    onClick={this.registerCourse}
                                >
                                    Register!
                                </button> 
                            </span> 
                        </div>
                    </div>
        }
    }

    handleToggleOutline() {
        this.setState(state => ({
            isShowOutline: !state.isShowOutline
        }));
    }

    render() {
        let elmOutline = '';
        if(this.state.isShowOutline) {
            elmOutline =  <div className="list-group">
                            <Lesson>Lession 1</Lesson>
                            <Lesson>Lession 2</Lesson>
                            <Lesson>Lession 3</Lesson>
                        </div>;
        }

        return (
            <div className="col-lg-4">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.name}</h3>
                    </div>
                    <div className="panel-body">
                        <p>{this.props.time}</p>
                        <p>{this.props.children}</p>
                        <p> <button type="button" className="btn btn-success" onClick={this.handleToggleOutline}>Toogle Outline</button></p>
                        {elmOutline}
                    </div>
                   {this.showButtonFree()}
                </div>
            </div>
        );
    }
}

export default Course;


