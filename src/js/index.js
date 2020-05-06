import '../css/index.scss';
import DPlayer from './player';

console.info("直播使用jsmpeg，点播使用flv.js");

/* global DPLAYER_VERSION GIT_HASH */
console.log(`${'\n'} %c P2PPlayer v${DPLAYER_VERSION} ${GIT_HASH} %c https://github.com/cdnbye/CBPlayer ${'\n'}${'\n'}`, 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');





export default DPlayer;
