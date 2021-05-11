import React, {useEffect, useRef} from "react";
import Flex from "@/pages/components/Flex";
import less from './index.less';

export default function IndexPage() {

  /**
   * different little interesting toys~
   */
  const modules = [
    {name: "earth-revolves-around-the-sun", path: '/modules/earth-revolves-around-the-sun'},
    {name: "earth-revolves-the-sun", path: '/modules/earth-revolves-around-the-sun'},
    {name: "earth-revolves-around-the-sun", path: '/modules/earth-revolves-around-the-sun'},
  ];

  const ref = useRef<HTMLAudioElement | null>(null);


  /**
   * play music
   */


  return (
    <Flex className={less.contain} justify={"center"} alignItems={"center"}>
      <img src={'./images/background-image.jpg'} alt={''} className={less.background}/>
      <Flex className={less.frame} direction={"column"}>
        {modules.map((item, index) => {
          return <Flex key={index} className={less.toy} alignItems={"center"}>
            <img src={'./images/project.png'} alt={''}/>
            {item.name}
          </Flex>
        })}
      </Flex>
      <Flex>
        <audio id={'bgm'} src={'./music/crew.mp3'} autoPlay={true}/>
      </Flex>
    </Flex>
  );
}
