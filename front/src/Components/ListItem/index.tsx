import * as C from './styles';
import { Item } from '../../types/Item';
import { TrashIcon } from '../TrashIcon';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../../context';

type Props = {
    item: ITaskList
}

export const ListItem = ({ item }: Props) => {
    
    const route = "/tasklist/" + item._id

    const {deleteTaskList} = useContext(Context)
    
    return (
        <C.Container done={false}>
            
            <button>
            <Link className="Color" to={route}>{item.title}</Link>  
            </button>
            <div
            className="Trash" 
            onClick = {() => {deleteTaskList(item._id)}} >
                <TrashIcon/>
            </div>
            
        </C.Container>

    );
}