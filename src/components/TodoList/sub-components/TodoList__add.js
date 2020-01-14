import React, { Component } from 'react';
import AddBtn from './Add__button';
import AddInput from './Add__input';

class TodoList__add extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newTodo: ''
		};
		this.change = this.change.bind(this);
	}

	change({ target }) {
		this.setState({
			[target.name]: target.value
		});
	}

	render() {
		return (
			<div className='form__field-wrapper'>
				<label htmlFor='add' className='form__label'>
					Añadir
				</label>
				<AddInput changeEv={this.change} newTodo={this.state.newTodo} />
				<AddBtn addEv={this.props.addEv} newTodo={this.state.newTodo} />
			</div>
		);
	}
}

export default TodoList__add;
