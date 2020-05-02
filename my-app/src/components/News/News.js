import React, {Component} from 'react';
import './News.scss'; //Подключаем стили (npm install node-sass)
import PropTypes from 'prop-types'; //npm install prop-types

class News extends Component {

    //State
    constructor(props) {
        super(props);
        this.state = {
            showFull: false
        }
        this.btnShowFullNews = React.createRef(); {/*Создание ref*/}
    }

    //Methods
    showFullNews = () => {
        this.setState({
            showFull: !this.state.showFull
        })
    };

    //Сработает после render компонента
    componentDidMount() {
        if (this.props.index === 0) { //Проверка на index - чтобы указать на какой элемент приминить класс
            this.btnShowFullNews.current.classList.add('active') //Через ref получили ссылку на элемент
        }
    };

    //componentWillUnmount - срабоатет после удаления компонента
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return (
            <div className='news-wrapper'>
                <h3>{this.props.title}</h3> {/**Принимает переадныне props */}
                <p>{this.props.descriptions}</p>
                {/*Принимаем метод в качестве props */}
                <input type='text'
                       onChange={this.props.changeTitleNews}
                       value={this.props.title}
                       className={this.state.showFull ? 'input green' : 'input red'} /*Динамический класс*/
                />
                <button onClick={this.showFullNews}  ref={this.btnShowFullNews}>Show full news</button> {/*указываем ref*/}
                {/*Показываем блок по условию*/}
                {this.state.showFull ?
                    <div className='news__description'>
                        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
                        <p>Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                    </div> : null
                }
                <button onClick={this.props.onDelete}>Delete news</button>
            </div>
        )
    }
}

//Валидируем значения которые ожидаем в качестве Props (как TypeScript)
News.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    descriptions: PropTypes.string,
    changeTitleNews: PropTypes.func,
    onDelete: PropTypes.func,
}

export default News;