import React, {Component} from 'react';

class About extends Component {
    //Кнопка вернуться на страницу Home
    goToHome = () => {
        this.props.history.push({
            pathname: '/'
        })
    };
    render() {
        return(
            <div className='about__wrapper'>
                <h3>About</h3>
                <button onClick={this.goToHome}>Back Home</button>
            </div>
        )
    }
}

export default About