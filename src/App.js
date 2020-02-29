import React from 'react';
import Course from './components/Courses';
import MessengerCustomerChat from 'react-messenger-customer-chat';
// import Lifecycle from './components/Lifecycle';

class App extends React.Component {
	render() {
		const items = [
            {
				name: 'ReacJS',
				time: '30h',
				free: true,
				desc: 'ReactJS is very simple'
			},
			{
				name: 'VueJS',
				time: '20h',
				free: false,
				desc: 'VueJS is very simple'
			},
			{
				name: 'NodeJS',
				time: '18h',
				free: true,
				desc: 'NodeJS is very simple'
            }
		]
		let elmCourse = items.map((item, index) =>
			<Course key={index} name={item.name} time={item.time} free={item.free}>{item.desc}</Course>
  		);
		
		// elmCourse = null;

		return (
			<div className="row">
				{elmCourse}
				<MessengerCustomerChat
					pageId="102870917991334"
					appId="220901722428950"
  				/>
				{/* <Lifecycle /> */}
			</div>
		);
	}
}

export default App;
