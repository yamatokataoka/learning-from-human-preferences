import React from "react";
import Header from "./Header";

type Props = {
  title: string;
}

export default function Layout({ title }: Props): JSX.Element {
  return (
    <>
      <Header title={title} />
    </>
  );
}
