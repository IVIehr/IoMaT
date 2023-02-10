import { NavLink } from "react-router-dom";

function SearchResult({filtered}) {
    const ShowProducts = () => {
        return (
          <>
            {filtered.map((product) => {
              return (
                <>
                  <div key={product.id} className="col-md-3 mb-4">
                    <div className="card h-100 text-center p-4" key={product.id}>
                      <img
                        src={product.image}
                        alt={product.title}
                        height="250px"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title mb-0">
                          {product.title.substring(0, 12)}...
                        </h5>
                        <p className="card-text lead fw-bold">${product.price}</p>
                        <NavLink
                          to={`/products/${product.id}`}
                          className="btn btn-outline-dark"
                        >
                          مشاهده کنید
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        );
      };
    
      return (
        <div className="container my-5 py-5">
            <h2>نتایج جستجو</h2>
            <div className="row d-flex justify-content-center">
                <ShowProducts/>
            </div>
        </div>
      );
}

export default SearchResult