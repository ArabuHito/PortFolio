import './App.css';
import {Navbar} from './component/Navbar.js';
import {Greeting} from './component/Greeting.js';
import {SpotifyEmbed} from "./component/SpotifyEmbed";

function App() {
    SetDarkMode(true);
    return (
        <div className="App">
            <Navbar/>
            <Greeting/>
            <SpotifyEmbed
                content={"<iframe style=\"border-radius:12px\"" +
                    " src=\"https://open.spotify.com/embed/playlist/2gVDoKFRSm0B44TJ4rk1Im?utm_source=generator\"" +
                    " width=\"100%\" height=\"352\" allowfullscreen=\"\"" +
                    " allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"" +
                    " loading=\"lazy\"></iframe>"}
                name={"Spotify"}
            />
        </div>
    );
}

function SetDarkMode(darkMode) {
    darkMode
        ? document.documentElement.setAttribute('data-theme', 'dark')
        : document.documentElement.setAttribute('data-theme', 'light')
}

export default App;