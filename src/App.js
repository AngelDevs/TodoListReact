import React from 'react';
import './scss/index.scss';
import TodoList from './components/TodoList/TodoList';

function App() {
	return (
		<div className='App'>
			<main className='main'>
				<TodoList />
			</main>
		</div>
	);
}

export default App;
