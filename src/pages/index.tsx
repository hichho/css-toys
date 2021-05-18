import React, { useEffect, useRef } from 'react';
import Flex from '@/pages/components/Flex';
import less from './index.less';

//TODO interface实现 引入react-dom

export default function IndexPage() {
  /**
   * different little interesting toys~
   */
  const modules = [
    // {name: "earth-revolves-around-the-sun", path: '/modules/earth-revolves-around-the-sun'},
    { name: 'earth-revolves-around-the-sun', path: '' },
    { name: "mac's dock", path: '/modules/mac-dock' },
    { name: 'cyberpunk style button', path: '/modules/cyberpunk-button' },
  ];

  /**
   * play music
   */

  return (
    <Flex className={less.contain} justify={'center'} alignItems={'center'}>
      <img
        src={'./images/background-image.jpg'}
        alt={''}
        className={less.background}
      />
      <Flex className={less.frame} direction={'column'}>
        {modules.map((item, index) => {
          return (
            <Flex
              key={index}
              className={less.toy}
              alignItems={'center'}
              onClick={() =>
                import('@/utils/RouterUtils').then((utils) => {
                  utils.routerPush(item.path);
                })
              }
            >
              <img src={'./images/project.png'} alt={''} />
              {item.name}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}
