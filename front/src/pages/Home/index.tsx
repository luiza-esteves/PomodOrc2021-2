import { Link } from "react-router-dom";
import { Container, ButContainer, Area, Header, Left, Right } from './style';
const Home = () => {
    return (
        <div>
            <Container>
                <Left></Left>
                    <Area>
                        <Header>
                        Pomodorc
                        </Header>
                            <ButContainer>
                                osdosaodad
                                <button className="initButtons">
                                    <Link to="/pomodoro"> Pomodoro Independente</Link>
                                </button>
                            <button className="initButtons">
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