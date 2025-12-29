import { Stack } from "@mantine/core";
import { useCarsFiltersContext } from "../../hooks/useCarsFilterContext";
import { pickRandomLabel } from "../../functions";
import { SectionTitle } from "../../../ui";

export const StepResult = () => {
  const { form, labelMaps } = useCarsFiltersContext();

  const brand = pickRandomLabel(form.values.brandsIds, labelMaps.brandLabelMap);
  const model = pickRandomLabel(form.values.modelsIds, labelMaps.modelLabelMap);
  const body = pickRandomLabel(form.values.bodiesIds, labelMaps.bodyLabelMap);

  const randomResult = [brand, model, body].filter(Boolean).join(" ");

  return (
    <Stack gap="xl">
      <SectionTitle>Ну ладно, звезды говорят тебе брать</SectionTitle>
      <SectionTitle>{randomResult}</SectionTitle>
    </Stack>
  );
};
