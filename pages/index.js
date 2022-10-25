import React from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // fetch data from an API or a database

  const client = await MongoClient.connect(
    "mongodb+srv://yilmazcite:XqvSqWpauha9lB9B@cluster0.dv2eb3x.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, //the amount of seconds that Next.js will wait before regenerating the page in the occurence of an incoming request. (in the build process)
  };
}

/*
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
*/

export default HomePage;
