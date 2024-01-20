import Container from '@mui/material/Container'
import AppBar from 'src/components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

export default function Board() {
  return (
    <Container disableGutters className='h-screen max-w-none'>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}
