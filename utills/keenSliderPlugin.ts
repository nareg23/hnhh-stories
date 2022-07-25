import { KeenSliderPlugin } from "keen-slider";

export const WheelControls: KeenSliderPlugin = (slider) => {
  let touchTimeout: ReturnType<typeof setTimeout>;
  let position: {
    x: number;
    y: number;
  };
  let wheelActive: boolean;

  function dispatch(e: WheelEvent, name: string) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    );
  }

  function wheelStart(e: WheelEvent) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, "ksDragStart");
    console.log("wheelstart");
  }

  function wheel(e: WheelEvent) {
    dispatch(e, "ksDrag");
    console.log("wheel");
  }

  function wheelEnd(e: WheelEvent) {
    dispatch(e, "ksDragEnd");
    console.log("wheelend");
  }

  function eventWheel(e: WheelEvent) {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
    console.log("eventWheel");
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    });
  });
};
