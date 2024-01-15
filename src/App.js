import './App.css';
import {Navbar} from './component/Navbar.js';
import {Greeting} from './component/Greeting.js';

function App() {
    SetDarkMode(true);
    return (
        <div className="App">
            <Navbar/>
            <Greeting/>
        </div>
    );
}

function SetDarkMode(darkMode) {
    darkMode
        ? document.documentElement.setAttribute('data-theme', 'dark')
        : document.documentElement.setAttribute('data-theme', 'light')
}

export default App;