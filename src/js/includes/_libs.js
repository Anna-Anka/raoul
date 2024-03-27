import GraphTabs from 'graph-tabs';
import { Fancybox } from '@fancyapps/ui';
import SmoothScroll from '../../../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js'

const scroll = new SmoothScroll('a[href*="#"]');

new GraphTabs('experience');
new GraphTabs('portfolio');

Fancybox.bind();

