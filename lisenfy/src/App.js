// Импортируем стили для компонента App
import './App.css';
import Header from './components/Header'; 
import Track from './components/Track';
// Создания главного компонента
function App(){
  // Компонент просто возвращает нам разметку (JSX)
  return(
    <div className='App'>
      <Header />
      <Track 
        title ="42"
        artist = "Serega Pirat"
        album = "Goyda"
        duration = "42:24"
      />
      <Track 
        title ="43"
        artist = "Sirega Pirat"
        album = "Goydu"
        duration = "43:24"
      />
      <h1>Мое первое приложение Lisenfy</h1>
    </div>
  );
}

// Экспортируем компонент App, чтобы можно было его использовать(импортить) в других файлах
export default App;