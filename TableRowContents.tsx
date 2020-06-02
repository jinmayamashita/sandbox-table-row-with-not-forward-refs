import * as React from "react";
import styled from "styled-components";

export type Props = {
  className?: string;
  name: "string";
  onMouseEnter: (e: React.SyntheticEvent<EventTarget>) => void;
  onMouseLeave: (e: React.SyntheticEvent<EventTarget>) => void;
};

const Component = ({ className, name }) => (
  <React.Fragment>
    <td>{name}</td>
  </React.Fragment>
);

export const TableRowContents = styled(Component)<Props>``;
