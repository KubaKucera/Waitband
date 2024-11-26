"use client";

import { useEffect } from 'react';
import LoadingCircle from '@/components/loading/LoadingCircle';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {   
    router.push("/uvod");
  }, []) 

  return (
    <LoadingCircle />
  );
}
