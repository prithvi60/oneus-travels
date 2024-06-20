import { useState } from "react";
import { Popover, ArrowContainer } from "react-tiny-popover";

export default function PopoverComp() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["bottom", "right", "left", "top"]} // preferred positions by priority
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={"blue"}
          arrowSize={10}
          arrowStyle={{ opacity: 0.7 }}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div
            style={{ backgroundColor: "blue", opacity: 0.7 }}
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            Hi! I'm popover content. Here's my position: {position}.
          </div>
        </ArrowContainer>
      )}
    >
      <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Click me!</div>
    </Popover>
  );
}
