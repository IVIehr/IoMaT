import { NavLink } from 'react-router-dom';
import './modal.css';

function ResultModal({ handleClose, show, data}){
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main p-4 rounded-3 w-50">
        <h5 className='text-center text-info'>نتایج جستجو</h5>
        <ul className='mt-4 text-end'>
        {data ?
         data.map((product) => {
            return(
                <>  
                <li className='text-dark'>
                    <NavLink to={`/ports/${product.id}`}>{product.title}</NavLink>
                </li>
                </>
            )
            })
         : <li>no</li>}
        </ul>
        <button className='btn btn-outline-info mt-4' type="button" onClick={handleClose}>
          برگشت
        </button>
      </section>
    </div>
  );
};

export default ResultModal;