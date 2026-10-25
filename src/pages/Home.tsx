import { useNavigate } from 'react-router';
import './Home.css'
import UserItem from '../components/UserItem.tsx'
import Footer from '../components/Footer.tsx'
import { useLocalStorage } from '../components/useLocalStorage.tsx';

function Home() {  
    // inicializa navigate hook
    const navigate = useNavigate();



    // Armazenamento persistente dos campos do Form 
    const [title, setTitle] = useLocalStorage("title", "");
    const [msgDisplay, setMsgDisplay] = useLocalStorage("msgDisplay", "A Reunião iniciará em:");
    const [msgTimeout, setMsgTimeout] = useLocalStorage("msgTimeout", "A Reunião está iniciando.");
    const [targetTime, setTargetTime] = useLocalStorage("targetTime", "");

    /*
    const [savedTimerList, setSavedTimerList] = useLocalStorage("savedTimerList", [{
        id: 1,
        title: title, 
        msg_display: msgDisplay,
        msg_timeout: msgTimeout,
        target_time: targetTime
    }])
    */

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        // impede o browser de recarregar a pagina
        event.preventDefault();

        /*
        setSavedTimerList((savedTimerList: any) => (
            {
                ...savedTimerList,
                id: savedTimerList.id + 1,
                title: title,
                msg_display: msgDisplay,
                msg_timeout: msgTimeout,
                target_time: targetTime
            }
        ))
        */

        // Carrega pagina do timer
        navigate('/Timer');
    }
    
    return (
        <>
        <div className='content'>
            {
            /* Side bar with saved list
            <aside>
                <ul role='list' className='user-time-list' aria-labelledby='list-heading'>
                    <UserItem title="Meio de Semana" id='uItem_0' msg_display='A Reunião iniciará em:' msg_timeout='A Reunião está iniciando.' timer='19:30'/>
                    <UserItem title="Fim de Semana" id='uItem_1' msg_display='A Reunião iniciará em:' msg_timeout='A Reunião está iniciando.' timer='17:00'/>
                    {
                     //   savedTimerList.map((field: any) => {
                     //       return(
                    //          <UserItem key={field.id}/>
                      //      )
                      //      
                      //  })
                    }
                
                </ul>
            </aside>
            */
            }

            <main>
                <form className="form" onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="title">Digite um Titulo:</label>
                            <input type="text" name='title' defaultValue={title} onChange={(e) => setTitle(e.target.value)} placeholder='(Opcional)'/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="msg_display">Digite a mensagem de exibição:</label>
                            <input type="text" name="msg_display" defaultValue={msgDisplay} onChange={(e) => setMsgDisplay(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="msg_timeout">Digite a mensagem de inicio:</label>
                            <input type="text" name="msg_timeout" defaultValue={msgTimeout} onChange={(e) => setMsgTimeout(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="target-time">Digite a hora de início da reunião:</label>
                            <input type="time" name="target_time" defaultValue={targetTime} onChange={(e) => setTargetTime(e.target.value)} required />
                        </div>

                        <div className="btn-group">
                            <button type="submit" className="btn-submit">Iniciar</button>
                        </div>
                </form>
            </main>
        </div>
        <Footer />
        </>
    )
}

export default Home;