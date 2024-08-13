import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Divider, Button, Card, Dialog, DialogTitle, DialogContent,ListItem, IconButton, TextField, List, ListItemText } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import CloseIcon from '@mui/icons-material/Close';
import EmailReply from './EmailReply';

const MessageSidebox = ({ threadId, isDarkMode }) => {
  const [emailDetails, setEmailDetails] = useState(null);
  const [replyOpen, setReplyOpen] = useState(false); // State to manage reply box visibility
  const [replyText, setReplyText] = useState(''); // State to manage reply text

  useEffect(() => {
    const fetchEmailDetails = async () => {
      try {
        const response = await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWJoaXNoZWttYWRhczEyMTRAZ21haWwuY29tIiwiaWQiOjYzOSwiZmlyc3ROYW1lIjoiQWJoaXNoZWsiLCJsYXN0TmFtZSI6Ik1hZGFzIn0sImlhdCI6MTcyMzQwMDU2OCwiZXhwIjoxNzU0OTM2NTY4fQ.AB2AO4p5o-8UPwuNjxMmUnJHNTWMneuuy_a79NocXMg`,
          },
        });

        if (response.status === 200 && response.data.data) {
          setEmailDetails(response.data.data[0]);
        } else {
          console.error('Failed to fetch email details.');
        }
      } catch (error) {
        console.error('Error fetching email details:', error);
      }
    };

    if (threadId) {
      fetchEmailDetails();
    }
  }, [threadId]);

  const handleReplyClick = () => {
    setReplyOpen(true);
  };

  const handleCloseReply = () => {
    setReplyOpen(false);
  };

  if (!emailDetails) {
    return <Typography>Loading email details...</Typography>;
  }

  return (
    <Card
      sx={{
        padding: 2,
        backgroundColor: isDarkMode ? 'background.paper' : '#f5f5f5',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Typography variant="h5" gutterBottom>
          {emailDetails.subject}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" gutterBottom>
          <strong>From:</strong> {emailDetails.fromName} ({emailDetails.fromEmail})
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>To:</strong> {emailDetails.toEmail}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Received At:</strong> {new Date(emailDetails.sentAt).toLocaleString()}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: emailDetails.body }} />
      </Box>

      <Box sx={{ textAlign: 'left', }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            color: '#fff',
            fontWeight: 6,
            backgroundColor: isDarkMode ? '#1976d2' : '#2196f3',
          }}
          onClick={handleReplyClick}
          startIcon={<ReplyIcon />} 
        >
          Reply
        </Button>

        <Dialog open={replyOpen} onClose={handleCloseReply} fullWidth >
        <DialogTitle>
          Reply
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseReply}
            aria-label="close"
            sx={{ position: 'absolute', right: 15, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <EmailReply threadId={emailDetails.threadId} isDarkMode={isDarkMode}/>
        </DialogContent>
      </Dialog>
      </Box>
    </Card>
  );
};

const LeadDetails = ({ isDarkMode }) => (
  <Box sx={{ padding: 2 }}>
    <Typography variant="h6">Lead Details</Typography>
    <Typography variant="body2">Name: Orlando</Typography>
    <Typography variant="body2">Contact No: +54-9062872869</Typography>
    <Typography variant="body2">Email ID: orlando@gmail.com</Typography>
    <Typography variant="body2">LinkedIn: linkedin.com/in/timwaded/</Typography>
    <Typography variant="body2">Company Name: Reachinbox</Typography>
  </Box>
);

const Activities = ({ isDarkMode }) => (
  <Box sx={{ padding: 2 }}>
    <Typography variant="h6">Activities</Typography>
    <Typography variant="body2">Campaign Name: Reachinbox</Typography>
    <Typography variant="body2">Step 1: Email Sent (3rd Feb)</Typography>
    <Typography variant="body2">Step 2: Email Opened (5th Feb)</Typography>
    <Typography variant="body2">Step 3: Email Opened (5th Feb)</Typography>
  </Box>
);

const InboxList = ({ isDarkMode }) => {
  const [emailData, setEmailData] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWJoaXNoZWttYWRhczEyMTRAZ21haWwuY29tIiwiaWQiOjYzOSwiZmlyc3ROYW1lIjoiQWJoaXNoZWsiLCJsYXN0TmFtZSI6Ik1hZGFzIn0sImlhdCI6MTcyMzQwMDU2OCwiZXhwIjoxNzU0OTM2NTY4fQ.AB2AO4p5o-8UPwuNjxMmUnJHNTWMneuuy_a79NocXMg`,
          },
        });
        if (response.status === 200 && response.data.data) {
          setEmailData(response.data.data);
          if (response.data.data.length > 0) {
            setSelectedEmail(response.data.data[0]);
          }
        } else {
          console.error('Failed to fetch emails or no emails found.');
        }
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    fetchEmails();
  }, []);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  const filteredEmails = emailData.filter(
    (email) =>
      email.fromEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', width: '100%' }}>
      <Box
        sx={{
          width: 300,
          backgroundColor: isDarkMode ? '#111' : '#f0f0f0',
          color: isDarkMode ? '#fff' : '#000',
          padding: '20px',
        }}
      >
        <Typography variant="h4" gutterBottom>
          All Inbox(s)
        </Typography>
        <Typography variant="body1" gutterBottom>
          {emailData.length} message{emailData.length !== 1 && 's'} in inbox
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Search emails..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            backgroundColor: isDarkMode ? '#333' : '#fff',
            marginBottom: 2,
            input: { color: isDarkMode ? '#fff' : '#000' },
          }}
        />
        <List>
          {filteredEmails.map((email) => (
            <React.Fragment key={email.id}>
              <ListItem
                button
                onClick={() => handleEmailClick(email)}
                sx={{
                  backgroundColor: selectedEmail && selectedEmail.id === email.id ? (isDarkMode ? '#333' : '#ddd') : 'inherit',
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body1" component="div">
                      {email.fromEmail}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography variant="body2" component="div">
                        {new Date(email.sentAt).toLocaleString()}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider sx={{ backgroundColor: isDarkMode ? '#444' : '#ccc' }} />
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
          color: isDarkMode ? '#fff' : '#000',
          padding: '20px',
          overflowY: 'auto',
        }}
      >
        {selectedEmail && <MessageSidebox threadId={selectedEmail.threadId} isDarkMode={isDarkMode} />}
      </Box>

      <Box
        sx={{
          width: 300,
          backgroundColor: isDarkMode ? '#111' : '#f0f0f0',
          color: isDarkMode ? '#fff' : '#000',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <LeadDetails isDarkMode={isDarkMode} />
        <Divider sx={{ my: 2, backgroundColor: isDarkMode ? '#444' : '#ccc' }} />
        <Activities isDarkMode={isDarkMode} />
      </Box>
    </Box>
  );
};

export default InboxList;
