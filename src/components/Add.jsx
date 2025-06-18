import { Avatar, Box, Button, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { theme } from '../theme';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';

const SytledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
});

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip
                onClick={(e) => setOpen(true)}
                title="Add"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 },
                    bgcolor: theme.palette.primary.main, 
                    color: theme.palette.primary.contrastText
                }}
            >
                <Fab color={theme.palette.primary.main} aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <SytledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
                    <Typography variant='h6' color={theme.palette.primary.contrastText} textAlign="center" >Create Post</Typography>
                    <UserBox onClick={e => setOpen(true)}>
                        <Avatar
                            sx={{ width: 30, height: 30 }}
                            src="data:image/jpeg;base64,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"
                        />
                        <Typography variant='span'>John Whick</Typography>
                    </UserBox>

                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind..."
                        variant="standard"

                    />

                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <InsertEmoticonIcon />
                        <AddAPhotoIcon />
                        <InsertPhotoIcon />
                        <PersonAddIcon />
                    </Stack>

                    <Stack direction="row" spacing={2}>
                        <Button sx={{ bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} variant="contained" fullWidth startIcon={<FileUploadIcon />}>
                            Upload
                        </Button>
                        <Button sx={{ bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} variant="contained" fullWidth endIcon={<CalendarMonthIcon />}>
                            Schedule
                        </Button>
                    </Stack>

                </Box>
            </SytledModal>
        </>
    )
}

export default Add