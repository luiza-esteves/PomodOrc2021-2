import {Container} from './style';
import { IoHomeSharp } from 'react-icons/io5'

export const HomeIcon = () => {
    return (
        <Container>
            <button className="HomeIcon">
            <IoHomeSharp size={48} />
            </button>
        </Container>
    );
}