import { Link } from "react-router-dom"
import Btn from "../../components/Btn/Btn.jsx"
import img from "../../img/Image 1.png"
import css from "./WelcomePage.module.css"

export default function WelcomePage() {
    return (
        <div className={css.wraper}>
            <div>
                <img className={css.img} src={img} alt="t"/>
                <h2>Task Pro</h2>
            </div>
            <p>Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!</p>
            <div>
                <Btn type='button'><Link to="auth/register">Registration</Link></Btn>
                <Btn type='button'><Link to="auth/login">Log in</Link></Btn>
            </div>
        </div>
    )
    
}