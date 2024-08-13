import React, { useState } from 'react';
import {
  TextField,
  Button,
  IconButton,
  Box,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material';
import {
  Send as SendIcon,
  MoreVert as MoreVertIcon,
  AttachFile as AttachFileIcon,
  InsertEmoticon as InsertEmoticonIcon,
  Link as LinkIcon,
  InsertPhoto as InsertPhotoIcon,
  AlternateEmail as AlternateEmailIcon,
} from '@mui/icons-material';
import axios from 'axios';

const EmailReply = ({ threadId, isDarkMode }) => {
  const [formData, setFormData] = useState({
    toName: 'Mitrajit',
    to: 'chandra.rupam@gmail.com',
    from: 'mitrajit2022@gmail.com',
    fromName: 'Mitrajit',
    subject: 'Optimize Your Recruitment Efforts with Expert Support',
    body: '<p>Hello how are you</p>',
    references: [
      '<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>',
      '<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>',
      '<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>',
      '<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>',
    ],
    inReplyTo: '<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendEmail = async () => {
    try {
      const response = await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        formData
      );

      if (response.status === 200) {
        alert('Email sent successfully!');
      } else {
        console.error('Failed to send email:', response.data);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        backgroundColor: isDarkMode ? '#212121' : '#fff',
        color: isDarkMode ? '#fff' : '#000',
        width: '500px',
        margin: 'auto',
      }}
    >
      <Typography variant="body2" gutterBottom>To:</Typography>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        name="to"
        value={formData.to}
        onChange={handleInputChange}
        sx={{
          mb: 2,
          input: { color: isDarkMode ? '#fff' : '#000' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: isDarkMode ? '#424242' : '#ccc' }
          }
        }}
      />
      <Typography variant="body2" gutterBottom>From:</Typography>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        name="from"
        value={formData.from}
        onChange={handleInputChange}
        sx={{
          mb: 2,
          input: { color: isDarkMode ? '#fff' : '#000' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: isDarkMode ? '#424242' : '#ccc' }
          }
        }}
      />
      <Typography variant="body2" gutterBottom>Subject:</Typography>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        name="subject"
        value={formData.subject}
        onChange={handleInputChange}
        sx={{
          mb: 2,
          input: { color: isDarkMode ? '#fff' : '#000' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: isDarkMode ? '#424242' : '#ccc' }
          }
        }}
      />
      <TextField
        fullWidth
        multiline
        rows={4}
        name="body"
        placeholder="Hi Jeanne,"
        value={formData.body}
        onChange={handleInputChange}
        variant="outlined"
        sx={{
          mb: 2,
          backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
          input: { color: isDarkMode ? '#fff' : '#000' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: isDarkMode ? '#424242' : '#ccc' }
          }
        }}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="send-label" sx={{ color: isDarkMode ? '#fff' : '#000' }}>Send</InputLabel>
          <Select
            labelId="send-label"
            id="send-select"
            value="10"
            label="Send"
            sx={{
              color: isDarkMode ? '#fff' : '#000',
              '& .MuiOutlinedInput-notchedOutline': { borderColor: isDarkMode ? '#424242' : '#ccc' }
            }}
          >
            <MenuItem value="10">Send Now</MenuItem>
            <MenuItem value="20">Schedule Send</MenuItem>
          </Select>
        </FormControl>
        <Box>
          <IconButton sx={{ color: isDarkMode ? '#fff' : '#000' }}>
            <AttachFileIcon />
          </IconButton>
          <IconButton sx={{ color: isDarkMode ? '#fff' : '#000' }}>
            <InsertEmoticonIcon />
          </IconButton>
          <IconButton sx={{ color: isDarkMode ? '#fff' : '#000' }}>
            <LinkIcon />
          </IconButton>
          <IconButton sx={{ color: isDarkMode ? '#fff' : '#000' }}>
            <InsertPhotoIcon />
          </IconButton>
          <IconButton sx={{ color: isDarkMode ? '#fff' : '#000' }}>
            <AlternateEmailIcon />
          </IconButton>
          <IconButton sx={{ color: isDarkMode ? '#fff' : '#000' }}>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendEmail}
          sx={{ color: '#fff' }}
          startIcon={<SendIcon />}
        >
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default EmailReply;
