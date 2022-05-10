
# Exercises

## Advisories overview

- There are advisories
- Advisories is an object that maps an advisory ID to advisory data
- Please extract id, title and overview
- The resulting object should look like this:

```
[
  [123, "some title", "some overview"],
  ...
]
```

## Filter for highest severity

- Only include advisories with severity "high"


## Module names

- Filter for "high" severity advisories
- Show the module names (module_name)

```
["minimatch", "lodash", ..., "lodash", ...]
```


## Unique module names

- Modules might occure multiple times
- Only show a module name once
- Preserving or establishing a certain display order is not required (up to you)

```
["minimatch", "lodash", ...]
```
