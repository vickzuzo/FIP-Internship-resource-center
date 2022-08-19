import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

const HomeLayout = () => {
  const [show, setShow] = useState(false);

  const handleShow = (bool?: boolean) => {
    setShow(bool ?? !show);
  };

  return (
    <React.Fragment>
      <Header show={show} handleShow={handleShow} />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default HomeLayout;
