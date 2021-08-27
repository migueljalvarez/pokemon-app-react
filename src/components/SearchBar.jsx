import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, FormControl } from "react-bootstrap";

const SearchBar = ({ filter, handleChange, searchTerm }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchTerm.length > 0) dispatch(filter(0, 10, "name", searchTerm.toLowerCase()));
  }, [searchTerm, dispatch, filter]);

  return (
    <div>
      <Form className="d-flex my-2">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </Form>
    </div>
  );
};

export default SearchBar;
