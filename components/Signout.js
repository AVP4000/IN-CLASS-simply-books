import React from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

function SignOut() {
  return (
    <Button className="sign-out" onClick={signOut}>
      Sign Out
    </Button>
  );
}

export default SignOut;
