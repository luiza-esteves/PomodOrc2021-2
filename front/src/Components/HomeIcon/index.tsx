import {Container} from './style';
import {ReactComponent as Casa} from '../../assets/home.svg'
import { Link } from "react-router-dom";

export const HomeIcon = () => {
    return (
        <Container>
            <button className="Casa">
            <Link to="/"><Casa width="70%" height="70%"/></Link>
            </button>
        </Container>
    );
}