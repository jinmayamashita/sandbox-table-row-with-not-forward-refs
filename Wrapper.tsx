// @flow
import * as React from "react";
import * as ReactDom from "react-dom";
import { Manager, Reference, Popper } from "react-popper";

type Props = {
  popup: React.ReactNode;
  children: (
    ref: React.Ref<any>,
    onMouseEnter: (e: React.SyntheticEvent<EventTarget>) => void,
    onMouseLeave: (e: React.SyntheticEvent<EventTarget>) => void
  ) => React.ReactNode | React.ReactNode;
};

const modifiers = [{ boundariesElement: "viewport" }];

export const Wrapper = ({ popup, children }: Props) => {
  const [isPopupVisible, setIsPopupVisible] = React.useState(false);

  const onMouseEnter = React.useCallback(
    (e: React.SyntheticEvent<EventTarget>) => {
      setIsPopupVisible(true);
    },
    [setIsPopupVisible]
  );

  const onMouseLeave = React.useCallback(
    (e: React.SyntheticEvent<EventTarget>) => {
      setIsPopupVisible(false);
    },
    [setIsPopupVisible]
  );

  return (
    <Manager>
      <Reference>
        {({ ref }): React.ReactNode =>
          children(ref, onMouseEnter, onMouseLeave)
        }
      </Reference>

      {isPopupVisible
        ? ReactDom.createPortal(
            <Popper placement="right" modifiers={modifiers}>
              {({ ref, style, placement }) => (
                <div
                  ref={ref}
                  style={style}
                  data-placement={placement}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  {popup}
                </div>
              )}
            </Popper>,
            document.getElementById("portal-root")
          )
        : null}
    </Manager>
  );
};
