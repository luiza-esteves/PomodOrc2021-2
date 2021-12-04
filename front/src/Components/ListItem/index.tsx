import * as C from './styles';
import { Item } from '../../types/Item';
import { TrashIcon } from '../TrashIcon';
import { Link } from "react-router-dom";

type Props = {
    item: ITaskList
}

export const ListItem = ({ item }: Props) => {

    
    return (
        <C.Container done={false}>
            
            <button>
            <Link className="Color" to="/tasklist">{item.title}</Link>  
            </button>
            <TrashIcon></TrashIcon>
        </C.Container>

    );
}