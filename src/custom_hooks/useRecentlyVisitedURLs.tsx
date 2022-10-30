import { useState } from "react";

const useRecentlyVisitedURLs = () => {
  const [listOfFiveLastVisitedURLs, setListOfFiveLastVisitedURLs] = useState(
    []
  );
  let currentURL: string = window.location.href.split(":3000")[1]; //.com
  //   let prevURL: string = document.referrer.split(":3000")[1]; //.com
  //   localStorage.setItem();

  if (listOfFiveLastVisitedURLs.length > 10) {
    listOfFiveLastVisitedURLs.pop();
  }

  setListOfFiveLastVisitedURLs([...listOfFiveLastVisitedURLs].concat());
  //   return listOfFiveLastVisitedURLs.map((v) => ({ title: v, href: v }));
};

export default useRecentlyVisitedURLs;
