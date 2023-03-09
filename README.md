This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the json-server:
```bash
yarn server
# or
yarn server
# or
pnpm server
```

First, run the application:

```bash
yarn dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Technical choices:

**- Project creation:**
  
  I created the project using create next-app (https://nextjs.org/docs/api-reference/create-next-app).
  I like using the project with next because, in my opinion, it only has advantages over create react-app (even when we don't use any of NextJS's features). In the case of this project, NextJS was used to request the articles on the server side.


**- Architecture**

  I divided the project in a way that it could be scalable. I preferred to leave the styling files inside their respective folders (with the exception of the global and home styles), so that later maintenance would be easier.


**- Styles:**

  For the styling of the project, I used the styled-components library. I really like using this library because I think it keeps the code organized, and makes it much easier to style using cascade.


**- Code styling:**

  For pattern of project's code, I used the eslint and prettier libraries, so that coding rules and standards could be implemented.


**- Final considerations:**

  I didn't use context in the project because I believed it wasn't needed in any of the project's features. It might be a good idea to use it in the project when developing a Theme Switcher, for example.
