import { history } from 'umi';

const routerPush = (path: string) => {
  history.push(path);
};

export { routerPush };
