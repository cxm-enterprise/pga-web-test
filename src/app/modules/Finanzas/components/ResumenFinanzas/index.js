import React from "react";
import Card from "../../components/partials/Card";

export default function Page({ handleShow, showVista }) {
  let className = ""
  showVista ? className = "d-flex flex-row flex-wrap justify-content-center mt-5" : className = "container d-block mt-5 px4 mx-4"

  return (
    <div className={className}>
      <Card ano="2021" handleShow={handleShow} />
      <Card ano="2020" handleShow={handleShow} />
      <Card ano="2019" handleShow={handleShow} />
    </div>
  );
}
