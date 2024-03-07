import { title } from "process";
import React, { Children } from "react";

export type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

export type CampSiteProps = {
  backgroundImg: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
};

export type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

export type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};
