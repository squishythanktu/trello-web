import Box from '@mui/material/Box'
import theme from 'src/theme'

export default function BoardBar() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customTheme = theme as any

  return (
    <Box
      sx={{ backgroundColor: 'primary.dark', height: customTheme.trello.boardBarHeight }}
      className='flex h-[58px] w-full items-center'
    >
      Board Bar
    </Box>
  )
}
