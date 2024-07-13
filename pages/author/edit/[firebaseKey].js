import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthorForm from '../../../components/forms/AuthorForm';
import { getSingleAuthor } from '../../../api/authorData';

export default function EditAuthor() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  // TODO: grab the firebaseKey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the author data
  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass author object to the author form
  return (<AuthorForm obj={editItem} />);
}
