import React, {Component} from 'react';

//Компонент Авторизации с валидацией формы
class Authorization extends Component {

    //State
    constructor(props) {
        super(props);
        this.state = {
            isFormValid: false,
            formControls: {
                email: {
                    value: '',
                    type: 'email',
                    label: 'Email',
                    errorMessage: 'Введите корректный email',
                    touched: false,
                    validation: false
                },
                password: {
                    value: '',
                    type: 'password',
                    label: 'Password',
                    errorMessage: 'Введите корректный пароль',
                    touched: false,
                    validation: false
                }
            }
        }
    };

    //Methods
    loginHandler = () => {

    };

    regisHandler = () => {

    };

    submitHandler = (event) => {
        event.preventDefault()
    };

    changeInputAuthorization = async (event, controlName) => {
        const formsControlsChange = {...this.state.formControls}; //Скопированный state (потому что нельзя изменять state на прямую)
        const control = {...formsControlsChange[controlName]}; //Каждый элемент state
        control.value = event.target.value;
        control.touched = true; //Чтобы показать ошибки после того как начали вводить в input
        formsControlsChange[controlName] = control;
        await this.setState({
            formControls: formsControlsChange
        });

        //Валидируем Email
            function validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
            //Функция возвращает true/false
            if (validateEmail(this.state.formControls[controlName].value.trim()) === true) {
                control.validation = true
                this.setState({
                    formControls: formsControlsChange
                });
            } else {
                control.validation = false
                this.setState({
                    formControls: formsControlsChange
                });
            }

        //Валидация Password
            if (this.state.formControls[controlName].type === "password" && this.state.formControls[controlName].value.trim().length >= 6) {
                control.validation = true;
                this.setState({
                    formControls: formsControlsChange
                });
            }

        //Общая проверка валидации формы
            let isFormValid = true;
            Object.keys(this.state.formControls).forEach(item => {
                isFormValid = this.state.formControls[item].validation && isFormValid
            })
            this.setState({
                isFormValid: isFormValid
            });

    }

    render() {
        return (
            <div>
                <h2>Authorization</h2>
                <form onSubmit={this.submitHandler}>
                    {Object.keys(this.state.formControls).map((controlName, index) => {
                        return (
                            <label key={controlName + index}>
                                {this.state.formControls[controlName].label}
                                <input
                                    type={this.state.formControls[controlName].type}
                                    touched={this.state.formControls[controlName].touched}
                                    onChange={event => this.changeInputAuthorization(event, controlName)}
                                />
                                {!this.state.formControls[controlName].validation ?
                                    <div>
                                        {this.state.formControls[controlName].touched ?
                                            <span>{this.state.formControls[controlName].errorMessage}</span>
                                            : null
                                        }
                                    </div> : null
                                }
                            </label>
                        )
                    })}
                    <button onClick={this.loginHandler} disabled={!this.state.isFormValid}>Войти</button>
                    <button onClick={this.regisHandler}>Зарегистрироваться</button>
                </form>
            </div>
        )
    }
}
export default Authorization