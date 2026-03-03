import worldImage from "../assets/world.png"

export default function Header (){
    return (
        <header>
        <nav>
            <img src={worldImage} alt="World Icon" className="world-logo" />
            <span>my travel journal.</span>
        </nav>
    </header>
    )
}