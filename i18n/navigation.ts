import {createNavigation} from 'next-intl/navigation';
import {routing} from './routing';

const navigation = createNavigation(routing);
  console.log('navigation:', navigation); // 打印 navigation 对象

export const {Link, getPathname, redirect, usePathname, useRouter} = navigation;
