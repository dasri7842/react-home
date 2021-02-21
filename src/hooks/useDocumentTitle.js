import { useEffect } from "react";
import { CompanyName } from "./../constants/Constants";

const useDocumentTitle = (title) => {
  useEffect(() => {
    if (title) document.title = CompanyName + " | " + title;
  }, [title]);
};

export default useDocumentTitle;
