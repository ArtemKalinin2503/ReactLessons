import React, {Component} from 'react';
import ActiveQuestion from '../ActiveQuestion/ActiveQuestion';
import './Questions.scss';

//Компонент вывода вопросв
class Questions extends Component {
    //State
    constructor(props) {
        super(props);
        this.state = {
            activeQuestion: 0,
            answerState: null, //Здесь будут храниться все ответы пользователя,
            isFinished: false,
            questions: [
                {
                    questionsApp: 'Какого цвета небо ?',
                    rightAnswerId: 2,
                    id: 1,
                    answers: [
                        {text: 'Черное', id: 1},
                        {text: 'Синие', id: 2},
                        {text: 'Красное', id: 3},
                        {text: 'Зеленое', id: 4}
                    ]
                },
                {
                    questionsApp: 'В каком году началась вторая мировая война ?',
                    rightAnswerId: 4,
                    id: 2,
                    answers: [
                        {text: '1943', id: 1},
                        {text: '1942', id: 2},
                        {text: '1945', id: 3},
                        {text: '1941', id: 4}
                    ]
                }
            ]
        }
    }

    //Methods
    //Клик по варианту ответа
    onAnswerClickHandler = (answerId) => {
        let questions = this.state.questions[this.state.activeQuestion];

        //Проверка если выбранный ответ id которого совподает с id верного ответа - совпадает
        if (questions.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuestionsFinished()) {
                   this.setState({
                       isFinished: true
                   })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1, //Увеличить счетчик на один, чтобы заменить вопрос
                        answerState: null
                    })
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    }

    //Проверка на количество вопросов (возвращает true или false    )
    isQuestionsFinished() {
        return this.state.activeQuestion + 1 === this.state.questions.length;
    }

    render() {
        return (
            <div className='questions__wrapper'>
                {
                    this.state.isFinished
                    ? <h1>FINISHED</h1>
                    : <ActiveQuestion
                        answers={this.state.questions[this.state.activeQuestion].answers}
                        questions={this.state.questions[this.state.activeQuestion].questionsApp}
                        onAnswerClick={this.onAnswerClickHandler}
                        questionsLength={this.state.questions.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                       />
                }
            </div>
        )
    }
}

export default Questions
