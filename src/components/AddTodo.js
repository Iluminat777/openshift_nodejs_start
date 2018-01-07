import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

export default class TodoInput extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleSave = text => {
        if (text.length !== 0) {
            this.props.addTodo(text)
        }
    }

    render() {
        return (
            <TodoTextInput newTodo
                           onSave={this.handleSave}
                           placeholder="What needs to be done?" />
        )
    }
}