# gatsby-plugin-fresnel

[![npm version](https://badge.fury.io/js/gatsby-plugin-fresnel.svg)](https://badge.fury.io/js/gatsby-plugin-fresnel)

Provides easy drop-in support for [@artsy/fresnel](https://github.com/artsy/fresnel) in Gatsby.

## Install

```shell
yarn add gatsby-plugin-fresnel
```

## How to use

Add the plugin to your `gatsby-config.js` and configure (see [fresnel's config API](https://github.com/artsy/fresnel#api)):

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-fresnel`,
      options: {
        breakpoints: {
          sm: 0,
          md: 768,
          lg: 1024,
          xl: 1192,
        },
      },
    },
  ],
};
```

This package exposes a pre-configured `Media` component for creating media queries:

```jsx
import React from 'react';
import { Media } from 'gatsby-plugin-fresnel';

const Home = () => (
  <>
    <Media at="sm">
      <MobileApp />
    </Media>
    <Media at="md">
      <TabletApp />
    </Media>
    <Media greaterThanOrEqual="lg">
      <DesktopApp />
    </Media>
  </>
);
```

See the [@artsy/fresnel README](https://github.com/artsy/fresnel) for full documentation.

## ⚠️ Render behavior

Note that this plugin utilizes the [`disableDynamicMediaQueries` option](https://github.com/artsy/fresnel#disabledynamicmediaqueries) from @artsy/fresnel to mitigate hydration mismatch errors introduced in React 18. As a result, all children of `Media` components will be rendered regardless of visibility.

For more information, refer to [@artsy/fresnel's README section](https://github.com/artsy/fresnel#%EF%B8%8F-react-18-notice).
