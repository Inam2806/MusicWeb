// App.jsx
import React from 'react';
import './styles/artist.scss'
const Adele = ({audioSources,isPlaying,setIsPlaying,handlePlaybackToggle,currentIndex,isSidebarOpen}) => {
 
 let songNumber = 0; 
 
    return (
   
        <div className={`home1 ${isSidebarOpen ? 'home-sidebar-open' : ''} `}> 
            <div class="container">
        <div class="songList">

           
 
                <ul>
            <h1>Adele Songs</h1>
    {audioSources.map((song, index) => (
      song.artist === 'Adele' && (
        <div className="item" key={`${song.id}-${index}`}>
          <div className="info">
            <h2>{++songNumber}</h2>
            <img src={song.cover} alt={song.title} />
            <div className="details">
              <h4>{song.title}</h4>
              <h4>{song.artist}</h4>
            </div>
          </div>
          <div className="actions1">
            <div className="icon1">
            <div>
                    {currentIndex === index && isPlaying ? (
                      <i className="bx bx-pause" id="masterPlay" onClick={() => setIsPlaying(!isPlaying)}></i>
                    ) : (
                      <i className="bx bx-play" id="masterPlay" onClick={() => handlePlaybackToggle(index)}></i>
                    )}
                  </div>
                     
            </div>
          </div>
        </div>
      )
    ))}
  </ul>
</div>
 </div> </div>

    );
};

export default Adele;
