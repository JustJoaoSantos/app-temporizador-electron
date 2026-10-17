import { useNavigate } from 'react-router';
import './Home.css'

function Home() {  
    // inicializa navigate hook
    const navigate = useNavigate();

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        // impede o browser de recarregar a pagina
        event.preventDefault();

        // carrega os dados do form
        const formData = new FormData(event.target);

        navigate('/Timer', {state: formData})
    }

    return (
        <div className='content'>
            <aside>
                <p> side bar</p>
            </aside>
            <main>
                <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="msg-display">Digite a mensagem de exibição:</label>
                            <input type="text" name="msg-display" defaultValue="A Reunião iniciará em:" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="msg-timeout">Digite a mensagem de inicio:</label>
                            <input type="text" name="msg-timeout" defaultValue="A Reunião está iniciando." />
                        </div>

                        <div className="form-group">
                            <label htmlFor="target-time">Digite a hora de início da reunião:</label>
                            <input type="time" name="target-time" defaultValue="20:45" required />
                        </div>

                        <div className="btn-group">
                            <button type="submit" className="btn-submit">Iniciar</button>
                        </div>
                </form>
            </main>
        </div>
    )
}

export default Home;