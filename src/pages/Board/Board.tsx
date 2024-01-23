import Container from '@mui/material/Container'
import AppBar from 'src/components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
import { mockData } from 'src/apis/mock-data'

export default function Board() {
  return (
    <Container disableGutters className='h-screen max-w-none'>
      <AppBar />
      <BoardBar board={mockData?.board} />
      <BoardContent board={mockData?.board} />
    </Container>
  )
}
