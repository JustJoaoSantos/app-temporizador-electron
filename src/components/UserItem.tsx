import './UserItem.css'

function UserItem(props: any) {
    return (
        <li>
            <div className='user-title'>
                <label className='user-title' htmlFor={props.id}>{props.title}</label>
            </div>

            <div>
                <p className='user-time'>Horario: {props.timer}</p>
                <p className='user-msg'>Exibição: {props.msg_display}</p>
                <p className='user-msg'>Inicio: {props.msg_timeout}</p>
            </div>

            <div className='user-list-btn'>
                <div>
                    <button className='user-list-btn'>Usar</button>
                </div>

                <div>
                    <button className='user-list-btn'>Excluir</button>
                </div>
            </div>
        </li>
    )
}

export default UserItem;