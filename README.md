# Interface Type Generator 🎭

A Utility tool to generate types from [typia](https://typia.io/)-inspired typescript interfaces. You define your interface with properties and types just as you would normally in ts. Then you can add additional [typia-like tags](https://typia.io/docs/validators/tags/#type-tags) to enrich your properties with e.g. validation logic or specifig type information.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Technology

Under the hood [acorn-typescript](https://github.com/TyrealHu/acorn-typescript) is used to parse typescript interfaces into an intermediate format. This is then used to generate go structs. Possible validation tags are mapped to validation flags for https://github.com/go-playground/validator.

