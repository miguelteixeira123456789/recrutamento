import { Anchor } from "@mantine/core";
import { PropsWithChildren } from "react";
import classes from "@/styles/index.module.css";

interface LinkProps {
  href: string;
}

export function Link({ href, children }: PropsWithChildren<LinkProps>) {
  return (
    <Anchor
      className={classes.link + " transition-all duration-150"}
      href={href}
      underline="never"
      target="_blank"
    >
      {children}
    </Anchor>
  );
}
