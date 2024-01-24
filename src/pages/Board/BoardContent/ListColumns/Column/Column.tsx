import AddCardIcon from '@mui/icons-material/AddCard'
import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import DeleteIcon from '@mui/icons-material/Delete'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import React from 'react'
import { COLUMN_FOOTER_HEIGHT, COLUMN_HEADER_HEIGHT } from 'src/constants/height.constant'
import theme from 'src/theme'
import ListCards from './ListCards'
import { Column as ColumnType } from 'src/apis/mock-data'
import sortBy from 'lodash/sortBy'
import indexOf from 'lodash/indexOf'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface Props {
  key: React.Key | null | undefined
  column: ColumnType
}

export default function Column({ column }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customTheme = theme as any
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: column._id,
    data: { ...column }
  })
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => setAnchorEl(event.target as HTMLElement)
  const handleClose = () => setAnchorEl(null)
  const sortedCards = sortBy(column?.cards, (card) => indexOf(column.cardOrderIds, card._id))
  const dndKitColumnStyles = {
    transform: CSS.Translate.toString(transform),
    transition
  }

  return (
    <Box
      ref={setNodeRef}
      style={dndKitColumnStyles}
      {...attributes}
      {...listeners}
      className='ml-4 h-fit min-w-[300px] max-w-[300px] rounded-md'
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        maxHeight: `calc(${customTheme.trello.boardContentHeight} - ${theme.spacing(5)})`
      }}
    >
      {/* Column header */}
      <Box
        className='flex items-center justify-between p-4'
        sx={{
          height: COLUMN_HEADER_HEIGHT
        }}
      >
        <Typography
          variant='h6'
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {column?.title}
        </Typography>
        <div>
          <Tooltip title='More options' className='cursor-pointer'>
            <ExpandMoreIcon
              id='basic-button-dropdown'
              aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id='basic-menu-column-dropdown'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize='small' />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize='small' />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize='small' />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize='small' />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </div>
      </Box>
      <ListCards cards={sortedCards} />
      {/* Column footer */}
      <Box
        className='flex items-center justify-between p-4'
        sx={{
          height: COLUMN_FOOTER_HEIGHT
        }}
      >
        <Button startIcon={<AddCardIcon />}>Add new card</Button>
        <Tooltip title='Drag to move'>
          <DragHandleIcon sx={{ cursor: 'pointer' }}></DragHandleIcon>
        </Tooltip>
      </Box>
    </Box>
  )
}
