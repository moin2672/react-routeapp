import { useContext } from "react"
import MeetupList from "../component/meetups/MeetupList"
import FavouritesContext from "../store/favourites-context"

function FavouritesPage(){

    const FavouritesCntxt = useContext(FavouritesContext)

    let content;
if(FavouritesCntxt.totalFavourites===0){
    content = <p>You got no favourites yet. Start adding some? </p>
}else{
    content=<MeetupList meetups={FavouritesCntxt.favourites} />
}

    return(
        <div>
           <h1>My Favourites Meetups</h1>
           {content}
        </div>
    )
}

export default FavouritesPage