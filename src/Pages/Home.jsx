import { Helmet } from "react-helmet";
import AllTags from "./AllTags";
import Announcements from "./Announcements";
import Banner from "./Banner";
import AllLatestPosts from "./AllLatestPosts";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ThreadTales /\ Home</title>
            </Helmet>
            <Banner></Banner>
            <AllTags></AllTags>
            <Announcements></Announcements>
            <AllLatestPosts></AllLatestPosts>
        </div>
    );
};

export default Home;