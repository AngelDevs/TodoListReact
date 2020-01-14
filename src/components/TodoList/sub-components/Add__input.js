import React, { Component, Fragment } from 'react';

class Add__input extends Component {
	render() {
		return (
			<Fragment>
				<input
					name='newTodo'
					type='text'
					id='add'
					className='form__input'
					value={this.props.newTodo}
					onChange={this.props.changeEv}
				/>
			</Fragment>
		);
	}
}

export default Add__input;
