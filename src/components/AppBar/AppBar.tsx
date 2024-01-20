import Box from '@mui/material/Box'
import ModeSelect from 'src/components/ModeSelect'
import theme from 'src/theme'

export default function AppBar() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customTheme = theme as any

  return (
    <Box
      sx={{ backgroundColor: 'primary.light', height: customTheme.trello.appBarHeight }}
      className='flex w-full items-center'
    >
      <ModeSelect />
    </Box>
  )
}
