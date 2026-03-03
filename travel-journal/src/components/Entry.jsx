export default function Entry (props){
    return(
        <>
            <main>
                <div className="entry">
                    <img src={props.img.src} alt={props.img.src} className="japan-img"/>
                    <div className="japan-info">
                        <div className="location-info">
                            <p className="location">📍 {props.country}</p>
                            <a href={props.maps}>View on Google Maps</a>
                        </div>
                        <h1>{props.attractionSite}</h1>
                        <p className="dates"><b>{props.dates}</b></p>
                        <p className="location-info">{props.description}</p>
                    </div>
                </div>
                <hr />
            </main>
        </>
    )
}