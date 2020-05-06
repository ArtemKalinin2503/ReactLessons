import React, {Component} from 'react';
import { Route,Switch,NavLink } from 'react-router-dom';
import './App.scss';
import News from "./components/News/News";
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Authorization from './components/Authorization/Authorization';
import NewsDetail from "./components/NewsDetail/NewsDetail";
import TodoList from "./components/TodoList/TodoList";
import ReduxCount from "./components/ReduxCount/ReduxCount";
import ReduxCount2 from "./components/ReduxCount2/ReduxCount2";

class App extends Component {

    //State
        constructor(props) {
            super(props);
            this.state = {
                pageTitle: 'Title page of React',
                news: [
                    {
                        title: 'News1',
                        description: 'Description news 1'
                    },
                    {
                        title: 'News2',
                        description: 'Description news 2'
                    }
                ],
                isLogin: false
            }
        }

    //Methods
        //Измененеие заголовка страницы
        handlerChangeTitle = () => {
            //Изменение state
            this.setState({
                pageTitle: 'Change Page Title React'
            });
        };

        //Поле изменение заголовка страницы из input
        handleInput = (event) => {
            //Метод изменение state
            this.setState({
                pageTitle: event.target.value
            })
        };

        //Изменение заголовка новости
        handleChangeTitleNews = (value, index) => {
            let newsArr = [...this.state.news]; //Копируем массив из state news (потому что нельзя напрямую изменять state)
            newsArr[index].title = value; //У копии массива изменениям поле title (index - нужен чтобы детектить какую новость изменять)
            this.setState({ //И в конце перезапишем state news на новый измененный массив
                news: newsArr
            })
        };

        //Удаление новости
        handleDeleteNews = (index) => {
            let newsArr = [...this.state.news]; //Копируем массив state news (так как нельзя изменять state еа прямую)
            newsArr.splice(index, 1); //Удаляем новость с помощью метода splice (принимает два параметра - первый это Index элемента который удаляем и вторым количество элементов)
            this.setState({ //Перезапишем state news в новый массив
                news: newsArr
            })
        };

    //componentDidMount - сработает после render компонента
    componentDidMount() {
        console.log('componentDidMount')
    }

    //Клик по кнопке Login
    handlerLogin = () => {
      this.setState({
          isLogin: !this.state.isLogin
      })
    };

    render() {
        return (
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/' activeClassName={'nav-link_active'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/news' activeClassName={'nav-link_active'}>News</NavLink>
                        </li>
                        <li>
                            <NavLink to='/layout' activeClassName={'nav-link_active'}>Layout</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' activeClassName={'nav-link_active'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/authorization' activeClassName={'nav-link_active'}>Authorization</NavLink>
                        </li>
                        <li>
                            <NavLink to='/todo' activeClassName={'nav-link_active'}>Todo</NavLink>
                        </li>
                        <li>
                            <NavLink to='/reduxCount' activeClassName={'nav-link_active'}>ReduxCount</NavLink>
                        </li>
                        <li>
                            <NavLink to='/reduxCount2' activeClassName={'nav-link_active'}>ReduxCount2</NavLink>
                        </li>
                        <li>
                            <p>Login: {this.state.isLogin ? "TRUE" : "FALSE"}</p>
                            <button onClick={this.handlerLogin}>Login</button>
                        </li>
                    </ul>
                </nav>
                {/*Компонент с Заголовком*/}
                <Switch>
                    <Route path="/" exact>
                        <h1>{this.state.pageTitle}</h1>
                        <input type='text' onChange={this.handleInput}/>
                        <button onClick={this.handlerChangeTitle}>Change title Page</button> {/*Вещаем обработчик событий*/}
                    </Route>
                    {/*Компонент с Новостями*/}
                    <Route exact path="/news">
                        {/*Вывод компонента динамически*/}
                        {this.state.news.map((itemNews, index) => {
                            return (
                                <News
                                    key={index}
                                    index={index}
                                    title={itemNews.title}
                                    descriptions={itemNews.description}
                                    changeTitleNews={event => this.handleChangeTitleNews(event.target.value, index)} //Передаем метод в качестве props (так как input находиться в компненте News)
                                    onDelete={this.handleDeleteNews.bind(this,index)}
                                />
                            )
                        })}
                    </Route>
                    <Route exact path="/news/:title" component={NewsDetail}/> {/*Роутинг до выбранной новости - в title попадет заголовок новости на основании props переданного в компонент News выше*/}
                    {/*Компонент с Вопросами*/}
                    <Route exact path="/layout" component={Layout} />
                    {/*Компонент с Информацией - вывод по условию*/}
                    {this.state.isLogin ?
                        <Route exact path="/about" component={About} />
                        : null
                    }
                    {/*Компонент Авторизации*/}
                    <Route exact path={"/authorization"} component={Authorization}/>
                    {/*Компонент с Задачами*/}
                    <Route exact path={"/todo"} component={TodoList}/>
                    {/*Компонент с подключенным Redux*/}
                    <Route exact path={"/reduxCount"} component={ReduxCount}/>
                    {/*Компонент с подключенным Redux*/}
                    <Route exact path={"/reduxCount2"} component={ReduxCount2}/>
                    {/*404*/}
                    <Route exact render={() => <h1>404 not found</h1>}/>
                </Switch>
            </div>
        );
    }

}

export default App;
