import '../styles/CardInfo.css'

export function CardInfo(props) {
    return (
        <div className="card-info">
            <h2>{props.name}</h2>
            <span>{props.address} - <b>{props.country}</b></span>
            <div className='card-info-desc'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, maiores aspernatur id quisquam rerum dolorem quas impedit unde sapiente.</p>
                <img
                    className='card-info-desc-img'
                    width={100}
                    src="https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/01/Perfil-Profesional-_63-819x1024.jpg?lossy=1&strip=1&webp=1"
                    alt="" />
            </div>
        </div>
    )
}