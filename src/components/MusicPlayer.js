import React from 'react';

const MusicPlayer = ({ onShowPlaylist, playerContent }) => {
    return (
        <section id="music">
            <h2>🎧 Commute Playlist</h2>
            <p>Choose your mood:</p>
            <div className="btn-group">
                <button onClick={() => onShowPlaylist('spotify')}>🎶 Spotify Playlist</button>
            </div>
            {playerContent && (
                <div 
                    id="player" 
                    dangerouslySetInnerHTML={{ __html: playerContent }}
                />
            )}
        </section>
    );
};

export default MusicPlayer;
