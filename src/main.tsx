import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRoot, Placeholder } from "@telegram-apps/telegram-ui";
import App from "./App.tsx";
import { init } from "./init.tsx";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

const root = createRoot(document.getElementById("root")!);

try {
  const launchParams = retrieveLaunchParams();
  init(launchParams.startParam === "debug" || import.meta.env.DEV);

  root.render(
    <StrictMode>
      <AppRoot>
        <Placeholder header="Jim-test">
          <App />
        </Placeholder>
      </AppRoot>
    </StrictMode>
  );
} catch {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
