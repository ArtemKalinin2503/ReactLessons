import React, {Component} from 'react';
import AnswewList from "../AnswerList/AnswerList";
import './ActiveQuestion.scss';

//Компонент Активный вопрос
class ActiveQuestion extends Component {

    render() {
        return (
            <div className='activeQuestion__wrapper'>
                <div className='activeQuestion__header'>
                    <div>
                        <p>
                            <strong>{this.props.answerNumber}.</strong>
                            <span>{this.props.questions}</span>
                        </p>
                    </div>
                    <div>
                        <small>{this.props.answerNumber} из {this.props.questionsLength}</small>
                    </div>
                </div>
                <div>
                  <AnswewList
                      answers={this.props.answers}
                      onAnswerClick={this.props.onAnswerClick}
                      state={this.props.state}
                  />
                </div>
            </div>
        )
    }
}

export default ActiveQuestion
