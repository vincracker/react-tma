import dollarLogo from "./assets/dollar-1.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";
// import { Address } from "./Address";
import { Address } from "./Address";

const manifestUrl =
  "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

function App() {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          <TonConnectButton />
        </div>
        <h2>COIN FLIP GAME</h2>
        <div>
          <img src={dollarLogo} className="logo react" alt="Dollar logo" />
        </div>
        <div className="card">
          <Address />
        </div>
      </>
    </TonConnectUIProvider>
  );
}

export default App;
