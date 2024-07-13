import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';
import SignOut from '../components/Signout';

export default function User() {
  const { user } = useAuth();

  return (
    <div className="text-light text-center">
      {/* {image} */}
      <h2>
        {user.displayName}
      </h2>
      <h2>
        {user.email}
      </h2>
      <h3>
        {user.metadata.lastSignInTime}
      </h3>
      <SignOut />
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoUrl: PropTypes.string,
    email: PropTypes.string,
    lastLogin: PropTypes.shape({
      lastLoginTime: PropTypes.string,
    }),
  }).isRequired,
};
