import s from "./instructions.module.scss";

const steps = [
  { number: 1, title: 'Register for HackDKU' },
  { number: 2, title: 'Form a team and register' },
  { number: 3, title: 'Select a HackDKU track' },
  { number: 4, title: 'Identify a problem to solve' },
  { number: 5, title: 'Design a solution (e.g., UI/UX, code, app, web)' },
  { number: 6, title: 'Develop a project plan' },
  { number: 7, title: 'Present your solution' }
];

export const InstructionsIndex = () => {
  return (
    <main>
      {/* <Container>
        The container is sized to hold one step box */}
        <div className={s.stepContainer}>
          {steps.map((step) => (
            <div
              key={step.number}
              className={s.step}
              id={`step${step.number}`}
              style={{ zIndex: step.number}} // later steps on top
            >
              <div className={s.stepWord}>
                STEP
                <div className={s.stepNumber}>{step.number}</div>
              </div>
              <div className={s.stepTitle}>
                <br/>
                {step.title}
              </div>
            </div>
          ))}
        </div>
      {/* </Container> */}
    </main>
  );
};

export default InstructionsIndex;
