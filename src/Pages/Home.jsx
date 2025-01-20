import AllTags from "./AllTags";
import Announcements from "./Announcements";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllTags></AllTags>
            <Announcements></Announcements>
        </div>
    );
};

export default Home;