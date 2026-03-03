import chefIcon from "../assets/Chef Claude Icon.png"

export default function Header(){
    return(
       <header>
        <img src={chefIcon} alt="Chef Icon" />
        <h2>Chef Claude</h2>
       </header>
    )
}