import React, { useEffect, useState } from "react";
import SectionBlock from "../Shared/SectionBlock";

import SampleUseInputComponent from "./useInput/useInput";
import SampleUseTabsComponent from "./useTabs/useTabs";
import SampleUseTitleComponent from "./useTitle/useTitle";
import SampleUseClickComponent from "./useClick/useClick";
import SampleUseConfirmAndUsePreventLeaveComponent from "./useConfirm/both";
import SampleUseBeforeLeaveComponent from "./useBeforeLeave/useBeforeLeave";
import SampleUseFadeInComponent from "./useFadeIn/useFadeIn";
import SampleUseNetworkComponent from "./useNetwork/useNetwork";
import SampleUseFullScreenComponent from "./useFullscreen/useFullscreen";
import SampleUseClickOutsideComponent from "./useClickOutside/useClickOutside";

import useInputMd from "./useInput/useInput.md";
import useTabsMd from "./useTabs/useTabs.md";
import useTitleMd from "./useTitle/useTitle.md";
import useClickMd from "./useClick/useClick.md";
import useConfirmMd from "./useConfirm/useConfirm.md";
import useBeforeLeaveMd from "./useBeforeLeave/useBeforeLeave.md";
import useFadeInMd from "./useFadeIn/useFadeIn.md";
import useNetworkMd from "./useNetwork/useNetwork.md";
import useFullscreenMd from "./useFullscreen/useFullscreen.md";
import useClickOutside from "./useClickOutside/useClickOutside.md";
import Inner from "../Shared/Inner";

function CustomHooksPage() {
  const [md1, setMd1] = useState("");
  const [md2, setMd2] = useState("");
  const [md3, setMd3] = useState("");
  const [md4, setMd4] = useState("");
  const [md5, setMd5] = useState("");
  const [md6, setMd6] = useState("");
  const [md7, setMd7] = useState("");
  const [md8, setMd8] = useState("");
  const [md9, setMd9] = useState("");
  const [md10, setMd10] = useState("");
  useEffect(() => {
    fetch(useInputMd)
      .then((data) => data.text())
      .then((text) => {
        setMd1(text);
      });
    fetch(useTabsMd)
      .then((data) => data.text())
      .then((text) => {
        setMd2(text);
      });
    fetch(useTitleMd)
      .then((data) => data.text())
      .then((text) => {
        setMd3(text);
      });
    fetch(useClickMd)
      .then((data) => data.text())
      .then((text) => {
        setMd4(text);
      });
    fetch(useConfirmMd)
      .then((data) => data.text())
      .then((text) => {
        setMd5(text);
      });
    fetch(useBeforeLeaveMd)
      .then((data) => data.text())
      .then((text) => {
        setMd6(text);
      });
    fetch(useFadeInMd)
      .then((data) => data.text())
      .then((text) => {
        setMd7(text);
      });
    fetch(useNetworkMd)
      .then((data) => data.text())
      .then((text) => {
        setMd8(text);
      });
    fetch(useFullscreenMd)
      .then((data) => data.text())
      .then((text) => {
        setMd9(text);
      });
    fetch(useClickOutside)
      .then((data) => data.text())
      .then((text) => {
        setMd10(text);
      });
  }, []);

  return (
    <Inner>
      <SectionBlock md={md1} ExampleComponent={SampleUseInputComponent} />
      <SectionBlock md={md2} ExampleComponent={SampleUseTabsComponent} />
      <SectionBlock md={md3} ExampleComponent={SampleUseTitleComponent} />
      <SectionBlock md={md4} ExampleComponent={SampleUseClickComponent} />
      <SectionBlock
        md={md5}
        ExampleComponent={SampleUseConfirmAndUsePreventLeaveComponent}
      />
      <SectionBlock md={md6} ExampleComponent={SampleUseBeforeLeaveComponent} />
      <SectionBlock md={md7} ExampleComponent={SampleUseFadeInComponent} />
      <SectionBlock md={md8} ExampleComponent={SampleUseNetworkComponent} />
      <SectionBlock md={md9} ExampleComponent={SampleUseFullScreenComponent} />
      <SectionBlock
        md={md10}
        ExampleComponent={SampleUseClickOutsideComponent}
      />
    </Inner>
  );
}

export default CustomHooksPage;
