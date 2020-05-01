import React, {Component} from 'react';

class News extends Component {

    render() {
        return (
            <div className='news-wrapper'>
                <h3>{this.props.title}</h3> {/**Принимает переадныне props */}
                <p>{this.props.description}</p>
                <button onClick={this.props.onChangeTitleNews}>Change title news</button> {/*Принимаем метод в качестве свойства*/}
            </div>
        )
    }
}

export default News;