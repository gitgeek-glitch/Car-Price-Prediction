import { FloatingDock } from "@/components/ui/floating-dock";
import { HomeIcon, Code, TrendingUp, Table } from "lucide-react";
export default function CodeShowcasePage() {
  const sections = [
    {
      title: "Data Cleaning & Pre-Processing",
      steps: [
        {
          caption: "1. Importing Necessary Libraries",
          description: "Import the libraries needed for preprocessing tasks.",
          imageUrl: "/assets/code/1.jpg",
        },
        {
          caption: "2. Reading the Dataset",
          description: "Read the dataset to load data for preprocessing.",
          imageUrl: "/assets/code/2.jpg",
        },
        {
          caption: "3. Separating Categorical and Numerical Data",
          description: "Separate categorical and numerical data for specific processing.",
          imageUrl: "/assets/code/3.jpg",
        },
        {
          caption: "4. Checking for Missing Values",
          description: "Check for missing values in the dataset. No missing values, hence no need to impute.",
          imageUrl: "/assets/code/4.jpg",
        },
        {
          caption: "5. Number of Unique Values in Each Column",
          description: "Check how many unique values are in each column.",
          imageUrl: "/assets/code/5.jpg",
        },
        {
          caption: "6. Handling Rare Instances in 'Transmission'",
          description: "Replace instances with transmission type 'Other' with the most common type, 'Manual'.",
          imageUrl: "/assets/code/6.jpg",
        },
        {
          caption: "7. Handling Rare Instances in 'Fuel Type'",
          description: "Replace instances with fuel type 'Electric' with 'Other'.",
          imageUrl: "/assets/code/7.jpg",
        },
        {
          caption: "8. Range of the Label (Price)",
          description: "Check the range of the label variable (Price).",
          imageUrl: "/assets/code/8.jpg",
        },
        {
          caption: "9. Label Encoding and One-Hot Encoding",
          description: "Apply label encoding and one-hot encoding for categorical data.",
          imageUrl: "/assets/code/9.jpg",
        },
        {
          caption: "10. Train Test Split",
          description: "Split the dataset into training and testing sets.",
          imageUrl: "/assets/code/10.jpg",
        },
        {
          caption: "11. Feature Scaling",
          description: "Apply feature scaling to the numerical features for model training.",
          imageUrl: "/assets/code/11.jpg",
        },
      ],
    },
    {
      title: "PCA",
      steps: [
        {
          caption: "12. Principal Component Analysis (PCA)",
          description: "Apply PCA to reduce the dimensionality of the data.",
          imageUrl: "/assets/code/12.jpg",
        },
        {
          caption: "13. Explained Variance",
          description: "Visualize the explained variance of each principal component.",
          imageUrl: "/assets/code/13.jpg",
        },
      ],
    },
    {
      title: "Simple Models",
      steps: [
        {
          caption: "14. Importing Simple Models",
          description: "Import the necessary models for training (e.g., Linear Regression, Decision Tree).",
          imageUrl: "/assets/code/14.jpg",
        },
        {
          caption: "15. Training and Performance Evaluation",
          description: "Train the models and display respective performance measures.",
          imageUrl: "/assets/code/15.jpg",
        },
        {
          caption: "16. Comparison Between Different Simple Models",
          description: "Compare the performance of different simple models.",
          imageUrl: "/assets/code/16.jpg",
        },
      ],
    },
    {
      title: "Ensemble Models",
      steps: [
        {
          caption: "17. Importing Ensemble Models",
          description: "Import the ensemble models such as Random Forest and Gradient Boosting.",
          imageUrl: "/assets/code/17.jpg",
        },
        {
          caption: "18. Training Ensemble Models",
          description: "Train the ensemble models and display respective performance measures.",
          imageUrl: "/assets/code/18.jpg",
        },
        {
          caption: "19. Comparison Between Different Ensemble Models",
          description: "Compare the performance of different ensemble models.",
          imageUrl: "/assets/code/19.jpg",
        },
      ],
    },
    {
      title: "Testing the Models",
      steps: [
        {
          caption: "20. Creating a New Instance and Preprocessing",
          description: "Create a new instance and preprocess it before making predictions.",
          imageUrl: "/assets/code/20.jpg",
        },
        {
          caption: "21. Prediction by Simple Models",
          description: "Use the trained simple models to make predictions.",
          imageUrl: "/assets/code/21.jpg",
        },
        {
          caption: "22. Prediction by Ensemble Models",
          description: "Use the trained ensemble models to make predictions.",
          imageUrl: "/assets/code/22.jpg",
        },
        {
          caption: "23. Saving the Models for Future Use",
          description: "Save the trained models to be used in the project later.",
          imageUrl: "/assets/code/23.jpg",
        },
      ],
    },
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
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="absolute top-5 right-5 transform translate-x-0 z-50">
              <FloatingDock items={dockItems} />
      </div>
      <header className="flex justify-center items-center py-12">
        <h1 className="text-6xl font-extrabold text-center text-neon-green">
          Code and Dataset Showcase
        </h1>
      </header>

      <main className="flex flex-col items-center justify-center py-16 px-4 space-y-16">
        {sections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="w-full space-y-8">
            <h2 className="text-5xl font-bold text-neon-green">{section.title}</h2>
            <div className="grid grid-cols-1 gap-8">
              {section.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="flex flex-col items-center space-y-4">
                  <h3 className="text-3xl font-semibold">{step.caption}</h3>
                  <p className="text-lg text-gray-300 text-center">
                    {step.description}
                  </p>
                  <img
                    src={step.imageUrl}
                    alt={step.caption}
                    className="rounded-lg shadow-lg max-w-[80%] h-auto"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="bg-black py-4 text-center text-sm text-gray-400">
        <p>&copy; 2025 CarPrice AI | All Rights Reserved</p>
      </footer>
    </div>
  );
}
