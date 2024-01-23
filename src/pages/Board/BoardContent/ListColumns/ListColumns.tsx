import Box from '@mui/material/Box'
import Column from './Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { Column as ColumnType } from 'src/apis/mock-data'

interface Props {
  columns: ColumnType[]
}

export default function ListColumns({ columns }: Props) {
  return (
    <Box
      className='flex h-full w-full overflow-x-auto overflow-y-hidden bg-inherit'
      sx={{
        '&::-webkit-scrollbar-track': { m: 2 }
      }}
    >
      {columns?.map((column, index) => <Column key={index} column={column} />)}
      <Box
        className='mx-4 h-fit min-w-[200px] max-w-[500px] rounded-md'
        sx={{
          bgcolor: '#ffffff3d'
        }}
      >
        <Button className='w-full justify-start py-2 pl-5 text-white' startIcon={<NoteAddIcon />}>
          Add new column
        </Button>
      </Box>
    </Box>
  )
}
