# Routing
- All route placed inside the ```src/app``` folder
- every folder corresponds to a path in browser url
- lowercase filename
- every file that corresponds to a route must be name page.tsx

## Target
- create 2 simple page file based routing.
    - home.
    - about.

- nested routing, create 1 nested routing.
    - news/trend

- dynamic routing, create dynamic routing.
    - product/[title]

## Lets start
### create 2 page using folder structure like this
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

### Nested  routing.
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
### Dynamic route
create 2 files on 
    ```src/product/page.tsx```
    ```src/product/[title]/page.tsx```
yes. ```[title]``` is folder, and again nothing fancy in this source.

```src/product/page.tsx```
```ts
export default function ProductPage() {
  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {
            //iterate 1- 10  for dummy product
            Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
                <li key={i}>Product {i}</li>
            ))
        }
      </ul>
    </div>
  );
}

```

```src/product/[title]/page.tsx```
```ts
'use client'; // this for client side rendering
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
    // Get the title from the URL , useParam is a hook from next/navigation to get parameters from the URL
    const params = useParams<{ slug: string}>()
    return (
        <div>
            <h1>Product Detail Page</h1>
            <p>Product Title: <b>{params.slug}</b></p>
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
3. ```/product```
4. ```/product/any-slug```