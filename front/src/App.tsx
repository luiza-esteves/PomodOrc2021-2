import { useState } from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import {ListItem} from './components/listItem';
import { AddArea } from './components/AddArea';

const App = () =>{
  const [list,setList] = useState<Item[]>([
    {id:1, name: 'estudar', done: false}
  ]);

  return (
    <C.Container>
      <C.Area> 
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea />

        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}
        
      </C.Area>

    </C.Container>
  );
}

export default App;