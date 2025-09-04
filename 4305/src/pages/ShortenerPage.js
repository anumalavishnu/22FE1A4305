import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert, Link } from '@mui/material';
import { validateUrl, generateShortcode, storeUrl } from '../utils/utils';

const ShortenerPage = () => {
  const [url, setUrl] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!validateUrl(url)) {
      setError('Please enter a valid URL.');
      return;
    }
    const code = generateShortcode();
    storeUrl(code, url);
    setShortcode(code);
    setSuccess(`Shortened URL: ${window.location.origin}/${code}`);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          URL Shortener
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Shorten URL
          </Button>
        </form>
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        {success && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {success}
          </Alert>
        )}
        <Box sx={{ mt: 2 }}>
          <Link href="/stats">View Stats</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default ShortenerPage;