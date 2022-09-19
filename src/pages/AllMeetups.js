import { useState } from "react";
import MeetupList from "../component/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([])

  fetch("https://let-react-get-start-default-rtdb.firebaseio.com/meetups.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setLoadedMeetups(data)
    });

  if (isLoading) {
    return (
      <section>
        <p>Laoading....</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meet up Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
