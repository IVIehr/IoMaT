import { useState, useEffect, React } from "react";
import useGetBoatByName from "../../../hooks/boat/useGetBoatByName";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = ({ handleResult }) => {
  const [value, setValue] = useState("");
  const [name, setName] = useState();
  const { data, isLoading, refetch } = useGetBoatByName({ vesselName: name });

  useEffect(() => {
    refetch();
    if (data) {
      handleResult(data.data);
    }
  }, [name, data]);

  const proceedSearch = (e) => {
    e.preventDefault();
    if (value) {
      setName(value);
    }
    let inputValue = document.getElementById("searchInput");
    inputValue.value = '';
  };

  const handleSearch = (query) => {
    setValue(query);
  };
  return (
    <form className="input-group">
      <input
        type="text"
        id="searchInput"
        className="form-control"
        placeholder={"جستجوی کشتی..."}
        aria-label="Recipient's username"
        onChange={(e) => handleSearch(e.currentTarget.value)}
        aria-describedby="button-addon2"
        style={{borderRadius: "5px", borderTopLeftRadius: "0", borderBottomLeftRadius: "0"}}
      />
      <button
        className="btn btn-dark"
        type="submit"
        id="button-addon2"
        onClick={(e) => proceedSearch(e)}
        style={{borderRadius: "5px", borderTopRightRadius: "0", borderBottomRightRadius: "0"}}
      >
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <div className="custom-spinner" style={{width: "1.3rem", height: "1.3rem"}}></div>
          </div>
        ) : (
          <AiOutlineSearch />
        )}
      </button>
    </form>
  );
};

export default SearchBox;
