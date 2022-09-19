import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../component/meetups/NewMeetupForm";

// https://let-react-get-start-default-rtdb.firebaseio.com/

function NewMeetupPage() {
   const navigate = useNavigate();


  function addMeetupHandler(meetupData) {
    fetch(
      "https://let-react-get-start-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
        navigate("/", {replace: true});
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
