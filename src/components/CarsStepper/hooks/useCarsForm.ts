import { useForm } from "@mantine/form";
import type { CarsFormValues } from "./types";

export const useCarsForm = () => {
  const form = useForm<CarsFormValues>({
    initialValues: {
      brandsIds: [],
      modelsIds: [],
      bodiesIds: [],
      agree: false,
    },
    validate: {
      brandsIds: (v) => (v.length < 5 ? "Выберите минимум 5 марок" : null),
      modelsIds: (v) => (v.length < 5 ? "Выберите минимум 5 моделей" : null),
      agree: (v) => (v ? null : "Необходимо согласие"),
    },
    validateInputOnBlur: true,
  });

  const onBrandIdsChange = (value: string[]) => {
    form.setFieldValue("brandsIds", value);
    form.setFieldValue("modelsIds", []);
    form.setFieldValue("bodiesIds", []);
  };

  const onModelIdsChange = (value: string[]) => {
    form.setFieldValue("modelsIds", value);
    form.setFieldValue("bodiesIds", []);
  };

  const onBodyIdsChange = (value: string[]) => {
    form.setFieldValue("bodiesIds", value);
  };

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue("agree", e.currentTarget.checked);
  };

  return {
    form,
    onBrandIdsChange,
    onModelIdsChange,
    onBodyIdsChange,
    onCheckboxChange,
  };
};
