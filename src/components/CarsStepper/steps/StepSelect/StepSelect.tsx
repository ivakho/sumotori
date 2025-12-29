import { Stack, MultiSelect, Loader } from "@mantine/core";
import { useCarsFiltersContext } from "../../hooks/useCarsFilterContext";
import styles from "./StepSelect.module.scss";
import { SectionTitle } from "../../../ui";

export const StepSelect = () => {
  const { form, onChange, options, loading, error, search } =
    useCarsFiltersContext();

  const brandsCount = form.values.brandsIds.length >= 5;
  const modelsCount = form.values.modelsIds.length >= 5;
  const bodiesCount = form.values.bodiesIds.length > 0;

  const brandsPlaceholder = brandsCount ? "" : "Выберите минимум 5 марок";
  const modelsPlaceholder = !brandsCount
    ? "Сначала выберите марки"
    : modelsCount
    ? ""
    : "Выберите 5 моделей";
  const bodiesPlaceholder = !modelsCount
    ? "Сначала выберите модели"
    : bodiesCount
    ? ""
    : "Выберите кузова";

  return (
    <form>
      <Stack gap="xl">
        <SectionTitle>Подберите машину</SectionTitle>
        <Stack gap={8}>
          <MultiSelect
            classNames={{
              label: styles.label,
            }}
            label="Марки"
            withAsterisk
            required
            placeholder={brandsPlaceholder}
            value={form.values.brandsIds}
            onChange={onChange.onBrandIdsChange}
            data={options.brandsOptions}
            rightSection={loading.brandsLoading ? <Loader size="xs" /> : null}
            error={error.brandsError ? "Ошибка загрузки марок" : null}
            searchable
            searchValue={search.brandSearch}
            onSearchChange={search.setBrandSearch}
            clearable
          />
          <MultiSelect
            classNames={{
              label: styles.label,
            }}
            label="Модели"
            withAsterisk
            required
            placeholder={modelsPlaceholder}
            disabled={form.values.brandsIds.length < 5}
            value={form.values.modelsIds}
            onChange={onChange.onModelIdsChange}
            data={options.modelsOptions}
            rightSection={loading.modelsLoading ? <Loader size="xs" /> : null}
            error={error.modelsError ? "Ошибка загрузки моделей" : null}
            searchable
            searchValue={search.modelSearch}
            onSearchChange={search.setModelSearch}
            clearable
          />
          <MultiSelect
            classNames={{
              label: styles.label,
            }}
            label="Кузова"
            placeholder={bodiesPlaceholder}
            disabled={form.values.modelsIds.length < 5}
            value={form.values.bodiesIds}
            onChange={onChange.onBodyIdsChange}
            data={options.bodiesOptions}
            rightSection={loading.bodiesLoading ? <Loader size="xs" /> : null}
            error={error.bodiesError ? "Ошибка загрузки кузовов" : null}
            searchable
            searchValue={search.bodySearch}
            onSearchChange={search.setBodySearch}
            clearable
          />
        </Stack>
      </Stack>
    </form>
  );
};
