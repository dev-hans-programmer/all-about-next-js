import React from 'react';
import { OrgControl } from './_components/org-control';
import { auth } from '@clerk/nextjs';

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: orgSlug?.toUpperCase() || 'Organization',
  };
}

export default function OrganizationIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}
