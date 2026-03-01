import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Governance & Security Solutions',
  description: 'Data governance, compliance, and security solutions for enterprise data management.',
};

export default function DataGovernanceSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
