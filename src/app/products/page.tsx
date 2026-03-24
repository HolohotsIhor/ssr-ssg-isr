import { Metadata } from 'next';
import { Products } from './Products';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products page description',
};

const url = 'https://dummyjson.com/products';

// export const revalidate = 3600;

// ISR - Incremental Static Regeneration
const fetchDataISR= async () => {
  const result = await fetch(url , {
    cache: 'force-cache',
    next: {
      revalidate: 3600 // 1 hour
    }
  });
  const data = await result.json();

  return data;
} 

// SSG - Static Site Generation
const fetchDataSSG = async () => {
  const result = await fetch(url , {
    cache: 'force-cache',
  });
  const data = await result.json();

  return data;
} 

// SSR - Server-side rendering
const fetchDataSSR = async () => {
  const result = await fetch(url);
  const data = await result.json();

  return data;
} 

export default async function ProductsPage() {
  const data = await fetchDataSSR();

  if (!data) notFound();

  return <Products />;
}