import React, {Component} from "react";

function UserGreeting(props) {
    return <h1>С возвращением!</h1>
}

function GuestGreetings(props) {
    return <h1>Пожалуйста, зарегистрируйтесь!</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreetings />
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Авторизация
        </button>
    );
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Выход
        </button>
    );
}

export default class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}




