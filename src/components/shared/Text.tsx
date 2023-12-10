import { Fragment } from 'react';

type Props = {
  children: string;
};

export default function Text({ children }: Props) {
  const message = children.split('\n').map((str, idx, array) => (
    <Fragment key={idx}>
      {str}
      {idx === array.length - 1 ? null : <br />}
    </Fragment>
  ));

  return <div>{message}</div>;
}
