import Box from '@mui/material/Box'
import theme from 'src/theme'
import ListColumns from './ListColumns'
import { Board, Column } from 'src/apis/mock-data'
import sortBy from 'lodash/sortBy'
import indexOf from 'lodash/indexOf'
import { DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

interface Props {
  board: Board
}

export default function BoardContent({ board }: Props) {
  // Require mouse to move at least 10px then trigger event, avoid clicking trigger event
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })
  const customTheme = theme as any
  const [orderedColumns, setOrderedColumns] = useState<Column[]>([])
  const sensors = useSensors(mouseSensor, touchSensor)

  useEffect(() => {
    const sortedColumns = sortBy(board.columns, (column) => indexOf(board.columnOrderIds, column._id))
    setOrderedColumns(sortedColumns)
  }, [board])

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return

    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex((column) => column._id === active.id)
      const newIndex = orderedColumns.findIndex((column) => column._id === over.id)

      // use arrayMove of dnd-kit to sort original columns array & set state
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      setOrderedColumns(dndOrderedColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        className='w-full py-[10px]'
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          height: customTheme.trello.boardContentHeight
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}
