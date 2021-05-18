import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <header>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/timer">Timer</Link></li>
                    <li><Link to="/quiz">Quiz</Link></li>
                    <li><Link to="/notes">Notes</Link></li>
                    <li><Link to="/todo">ToDo</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/github">GitHub</Link></li>
                    <li><Link to="/drawing">Drawing</Link></li>
                    <li><Link to="/passgen">Password Gen</Link></li>
                    <li><Link to="/weather">Weather</Link></li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;
