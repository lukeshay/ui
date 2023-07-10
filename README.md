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

## Components

### Accordion

```tsx
import { Accordion } from "@lshay/ui/components/accordion";
```

### Alert

```tsx
import { Alert } from "@lshay/ui/components/alert";
```

### AlertDialog

```tsx
import { AlertDialog } from "@lshay/ui/components/alert-dialog";
```

### AspectRatio

```tsx
import { AspectRatio } from "@lshay/ui/components/aspect-ratio";
```

### Avatar

```tsx
import { Avatar } from "@lshay/ui/components/avatar";
```

### Badge

```tsx
import { Badge } from "@lshay/ui/components/badge";
```

### Button

```tsx
import { Button } from "@lshay/ui/components/button";
```

### Calendar

```tsx
import { Calendar } from "@lshay/ui/components/calendar";
```

### Card

```tsx
import { Card } from "@lshay/ui/components/card";
```

### Checkbox

```tsx
import { Checkbox } from "@lshay/ui/components/checkbox";
```

### Collapsible

```tsx
import { Collapsible } from "@lshay/ui/components/collapsible";
```

### Command

```tsx
import { Command } from "@lshay/ui/components/command";
```

### ContextMenu

```tsx
import { ContextMenu } from "@lshay/ui/components/context-menu";
```

### Dialog

```tsx
import { Dialog } from "@lshay/ui/components/dialog";
```

### DropdownMenu

```tsx
import { DropdownMenu } from "@lshay/ui/components/dropdown-menu";
```

### HoverCard

```tsx
import { HoverCard } from "@lshay/ui/components/hover-card";
```

### Input

```tsx
import { Input } from "@lshay/ui/components/input";
```

### Label

```tsx
import { Label } from "@lshay/ui/components/label";
```

### Menubar

```tsx
import { Menubar } from "@lshay/ui/components/menubar";
```

### NavigationMenu

```tsx
import { NavigationMenu } from "@lshay/ui/components/navigation-menu";
```

### Popover

```tsx
import { Popover } from "@lshay/ui/components/popover";
```

### Progress

```tsx
import { Progress } from "@lshay/ui/components/progress";
```

### RadioGroup

```tsx
import { RadioGroup } from "@lshay/ui/components/radio-group";
```

### ScrollArea

```tsx
import { ScrollArea } from "@lshay/ui/components/scroll-area";
```

### Select

```tsx
import { Select } from "@lshay/ui/components/select";
```

### Separator

```tsx
import { Separator } from "@lshay/ui/components/separator";
```

### Sheet

```tsx
import { Sheet } from "@lshay/ui/components/sheet";
```

### Skeleton

```tsx
import { Skeleton } from "@lshay/ui/components/skeleton";
```

### Slider

```tsx
import { Slider } from "@lshay/ui/components/slider";
```

### Switch

```tsx
import { Switch } from "@lshay/ui/components/switch";
```

### Table

```tsx
import { Table } from "@lshay/ui/components/table";
```

### Tabs

```tsx
import { Tabs } from "@lshay/ui/components/tabs";
```

### Textarea

```tsx
import { Textarea } from "@lshay/ui/components/textarea";
```

### Toast

```tsx
import { Toast } from "@lshay/ui/components/toast";
```

### Toggle

```tsx
import { Toggle } from "@lshay/ui/components/toggle";
```

### Tooltip

```tsx
import { Tooltip } from "@lshay/ui/components/tooltip";
```

## Updated At

2023-07-10T01:35:11.255Z
