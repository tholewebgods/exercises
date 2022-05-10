
# npm audit JSON summary

## Background

The npm package manager provides an audit command that checks whether the dependencies can be updated and what security issues the installed packages have.

It can also generate a `.json` output for programmatic inspection.

With this exercise you will inspect the audit results programmatically.


## Requirements

Learn about

- Javascript objects and arrays
- Accessing properties and elements and navigating object trees
- Filtering in arrays
- Finding in arrays
- Mapping and reducing arrays

On top of the MDN tutorials, this might be helpful:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


## Tips

- To inspect the object, paste it into the Devtools console; you can now navigate it.

  ```
  > const npm = { ... };
  < undefined
  > npm
  < Object { ... } <- here you can navigate through the object to inspect
  ```

- You might add a `.spec.js` and write test cases
