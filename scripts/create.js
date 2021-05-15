const fs = require("fs");
const path = require("path");

const createComponent = () => {
    if (process.argv[3] === undefined) {
        console.log("Unable to write file: Missing Name argument");
        process.exit();
    }

    //    console.log(process.cwd());
    const dir = path.join(process.cwd(), `src/components/`, process.argv[3]);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    // write package.json file
    fs.writeFileSync(
        `${dir}/package.json`,
        `{
        "name": "${process.argv[3]}",
        "version": "0.0.0",
        "private": true,
        "main": "./${process.argv[3]}.js"
    }`
    );

    // write reactjs file
    fs.writeFileSync(
        `${dir}/${process.argv[3]}.js`,
        `import React from "react";
        import styles from "./${process.argv[3]}.module.scss";
        import classNames from "classnames";\n
        const ${process.argv[3]} = () => { return(<div classNames={styles["example"]}>${process.argv[3]}</div>) }\n
        export default ${process.argv[3]}
    `
    );

    //write scssfile
    fs.writeFileSync(
        `${dir}/${process.argv[3]}.scss`,
        `@import "../../assets/sass/variables.scss";\n
.example{
\tcolor: #FF0000;
\tbackground-color: yellow;
}\n
        `
    );
    process.exit();
};

const createPage = () => {
    if (process.argv[3] === undefined) {
        console.log("Unable to write file: Missing Name argument");
        process.exit();
    }
    console.log("Creating Page...");

    const dir = path.join(process.cwd(), `src/pages/`);

    fs.writeFileSync(
        `${dir}/${process.argv[3].toLowerCase()}.js`,
        `import React from "react";
import { Layout, SEO} from "../components/Components";
import { Box, Container } from "@material-ui/core";

const ${process.argv[3]}Page = () => {

    return(
        <Layout>
            <SEO title="${process.argv[3]} Page" />
            <Box component="section" py={12}>
                <Container maxWidth="md">
                </Container>
            </Box>
        </Layout>
    )
}

export default ${process.argv[3]}Page;
    `
    );
};

// node create --component SampleItem
if (process.argv[2] === "--component") createComponent();
// node create --page Sample
if (process.argv[2] === "--page") createPage();
