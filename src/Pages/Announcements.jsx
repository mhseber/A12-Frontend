import { IoNotificationsSharp } from "react-icons/io5";
import useAnno from "../Hooks/useAnno";

const Announcements = () => {
    const [anno] = useAnno();
    const announcements = anno.filter(item => item.category === 'announcements')
    return (
        <div>
            <h1 className="flex text-4xl font-extrabold pt-5 pl-5"><IoNotificationsSharp />Announcements</h1>
        </div>
    );
};

export default Announcements;