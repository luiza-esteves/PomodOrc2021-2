import * as C from './styles';
import { Item } from '../../types/Item';
import { TrashIcon } from '../TrashIcon';
import { Link } from "react-router-dom";

type Props = {
    item: Item,
    onChange : (id: number, done: boolean) => void
}

export const ListItem = ({ item, onChange }: Props) => {

    
    return (
        <C.Container done={item.done}>
            <input 
                type="checkbox" 
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <button>
            <Link className="Color" to="/tasklist">{item.name}</Link>  
            </button>
            <TrashIcon></TrashIcon>
        </C.Container>

    );
}