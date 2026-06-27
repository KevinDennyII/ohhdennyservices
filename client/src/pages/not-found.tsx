import { Link } from "wouter";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 min-h-[50vh] flex items-center justify-center bg-slate-50">
        <div className="text-center max-w-md px-4">
          <p className="text-6xl font-extrabold text-primary mb-4">404</p>
          <h1 className="text-2xl font-bold text-foreground mb-3">
            Page not found
          </h1>
          <p className="text-muted-foreground mb-8">
            The page you are looking for does not exist or may have moved.
          </p>
          <Button asChild>
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
