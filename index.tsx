import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { Wrapper } from "./Wrapper";
import { TableRowContents } from "./TableRowContents";
import { ButtonGroup } from "./ButtonGroup";

type Props = {
  className?: string;
  items: { id: string; name: string }[];
};

const StyledTableRow = styled.tr``;

const Component: React.ComponentType<Props> = ({ className, items }: Props) => (
  <div className={className}>
    <table>
      <thead />
      <tbody>
        {items.map(({ id, name }) => (
          <Wrapper
            key={id}
            popup={
              <ButtonGroup>
                <button>{name}</button>
                <button>{name}</button>
              </ButtonGroup>
            }
          >
            {(ref, onMouseEnter, onMouseLeave) => (
              <StyledTableRow
                ref={ref}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <TableRowContents name={name} />
              </StyledTableRow>
            )}
          </Wrapper>
        ))}
      </tbody>
    </table>
  </div>
);

const App = styled(Component)<Props>`
  ${StyledTableRow} {
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
`;

const items = [
  { id: "1", name: "foo1" },
  { id: "2", name: "foo2" },
  { id: "3", name: "foo3" },
  { id: "4", name: "foo4" }
];
ReactDOM.render(<App items={items} />, document.getElementById("root"));
