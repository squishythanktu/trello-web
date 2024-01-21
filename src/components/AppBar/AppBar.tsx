import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ModeSelect from 'src/components/ModeSelect'
import theme from 'src/theme'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from 'src/assets/trello.svg'
import Workspace from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import Profiles from './Menus/Profiles'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import React from 'react'
import MoreIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'

interface Props {
  window?: () => Window
}

const drawerWidth = 240
const navItems = ['Workspaces', 'Recent', 'Starred', 'Templates', 'Create']

export default function AppBar({ window }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customTheme = theme as any
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState)
  }

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const renderMobileRightMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id='primary-right-menu-mobile'
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size='small' aria-label='help' color='inherit'>
          <Badge color='secondary' variant='dot' className='cursor-pointer'>
            <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton size='small' aria-label='help' color='inherit'>
          <HelpOutlineIcon sx={{ color: 'primary.main' }} />
        </IconButton>
        <p>Help</p>
      </MenuItem>
      <MenuItem>
        <Profiles />
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <Box
        sx={{ height: customTheme.trello.appBarHeight }}
        className='flex w-full items-center justify-between gap-4 overflow-x-auto px-4'
      >
        <div className='flex items-center gap-2 lg:gap-4'>
          <MenuIcon
            sx={{ color: 'primary.main' }}
            onClick={handleDrawerToggle}
            className=' mx-0 flex cursor-pointer lg:hidden'
          />

          <AppsIcon sx={{ color: 'primary.main' }} />
          <div className='flex items-center gap-1'>
            <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'primary.main' }} className='text-xl' />
            <Typography variant='span' className='text-[1.2rem] font-bold' sx={{ color: 'primary.main' }}>
              Trello
            </Typography>
          </div>
          <div className='hidden gap-2 lg:flex'>
            <Workspace />
            <Recent />
            <Starred />
            <Templates />
            <Button variant='outlined'>Create</Button>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <TextField id='outlined-search' label='Search field' type='search' size='small' className='min-w-[100px]' />
          <ModeSelect />
          <div className='hidden items-center gap-4 lg:flex'>
            <Tooltip title='Notification'>
              <Badge color='secondary' variant='dot' className='cursor-pointer'>
                <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
              </Badge>
            </Tooltip>
            <Tooltip title='Help'>
              <HelpOutlineIcon sx={{ color: 'primary.main' }} />
            </Tooltip>
            <Profiles />
          </div>
          <IconButton
            size='medium'
            aria-label='show more'
            aria-controls='primary-right-menu-mobile'
            aria-haspopup='true'
            onClick={handleMobileMenuOpen}
            color='inherit'
            className='flex p-0 lg:hidden'
          >
            <MoreIcon sx={{ color: 'primary.main' }} className=' mx-0 cursor-pointer' />
          </IconButton>
        </div>
      </Box>
      {renderMobileRightMenu}
      <Drawer
        container={container}
        variant='temporary'
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}
