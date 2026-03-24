'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './Products.module.scss';
import { useEffect } from 'react';

export const Products = () =>  {
  const { back, push, forward, replace, refresh } = useRouter(); // remplace browser history
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    console.log('Params: ', params);
  }, [])

  return (
    <div className={styles.products}>
      <h1>Products: {pathname}</h1>useSearchParams
      <ul>
        <li className={styles.productsItem}>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  );
}