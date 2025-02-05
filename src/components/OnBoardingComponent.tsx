import { useOnboarding } from "../context/OnboardingContext";
import NavigationButton from "./ui-components/NavigationButton";

interface OnBoardingComponentProps {
  steps: { title: string; component: JSX.Element }[];
}
const OnBoardingComponent = ({ steps }: OnBoardingComponentProps) => {
  const { step, handleNextStep, handlePrevStep, error } = useOnboarding();

  return (
    <>
      {steps[step].component}
      {step === 1 && error && (
        <div className="text-red-500 text-center mt-4">{error}</div>
      )}
      {step === 0 || step === 3 ? (
        <div className="flex flex-col items-center text-center space-y-6 p-6">
          {step === 0 ? (
            <>
              <NavigationButton
                onClick={handleNextStep}
                label="Start Your Journey"
              />
            </>
          ) : (
            <>
              <NavigationButton
                onClick={handleNextStep}
                label="Finish"
              />
            </>
          )}
        </div>
      ) : (
        <div className="flex justify-between">
          {step > 0 && step < 3 && (
            <NavigationButton onClick={handlePrevStep} label="Back" />
          )}
          {step < steps.length - 1 && (
            <NavigationButton
              onClick={handleNextStep}
              label={step === 1 ? "Save Preferences" : "Next"}
            />
          )}
        </div>
      )}
    </>
  );
};

export default OnBoardingComponent;
