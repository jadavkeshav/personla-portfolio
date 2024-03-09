import React from 'react'

export default function Darkmode(props) {
    return (
        <div>
            <div className='darkmode'>
                <input type="checkbox" onChange={props.toggleDarkMode} className="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="checkbox-label">
                    <span className="material-symbols-outlined">
                        dark_mode
                    </span>
                    <span style={{color: '#fff'}} className="material-symbols-outlined">
                        brightness_6
                    </span>
                    <span className="ball"></span>
                </label>
            </div>
        </div>
    )
}
