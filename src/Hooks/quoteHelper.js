import { sample } from "lodash";

export const getQuote = () => {
  const quotes = [
    "Never gona give you up",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  return sample(quotes);
};
