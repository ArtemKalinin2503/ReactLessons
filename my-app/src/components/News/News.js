import React, {Component} from 'react';
import './News.scss'; //Подключаем стили (npm install node-sass)

class News extends Component {

    //State
    state = {
        showFull: false
    }

    //Methods
    showFullNews = () => {
        this.setState({
            showFull: !this.state.showFull
        })
    };

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
                <button onClick={this.showFullNews}>Show full news</button>
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

export default News;