import { IoMdHome } from "react-icons/io";
import { LiaShareAltSolid } from "react-icons/lia";
import { MdPlayCircleFilled } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 pr-5">
      <Link to="/" className="">
        <IoMdHome className="text-2xl ml-2" />
        Home
      </Link>
      <Link to="/shorts" className="">
        <LiaShareAltSolid className="text-2xl ml-2" />
        Shorts
      </Link>
      <Link to="/suscriptions" className="">
        <MdPlayCircleFilled className="text-2xl ml-2" />
        Suscriptions
      </Link>
    </div>
  );
};

export default Sidebar;
