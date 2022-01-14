type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedin: boolean;
};

export default function Greet(props: GreetProps) {
  return (
    <div>
      <h2>
        {props.isLoggedin
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages.`
          : "Welcome Guest"}
      </h2>
    </div>
  );
}
