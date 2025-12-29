import { useState } from "react";
import { useCarsFilters } from "./hooks";
import { Button, Group, Stack, Stepper } from "@mantine/core";
import { StepSelect, StepConfirm, StepLoader, StepResult } from "./steps";
import styles from "./CarsStepper.module.scss";
import { CarsFiltersContext } from "./context";

export const CarsStepper = () => {
  const carsFiltersValues = useCarsFilters();
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const submitFilters = async () => {
    const res = carsFiltersValues.form.validate();
    if (res.hasErrors) return;

    // тут думаю был бы POST, но т.к. у нас рандомайзер и лоадер, то просто в консоль написал для удобства проверки
    console.log("Отправляем данные на бэк:", carsFiltersValues.form.values);

    setActiveStep(2);
    setTimeout(() => setActiveStep(3), 3000);
  };
  return (
    <CarsFiltersContext.Provider value={carsFiltersValues}>
      <div className={styles.container}>
        <Stepper
          active={activeStep}
          classNames={{
            steps: styles.steps,
            separator: styles.separator,
          }}
        >
          <Stepper.Step>
            <Stack gap="xl">
              <StepSelect />
              <Group justify="flex-end">
                <Button
                  variant="filled"
                  radius="lg"
                  onClick={nextStep}
                  disabled={carsFiltersValues.isButtonDisabled}
                >
                  Выбрать
                </Button>
              </Group>
            </Stack>
          </Stepper.Step>

          <Stepper.Step>
            <Stack gap="xl">
              <StepConfirm />
              <Group justify="flex-end">
                <Button
                  variant="filled"
                  radius="lg"
                  onClick={submitFilters}
                  disabled={
                    carsFiltersValues.isButtonDisabled ||
                    !carsFiltersValues.form.values.agree
                  }
                >
                  Подберите!
                </Button>
              </Group>
            </Stack>
          </Stepper.Step>

          <Stepper.Step>
            <StepLoader />
          </Stepper.Step>

          <Stepper.Step>
            <StepResult />
          </Stepper.Step>
        </Stepper>
      </div>
    </CarsFiltersContext.Provider>
  );
};
