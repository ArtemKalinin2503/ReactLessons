import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add_counter2} from "../../redux/actions/actions"; //Импорт actions

//Компонент который подключен к Redux
class ReduxCount2 extends Component {
    render() {
        return (
            <div className='counter__wrapper'>
                <h3>Компонент ReduxCount2 уже работает с Redux</h3>
                <p>{this.props.propsCounter}</p>
                <button onClick={this.props.onAdd}>+</button>
            </div>
        )
    }
}

//В mapStateToProps надо передать state из store и записать его в объявленный props на уровне данного компонента
function mapStateToProps(state) {
    return {
        propsCounter: state.counter2.counterTwo //Необходимо передать имя reducer из которого обращаемся к state
    }
}

//В mapDispatchToProps вызываем actions и переадем в них параметры при не обходимости
function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add_counter2()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCount2);
