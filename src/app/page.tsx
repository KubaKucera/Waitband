"use client";

import { useEffect } from 'react';
import LoadingCircle from '@/components/loading/LoadingCircle';

export default function Home() {
  window.location.replace("/uvod");

  return (
    <LoadingCircle />
  );
}
