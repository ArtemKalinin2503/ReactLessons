import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, add_number, sub, asyncAdd} from "../../redux/actions/actions"; //Импорт actions

//Компонент который подключен к Redux
class ReduxCount extends Component {
    render() {
        return (
            <div className='counter__wrapper'>
                <h3>Компонент ReduxCount уже работает с Redux</h3>
                <p>{this.props.propsCounter}</p>
                <button onClick={this.props.onAdd}>+</button>
                <button onClick={this.props.onSub}>-</button>
                <button onClick={this.props.onAddNumber.bind(this, 15)}>Добавить число 15</button>
                <button onClick={this.props.onAsyncAdd.bind(this, 100)}>Добавить число с помощью Redux-Thunk</button>
            </div>
        )
    }
}

//В mapStateToProps надо передать state из store и записать его в объявленный props на уровне данного компонента
function mapStateToProps(state) {
    return {
        propsCounter: state.counter1.counterOne //Необходимо передать имя reducer из которого обращаемся к state
    }
}

//В mapDispatchToProps вызываем actions и переадем в них параметры при не обходимости
function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: (payload) => dispatch(add_number(payload)),
        onAsyncAdd: (payload) => dispatch(asyncAdd(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCount);
