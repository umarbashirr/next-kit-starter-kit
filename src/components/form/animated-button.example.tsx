// Example usage of AnimatedButton component

import { useState } from "react";
import { AnimatedButton } from "./animated-button";
import {
  CheckCircle,
  Loader2,
  Save,
  Send,
  Download,
  Trash2,
} from "lucide-react";

export function AnimatedButtonExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAsyncAction = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold mb-6">Animated Button Examples</h2>

      {/* Basic Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Examples</h3>

        <div className="flex flex-wrap gap-4">
          <AnimatedButton
            onClick={handleAsyncAction}
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

          <AnimatedButton variant="outline" animationDelay={0.2}>
            Outline Button
          </AnimatedButton>

          <AnimatedButton variant="secondary" animationDelay={0.3}>
            Secondary Button
          </AnimatedButton>
        </div>
      </div>

      {/* Full Width Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Full Width Examples</h3>

        <AnimatedButton
          fullWidth={true}
          variant="default"
          animationDelay={0.1}
          className="h-12"
        >
          Full Width Button
        </AnimatedButton>

        <AnimatedButton
          fullWidth={true}
          variant="outline"
          animationDelay={0.2}
          className="h-12"
        >
          Another Full Width Button
        </AnimatedButton>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Different Sizes</h3>

        <div className="flex flex-wrap gap-4 items-center">
          <AnimatedButton size="sm" animationDelay={0.1}>
            Small
          </AnimatedButton>

          <AnimatedButton size="default" animationDelay={0.2}>
            Default
          </AnimatedButton>

          <AnimatedButton size="lg" animationDelay={0.3}>
            Large
          </AnimatedButton>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Icons</h3>

        <div className="flex flex-wrap gap-4">
          <AnimatedButton variant="default" animationDelay={0.1}>
            <Save className="w-4 h-4 mr-2" />
            Save
          </AnimatedButton>

          <AnimatedButton variant="outline" animationDelay={0.2}>
            <Send className="w-4 h-4 mr-2" />
            Send
          </AnimatedButton>

          <AnimatedButton variant="secondary" animationDelay={0.3}>
            <Download className="w-4 h-4 mr-2" />
            Download
          </AnimatedButton>

          <AnimatedButton variant="destructive" animationDelay={0.4}>
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </AnimatedButton>
        </div>
      </div>

      {/* Loading States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Loading States</h3>

        <div className="flex flex-wrap gap-4">
          <AnimatedButton
            isLoading={true}
            loadingText="Saving..."
            loadingIcon={Loader2}
            animationDelay={0.1}
          >
            Save Document
          </AnimatedButton>

          <AnimatedButton
            isLoading={true}
            loadingText="Uploading..."
            loadingIcon={Loader2}
            variant="outline"
            animationDelay={0.2}
          >
            Upload File
          </AnimatedButton>
        </div>
      </div>

      {/* Success States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Success States</h3>

        <div className="flex flex-wrap gap-4">
          <AnimatedButton
            isSuccess={true}
            successText="Saved!"
            successIcon={CheckCircle}
            animationDelay={0.1}
          >
            Save Document
          </AnimatedButton>

          <AnimatedButton
            isSuccess={true}
            successText="Sent!"
            successIcon={CheckCircle}
            variant="outline"
            animationDelay={0.2}
          >
            Send Message
          </AnimatedButton>
        </div>
      </div>

      {/* Disabled States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Disabled States</h3>

        <div className="flex flex-wrap gap-4">
          <AnimatedButton disabled={true} animationDelay={0.1}>
            Disabled Button
          </AnimatedButton>

          <AnimatedButton
            disabled={true}
            variant="outline"
            animationDelay={0.2}
          >
            Disabled Outline
          </AnimatedButton>
        </div>
      </div>

      {/* Form Submit Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Form Submit Example</h3>

        <form className="space-y-4">
          <AnimatedButton
            type="submit"
            fullWidth={true}
            animationDelay={0.1}
            className="h-12"
          >
            Submit Form
          </AnimatedButton>
        </form>
      </div>

      {/* Staggered Animation Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Staggered Animation</h3>

        <div className="flex flex-wrap gap-4">
          <AnimatedButton animationDelay={0.1}>First</AnimatedButton>
          <AnimatedButton animationDelay={0.2}>Second</AnimatedButton>
          <AnimatedButton animationDelay={0.3}>Third</AnimatedButton>
          <AnimatedButton animationDelay={0.4}>Fourth</AnimatedButton>
        </div>
      </div>
    </div>
  );
}
