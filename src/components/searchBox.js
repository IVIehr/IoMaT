import { useState, useEffect, React} from "react";
import { ToastContainer, toast } from "react-toastify";
import  ResultModal  from "../modal/ResultModal";

const SearchBox = () => {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [search, setSerach] = useState();
    let componentMouted = true;

    useEffect(() => {
        const getProducts = async () => {
          const response = await fetch("https://fakestoreapi.com/products");
          if (componentMouted === true) {
            setData(await response.clone().json());
          }
          return () => {
            componentMouted = false;
          };
        };
        getProducts();
      }, []);

      const hideModal = () => {
        setShow(false);
      };


    const proceedTeaching = (e) => {
        e.preventDefault();
        var filtered;
        if(value){
          filtered = data.filter(m => m.title.toLowerCase().includes(value.toLowerCase()));
        }
        if(filtered.length != 0){
            setShow(true);
            setSerach(filtered)
        }
        else{
          toast("آموزش مورد نظر یافت نشد");
        }
      };
    
      const handleSearch = (query) =>{
        setValue(query);
      }
    return ( 
        <form className="input-group mb-3">
            <input 
                type="text"
                className="form-control"
                placeholder='جستجوی آموزش...'
                aria-label="Recipient's username"
                onChange={e => handleSearch(e.currentTarget.value)}
                aria-describedby="button-addon2"/>
            <button 
                className="btn btn-success"
                type="submit"
                id="button-addon2"
                onClick={e => proceedTeaching(e)}
                >جستجو
            </button>
            <ToastContainer />
            <ResultModal show={show} handleClose={hideModal} data={search}/>
        </form>
     );
}
 
export default SearchBox;