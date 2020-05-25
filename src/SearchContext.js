import React, {useContext} from 'react';

const SearchContext = React.createContext({
    location: "Phoenix, AZ",
    animal: "",
    breed: "",
    breeds: [],
    handleAnimalChange() {},
    handleBreedChange() {},
    handleLocationChange() {},
    getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;