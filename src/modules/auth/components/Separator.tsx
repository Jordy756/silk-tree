interface Props {
  text?: string;
}

export const Separator = ({ text }: Props) => {
  return (
    <div className="form__separator">
      <p>{text}</p>
    </div>
  );
};
