import { createContext, useState } from "react";

const FavouritesContext=createContext({
    favourites:[],
    totalFavourites:0
});

function FavouritesContextProvider(props){

    const [userFavourites, SetUserFavourites]=useState([])

    function addFavouriteHandler(favouriteMeetup){
        SetUserFavourites((prevUserFavourites)=>{
            return prevUserFavourites.concat(favouriteMeetup)
        })
    }

    function removeFavouriteHandler(meetupId){
        SetUserFavourites((prevUserFavourites)=>{
            prevUserFavourites.filter(meetup=> meetup.id!==meetupId)
        })
    }

    function itemIsFavouriteHandler(meetupId){
        return userFavourites.some(meetup => meetup.id===meetupId)
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
    }

    return <FavouritesContext.Provider>
        {props.children}
    </FavouritesContext.Provider>
}