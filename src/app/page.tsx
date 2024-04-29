"use client";

import styles from "./page.module.css";
import SearchComponent from "../../components/SearchComponent";
import Header from "../../components/Header";



export default function Home(): JSX.Element {

  return (
    <>
    <div>
      <Header />
      <SearchComponent />
      
    </div>
    </>
  );
}
