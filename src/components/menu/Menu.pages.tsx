import { Icons } from "@components/icon/Icon.types";

import Button from "./components/button/Button";
import MenuLabel from "./components/menuLabel/MenuLabel";
import type { MenuPages } from "./Menu.types";

export const menuPages: MenuPages = (setPage, goBack, page) => {
  return (
    {
      initial: (
        <>
          <Button
            icon={Icons.Play}
            label="Play"
            description="Let's goooooo."
            onClick={(): void => setPage("play")}
          />
          <Button
            icon={Icons.Info}
            label="About"
            description="Learn more about this project!"
            onClick={(): void => setPage("about")}
          />
        </>
      ),
      play: (
        <>
          <Button
            icon={Icons.People}
            label="Play with friend"
            description="If u got one."
            onClick={(): void => setPage("main")}
          />
          <Button
            icon={Icons.Robot}
            label="Play with AI"
            description="Actually it's just min max algorithm."
            onClick={(): void => setPage("main")}
          />
          <Button
            icon={Icons.Play}
            label="Play with others"
            description="Coming soon."
            disabled
          />
          <Button
            icon={Icons.Back}
            label="Go back"
            description="Nah bro let's go back."
            onClick={goBack}
          />
        </>
      ),
      about: (
        <>
          <MenuLabel
            label="About"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type specimen
        book."
          />
          <Button icon={Icons.Back} label="Go back" onClick={goBack} />
        </>
      ),
    }[page] ?? <></>
  );
};

// const pages: Record<Pages, JSX.Element> = {
//   play: (
//     <>
// <Button
//   icon={Icons.People}
//   label="Play with friend"
//   description="If u got one."
//   onClick={(): void => setPage("main")}
// />
// <Button
//   icon={Icons.Robot}
//   label="Play with AI"
//   description="Actually it's just min max algorithm."
//   onClick={(): void => setPage("main")}
// />
// <Button
//   icon={Icons.Back}
//   label="Go back"
//   description="Nah bro let's go back."
//   onClick={(): void => setPage("main")}
// />
//     </>
//   ),
//   about: (
// <>
//   <Label />
//   <Button icon={Icons.Back} label="Go back" onClick={(): void => setPage("main")} />
// </>
//   ),
//   main: (
//     <>
//       <Button
//         icon={Icons.Play}
//         label="Play"
//         description="Let's goooooo."
//         onClick={(): void => setPage("play")}
//       />
//       <Button
//         icon={Icons.Info}
//         label="About"
//         description="Learn more about this project!"
//         onClick={(): void => setPage("about")}
//       />
//     </>
//   ),
//   initial: <></>,
// };
