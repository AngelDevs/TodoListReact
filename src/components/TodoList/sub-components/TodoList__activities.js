import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoList__activities extends Component {
	render() {
		return this.props.todos.map((todo) => {
			return (
				<div key={todo.id} className='TodoList__activity-wrapper'>
					<span className='TodoList__activity'>{todo.activity}</span>
					<span
						className='TodoList__erase-btn'
						onClick={(e) => {
							e.preventDefault();
							this.props.deleteEv(todo.id);
						}}
					>
						X
					</span>
				</div>
			);
		});
	}
}

TodoList__activities.propTypes = {
	todos: PropTypes.array.isRequired
};

export default TodoList__activities;
