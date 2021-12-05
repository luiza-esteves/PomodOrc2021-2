import { useState, useEffect, useContext } from 'react';
import { Container, Area, Header, Left, Right } from './style';
import { Item } from '../../types/Item';
import { ListItem } from '../../Components/ListItem';
import { AddArea } from '../../Components/AddArea';
import { HomeIcon } from '../../Components/HomeIcon';
import '../../App.css';
import { Context } from '../../context'

const ListTasks = () => {
  const [list, setList] = useState<Item[]>([
  ]);
  const {taskLists, refreshTaskLists, createTaskList, deleteTaskList} = useContext(Context);

  useEffect(() => {
    refreshTaskLists();
    
  },[]);

  const handleAddTask = (title: string) => {
    var aux = title
    if (aux.trim() !== '' ) {
      createTaskList(title)
    }
    
  };

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return(
    <div>
      <Container>
        <Left></Left>
          <Area>
          <HomeIcon></HomeIcon>
            <Header>
            Listas de Tarefas
              </Header>

            <AddArea onEnter={handleAddTask} />

            {taskLists.map((item, index)=>(
              <ListItem 
              key={index} 
              item={item}
              />
            ))}
          </Area>
        <Right></Right>
      </Container>
    </div>
  );
}

export default ListTasks;