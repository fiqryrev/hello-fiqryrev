import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Platform Engineering Solutions',
  description: 'Scalable data platform and infrastructure engineering for modern data architectures.',
};

export default function DataPlatformEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
