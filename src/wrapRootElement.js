import React from 'react';
import { MediaContextProvider } from './';

const wrapRootElement = ({ element }) => (
  <MediaContextProvider>{element}</MediaContextProvider>
);

export default wrapRootElement;
