import * as React from "react";
import styled from "styled-components";

export type Props = {
  className?: string;
  children: React.ReactNode;
};

const Component = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export const ButtonGroup = styled(Component)<Props>``;
