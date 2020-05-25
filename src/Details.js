import React, { useState, useEffect } from 'react';
import pf from 'petfinder-client';
import {withRouter} from 'react-router-dom';
import Carousel from './Carousel';
import Modal from './Modal';
import Loadable from 'react-loadable';

const doggy = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
});

const LoadablePrompModal = Loadable({
    loader: () => import('./components/PromptModal'),
    loading(){
        return <h1>Loading modal...</h1>
    }
})

function Details(props) {

    const [state, setState] = useState({isLoading : true, showModal: false})

    useEffect(()=>{
      doggy.pet.get({output:"full", id: props.id})
       .then(data=>{
           let breed;
           let dataBreed = data.petfinder.pet.breeds.breed;
           breed = Array.isArray(dataBreed) ? dataBreed.join(", ") : dataBreed;
           setState(prevState=>({
               ...prevState,
               name: data.petfinder.pet.name,
               animal: data.petfinder.pet.animal,
               location: `${data.petfinder.pet.contact.city}, ${data.petfinder.pet.contact.state}`,
               description: data.petfinder.pet.description,
               media: data.petfinder.pet.media,
               breed,
               isLoading: false 
           }));
       }).catch(()=>{props.history.push('/')})
    },[]);

    const toggleModal = () => setState(prevState=>({
         ...prevState,
         showModal: !state.showModal
    }));

    if(state.isLoading){
        return <h1>Loading......</h1>
    }

    const {media, animal, breed, location, description, name, showModal} = state;

    return (
        <div className="details">
           <Carousel media={media}/>
           <div>
              <h1>{name}</h1>
              <h2>{`${animal} -- ${breed} -- ${location}`}</h2>
              <button onClick={toggleModal}>Adopt {name}</button>
              <p>{description}</p>
              {showModal ? (
                  <Modal>
                      <LoadablePrompModal toggleModal={toggleModal} name={name}/>
                  </Modal>
              ) : null}
           </div>
        </div>
    )
}

export default withRouter(Details);
