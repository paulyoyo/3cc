import React from "react";
import FadeAnimations from "./Animations/FadeAnimations";
import AppearDown from "./Animations/AppearDown";
import RevealImages from "./Animations/RevealImages";
import SplitTextAnimations from "./Animations/SplitTextAnimations";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <FadeAnimations />
      <AppearDown />
      <RevealImages />
      <SplitTextAnimations />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
