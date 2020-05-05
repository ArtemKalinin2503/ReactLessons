import React, {Component} from 'react';
//Компонент который вывод детали Новости на основании какой title пришел
class NewsDetail extends Component {
    render() {
        return (
            <div className="newsDetail__wrapper">
                <p>{this.props.match.params.title}</p> {/*Это props который принимает компонент из Route - выведит title новости которую выбрали*/}
            </div>
        )
    }
}

export default NewsDetail
