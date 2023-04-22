# Components from [shadcn/ui](https://ui.shadcn.com/)

This packages contains the components from [shadcn/ui](https://ui.shadcn.com/). The date published can be found at the bottom of this readme. The version bumps do not correspond to the changes to the components.

## Installation

### 1. Install this package

#### NPM

```shell
npm install @lshay/ui
```

#### Yarn

```shell
yarn add @lshay/ui
```

#### PNPM

```shell
pnpm add @lshay/ui
```

### 2. Install peer dependencies

#### NPM

```shell
npm install --save-dev tailwindcss@latest postcss@latest autoprefixer@latest tailwindcss-animate@latest
```

#### Yarn

```shell
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest tailwindcss-animate@latest
```

#### PNPM

```pnpm
pnpm add -D tailwindcss@latest postcss@latest autoprefixer@latest tailwindcss-animate@latest
```

### 3. Initiailize Tailwind

#### NPM

```shell
npm exec tailwindcss -- init
```

#### Yarn

```shell
yarn tailwindcss init
```

#### PNPM

```pnpm
pnpm exec tailwindcss -- init
```

### 4. Configure Tailwind

Follow steps [linked here](https://ui.shadcn.com/docs/installation#configure-tailwindconfigjs).

Add `"node_modules/@lshay/ui/dist/components/**/*.{js,jsx}"` to the content array.

### 5. Configure Styles

Follow steps [linked here](https://ui.shadcn.com/docs/installation#configure-styles).

## Usage

```tsx
import { Button } from "@lshay/ui/components/button"; // You can also import from "@lshay/ui"

export const ClickMeButton = () => <Button>{"Click Me"}</Button>;
```
