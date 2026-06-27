import { useState, useEffect, useCallback, useRef } from "react";

export const useTypewriter = (
  text: string,
  speed: number = 28,
  delay: number = 0,
  onComplete?: () => void,
) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  // Stable ref so changing onComplete doesn't restart the effect
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    setDisplayText("");
    setIsComplete(false);

    if (!text) return;

    const timeout = setTimeout(() => {
      let index = 0;
      interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
          onCompleteRef.current?.();
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  const reset = useCallback(() => {
    setDisplayText("");
    setIsComplete(false);
  }, []);

  return { displayText, isComplete, reset };
};
