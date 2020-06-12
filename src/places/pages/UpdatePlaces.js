import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { 
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
    } from '../../shared/util/validators';
    import './PlaceForm.css';
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

const UpdatePlace = () => {
      const placeId = useParams().placeId;

      const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

      if (!identifiedPlace) {
          return (
          <div className="center">
              <h2>Could not find places!</h2>
            </div>
          )
      }
    return (
        <form className="place-form">
            <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={() => {}}
            value={identifiedPlace.title}
            valid={true}
            />
            <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (min. 5 characters)."
            onInput={() => {}}
            value={identifiedPlace.description}
            valid={true}
            />
            <Button type="submit" disabled={true}>UPDATE PLACE</Button>
        </form>
    )
}

export default UpdatePlace;