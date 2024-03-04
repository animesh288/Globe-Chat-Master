import { connect } from "react-redux";
import "../styleSheets/MessageBox.css";
const MessageBox = ({name,message,setMessage,sendMessage,typer,colors}) => {

    return (
        <section className="message-box text-light p-1" style={{backgroundColor:colors.headerColor}}>
        <div className="container">
        <span className="typing text-white" style={{color:colors.headerTextColor}}>{typer.length!==0?typer:name}</span>
        <div className="d-flex justify-content-around align-items-center">
            <div className="input-group news-input">
                <input type="text" className="form-control"
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                placeholder="Write Your Messages Here"
                onKeyPress={(e)=>e.key==='Enter'&& sendMessage(e) }
                />
            </div>
            <i className="bi bi-telegram ps-2 pb-1"
            onClick={(e)=> sendMessage(e)}
            >
            </i>
        </div>
        </div>
    </section>
    )
}

const mapStateToProps = (state)=>{
    return {
        name : state.enteredName,
        colors : state.customize
    }
}


export default connect(mapStateToProps)(MessageBox)
