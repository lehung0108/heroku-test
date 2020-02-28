import React from 'react';
import $ from 'jquery';

class Lifecycle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'LifeCycle'
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        console.log("constructor")

    }


    componentWillMount() {
        console.log("componentWillMount()")
        this.setState(state => ({
            title: "LifeCycleComponent - componentWillMount"
        }));
    }

    componentDidMount() {
        console.log("componentDidMount()")
        $("h3.panel-title").css('color', 'white');
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps()")
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate()")
        return false;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate()")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate()")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount()")
    }
    
    handleChangeTitle() {
        this.setState(state => ({
            title: "LifeCycleComponent - handleChangleTitle"
        }));
    }



	render() {
        console.log("render")

		return (
           <div className="panel panel-danger">
               <div className="panel-heading">
                    <h3 className="panel-title">{this.state.title}</h3>
               </div>
               <div className="panel-body">
                    <button onClick={this.handleChangeTitle} type="button" className="btn btn-success">Change title</button>
               </div>
           </div>
		);
	}
}

export default Lifecycle;
