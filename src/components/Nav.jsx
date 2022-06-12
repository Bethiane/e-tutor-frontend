import Button from "../components/Button"
export default function Nav(){
    return (
        <nav>
        <div>
            e-Tutor
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Tutorials</li>
                <li><Button text="Login"/></li>
            </ul>
        </div>
    </nav>
    )
}