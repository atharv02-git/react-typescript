// Here generic comes into play where its a way to tell ts that the type of items and onClick handler item can vary and generics are the wat to do
// SO after using generics we can pass any type we want

type ListProps<T> = {
  // items: string[] | number[]
  // onClick: (value: string | number) => void
  items: T[];
  onClick: (value: T) => void;
};
export const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  //if we want to extract the id from our object of any type
  // export const List = <T extends {}>({ items, onClick}: ListProps<T>) => {
  // export const List = <T extends string | number>({ items, onClick}: ListProps<T>) => { //If we want array of string | number
  return (
    <>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          <ul>
            <li key={item.id} onClick={() => onClick(item)}>
              {item}
            </li>
          </ul>
        );
      })}
    </>
  );
};
