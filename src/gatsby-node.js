import VirtualModulesPlugin from 'webpack-virtual-modules';

// Based on CreateMediaConfig in https://github.com/artsy/fresnel/blob/master/src/Media.tsx
export const pluginOptionsSchema = ({ Joi }) =>
  Joi.object({
    breakpoints: Joi.object().required().pattern(Joi.string(), Joi.number()),
    interactions: Joi.object().pattern(Joi.string(), Joi.string()),
  });

export const onCreateWebpackConfig = ({ actions }, pluginOptions) => {
  const moduleContents = JSON.stringify(pluginOptions);

  actions.setWebpackConfig({
    plugins: [
      new VirtualModulesPlugin({
        'node_modules/gatsby-plugin-fresnel/config.json': moduleContents,
      }),
    ],
  });
};
