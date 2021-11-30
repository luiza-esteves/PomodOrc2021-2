import { useState } from 'react';
import {Item} from '../../types/Item';
import {ListItem} from '../../components/listItem';
import { AddArea } from '../../components/AddArea';
import './styles.css';
import {ReactComponent as CLose} from '../../assets/close.svg';
import {ReactComponent as CLock} from '../../assets/clock.svg';
import {ReactComponent as Check} from '../../assets/check.svg';
import {ReactComponent as Edit} from '../../assets/edit.svg'

import { ReactComponent as Back} from '../../assets/back.svg';

type Props = {
  onEnter: (taskName: string) => void
}

const Tasks = () =>{
  const [list,setList] = useState<Item[]>([
      
  ]);

    const handleAddTask = (taskName: string) => {
      let newList = [...list];
      newList.push({
        id: list.length + 1,
        name: taskName,
        done: false
      });
      setList(newList);
    }

    const handleEditTask = (taskName: string, id: number) => {
      list[id].name = taskName;

    }
  
    const handleTaskChange = (id: number, done: boolean) => {
      let newList = [...list];
      for(let i in newList) {
        if(newList[i].id === id) {
          newList[i].done = done;
        }
      }
      setList(newList);
    }

  
    return (
      <div className="container">
        <div className="margemEsquerda"></div>
        
        <div>

          <button className="back">
              <Back />
          </button>

          <header className="title"> Tarefas da Lista</header>

          <div> <AddArea onEnter={handleAddTask} /></div>

          <div className ="listaTarefas">
              {list.map((item, index)=>(
                  <div className ="tarefa">

                    <button className="buttonTask"><Edit
                    
                  //  onClick ={() => {
                   // <AddArea onEnter={handleEditTask('',list.length)}}
                 // }
                    className='edit-icon'
                    /></button>

                    <div> <ListItem key={index} item={item}/></div>

                      <button className="buttonTask" > <CLose /> </button>
                      <button className="buttonTask"> <CLock /> </button>
                    
                  </div>
                ))}
            
          </div>
  
        </div>
  
        <div className="margemDireita"></div>
      </div>
    );
  }
  
  export default Tasks;