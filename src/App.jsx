import './App.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

// PascalCase
// HTML in JS - JSX
// class = className
// for = htmlFor
// all attributes in camelCase
// aria-label -> ariaLabel, all-autocomplete -> allAutocomplete

function App() {
	return (
		<>
			<Header />

			<Main />

			<footer>footer...</footer>
		</>
	);
}
export default App;
