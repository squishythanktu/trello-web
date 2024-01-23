import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import DashboardIcon from '@mui/icons-material/Dashboard'
import FilterListIcon from '@mui/icons-material/FilterList'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import { MockData } from 'src/apis/mock-data'
import theme from 'src/theme'
import capitalize from 'lodash/capitalize'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgColor: 'primary.50'
  }
}

export default function BoardBar({ board }: MockData) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customTheme = theme as any

  return (
    <Box
      sx={{
        height: customTheme.trello.boardBarHeight,
        borderBottom: '1px solid white',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}
      className='flex h-[58px] w-full items-center justify-between gap-4 overflow-x-auto px-4'
    >
      <div className='flex items-center gap-4'>
        <Chip
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
          sx={MENU_STYLES}
          className='border-non rounded px-[5px]'
        />
        <Chip
          icon={<VpnLockIcon />}
          label={capitalize(board?.type)}
          clickable
          sx={MENU_STYLES}
          className='border-non rounded px-[5px]'
        />
        <Chip
          icon={<AddToDriveIcon />}
          label='Add To Google Drive'
          clickable
          sx={MENU_STYLES}
          className='border-non rounded px-[5px]'
        />
        <Chip
          icon={<BoltIcon />}
          label='Automation'
          clickable
          sx={MENU_STYLES}
          className='border-non rounded px-[5px]'
        />
        <Chip
          icon={<FilterListIcon />}
          label='Filter'
          clickable
          sx={MENU_STYLES}
          className='border-non rounded px-[5px]'
        />
      </div>
    </Box>
  )
}
