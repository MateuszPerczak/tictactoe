import { Fragment, memo, useMemo } from "react";

import StyledFooter from "./Footer.styles";

const Footer = (): JSX.Element => {
  const description = useMemo<string[]>(() => {
    const year = new Date().getFullYear();
    return ["v2.0.0", "GPL-3.0", year.toString(), "© Mateusz Perczak"];
  }, []);

  return (
    <StyledFooter>
      <a
        className="title-link"
        href="https://github.com/MateuszPerczak/tictactoe"
        rel="noopener noreferrer"
        target="_blank"
      >
        TicTacToe
      </a>
      <span className="text-wrapper">
        {description.map((text, index, textArray) => (
          <Fragment key={`footer-text-${index}`}>
            <span>{text}</span>
            {textArray.at(-1) !== text && <span>|</span>}
          </Fragment>
        ))}
      </span>
    </StyledFooter>
  );
};

export default memo(Footer);
