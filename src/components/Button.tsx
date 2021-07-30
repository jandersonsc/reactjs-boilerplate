import { useState } from "react";

import { default as ButtonMaterial } from '@material-ui/core/Button';

type ButtonProps = {
    text: string;
}

export function Button(props: ButtonProps) {

    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <ButtonMaterial variant="contained" color="primary" onClick={increment}>{counter}</ButtonMaterial>
    )
}