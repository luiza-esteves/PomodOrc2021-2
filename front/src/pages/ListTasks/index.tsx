import { useState } from 'react';
import { Container, Area, Header, Left, Right } from './style';
import { Item } from '../../types/Item';
import { ListItem } from '../../Components/ListItem';
import { AddArea } from '../../Components/AddArea';
import { HomeIcon } from '../../Components/HomeIcon';
import '../../App.css';

const ListTasks = () => {
  const [list, setList] = useState<Item[]>([
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
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
            <Header>
              <HomeIcon></HomeIcon>
              Listas de Tarefas
              </Header>

            <AddArea onEnter={handleAddTask} />

            {list.map((item, index)=>(
              <ListItem 
              key={index} 
              item={item}
              onChange={handleTaskChange} 
              />
            ))}
          </Area>
        <Right></Right>
      </Container>
    </div>
  );
}

export default ListTasks;