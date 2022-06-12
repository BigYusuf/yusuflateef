import {Link} from 'react-router-dom';
import { option1 } from '../data';

export const Card = ({icon, title, desc, LinkUrl, LinkAction, LinkActionIcon}) => {
    return(
        <div className= "contact__card">
        <i className={icon}></i>
        <h3 className="contact__card-title">{title}</h3>
        <span className="contact__card-data">{desc}</span>
        <Link to={LinkUrl} className="contact__button">
            {LinkAction} <i className={LinkActionIcon}></i>
        </Link>
    </div>
    )
}

export const Card2 = ({highlightAny, icon, title, desc, LinkUrl, LinkAction, LinkActionIcon}) => {
    return(
        <div className={highlightAny ? "contact__card active" : "contact__card"}>
        <i className={icon}></i>
        <h3 className="contact__card-title">{title}</h3>
        <span className="contact__card-data">{desc}</span>
        <a href={LinkUrl} className="contact__button">
            {LinkAction} <i className={LinkActionIcon}></i>
        </a>
    </div>
    )
}

export const InputBox = ({errData, labelName, valueData, nameData, typeData, setAny, highlightInput, placeholderData}) => {
    return(
    <>
        <div className={errData ? "contact__form-div active" : "contact__form-div"}>
            <label htmlFor="" className="contact__form-tag">{labelName}</label>
            <input type={typeData} name={nameData} value={valueData}
                onChange={(e) => setAny(e.target.value)}
                    placeholder={placeholderData}
                className={highlightInput ? "contact__form-input active" : "contact__form-input"}>
            </input>
        </div>
        {errData && <p className="contact__form-p">{errData}</p>}        
    </>
    )
}
export const ImageBox = ({errData, labelName, id1, id2, imgUrl, newImage,setAny, typeData}) => {
    return(
    <>
        <div className={errData ? "contact__form-img" : "contact__form-img"}>
            <label htmlFor="" className="contact__form-tag">{labelName}</label>
            {imgUrl ? (
                <img style={{width:200, height:150}}id={id1} 
                alt="" src={imgUrl} />
              ) : (
                    newImage ? (
                        <img style={{width:200, height:150}}id={id1} 
                        alt="" src={URL.createObjectURL(newImage)} 
                        />
                    ) : (
                        <img style={{width:200, height:150, }}id={id1}
                        alt="" src="/image/default-img.png" 
                        />
                    )
                )}
                <input type={typeData} id={id2} accept="image/*" style={{display:"none"}}
                    onChange={(e) => setAny(e.target.files[0])} />
                <label htmlFor={id2} onChange={(e) => setAny(e.target.files[0])}className="upload-icon">
                    <i className="bx bx-upload"></i>
                </label>
        </div>
        {errData && <p className="contact__form-p">{errData}</p>}        
    </>
    )
}
export const SelectBox1 = ({errData, valueData, nameData, setAny}) => {
    return(
    <>
        <div className={errData ? "contact__form-div active" : "contact__form-div"}>
            <select name={nameData} value={valueData} id={nameData} onChange={(e) => setAny(e.target.value)} className="contact__select1">
                <option className="contact__option" defaultValue value="">Select Category</option>
                <option className="contact__option" value="web">Web Application</option>
                <option className="contact__option" value="api">API/ Backend</option>
                <option className="contact__option" value="gis">GIS Related</option>
    </select>
        </div>
        {errData && <p className="contact__form-p">{errData}</p>}        
    </>
    )
}
export const SelectBox = ({errData, valueData, nameData, setAny}) => {
    return(
    <>
        <div className="contact__form-div1">
            <select name={nameData} value={valueData} id={nameData} onChange={(e) => setAny(e.target.value)}
        options={option1} className="contact__select1">
                {option1.map((data) => (
                    <option key={data.id} className="contact__option" value={data.value}>{data.title}</option>
                ))}
            </select>
        </div>
        {errData && <p className="contact__form-p">{errData}</p>}        
    </>
    )
}

export const TextAreaBox = ({errData, labelName, rowNumber, colNumber, valueData, typeData, nameData, setAny, highlightInput, placeholderData}) => {
    return(
    <>
        <div className={errData ? "contact__form-area active" : "contact__form-area"}>
            <label htmlFor="" className="contact__form-tag">{labelName}</label>
            <textarea rows={rowNumber} col={colNumber} name={nameData} value={valueData}
                onChange={(e) => setAny(e.target.value)}
                    placeholder={placeholderData} type={typeData}
                className={highlightInput ? "contact__form-input active" : "contact__form-input"}>
            </textarea>
        </div>
        {errData && <p className="contact__form-p">{errData}</p>}        
    </>
    )
}
