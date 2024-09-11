'use client'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const GTM = ({ gtmId }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId });
  }, [gtmId]);

  return null;
};

export default GTM;
