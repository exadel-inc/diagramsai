import "./loadable.scss";

export function Loadable({
  children,
  loading,
  text = "Loading...",
}: {
  children: JSX.Element;
  loading: boolean;
  text: string;
}) {
  return loading ? <div className="loader">{text}</div> : children;
}
