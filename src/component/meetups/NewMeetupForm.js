import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import {useRef} from 'react'


function NewMeetupForm(props) {
    const titleInputRef = useRef("");
    const imageInputRef = useRef("");
    const addressInputRef = useRef("");
    const descriptionInputRef = useRef("");

    function submitHandler(event){
        event.preventDefault();
        const eneredTitle = titleInputRef.current.value;
        const eneredImage = imageInputRef.current.value;
        const eneredAddress = addressInputRef.current.value;
        const eneredDescription = descriptionInputRef.current.value;

        const meetupData= {
            title: eneredTitle,
            image: eneredImage,
            address : eneredAddress,
            description: eneredDescription

        }

        props.onAddMeetup(meetupData);

    }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
            <button className={classes.button}>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
