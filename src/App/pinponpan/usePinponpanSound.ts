import { useMemo } from "react";
import useSound from "use-sound";

const click = "/sound/click1.wav";
const pin = "/sound/pin.mp3";
const pon = "/sound/pon.mp3";
const pan = "/sound/pan.mp3";
const un = "/sound/un.mp3";
const ko = "/sound/ko.mp3";

export const usePinponpanSound = () => {
  const [playClick, { sound: clickSound }] = useSound(click);
  const [playPin, { sound: pinSound }] = useSound(pin);
  const [playPon, { sound: ponSound }] = useSound(pon);
  const [playPan, { sound: panSound }] = useSound(pan);
  const [playUn, { sound: unSound }] = useSound(un);
  const [playKo, { sound: koSound }] = useSound(ko);
  const isReady = useMemo(
    () =>
      clickSound && pinSound && ponSound && panSound && unSound && koSound
        ? true
        : false,
    [clickSound, pinSound, ponSound, panSound, unSound, koSound]
  );

  return {
    playClick,
    playPin,
    playPon,
    playPan,
    playUn,
    playKo,
    isReady,
  };
};
