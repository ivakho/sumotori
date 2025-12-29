import { Checkbox, Stack, Text } from "@mantine/core";
import { useCarsFiltersContext } from "../../hooks/useCarsFilterContext";
import styles from "./StepConfirm.module.scss";
import { idsToLabels } from "../../functions";
import { SectionTitle } from "../../../ui";

export const StepConfirm = () => {
  const { form, labelMaps, onChange } = useCarsFiltersContext();

  const brandLabels = idsToLabels(
    form.values.brandsIds,
    labelMaps.brandLabelMap
  );
  const modelLabels = idsToLabels(
    form.values.modelsIds,
    labelMaps.modelLabelMap
  );
  const bodyLabels = idsToLabels(form.values.bodiesIds, labelMaps.bodyLabelMap);

  return (
    <Stack gap="xl">
      <SectionTitle>Подтвердите выбор</SectionTitle>
      <Stack gap={24}>
        <Stack gap="md">
          <div className={styles.category}>
            <Text className={styles.label}>Марки</Text>
            <Text className={styles.text}>{brandLabels.join(", ")}</Text>
          </div>
          <div className={styles.category}>
            <Text className={styles.label}>Модели</Text>
            <Text className={styles.text}>{modelLabels.join(", ")}</Text>
          </div>
          <div className={styles.category}>
            <Text className={styles.label}>Кузова</Text>
            <Text className={styles.text}>
              {bodyLabels.length ? bodyLabels.join(", ") : "—"}
            </Text>
          </div>
        </Stack>
        <Checkbox
          classNames={{ label: styles.checkbox }}
          label="Согласен на всё"
          checked={form.values.agree}
          onChange={onChange.onCheckboxChange}
        />
      </Stack>
    </Stack>
  );
};
