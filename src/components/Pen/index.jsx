import React, { useState, useEffect } from 'react'
import { Editor } from '../Editor'
import { useLocalStorage } from '../UseLocalStorage'
import { Header } from '../Header'

const Pen = () => {
  const [html, setHtml] = useLocalStorage('html', '<p>Hello world</p>')
  const [css, setCss] = useLocalStorage('css', 
  `p {
    color: blue;
  }`)
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

    useEffect(() => {
      const timeOut = setTimeout(() => {
        setSrcDoc(`
          <html>
          <body>${html}</body>
          <style>${css}</style>

          <script>${js}</script>
        </html>
        `)
      }, 250)

      return () => {
        clearTimeout(timeOut)
      }
    }, [html, css, js])

  return (
   <>
    <Header />
    <div className="pane top-pane">
      <Editor   
        language="xml" 
        displayName="HTML" 
        value={html} 
        onChange={setHtml} 
      />
     
       <Editor   
        language="css" 
        displayName="CSS" 
        value={css} 
        onChange={setCss} 
      />
        <Editor   
        language="javascript" 
        displayName="JS" 
        value={js} 
        onChange={setJs} 
      />
    </div>
    <div className="pane">
      <iframe 
        srcDoc={srcDoc}
        title="output" 
        frameBorder="0" 
        sandbox="allow-scripts" 
        width="100%" 
        height="100%" 
        allowFullScreen
      />
    </div>
   </>
  );
}

export {Pen};
