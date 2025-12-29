import { Stack, Text } from "@mantine/core";
import styles from "./StepLoader.module.scss";
import { SectionTitle } from "../../../ui";

export const StepLoader = () => {
  return (
    <Stack gap="xl">
      <SectionTitle>
        Поздравляем, Шарик!
        <span style={{ display: "block" }}>Ты — балбес!</span>
      </SectionTitle>
      <Text className={styles.text}>Не, ну кто так тачку выбирает то..</Text>
    </Stack>
  );
};
