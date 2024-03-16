import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-full overflow-hidden">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
