import * as React from "react";

export const MyComponentLocal = () => {
    const [v] = React.useState(42);
    return <div>LUE (local) {v}</div>
};
