type RequirementsProps = {
  requirements: string[];
};

export function Requirements({ requirements }: RequirementsProps) {
  return (
    <div className="requirements-list">
      {requirements.map((r) => (
        <div className="requirement" key={r}>
          {r}
        </div>
      ))}
    </div>
  );
}
