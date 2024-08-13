import React  from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Link,
    CardActions,
    AppBar,
    Toolbar
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import logo from '../utils/M Reach Assi.png'; // Replace with the actual path to your logo

const LoginPage = () => {

    const navigate = useNavigate();

    const handleGoogleSignUp = () => {
        // Add any logic for Google Sign Up here if needed
        navigate('/dashboard'); // Replace with the actual path to your dashboard
    };
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'black', p: 1, borderBottom: '0.2px solid grey' }}>
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <img src={logo} alt="Logo" style={{ height: 40 }} />
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh',
                    backgroundColor: 'black',
                }}
            >
                <Card
                    sx={{
                        minWidth: 300,
                        maxWidth: 400,
                        m: 0,
                        p: 0,
                        textAlign: 'center',
                        backgroundColor: '#111',
                        color: '#fff',
                    }}
                >
                    <CardContent sx={{ p: 2 }}>
                        <Typography variant="h6" component="div" gutterBottom>
                            Create a new account
                        </Typography>
                        <Button
                            variant="contained"
                            startIcon={<GoogleIcon />}
                            sx={{
                                backgroundColor: '#000',
                                color: '#fff',
                                border: '0.5',
                                marginBottom: 2,
                                '&:hover': {
                                    backgroundColor: '#e0e0e0',
                                },
                            }}
                            fullWidth
                            onClick={handleGoogleSignUp}
                        >
                            Sign Up with Google
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#007bff',
                                color: '#fff',
                                marginBottom: 2,
                                '&:hover': {
                                    backgroundColor: '#0056b3',
                                },
                            }}
                        >
                            Create an Account
                        </Button>
                    </CardContent>
                    <CardActions>
                        <Typography variant="body2">
                            Already have an account?{' '}
                            <Link href="#" color="primary" underline="hover">
                                Sign In
                            </Link>
                        </Typography>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
};

export default LoginPage;
