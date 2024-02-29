import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/Hooks/Chatter";

export type Props = {
  children: React.ReactNode;
   page: SelectedPage; // New prop for dynamic page
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage,page }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-btn-500 py-1 px-4 text-white hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(page)}
      href={`#${page}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;