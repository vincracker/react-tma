import { useTonAddress } from "@tonconnect/ui-react";
import { useState } from "react";

export const Address = () => {
  const userFriendlyAddress = useTonAddress();
  const [isHead, setIsHead] = useState(true);

  return (
    userFriendlyAddress && (
      <div>
        <p>I like</p>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setIsHead(true)}
            style={{
              width: "40%",
              backgroundColor: isHead ? "#facd45" : "#808080",
            }}
          >
            HEADS
          </button>
          <button
            onClick={() => setIsHead(false)}
            style={{
              width: "40%",
              backgroundColor: !isHead ? "#facd45" : "#808080",
            }}
          >
            TAILS
          </button>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <button>Flip the coin</button>
        </div>
        <p>Double Or Nothing</p>
      </div>
    )
  );
};
