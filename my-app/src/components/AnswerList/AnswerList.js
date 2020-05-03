import React, {Component} from 'react';
import AnswerItem from '../AnswerItem/AnswerItem';
import './AnswerList.scss';

//Компонент со списком Ответов
class AnswerList extends Component {

    render() {
        return (
            <div className='answerList__wrapper'>
                <ul className='answerList__list'>
                    {this.props.answers.map((itemAnswers, index) => {
                        return (
                            <div className='answerList__text'>
                                <AnswerItem
                                    key={index}
                                    answersItem={itemAnswers.text}
                                    onAnswerClick={this.props.onAnswerClick}
                                    id={itemAnswers.id}
                                    state={this.props.state ? this.props.state[itemAnswers.id] : null}
                                />
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default AnswerList
