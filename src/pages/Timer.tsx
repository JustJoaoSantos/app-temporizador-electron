
import { useEffect, useState } from 'react';
import { getLocalStorage } from '../components/useLocalStorage';
import './Timer.css'

function Timer() {
    const [msg, setMsg] = useState(getLocalStorage("msgDisplay", ""));
    const [timer, setTimer] = useState('00:00');

    // converte data inserida por usuario em um valor calculavel
    let [hours, minutes] = getLocalStorage("targetTime", "12:00").split(':');
    let target_date = new Date()
    target_date.setHours(hours);
    target_date.setMinutes(minutes);
    target_date.setSeconds(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // descobre a distancia entre agora e data alvo
            let distance = target_date.getTime() - Date.now();

            // converção de milisegundos (retorno do getTime()) em horas, minutos e segundos.
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // se o tempo já atingiu zero, a mensagem será alterada para msg de timeout e o timer para zero.
            if (distance < 0) {
                setMsg(getLocalStorage("msgTimeout", ""));
                setTimer('00:00');

            } else {
                // Se ele possui horas, o timer mostrá hora, minuto e segundo
                if (hours > 0) {
                    setTimer(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
                    
                // Timer mostrará apenas minutos e segundos
                } else {
                    setTimer(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    /*
    function countDown() {
        // adquire tempo atual
        //let now = new Date().getTime();
        
        // descobre a distancia entre agora e data alvo
        let distance = target_date.getTime() - Date.now();

        // converção de milisegundos (retorno do getTime()) em horas, minutos e segundos.
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);



        // Saida
        let out_timer = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

        if (hours >= 1) {
            out_timer = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        }

        if (distance < 0) {
            useEffect(() => {
                setMsg(dataForm.get('msg-timeout'));
                setTimer('00:00');
            },[])
            
            //out_timer = `00:00`;
        }

        //return out_timer;
    }
    */
    return (
        <main>
            <div className="display-container">
                <div className='msg-container'>
                    <h1>{msg}</h1>
                </div>

                <div className='timer-container'>
                    <div className='timer-spinner'>
                        <p className='msg-clock'>{timer}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Timer;