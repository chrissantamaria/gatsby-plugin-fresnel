import React from 'react';
import { mediaStyles } from './instance';

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();

  const styleElem = <style key="fresnel-css">{mediaStyles}</style>;
  headComponents.push(styleElem);

  replaceHeadComponents(headComponents);
};

export { default as wrapRootElement } from './wrapRootElement';
