import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyWord, setKeyWord] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyWord.trim()) {
      history.push(`/search/${keyWord}`);
    } else {
      history.push("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyWord(e.target.value)}
        placeholder="Search Products"
        className="mr-sm-3 mt-sm-3 search-box"
      ></Form.Control>
      <Button type="submit" className="p-2 btn-orange mt-sm-3">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
