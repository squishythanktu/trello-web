import Box from '@mui/material/Box'
import { COLUMN_FOOTER_HEIGHT, COLUMN_HEADER_HEIGHT } from 'src/constants/height.constant'
import theme from 'src/theme'
import Card from './Card'
import { Card as CardType } from 'src/apis/mock-data'

interface Props {
  cards: CardType[]
}

export default function ListCards({ cards }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customTheme = theme as any

  return (
    <Box
      className='mx-[5px] my-0 flex flex-col gap-2 overflow-y-auto overflow-x-hidden px-[5px] py-0'
      sx={{
        maxHeight: `calc(${customTheme.trello.boardContentHeight} - ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT} )`,
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#ced0da'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#bfc2cf'
        }
      }}
    >
      {cards?.map((card) => <Card key={card._id} card={card} />)}
    </Box>
  )
}
