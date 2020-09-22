import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/edit/closetag.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import SettingsIcon from '../assets/settings.svg'

const  Editor = ({ displayName, language, value, onChange }) => {
  const [open, setOpen] = useState(true)

  const handleChange = (editor, data, value) => {
    onChange(value)
  }

  return (
    <div className={`editor ${open ? '' : 'editor--collapsed'}`}>
      <div className="editor__title">
        <div style={{ color: '#39c9a7', display: 'flex', fontWeight:'600' }}>
          <img src={SettingsIcon} alt="settings" height="18" style={{ paddingRight: '.25em', cursor: 'pointer' }} />
          {displayName}
        </div>
        <button 
          type="button"
          className="editor__expand-close-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt: faExpandAlt } />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: 'material',
          autoCloseBrackets: true,
          autoCloseTags: true
        }}
      />
    </div>
  )
}

Editor.propTypes={
  value: PropTypes.string,
}

export default Editor
