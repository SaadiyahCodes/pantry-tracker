'use client'
import { firestore } from "@/firebase"
import { useState, useEffect } from "react"
import { getDocs, deleteDoc, doc, getDoc, collection, setDoc, query } from "firebase/firestore"
import { Box, Container, Modal, Typography, Stack, TextField, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, responsiveFontSizes } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from "@mui/material/styles"

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState('')
  const [itemQuantity, setItemQuantity] = useState('')
  const theme = useTheme();

  const tableCellStyle = {
    header: {
      fontSize: '1.1rem', 
      fontWeight: 'bold',
      color: '#FFFFFF', 
      backgroundColor: theme.palette.secondary.main
    },
    body: {fontSize: '1rem'}
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Container>
      <Box sx={{ textAlign: 'center', m: 2, mt:4}}>
        <Typography variant="h5">Pantry Tracker</Typography>
        <Typography color='secondary' variant="h6">Track your items with ease ✨</Typography>
      </Box>
      <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Box>
          <Button 
            variant="outlined" 
            onClick={()=> {handleOpen()}}
            sx={{mt: 2, mb: 0.5, color: 'text.primary', borderColor: 'text.primary'}}
          >
            Add New Item
          </Button>
        </Box>
        <TableContainer component={Paper} sx={{maxWidth:600, m:'0 auto', mt:2}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={tableCellStyle.header}>Item</TableCell>
                <TableCell align="right" sx={tableCellStyle.header}>Quantity</TableCell>
                <TableCell align="right" sx={tableCellStyle.header}> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={tableCellStyle.body}>Gojo</TableCell>
                <TableCell align="right" sx={tableCellStyle.body}>1</TableCell>
                <TableCell align="right" sx={tableCellStyle.body}>
                  <IconButton><AddIcon/></IconButton>
                  <IconButton><RemoveIcon/></IconButton>
                  <IconButton><EditIcon/></IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/*Modal component */}
      <Modal open={open} onClose={handleClose}>
        <Box
          position="absolute" top="50%" left="50%"
          width={400} bgcolor="white" border="2px solid #000"
          boxShadow={24} p={3} display="flex" 
          flexDirection="column" gap={3} sx={{transform: "translate(-50%, -50%)"}}
        >
          <Typography variant="body2">Add New Item</Typography>
          <Stack width="100%" direction="row" spacing={2}>
            <TextField label="Item Name" fullWidth
            sx={{flex: 1}}
            value={itemName} onChange={(e)=>{
              setItemName(e.target.value)
            }}/>
            <TextField label="Quantity" fullWidth
            sx={{flex: 0.50}}
            value={itemQuantity} onChange={(e)=>{
              setItemQuantity(e.target.value)
            }}/>
          </Stack>
          <Button variant="text" onClick={()=>{
            addItem(itemName)
            setItemName('')
            handleClose()
          }}>Done</Button>
        </Box>
      </Modal>
    </Container>
  )
}
