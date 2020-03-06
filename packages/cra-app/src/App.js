import React, {Component} from 'react'

import MDXDocument from './content.mdx';
import {Select} from "antd";

import "./app.css"

class App extends Component {
    render() {
        return (
            <div>
                This is select outside of MDX: <Select placeholder={"Please select"}><Select.Option value={"option"}/></Select>
                <MDXDocument/>
            </div>
        )
    }
}

export default App
