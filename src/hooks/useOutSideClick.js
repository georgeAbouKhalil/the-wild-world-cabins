import { useEffect } from "react";
import { useRef } from "react";

export function useOutSideClick(handler, listingCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listingCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listingCapturing);
    },
    [handler, listingCapturing]
  );
  return ref;
}
