import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
          <FileText className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Our Platform</h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Your modern marketplace experience starts here
        </p>
        <Button asChild size="lg" className="mt-4">
          <a href="/terms-of-use">View Terms of Use</a>
        </Button>
      </div>
    </div>
  );
};

export default Index;
