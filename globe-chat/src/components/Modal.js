import {customization} from "../actions";
import { connect } from "react-redux";
import { useState } from "react";
import ModalField from "./ModalField.js";

const Modal = ({customization}) => {
    const [headerColor,setHeaderColor] = useState('#212529');
    const [bodyColor,setBodyColor] = useState('#414a4c');
    const [headerTextColor,setHeaderTextColor] = useState('#ffffff');
    const [bodyTextColor,setBodyTextColor] = useState('#f0f8ff');
    const [senderBox, setSenderBox] = useState('#dc143c');
    const [receiverBox, setReceiverBox] = useState('#ff6347');
    const [messageColor, setMessageColor] = useState('#fffafa');
    const setColors = ()=>{
        let colors={
            headerColor,
            bodyColor,
            headerTextColor,
            bodyTextColor,
            senderBox,
            receiverBox,
            messageColor
        }
        customization(colors);
    }
    const setDefault = ()=>{
            setHeaderColor('#212529');
            setBodyColor('#414a4c');
            setHeaderTextColor('#ffffff');
            setBodyTextColor('#f0f8ff');
            setSenderBox('#dc143c');
            setReceiverBox('#ff6347');
            setMessageColor('#fffafa');
            let colors={
                headerColor:'#212529',
                bodyColor:'#414a4c',
                headerTextColor:'#ffffff',
                bodyTextColor:'#f0f8ff',
                senderBox:'#dc143c',
                receiverBox:'#ff6347',
                messageColor:'#fffafa'
            }
            customization(colors);
    }
    return (
        <div className="modal fade" id="customModal" tabIndex="-1" aria-labelledby="customModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="customModalLabel">Customize</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                    <ModalField id={"header-color"} title={"Header & Footer Color:"} value={headerColor} setValue={setHeaderColor}/>
                    <ModalField id={"body-color"} title={"Body Color:"} value={bodyColor} setValue={setBodyColor}/>
                    <ModalField id={"header-text-color"} title={"Header Text Color:"} value={headerTextColor} setValue={setHeaderTextColor}/>
                    <ModalField id={"body-text-color"} title={"Body Text Color:"} value={bodyTextColor} setValue={setBodyTextColor}/>
                    <ModalField id={"sender-box-color"} title={"SenderBox Color:"} value={senderBox} setValue={setSenderBox}/>
                    <ModalField id={"receiver-box-color"} title={"ReceiverBox Color:"} value={receiverBox} setValue={setReceiverBox}/>
                    <ModalField id={"message-color"} title={"Message Color:"} value={messageColor} setValue={setMessageColor}/>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setDefault()}>Default</button>
                    <button type="button" className="btn btn-primary" onClick={()=>setColors()} data-bs-dismiss="modal">Submit</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default connect(()=>{return {dummy:12}},{customization})(Modal)
