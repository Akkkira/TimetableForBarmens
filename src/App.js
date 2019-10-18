import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/navigationBar";
import Login from './components/login'
import './carbon/src/style'
import {connect} from "react-redux";
import {setWorkers} from "./actions";


class App extends Component {
    state = {
        valid: false,
    };

    componentDidMount() {
        this.props.getWorkers()
    }

    render(){
    const body = this.state.valid ?
       <div className="for-bar-table">
           <NavigationBar />
       </div> :
        <div className="for-login">
            <Login checkLogin={this.checkLogin}/>
        </div>;
        return(
            <div className="for-main-block">
                {body}
            </div>
        )
    }

    checkLogin = (login,password) => {
        this.setState({
            valid: this.props.state.filter(((el) => el.login === login && el.password === password)).length !== 0
        })
    };
}

export default connect(
    state => ({state: state.workers}),
    dispatch => ({
        getWorkers: () => dispatch(setWorkers()),
    })
)(App);





