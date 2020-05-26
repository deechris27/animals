import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import pf from 'petfinder-client';
import { Provider } from './SearchContext';
import Navbar from './components/Navbar';
import Loadable from 'react-loadable';
import Loader from './components/Spinner';

const doggy = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
});

const LoadableDetails = Loadable({
    loader: () => import('./Details'),
    loading(){
        return <Loader />
        // return <h1>Loading animal details...</h1>
    }
});

const LoadableSearch = Loadable({
    loader: () => import('./SearchParams'),
    loading(){
        return <Loader />
    }
});

const LoadableResults = Loadable({
    loader: () => import('./Results'),
    loading(){
        return <Loader />
    }
});

function App() {

    const [state, setState] = useState({
        location: "Phoenix, AZ",
        animal: "",
        breed: "",
        breeds: [],
        handleAnimalChange,
        handleBreedChange,
        handleLocationChange,
        getBreeds
    });

    const handleAnimalChange = event => {
        setState(prevState=>({
            ...prevState,
            location: event.target.value
        }))
    };

    const handleBreedChange = event => {
        setState(prevState=>({
            ...prevState,
            breed: event.target.value
        }))
    };

    const handleLocationChange = event => {
        setState(prevState=>({
            ...prevState,
            location: event.target.value
        }))
    };

    const getBreeds = () => {
        if(state.animal){
            doggy.breed.list({animal: state.animal})
            .then(data=>{
                console.log(data.petfinder)
                if(data.petfinder && data.petfinder.breeds && Array.isArray(data.petfinder.breeds.breed)){
                    setState(prevState=>({
                        ...prevState,
                        breeds: data.petfinder.breeds.breed
                    }))
                }else{
                    setState(prevState=>({
                        ...prevState,
                        breeds: []
                    }))
                }
            })
        }else{
            setState(prevState=>({
                ...prevState,
                breeds: []
            }))
        }
    };

    return (
        <div>
            <Navbar />
            <Provider value={state}>
                <Switch>
                    <Route exact path="/" component={LoadableResults} />
                    <Route path="/details/:id" component={LoadableDetails} />
                    <Route path="/search" component={LoadableSearch} />
                </Switch>
            </Provider>
        </div>
    )
}

export default App;
