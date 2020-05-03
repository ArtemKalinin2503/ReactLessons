import React, {Component} from 'react';
import Questions from '../Questions/Questions';
import './Layout.scss';

//Компонент основной для секции вопросов
class Layout extends Component {
    render() {
        return (
            <div className='layuot__wrapper'>
                <h1 className='layuot__title'>Ответьте на вопросы:</h1>
                <Questions/>
            </div>
        )
    }
}

export default Layout
