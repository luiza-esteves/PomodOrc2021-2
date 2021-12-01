import { useState } from 'react';
import './App.css';
import { Container, Area, Header, Left, Right } from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import { HomeIcon } from './components/HomeIcon';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Ir ao mercado', done: false},
    { id: 2, name: 'Andar', done: false},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 2,
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
  ;}

  const handleDeleteTask = (taskName: string) => {
    console.log(taskName)
  }

  return(
    <div>
      <Container>
        <Left></Left>
          <Area>
            <Header>
              Lista de Tarefas
              <HomeIcon></HomeIcon>
            </Header>

            <AddArea onEnter={handleAddTask}/>

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

export default App;