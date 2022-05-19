import { useEffect } from 'react';
import less from './index.less';

export default function LiquidBackground() {
  useEffect(() => {
    console.log('123');
  }, []);

  return <div className={less.body}>12</div>;
}
