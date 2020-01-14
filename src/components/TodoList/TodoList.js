import React, { Component } from 'react';
import Activities from './sub-components/TodoList__activities';
import Add from './sub-components/TodoList__add';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.addActivity = this.addActivity.bind(this);
		this.deleteActivity = this.deleteActivity.bind(this);
	}

	async componentDidMount() {
		const todos = await JSON.parse(localStorage.getItem('todos'));
		if (todos) {
			todos.map((todo) => {
				return this.addActivity(todo.id, todo.activity, todo.checked);
			});
		}
	}

	async addActivity(newId, activity, status) {
		await this.setState({
			todos: [
				...this.state.todos,
				{
					id: newId,
					activity: activity,
					checked: status
				}
			]
		});
		await localStorage.setItem('todos', JSON.stringify(this.state.todos));
	}

	deleteActivity(key) {
		let todos = this.state.todos;
		todos = todos.filter((todos, index) => !(todos.id === key));
		this.setState({
			todos: todos
		});
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	render() {
		return (
			<div className='TodoList'>
				<h1 className='main-title'>Todo List</h1>
				<div className='TodoList__activities-wrapper'>
					<Activities todos={this.state.todos} deleteEv={this.deleteActivity} />
				</div>
				<Add addEv={this.addActivity} />
			</div>
		);
	}
}

export default TodoList;
