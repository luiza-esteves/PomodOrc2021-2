import React ,{ useState } from 'react';
import * as C from './style';
import { Item } from '../../types/Item';
import {TrashIcon} from '../TrashIcon';

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}

export const ListItem = ({ item, onChange }: Props) => {
    return (
        <C.Container done={item.done}>
            <input
                type="checkbox"
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
            <TrashIcon></TrashIcon>         
        </C.Container>
    );
}