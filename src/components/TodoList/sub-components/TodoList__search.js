import React, { Component } from 'react';

class TodoList__search extends Component {
	render() {
		return (
			<div className='TodoList__search'>
				<div className='form__field-wrapper'>
					<label htmlFor='' className='form__label'>
						Buscar
					</label>
					<input type='text' className='form__input' />
				</div>
			</div>
		);
	}
}

export default TodoList__search;
