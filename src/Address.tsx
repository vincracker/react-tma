import { useTonAddress } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";

export const Address = () => {
  const userFriendlyAddress = useTonAddress();
  const [isHead, setIsHead] = useState(true);
  const [isFliping, setIsFliping] = useState(0);
  const [count, setCount] = useState(0);

  const [dots, setDots] = useState("");

  const checkResult = () => {
    const randomNumber = Math.floor(Math.random() * 2);
    if ((randomNumber == 0 && isHead) || (randomNumber == 1 && !isHead)) {
      setIsFliping(2);
      setCount(count + 1);
    } else {
      setIsFliping(3);
    }
  };

  const flipCoin = () => {
    setIsFliping(1);
    setTimeout(() => {
      checkResult();
    }, 3000);
  };

  useEffect(() => {
    if (isFliping) {
      const interval = setInterval(() => {
        setDots((prev) => (prev.length >= 6 ? "" : prev + "."));
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isFliping]);

  return (
    userFriendlyAddress && (
      <div>
        {isFliping != 0 ? (
          <>
            {isFliping == 1 ? (
              <h2>Flipping{dots}</h2>
            ) : (
              <div>
                {isFliping == 2 && <h2>You Win!</h2>}
                {isFliping == 3 && <h2>You Lose!</h2>}
                <hr />
                <br></br>
                <button
                  onClick={() => {
                    setIsFliping(0);
                  }}
                >
                  Back
                </button>
              </div>
            )}
          </>
        ) : (
          <>
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
                  width: "50%",
                  backgroundColor: isHead ? "#facd45" : "#808080",
                }}
              >
                HEADS
              </button>
              <button
                onClick={() => setIsHead(false)}
                style={{
                  width: "50%",
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
              <button onClick={flipCoin}>Flip the coin</button>
            </div>
            <p>Your point: {count}</p>
          </>
        )}
      </div>
    )
  );
};
