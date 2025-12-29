import { Title } from "@mantine/core";
import type { SectionTitleProps } from "./types";

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <Title order={5} size={22} ta="center" c={"#212529"}>
      {children}
    </Title>
  );
};
