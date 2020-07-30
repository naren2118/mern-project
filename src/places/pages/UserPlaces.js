import React from 'react';
import {useParams} from 'react-router-dom'

import PlaceList from '../components/PlaceList';
const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: 'Flat 303, Plot No: 98, Street No: 20, Telcome Nagar Gachibowli',
    location: {
      lat: 17.4311411,
      lng: 78.3634601
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: 'Flat 303, Plot No: 98, Street No: 20, Telcome Nagar Gachibowli',
    location: {
      lat: 17.4311411,
      lng: 78.3634601
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;