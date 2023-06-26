import { signOut } from 'next-auth/client';
import Link from 'next/link';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';
import * as Styled from './UserAccountDropdown.styles';

/**
 * Content for User Account Details dropdown in <Navbar/>, will not be displayed for not logged-in users
 *@function UserAccountDropdown
 *@returns {JSX.Element} - Rendered UserAccountDropdown component
 */
const UserAccountDropdown = (): JSX.Element => {
  const handleUserSignOut = () => {
      signOut();
  };

  return (
    <Styled.Container>
      <Link href="/account" passHref>
        <Styled.LinkContent>
          <MdAccountCircle className="icon" />
          Account
        </Styled.LinkContent>
      </Link>

      <Styled.SignOut onClick={handleUserSignOut}>
        <FiLogOut className="icon" />
        Sign Out
      </Styled.SignOut>
    </Styled.Container>
  );
};

export default UserAccountDropdown;
