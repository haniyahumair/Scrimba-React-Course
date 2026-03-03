import reactLogo from "../assets/react.svg"

export default function NavBar() {
    return(
        <>
            <header>
                <nav>
                    <img src={reactLogo} alt="React Logo" className="react-logo" />
                    <span className="nav-text">ReactFacts</span>
                </nav>
            </header>
        </>
    )
}