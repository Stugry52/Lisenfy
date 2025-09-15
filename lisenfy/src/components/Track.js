function Track(props){
    //Теперь функция принимает аргумент props
    // То есть данные для компонента приходят извнеб а не задаются внутри

    return(
        <div className="track">
            <div className="track-info">
                <h3 className="track-title">{props.title}</h3>
                <p className="track-artist">{props.artist} | {props.album}</p>
            </div>
            <div className="track-duration">
                {props.duration}
            </div>
        </div>
    );
}

export default Track;