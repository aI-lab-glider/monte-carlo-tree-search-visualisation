import { TheoryContent } from "./TheoryContent";

export function AlgorithmDescription(): JSX.Element {
  return (
    <div
      style={{
        padding: "5%",
        overflowY: "scroll",
        color: "#36454c",
        height: "75%",
        textAlign: "justify",
      }}
    >
      <TheoryContent />
    </div>
  );
}
