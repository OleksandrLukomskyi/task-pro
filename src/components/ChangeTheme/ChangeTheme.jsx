import { useContext } from "react"
import { ThemeContext } from "../../providers/ThemeProvider"


export default function ChangeTheme () {
    const [theme, setTheme] = useContext(ThemeContext);

    const handleChangeTheme = (e) => {
        setTheme(e)
        // зберігати тему користувача в БД
    };

    return (
        <select defaultValue={theme} onChange={e => handleChangeTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="violet">Violet</option>
      </select>
    )
}