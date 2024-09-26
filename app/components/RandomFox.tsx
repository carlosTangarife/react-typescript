type Props = { imageUrl: string };

export const RandomFox = ({ imageUrl }: Props): JSX.Element => {
  return <img width={320} height="auto" src={imageUrl} className="rounded-lg shadow-lg" />;
}
