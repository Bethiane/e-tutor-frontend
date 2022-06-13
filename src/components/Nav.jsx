import Button from "../components/Button"
export default function Nav(){
    return (
        <nav>
        <div className="logo">
            <h4>e-Tutor</h4> 
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Tutorials</li>
                <li><button>Login</button></li>
            </ul>
        </div>
    </nav>
    )
}