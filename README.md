# Component hooks issue

Minimal reproduction of issue where a component imported from npm/yarn package 
that uses hooks breaks rendering, but where the same component run locally works fine.

```
npm start
```

To see the issue edit `docusaurus-site/docs/mdx.md` and uncomment `<MyComponentFromPackage />`.

