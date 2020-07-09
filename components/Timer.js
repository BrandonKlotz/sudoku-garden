import { useState, useEffect } from "react";

export default function Timer(props) {
  const { start } = props;
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    setElapsed(Math.floor((new Date().getTime() - start.getTime()) / 1000));
  });

  return <h2>Time: {elapsed}</h2>;
}
