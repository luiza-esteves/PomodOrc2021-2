import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
    item: Item
}
export const ListItem = ({ item }: Props) => {
    return (
        <C.Container>
            <input 
            type='text'
            placeholder='Adicione uma Lista de Tarefas'
            name='text'
             />
             <button>+</button>
       
        </C.Container>
    );
}