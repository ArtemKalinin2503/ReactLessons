import React, {Component} from 'react';
import './App.css';
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

    render() {
        return (
            <div className="App">
                <div>
                    <p style={{fontSize: 20}}>HELLO</p>
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
                                changeTitleNews={event => this.handleChangeTitleNews(event.target.value, index)} //Передаем метод в качестве props (так как input находиться в компненте News)
                                onDelete={this.handleDeleteNews.bind(this,index)}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }

}

export default App;
