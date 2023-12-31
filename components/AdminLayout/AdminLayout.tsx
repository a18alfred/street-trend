import Head from 'next/head';
import React, { FC } from 'react';
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import { adminNavLinks } from '../AdminNavigation/adminNavLinks';
import { ChildrenWrapper, LayoutContainer } from './AdminLayout.styles';

interface Props {
  title: string;
}
/**
 * Admin Layout wrapper for Admin Pages
 *@function AdminLayout
 *@param {string} title - Title of admin page
 *@returns {JSX.Element} - AdminLayout wrapper component
 */
const AdminLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <LayoutContainer>
        <AdminNavigation adminNavLinks={adminNavLinks} />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </LayoutContainer>
    </>
  );
};

export default AdminLayout;
