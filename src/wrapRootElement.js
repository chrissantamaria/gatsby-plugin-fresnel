import React from 'react';
import { MediaContextProvider } from './';

const wrapRootElement = ({ element }) => (
  <MediaContextProvider disableDynamicMediaQueries>
    {element}
  </MediaContextProvider>
);

export default wrapRootElement;
