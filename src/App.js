import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/navigationBar";
import Login from './components/login'
import './carbon/src/style'
import dataBase from './database'


export default class App extends Component {
    state = {
        valid: false,
        data: dataBase
    };
    render(){
    const body = this.state.valid ?
       <div className="for-bar-table"><NavigationBar/></div> : <div className="for-login"><Login checkLogin={this.checkLogin} AddInData={this.AddInData}/></div>;
        return(
            <div className="for-main-block">
                {body}
            </div>
        )
    }

    checkLogin = (login,password) => {
        this.setState({
            valid: this.state.data.filter(((el) => el.login === login && el.password === password)).length !== 0
        })
    };

    createNewItem = (firstName,secondName,login,password) => {
        return {firstName,secondName,login,password}
    };

    AddInData = (firstName,secondName,login,password) => {
        const newData = [...this.state.data, this.createNewItem(firstName,secondName,login,password)];
        this.setState({
            data: newData,
            valid: false
        })
    }
}





