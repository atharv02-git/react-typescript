/** left-center | left-top | left-bottom | center | right-center | right-top | right-bottom*/
// Instead of using PositionProps as above we can do things more efficiently

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastPositionProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastPositionProps) => {
  return <div>Toast notification position - {position}</div>;
};
