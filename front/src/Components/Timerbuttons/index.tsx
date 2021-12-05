import './style.css'
import {ReactComponent as Casa} from '../../assets/home.svg'
import {ReactComponent as Editar} from '../../assets/editar.svg'
import {ReactComponent as Play} from '../../assets/play.svg'
import { useState, useEffect, BaseSyntheticEvent } from "react"
import {ReactComponent as Reiniciar} from '../../assets/reiniciar.svg'
import { Link } from "react-router-dom";


const Timerbuttons = () => {
    const [min, setMin] = useState(25)
    const [sec, setSec] = useState(0)
    const [start, setStart] = useState(false)
    const [pause, setPause] = useState(false)
    const [stop, setStop] = useState(false)
    const [barProgress, setbarProgress] = useState(100)
    const [fulltime, setFulltime] = useState(min*60+sec)
    const [edit, setEdit] = useState(false)

    const minValidation = `${stop ? "25" : min < 10 ? `0${min}` : min}`

    const handletime = () => {
        setEdit(false)
        if(pause) {
            setPause(false);
            return
        }
        setStart(true)
        if(sec === 0) {
            if(min === 0) {
                return
            } else {
                setMin(min-1)
                setSec(59)
            }
        } else {
            setTimeout(() => {
                setSec(sec-1);
            }, 1000)
        }
    }

    const handleMin = (e: BaseSyntheticEvent) => {
        const value = e.target.value
        if (!value) {
            setMin(0)
            return
        }
        if(value > 99) {
            setMin(99)
            return
        }
        setMin(parseInt(value))
    }

    const handleSec = (e: BaseSyntheticEvent) => {
        const value = e.target.value
        if(!value) {
            setSec(0)
            return
        }
        if(value > 59) {
            return
        }
        setSec(parseInt(value)) 
    }

    const handleBarProgress = () => {
        const time = min*60 + sec
        const progress = (time*100)/fulltime
        setbarProgress(progress)
    }

    const pauseTime = () => {
        setPause(false)
        setStart(false)
    }

    const reset = () => {
        pauseTime()
        setStop(true)
        setTimeout(() => {
            setMin(25)
            setSec(0)
            setFulltime(60)
            setbarProgress(100)
            setStop(false)
        }, 1000)
    }
    useEffect(() => {
        if(start) {
            handletime()
            handleBarProgress()
        }    
    }, [sec])

    return (
        <>
            <section>
                <div style={{height: `${barProgress}%`}} />
                {
                edit ? (
                    <div>
                        <input type="text" value={min} onChange={e => handleMin(e)} placeholder={minValidation} />
                        <input type="text" value={sec} onChange={e=> handleSec(e)} placeholder={`${stop ? "01" : sec < 10 ? `0${sec}` : sec}`}/>
                    </div>
                ) : (
                    <div className="Timer" >
                    {`${minValidation} : ${stop ? "00" : sec < 10 ? `0${sec}` : sec}`}
                    </div>
                )
            }
            
            <section className="Timerbuttonscontainer">
            {/* <div className="Backprogressbar">
                <div className="Progress" style={{ width: `${stop ? 100 : barProgress}%`}}/>
            </div> */}
                <button className="Timerbuttons">
                    <Link to="/"><Casa width="70%" height="70%"/></Link>
                </button>

                <button className="Timerbuttons" onClick={start ? pauseTime : handletime}> 
                    <Play width="70%" height="70%"/>
                </button>

                <button className="Timerbuttons">
                    <Editar width="70%" height="70%"/>
                </button>

                <button className="Timerbuttons" onClick={reset}>
                    <Reiniciar width="70%" height="70%"/>
                </button>
            </section>
            </section>
        </>
    )
}  


export default Timerbuttons