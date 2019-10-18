import React,{Component} from 'react'
import Fieldset from "../../carbon/src/__deprecated__/components/fieldset";
import Textbox from "../../carbon/src/__deprecated__/components/textbox";
import './style.css'
import {connect} from "react-redux";
import {addWorker} from "../../actions";

class Login extends Component {
    id = 2;
    state = {
        login: '',
        password: '',
        firstName: '',
        surname: '',
        reg: true
    };

    render() {
        return(
                <>
                    {this.state.reg ? <div onSubmit={this.Push} className="for-in-block">
                        <form>
                            <input type="text" className="for-log" required onChange={this.ForLogin} placeholder="   Логин" value={this.state.login}/>
                        </form>
                        <form>
                            <input type="text" className="for-pas" required onChange={this.ForPassword} placeholder="   Пароль" value={this.state.password}/>
                        </form>
                        <button onClick={this.Push} type="button" className="for-in-button">Войти</button>
                        <button onClick={this.Save} className="for-reg-button">Регистрация</button>
                    </div> : <div className="for-reg">
                        <Fieldset >
                            <Textbox
                                value={this.state.firstName}
                                type="text"
                                label="Имя"
                                onChange={this.ForFirstName}
                                placeholder="Введите имя"
                                labelInline={ true }
                                labelAlign="center"
                            />
                            <Textbox
                                value={this.state.surname}
                                type="text"
                                label="Фамилия"
                                onChange={this.ForSurname}
                                placeholder="Введите фамилию"
                                labelInline={ true }
                                labelAlign="center"
                            />
                            <Textbox
                                value={this.state.login}
                                type="text"
                                label="Логин"
                                onChange={this.ForLogin}
                                placeholder="Введите логин"
                                labelInline={ true }
                                labelAlign="center"
                            />
                            <Textbox
                                value={this.state.password}
                                type="text"
                                label="Пароль"
                                onChange={this.ForPassword}
                                placeholder="Введите пароль"
                                labelInline={ true }
                                labelAlign="center"
                            />
                        </Fieldset>
                        <button onClick={this.Add} className="for-save-button">Сохранить</button>
                        <button onClick={this.Save} className="for-back-button">Назад</button>
                    </div>}
                </>
        )
    }

    ForFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    };

    ForSurname = (e) => {
        this.setState({
            surname: e.target.value
        })
    };

    ForLogin = (e) => {
        this.setState({
            login: e.target.value
        })
    };

    ForPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    Push = (e) => {
        e.preventDefault();
        this.props.checkLogin(this.state.login,this.state.password)
        this.setState({
            login: '',
            password: '',

        })
    };

    Add = (e) => {
        e.preventDefault();
        const {firstName,surname,login,password} = this.state;
        ++this.id;
        this.props.addWorker(this.id, firstName, surname, login, password);
        this.setState({
            firstName: '',
            surname: '',
            login: '',
            password: ''
        });
        this.Save()
    };

    Save = (e) => {
        this.setState({
            reg: !this.state.reg
        })
    }
}

export default connect(state => ({state: state.workers}),
    dispatch => ({
        addWorker: (id, name, surname, login, password) => dispatch(addWorker(id, name, surname, login, password))
    }))(Login);
