import Box from '@mui/material/Box'
import theme from 'src/theme'
import ListColumns from './ListColumns'
import { Board } from 'src/apis/mock-data'
import sortBy from 'lodash/sortBy'
import indexOf from 'lodash/indexOf'

interface Props {
  board: Board
}

export default function BoardContent({ board }: Props) {
  const customTheme = theme as any
  const sortedColumns = sortBy(board.columns, (column) => indexOf(board.columnOrderIds, column._id))

  return (
    <Box
      className='w-full py-[10px]'
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        height: customTheme.trello.boardContentHeight
      }}
    >
      <ListColumns columns={sortedColumns} />
    </Box>
  )
}
