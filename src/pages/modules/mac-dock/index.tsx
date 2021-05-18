import React, { useEffect, useState } from 'react';
import less from './index.less';
import Common from '@/utils/Common';

export default function IndexPage() {
  const dock = [
    { id: 'emoji-1', face: '😃' },
    { id: 'emoji-2', face: '😊' },
    { id: 'emoji-3', face: '😜' },
    { id: 'emoji-4', face: '😍' },
    { id: 'emoji-5', face: '🤩' },
    { id: 'emoji-6', face: '🥳' },
    { id: 'emoji-7', face: '🥶' },
  ];

  const [arr, setArr] = useState([]);

  /**
   * addEventListener
   *https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll
   *https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener
   * https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
   */
  useEffect(() => {
    const addEventLer = () => {
      document.querySelectorAll('#dock li').forEach((li) => {
        li.addEventListener('mousemove', (e: Event) => {
          let item = e.target as HTMLElement;
          let itemRect = null;
          let offset = 0;
          if (item === null) {
            alert('oops');
          } else {
            itemRect = item.getBoundingClientRect() as DOMRect;
            offset =
              Math.abs((e as any).clientX - itemRect.left) / itemRect.width;
            let prev = item.previousElementSibling || null;
            let next = item.nextElementSibling || null;
            let scale = 0.3;
            resetScale();
            if (prev) {
              (prev as any).style.setProperty(
                '--scale',
                1 + scale * Math.abs(offset - 1),
              );
            }
            if (next) {
              (next as any).style.setProperty('--scale', 1 + scale * offset);
            }
            (item as any).style.setProperty('--scale', 1 + scale);
          }
        });
      });
    };
    const resetScale = () => {
      document.querySelectorAll('#dock li').forEach((li) => {
        (li as any).style.setProperty('--scale', 1);
      });
    };
    const reset = () => {
      (document.getElementById('dock') as any).addEventListener(
        'mouseleave',
        (e: any) => {
          resetScale();
        },
      );
    };
    addEventLer();
    reset();
  }, []);

  const getClass = (unit: any) => {
    let result = arr.find((item) => item == unit);
    return result ? less.loading : less.li;
  };

  const handleClick = (id: string): void => {
    if (Common.isEmpty(arr.find((item) => item == id))) {
      let newArr: string[] = [...arr];
      newArr.push(id);
      setArr(newArr as []);
    }
  };

  return (
    <div className={less.container}>
      <div className={less.glass}>
        <ul className={less.dock} id={'dock'}>
          {dock.map((item) => {
            return (
              <li
                key={item.id}
                id={item.id}
                className={getClass(item.id)}
                onClick={() => handleClick(item.id)}
              >
                {item.face}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
