import React, { useState } from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const Search = ({ setShowSearch }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  let data = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  // if (!query.length) {
  //   data = null;
  // }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          placeholder="Search For Products"
          value={query}
          onChange={onChange}
          autoFocus
        />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>

      <div className="search-result-content">
        {!query.length && (
          <div className="start-msg">
            Start typing to see products you are looking for.
          </div>
        )}

        <div className="search-results">
          {data?.data?.map((item) => (
            <div
              className="search-result-item"
              key={item.id}
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="img-container">
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    item.attributes.img.data[0].attributes.url
                  }
                  alt=""
                />
              </div>

              <div className="product-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
                <span className="price">&#8377;{item.attributes.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

// import React, { useState } from "react";
// import { MdClose } from "react-icons/md";
// import "./Search.scss";
// import useFetch from "../../../hooks/useFetch";
// import { useNavigate } from "react-router-dom";

// const Search = ({ setSearchModal }) => {
//     const [query, setQuery] = useState("");
//     const navigate = useNavigate();

//     const onChange = (e) => {
//         setQuery(e.target.value);
//     };

//     let { data } = useFetch(
//         `/api/products?populate=*&filters[title][$contains]=${query}`
//     );

// if (!query.length) {
//     data = null;
// }

//     return (
//         <div className="search-modal">
//             <div className="form-field">
//                 <input
//                     autoFocus
//                     type="text"
//                     placeholder="Search for products"
//                     value={query}
//                     onChange={onChange}
//                 />
//                 <MdClose
//                     className="close-btn"
//                     onClick={() => setSearchModal(false)}
//                 />
//             </div>
//             <div className="search-result-content">
//                 {!data?.data?.length && (
//                     <div className="start-msg">
//                         Start typing to see products you are looking for.
//                     </div>
//                 )}
//                 <div className="search-results">
//                     {data?.data?.map((item) => (
//                         <div
//                             className="search-result-item"
//                             key={item.id}
//                             onClick={() => {
//                                 navigate("/product/" + item.id);
//                                 setSearchModal(false);
//                             }}
//                         >
//                             <div className="image-container">
//                                 <img
//                                     src={
//                                         process.env
//                                             .REACT_APP_STRIPE_APP_DEV_URL +
//                                         item.attributes.image.data[0].attributes
//                                             .url
//                                     }
//                                 />
//                             </div>
//                             <div className="prod-details">
//                                 <span className="name">
//                                     {item.attributes.title}
//                                 </span>
//                                 <span className="desc">
//                                     {item.attributes.description}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Search;
