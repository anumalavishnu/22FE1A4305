import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUrl, incrementClicks } from '../utils/utils';

const RedirectHandler = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const urlData = getUrl(shortcode);
    if (urlData) {
      incrementClicks(shortcode);
      window.location.href = urlData.originalUrl;
    } else {
      // Redirect to home if shortcode not found
      navigate('/');
    }
  }, [shortcode, navigate]);

  return null;
};

export default RedirectHandler;