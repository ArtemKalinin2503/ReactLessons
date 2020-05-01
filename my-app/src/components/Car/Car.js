import React, {Component} from 'react';

class Car extends Component {
    render() {
        return (
            <div className='car-wrapper'>
                <p>Car</p>
                <p>{1 + 1}</p>
                <p>Car name: {this.props.name}</p> {/*Получение параметров*/}
                <p>Year: {this.props.year}</p>
            </div>
        )
    }
}

export default Car;