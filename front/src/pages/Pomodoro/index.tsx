import Timerbuttons from "../../Components/Timerbuttons"
import { Container, Area, Header, Left, Right } from './style';

const Pomodoro = () => {
    return (
       <div>
           <Container>
               <Left></Left>
                <Area>
                    <Header>Pomodoro Independente</Header>
                        <div>
                            <Timerbuttons />
                        </div>
                </Area>
                <Right></Right>
            </Container>
        </div>
            
        
    )
}

export default Pomodoro