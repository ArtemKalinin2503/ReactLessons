import React, {Component} from 'react';
import axios from 'axios'; //npm install axios
import { Route,Switch,NavLink } from 'react-router-dom';
import './TodoList.scss';

//Компоеннт Задач с данным от сервера
class TodoList extends Component{

    //State
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            todos: [
                {
                    title: "Todos 1",
                    description: "Пойти гулять"
                },
                {
                    title: "Todos 2",
                    description: "Пойти в магазин"
                },
                {
                    title: "Todos 3",
                    description: "Пойти в зал"
                },
            ],
            todosArr: []

        }
    };

    componentDidMount = async () => {
        try {
            //Get
            const response = await axios.get('https://todo-react-51fc0.firebaseio.com/todos.json'); //БД развернута на базе firebase от google (json - обязательно дописать)
            //Перебрать объект
            let todos = [];
            Object.keys(response.data).forEach((itemTodo,key, index) => {
                console.log(key)
                let responseArr = response.data[itemTodo];
                responseArr.map((item, key, index) => {
                    return (
                        todos.push({
                            id: key,
                            title: item.title,
                            description: item.description
                        })
                    )
                })
            })
            this.setState({
                todosArr: todos,
                loading: false
            })
        } catch (e) {
            console.log(e);
        }
    };

    //Methods
    addTodosHandler = async () => {
        try {
            //Post
            const response = await axios.post('https://todo-react-51fc0.firebaseio.com/todos.json', this.state.todos) //Post запрос который запищет в БД наш state todos
            console.log(response.data) //Получим в ответ уникальный ключ от firebase
        } catch(e) {
            console.log(e)
        }
    };

    render() {
        return (
            <div className="todo__wrapper">
                <button onClick={this.addTodosHandler}>Добавить задачи</button>
                {/*Loader https://loading.io/css*/}
                {this.state.loading ? <div className="lds-dual-ring"/> : null}
                <ul className="list__todos">
                    {this.state.todosArr.map((item, index) => {
                        return (
                            <li>
                                <NavLink to={'/todos/' + item.id}>
                                    {item.title}
                                </NavLink>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList