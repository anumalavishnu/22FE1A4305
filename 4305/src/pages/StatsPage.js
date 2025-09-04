import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Link } from '@mui/material';
import { getStoredUrls } from '../utils/utils';

const StatsPage = () => {
  const [urls, setUrls] = useState({});

  useEffect(() => {
    setUrls(getStoredUrls());
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        URL Statistics
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="URL stats table">
          <TableHead>
            <TableRow>
              <TableCell>Shortcode</TableCell>
              <TableCell>Original URL</TableCell>
              <TableCell>Clicks</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(urls).map(([code, data]) => (
              <TableRow key={code}>
                <TableCell>{code}</TableCell>
                <TableCell>
                  <a href={data.originalUrl} target="_blank" rel="noopener noreferrer">
                    {data.originalUrl}
                  </a>
                </TableCell>
                <TableCell>{data.clicks}</TableCell>
                <TableCell>{new Date(data.createdAt).toLocaleString()}</TableCell>
              </TableRow>
            ))}
            {Object.keys(urls).length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No URLs shortened yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ mt: 2 }}>
        <Link href="/">Back to Shortener</Link>
      </Box>
    </Container>
  );
};

export default StatsPage;
