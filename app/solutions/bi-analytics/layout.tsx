import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BI & Analytics Solutions',
  description: 'Business intelligence and analytics solutions for data-driven decision making.',
};

export default function BiAnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
