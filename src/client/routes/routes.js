import React from 'react';
import loadable from 'loadable-components';
export const Home = loadable(() => import('../pages/home'));
export const About = loadable(() => import('../pages/about'));
export const PageNotFound = loadable(() => import('../pages/pageNotFound'));



