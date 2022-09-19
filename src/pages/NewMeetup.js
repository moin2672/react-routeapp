import NewMeetupForm from "../component/meetups/NewMeetupForm";

// https://let-react-get-start-default-rtdb.firebaseio.com/

function NewMeetupPage() {
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
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
