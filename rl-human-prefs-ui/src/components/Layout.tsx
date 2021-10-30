import React from "react";
import Header from "./Header";

export default function Layout({ title }: { title: string }): JSX.Element {
  return (
    <>
      <Header title={title} />
    </>
  );
}
