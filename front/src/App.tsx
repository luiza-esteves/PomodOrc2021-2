import React, { useState } from 'react';
import * as C from "./AppStyle";
import { Item } from './types/Item';
import { ListItem } from './Components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id : 1, name : 'Tarefas de Casa', done : false}
  ]);

  return (
    <div>
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          { /* Área de adicionar nova  Lista de tarefas */}

          {list.map((item, index) =>(
            <ListItem key={index} item={item}/>
          ))}

        </C.Area>
      </C.Container>
    </div>
  );
}

export default App;
