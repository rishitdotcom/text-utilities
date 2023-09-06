import React, { useState } from 'react'
import ResponsiveAppBar from './components/navbar'
import TextForm from './components/TextContainer'

function App() {

  const [mode, setMode] = useState('light');
  const [alerts, setalerts]= useState(false);

  return (
    <>
    <ResponsiveAppBar mode={mode} setMode={setMode} />
    <TextForm mode={mode} setMode={setMode} alerts={alerts} setalerts={setalerts} />
    
    </>
  )
}

export default App