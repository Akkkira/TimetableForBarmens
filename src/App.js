import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/navigationBar";
import Login from './components/login'
import './carbon/src/style'


export default class App extends Component {
    state = {
        valid: false,
        data: [
            {
                firstName: 'Denis',
                secondName: 'Rubis',
                login: 'Akira',
                password: '1231'
            },
            {
                firstName: 'Tima',
                secondName: 'Zarenok',
                login: 'ghto',
                password: 'ghto'
            },
            {
                firstName: 'Nikita',
                secondName: 'Birulya',
                login: 'Kujatata',
                password: '1313'
            }
        ]
    };
    render(){
    const body = this.state.valid ?
        <NavigationBar/> : <div className="for-login"><Login checkLogin={this.checkLogin} AddInData={this.AddInData}/></div>;
        return(
            <>
                {body}
            </>
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
            data: newData
        })
    }
}





