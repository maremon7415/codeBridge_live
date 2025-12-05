import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: 380,
          padding: 24,
          border: "1px solid #e6e6e6",
          borderRadius: 8,
        }}
      >
        <h1 style={{ margin: 0, marginBottom: 16 }}>
          CodeBridge Live — Test Login
        </h1>

        <SignedOut>
          <div style={{ display: "flex", gap: 8 }}>
            <SignInButton mode="modal">
              <button style={{ padding: "8px 12px" }}>Sign in</button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button style={{ padding: "8px 12px" }}>Sign up</button>
            </SignUpButton>

            <button
              style={{ padding: "8px 12px" }}
              onClick={() => {
                // Quick hint for test users
                alert(
                  "Create a test user via Sign up, or use the Clerk dashboard to add a test user."
                );
              }}
            >
              Test user
            </button>
          </div>
        </SignedOut>

        <SignedIn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            <div>
              <strong>Signed in</strong>
              <div style={{ fontSize: 12 }}>
                You are signed in — open the user menu to view profile or sign
                out.
              </div>
            </div>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </div>
  );
};

export default App;
