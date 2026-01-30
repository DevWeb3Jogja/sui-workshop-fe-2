import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function App() {
  return (
    <body className="bg-background text-foreground bg-grid min-h-screen">
      <main className="mx-2 py-32 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-28">
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl font-bold">Workshop SUI - Frontend</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <span>Start Here!</span>
          </CardContent>
        </Card>
      </main>
    </body>
  );
}
