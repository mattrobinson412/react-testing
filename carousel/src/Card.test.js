import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
    render(<Card />);
    let card = document.querySelector(".Card");
    expect(card).toBeInTheDocument();
});

it("matches snapshot", function() {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });