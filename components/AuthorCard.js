import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleAuthor } from '../api/authorData';

function AuthorCard({ authorObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE author AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE authorS
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name}?`)) {
      deleteSingleAuthor(authorObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{authorObj.first_name}{authorObj.last_name}</Card.Title>
        <p className="card-text bold">{authorObj.favorite && <span>🤍<br /></span> } </p>
        {/* DYNAMIC LINK TO VIEW THE author DETAILS  */}
        <Link href={`/author${authorObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE author DETAILS  */}
        <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string,
    favorite: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AuthorCard;