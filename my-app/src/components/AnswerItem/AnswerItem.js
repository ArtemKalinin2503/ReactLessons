import React, {Component} from 'react';
import './AnswerItem.scss';
//Компонент с вариантом ответа
class AnswerItem extends Component {
    render() {
        if (this.props.state) {
            console.log(this.props.state);
        }
        return (
            <div className='answerItem__wrapper'>
                <li
                    className={this.props.state === 'success' ? 'success' : ''}
                    onClick={() => this.props.onAnswerClick(this.props.id)}>{this.props.answersItem}
                </li>
            </div>
        )
    }
}

export default AnswerItem
