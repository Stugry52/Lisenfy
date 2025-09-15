// Импортируем стили для компонента App
import { useState } from 'react';
import './App.css';
import Header from './components/Header'; 
import Track from './components/Track';
// Создания главного компонента
function App(){
  const [tracks, setTracks] = useState([
    {
      id: 1,
      title: "Bogdan bogom dan",
      artist: "mc Bogdan",
      album: "Bog Est",
      duration: "5:23"
    },
    {
      id: 2,
      title: "Bury the light",
      artist: "Devil may cry",
      album: "V",
      duration: "6:02"
    },
    {
      id: 3,
      title: "Burnice Burn",
      artist: "Burnice",
      album: "Go Go GO",
      duration: "2:20"
    }
  ]);
  // Компонент просто возвращает нам разметку (JSX)
  return(
    <div className='App'>
      <Header />
      {tracks.map(track => (
        <Track 
          key={track.id}
          // key помогает Reacty отслеживать елементы списка
          title={track.title}
          artist={track.artist}
          album={track.album}
          duration={track.duration}
        />
      ))}
    </div>
  );
}

// Экспортируем компонент App, чтобы можно было его использовать(импортить) в других файлах
export default App;