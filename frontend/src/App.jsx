import { SignIn, SignInButton } from "@clerk/clerk-react";

const App = () => {
  return (
    <div className="">
      <h1>CodeBridge Live</h1>
      <SignInButton mode="modal" />
    </div>
  );
};

export default App;
