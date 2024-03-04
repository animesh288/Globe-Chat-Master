import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { enteredName } from '../actions';
import io from 'socket.io-client';

let socket;

const Join = ({enteredName}) => {
    const [name,setName] = useState('');
    const [users,setUsers] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    const ENDPOINT = 'https://global-chat001.herokuapp.com/';
    useEffect(()=>{
        socket =io(ENDPOINT);
        socket.emit('askUsers');
        return ()=>{
            socket.off();
        }
    },[]);
    useEffect(()=>{
        socket.on('allUsers',({users})=>{
            setUsers(users);
        });
    },[users]);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });
    const validation = (e)=>{
            if(!name){
                e.preventDefault();
                alert('Please enter a name to continue');
            }
            if(users.length!==0){
                users.forEach(user => {
                    if(name === user.name){
                        e.preventDefault();
                        alert('Name Already Taken');
                    }
                });
            }
        }
        return (
        <div className='bg-dark text-white align-items-center p-5' style={{position:'absolute',right:'0px',left:'0px',minHeight:`${height}px`}}>
            <header className="text-center py-3">
                <h1><img src="./Globe.png" alt="Globe" height="150px" width="150px"/>{width<=585 && <br/>}Welcome to Global Chat</h1>
            </header>
            <div className='container'>
                <form className="row text-sm-start text-center align-items-center justify-content-sm-start justify-content-center pt-5">
                <div className="mb-3 col-12">
                    <label htmlFor="inputName" className="form-label">Enter Your Name Here.</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your Name" className="form-control" id="inputName" aria-describedby="nameCondition"/>
                    <div id="nameCondition" className="form-text text-white">Name should be 20 characters or less.</div>
                </div>
                <Link onClick={(e)=>validation(e)} to={`/chat?name=${name}`}>
                    <button type="submit" className="btn btn-primary col-md-2 col-sm-3 col-6 mt-2" onClick={()=>enteredName(name)}>Submit</button>
                </Link>
                </form>
            </div>
        </div>
    )
}

export default connect(()=>{return {dummy:'1'}},{enteredName})(Join);