import SeferSearch from "../../components/form/SeferSearch";
import Spacer from "../../components/Spacer";
import Fırsatlar from "../../components/user/indirimler/Fırsatlar";
import FaQuestion from "../../components/user/sorular/FaQuestion";

const SearchTicket = () => {
  return (
    <div className="container mx-auto px-4 py-12">
     
<div className="bg-orange-100 rounded-xl shadow-lg w-full h-[500px] mx-auto flex justify-center items-center">
      <div className="container mx-auto w-full h-full flex justify-center items-center">
        <SeferSearch />
      </div>
      </div>
      <Spacer />
      <Fırsatlar />
      <Spacer />
      <FaQuestion />
    </div>
  );
};

export default SearchTicket; 