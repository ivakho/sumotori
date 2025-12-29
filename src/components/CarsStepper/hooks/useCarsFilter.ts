import { useState } from "react";
import { useCarsForm } from "./useCarsForm";
import { useCarsBrandQuery } from "../../../hooks";
import { useCarsModelQuery } from "../../../hooks";
import { useCarsBodyQuery } from "../../../hooks";
import { DEFAULT_PAGE, DEFAULT_SIZE } from "../../../services";
import { toMap } from "../functions";

export const useCarsFilters = () => {
  const {
    form,
    onBrandIdsChange,
    onModelIdsChange,
    onBodyIdsChange,
    onCheckboxChange,
  } = useCarsForm();

  const [brandSearch, setBrandSearch] = useState("");
  const [modelSearch, setModelSearch] = useState("");
  const [bodySearch, setBodySearch] = useState("");

  const brandQuery = useCarsBrandQuery({
    search: brandSearch,
    page: DEFAULT_PAGE,
    size: DEFAULT_SIZE,
  });

  const modelQuery = useCarsModelQuery({
    search: modelSearch,
    page: DEFAULT_PAGE,
    size: DEFAULT_SIZE,
    brandsIds: form.values.brandsIds,
  });

  const bodyQuery = useCarsBodyQuery({
    search: bodySearch,
    page: DEFAULT_PAGE,
    size: DEFAULT_SIZE,
    modelsIds: form.values.modelsIds,
  });

  const brandsOptions = (brandQuery.data?.items ?? []).map((v) => ({
    value: v.id,
    label: v.name,
  }));

  const modelsOptions = (modelQuery.data?.items ?? []).map((v) => ({
    value: v.id,
    label: v.name,
  }));

  const bodiesOptions = (bodyQuery.data?.items ?? []).map((v) => ({
    value: v.id,
    label: v.name,
  }));

  const brandLabelMap = toMap(brandsOptions);
  const modelLabelMap = toMap(modelsOptions);
  const bodyLabelMap = toMap(bodiesOptions);

  const isButtonDisabled =
    form.values.brandsIds.length < 5 || form.values.modelsIds.length < 5;

  return {
    form,
    onChange: {
      onBrandIdsChange,
      onModelIdsChange,
      onBodyIdsChange,
      onCheckboxChange,
    },
    search: {
      brandSearch,
      setBrandSearch,
      modelSearch,
      setModelSearch,
      bodySearch,
      setBodySearch,
    },
    options: { brandsOptions, modelsOptions, bodiesOptions },
    loading: {
      brandsLoading: brandQuery.isFetching,
      modelsLoading: modelQuery.isFetching,
      bodiesLoading: bodyQuery.isFetching,
    },
    error: {
      brandsError: brandQuery.isError,
      modelsError: modelQuery.isError,
      bodiesError: bodyQuery.isError,
    },
    isButtonDisabled,
    labelMaps: {
      brandLabelMap,
      modelLabelMap,
      bodyLabelMap,
    },
  };
};
