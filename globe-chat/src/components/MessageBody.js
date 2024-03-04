import ChatBox from "./ChatBox";
import '../styleSheets/Message.css';
import React, { useEffect, useRef } from "react";


const MessageBody = ({name,messages}) => {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages]);
    
    return (
        <div  className="messageBody">
            {messages.map((message,i)=><div key={i}><ChatBox message={message} name={name}/></div>)}
            <div ref={messagesEndRef} />
        </div>
    )
}


export default MessageBody;
