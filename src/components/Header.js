import { FaBars } from "react-icons/fa";
import logo from "../images/logo2.png";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchInput } from "../store/dataSlice";

const Header = () => {
  const searchTerm = useSelector((state) => state.items.searchTerm);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeSearchInput(e.target.value));
  };

  return (
    <div className="w-[95%] mx-auto sticky top-0 left-0 h-[4rem] bg-[#0c2446] flex justify-between items-center">
      <div className="flex items-center gap-5">
        <FaBars className="text-2xl" />
        <img className="w-28" src={logo} alt="youtube log" />
      </div>
      <div>
        <input
          className="w-[30rem] bg-[#0c2446] outline-none py-2 px-4 border-[2px] border-gray-500 rounded-l-3xl"
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={searchTerm}
        />
        <button className=" bg-[#0c2446]  font-semibold py-2 border-[2px] rounded-r-3xl border-gray-500 border-l-0 px-4">
          Search
        </button>
      </div>
      <div>
        <button>SignUp</button>
      </div>
    </div>
  );
};

export default Header;
