import { createMedia } from '@artsy/fresnel';
import config from 'gatsby-plugin-fresnel/config.json';

const AppMedia = createMedia(config);

// Make styles for injection into the header of the page
export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;
