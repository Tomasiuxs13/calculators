import { ReactNode } from 'react';

export interface Author {
  id: string;
  name: string;
  slug: string;
  bio: string;
  avatar: string;
  role: string;
}

export type Category = 
  | 'health' 
  | 'finance' 
  | 'math' 
  | 'biology'
  | 'chemistry'
  | 'construction'
  | 'conversion'
  | 'ecology'
  | 'everyday-life'
  | 'food'
  | 'physics'
  | 'sports'
  | 'statistics'
  | 'other';

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export const subcategories: Record<Category, Subcategory[]> = {
  health: [
    { id: 'fitness', name: 'Fitness & Exercise', slug: 'fitness', description: 'Calculate fitness metrics and exercise goals' },
    { id: 'nutrition', name: 'Nutrition & Diet', slug: 'nutrition', description: 'Track calories, macros, and nutritional values' },
    { id: 'medical', name: 'Medical & Health', slug: 'medical', description: 'Health assessments and medical calculations' },
    { id: 'pregnancy', name: 'Pregnancy & Baby', slug: 'pregnancy', description: 'Pregnancy calculators and baby health tools' },
  ],
  finance: [
    { id: 'loans', name: 'Loans & Mortgages', slug: 'loans', description: 'Calculate loan payments and mortgage rates' },
    { id: 'investments', name: 'Investments & Savings', slug: 'investments', description: 'Investment returns and savings calculators' },
    { id: 'taxes', name: 'Taxes & Deductions', slug: 'taxes', description: 'Tax calculations and deduction tools' },
    { id: 'budgeting', name: 'Budgeting & Planning', slug: 'budgeting', description: 'Budget planning and financial management' },
    { id: 'retirement', name: 'Retirement Planning', slug: 'retirement', description: 'Retirement savings and planning calculators' },
    { id: 'insurance', name: 'Insurance', slug: 'insurance', description: 'Insurance calculations and comparisons' },
    { id: 'currency', name: 'Currency & Exchange', slug: 'currency', description: 'Currency conversion and exchange rate tools' },
  ],
  math: [
    { id: 'basic', name: 'Basic Math', slug: 'basic', description: 'Basic arithmetic and number operations' },
    { id: 'algebra', name: 'Algebra', slug: 'algebra', description: 'Algebraic equations and formulas' },
    { id: 'geometry', name: 'Geometry', slug: 'geometry', description: 'Geometric shapes and measurements' },
    { id: 'statistics', name: 'Statistics', slug: 'statistics', description: 'Statistical analysis and probability' },
  ],
  biology: [
    { id: 'genetics', name: 'Genetics', slug: 'genetics', description: 'Genetic calculations and DNA analysis' },
    { id: 'ecology', name: 'Ecology', slug: 'ecology', description: 'Ecological and population calculations' },
    { id: 'anatomy', name: 'Anatomy & Physiology', slug: 'anatomy', description: 'Anatomical and physiological calculations' },
    { id: 'microbiology', name: 'Microbiology', slug: 'microbiology', description: 'Microbiological calculations and analysis' },
  ],
  chemistry: [
    { id: 'stoichiometry', name: 'Stoichiometry', slug: 'stoichiometry', description: 'Chemical reaction calculations and stoichiometry' },
    { id: 'solutions', name: 'Solutions', slug: 'solutions', description: 'Solution concentration and dilution calculations' },
    { id: 'thermodynamics', name: 'Thermodynamics', slug: 'thermodynamics', description: 'Thermodynamic calculations and energy' },
    { id: 'organic', name: 'Organic Chemistry', slug: 'organic', description: 'Organic chemistry calculations and formulas' },
  ],
  construction: [
    { id: 'materials', name: 'Materials', slug: 'materials', description: 'Material quantity and cost calculations' },
    { id: 'measurements', name: 'Measurements', slug: 'measurements', description: 'Construction measurement and area tools' },
    { id: 'structural', name: 'Structural', slug: 'structural', description: 'Structural engineering calculations' },
    { id: 'electrical', name: 'Electrical', slug: 'electrical', description: 'Electrical load and wiring calculations' },
    { id: 'plumbing', name: 'Plumbing', slug: 'plumbing', description: 'Plumbing and pipe calculations' },
  ],
  conversion: [
    { id: 'length', name: 'Length & Distance', slug: 'length', description: 'Convert length and distance units' },
    { id: 'weight', name: 'Weight & Mass', slug: 'weight', description: 'Convert weight and mass units' },
    { id: 'volume', name: 'Volume & Capacity', slug: 'volume', description: 'Convert volume and capacity units' },
    { id: 'temperature', name: 'Temperature', slug: 'temperature', description: 'Convert temperature units' },
    { id: 'area', name: 'Area', slug: 'area', description: 'Convert area units' },
    { id: 'speed', name: 'Speed & Velocity', slug: 'speed', description: 'Convert speed and velocity units' },
    { id: 'time', name: 'Time', slug: 'time', description: 'Convert time units' },
    { id: 'energy', name: 'Energy', slug: 'energy', description: 'Convert energy units' },
    { id: 'pressure', name: 'Pressure', slug: 'pressure', description: 'Convert pressure units' },
    { id: 'data', name: 'Data Storage', slug: 'data', description: 'Convert data storage units' },
    { id: 'angle', name: 'Angle', slug: 'angle', description: 'Convert angle units' },
    { id: 'fuel', name: 'Fuel Economy', slug: 'fuel', description: 'Convert fuel economy units' },
    { id: 'power', name: 'Power', slug: 'power', description: 'Convert power units' },
    { id: 'force', name: 'Force', slug: 'force', description: 'Convert force units' },
    { id: 'torque', name: 'Torque', slug: 'torque', description: 'Convert torque units' },
    { id: 'frequency', name: 'Frequency', slug: 'frequency', description: 'Convert frequency units' },
    { id: 'electrical', name: 'Electrical', slug: 'electrical', description: 'Convert electrical units' },
  ],
  ecology: [
    { id: 'carbon', name: 'Carbon Footprint', slug: 'carbon', description: 'Calculate carbon footprint and emissions' },
    { id: 'water', name: 'Water Usage', slug: 'water', description: 'Calculate water consumption and usage' },
    { id: 'energy', name: 'Energy Consumption', slug: 'energy', description: 'Calculate energy consumption and efficiency' },
    { id: 'sustainability', name: 'Sustainability', slug: 'sustainability', description: 'Sustainability metrics and calculations' },
  ],
  'everyday-life': [
    { id: 'date-time', name: 'Date & Time', slug: 'date-time', description: 'Date and time calculations' },
    { id: 'cooking', name: 'Cooking & Recipes', slug: 'cooking', description: 'Cooking and recipe calculators' },
    { id: 'shopping', name: 'Shopping & Savings', slug: 'shopping', description: 'Shopping and savings calculations' },
    { id: 'travel', name: 'Travel', slug: 'travel', description: 'Travel planning and cost calculators' },
    { id: 'home-garden', name: 'Home & Garden', slug: 'home-garden', description: 'Home improvement and gardening tools' },
    { id: 'time-management', name: 'Time Management', slug: 'time-management', description: 'Time management and productivity tools' },
    { id: 'relationships', name: 'Relationships', slug: 'relationships', description: 'Relationship and social calculators' },
    { id: 'pets', name: 'Pets', slug: 'pets', description: 'Pet care and health calculators' },
  ],
  food: [
    { id: 'nutrition', name: 'Nutrition', slug: 'nutrition', description: 'Food nutrition and calorie calculations' },
    { id: 'recipe-scaling', name: 'Recipe Scaling', slug: 'recipe-scaling', description: 'Scale recipes up or down' },
    { id: 'cooking-conversions', name: 'Cooking Conversions', slug: 'cooking-conversions', description: 'Convert cooking measurements' },
    { id: 'calorie-counting', name: 'Calorie Counting', slug: 'calorie-counting', description: 'Track calories and macros in food' },
  ],
  physics: [
    { id: 'mechanics', name: 'Mechanics', slug: 'mechanics', description: 'Mechanical physics calculations' },
    { id: 'thermodynamics', name: 'Thermodynamics', slug: 'thermodynamics', description: 'Thermodynamic calculations' },
    { id: 'electricity', name: 'Electricity & Magnetism', slug: 'electricity', description: 'Electrical and magnetic calculations' },
    { id: 'optics', name: 'Optics', slug: 'optics', description: 'Optical physics calculations' },
    { id: 'waves', name: 'Waves', slug: 'waves', description: 'Wave physics calculations' },
    { id: 'nuclear', name: 'Nuclear Physics', slug: 'nuclear', description: 'Nuclear physics calculations' },
    { id: 'astrophysics', name: 'Astrophysics', slug: 'astrophysics', description: 'Astrophysical calculations' },
  ],
  sports: [
    { id: 'running', name: 'Running', slug: 'running', description: 'Running pace and training calculators' },
    { id: 'cycling', name: 'Cycling', slug: 'cycling', description: 'Cycling power and performance calculators' },
    { id: 'strength', name: 'Strength Training', slug: 'strength', description: 'Strength training and lifting calculators' },
    { id: 'team-sports', name: 'Team Sports', slug: 'team-sports', description: 'Team sports statistics and analysis' },
    { id: 'fitness-tracking', name: 'Fitness Tracking', slug: 'fitness-tracking', description: 'Fitness and activity tracking tools' },
  ],
  statistics: [
    { id: 'descriptive', name: 'Descriptive Statistics', slug: 'descriptive', description: 'Mean, median, mode, and other descriptive stats' },
    { id: 'probability', name: 'Probability', slug: 'probability', description: 'Probability calculations and distributions' },
    { id: 'regression', name: 'Regression & Correlation', slug: 'regression', description: 'Regression analysis and correlation' },
    { id: 'sampling', name: 'Sampling & Testing', slug: 'sampling', description: 'Statistical testing and sampling' },
  ],
  other: [
    { id: 'conversion', name: 'Unit Conversion', slug: 'conversion', description: 'Convert between different units' },
    { id: 'date', name: 'Date & Time', slug: 'date', description: 'Date calculations and time tools' },
    { id: 'engineering', name: 'Engineering', slug: 'engineering', description: 'Engineering calculations and tools' },
    { id: 'general', name: 'General Tools', slug: 'general', description: 'General purpose calculators' },
  ],
};

export interface CalculatorConfig {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: Category;
  subcategory?: string;
  authorId: string;
  component: React.ComponentType;
  content: React.ComponentType;
  meta: {
    title: string;
    description: string;
    keywords?: string[];
  };
}
