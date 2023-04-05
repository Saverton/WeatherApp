import React from "react";
import { ZipCodeState } from "../types";

export const ZipCodeSearchContext = React.createContext<ZipCodeState>({
  zipcode: '',
  setZipcode: () => { },
  valid: false
});