import React, {useState, useEffect} from 'react';
import pf from 'petfinder-client';
import {Consumer} from './SearchContext';
import Pet from './Pet';

const doggy = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
});

function Results(props) {

    const [pets, setPets] = useState([]);

    useEffect(()=>{
       search();
    },[]);

    function search(){
        doggy.pet.find({
            location: props.searchParams.location,
            animal: props.searchParams.animal,
            breed: props.searchParams.breed,
            output: "full"
         })
         .then(data=>{
             let pets;
             let dataPets = data.petfinder.pets;
             if(dataPets && dataPets.pet){
                 pets = Array.isArray(dataPets.pet) ? dataPets.pet : [dataPets.pet];
             }else{
                 pets = [];
             }

             setPets(pets)
         })
    }

    return (
        <div className="search">
            {pets.map(pet=>{
                let breed;
                breed = Array.isArray(pet.breeds.breed) ? pet.breeds.breed.join(", ") : pet.breeds.breed;
                return(
                   <Pet 
                    animal={pet.animal}
                    key={pet.id}
                    name={pet.name}
                    breed={breed}
                    media={pet.media}
                    location={`${pet.contact.city}, ${pet.contact.state}`}
                    id={pet.id}
                   />
                )
            })}
        </div>
    )
}

export default function ResultsContext(props){
    return (
        <Consumer>
            {context => <Results {...props} searchParams={context} />}
        </Consumer>
    )
}
