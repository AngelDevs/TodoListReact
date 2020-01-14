import React, { Component, Fragment } from 'react';

class TodoList__AddBtn extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.idCount = this.idCount.bind(this);
		this.id = this.idCount();
	}

	handleClick() {
		let newId = this.id();
		this.props.addEv(newId, this.props.newTodo, false);
	}

	idCount() {
		let id = 1;
		return () => id++;
	}

	render() {
		return (
			<Fragment>
				<button
					className='form__button'
					onClick={(e) => {
						e.preventDefault();
						this.handleClick();
					}}
				>
					Añadir
				</button>
			</Fragment>
		);
	}
}

export default TodoList__AddBtn;
