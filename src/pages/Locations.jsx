import React, { useEffect, useState } from "react";
import { useQueryParam, NumberParam } from "use-query-params";
// import { useHistory } from "react-router-dom";
// import Pagination from "../components/Pagination";
import * as location from "../services/locations";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [currentPaginate, setCurrentPaginate] = useQueryParam(
    "page",
    NumberParam
  );

  // const history = useHistory();

  const getData = (offset, limit, page) => {
    location
      .findAll({ offset, limit })
      .then((data) => {
        const { results, count } = data;
        setTotalItems(count);
        setLocations(results);
        setCurrentPage(page);
        setCurrentPaginate(page);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData(currentOffset, pageLimit, currentPaginate || currentPage);
  }, []);

  // const onPageChanged = (data) => {
  //   const { currentPage, pageLimit } = data;
  //   const page = currentPage === 0 ? currentPaginate : currentPage;

  //   let offset = 0;
  //   if (page !== 1) {
  //     offset = (page - 1) * pageLimit;
  //   }

  //   getData(offset, pageLimit, page);
  // };

  return (
    <div className="container d-flex flex-column">
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {locations.map((pok, index) => {
          // const pokemonId = pok.url.split("/")[6];
          // const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
          return (
            <div key={index} className="card w-25 mx-4 my-1">
              {/* <img
                src={imageUrl}
                alt={pok.name}
                width="100"
                className="m-auto"
              /> */}
              <h4 className="m-auto text-capitalize">{pok.name}</h4>
            </div>
          );
        })}
      </div>

      
      {/* <Pagination
        nextText="Next"
        previousText="Prev"
        pageSize={totalItems}
        limit={pageLimit}
        onChange={onPageChanged}
        current={currentPaginate || currentPage}
      /> */}
    </div>
  );
};

export default Locations;
