import { FloatingDock } from "@/components/ui/floating-dock";
import { Car, ArrowRight, Sparkles, HomeIcon, Code, Table, TrendingUp } from "lucide-react";

export default function PerformancePage() {
    const performanceData = [
      {
        caption: "Model Accuracy",
        description: "Learn how accurate the models are in predicting car prices.",
        imageUrl: "/assets/1.jpg", // Corrected path to the public folder
      },
      {
        caption: "Model Efficiency",
        description: "Understand the performance metrics related to model efficiency.",
        imageUrl: "/others.jpg", // Corrected path to the public folder
      },
      // Add more images if necessary
    ];

    const dockItems = [
      {
        title: "Home",
        icon: <HomeIcon className="h-6 w-6" />,
        href: "/",
      },
      {
        title: "Code",
        icon: <Code className="h-6 w-6" />,
        href: "/code",
      },
      {
        title: "Performance Measure",
        icon: <TrendingUp className="h-6 w-6" />,
        href: "/performance",
      },
      {
        title: "Dataset Info",
        icon: <Table className="h-6 w-6" />,
        href: "/dataset",
      },
    ];
  
    return (
      <div className="min-h-screen bg-black text-neon-green font-sans">
        <div className="absolute top-5 right-5 transform translate-x-0 z-50">
                      <FloatingDock items={dockItems} />
              </div>
        {/* Header Section */}
        <header className="flex justify-center items-center py-12">
          <h1 className="text-4xl font-extrabold text-center text-neon-green">
            Performance Measure
          </h1>
        </header>
  
        {/* Main Content Section */}
        <main className="flex flex-col items-center justify-center py-16 px-4 space-y-8">
          {/* Grid for 2x2 Layout */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {performanceData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-neon-green">{item.caption}</h2>
                  <p className="text-lg text-muted-foreground">{item.description}</p>
                </div>
  
                {/* Image Section */}
                <div className="relative group">
                  <img
                    src={item.imageUrl} // Image directly from public folder
                    alt={item.caption}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </section>
        </main>
  
        {/* Footer Section */}
        <footer className="bg-black py-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 CarPrice AI | All Rights Reserved</p>
        </footer>
      </div>
    );
  }
  