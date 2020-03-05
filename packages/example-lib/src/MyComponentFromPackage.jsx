import * as React from "react"

export const MyComponentFromPackage=() => {
    const [v] = React.useState(42);
    return <div>LUE (package) {v}</div>
};
