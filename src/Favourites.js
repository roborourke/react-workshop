import React from 'react';
import { compose, withState, withHandlers, renameProp } from 'recompose';

const Favourites = ({
  thumbnailUrl,
  name,
  updateName,
  favouriteText,
  updateFavouriteText,
  addListEntry,
  removeListEntry,
  favourites
}) => (
  <div>
    <img src={thumbnailUrl} alt="Thumbnail" />
    <div>
      <input name="name" type="text" value={name} onChange={updateName} />
    </div>
    <form onSubmit={addListEntry}>
      <input
        name="favourite"
        type="text"
        value={favouriteText}
        onChange={updateFavouriteText}
        placeholder="add new item here …"
      />
      <button type="submit">Add</button>
    </form>
    <ul>
      {favourites.map((favourite, index) => (
        <li key={`${favourite}-${index}`}>
          <button onClick={() => removeListEntry(index)}>&times;</button>
          {favourite}
        </li>
      ))}
    </ul>
  </div>
);

const enhance = compose(
  renameProp( 'imageUrl', 'thumbnailUrl' ),
  withState( 'name', 'setName', props => props.name || '' ),
  withState( 'favouriteText', 'setFavouriteText', '' ),
  withState( 'favourites', 'setListEntries', [] ),
  withHandlers( {
    updateName: props => event => {
      props.setName( event.target.value )
    },
    updateFavouriteText: props => event => {
      props.setFavouriteText( event.target.value )
    },
    addListEntry: ({
      setFavouriteText,
      setListEntries,
      favourites,
      favouriteText
    }) => event => {
      event.preventDefault()
      setFavouriteText( '' )
      setListEntries( [ ...favourites, favouriteText ] )
    },
    removeListEntry: props => index => {
      props.setListEntries( [ ...props.favourites.filter( ( fave, i ) => i !== index ) ] )
    }
  } )
);

export default enhance(Favourites);
