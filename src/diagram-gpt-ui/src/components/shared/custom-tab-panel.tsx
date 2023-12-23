export function CustomTabPanel({
  children,
  value,
  index,
}: {
  children: JSX.Element;
  value: number;
  index: number;
}) {
  if (value !== index) {
    return <></>;
  }

  return children;
}
