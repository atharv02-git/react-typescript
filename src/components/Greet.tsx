// so if there is no need to pass prop in app.js then the way we do it is that we add a ? 

type GreetProps = {
  name: string;
  messageCount? : number;
  isLoggedin: boolean;
};

export default function Greet(props: GreetProps) {
  const {messageCount = 0} = props;
  return (
    <div>
      <h2>
        {props.isLoggedin
          ? `Welcome ${props.name}! You have ${messageCount} unread messages.`
          : "Welcome Guest"}
      </h2>
    </div>
  );
}
