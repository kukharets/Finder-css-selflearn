import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Cat from '../assets/Cat.png';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <div><img src={Error}/></div>;
        }
        return this.props.children;
    }
}



class BodyPets extends React.Component{
    render(){
        const connect = false;
        return(
            <div>
                {connect &&
                    <AppBar style={{ backgroundColor: 'orange' }}  position="static" >
                        <ToolBar>
                            <Typography variant="title" color="inherit">
                                Super cats finders
                            </Typography>
                        </ToolBar>
                    </AppBar>
                }
                <div style={{ width: '100vw', height: '100vh'}}>
                    <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto: ', height: '20vw', width: '20vw', paddingTop: '40vh' }}>

                        <img style={{ height: '20vw', width: '20vw' }} className="image"  src={Cat}/>

                    </div>
                </div>
            </div>
        )
    }
}


const NavBar = () => {
    return (
        <BodyPets/>
    )
}

export default NavBar;