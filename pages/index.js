import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 1,
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153",
    address: "Some address 10, 12345 The City",
    description: "The first meetup",
  },
  {
    id: 2,
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153",
    address: "Some address 10, 12345 The City",
    description: "The second meetup",
  },
  {
    id: 3,
    title: "Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153",
    address: "Some address 10, 12345 The City",
    description: "The third meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

/*
export const getStaticProps = async () => {
  // fetch data from an API or a database
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, //the amount of seconds that Next.js will wait before regenerating the page in the occurence of an incoming request. (in the build process)
  };
};
*/

export const getServerSideProps = async (context) => {
  //This one will not run during the build
  //But instead will always run on the server after deployment
  //It makes sense to use getServerSideProps() mostly when there is data that changes constanly.
  //With static data that does not change frequently, getStaticProps() is a better option.

  const req = context.req;
  const res = context.res;

  console.log(req, res);

  // fetch data from an API or a database

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    //no 'revalidate' here.
  };
};

export default HomePage;
