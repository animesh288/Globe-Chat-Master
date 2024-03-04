const ModalField = ({id,title,value,setValue}) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="col-form-label">{title}</label>
            <input type="color" value={value} className="form-control" id={id} onChange={(e)=>setValue(e.target.value)}/>
        </div>
    )
}

export default ModalField
