# AnimatedButton Component

A reusable, animated button component built with React Hook Form, Framer Motion, and shadcn/ui components. Features smooth loading states, success animations, and customizable styling.

## Features

- ✨ Smooth animations with Framer Motion
- 🔄 Built-in loading states with custom text and icons
- ✅ Success states with animated transitions
- 🎨 Multiple button variants and sizes
- 📱 Responsive design with full-width option
- ♿ Accessibility support
- 🎯 TypeScript support
- 🎨 Customizable styling and animations
- ⚡ Performance optimized

## Installation

The component is already set up in your project. Make sure you have the required dependencies:

```bash
npm install framer-motion lucide-react
```

## Basic Usage

```tsx
import { AnimatedButton } from "@/components/form/animated-button";
import { CheckCircle, Loader2 } from "lucide-react";

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <AnimatedButton
      onClick={handleClick}
      isLoading={isLoading}
      isSuccess={isSuccess}
      loadingText="Processing..."
      successText="Done!"
      successIcon={CheckCircle}
      loadingIcon={Loader2}
      animationDelay={0.1}
    >
      Click Me
    </AnimatedButton>
  );
};
```

## Props

| Prop             | Type                                                                          | Default        | Description                                    |
| ---------------- | ----------------------------------------------------------------------------- | -------------- | ---------------------------------------------- |
| `children`       | `ReactNode`                                                                   | -              | Button content/text                            |
| `isLoading`      | `boolean`                                                                     | `false`        | Whether the button is in loading state         |
| `isSuccess`      | `boolean`                                                                     | `false`        | Whether the button is in success state         |
| `loadingText`    | `string`                                                                      | `"Loading..."` | Text to show during loading                    |
| `successText`    | `string`                                                                      | `"Success!"`   | Text to show during success state              |
| `successIcon`    | `LucideIcon`                                                                  | -              | Icon to show during success state              |
| `loadingIcon`    | `LucideIcon`                                                                  | -              | Icon to show during loading (usually spinning) |
| `animationDelay` | `number`                                                                      | `0`            | Animation delay in seconds                     |
| `variant`        | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"`    | Button variant                                 |
| `size`           | `"default" \| "sm" \| "lg" \| "icon"`                                         | `"default"`    | Button size                                    |
| `className`      | `string`                                                                      | `""`           | Additional CSS classes                         |
| `fullWidth`      | `boolean`                                                                     | `false`        | Whether the button should take full width      |
| `disabled`       | `boolean`                                                                     | `false`        | Whether the button is disabled                 |
| `type`           | `"button" \| "submit" \| "reset"`                                             | `"button"`     | Button type                                    |
| `onClick`        | `function`                                                                    | -              | Click handler                                  |

## Examples

### Basic Button

```tsx
<AnimatedButton onClick={handleClick} animationDelay={0.1}>
  Click Me
</AnimatedButton>
```

### Loading State

```tsx
<AnimatedButton
  isLoading={isLoading}
  loadingText="Saving..."
  loadingIcon={Loader2}
  animationDelay={0.1}
>
  Save Document
</AnimatedButton>
```

### Success State

```tsx
<AnimatedButton
  isSuccess={isSuccess}
  successText="Saved!"
  successIcon={CheckCircle}
  animationDelay={0.1}
>
  Save Document
</AnimatedButton>
```

### Full Width Button

```tsx
<AnimatedButton
  fullWidth={true}
  variant="default"
  animationDelay={0.1}
  className="h-12"
>
  Full Width Button
</AnimatedButton>
```

### Different Variants

```tsx
<AnimatedButton variant="outline" animationDelay={0.1}>
  Outline Button
</AnimatedButton>

<AnimatedButton variant="secondary" animationDelay={0.2}>
  Secondary Button
</AnimatedButton>

<AnimatedButton variant="destructive" animationDelay={0.3}>
  Delete Button
</AnimatedButton>
```

### Different Sizes

```tsx
<AnimatedButton size="sm" animationDelay={0.1}>
  Small
</AnimatedButton>

<AnimatedButton size="default" animationDelay={0.2}>
  Default
</AnimatedButton>

<AnimatedButton size="lg" animationDelay={0.3}>
  Large
</AnimatedButton>
```

### With Icons

```tsx
<AnimatedButton
  variant="default"
  animationDelay={0.1}
>
  <Save className="w-4 h-4 mr-2" />
  Save
</AnimatedButton>

<AnimatedButton
  variant="outline"
  animationDelay={0.2}
>
  <Send className="w-4 h-4 mr-2" />
  Send
</AnimatedButton>
```

### Form Submit Button

```tsx
<AnimatedButton
  type="submit"
  isLoading={form.formState.isSubmitting}
  isSuccess={isSuccess}
  loadingText="Submitting..."
  successText="Submitted!"
  successIcon={CheckCircle}
  loadingIcon={Loader2}
  fullWidth={true}
  animationDelay={0.1}
>
  Submit Form
</AnimatedButton>
```

### Complete Async Action Example

```tsx
const MyForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAsyncAction = async () => {
    setIsLoading(true);
    try {
      await performAsyncAction();
      setIsSuccess(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatedButton
      onClick={handleAsyncAction}
      isLoading={isLoading}
      isSuccess={isSuccess}
      loadingText="Processing..."
      successText="Success!"
      successIcon={CheckCircle}
      loadingIcon={Loader2}
      animationDelay={0.1}
    >
      Perform Action
    </AnimatedButton>
  );
};
```

## Animation Details

The component includes several animations:

1. **Entry Animation**: Slides up with fade-in effect
2. **Loading Animation**: Smooth transition to loading state with spinning icon
3. **Success Animation**: Scale and fade transition to success state
4. **State Transitions**: Smooth transitions between different states

## Staggered Animations

For multiple buttons, use the `animationDelay` prop to create staggered animations:

```tsx
<AnimatedButton animationDelay={0.1}>First</AnimatedButton>
<AnimatedButton animationDelay={0.2}>Second</AnimatedButton>
<AnimatedButton animationDelay={0.3}>Third</AnimatedButton>
```

## State Management

The component handles three main states:

1. **Normal State**: Shows the button content
2. **Loading State**: Shows loading text and icon
3. **Success State**: Shows success text and icon

### State Priority

- `isSuccess` takes priority over `isLoading`
- `isLoading` takes priority over normal state
- `disabled` overrides all states

## TypeScript Support

The component is fully typed with TypeScript:

```tsx
interface MyButtonProps {
  onClick: () => void;
  isLoading?: boolean;
  isSuccess?: boolean;
}

const MyButton: React.FC<MyButtonProps> = ({
  onClick,
  isLoading,
  isSuccess,
}) => (
  <AnimatedButton
    onClick={onClick}
    isLoading={isLoading}
    isSuccess={isSuccess}
    animationDelay={0.1}
  >
    Click Me
  </AnimatedButton>
);
```

## Best Practices

1. **Consistent Animation Delays**: Use incremental delays (0.1, 0.2, 0.3, etc.) for smooth staggered animations
2. **Appropriate Icons**: Choose icons that clearly represent the action
3. **Loading Text**: Use descriptive loading text that explains what's happening
4. **Success Duration**: Consider how long to show success state before resetting
5. **Accessibility**: Ensure button text is descriptive for screen readers
6. **Error Handling**: Always handle errors and reset loading state

## Common Use Cases

### Form Submission

```tsx
<AnimatedButton
  type="submit"
  isLoading={form.formState.isSubmitting}
  isSuccess={isSuccess}
  loadingText="Submitting..."
  successText="Submitted!"
  fullWidth={true}
>
  Submit
</AnimatedButton>
```

### File Upload

```tsx
<AnimatedButton
  onClick={handleUpload}
  isLoading={isUploading}
  isSuccess={uploadSuccess}
  loadingText="Uploading..."
  successText="Uploaded!"
  loadingIcon={Loader2}
  successIcon={CheckCircle}
>
  Upload File
</AnimatedButton>
```

### API Calls

```tsx
<AnimatedButton
  onClick={handleApiCall}
  isLoading={isLoading}
  isSuccess={isSuccess}
  loadingText="Processing..."
  successText="Complete!"
>
  Process Data
</AnimatedButton>
```

## Troubleshooting

### Common Issues

1. **Animation Not Working**: Check that Framer Motion is properly installed
2. **Icons Not Showing**: Ensure Lucide React icons are imported correctly
3. **State Not Updating**: Make sure state is properly managed in parent component
4. **Button Not Disabled**: Check that `disabled` prop is being passed correctly

### Performance Tips

1. Use `React.memo` for buttons that don't change often
2. Avoid changing `animationDelay` during renders
3. Consider using `useCallback` for click handlers
4. Minimize re-renders by keeping state updates minimal

## Migration from Manual Implementation

### Before (Manual Implementation)

```tsx
<Button disabled={isLoading} onClick={handleClick}>
  {isLoading ? (
    <div className="flex items-center">
      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      Loading...
    </div>
  ) : isSuccess ? (
    <div className="flex items-center">
      <CheckCircle className="w-4 h-4 mr-2" />
      Success!
    </div>
  ) : (
    "Click Me"
  )}
</Button>
```

### After (Using AnimatedButton)

```tsx
<AnimatedButton
  onClick={handleClick}
  isLoading={isLoading}
  isSuccess={isSuccess}
  loadingText="Loading..."
  successText="Success!"
  successIcon={CheckCircle}
  loadingIcon={Loader2}
  animationDelay={0.1}
>
  Click Me
</AnimatedButton>
```

## Customization

### Custom Styling

```tsx
<AnimatedButton
  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
  animationDelay={0.1}
>
  Custom Styled
</AnimatedButton>
```

### Custom Animation Timing

```tsx
<AnimatedButton
  animationDelay={0.5} // 500ms delay
  className="transition-all duration-300"
>
  Delayed Button
</AnimatedButton>
```
