# AnimatedFormInput Component

A reusable, animated form input component built with React Hook Form, Framer Motion, and shadcn/ui components.

## Features

- ✨ Smooth animations with Framer Motion
- 🔒 Built-in password visibility toggle
- 🎨 Customizable icons from Lucide React
- 📱 Responsive design
- ♿ Accessibility support
- 🎯 TypeScript support with generic types
- 🎨 Customizable styling
- ⚡ Performance optimized

## Installation

The component is already set up in your project. Make sure you have the required dependencies:

```bash
npm install react-hook-form @hookform/resolvers zod framer-motion lucide-react
```

## Basic Usage

```tsx
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { AnimatedFormInput } from "@/components/form/animated-form-input";
import { Mail, Lock } from "lucide-react";

const MyForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-4">
        <AnimatedFormInput
          control={form.control}
          name="email"
          label="Email"
          type="email"
          icon={Mail}
        />

        <AnimatedFormInput
          control={form.control}
          name="password"
          label="Password"
          type="password"
          icon={Lock}
          showPasswordToggle={true}
        />
      </form>
    </Form>
  );
};
```

## Props

| Prop                 | Type                                                            | Default        | Description                                              |
| -------------------- | --------------------------------------------------------------- | -------------- | -------------------------------------------------------- |
| `control`            | `Control<T>`                                                    | -              | React Hook Form control object                           |
| `name`               | `FieldPath<T>`                                                  | -              | Field name for form control                              |
| `label`              | `string`                                                        | -              | Label text for the input                                 |
| `type`               | `"text" \| "email" \| "password" \| "number" \| "tel" \| "url"` | `"text"`       | Input type                                               |
| `placeholder`        | `string`                                                        | Auto-generated | Placeholder text                                         |
| `icon`               | `LucideIcon`                                                    | -              | Icon component from Lucide React                         |
| `disabled`           | `boolean`                                                       | `false`        | Whether the input is disabled                            |
| `showPasswordToggle` | `boolean`                                                       | `false`        | Show password visibility toggle (only for password type) |
| `animationDelay`     | `number`                                                        | `0`            | Animation delay in seconds                               |
| `className`          | `string`                                                        | `""`           | Additional CSS classes for the container                 |
| `inputClassName`     | `string`                                                        | `""`           | Additional CSS classes for the input                     |

## Examples

### Basic Text Input

```tsx
<AnimatedFormInput
  control={form.control}
  name="username"
  label="Username"
  type="text"
  icon={User}
  animationDelay={0.1}
/>
```

### Email Input with Custom Placeholder

```tsx
<AnimatedFormInput
  control={form.control}
  name="email"
  label="Email Address"
  type="email"
  icon={Mail}
  placeholder="your.email@example.com"
  animationDelay={0.2}
/>
```

### Password Input with Toggle

```tsx
<AnimatedFormInput
  control={form.control}
  name="password"
  label="Password"
  type="password"
  icon={Lock}
  showPasswordToggle={true}
  animationDelay={0.3}
/>
```

### Input Without Icon

```tsx
<AnimatedFormInput
  control={form.control}
  name="phone"
  label="Phone Number"
  type="tel"
  placeholder="+1 (555) 123-4567"
  animationDelay={0.4}
/>
```

### Disabled Input

```tsx
<AnimatedFormInput
  control={form.control}
  name="readonly"
  label="Read Only Field"
  type="text"
  disabled={true}
  animationDelay={0.5}
/>
```

### Custom Styling

```tsx
<AnimatedFormInput
  control={form.control}
  name="custom"
  label="Custom Styled"
  type="text"
  className="mb-4"
  inputClassName="border-2 border-blue-500"
  animationDelay={0.6}
/>
```

## Animation Details

The component includes several animations:

1. **Entry Animation**: Slides in from the left with fade-in effect
2. **Focus Animation**: Subtle scale effect when focused
3. **Error Animation**: Smooth slide-down animation for error messages
4. **Password Toggle**: Smooth transition between eye icons

## Staggered Animations

For multiple inputs, use the `animationDelay` prop to create staggered animations:

```tsx
<AnimatedFormInput
  control={form.control}
  name="field1"
  label="Field 1"
  animationDelay={0.1}
/>
<AnimatedFormInput
  control={form.control}
  name="field2"
  label="Field 2"
  animationDelay={0.2}
/>
<AnimatedFormInput
  control={form.control}
  name="field3"
  label="Field 3"
  animationDelay={0.3}
/>
```

## TypeScript Support

The component is fully typed with TypeScript generics:

```tsx
interface MyFormData {
  email: string;
  password: string;
  name: string;
}

const form = useForm<MyFormData>({
  defaultValues: {
    email: "",
    password: "",
    name: "",
  },
});

// TypeScript will ensure type safety
<AnimatedFormInput<MyFormData>
  control={form.control}
  name="email" // ✅ TypeScript knows this is valid
  label="Email"
  type="email"
/>;
```

## Migration from Manual Implementation

If you're migrating from manually implemented animated inputs, here's how to convert:

### Before (Manual Implementation)

```tsx
<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <motion.div whileFocus={{ scale: 1.01 }}>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input {...field} className="pl-10" />
          </div>
        </motion.div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

### After (Using AnimatedFormInput)

```tsx
<AnimatedFormInput
  control={form.control}
  name="email"
  label="Email"
  type="email"
  icon={Mail}
  animationDelay={0.1}
/>
```

## Best Practices

1. **Consistent Animation Delays**: Use incremental delays (0.1, 0.2, 0.3, etc.) for smooth staggered animations
2. **Appropriate Icons**: Choose icons that clearly represent the input purpose
3. **Accessible Labels**: Use descriptive labels that help screen readers
4. **Password Security**: Always use `showPasswordToggle={true}` for password inputs
5. **Error Handling**: The component automatically handles form validation errors with animations

## Troubleshooting

### Common Issues

1. **TypeScript Errors**: Make sure your form schema matches the field names
2. **Animation Not Working**: Check that Framer Motion is properly installed
3. **Icons Not Showing**: Ensure Lucide React icons are imported correctly
4. **Password Toggle Not Working**: Only works with `type="password"`

### Performance Tips

1. Use `React.memo` for forms with many inputs
2. Avoid changing `animationDelay` during renders
3. Consider using `useCallback` for form submission handlers
