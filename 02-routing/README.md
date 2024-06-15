# Routing
- All route placed inside the ```src/app``` folder
- every folder corresponds to a path in browser url
- lowercase filename
- every file that corresponds to a route must be name page.tsx
## Getting Started

## Target
- create 2 simple page file based routing.
    - home.
    - about.

- nested routing, create 1 nested routing.
    - news

## Lets start
create 2 page using folder structure like this
    ```src/about/page.tsx```
    ```src/home/page.tsx```

nothing fancy for now for 2 files above, just some simple html

```src/about/page.tsx```
```ts
export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```

```src/home/page.tsx```
```ts
export default function HomePage() {
    return (
      <div>
        <h1>Home</h1>
        <p>This is the Home page.</p>
      </div>
    );
  }
```

for nested  routing.
create 2 files on 
    ```src/news/page.tsx```
    ```src/news/trend/page.tsx```

nothing fancy again in this source.

```src/news/page.tsx```
```ts
export default function newsPage() {
    return (
      <div>
        <h1>News</h1>
        <p>This is the news page.</p>
      </div>
    );
  }
```

```src/news/trend/page.tsx```
```ts
export default function NewsTrendPage() {
    return (
      <div>
        <h1>Trending News</h1>
        <p>This is the Trending News page.</p>
      </div>
    );
  }
```

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

navigate to 
1. ```/home```
2. ```/about```