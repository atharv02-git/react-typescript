type ButtonProps = {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export function Button(props: ButtonProps) {
  return (
    <div>
      <button onClick={(event) => props.clickHandler(event,1)}>click</button>
    </div>
  );
}
