import {Container} from './style';
import './Style.css';
import {ReactComponent as Casa} from '../../assets/home.svg'
import { Link } from "react-router-dom";

export const HomeIcon = () => {
    return (
        <Container>
            <button className="Casa">
            <Link to="/"><Casa className="home-icon"/></Link>
            </button>
        </Container>
    );
}