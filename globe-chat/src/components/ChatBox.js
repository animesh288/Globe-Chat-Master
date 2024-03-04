import { connect } from "react-redux";
import ReactEmoji from 'react-emoji';
import "../styleSheets/ChatBox.css";

const ChatBox = ({message:{user,text,time},name,colors}) => {
    
    let checkCurrentUser = false;

    const trimName = name.trim();

    if(user === trimName){
        checkCurrentUser = true;
    }

    if(user === 'admin'){
        return (
            <div className="messageAdmin">
             <div className='innerAdmin'>
             <p style={{color:colors.bodyTextColor}}>{text}</p>
             </div>
        </div>
        )
    }

    else if(checkCurrentUser){
        return (
            <div className="messageUser">
             <div className='innerUser'>
             <p style={{backgroundColor:colors.senderBox,color:colors.messageColor}}><span style={{fontWeight:'bold',marginBottom:'3px'}}>{user}</span> {time}<br/>{ReactEmoji.emojify(text)}</p>
             </div>
        </div>
        )
    }
    else{
    return (
        <div className="messageSender">
             <div className='innerSender'>
             <p style={{backgroundColor:colors.receiverBox,color:colors.messageColor}}><span style={{fontWeight:'bold',marginBottom:'3px'}}>{user}</span> {time}<br/>{ReactEmoji.emojify(text)}</p>
             </div>
        </div>
    )
    }
}
const mapStateToProps = (state)=>{
    return {
        colors : state.customize
    }
}

export default connect(mapStateToProps)(ChatBox);
