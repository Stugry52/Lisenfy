import { useState } from "react";

import './AddTrackFrom.css';

function AddTrackFrom({ onAddTrack}){
    // Создадим состояние для каждого поля формы
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [duration, setDuration] = useState('');

    // Обработчик отправки формы
    function handleSubmit(e) {
        e.preventDefault(); //Предотвращение загрузки страницы

        // создаем новый трек
        const newTrack = {
            id: Date.now(), // Простой способ получить случайный айди
            title,
            artist,
            album,
            duration
        };

        onAddTrack(newTrack);

        //Очищаем поля формы
        setTitle('');
        setArtist('');
        setAlbum('');
        setDuration('');
    }

    return(
        <form className="add-track-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Название трека"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Название трека"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Название трека"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Название трека"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
            />
            <button type="submit">Добавить трек</button>
        </form>
    );
}

export default AddTrackFrom;