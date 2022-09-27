import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import scrollTop from './components/scrollTop';
import preloader from './components/preloader'
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();
scrollTop();
preloader();
