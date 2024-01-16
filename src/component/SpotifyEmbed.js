import React from "react";
import Iframe from 'react-iframe';

export class SpotifyEmbed extends React.Component {
    render() {
        return (
            <Iframe url="https://open.spotify.com/embed/playlist/2gVDoKFRSm0B44TJ4rk1Im?utm_source=generator"
                    width="100%"
                    height="352px"
                    id="spotify-embed"
                    className="spotify-embed"
                    display="initial"
                    position="relative"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    frameBorder="0"
                    loading="lazy"
                    styles={{borderRadius: '12px'}}
            />
        );
    }
}