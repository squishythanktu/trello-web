import { useState } from 'react'
import { Button, useColorScheme } from '@mui/material'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='card flex flex-col items-center'>
      <ModeToggle />
      <Button
        variant='contained'
        onClick={() => {
          setCount((prev) => prev + 1)
        }}
      >
        Count: {count}
      </Button>
    </div>
  )
}

export default App
