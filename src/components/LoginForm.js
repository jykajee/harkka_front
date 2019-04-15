import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './LoginForm.css';

export default class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
    }

    onChange = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    onRegister = (e) => {
        if(this.state.username.length < 3 || this.state.password.length < 8){
            alert("Username needs to be at least 3 char, password at least 8 char, also no poop pants");
            return;
        }
        let user = {
            "username":this.state.username,
            "password":this.state.password
        }
        this.props.onRegister(user);
    }

    onLogin = () => {
        if(this.state.username.length < 3 || this.state.password.length < 8){
            alert("Username needs to be at least 3 char, password at least 8 char, also no poop pants");
            return;
        }
        let user = {
            "username":this.state.username,
            "password":this.state.password
        }
        this.props.onLogin(user);
    }

    render () {
        return (
            <div className="LoginFormWrapper">
                <h1>Loggaileeppa sissää</h1>
                <Form>
                    <div className="LoginContentWrapper">
                        <Form.Group>
                            <label>Käyttäjänimi</label>
                            <input type="text"
                                    name="username"
                                    onChange={this.onChange}
                                    value={this.state.username} />
                        </Form.Group>
                        <Form.Group>
                            <label>Passu</label>
                            <input type="password"
                                    name="password"
                                    onChange={this.onChange}
                                    value={this.state.password} />
                        </Form.Group>
                        <Button onClick={this.onRegister}>Register</Button>
                        <Button onClick={this.onLogin}>Login</Button>
                    </div>
                </Form>
            </div>
        )
    }
    
}