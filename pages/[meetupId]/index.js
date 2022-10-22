import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  const img =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153";
  return (
    <MeetupDetail
      image={img}
      title="First Meetup"
      address="Some Address 6, 12345 The City"
      description="This is the first meetup"
    />
  );
};

export default MeetupDetails;
