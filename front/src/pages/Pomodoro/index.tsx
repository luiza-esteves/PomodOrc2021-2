import Timerbuttons from "../../Components/Timerbuttons"
import './style.css'

const Pomodoro = () => {
    return (
        <div className="all">
            <div className="MargemE"></div>
            <div className="MargemD"></div>
            <section className="Pomodorocontainer">
                <Timerbuttons />
            </section>
        </div>
        
    )
}

export default Pomodoro