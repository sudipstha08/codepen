import React, { useState, createRef, useEffect } from 'react'

import Logo from '../../assets/logo.svg'
import PenIcon from '../../assets/pen.svg'
import DownArrowIcon from '../../assets/down-arrow.svg'
import CloudIcon from '../../assets/cloud.svg'
import SettingsIcon from '../../assets/settings.svg'
import NerdImg from '../../assets/nerd.svg'
import ViewChangeIcon from '../../assets/view-change.svg'
import PinnedIcon from '../../assets/pinned.svg'

import './style.scss'

const Header = () => {
  const [penTitle, setPenTitle] = useState('Untitled')
  const [isTitleDisabled, setIsTitleDisabled] = useState(true)
  const titleRef = createRef()

  const handlePenIconClick = () => {
    setIsTitleDisabled(false)
    if(penTitle === 'Untitled') { setPenTitle('') }
    titleRef.current.focus()
  }

  const handleTitleChange= (e) => {
    setPenTitle(e.target.value)
  }

  useEffect(() => {
    const titleRefCurrent = titleRef?.current
    titleRefCurrent.addEventListener('focusout', (event) => {
      setIsTitleDisabled(true)  
    });

    return() => titleRefCurrent.removeEventListener('focusout', setIsTitleDisabled)
  }, [titleRef])

  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <div className="header__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header__title">
          <div className="header__pen-name">
            <input 
              ref={titleRef}
              type="text" 
              value={penTitle} 
              onChange={handleTitleChange} 
              readOnly={isTitleDisabled}
              contentEditable={true}
            />
            <img src={PenIcon} alt="pen" onClick={handlePenIconClick} />
          </div>
          <div className="header__username">
            <p>Dev Xplore</p>
          </div>
        </div>
      </div>

      <div className="header__btns">
        <button className="btn btn-save">
          <img src={CloudIcon} alt="cloud"/>
          <span>Save</span>   
        </button>
        <button className="btn btn-settings">
          <img src={SettingsIcon} alt="settings" />
          Settings
        </button>
        <button className="btn btn-view-change">
          <img src={ViewChangeIcon} alt="view-change" />
          Change View
        </button>
        <button className="btn pinned-items">
          <img src={PinnedIcon} alt="pinned" height="25" />
          <img src={DownArrowIcon} alt="down-arrow" />
        </button>
        <button className="btn profile">
          <img src={NerdImg} alt="profile" height="56" />
        </button>
      </div>
    </header>
  )
}

export default Header
