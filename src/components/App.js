import React from "react";
import PropTypes from 'prop-types';
import NavBar from "./NavBar";
class App extends React.Component {

	componentWillMount() {
		this.props.onCreate();
	}

 	render() {
	return (
		<div>
            <NavBar />
        </div>
	)
	}
}



App.propTypes = {
	onCreate: PropTypes.func.isRequired,
	location: PropTypes.string
}

App.defaultProps = {

}

export default App;