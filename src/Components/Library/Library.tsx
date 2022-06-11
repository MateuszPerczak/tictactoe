import type { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

type LibraryProps = PropsWithChildren<{}>;

const StyledLibrary = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 30px;
  font-size: 1.3rem;
  backdrop-filter: blur(4px);
  background-color: #21212144;
  border: 2px solid #fff;
`;

const Library: FC<LibraryProps> = ({ ...rest }): JSX.Element => {
  return <StyledLibrary {...rest} />;
};

export default Library;
