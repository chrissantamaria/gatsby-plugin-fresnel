import React from 'react';
import { MediaContextProvider } from './instance';

const wrapRootElement = ({ element }) => (
  <MediaContextProvider>{element}</MediaContextProvider>
);

export default wrapRootElement;
