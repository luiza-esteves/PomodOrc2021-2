import { useState } from 'react';
import {Item} from './types/Item';
import {ListItem} from './components/listItem';
import './styles.css';

const App = () =>{
  const [list,setList] = useState<Item[]>([
    {id:1, name: 'estudar', done: false}
  ]);

  return (
    <div className="container">
      <div className="margemEsquerda"></div>
      
      <div>
      <header className="title"> Lista de Tarefas </header>
      <div className ="listaTarefas">
        {list.map((item, index)=>(
            <ListItem key={index} item={item}/>
          ))}
      </div>

      </div>

      <div className="margemDireita"></div>
    
    </div>
  );
}

export default App;