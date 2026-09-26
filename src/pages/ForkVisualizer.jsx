import { useState } from "react";

const presets = [
    {
        label: "fork() called twice",
        code: 'fork();\nfork();',
        steps: [
            {
                line: null,
                processes: [
                    { id: 0, parent: null}
                ]
            },
            { 
                line: 0,
                processes: [
                    { id: 0, parent: null},
                    {id: 1, parent: 0}
                ] 
            },
            {
                line: 1,
                processes: [
                    { id: 0, parent: null },
                    { id: 1, parent: 0 },
                    { id: 2, parent: 0 },
                    { id: 3, parent: 1 },
                ]
            }
        ]
    }
]

function ForkVisualizer() {
  const [presetIndex, setPresetIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const preset = presets[presetIndex];
  const currentStep = preset.steps[stepIndex];

  return (
    <div>
      <h1>Fork Visualizer</h1>

      <div>
        {presets.map((p, i) => (
          <button
            key={i}
            onClick={() => {
              setPresetIndex(i);
              setStepIndex(0);
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <pre>
        {preset.code.split("\n").map((line, i) => (
          <div
            key={i}
            style={{ background: i === currentStep.line ? "yellow" : "transparent" }}
          >
            {line}
          </div>
        ))}
      </pre>

      <button disabled={stepIndex === 0} onClick={() => setStepIndex(stepIndex - 1)}>
        Previous step
      </button>
      <button
        disabled={stepIndex === preset.steps.length - 1}
        onClick={() => setStepIndex(stepIndex + 1)}
      >
        Next step
      </button>

      
    </div>
  );
}

export default ForkVisualizer;