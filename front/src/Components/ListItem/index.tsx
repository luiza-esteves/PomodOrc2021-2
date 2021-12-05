import * as C from './styles';
import { Item } from '../../types/Item';
import { TrashIcon } from '../TrashIcon';
import { Link } from "react-router-dom";

type Props = {
    item: ITaskList
}

export const ListItem = ({ item }: Props) => {

    const route = "/tasklist/" + item._id

    
    return (
        <C.Container done={false}>
            
            <button>
            <Link className="Color" to={route}>{item.title}</Link>  
            </button>
            <TrashIcon></TrashIcon>
        </C.Container>

    );
}