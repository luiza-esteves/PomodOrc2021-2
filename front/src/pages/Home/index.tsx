import { Link } from "react-router-dom";
import { Container, ButContainer, Area, Header, Left, Right } from './style';
import "./Font.css"

const Home = () => {
    return (
        <div>
            <Container>
                <Left></Left>
                    <Area>
                        <Header className="FontHeader">
                        Pomodorc
                        </Header>
                            <ButContainer>
                                <button className="initButton1">
                                    <Link to="/pomodoro"> Pomodoro Independente</Link>
                                </button>
                            <button className="initButton2">
                                <Link to="/ListTasks"> Pomodoro por Lista de Tarefas</Link>
                            </button>
                            </ButContainer>
                    </Area>
                <Right></Right>
            </Container>
        </div>   
    )
}

export default Home