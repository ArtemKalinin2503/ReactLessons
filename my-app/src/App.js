import React, {Component} from 'react';
import './App.css';
import Car from './components/Car/Car';
import News from "./components/News/News";

class App extends Component {

    //State
        state = {
            pageTitle: 'Title page of React',
            news: [
                {
                    title: 'News 1',
                    description: 'Description news 1'
                },
                {
                    title: 'News 2',
                    description: 'Description news 2'
                }
            ],
        }

    //Methods
        //Измененеие заголовка страницы
        handlerChangeTitle = () => {
            //Изменение state
            this.setState({
                pageTitle: 'Change Page Title React'
            });
        };
        //Обработка клика по кнопке внутри компонента News
        handlerChangeTitleNews = () => {
            console.log('!!!!!')
        };
        //Поле изменение заголовка
        handleInput = (event) => {
            //Метод изменение state
            this.setState({
                pageTitle: event.target.value
            })
        };

    render() {
        const divStyle = {
            'color': 'red'
        }
        return (
            <div className="App">
                <div style={divStyle}>
                    <p style={{fontSize: 20}}>HELLO</p>
                    <Car name={'BMW'} year={2019}/> {/*Передача параметров*/}
                    <h1>{this.state.pageTitle}</h1>
                    <input type='text' onChange={this.handleInput}/>
                    <button onClick={this.handlerChangeTitle}>Change title Page</button> {/*Вещаем обработчик событий*/}
                    {/*Вывод компонента динамически*/}
                    {this.state.news.map((itemNews, index) => {
                        return (
                            <News
                                key={index}
                                title={itemNews.title}
                                descriptions={itemNews.description}
                                onChangeTitleNews={this.handlerChangeTitleNews.bind(this)} //Передаем метод в качестве props
                            />
                        )
                    })}
                </div>
            </div>
        );
    }

}

export default App;
