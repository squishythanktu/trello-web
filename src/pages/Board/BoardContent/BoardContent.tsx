import Box from '@mui/material/Box'
import theme from 'src/theme'

export default function BoardContent() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customTheme = theme as any

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        height: `calc(100vh - ${customTheme.trello.appBarHeight} - ${customTheme.trello.boardBarHeight})`
      }}
    >
      Board Content
    </Box>
  )
}
