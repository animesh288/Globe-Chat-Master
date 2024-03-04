import Header from "./Header";
import MessageBox from "./MessageBox";
import MessageBody from "./MessageBody";
import Modal from "./Modal";
import { useEffect,useState,useRef } from "react";
import {Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import io from 'socket.io-client';


const Chat = ({name,colors}) => {
    const [message,setMessage] = useState('');
    const [typer,setTyper] = useState('');
    const [messages,setMessages] = useState([]);
    const [users,setUsers] = useState([]);
    let socket = useRef(null);
    const ENDPOINT = 'localhost:5000';

    useEffect(()=>{
        socket.current =io(ENDPOINT);
        socket.current.emit('join',{name});
        return ()=>{
            socket.current.disconnect();
            socket.current.off();
        }
    },[name,ENDPOINT]);

    useEffect(()=>{
        socket.current.on('message',(message)=>{
            if(message.user === 'typing'){
                setTyper(message.text);
            } else{
                setMessages([...messages,message]);
                if(message.user === 'admin'){
                    setUsers(message.users);
                }
            }
        });
        return ()=>{
            socket.current.off();
            setTyper('');
        }
    },[messages]);

    useEffect(()=>{
        if(message){
            socket.current.emit('typing');
        }
    },[message]);

    useEffect(()=>{
        const timeOutId = setTimeout(()=>setTyper(''),3000);
        return ()=>clearTimeout(timeOutId);
    },[typer]);

    const sendMessage = (event)=>{
        event.preventDefault();
        if(message){
            socket.current.emit('sendMessage',message,()=>setMessage(''))
        }
    }
    
    return (
        <div style={{backgroundColor:colors.bodyColor}}>
            {!name && <Redirect to="/"/>}
            <Modal />
            <Header users={users}/>
            <MessageBody name={name} messages={messages}/>
            <MessageBox message={message} setMessage={setMessage} sendMessage={sendMessage} typer={typer}/>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return{
        name : state.enteredName,
        colors : state.customize
    }
}


export default connect(mapStateToProps)(Chat)
