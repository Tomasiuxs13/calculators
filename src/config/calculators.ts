import dynamic from 'next/dynamic';
import { CalculatorConfig } from '@/types';
const BMICalculator = dynamic(() => import('@/components/calculators/bmi/BMICalculator'));
const BMIContent = dynamic(() => import('@/components/calculators/bmi/BMIContent'));
const LoanCalculator = dynamic(() => import('@/components/calculators/loan/LoanCalculator'));
const LoanContent = dynamic(() => import('@/components/calculators/loan/LoanContent'));
const PercentageCalculator = dynamic(() => import('@/components/calculators/percentage/PercentageCalculator'));
const PercentageContent = dynamic(() => import('@/components/calculators/percentage/PercentageContent'));
const LengthConverter = dynamic(() => import('@/components/calculators/length-converter/LengthConverter'));
const LengthConverterContent = dynamic(() => import('@/components/calculators/length-converter/LengthConverterContent'));
const WeightConverter = dynamic(() => import('@/components/calculators/weight-converter/WeightConverter'));
const WeightConverterContent = dynamic(() => import('@/components/calculators/weight-converter/WeightConverterContent'));
const TemperatureConverter = dynamic(() => import('@/components/calculators/temperature-converter/TemperatureConverter'));
const TemperatureConverterContent = dynamic(() => import('@/components/calculators/temperature-converter/TemperatureConverterContent'));
const AreaConverter = dynamic(() => import('@/components/calculators/area-converter/AreaConverter'));
const AreaConverterContent = dynamic(() => import('@/components/calculators/area-converter/AreaConverterContent'));
const VolumeConverter = dynamic(() => import('@/components/calculators/volume-converter/VolumeConverter'));
const VolumeConverterContent = dynamic(() => import('@/components/calculators/volume-converter/VolumeConverterContent'));
const SpeedConverter = dynamic(() => import('@/components/calculators/speed-converter/SpeedConverter'));
const SpeedConverterContent = dynamic(() => import('@/components/calculators/speed-converter/SpeedConverterContent'));
const TimeConverter = dynamic(() => import('@/components/calculators/time-converter/TimeConverter'));
const TimeConverterContent = dynamic(() => import('@/components/calculators/time-converter/TimeConverterContent'));
const EnergyConverter = dynamic(() => import('@/components/calculators/energy-converter/EnergyConverter'));
const EnergyConverterContent = dynamic(() => import('@/components/calculators/energy-converter/EnergyConverterContent'));
const PressureConverter = dynamic(() => import('@/components/calculators/pressure-converter/PressureConverter'));
const PressureConverterContent = dynamic(() => import('@/components/calculators/pressure-converter/PressureConverterContent'));
const DataStorageConverter = dynamic(() => import('@/components/calculators/data-storage-converter/DataStorageConverter'));
const DataStorageConverterContent = dynamic(() => import('@/components/calculators/data-storage-converter/DataStorageConverterContent'));
const AutoLoanCalculator = dynamic(() => import('@/components/calculators/auto-loan/AutoLoanCalculator'));
const AutoLoanCalculatorContent = dynamic(() => import('@/components/calculators/auto-loan/AutoLoanCalculatorContent'));
const BMRCalculator = dynamic(() => import('@/components/calculators/bmr/BMRCalculator'));
const BMRCalculatorContent = dynamic(() => import('@/components/calculators/bmr/BMRCalculatorContent'));
const AngleConverter = dynamic(() => import('@/components/calculators/angle-converter/AngleConverter'));
const AngleConverterContent = dynamic(() => import('@/components/calculators/angle-converter/AngleConverterContent'));
const FuelEconomyConverter = dynamic(() => import('@/components/calculators/fuel-economy-converter/FuelEconomyConverter'));
const FuelEconomyConverterContent = dynamic(() => import('@/components/calculators/fuel-economy-converter/FuelEconomyConverterContent'));
const PowerConverter = dynamic(() => import('@/components/calculators/power-converter/PowerConverter'));
const PowerConverterContent = dynamic(() => import('@/components/calculators/power-converter/PowerConverterContent'));
const ForceConverter = dynamic(() => import('@/components/calculators/force-converter/ForceConverter'));
const ForceConverterContent = dynamic(() => import('@/components/calculators/force-converter/ForceConverterContent'));
const TorqueConverter = dynamic(() => import('@/components/calculators/torque-converter/TorqueConverter'));
const TorqueConverterContent = dynamic(() => import('@/components/calculators/torque-converter/TorqueConverterContent'));
const FrequencyConverter = dynamic(() => import('@/components/calculators/frequency-converter/FrequencyConverter'));
const FrequencyConverterContent = dynamic(() => import('@/components/calculators/frequency-converter/FrequencyConverterContent'));
const ElectricCurrentConverter = dynamic(() => import('@/components/calculators/electric-current-converter/ElectricCurrentConverter'));
const ElectricCurrentConverterContent = dynamic(() => import('@/components/calculators/electric-current-converter/ElectricCurrentConverterContent'));
const VoltageConverter = dynamic(() => import('@/components/calculators/voltage-converter/VoltageConverter'));
const VoltageConverterContent = dynamic(() => import('@/components/calculators/voltage-converter/VoltageConverterContent'));
const ResistanceConverter = dynamic(() => import('@/components/calculators/resistance-converter/ResistanceConverter'));
const ResistanceConverterContent = dynamic(() => import('@/components/calculators/resistance-converter/ResistanceConverterContent'));
const CapacitanceConverter = dynamic(() => import('@/components/calculators/capacitance-converter/CapacitanceConverter'));
const CapacitanceConverterContent = dynamic(() => import('@/components/calculators/capacitance-converter/CapacitanceConverterContent'));
const PersonalLoanCalculator = dynamic(() => import('@/components/calculators/personal-loan-calculator/PersonalLoanCalculator'));
const PersonalLoanCalculatorContent = dynamic(() => import('@/components/calculators/personal-loan-calculator/PersonalLoanCalculatorContent'));
const StudentLoanCalculator = dynamic(() => import('@/components/calculators/student-loan-calculator/StudentLoanCalculator'));
const StudentLoanCalculatorContent = dynamic(() => import('@/components/calculators/student-loan-calculator/StudentLoanCalculatorContent'));
const CreditCardPayoffCalculator = dynamic(() => import('@/components/calculators/credit-card-payoff-calculator/CreditCardPayoffCalculator'));
const CreditCardPayoffCalculatorContent = dynamic(() => import('@/components/calculators/credit-card-payoff-calculator/CreditCardPayoffCalculatorContent'));
const CompoundInterestCalculator = dynamic(() => import('@/components/calculators/compound-interest-calculator/CompoundInterestCalculator'));
const CompoundInterestCalculatorContent = dynamic(() => import('@/components/calculators/compound-interest-calculator/CompoundInterestCalculatorContent'));
const SavingsCalculator = dynamic(() => import('@/components/calculators/savings-calculator/SavingsCalculator'));
const SavingsCalculatorContent = dynamic(() => import('@/components/calculators/savings-calculator/SavingsCalculatorContent'));
const TDEECalculator = dynamic(() => import('@/components/calculators/tdee-calculator/TDEECalculator'));
const TDEECalculatorContent = dynamic(() => import('@/components/calculators/tdee-calculator/TDEECalculatorContent'));
const BodyFatCalculator = dynamic(() => import('@/components/calculators/body-fat-calculator/BodyFatCalculator'));
const BodyFatCalculatorContent = dynamic(() => import('@/components/calculators/body-fat-calculator/BodyFatCalculatorContent'));
const CalorieCalculator = dynamic(() => import('@/components/calculators/calorie-calculator/CalorieCalculator'));
const CalorieCalculatorContent = dynamic(() => import('@/components/calculators/calorie-calculator/CalorieCalculatorContent'));
const MacroCalculator = dynamic(() => import('@/components/calculators/macro-calculator/MacroCalculator'));
const MacroCalculatorContent = dynamic(() => import('@/components/calculators/macro-calculator/MacroCalculatorContent'));
const FractionCalculator = dynamic(() => import('@/components/calculators/fraction-calculator/FractionCalculator'));
const FractionCalculatorContent = dynamic(() => import('@/components/calculators/fraction-calculator/FractionCalculatorContent'));
const RatioCalculator = dynamic(() => import('@/components/calculators/ratio-calculator/RatioCalculator'));
const RatioCalculatorContent = dynamic(() => import('@/components/calculators/ratio-calculator/RatioCalculatorContent'));
const SquareRootCalculator = dynamic(() => import('@/components/calculators/square-root-calculator/SquareRootCalculator'));
const SquareRootCalculatorContent = dynamic(() => import('@/components/calculators/square-root-calculator/SquareRootCalculatorContent'));
const QuadraticCalculator = dynamic(() => import('@/components/calculators/quadratic-calculator/QuadraticCalculator'));
const QuadraticCalculatorContent = dynamic(() => import('@/components/calculators/quadratic-calculator/QuadraticCalculatorContent'));
const MeanCalculator = dynamic(() => import('@/components/calculators/mean-calculator/MeanCalculator'));
const MeanCalculatorContent = dynamic(() => import('@/components/calculators/mean-calculator/MeanCalculatorContent'));
const MedianCalculator = dynamic(() => import('@/components/calculators/median-calculator/MedianCalculator'));
const MedianCalculatorContent = dynamic(() => import('@/components/calculators/median-calculator/MedianCalculatorContent'));
const StandardDeviationCalculator = dynamic(() => import('@/components/calculators/standard-deviation-calculator/StandardDeviationCalculator'));
const StandardDeviationCalculatorContent = dynamic(() => import('@/components/calculators/standard-deviation-calculator/StandardDeviationCalculatorContent'));
const AgeCalculator = dynamic(() => import('@/components/calculators/age-calculator/AgeCalculator'));
const AgeCalculatorContent = dynamic(() => import('@/components/calculators/age-calculator/AgeCalculatorContent'));
const DateCalculator = dynamic(() => import('@/components/calculators/date-calculator/DateCalculator'));
const DateCalculatorContent = dynamic(() => import('@/components/calculators/date-calculator/DateCalculatorContent'));
const FuelCostCalculator = dynamic(() => import('@/components/calculators/fuel-cost-calculator/FuelCostCalculator'));
const FuelCostCalculatorContent = dynamic(() => import('@/components/calculators/fuel-cost-calculator/FuelCostCalculatorContent'));
const RefinanceCalculator = dynamic(() => import('@/components/calculators/refinance-calculator/RefinanceCalculator'));
const RefinanceCalculatorContent = dynamic(() => import('@/components/calculators/refinance-calculator/RefinanceCalculatorContent'));
const HomeEquityLoanCalculator = dynamic(() => import('@/components/calculators/home-equity-loan-calculator/HomeEquityLoanCalculator'));
const HomeEquityLoanCalculatorContent = dynamic(() => import('@/components/calculators/home-equity-loan-calculator/HomeEquityLoanCalculatorContent'));
const DebtConsolidationCalculator = dynamic(() => import('@/components/calculators/debt-consolidation-calculator/DebtConsolidationCalculator'));
const DebtConsolidationCalculatorContent = dynamic(() => import('@/components/calculators/debt-consolidation-calculator/DebtConsolidationCalculatorContent'));
const InvestmentReturnCalculator = dynamic(() => import('@/components/calculators/investment-return-calculator/InvestmentReturnCalculator'));
const InvestmentReturnCalculatorContent = dynamic(() => import('@/components/calculators/investment-return-calculator/InvestmentReturnCalculatorContent'));
const FutureValueCalculator = dynamic(() => import('@/components/calculators/future-value-calculator/FutureValueCalculator'));
const FutureValueCalculatorContent = dynamic(() => import('@/components/calculators/future-value-calculator/FutureValueCalculatorContent'));
const PresentValueCalculator = dynamic(() => import('@/components/calculators/present-value-calculator/PresentValueCalculator'));
const PresentValueCalculatorContent = dynamic(() => import('@/components/calculators/present-value-calculator/PresentValueCalculatorContent'));
const AnnuityCalculator = dynamic(() => import('@/components/calculators/annuity-calculator/AnnuityCalculator'));
const AnnuityCalculatorContent = dynamic(() => import('@/components/calculators/annuity-calculator/AnnuityCalculatorContent'));
const Retirement401kCalculator = dynamic(() => import('@/components/calculators/401k-calculator/Retirement401kCalculator'));
const Retirement401kCalculatorContent = dynamic(() => import('@/components/calculators/401k-calculator/Retirement401kCalculatorContent'));
const IRACalculator = dynamic(() => import('@/components/calculators/ira-calculator/IRACalculator'));
const IRACalculatorContent = dynamic(() => import('@/components/calculators/ira-calculator/IRACalculatorContent'));
const IncomeTaxCalculator = dynamic(() => import('@/components/calculators/income-tax-calculator/IncomeTaxCalculator'));
const IncomeTaxCalculatorContent = dynamic(() => import('@/components/calculators/income-tax-calculator/IncomeTaxCalculatorContent'));
const SalesTaxCalculator = dynamic(() => import('@/components/calculators/sales-tax-calculator/SalesTaxCalculator'));
const SalesTaxCalculatorContent = dynamic(() => import('@/components/calculators/sales-tax-calculator/SalesTaxCalculatorContent'));
const TipCalculator = dynamic(() => import('@/components/calculators/tip-calculator/TipCalculator'));
const TipCalculatorContent = dynamic(() => import('@/components/calculators/tip-calculator/TipCalculatorContent'));
const DiscountCalculator = dynamic(() => import('@/components/calculators/discount-calculator/DiscountCalculator'));
const DiscountCalculatorContent = dynamic(() => import('@/components/calculators/discount-calculator/DiscountCalculatorContent'));
const BudgetCalculator = dynamic(() => import('@/components/calculators/budget-calculator/BudgetCalculator'));
const BudgetCalculatorContent = dynamic(() => import('@/components/calculators/budget-calculator/BudgetCalculatorContent'));
const DebtToIncomeCalculator = dynamic(() => import('@/components/calculators/debt-to-income-calculator/DebtToIncomeCalculator'));
const DebtToIncomeCalculatorContent = dynamic(() => import('@/components/calculators/debt-to-income-calculator/DebtToIncomeCalculatorContent'));
const SalaryCalculator = dynamic(() => import('@/components/calculators/salary-calculator/SalaryCalculator'));
const SalaryCalculatorContent = dynamic(() => import('@/components/calculators/salary-calculator/SalaryCalculatorContent'));
const IdealWeightCalculator = dynamic(() => import('@/components/calculators/ideal-weight-calculator/IdealWeightCalculator'));
const IdealWeightCalculatorContent = dynamic(() => import('@/components/calculators/ideal-weight-calculator/IdealWeightCalculatorContent'));
const BodySurfaceAreaCalculator = dynamic(() => import('@/components/calculators/body-surface-area-calculator/BodySurfaceAreaCalculator'));
const BodySurfaceAreaCalculatorContent = dynamic(() => import('@/components/calculators/body-surface-area-calculator/BodySurfaceAreaCalculatorContent'));
const LeanBodyMassCalculator = dynamic(() => import('@/components/calculators/lean-body-mass-calculator/LeanBodyMassCalculator'));
const LeanBodyMassCalculatorContent = dynamic(() => import('@/components/calculators/lean-body-mass-calculator/LeanBodyMassCalculatorContent'));
const WaistToHipRatioCalculator = dynamic(() => import('@/components/calculators/waist-to-hip-ratio-calculator/WaistToHipRatioCalculator'));
const WaistToHipRatioCalculatorContent = dynamic(() => import('@/components/calculators/waist-to-hip-ratio-calculator/WaistToHipRatioCalculatorContent'));
const RunningPaceCalculator = dynamic(() => import('@/components/calculators/running-pace-calculator/RunningPaceCalculator'));
const RunningPaceCalculatorContent = dynamic(() => import('@/components/calculators/running-pace-calculator/RunningPaceCalculatorContent'));
const StepsToMilesCalculator = dynamic(() => import('@/components/calculators/steps-to-miles-calculator/StepsToMilesCalculator'));
const StepsToMilesCalculatorContent = dynamic(() => import('@/components/calculators/steps-to-miles-calculator/StepsToMilesCalculatorContent'));
const ExerciseCalorieBurnCalculator = dynamic(() => import('@/components/calculators/exercise-calorie-burn-calculator/ExerciseCalorieBurnCalculator'));
const ExerciseCalorieBurnCalculatorContent = dynamic(() => import('@/components/calculators/exercise-calorie-burn-calculator/ExerciseCalorieBurnCalculatorContent'));
const ProteinCalculator = dynamic(() => import('@/components/calculators/protein-calculator/ProteinCalculator'));
const ProteinCalculatorContent = dynamic(() => import('@/components/calculators/protein-calculator/ProteinCalculatorContent'));
const WaterIntakeCalculator = dynamic(() => import('@/components/calculators/water-intake-calculator/WaterIntakeCalculator'));
const WaterIntakeCalculatorContent = dynamic(() => import('@/components/calculators/water-intake-calculator/WaterIntakeCalculatorContent'));
const HeartRateCalculator = dynamic(() => import('@/components/calculators/heart-rate-calculator/HeartRateCalculator'));
const HeartRateCalculatorContent = dynamic(() => import('@/components/calculators/heart-rate-calculator/HeartRateCalculatorContent'));
const PregnancyDueDateCalculator = dynamic(() => import('@/components/calculators/pregnancy-due-date-calculator/PregnancyDueDateCalculator'));
const PregnancyDueDateCalculatorContent = dynamic(() => import('@/components/calculators/pregnancy-due-date-calculator/PregnancyDueDateCalculatorContent'));
const PercentageIncreaseCalculator = dynamic(() => import('@/components/calculators/percentage-increase-calculator/PercentageIncreaseCalculator'));
const PercentageIncreaseCalculatorContent = dynamic(() => import('@/components/calculators/percentage-increase-calculator/PercentageIncreaseCalculatorContent'));
const ProportionCalculator = dynamic(() => import('@/components/calculators/proportion-calculator/ProportionCalculator'));
const ProportionCalculatorContent = dynamic(() => import('@/components/calculators/proportion-calculator/ProportionCalculatorContent'));
const CubeRootCalculator = dynamic(() => import('@/components/calculators/cube-root-calculator/CubeRootCalculator'));
const CubeRootCalculatorContent = dynamic(() => import('@/components/calculators/cube-root-calculator/CubeRootCalculatorContent'));
const ExponentCalculator = dynamic(() => import('@/components/calculators/exponent-calculator/ExponentCalculator'));
const ExponentCalculatorContent = dynamic(() => import('@/components/calculators/exponent-calculator/ExponentCalculatorContent'));
const LogarithmCalculator = dynamic(() => import('@/components/calculators/logarithm-calculator/LogarithmCalculator'));
const LogarithmCalculatorContent = dynamic(() => import('@/components/calculators/logarithm-calculator/LogarithmCalculatorContent'));
const FactorialCalculator = dynamic(() => import('@/components/calculators/factorial-calculator/FactorialCalculator'));
const FactorialCalculatorContent = dynamic(() => import('@/components/calculators/factorial-calculator/FactorialCalculatorContent'));
const GCDCalculator = dynamic(() => import('@/components/calculators/gcd-calculator/GCDCalculator'));
const GCDCalculatorContent = dynamic(() => import('@/components/calculators/gcd-calculator/GCDCalculatorContent'));
const LCMCalculator = dynamic(() => import('@/components/calculators/lcm-calculator/LCMCalculator'));
const LCMCalculatorContent = dynamic(() => import('@/components/calculators/lcm-calculator/LCMCalculatorContent'));
const LinearEquationSolver = dynamic(() => import('@/components/calculators/linear-equation-solver/LinearEquationSolver'));
const LinearEquationSolverContent = dynamic(() => import('@/components/calculators/linear-equation-solver/LinearEquationSolverContent'));
const DistanceCalculator = dynamic(() => import('@/components/calculators/distance-calculator/DistanceCalculator'));
const DistanceCalculatorContent = dynamic(() => import('@/components/calculators/distance-calculator/DistanceCalculatorContent'));
const PythagoreanTheoremCalculator = dynamic(() => import('@/components/calculators/pythagorean-theorem-calculator/PythagoreanTheoremCalculator'));
const PythagoreanTheoremCalculatorContent = dynamic(() => import('@/components/calculators/pythagorean-theorem-calculator/PythagoreanTheoremCalculatorContent'));
const CircleCalculator = dynamic(() => import('@/components/calculators/circle-calculator/CircleCalculator'));
const CircleCalculatorContent = dynamic(() => import('@/components/calculators/circle-calculator/CircleCalculatorContent'));
const TriangleCalculator = dynamic(() => import('@/components/calculators/triangle-calculator/TriangleCalculator'));
const TriangleCalculatorContent = dynamic(() => import('@/components/calculators/triangle-calculator/TriangleCalculatorContent'));
const VarianceCalculator = dynamic(() => import('@/components/calculators/variance-calculator/VarianceCalculator'));
const VarianceCalculatorContent = dynamic(() => import('@/components/calculators/variance-calculator/VarianceCalculatorContent'));
const RangeCalculator = dynamic(() => import('@/components/calculators/range-calculator/RangeCalculator'));
const RangeCalculatorContent = dynamic(() => import('@/components/calculators/range-calculator/RangeCalculatorContent'));
const PercentileCalculator = dynamic(() => import('@/components/calculators/percentile-calculator/PercentileCalculator'));
const PercentileCalculatorContent = dynamic(() => import('@/components/calculators/percentile-calculator/PercentileCalculatorContent'));
const ZScoreCalculator = dynamic(() => import('@/components/calculators/z-score-calculator/ZScoreCalculator'));
const ZScoreCalculatorContent = dynamic(() => import('@/components/calculators/z-score-calculator/ZScoreCalculatorContent'));
const ProbabilityCalculator = dynamic(() => import('@/components/calculators/probability-calculator/ProbabilityCalculator'));
const ProbabilityCalculatorContent = dynamic(() => import('@/components/calculators/probability-calculator/ProbabilityCalculatorContent'));
const CombinationCalculator = dynamic(() => import('@/components/calculators/combination-calculator/CombinationCalculator'));
const CombinationCalculatorContent = dynamic(() => import('@/components/calculators/combination-calculator/CombinationCalculatorContent'));
const PermutationCalculator = dynamic(() => import('@/components/calculators/permutation-calculator/PermutationCalculator'));
const PermutationCalculatorContent = dynamic(() => import('@/components/calculators/permutation-calculator/PermutationCalculatorContent'));
const TimeZoneConverter = dynamic(() => import('@/components/calculators/time-zone-converter/TimeZoneConverter'));
const TimeZoneConverterContent = dynamic(() => import('@/components/calculators/time-zone-converter/TimeZoneConverterContent'));
const PaintCalculator = dynamic(() => import('@/components/calculators/paint-calculator/PaintCalculator'));
const PaintCalculatorContent = dynamic(() => import('@/components/calculators/paint-calculator/PaintCalculatorContent'));
const TileCalculator = dynamic(() => import('@/components/calculators/tile-calculator/TileCalculator'));
const TileCalculatorContent = dynamic(() => import('@/components/calculators/tile-calculator/TileCalculatorContent'));
const ForceCalculator = dynamic(() => import('@/components/calculators/force-calculator/ForceCalculator'));
const ForceCalculatorContent = dynamic(() => import('@/components/calculators/force-calculator/ForceCalculatorContent'));
const AccelerationCalculator = dynamic(() => import('@/components/calculators/acceleration-calculator/AccelerationCalculator'));
const AccelerationCalculatorContent = dynamic(() => import('@/components/calculators/acceleration-calculator/AccelerationCalculatorContent'));
const KineticEnergyCalculator = dynamic(() => import('@/components/calculators/kinetic-energy-calculator/KineticEnergyCalculator'));
const KineticEnergyCalculatorContent = dynamic(() => import('@/components/calculators/kinetic-energy-calculator/KineticEnergyCalculatorContent'));
const PotentialEnergyCalculator = dynamic(() => import('@/components/calculators/potential-energy-calculator/PotentialEnergyCalculator'));
const PotentialEnergyCalculatorContent = dynamic(() => import('@/components/calculators/potential-energy-calculator/PotentialEnergyCalculatorContent'));
const OhmsLawCalculator = dynamic(() => import('@/components/calculators/ohms-law-calculator/OhmsLawCalculator'));
const OhmsLawCalculatorContent = dynamic(() => import('@/components/calculators/ohms-law-calculator/OhmsLawCalculatorContent'));
const HeightConverter = dynamic(() => import('@/components/calculators/height-converter/HeightConverter'));
const HeightConverterContent = dynamic(() => import('@/components/calculators/height-converter/HeightConverterContent'));
const CurrencyConverter = dynamic(() => import('@/components/calculators/currency-converter/CurrencyConverter'));
const CurrencyConverterContent = dynamic(() => import('@/components/calculators/currency-converter/CurrencyConverterContent'));
const ModeCalculator = dynamic(() => import('@/components/calculators/mode-calculator/ModeCalculator'));
const ModeCalculatorContent = dynamic(() => import('@/components/calculators/mode-calculator/ModeCalculatorContent'));
const DistanceConverter = dynamic(() => import('@/components/calculators/distance-converter/DistanceConverter'));
const DistanceConverterContent = dynamic(() => import('@/components/calculators/distance-converter/DistanceConverterContent'));
const MileToKilometerConverter = dynamic(() => import('@/components/calculators/mile-to-kilometer-converter/MileToKilometerConverter'));
const MileToKilometerConverterContent = dynamic(() => import('@/components/calculators/mile-to-kilometer-converter/MileToKilometerConverterContent'));
const InchToCentimeterConverter = dynamic(() => import('@/components/calculators/inch-to-centimeter-converter/InchToCentimeterConverter'));
const InchToCentimeterConverterContent = dynamic(() => import('@/components/calculators/inch-to-centimeter-converter/InchToCentimeterConverterContent'));
const FootToMeterConverter = dynamic(() => import('@/components/calculators/foot-to-meter-converter/FootToMeterConverter'));
const FootToMeterConverterContent = dynamic(() => import('@/components/calculators/foot-to-meter-converter/FootToMeterConverterContent'));
const YardToMeterConverter = dynamic(() => import('@/components/calculators/yard-to-meter-converter/YardToMeterConverter'));
const YardToMeterConverterContent = dynamic(() => import('@/components/calculators/yard-to-meter-converter/YardToMeterConverterContent'));
const NauticalMileConverter = dynamic(() => import('@/components/calculators/nautical-mile-converter/NauticalMileConverter'));
const NauticalMileConverterContent = dynamic(() => import('@/components/calculators/nautical-mile-converter/NauticalMileConverterContent'));
const PoundToKilogramConverter = dynamic(() => import('@/components/calculators/pound-to-kilogram-converter/PoundToKilogramConverter'));
const PoundToKilogramConverterContent = dynamic(() => import('@/components/calculators/pound-to-kilogram-converter/PoundToKilogramConverterContent'));
const OunceToGramConverter = dynamic(() => import('@/components/calculators/ounce-to-gram-converter/OunceToGramConverter'));
const OunceToGramConverterContent = dynamic(() => import('@/components/calculators/ounce-to-gram-converter/OunceToGramConverterContent'));
const StoneToKilogramConverter = dynamic(() => import('@/components/calculators/stone-to-kilogram-converter/StoneToKilogramConverter'));
const StoneToKilogramConverterContent = dynamic(() => import('@/components/calculators/stone-to-kilogram-converter/StoneToKilogramConverterContent'));
const TonneToKilogramConverter = dynamic(() => import('@/components/calculators/tonne-to-kilogram-converter/TonneToKilogramConverter'));
const TonneToKilogramConverterContent = dynamic(() => import('@/components/calculators/tonne-to-kilogram-converter/TonneToKilogramConverterContent'));
const LiterToGallonConverter = dynamic(() => import('@/components/calculators/liter-to-gallon-converter/LiterToGallonConverter'));
const LiterToGallonConverterContent = dynamic(() => import('@/components/calculators/liter-to-gallon-converter/LiterToGallonConverterContent'));
const CubicMeterConverter = dynamic(() => import('@/components/calculators/cubic-meter-converter/CubicMeterConverter'));
const CubicMeterConverterContent = dynamic(() => import('@/components/calculators/cubic-meter-converter/CubicMeterConverterContent'));
const CupToMilliliterConverter = dynamic(() => import('@/components/calculators/cup-to-milliliter-converter/CupToMilliliterConverter'));
const CupToMilliliterConverterContent = dynamic(() => import('@/components/calculators/cup-to-milliliter-converter/CupToMilliliterConverterContent'));
const FluidOunceConverter = dynamic(() => import('@/components/calculators/fluid-ounce-converter/FluidOunceConverter'));
const FluidOunceConverterContent = dynamic(() => import('@/components/calculators/fluid-ounce-converter/FluidOunceConverterContent'));
const CelsiusToFahrenheitConverter = dynamic(() => import('@/components/calculators/celsius-to-fahrenheit-converter/CelsiusToFahrenheitConverter'));
const CelsiusToFahrenheitConverterContent = dynamic(() => import('@/components/calculators/celsius-to-fahrenheit-converter/CelsiusToFahrenheitConverterContent'));
const SquareFootToSquareMeterConverter = dynamic(() => import('@/components/calculators/square-foot-to-square-meter-converter/SquareFootToSquareMeterConverter'));
const SquareFootToSquareMeterConverterContent = dynamic(() => import('@/components/calculators/square-foot-to-square-meter-converter/SquareFootToSquareMeterConverterContent'));
const AcreToHectareConverter = dynamic(() => import('@/components/calculators/acre-to-hectare-converter/AcreToHectareConverter'));
const AcreToHectareConverterContent = dynamic(() => import('@/components/calculators/acre-to-hectare-converter/AcreToHectareConverterContent'));
const SquareKilometerToSquareMileConverter = dynamic(() => import('@/components/calculators/square-kilometer-to-square-mile-converter/SquareKilometerToSquareMileConverter'));
const SquareKilometerToSquareMileConverterContent = dynamic(() => import('@/components/calculators/square-kilometer-to-square-mile-converter/SquareKilometerToSquareMileConverterContent'));
const LoanComparisonCalculator = dynamic(() => import('@/components/calculators/loan-comparison-calculator/LoanComparisonCalculator'));
const LoanComparisonCalculatorContent = dynamic(() => import('@/components/calculators/loan-comparison-calculator/LoanComparisonCalculatorContent'));
const AmortizationScheduleGenerator = dynamic(() => import('@/components/calculators/amortization-schedule-generator/AmortizationScheduleGenerator'));
const AmortizationScheduleGeneratorContent = dynamic(() => import('@/components/calculators/amortization-schedule-generator/AmortizationScheduleGeneratorContent'));
const StockReturnCalculator = dynamic(() => import('@/components/calculators/stock-return-calculator/StockReturnCalculator'));
const StockReturnCalculatorContent = dynamic(() => import('@/components/calculators/stock-return-calculator/StockReturnCalculatorContent'));
const DividendCalculator = dynamic(() => import('@/components/calculators/dividend-calculator/DividendCalculator'));
const DividendCalculatorContent = dynamic(() => import('@/components/calculators/dividend-calculator/DividendCalculatorContent'));
const CapitalGainsTaxCalculator = dynamic(() => import('@/components/calculators/capital-gains-tax-calculator/CapitalGainsTaxCalculator'));
const CapitalGainsTaxCalculatorContent = dynamic(() => import('@/components/calculators/capital-gains-tax-calculator/CapitalGainsTaxCalculatorContent'));
const PropertyTaxCalculator = dynamic(() => import('@/components/calculators/property-tax-calculator/PropertyTaxCalculator'));
const PropertyTaxCalculatorContent = dynamic(() => import('@/components/calculators/property-tax-calculator/PropertyTaxCalculatorContent'));
const VATCalculator = dynamic(() => import('@/components/calculators/vat-calculator/VATCalculator'));
const VATCalculatorContent = dynamic(() => import('@/components/calculators/vat-calculator/VATCalculatorContent'));
const TaxRefundCalculator = dynamic(() => import('@/components/calculators/tax-refund-calculator/TaxRefundCalculator'));
const TaxRefundCalculatorContent = dynamic(() => import('@/components/calculators/tax-refund-calculator/TaxRefundCalculatorContent'));
const TaxBracketCalculator = dynamic(() => import('@/components/calculators/tax-bracket-calculator/TaxBracketCalculator'));
const TaxBracketCalculatorContent = dynamic(() => import('@/components/calculators/tax-bracket-calculator/TaxBracketCalculatorContent'));
const ExpenseTrackerCalculator = dynamic(() => import('@/components/calculators/expense-tracker-calculator/ExpenseTrackerCalculator'));
const ExpenseTrackerCalculatorContent = dynamic(() => import('@/components/calculators/expense-tracker-calculator/ExpenseTrackerCalculatorContent'));
const CostOfLivingCalculator = dynamic(() => import('@/components/calculators/cost-of-living-calculator/CostOfLivingCalculator'));
const CostOfLivingCalculatorContent = dynamic(() => import('@/components/calculators/cost-of-living-calculator/CostOfLivingCalculatorContent'));
const RetirementCalculator = dynamic(() => import('@/components/calculators/retirement-calculator/RetirementCalculator'));
const RetirementCalculatorContent = dynamic(() => import('@/components/calculators/retirement-calculator/RetirementCalculatorContent'));
const SocialSecurityCalculator = dynamic(() => import('@/components/calculators/social-security-calculator/SocialSecurityCalculator'));
const SocialSecurityCalculatorContent = dynamic(() => import('@/components/calculators/social-security-calculator/SocialSecurityCalculatorContent'));
const PensionCalculator = dynamic(() => import('@/components/calculators/pension-calculator/PensionCalculator'));
const PensionCalculatorContent = dynamic(() => import('@/components/calculators/pension-calculator/PensionCalculatorContent'));
const RetirementSavingsGoalCalculator = dynamic(() => import('@/components/calculators/retirement-savings-goal-calculator/RetirementSavingsGoalCalculator'));
const RetirementSavingsGoalCalculatorContent = dynamic(() => import('@/components/calculators/retirement-savings-goal-calculator/RetirementSavingsGoalCalculatorContent'));
const LifeInsuranceCalculator = dynamic(() => import('@/components/calculators/life-insurance-calculator/LifeInsuranceCalculator'));
const LifeInsuranceCalculatorContent = dynamic(() => import('@/components/calculators/life-insurance-calculator/LifeInsuranceCalculatorContent'));
const HealthInsuranceCalculator = dynamic(() => import('@/components/calculators/health-insurance-calculator/HealthInsuranceCalculator'));
const HealthInsuranceCalculatorContent = dynamic(() => import('@/components/calculators/health-insurance-calculator/HealthInsuranceCalculatorContent'));
const CarInsuranceCalculator = dynamic(() => import('@/components/calculators/car-insurance-calculator/CarInsuranceCalculator'));
const CarInsuranceCalculatorContent = dynamic(() => import('@/components/calculators/car-insurance-calculator/CarInsuranceCalculatorContent'));
const ExchangeRateCalculator = dynamic(() => import('@/components/calculators/exchange-rate-calculator/ExchangeRateCalculator'));
const ExchangeRateCalculatorContent = dynamic(() => import('@/components/calculators/exchange-rate-calculator/ExchangeRateCalculatorContent'));
const BodyTypeCalculator = dynamic(() => import('@/components/calculators/body-type-calculator/BodyTypeCalculator'));
const BodyTypeCalculatorContent = dynamic(() => import('@/components/calculators/body-type-calculator/BodyTypeCalculatorContent'));
const VO2MaxCalculator = dynamic(() => import('@/components/calculators/vo2-max-calculator/VO2MaxCalculator'));
const VO2MaxCalculatorContent = dynamic(() => import('@/components/calculators/vo2-max-calculator/VO2MaxCalculatorContent'));
const TrainingZoneCalculator = dynamic(() => import('@/components/calculators/training-zone-calculator/TrainingZoneCalculator'));
const TrainingZoneCalculatorContent = dynamic(() => import('@/components/calculators/training-zone-calculator/TrainingZoneCalculatorContent'));
const OneRepMaxCalculator = dynamic(() => import('@/components/calculators/one-rep-max-calculator/OneRepMaxCalculator'));
const OneRepMaxCalculatorContent = dynamic(() => import('@/components/calculators/one-rep-max-calculator/OneRepMaxCalculatorContent'));
const CarbCalculator = dynamic(() => import('@/components/calculators/carb-calculator/CarbCalculator'));
const CarbCalculatorContent = dynamic(() => import('@/components/calculators/carb-calculator/CarbCalculatorContent'));
const FatCalculator = dynamic(() => import('@/components/calculators/fat-calculator/FatCalculator'));
const FatCalculatorContent = dynamic(() => import('@/components/calculators/fat-calculator/FatCalculatorContent'));
const FiberCalculator = dynamic(() => import('@/components/calculators/fiber-calculator/FiberCalculator'));
const FiberCalculatorContent = dynamic(() => import('@/components/calculators/fiber-calculator/FiberCalculatorContent'));
const MealPrepCalculator = dynamic(() => import('@/components/calculators/meal-prep-calculator/MealPrepCalculator'));
const MealPrepCalculatorContent = dynamic(() => import('@/components/calculators/meal-prep-calculator/MealPrepCalculatorContent'));
const PortionSizeCalculator = dynamic(() => import('@/components/calculators/portion-size-calculator/PortionSizeCalculator'));
const PortionSizeCalculatorContent = dynamic(() => import('@/components/calculators/portion-size-calculator/PortionSizeCalculatorContent'));
const BloodPressureCalculator = dynamic(() => import('@/components/calculators/blood-pressure-calculator/BloodPressureCalculator'));
const BloodPressureCalculatorContent = dynamic(() => import('@/components/calculators/blood-pressure-calculator/BloodPressureCalculatorContent'));
const SleepCalculator = dynamic(() => import('@/components/calculators/sleep-calculator/SleepCalculator'));
const SleepCalculatorContent = dynamic(() => import('@/components/calculators/sleep-calculator/SleepCalculatorContent'));
const VitaminCalculator = dynamic(() => import('@/components/calculators/vitamin-calculator/VitaminCalculator'));
const VitaminCalculatorContent = dynamic(() => import('@/components/calculators/vitamin-calculator/VitaminCalculatorContent'));
const DrugDosageCalculator = dynamic(() => import('@/components/calculators/drug-dosage-calculator/DrugDosageCalculator'));
const DrugDosageCalculatorContent = dynamic(() => import('@/components/calculators/drug-dosage-calculator/DrugDosageCalculatorContent'));
const OvulationCalculator = dynamic(() => import('@/components/calculators/ovulation-calculator/OvulationCalculator'));
const OvulationCalculatorContent = dynamic(() => import('@/components/calculators/ovulation-calculator/OvulationCalculatorContent'));
const PregnancyWeekCalculator = dynamic(() => import('@/components/calculators/pregnancy-week-calculator/PregnancyWeekCalculator'));
const PregnancyWeekCalculatorContent = dynamic(() => import('@/components/calculators/pregnancy-week-calculator/PregnancyWeekCalculatorContent'));
const BabyGrowthCalculator = dynamic(() => import('@/components/calculators/baby-growth-calculator/BabyGrowthCalculator'));
const BabyGrowthCalculatorContent = dynamic(() => import('@/components/calculators/baby-growth-calculator/BabyGrowthCalculatorContent'));
const PregnancyWeightGainCalculator = dynamic(() => import('@/components/calculators/pregnancy-weight-gain-calculator/PregnancyWeightGainCalculator'));
const PregnancyWeightGainCalculatorContent = dynamic(() => import('@/components/calculators/pregnancy-weight-gain-calculator/PregnancyWeightGainCalculatorContent'));
const BreastfeedingCalculator = dynamic(() => import('@/components/calculators/breastfeeding-calculator/BreastfeedingCalculator'));
const BreastfeedingCalculatorContent = dynamic(() => import('@/components/calculators/breastfeeding-calculator/BreastfeedingCalculatorContent'));
const PrimeNumberCalculator = dynamic(() => import('@/components/calculators/prime-number-calculator/PrimeNumberCalculator'));
const PrimeNumberCalculatorContent = dynamic(() => import('@/components/calculators/prime-number-calculator/PrimeNumberCalculatorContent'));
const ScientificCalculator = dynamic(() => import('@/components/calculators/scientific-calculator/ScientificCalculator'));
const ScientificCalculatorContent = dynamic(() => import('@/components/calculators/scientific-calculator/ScientificCalculatorContent'));
const NumberBaseConverter = dynamic(() => import('@/components/calculators/number-base-converter/NumberBaseConverter'));
const NumberBaseConverterContent = dynamic(() => import('@/components/calculators/number-base-converter/NumberBaseConverterContent'));
const SystemOfEquationsSolver = dynamic(() => import('@/components/calculators/system-of-equations-solver/SystemOfEquationsSolver'));
const SystemOfEquationsSolverContent = dynamic(() => import('@/components/calculators/system-of-equations-solver/SystemOfEquationsSolverContent'));
const PolynomialCalculator = dynamic(() => import('@/components/calculators/polynomial-calculator/PolynomialCalculator'));
const PolynomialCalculatorContent = dynamic(() => import('@/components/calculators/polynomial-calculator/PolynomialCalculatorContent'));
const MatrixCalculator = dynamic(() => import('@/components/calculators/matrix-calculator/MatrixCalculator'));
const MatrixCalculatorContent = dynamic(() => import('@/components/calculators/matrix-calculator/MatrixCalculatorContent'));
const DeterminantCalculator = dynamic(() => import('@/components/calculators/determinant-calculator/DeterminantCalculator'));
const DeterminantCalculatorContent = dynamic(() => import('@/components/calculators/determinant-calculator/DeterminantCalculatorContent'));
const InverseMatrixCalculator = dynamic(() => import('@/components/calculators/inverse-matrix-calculator/InverseMatrixCalculator'));
const InverseMatrixCalculatorContent = dynamic(() => import('@/components/calculators/inverse-matrix-calculator/InverseMatrixCalculatorContent'));
const SlopeCalculator = dynamic(() => import('@/components/calculators/slope-calculator/SlopeCalculator'));
const SlopeCalculatorContent = dynamic(() => import('@/components/calculators/slope-calculator/SlopeCalculatorContent'));
const MidpointCalculator = dynamic(() => import('@/components/calculators/midpoint-calculator/MidpointCalculator'));
const MidpointCalculatorContent = dynamic(() => import('@/components/calculators/midpoint-calculator/MidpointCalculatorContent'));
const AreaCalculator = dynamic(() => import('@/components/calculators/area-calculator/AreaCalculator'));
const AreaCalculatorContent = dynamic(() => import('@/components/calculators/area-calculator/AreaCalculatorContent'));
const VolumeCalculator = dynamic(() => import('@/components/calculators/volume-calculator/VolumeCalculator'));
const VolumeCalculatorContent = dynamic(() => import('@/components/calculators/volume-calculator/VolumeCalculatorContent'));
const PerimeterCalculator = dynamic(() => import('@/components/calculators/perimeter-calculator/PerimeterCalculator'));
const PerimeterCalculatorContent = dynamic(() => import('@/components/calculators/perimeter-calculator/PerimeterCalculatorContent'));
const CircumferenceCalculator = dynamic(() => import('@/components/calculators/circumference-calculator/CircumferenceCalculator'));
const CircumferenceCalculatorContent = dynamic(() => import('@/components/calculators/circumference-calculator/CircumferenceCalculatorContent'));
const RectangleCalculator = dynamic(() => import('@/components/calculators/rectangle-calculator/RectangleCalculator'));
const RectangleCalculatorContent = dynamic(() => import('@/components/calculators/rectangle-calculator/RectangleCalculatorContent'));
const CylinderCalculator = dynamic(() => import('@/components/calculators/cylinder-calculator/CylinderCalculator'));
const CylinderCalculatorContent = dynamic(() => import('@/components/calculators/cylinder-calculator/CylinderCalculatorContent'));
const QuartileCalculator = dynamic(() => import('@/components/calculators/quartile-calculator/QuartileCalculator'));
const QuartileCalculatorContent = dynamic(() => import('@/components/calculators/quartile-calculator/QuartileCalculatorContent'));
const OutlierCalculator = dynamic(() => import('@/components/calculators/outlier-calculator/OutlierCalculator'));
const OutlierCalculatorContent = dynamic(() => import('@/components/calculators/outlier-calculator/OutlierCalculatorContent'));
const BinomialDistributionCalculator = dynamic(() => import('@/components/calculators/binomial-distribution-calculator/BinomialDistributionCalculator'));
const BinomialDistributionCalculatorContent = dynamic(() => import('@/components/calculators/binomial-distribution-calculator/BinomialDistributionCalculatorContent'));
const NormalDistributionCalculator = dynamic(() => import('@/components/calculators/normal-distribution-calculator/NormalDistributionCalculator'));
const NormalDistributionCalculatorContent = dynamic(() => import('@/components/calculators/normal-distribution-calculator/NormalDistributionCalculatorContent'));
const PoissonDistributionCalculator = dynamic(() => import('@/components/calculators/poisson-distribution-calculator/PoissonDistributionCalculator'));
const PoissonDistributionCalculatorContent = dynamic(() => import('@/components/calculators/poisson-distribution-calculator/PoissonDistributionCalculatorContent'));
const LinearRegressionCalculator = dynamic(() => import('@/components/calculators/linear-regression-calculator/LinearRegressionCalculator'));
const LinearRegressionCalculatorContent = dynamic(() => import('@/components/calculators/linear-regression-calculator/LinearRegressionCalculatorContent'));
const CorrelationCalculator = dynamic(() => import('@/components/calculators/correlation-calculator/CorrelationCalculator'));
const CorrelationCalculatorContent = dynamic(() => import('@/components/calculators/correlation-calculator/CorrelationCalculatorContent'));
const RSquaredCalculator = dynamic(() => import('@/components/calculators/r-squared-calculator/RSquaredCalculator'));
const RSquaredCalculatorContent = dynamic(() => import('@/components/calculators/r-squared-calculator/RSquaredCalculatorContent'));
const TTestCalculator = dynamic(() => import('@/components/calculators/t-test-calculator/TTestCalculator'));
const TTestCalculatorContent = dynamic(() => import('@/components/calculators/t-test-calculator/TTestCalculatorContent'));
const ChiSquareCalculator = dynamic(() => import('@/components/calculators/chi-square-calculator/ChiSquareCalculator'));
const ChiSquareCalculatorContent = dynamic(() => import('@/components/calculators/chi-square-calculator/ChiSquareCalculatorContent'));
const ANOVACalculator = dynamic(() => import('@/components/calculators/anova-calculator/ANOVACalculator'));
const ANOVACalculatorContent = dynamic(() => import('@/components/calculators/anova-calculator/ANOVACalculatorContent'));
const SampleSizeCalculator = dynamic(() => import('@/components/calculators/sample-size-calculator/SampleSizeCalculator'));
const SampleSizeCalculatorContent = dynamic(() => import('@/components/calculators/sample-size-calculator/SampleSizeCalculatorContent'));
const ConfidenceIntervalCalculator = dynamic(() => import('@/components/calculators/confidence-interval-calculator/ConfidenceIntervalCalculator'));
const ConfidenceIntervalCalculatorContent = dynamic(() => import('@/components/calculators/confidence-interval-calculator/ConfidenceIntervalCalculatorContent'));
const DayOfWeekCalculator = dynamic(() => import('@/components/calculators/day-of-week-calculator/DayOfWeekCalculator'));
const DayOfWeekCalculatorContent = dynamic(() => import('@/components/calculators/day-of-week-calculator/DayOfWeekCalculatorContent'));
const LeapYearCalculator = dynamic(() => import('@/components/calculators/leap-year-calculator/LeapYearCalculator'));
const LeapYearCalculatorContent = dynamic(() => import('@/components/calculators/leap-year-calculator/LeapYearCalculatorContent'));
const CountdownTimerCalculator = dynamic(() => import('@/components/calculators/countdown-timer-calculator/CountdownTimerCalculator'));
const CountdownTimerCalculatorContent = dynamic(() => import('@/components/calculators/countdown-timer-calculator/CountdownTimerCalculatorContent'));
const RecipeScalingCalculator = dynamic(() => import('@/components/calculators/recipe-scaling-calculator/RecipeScalingCalculator'));
const RecipeScalingCalculatorContent = dynamic(() => import('@/components/calculators/recipe-scaling-calculator/RecipeScalingCalculatorContent'));
const CookingTimeCalculator = dynamic(() => import('@/components/calculators/cooking-time-calculator/CookingTimeCalculator'));
const CookingTimeCalculatorContent = dynamic(() => import('@/components/calculators/cooking-time-calculator/CookingTimeCalculatorContent'));
const OvenTemperatureConverter = dynamic(() => import('@/components/calculators/oven-temperature-converter/OvenTemperatureConverter'));
const OvenTemperatureConverterContent = dynamic(() => import('@/components/calculators/oven-temperature-converter/OvenTemperatureConverterContent'));
const IngredientSubstitutionCalculator = dynamic(() => import('@/components/calculators/ingredient-substitution-calculator/IngredientSubstitutionCalculator'));
const IngredientSubstitutionCalculatorContent = dynamic(() => import('@/components/calculators/ingredient-substitution-calculator/IngredientSubstitutionCalculatorContent'));
const UnitPriceCalculator = dynamic(() => import('@/components/calculators/unit-price-calculator/UnitPriceCalculator'));
const UnitPriceCalculatorContent = dynamic(() => import('@/components/calculators/unit-price-calculator/UnitPriceCalculatorContent'));
const PercentageOffCalculator = dynamic(() => import('@/components/calculators/percentage-off-calculator/PercentageOffCalculator'));
const PercentageOffCalculatorContent = dynamic(() => import('@/components/calculators/percentage-off-calculator/PercentageOffCalculatorContent'));
const SplitBillCalculator = dynamic(() => import('@/components/calculators/split-bill-calculator/SplitBillCalculator'));
const SplitBillCalculatorContent = dynamic(() => import('@/components/calculators/split-bill-calculator/SplitBillCalculatorContent'));
const MileageCalculator = dynamic(() => import('@/components/calculators/mileage-calculator/MileageCalculator'));
const MileageCalculatorContent = dynamic(() => import('@/components/calculators/mileage-calculator/MileageCalculatorContent'));
const TravelTimeCalculator = dynamic(() => import('@/components/calculators/travel-time-calculator/TravelTimeCalculator'));
const TravelTimeCalculatorContent = dynamic(() => import('@/components/calculators/travel-time-calculator/TravelTimeCalculatorContent'));
const ConcreteCalculator = dynamic(() => import('@/components/calculators/concrete-calculator/ConcreteCalculator'));
const ConcreteCalculatorContent = dynamic(() => import('@/components/calculators/concrete-calculator/ConcreteCalculatorContent'));
const CarpetCalculator = dynamic(() => import('@/components/calculators/carpet-calculator/CarpetCalculator'));
const CarpetCalculatorContent = dynamic(() => import('@/components/calculators/carpet-calculator/CarpetCalculatorContent'));
const FenceCalculator = dynamic(() => import('@/components/calculators/fence-calculator/FenceCalculator'));
const FenceCalculatorContent = dynamic(() => import('@/components/calculators/fence-calculator/FenceCalculatorContent'));
const LawnAreaCalculator = dynamic(() => import('@/components/calculators/lawn-area-calculator/LawnAreaCalculator'));
const LawnAreaCalculatorContent = dynamic(() => import('@/components/calculators/lawn-area-calculator/LawnAreaCalculatorContent'));
const OvertimeCalculator = dynamic(() => import('@/components/calculators/overtime-calculator/OvertimeCalculator'));
const OvertimeCalculatorContent = dynamic(() => import('@/components/calculators/overtime-calculator/OvertimeCalculatorContent'));
const TimeCardCalculator = dynamic(() => import('@/components/calculators/time-card-calculator/TimeCardCalculator'));
const TimeCardCalculatorContent = dynamic(() => import('@/components/calculators/time-card-calculator/TimeCardCalculatorContent'));
const ProductivityCalculator = dynamic(() => import('@/components/calculators/productivity-calculator/ProductivityCalculator'));
const ProductivityCalculatorContent = dynamic(() => import('@/components/calculators/productivity-calculator/ProductivityCalculatorContent'));
const AgeDifferenceCalculator = dynamic(() => import('@/components/calculators/age-difference-calculator/AgeDifferenceCalculator'));
const AgeDifferenceCalculatorContent = dynamic(() => import('@/components/calculators/age-difference-calculator/AgeDifferenceCalculatorContent'));
const RelationshipDurationCalculator = dynamic(() => import('@/components/calculators/relationship-duration-calculator/RelationshipDurationCalculator'));
const RelationshipDurationCalculatorContent = dynamic(() => import('@/components/calculators/relationship-duration-calculator/RelationshipDurationCalculatorContent'));
const PetAgeCalculator = dynamic(() => import('@/components/calculators/pet-age-calculator/PetAgeCalculator'));
const PetAgeCalculatorContent = dynamic(() => import('@/components/calculators/pet-age-calculator/PetAgeCalculatorContent'));
const PetFoodCalculator = dynamic(() => import('@/components/calculators/pet-food-calculator/PetFoodCalculator'));
const PetFoodCalculatorContent = dynamic(() => import('@/components/calculators/pet-food-calculator/PetFoodCalculatorContent'));
const VelocityCalculator = dynamic(() => import('@/components/calculators/velocity-calculator/VelocityCalculator'));
const VelocityCalculatorContent = dynamic(() => import('@/components/calculators/velocity-calculator/VelocityCalculatorContent'));
const MomentumCalculator = dynamic(() => import('@/components/calculators/momentum-calculator/MomentumCalculator'));
const MomentumCalculatorContent = dynamic(() => import('@/components/calculators/momentum-calculator/MomentumCalculatorContent'));
const WorkCalculator = dynamic(() => import('@/components/calculators/work-calculator/WorkCalculator'));
const WorkCalculatorContent = dynamic(() => import('@/components/calculators/work-calculator/WorkCalculatorContent'));
const FrictionCalculator = dynamic(() => import('@/components/calculators/friction-calculator/FrictionCalculator'));
const FrictionCalculatorContent = dynamic(() => import('@/components/calculators/friction-calculator/FrictionCalculatorContent'));
const GravityCalculator = dynamic(() => import('@/components/calculators/gravity-calculator/GravityCalculator'));
const GravityCalculatorContent = dynamic(() => import('@/components/calculators/gravity-calculator/GravityCalculatorContent'));
const ProjectileMotionCalculator = dynamic(() => import('@/components/calculators/projectile-motion-calculator/ProjectileMotionCalculator'));
const ProjectileMotionCalculatorContent = dynamic(() => import('@/components/calculators/projectile-motion-calculator/ProjectileMotionCalculatorContent'));
const CentripetalForceCalculator = dynamic(() => import('@/components/calculators/centripetal-force-calculator/CentripetalForceCalculator'));
const CentripetalForceCalculatorContent = dynamic(() => import('@/components/calculators/centripetal-force-calculator/CentripetalForceCalculatorContent'));
const AngularVelocityCalculator = dynamic(() => import('@/components/calculators/angular-velocity-calculator/AngularVelocityCalculator'));
const AngularVelocityCalculatorContent = dynamic(() => import('@/components/calculators/angular-velocity-calculator/AngularVelocityCalculatorContent'));
const HeatTransferCalculator = dynamic(() => import('@/components/calculators/heat-transfer-calculator/HeatTransferCalculator'));
const HeatTransferCalculatorContent = dynamic(() => import('@/components/calculators/heat-transfer-calculator/HeatTransferCalculatorContent'));
const IdealGasLawCalculator = dynamic(() => import('@/components/calculators/ideal-gas-law-calculator/IdealGasLawCalculator'));
const IdealGasLawCalculatorContent = dynamic(() => import('@/components/calculators/ideal-gas-law-calculator/IdealGasLawCalculatorContent'));
const DensityCalculator = dynamic(() => import('@/components/calculators/density-calculator/DensityCalculator'));
const DensityCalculatorContent = dynamic(() => import('@/components/calculators/density-calculator/DensityCalculatorContent'));
const ElectricPowerCalculator = dynamic(() => import('@/components/calculators/electric-power-calculator/ElectricPowerCalculator'));
const ElectricPowerCalculatorContent = dynamic(() => import('@/components/calculators/electric-power-calculator/ElectricPowerCalculatorContent'));
const SeriesParallelResistorCalculator = dynamic(() => import('@/components/calculators/series-parallel-resistor-calculator/SeriesParallelResistorCalculator'));
const SeriesParallelResistorCalculatorContent = dynamic(() => import('@/components/calculators/series-parallel-resistor-calculator/SeriesParallelResistorCalculatorContent'));
const LensCalculator = dynamic(() => import('@/components/calculators/lens-calculator/LensCalculator'));
const LensCalculatorContent = dynamic(() => import('@/components/calculators/lens-calculator/LensCalculatorContent'));
const RefractionCalculator = dynamic(() => import('@/components/calculators/refraction-calculator/RefractionCalculator'));
const RefractionCalculatorContent = dynamic(() => import('@/components/calculators/refraction-calculator/RefractionCalculatorContent'));
const WavelengthCalculator = dynamic(() => import('@/components/calculators/wavelength-calculator/WavelengthCalculator'));
const WavelengthCalculatorContent = dynamic(() => import('@/components/calculators/wavelength-calculator/WavelengthCalculatorContent'));
const WaveSpeedCalculator = dynamic(() => import('@/components/calculators/wave-speed-calculator/WaveSpeedCalculator'));
const WaveSpeedCalculatorContent = dynamic(() => import('@/components/calculators/wave-speed-calculator/WaveSpeedCalculatorContent'));
const LumberCalculator = dynamic(() => import('@/components/calculators/lumber-calculator/LumberCalculator'));
const LumberCalculatorContent = dynamic(() => import('@/components/calculators/lumber-calculator/LumberCalculatorContent'));
const DrywallCalculator = dynamic(() => import('@/components/calculators/drywall-calculator/DrywallCalculator'));
const DrywallCalculatorContent = dynamic(() => import('@/components/calculators/drywall-calculator/DrywallCalculatorContent'));
const InsulationCalculator = dynamic(() => import('@/components/calculators/insulation-calculator/InsulationCalculator'));
const InsulationCalculatorContent = dynamic(() => import('@/components/calculators/insulation-calculator/InsulationCalculatorContent'));
const FlooringCalculator = dynamic(() => import('@/components/calculators/flooring-calculator/FlooringCalculator'));
const FlooringCalculatorContent = dynamic(() => import('@/components/calculators/flooring-calculator/FlooringCalculatorContent'));
const RoofingCalculator = dynamic(() => import('@/components/calculators/roofing-calculator/RoofingCalculator'));
const RoofingCalculatorContent = dynamic(() => import('@/components/calculators/roofing-calculator/RoofingCalculatorContent'));
const FoundationCalculator = dynamic(() => import('@/components/calculators/foundation-calculator/FoundationCalculator'));
const FoundationCalculatorContent = dynamic(() => import('@/components/calculators/foundation-calculator/FoundationCalculatorContent'));
const BeamCalculator = dynamic(() => import('@/components/calculators/beam-calculator/BeamCalculator'));
const BeamCalculatorContent = dynamic(() => import('@/components/calculators/beam-calculator/BeamCalculatorContent'));
const ColumnCalculator = dynamic(() => import('@/components/calculators/column-calculator/ColumnCalculator'));
const ColumnCalculatorContent = dynamic(() => import('@/components/calculators/column-calculator/ColumnCalculatorContent'));
const RafterCalculator = dynamic(() => import('@/components/calculators/rafter-calculator/RafterCalculator'));
const RafterCalculatorContent = dynamic(() => import('@/components/calculators/rafter-calculator/RafterCalculatorContent'));
const StairCalculator = dynamic(() => import('@/components/calculators/stair-calculator/StairCalculator'));
const StairCalculatorContent = dynamic(() => import('@/components/calculators/stair-calculator/StairCalculatorContent'));
const DeckCalculator = dynamic(() => import('@/components/calculators/deck-calculator/DeckCalculator'));
const DeckCalculatorContent = dynamic(() => import('@/components/calculators/deck-calculator/DeckCalculatorContent'));
const ElectricalLoadCalculator = dynamic(() => import('@/components/calculators/electrical-load-calculator/ElectricalLoadCalculator'));
const ElectricalLoadCalculatorContent = dynamic(() => import('@/components/calculators/electrical-load-calculator/ElectricalLoadCalculatorContent'));
const WireSizeCalculator = dynamic(() => import('@/components/calculators/wire-size-calculator/WireSizeCalculator'));
const WireSizeCalculatorContent = dynamic(() => import('@/components/calculators/wire-size-calculator/WireSizeCalculatorContent'));
const VoltageDropCalculator = dynamic(() => import('@/components/calculators/voltage-drop-calculator/VoltageDropCalculator'));
const VoltageDropCalculatorContent = dynamic(() => import('@/components/calculators/voltage-drop-calculator/VoltageDropCalculatorContent'));
const CircuitBreakerCalculator = dynamic(() => import('@/components/calculators/circuit-breaker-calculator/CircuitBreakerCalculator'));
const CircuitBreakerCalculatorContent = dynamic(() => import('@/components/calculators/circuit-breaker-calculator/CircuitBreakerCalculatorContent'));
const PipeSizeCalculator = dynamic(() => import('@/components/calculators/pipe-size-calculator/PipeSizeCalculator'));
const PipeSizeCalculatorContent = dynamic(() => import('@/components/calculators/pipe-size-calculator/PipeSizeCalculatorContent'));
const WaterFlowCalculator = dynamic(() => import('@/components/calculators/water-flow-calculator/WaterFlowCalculator'));
const WaterFlowCalculatorContent = dynamic(() => import('@/components/calculators/water-flow-calculator/WaterFlowCalculatorContent'));
const PunnettSquareCalculator = dynamic(() => import('@/components/calculators/punnett-square-calculator/PunnettSquareCalculator'));
const PunnettSquareCalculatorContent = dynamic(() => import('@/components/calculators/punnett-square-calculator/PunnettSquareCalculatorContent'));
const HardyWeinbergCalculator = dynamic(() => import('@/components/calculators/hardy-weinberg-calculator/HardyWeinbergCalculator'));
const HardyWeinbergCalculatorContent = dynamic(() => import('@/components/calculators/hardy-weinberg-calculator/HardyWeinbergCalculatorContent'));
const GeneticDistanceCalculator = dynamic(() => import('@/components/calculators/genetic-distance-calculator/GeneticDistanceCalculator'));
const GeneticDistanceCalculatorContent = dynamic(() => import('@/components/calculators/genetic-distance-calculator/GeneticDistanceCalculatorContent'));
const DNASequenceCalculator = dynamic(() => import('@/components/calculators/dna-sequence-calculator/DNASequenceCalculator'));
const DNASequenceCalculatorContent = dynamic(() => import('@/components/calculators/dna-sequence-calculator/DNASequenceCalculatorContent'));
const AlleleFrequencyCalculator = dynamic(() => import('@/components/calculators/allele-frequency-calculator/AlleleFrequencyCalculator'));
const AlleleFrequencyCalculatorContent = dynamic(() => import('@/components/calculators/allele-frequency-calculator/AlleleFrequencyCalculatorContent'));
const PopulationGrowthCalculator = dynamic(() => import('@/components/calculators/population-growth-calculator/PopulationGrowthCalculator'));
const PopulationGrowthCalculatorContent = dynamic(() => import('@/components/calculators/population-growth-calculator/PopulationGrowthCalculatorContent'));
const GrowthRateCalculator = dynamic(() => import('@/components/calculators/growth-rate-calculator/GrowthRateCalculator'));
const GrowthRateCalculatorContent = dynamic(() => import('@/components/calculators/growth-rate-calculator/GrowthRateCalculatorContent'));
const CarryingCapacityCalculator = dynamic(() => import('@/components/calculators/carrying-capacity-calculator/CarryingCapacityCalculator'));
const CarryingCapacityCalculatorContent = dynamic(() => import('@/components/calculators/carrying-capacity-calculator/CarryingCapacityCalculatorContent'));
const BiodiversityCalculator = dynamic(() => import('@/components/calculators/biodiversity-calculator/BiodiversityCalculator'));
const BiodiversityCalculatorContent = dynamic(() => import('@/components/calculators/biodiversity-calculator/BiodiversityCalculatorContent'));
const CellCountCalculator = dynamic(() => import('@/components/calculators/cell-count-calculator/CellCountCalculator'));
const CellCountCalculatorContent = dynamic(() => import('@/components/calculators/cell-count-calculator/CellCountCalculatorContent'));
const DilutionCalculator = dynamic(() => import('@/components/calculators/dilution-calculator/DilutionCalculator'));
const DilutionCalculatorContent = dynamic(() => import('@/components/calculators/dilution-calculator/DilutionCalculatorContent'));
const PHCalculator = dynamic(() => import('@/components/calculators/ph-calculator/PHCalculator'));
const PHCalculatorContent = dynamic(() => import('@/components/calculators/ph-calculator/PHCalculatorContent'));
const OsmolarityCalculator = dynamic(() => import('@/components/calculators/osmolarity-calculator/OsmolarityCalculator'));
const OsmolarityCalculatorContent = dynamic(() => import('@/components/calculators/osmolarity-calculator/OsmolarityCalculatorContent'));
const EnzymeKineticsCalculator = dynamic(() => import('@/components/calculators/enzyme-kinetics-calculator/EnzymeKineticsCalculator'));
const EnzymeKineticsCalculatorContent = dynamic(() => import('@/components/calculators/enzyme-kinetics-calculator/EnzymeKineticsCalculatorContent'));
const HalfLifeCalculator = dynamic(() => import('@/components/calculators/half-life-calculator/HalfLifeCalculator'));
const HalfLifeCalculatorContent = dynamic(() => import('@/components/calculators/half-life-calculator/HalfLifeCalculatorContent'));
const RespirationRateCalculator = dynamic(() => import('@/components/calculators/respiration-rate-calculator/RespirationRateCalculator'));
const RespirationRateCalculatorContent = dynamic(() => import('@/components/calculators/respiration-rate-calculator/RespirationRateCalculatorContent'));
const MoleCalculator = dynamic(() => import('@/components/calculators/mole-calculator/MoleCalculator'));
const MoleCalculatorContent = dynamic(() => import('@/components/calculators/mole-calculator/MoleCalculatorContent'));
const MolarityCalculator = dynamic(() => import('@/components/calculators/molarity-calculator/MolarityCalculator'));
const MolarityCalculatorContent = dynamic(() => import('@/components/calculators/molarity-calculator/MolarityCalculatorContent'));
const MolalityCalculator = dynamic(() => import('@/components/calculators/molality-calculator/MolalityCalculator'));
const MolalityCalculatorContent = dynamic(() => import('@/components/calculators/molality-calculator/MolalityCalculatorContent'));
const StoichiometryCalculator = dynamic(() => import('@/components/calculators/stoichiometry-calculator/StoichiometryCalculator'));
const StoichiometryCalculatorContent = dynamic(() => import('@/components/calculators/stoichiometry-calculator/StoichiometryCalculatorContent'));
const PercentCompositionCalculator = dynamic(() => import('@/components/calculators/percent-composition-calculator/PercentCompositionCalculator'));
const PercentCompositionCalculatorContent = dynamic(() => import('@/components/calculators/percent-composition-calculator/PercentCompositionCalculatorContent'));
const EmpiricalFormulaCalculator = dynamic(() => import('@/components/calculators/empirical-formula-calculator/EmpiricalFormulaCalculator'));
const EmpiricalFormulaCalculatorContent = dynamic(() => import('@/components/calculators/empirical-formula-calculator/EmpiricalFormulaCalculatorContent'));
const MolecularFormulaCalculator = dynamic(() => import('@/components/calculators/molecular-formula-calculator/MolecularFormulaCalculator'));
const MolecularFormulaCalculatorContent = dynamic(() => import('@/components/calculators/molecular-formula-calculator/MolecularFormulaCalculatorContent'));
const SolutionConcentrationCalculator = dynamic(() => import('@/components/calculators/solution-concentration-calculator/SolutionConcentrationCalculator'));
const SolutionConcentrationCalculatorContent = dynamic(() => import('@/components/calculators/solution-concentration-calculator/SolutionConcentrationCalculatorContent'));
const DilutionCalculatorChemistry = dynamic(() => import('@/components/calculators/dilution-calculator-chemistry/DilutionCalculatorChemistry'));
const DilutionCalculatorChemistryContent = dynamic(() => import('@/components/calculators/dilution-calculator-chemistry/DilutionCalculatorChemistryContent'));
const PHCalculatorChemistry = dynamic(() => import('@/components/calculators/ph-calculator-chemistry/PHCalculatorChemistry'));
const PHCalculatorChemistryContent = dynamic(() => import('@/components/calculators/ph-calculator-chemistry/PHCalculatorChemistryContent'));
const BufferCalculator = dynamic(() => import('@/components/calculators/buffer-calculator/BufferCalculator'));
const BufferCalculatorContent = dynamic(() => import('@/components/calculators/buffer-calculator/BufferCalculatorContent'));
const TitrationCalculator = dynamic(() => import('@/components/calculators/titration-calculator/TitrationCalculator'));
const TitrationCalculatorContent = dynamic(() => import('@/components/calculators/titration-calculator/TitrationCalculatorContent'));
const EnthalpyCalculator = dynamic(() => import('@/components/calculators/enthalpy-calculator/EnthalpyCalculator'));
const EnthalpyCalculatorContent = dynamic(() => import('@/components/calculators/enthalpy-calculator/EnthalpyCalculatorContent'));
const EntropyCalculator = dynamic(() => import('@/components/calculators/entropy-calculator/EntropyCalculator'));
const EntropyCalculatorContent = dynamic(() => import('@/components/calculators/entropy-calculator/EntropyCalculatorContent'));
const GibbsFreeEnergyCalculator = dynamic(() => import('@/components/calculators/gibbs-free-energy-calculator/GibbsFreeEnergyCalculator'));
const GibbsFreeEnergyCalculatorContent = dynamic(() => import('@/components/calculators/gibbs-free-energy-calculator/GibbsFreeEnergyCalculatorContent'));
const ReactionRateCalculator = dynamic(() => import('@/components/calculators/reaction-rate-calculator/ReactionRateCalculator'));
const ReactionRateCalculatorContent = dynamic(() => import('@/components/calculators/reaction-rate-calculator/ReactionRateCalculatorContent'));
const EquilibriumConstantCalculator = dynamic(() => import('@/components/calculators/equilibrium-constant-calculator/EquilibriumConstantCalculator'));
const EquilibriumConstantCalculatorContent = dynamic(() => import('@/components/calculators/equilibrium-constant-calculator/EquilibriumConstantCalculatorContent'));
const BondEnergyCalculator = dynamic(() => import('@/components/calculators/bond-energy-calculator/BondEnergyCalculator'));
const BondEnergyCalculatorContent = dynamic(() => import('@/components/calculators/bond-energy-calculator/BondEnergyCalculatorContent'));
const MarathonTimeCalculator = dynamic(() => import('@/components/calculators/marathon-time-calculator/MarathonTimeCalculator'));
const MarathonTimeCalculatorContent = dynamic(() => import('@/components/calculators/marathon-time-calculator/MarathonTimeCalculatorContent'));
const FiveKTimeCalculator = dynamic(() => import('@/components/calculators/5k-time-calculator/FiveKTimeCalculator'));
const FiveKTimeCalculatorContent = dynamic(() => import('@/components/calculators/5k-time-calculator/FiveKTimeCalculatorContent'));
const TenKTimeCalculator = dynamic(() => import('@/components/calculators/10k-time-calculator/TenKTimeCalculator'));
const TenKTimeCalculatorContent = dynamic(() => import('@/components/calculators/10k-time-calculator/TenKTimeCalculatorContent'));
const CyclingPowerCalculator = dynamic(() => import('@/components/calculators/cycling-power-calculator/CyclingPowerCalculator'));
const CyclingPowerCalculatorContent = dynamic(() => import('@/components/calculators/cycling-power-calculator/CyclingPowerCalculatorContent'));
const CyclingSpeedCalculator = dynamic(() => import('@/components/calculators/cycling-speed-calculator/CyclingSpeedCalculator'));
const CyclingSpeedCalculatorContent = dynamic(() => import('@/components/calculators/cycling-speed-calculator/CyclingSpeedCalculatorContent'));
const BikeGearCalculator = dynamic(() => import('@/components/calculators/bike-gear-calculator/BikeGearCalculator'));
const BikeGearCalculatorContent = dynamic(() => import('@/components/calculators/bike-gear-calculator/BikeGearCalculatorContent'));
const CyclingCalorieBurnCalculator = dynamic(() => import('@/components/calculators/cycling-calorie-burn-calculator/CyclingCalorieBurnCalculator'));
const CyclingCalorieBurnCalculatorContent = dynamic(() => import('@/components/calculators/cycling-calorie-burn-calculator/CyclingCalorieBurnCalculatorContent'));
const VolumeCalculatorStrength = dynamic(() => import('@/components/calculators/volume-calculator-strength/VolumeCalculatorStrength'));
const VolumeCalculatorStrengthContent = dynamic(() => import('@/components/calculators/volume-calculator-strength/VolumeCalculatorStrengthContent'));
const RestPeriodCalculator = dynamic(() => import('@/components/calculators/rest-period-calculator/RestPeriodCalculator'));
const RestPeriodCalculatorContent = dynamic(() => import('@/components/calculators/rest-period-calculator/RestPeriodCalculatorContent'));
const ProgressiveOverloadCalculator = dynamic(() => import('@/components/calculators/progressive-overload-calculator/ProgressiveOverloadCalculator'));
const ProgressiveOverloadCalculatorContent = dynamic(() => import('@/components/calculators/progressive-overload-calculator/ProgressiveOverloadCalculatorContent'));
const BaseballStatsCalculator = dynamic(() => import('@/components/calculators/baseball-stats-calculator/BaseballStatsCalculator'));
const BaseballStatsCalculatorContent = dynamic(() => import('@/components/calculators/baseball-stats-calculator/BaseballStatsCalculatorContent'));
const BasketballStatsCalculator = dynamic(() => import('@/components/calculators/basketball-stats-calculator/BasketballStatsCalculator'));
const BasketballStatsCalculatorContent = dynamic(() => import('@/components/calculators/basketball-stats-calculator/BasketballStatsCalculatorContent'));
const FootballStatsCalculator = dynamic(() => import('@/components/calculators/football-stats-calculator/FootballStatsCalculator'));
const FootballStatsCalculatorContent = dynamic(() => import('@/components/calculators/football-stats-calculator/FootballStatsCalculatorContent'));
const GolfHandicapCalculator = dynamic(() => import('@/components/calculators/golf-handicap-calculator/GolfHandicapCalculator'));
const GolfHandicapCalculatorContent = dynamic(() => import('@/components/calculators/golf-handicap-calculator/GolfHandicapCalculatorContent'));
const TennisServeSpeedCalculator = dynamic(() => import('@/components/calculators/tennis-serve-speed-calculator/TennisServeSpeedCalculator'));
const TennisServeSpeedCalculatorContent = dynamic(() => import('@/components/calculators/tennis-serve-speed-calculator/TennisServeSpeedCalculatorContent'));
const SwimmingPaceCalculator = dynamic(() => import('@/components/calculators/swimming-pace-calculator/SwimmingPaceCalculator'));
const SwimmingPaceCalculatorContent = dynamic(() => import('@/components/calculators/swimming-pace-calculator/SwimmingPaceCalculatorContent'));
const FoodCostCalculator = dynamic(() => import('@/components/calculators/food-cost-calculator/FoodCostCalculator'));
const FoodCostCalculatorContent = dynamic(() => import('@/components/calculators/food-cost-calculator/FoodCostCalculatorContent'));
const NutritionLabelCalculator = dynamic(() => import('@/components/calculators/nutrition-label-calculator/NutritionLabelCalculator'));
const NutritionLabelCalculatorContent = dynamic(() => import('@/components/calculators/nutrition-label-calculator/NutritionLabelCalculatorContent'));
const RecipeConverter = dynamic(() => import('@/components/calculators/recipe-converter/RecipeConverter'));
const RecipeConverterContent = dynamic(() => import('@/components/calculators/recipe-converter/RecipeConverterContent'));
const CookingMeasurementConverter = dynamic(() => import('@/components/calculators/cooking-measurement-converter/CookingMeasurementConverter'));
const CookingMeasurementConverterContent = dynamic(() => import('@/components/calculators/cooking-measurement-converter/CookingMeasurementConverterContent'));
const CalorieDensityCalculator = dynamic(() => import('@/components/calculators/calorie-density-calculator/CalorieDensityCalculator'));
const CalorieDensityCalculatorContent = dynamic(() => import('@/components/calculators/calorie-density-calculator/CalorieDensityCalculatorContent'));
const FoodWasteCalculator = dynamic(() => import('@/components/calculators/food-waste-calculator/FoodWasteCalculator'));
const FoodWasteCalculatorContent = dynamic(() => import('@/components/calculators/food-waste-calculator/FoodWasteCalculatorContent'));
const CarbonFootprintCalculator = dynamic(() => import('@/components/calculators/carbon-footprint-calculator/CarbonFootprintCalculator'));
const CarbonFootprintCalculatorContent = dynamic(() => import('@/components/calculators/carbon-footprint-calculator/CarbonFootprintCalculatorContent'));
const WaterUsageCalculator = dynamic(() => import('@/components/calculators/water-usage-calculator/WaterUsageCalculator'));
const WaterUsageCalculatorContent = dynamic(() => import('@/components/calculators/water-usage-calculator/WaterUsageCalculatorContent'));
const EnergyConsumptionCalculator = dynamic(() => import('@/components/calculators/energy-consumption-calculator/EnergyConsumptionCalculator'));
const EnergyConsumptionCalculatorContent = dynamic(() => import('@/components/calculators/energy-consumption-calculator/EnergyConsumptionCalculatorContent'));
const RecyclingCalculator = dynamic(() => import('@/components/calculators/recycling-calculator/RecyclingCalculator'));
const RecyclingCalculatorContent = dynamic(() => import('@/components/calculators/recycling-calculator/RecyclingCalculatorContent'));
const CompostCalculator = dynamic(() => import('@/components/calculators/compost-calculator/CompostCalculator'));
const CompostCalculatorContent = dynamic(() => import('@/components/calculators/compost-calculator/CompostCalculatorContent'));
const SolarPanelCalculator = dynamic(() => import('@/components/calculators/solar-panel-calculator/SolarPanelCalculator'));
const SolarPanelCalculatorContent = dynamic(() => import('@/components/calculators/solar-panel-calculator/SolarPanelCalculatorContent'));
const WindEnergyCalculator = dynamic(() => import('@/components/calculators/wind-energy-calculator/WindEnergyCalculator'));
const WindEnergyCalculatorContent = dynamic(() => import('@/components/calculators/wind-energy-calculator/WindEnergyCalculatorContent'));
const TreePlantingCalculator = dynamic(() => import('@/components/calculators/tree-planting-calculator/TreePlantingCalculator'));
const TreePlantingCalculatorContent = dynamic(() => import('@/components/calculators/tree-planting-calculator/TreePlantingCalculatorContent'));
const CarbonOffsetCalculator = dynamic(() => import('@/components/calculators/carbon-offset-calculator/CarbonOffsetCalculator'));
const CarbonOffsetCalculatorContent = dynamic(() => import('@/components/calculators/carbon-offset-calculator/CarbonOffsetCalculatorContent'));
const EcologicalFootprintCalculator = dynamic(() => import('@/components/calculators/ecological-footprint-calculator/EcologicalFootprintCalculator'));
const EcologicalFootprintCalculatorContent = dynamic(() => import('@/components/calculators/ecological-footprint-calculator/EcologicalFootprintCalculatorContent'));
const HomeEnergyCalculator = dynamic(() => import('@/components/calculators/home-energy-calculator/HomeEnergyCalculator'));
const HomeEnergyCalculatorContent = dynamic(() => import('@/components/calculators/home-energy-calculator/HomeEnergyCalculatorContent'));
const TransportationCarbonCalculator = dynamic(() => import('@/components/calculators/transportation-carbon-calculator/TransportationCarbonCalculator'));
const TransportationCarbonCalculatorContent = dynamic(() => import('@/components/calculators/transportation-carbon-calculator/TransportationCarbonCalculatorContent'));
const FoodCarbonCalculator = dynamic(() => import('@/components/calculators/food-carbon-calculator/FoodCarbonCalculator'));
const FoodCarbonCalculatorContent = dynamic(() => import('@/components/calculators/food-carbon-calculator/FoodCarbonCalculatorContent'));
const WasteReductionCalculator = dynamic(() => import('@/components/calculators/waste-reduction-calculator/WasteReductionCalculator'));
const WasteReductionCalculatorContent = dynamic(() => import('@/components/calculators/waste-reduction-calculator/WasteReductionCalculatorContent'));
const SustainabilityScoreCalculator = dynamic(() => import('@/components/calculators/sustainability-score-calculator/SustainabilityScoreCalculator'));
const SustainabilityScoreCalculatorContent = dynamic(() => import('@/components/calculators/sustainability-score-calculator/SustainabilityScoreCalculatorContent'));

export const calculators: CalculatorConfig[] = [
  {
    id: 'bmi-calculator',
    title: 'BMI Calculator',
    slug: 'bmi-calculator',
    description: 'Calculate Body Mass Index (BMI) for men, women, and children.',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-sarah-smith',
    component: BMICalculator,
    content: BMIContent,
    meta: {
      title: 'BMI Calculator - Calculate Your Body Mass Index',
      description: 'Free BMI Calculator to find your Body Mass Index. Understand your weight category and health risks.',
      keywords: ['bmi calculator', 'body mass index', 'obesity calculator'],
    },
  },
  {
    id: 'loan-calculator',
    title: 'Loan Calculator',
    slug: 'loan-calculator',
    description: 'Calculate monthly loan payments, interest, and payoff schedules.',
    category: 'finance',
    subcategory: 'loans',
    authorId: 'mike-finance',
    component: LoanCalculator,
    content: LoanContent,
    meta: {
      title: 'Loan Calculator - Estimate Monthly Payments',
      description: 'Calculate your estimated monthly loan payments and total interest for mortgages, auto loans, and personal loans.',
      keywords: ['loan calculator', 'mortgage calculator', 'monthly payment'],
    },
  },
  {
    id: 'percentage-calculator',
    title: 'Percentage Calculator',
    slug: 'percentage-calculator',
    description: 'Calculate percentages, percentage increase, and decrease.',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: PercentageCalculator,
    content: PercentageContent,
    meta: {
      title: 'Percentage Calculator - Calculate Percentages Easily',
      description: 'Free online percentage calculator. Calculate increases, decreases, and find what percent a number is of another.',
      keywords: ['percentage calculator', 'math tool', 'percent change'],
    },
  },
  // Conversion Calculators
  {
    id: 'length-converter',
    title: 'Length Converter',
    slug: 'length-converter',
    description: 'Convert between millimeters, centimeters, meters, kilometers, inches, feet, yards, and miles.',
    category: 'conversion',
    subcategory: 'length',
    authorId: 'unit-master',
    component: LengthConverter,
    content: LengthConverterContent,
    meta: {
      title: 'Length Converter - Convert Length Units Online',
      description: 'Free online length converter. Convert between mm, cm, m, km, inches, feet, yards, and miles instantly.',
      keywords: ['length converter', 'distance converter', 'unit converter', 'mm to inches', 'meters to feet'],
    },
  },
  {
    id: 'weight-converter',
    title: 'Weight Converter',
    slug: 'weight-converter',
    description: 'Convert between grams, kilograms, ounces, pounds, tons, and stones.',
    category: 'conversion',
    subcategory: 'weight',
    authorId: 'unit-master',
    component: WeightConverter,
    content: WeightConverterContent,
    meta: {
      title: 'Weight Converter - Convert Weight Units Online',
      description: 'Free online weight converter. Convert between grams, kg, ounces, pounds, tons, and stones instantly.',
      keywords: ['weight converter', 'mass converter', 'kg to lbs', 'pounds to kg', 'unit converter'],
    },
  },
  {
    id: 'temperature-converter',
    title: 'Temperature Converter',
    slug: 'temperature-converter',
    description: 'Convert between Celsius, Fahrenheit, and Kelvin temperature scales.',
    category: 'conversion',
    subcategory: 'temperature',
    authorId: 'unit-master',
    component: TemperatureConverter,
    content: TemperatureConverterContent,
    meta: {
      title: 'Temperature Converter - Convert Celsius, Fahrenheit, Kelvin',
      description: 'Free online temperature converter. Convert between Celsius, Fahrenheit, and Kelvin instantly.',
      keywords: ['temperature converter', 'celsius to fahrenheit', 'fahrenheit to celsius', 'kelvin converter'],
    },
  },
  {
    id: 'area-converter',
    title: 'Area Converter',
    slug: 'area-converter',
    description: 'Convert between square meters, square feet, acres, hectares, and more.',
    category: 'conversion',
    subcategory: 'area',
    authorId: 'unit-master',
    component: AreaConverter,
    content: AreaConverterContent,
    meta: {
      title: 'Area Converter - Convert Area Units Online',
      description: 'Free online area converter. Convert between square meters, square feet, acres, hectares, and square miles.',
      keywords: ['area converter', 'square feet to square meters', 'acres to hectares', 'unit converter'],
    },
  },
  {
    id: 'volume-converter',
    title: 'Volume Converter',
    slug: 'volume-converter',
    description: 'Convert between liters, gallons, cubic meters, fluid ounces, cups, and more.',
    category: 'conversion',
    subcategory: 'volume',
    authorId: 'unit-master',
    component: VolumeConverter,
    content: VolumeConverterContent,
    meta: {
      title: 'Volume Converter - Convert Volume Units Online',
      description: 'Free online volume converter. Convert between liters, gallons, cubic meters, cups, and fluid ounces.',
      keywords: ['volume converter', 'liters to gallons', 'gallons to liters', 'unit converter'],
    },
  },
  {
    id: 'speed-converter',
    title: 'Speed Converter',
    slug: 'speed-converter',
    description: 'Convert between meters per second, kilometers per hour, miles per hour, knots, and feet per second.',
    category: 'conversion',
    subcategory: 'speed',
    authorId: 'unit-master',
    component: SpeedConverter,
    content: SpeedConverterContent,
    meta: {
      title: 'Speed Converter - Convert Speed Units Online',
      description: 'Free online speed converter. Convert between km/h, mph, m/s, knots, and ft/s instantly.',
      keywords: ['speed converter', 'km/h to mph', 'mph to km/h', 'knots converter'],
    },
  },
  {
    id: 'time-converter',
    title: 'Time Converter',
    slug: 'time-converter',
    description: 'Convert between milliseconds, seconds, minutes, hours, days, weeks, months, and years.',
    category: 'conversion',
    subcategory: 'time',
    authorId: 'unit-master',
    component: TimeConverter,
    content: TimeConverterContent,
    meta: {
      title: 'Time Converter - Convert Time Units Online',
      description: 'Free online time converter. Convert between seconds, minutes, hours, days, weeks, months, and years.',
      keywords: ['time converter', 'hours to minutes', 'days to hours', 'time unit converter'],
    },
  },
  {
    id: 'energy-converter',
    title: 'Energy Converter',
    slug: 'energy-converter',
    description: 'Convert between joules, calories, kilowatt-hours, BTU, and electronvolts.',
    category: 'conversion',
    subcategory: 'energy',
    authorId: 'unit-master',
    component: EnergyConverter,
    content: EnergyConverterContent,
    meta: {
      title: 'Energy Converter - Convert Energy Units Online',
      description: 'Free online energy converter. Convert between joules, calories, kWh, BTU, and electronvolts instantly.',
      keywords: ['energy converter', 'joules to calories', 'kwh converter', 'btu converter'],
    },
  },
  {
    id: 'pressure-converter',
    title: 'Pressure Converter',
    slug: 'pressure-converter',
    description: 'Convert between pascals, bars, atmospheres, PSI, mmHg, and torr.',
    category: 'conversion',
    subcategory: 'pressure',
    authorId: 'unit-master',
    component: PressureConverter,
    content: PressureConverterContent,
    meta: {
      title: 'Pressure Converter - Convert Pressure Units Online',
      description: 'Free online pressure converter. Convert between pascals, bars, PSI, atmospheres, and mmHg.',
      keywords: ['pressure converter', 'psi to bar', 'pascal converter', 'pressure unit converter'],
    },
  },
  {
    id: 'data-storage-converter',
    title: 'Data Storage Converter',
    slug: 'data-storage-converter',
    description: 'Convert between bytes, kilobytes, megabytes, gigabytes, terabytes, and petabytes.',
    category: 'conversion',
    subcategory: 'data',
    authorId: 'unit-master',
    component: DataStorageConverter,
    content: DataStorageConverterContent,
    meta: {
      title: 'Data Storage Converter - Convert Data Units Online',
      description: 'Free online data storage converter. Convert between bytes, KB, MB, GB, TB, and PB instantly.',
      keywords: ['data converter', 'gb to mb', 'storage converter', 'file size converter'],
    },
  },
  // Finance Calculators
  {
    id: 'auto-loan-calculator',
    title: 'Auto Loan Calculator',
    slug: 'auto-loan-calculator',
    description: 'Calculate monthly payments, total interest, and payment schedule for your auto loan.',
    category: 'finance',
    subcategory: 'loans',
    authorId: 'mike-finance',
    component: AutoLoanCalculator,
    content: AutoLoanCalculatorContent,
    meta: {
      title: 'Auto Loan Calculator - Calculate Car Loan Payments',
      description: 'Free auto loan calculator. Calculate monthly payments, total interest, and payment schedule for vehicle financing.',
      keywords: ['auto loan calculator', 'car loan calculator', 'vehicle loan', 'auto financing'],
    },
  },
  // Health Calculators
  {
    id: 'bmr-calculator',
    title: 'BMR Calculator',
    slug: 'bmr-calculator',
    description: 'Calculate your Basal Metabolic Rate (BMR) - the calories your body burns at rest.',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: BMRCalculator,
    content: BMRCalculatorContent,
    meta: {
      title: 'BMR Calculator - Calculate Basal Metabolic Rate',
      description: 'Free BMR calculator using the Mifflin-St Jeor equation. Calculate your basal metabolic rate and daily calorie needs.',
      keywords: ['bmr calculator', 'basal metabolic rate', 'metabolism calculator', 'calorie calculator'],
    },
  },
  {
    id: 'angle-converter',
    title: 'Angle Converter',
    slug: 'angle-converter',
    description: 'Convert between degrees, radians, and gradians.',
    category: 'conversion',
    subcategory: 'angle',
    authorId: 'unit-master',
    component: AngleConverter,
    content: AngleConverterContent,
    meta: {
      title: 'Angle Converter - Convert Degrees, Radians, Gradians',
      description: 'Free online angle converter. Convert between degrees (°), radians (rad), and gradians (grad) instantly.',
      keywords: ['angle converter', 'degrees to radians', 'radians to degrees', 'gradian converter'],
    },
  },
  {
    id: 'fuel-economy-converter',
    title: 'Fuel Economy Converter',
    slug: 'fuel-economy-converter',
    description: 'Convert between MPG, L/100km, and km/L.',
    category: 'conversion',
    subcategory: 'fuel-economy',
    authorId: 'unit-master',
    component: FuelEconomyConverter,
    content: FuelEconomyConverterContent,
    meta: {
      title: 'Fuel Economy Converter - MPG, L/100km, km/L',
      description: 'Free online fuel economy converter. Convert between MPG, L/100km, and km/L instantly.',
      keywords: ['fuel economy converter', 'mpg to l/100km', 'l/100km to mpg', 'km/l converter'],
    },
  },
  {
    id: 'power-converter',
    title: 'Power Converter',
    slug: 'power-converter',
    description: 'Convert between watts, kilowatts, horsepower, and BTU per hour.',
    category: 'conversion',
    subcategory: 'power',
    authorId: 'unit-master',
    component: PowerConverter,
    content: PowerConverterContent,
    meta: {
      title: 'Power Converter - Watts, Kilowatts, Horsepower, BTU/h',
      description: 'Free online power converter. Convert between watts, kilowatts, horsepower, and BTU per hour.',
      keywords: ['power converter', 'watts to horsepower', 'kw to hp', 'btu converter'],
    },
  },
  {
    id: 'force-converter',
    title: 'Force Converter',
    slug: 'force-converter',
    description: 'Convert between newtons, kilonewtons, pounds-force, and kilograms-force.',
    category: 'conversion',
    subcategory: 'force',
    authorId: 'unit-master',
    component: ForceConverter,
    content: ForceConverterContent,
    meta: {
      title: 'Force Converter - Newtons, Kilonewtons, Pounds-force',
      description: 'Free online force converter. Convert between newtons, kilonewtons, pounds-force, and kilograms-force.',
      keywords: ['force converter', 'newtons to pounds', 'n to lbf', 'force unit converter'],
    },
  },
  {
    id: 'torque-converter',
    title: 'Torque Converter',
    slug: 'torque-converter',
    description: 'Convert between newton-meters, pound-feet, and kilogram-centimeters.',
    category: 'conversion',
    subcategory: 'torque',
    authorId: 'unit-master',
    component: TorqueConverter,
    content: TorqueConverterContent,
    meta: {
      title: 'Torque Converter - Convert Nm, lb-ft, kg-cm',
      description: 'Easily convert torque units including newton-meters, pound-feet, and kilogram-centimeters with our Torque Converter.',
      keywords: ['torque converter', 'newton-meters to pound-feet', 'kg-cm to Nm', 'torque conversion', 'Nm', 'lb-ft', 'kg-cm'],
    },
  },
  {
    id: 'frequency-converter',
    title: 'Frequency Converter',
    slug: 'frequency-converter',
    description: 'Convert between hertz, kilohertz, megahertz, and gigahertz.',
    category: 'conversion',
    subcategory: 'frequency',
    authorId: 'unit-master',
    component: FrequencyConverter,
    content: FrequencyConverterContent,
    meta: {
      title: 'Frequency Converter - Convert Hz, kHz, MHz, GHz',
      description: 'Easily convert between hertz, kilohertz, megahertz, and gigahertz with our Frequency Converter. Ideal for telecommunications, electronics, and physics.',
      keywords: ["frequency conversion","Hz to kHz","MHz to GHz","frequency calculator"],
    },
  },
  {
    id: 'electric-current-converter',
    title: 'Electric Current Converter',
    slug: 'electric-current-converter',
    description: 'Convert between amperes, milliamperes, and kiloamperes.',
    category: 'conversion',
    subcategory: 'electrical',
    authorId: 'unit-master',
    component: ElectricCurrentConverter,
    content: ElectricCurrentConverterContent,
    meta: {
      title: 'Electric Current Converter - Convert A, mA, kA',
      description: 'Easily convert between amperes, milliamperes, and kiloamperes with our Electric Current Converter. Ideal for engineering and electronics projects.',
      keywords: ["electric current converter","amperes to milliamperes","milliamperes to kiloamperes","A to mA conversion","mA to kA conversion"],
    },
  },
  {
    id: 'voltage-converter',
    title: 'Voltage Converter',
    slug: 'voltage-converter',
    description: 'Convert between volts, millivolts, and kilovolts.',
    category: 'conversion',
    subcategory: 'electrical',
    authorId: 'unit-master',
    component: VoltageConverter,
    content: VoltageConverterContent,
    meta: {
      title: 'Voltage Converter - Convert V, mV, kV',
      description: 'Easily convert between volts, millivolts, and kilovolts with our Voltage Converter. Perfect for electrical engineering, electronics, and general use.',
      keywords: ["voltage converter","volt conversion","millivolt converter","kilovolt conversion","electrical conversion"],
    },
  },
  {
    id: 'resistance-converter',
    title: 'Resistance Converter',
    slug: 'resistance-converter',
    description: 'Convert between ohms, kiloohms, and megaohms.',
    category: 'conversion',
    subcategory: 'electrical',
    authorId: 'unit-master',
    component: ResistanceConverter,
    content: ResistanceConverterContent,
    meta: {
      title: 'Convert Resistance Units Online',
      description: 'Easily convert between ohms, kiloohms, and megaohms with our online resistance converter. Perfect for electrical engineering and electronics projects.',
      keywords: ["resistance conversion","ohms to kiloohms","kiloohms to megaohms","electrical unit conversion"],
    },
  },
  {
    id: 'capacitance-converter',
    title: 'Capacitance Converter',
    slug: 'capacitance-converter',
    description: 'Convert between farads, microfarads, nanofarads, and picofarads.',
    category: 'conversion',
    subcategory: 'electrical',
    authorId: 'unit-master',
    component: CapacitanceConverter,
    content: CapacitanceConverterContent,
    meta: {
      title: 'Capacitance Converter - Convert Capacitance Units Easily',
      description: 'Use our Capacitance Converter to seamlessly convert between farads, microfarads, nanofarads, and picofarads. Ideal for electronics and electrical engineering.',
      keywords: ["capacitance conversion","farads","microfarads","nanofarads","picofarads","capacitance converter"],
    },
  },
  {
    id: 'personal-loan-calculator',
    title: 'Personal Loan Calculator',
    slug: 'personal-loan-calculator',
    description: 'Calculate monthly payments, total interest, and payment schedule for personal loans.',
    category: 'finance',
    subcategory: 'loans',
    authorId: 'mike-finance',
    component: PersonalLoanCalculator,
    content: PersonalLoanCalculatorContent,
    meta: {
      title: 'Personal Loan Calculator - Calculate Your Monthly Payments',
      description: 'Use our Personal Loan Calculator to understand your monthly payments, total interest, and payment schedule for personal loans.',
      keywords: ["personal loan calculator","loan payment calculator","interest calculator","finance calculator","loan calculator"],
    },
  },
  {
    id: 'student-loan-calculator',
    title: 'Student Loan Calculator',
    slug: 'student-loan-calculator',
    description: 'Calculate monthly payments, total interest, and payoff schedule for student loans.',
    category: 'finance',
    subcategory: 'loans',
    authorId: 'mike-finance',
    component: StudentLoanCalculator,
    content: StudentLoanCalculatorContent,
    meta: {
      title: 'Student Loan Calculator - Calculate Your Loan Repayment',
      description: 'Use our Student Loan Calculator to estimate your monthly payments, total interest, and payoff schedule for your student loans.',
      keywords: ["student loan calculator","loan repayment","monthly loan payment","total interest calculator","loan payoff schedule"],
    },
  },
  {
    id: 'credit-card-payoff-calculator',
    title: 'Credit Card Payoff Calculator',
    slug: 'credit-card-payoff-calculator',
    description: 'Calculate how long it will take to pay off credit card debt and total interest paid.',
    category: 'finance',
    subcategory: 'loans',
    authorId: 'mike-finance',
    component: CreditCardPayoffCalculator,
    content: CreditCardPayoffCalculatorContent,
    meta: {
      title: 'Credit Card Payoff Calculator - Calculate Debt Payoff Time',
      description: 'Use our Credit Card Payoff Calculator to see how long it will take to pay off your credit card debt and the total interest you will pay.',
      keywords: ["credit card payoff calculator","debt payoff calculator","credit card debt","interest calculator"],
    },
  },
  {
    id: 'compound-interest-calculator',
    title: 'Compound Interest Calculator',
    slug: 'compound-interest-calculator',
    description: 'Calculate compound interest on investments and savings accounts.',
    category: 'finance',
    subcategory: 'investments',
    authorId: 'investment-pro',
    component: CompoundInterestCalculator,
    content: CompoundInterestCalculatorContent,
    meta: {
      title: 'Compound Interest Calculator - Calculate Your Investment Growth',
      description: 'Use our Compound Interest Calculator to see how your investments can grow over time with the power of compound interest. Ideal for savings accounts and investment portfolios.',
      keywords: ["compound interest","investment calculator","savings growth","interest calculator"],
    },
  },
  {
    id: 'savings-calculator',
    title: 'Savings Calculator',
    slug: 'savings-calculator',
    description: 'Calculate future savings based on regular deposits and interest.',
    category: 'finance',
    subcategory: 'investments',
    authorId: 'investment-pro',
    component: SavingsCalculator,
    content: SavingsCalculatorContent,
    meta: {
      title: 'Savings Calculator - Project Your Future Savings',
      description: 'Use our Savings Calculator to see how your savings will grow over time with regular deposits and compound interest.',
      keywords: ["savings calculator","future savings","compound interest","financial planning","investment calculator"],
    },
  },
  {
    id: 'tdee-calculator',
    title: 'TDEE Calculator',
    slug: 'tdee-calculator',
    description: 'Calculate your Total Daily Energy Expenditure (TDEE) - total calories burned per day.',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: TDEECalculator,
    content: TDEECalculatorContent,
    meta: {
      title: 'TDEE Calculator - Calculate Your Daily Calorie Needs',
      description: 'Use our TDEE Calculator to find out your Total Daily Energy Expenditure and get personalized tips to reach your fitness goals.',
      keywords: ["TDEE Calculator","Calorie Calculator","Energy Expenditure","Fitness","Health"],
    },
  },
  {
    id: 'body-fat-calculator',
    title: 'Body Fat Calculator',
    slug: 'body-fat-calculator',
    description: 'Estimate body fat percentage using various methods (Navy method, BMI method).',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: BodyFatCalculator,
    content: BodyFatCalculatorContent,
    meta: {
      title: 'Estimate Your Body Fat Percentage - Body Fat Calculator',
      description: 'Use our Body Fat Calculator to estimate your body fat percentage using the Navy method or BMI method. Understand your health better with accurate body fat analysis.',
      keywords: ["body fat calculator","body fat percentage","Navy method","BMI method","health","fitness"],
    },
  },
  {
    id: 'calorie-calculator',
    title: 'Calorie Calculator',
    slug: 'calorie-calculator',
    description: 'Calculate daily calorie needs for weight loss, maintenance, or weight gain.',
    category: 'health',
    subcategory: 'nutrition',
    authorId: 'nutritionist-ben',
    component: CalorieCalculator,
    content: CalorieCalculatorContent,
    meta: {
      title: 'Calorie Calculator - Calculate Your Daily Calorie Needs',
      description: 'Use our Calorie Calculator to find out how many calories you need each day to maintain, lose, or gain weight based on your age, gender, weight, height, and activity level.',
      keywords: ["calorie calculator","daily calorie needs","weight management","calorie counting","BMR","activity level"],
    },
  },
  {
    id: 'macro-calculator',
    title: 'Macro Calculator',
    slug: 'macro-calculator',
    description: 'Calculate daily macronutrient needs (protein, carbs, fats) based on your goals.',
    category: 'health',
    subcategory: 'nutrition',
    authorId: 'nutritionist-ben',
    component: MacroCalculator,
    content: MacroCalculatorContent,
    meta: {
      title: 'Macro Calculator - Calculate Your Daily Macronutrient Needs',
      description: 'Use our Macro Calculator to find out the perfect balance of proteins, carbs, and fats you need to achieve your fitness and health goals.',
      keywords: ["macro calculator","macronutrient calculator","nutrition calculator","health calculator","protein carbs fats calculator"],
    },
  },
  {
    id: 'fraction-calculator',
    title: 'Fraction Calculator',
    slug: 'fraction-calculator',
    description: 'Add, subtract, multiply, and divide fractions with step-by-step solutions.',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: FractionCalculator,
    content: FractionCalculatorContent,
    meta: {
      title: 'Fraction Calculator - Add, Subtract, Multiply, Divide Fractions',
      description: 'Easily add, subtract, multiply, and divide fractions with our Fraction Calculator. Get step-by-step solutions to your fraction problems.',
      keywords: ["fraction calculator","add fractions","subtract fractions","multiply fractions","divide fractions","math calculator","basic math"],
    },
  },
  {
    id: 'ratio-calculator',
    title: 'Ratio Calculator',
    slug: 'ratio-calculator',
    description: 'Calculate ratios, simplify ratios, and find equivalent ratios.',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: RatioCalculator,
    content: RatioCalculatorContent,
    meta: {
      title: 'Ratio Calculator - Simplify and Find Equivalent Ratios',
      description: 'Use our Ratio Calculator to simplify ratios, calculate equivalent ratios, and understand proportions easily. Ideal for math, cooking, and more.',
      keywords: ["ratio calculator","simplify ratios","equivalent ratios","calculate ratio","math tool"],
    },
  },
  {
    id: 'square-root-calculator',
    title: 'Square Root Calculator',
    slug: 'square-root-calculator',
    description: 'Calculate the square root of any number with precision.',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: SquareRootCalculator,
    content: SquareRootCalculatorContent,
    meta: {
      title: 'Square Root Calculator - Calculate Square Roots Easily',
      description: 'Use our Square Root Calculator to find the square root of any number with precision. Ideal for students, teachers, and professionals.',
      keywords: ["square root calculator","calculate square root","math calculator","square root","math tool"],
    },
  },
  {
    id: 'quadratic-calculator',
    title: 'Quadratic Calculator',
    slug: 'quadratic-calculator',
    description: 'Solve quadratic equations using the quadratic formula. Find roots and discriminant.',
    category: 'math',
    subcategory: 'algebra',
    authorId: 'prof-math',
    component: QuadraticCalculator,
    content: QuadraticCalculatorContent,
    meta: {
      title: 'Quadratic Equation Calculator',
      description: 'Use this calculator to find the roots and discriminant of any quadratic equation. Solve equations with ease and understand the nature of their solutions.',
      keywords: ["quadratic calculator","quadratic equation solver","solve quadratic","quadratic formula","discriminant calculator"],
    },
  },
  {
    id: 'mean-calculator',
    title: 'Mean Calculator',
    slug: 'mean-calculator',
    description: 'Calculate the mean (average) of a set of numbers.',
    category: 'statistics',
    subcategory: 'descriptive',
    authorId: 'prof-data',
    component: MeanCalculator,
    content: MeanCalculatorContent,
    meta: {
      title: 'Mean Calculator - Calculate the Average',
      description: 'Use our Mean Calculator to quickly calculate the mean (average) of a set of numbers. Perfect for statistical analysis, homework, or financial calculations.',
      keywords: ["mean calculator","average calculator","statistics","descriptive statistics","calculate mean","calculate average"],
    },
  },
  {
    id: 'median-calculator',
    title: 'Median Calculator',
    slug: 'median-calculator',
    description: 'Calculate the median (middle value) of a set of numbers.',
    category: 'statistics',
    subcategory: 'descriptive',
    authorId: 'prof-data',
    component: MedianCalculator,
    content: MedianCalculatorContent,
    meta: {
      title: 'Median Calculator - Find the Middle Value',
      description: 'Use our Median Calculator to quickly find the median (middle value) of a set of numbers. Perfect for statistical analysis and understanding data distributions.',
      keywords: ["median calculator","middle value","statistics","data analysis","number set median"],
    },
  },
  {
    id: 'standard-deviation-calculator',
    title: 'Standard Deviation Calculator',
    slug: 'standard-deviation-calculator',
    description: 'Calculate standard deviation, variance, and mean of a dataset.',
    category: 'statistics',
    subcategory: 'descriptive',
    authorId: 'prof-data',
    component: StandardDeviationCalculator,
    content: StandardDeviationCalculatorContent,
    meta: {
      title: 'Standard Deviation Calculator - Calculate SD, Variance, and Mean',
      description: 'Use our Standard Deviation Calculator to find the SD, variance, and mean of any dataset instantly. Perfect for statistical analysis and understanding data dispersion.',
      keywords: ["standard deviation calculator","variance calculator","mean calculator","statistics","data analysis"],
    },
  },
  {
    id: 'age-calculator',
    title: 'Age Calculator',
    slug: 'age-calculator',
    description: 'Calculate your exact age in years, months, weeks, and days.',
    category: 'everyday-life',
    subcategory: 'date-time',
    authorId: 'lisa-daily',
    component: AgeCalculator,
    content: AgeCalculatorContent,
    meta: {
      title: 'Age Calculator - Find Your Exact Age',
      description: 'Use our Age Calculator to find out exactly how old you are in years, months, weeks, and days based on your birth date.',
      keywords: ["age calculator","calculate age","exact age","years and months","age in days","age in weeks"],
    },
  },
  {
    id: 'date-calculator',
    title: 'Date Calculator',
    slug: 'date-calculator',
    description: 'Calculate the number of days, weeks, months, or years between two dates.',
    category: 'everyday-life',
    subcategory: 'date-time',
    authorId: 'lisa-daily',
    component: DateCalculator,
    content: DateCalculatorContent,
    meta: {
      title: 'Date Calculator - Calculate Days Between Dates',
      description: 'Use our Date Calculator to find out the number of days, weeks, months, or years between any two dates. Perfect for planning, scheduling, and more.',
      keywords: ["date calculator","days between dates","calculate date difference","date difference calculator","date calculation"],
    },
  },
  {
    id: 'fuel-cost-calculator',
    title: 'Fuel Cost Calculator',
    slug: 'fuel-cost-calculator',
    description: 'Calculate fuel cost for a trip based on distance, fuel price, and vehicle efficiency.',
    category: 'everyday-life',
    subcategory: 'travel',
    authorId: 'lisa-daily',
    component: FuelCostCalculator,
    content: FuelCostCalculatorContent,
    meta: {
      title: 'Fuel Cost Calculator - Estimate Your Trip Fuel Expenses',
      description: 'Use our Fuel Cost Calculator to quickly estimate the fuel cost for your next trip. Enter your trip distance, fuel price, and vehicle efficiency to get started.',
      keywords: ["fuel cost calculator","trip cost estimator","fuel price calculator","vehicle efficiency","travel expenses"],
    },
  },
  {
    id: 'refinance-calculator',
    title: 'Refinance Calculator',
    slug: 'refinance-calculator',
    description: 'Calculate potential savings from refinancing your mortgage or loan.',
    category: 'finance',
    subcategory: 'loans',
    authorId: 'mike-finance',
    component: RefinanceCalculator,
    content: RefinanceCalculatorContent,
    meta: {
      title: 'Refinance Calculator - Calculate Your Savings',
      description: 'Use our refinance calculator to determine how much you can save by refinancing your mortgage or loan.',
      keywords: ["refinance","calculator","mortgage","loan","savings"],
    },
  },
  {
    id: 'home-equity-loan-calculator',
    title: 'Home Equity Loan Calculator',
    slug: 'home-equity-loan-calculator',
    description: 'Calculate monthly payments and interest for a home equity loan.',
    category: 'finance',
    subcategory: 'loans',
    authorId: 'mike-finance',
    component: HomeEquityLoanCalculator,
    content: HomeEquityLoanCalculatorContent,
    meta: {
      title: 'Home Equity Loan Calculator',
      description: 'Use our Home Equity Loan Calculator to determine your monthly payments and total interest.',
      keywords: ["home equity loan","loan calculator","finance","monthly payments"],
    },
  },
  {
    id: 'debt-consolidation-calculator',
    title: 'Debt Consolidation Calculator',
    slug: 'debt-consolidation-calculator',
    description: 'Calculate potential savings from consolidating multiple debts into one loan.',
    category: 'finance',
    subcategory: 'loans',
    authorId: 'mike-finance',
    component: DebtConsolidationCalculator,
    content: DebtConsolidationCalculatorContent,
    meta: {
      title: 'Debt Consolidation Calculator',
      description: 'Use our Debt Consolidation Calculator to find out how much you can save by consolidating your debts into one loan.',
      keywords: ["debt consolidation","savings calculator","finance","loans"],
    },
  },
  {
    id: 'investment-return-calculator',
    title: 'Investment Return Calculator',
    slug: 'investment-return-calculator',
    description: 'Calculate return on investment (ROI) and annualized returns.',
    category: 'finance',
    subcategory: 'investments',
    authorId: 'investment-pro',
    component: InvestmentReturnCalculator,
    content: InvestmentReturnCalculatorContent,
    meta: {
      title: 'Investment Return Calculator - Calculate ROI and Annualized Returns',
      description: 'Use our Investment Return Calculator to quickly determine your ROI and annualized returns based on your investment data.',
      keywords: ["investment","ROI","annualized return","finance","calculator"],
    },
  },
  {
    id: 'future-value-calculator',
    title: 'Future Value Calculator',
    slug: 'future-value-calculator',
    description: 'Calculate the future value of an investment with compound interest.',
    category: 'finance',
    subcategory: 'investments',
    authorId: 'investment-pro',
    component: FutureValueCalculator,
    content: FutureValueCalculatorContent,
    meta: {
      title: 'Future Value Calculator - Calculate Your Investment Growth',
      description: 'Use our Future Value Calculator to determine how much your investments will grow over time with compound interest.',
      keywords: ["future value","investment calculator","compound interest","finance"],
    },
  },
  {
    id: 'present-value-calculator',
    title: 'Present Value Calculator',
    slug: 'present-value-calculator',
    description: 'Calculate the present value of a future amount (discounting).',
    category: 'finance',
    subcategory: 'investments',
    authorId: 'investment-pro',
    component: PresentValueCalculator,
    content: PresentValueCalculatorContent,
    meta: {
      title: 'Present Value Calculator',
      description: 'Calculate the present value of a future amount (discounting) easily.',
      keywords: ["present value","finance","investment","calculator"],
    },
  },
  {
    id: 'annuity-calculator',
    title: 'Annuity Calculator',
    slug: 'annuity-calculator',
    description: 'Calculate annuity payments, present value, or future value of annuities.',
    category: 'finance',
    subcategory: 'investments',
    authorId: 'investment-pro',
    component: AnnuityCalculator,
    content: AnnuityCalculatorContent,
    meta: {
      title: 'Annuity Calculator - Calculate Payments and Values',
      description: 'Use our annuity calculator to find out how much your annuity payments will be worth over time.',
      keywords: ["annuity","calculator","finance","investment","future value","present value"],
    },
  },
  {
    id: '401k-calculator',
    title: '401(k) Retirement Calculator',
    slug: '401k-calculator',
    description: 'Calculate 401(k) retirement savings and employer match contributions.',
    category: 'finance',
    subcategory: 'retirement',
    authorId: 'investment-pro',
    component: Retirement401kCalculator,
    content: Retirement401kCalculatorContent,
    meta: {
      title: '401(k) Retirement Calculator',
      description: 'Use our 401(k) calculator to estimate your retirement savings and employer contributions.',
      keywords: ["401(k)","retirement calculator","savings","financial planning"],
    },
  },
  {
    id: 'ira-calculator',
    title: 'IRA Calculator',
    slug: 'ira-calculator',
    description: 'Calculate IRA contributions, growth, and retirement savings.',
    category: 'finance',
    subcategory: 'retirement',
    authorId: 'investment-pro',
    component: IRACalculator,
    content: IRACalculatorContent,
    meta: {
      title: 'IRA Calculator - Plan Your Retirement Savings',
      description: 'Use our IRA calculator to estimate your retirement savings based on your contributions and expected returns.',
      keywords: ["IRA","retirement","savings","calculator","finance"],
    },
  },
  {
    id: 'income-tax-calculator',
    title: 'Income Tax Calculator',
    slug: 'income-tax-calculator',
    description: 'Estimate your federal income tax based on filing status and income.',
    category: 'finance',
    subcategory: 'taxes',
    authorId: 'tax-expert-carol',
    component: IncomeTaxCalculator,
    content: IncomeTaxCalculatorContent,
    meta: {
      title: 'Income Tax Calculator',
      description: 'Use our Income Tax Calculator to estimate your federal income tax based on your annual income and filing status.',
      keywords: ["income tax","tax calculator","finance","taxes"],
    },
  },
  {
    id: 'sales-tax-calculator',
    title: 'Sales Tax Calculator',
    slug: 'sales-tax-calculator',
    description: 'Calculate sales tax on purchases based on tax rate and amount.',
    category: 'finance',
    subcategory: 'taxes',
    authorId: 'tax-expert-carol',
    component: SalesTaxCalculator,
    content: SalesTaxCalculatorContent,
    meta: {
      title: 'Sales Tax Calculator - Calculate Your Sales Tax Easily',
      description: 'Use our Sales Tax Calculator to determine the sales tax on your purchases based on the amount and tax rate.',
      keywords: ["sales tax","tax calculator","finance","sales tax rate","purchase amount"],
    },
  },
  {
    id: 'tip-calculator',
    title: 'Tip Calculator',
    slug: 'tip-calculator',
    description: 'Calculate tip amount and total bill including tip.',
    category: 'finance',
    subcategory: 'other',
    authorId: 'mike-finance',
    component: TipCalculator,
    content: TipCalculatorContent,
    meta: {
      title: 'Tip Calculator - Calculate Your Tips Easily',
      description: 'Use our tip calculator to quickly determine the tip amount and total bill including tip based on your preferences.',
      keywords: ["tip calculator","calculate tip","bill calculator","finance tools"],
    },
  },
  {
    id: 'discount-calculator',
    title: 'Discount Calculator',
    slug: 'discount-calculator',
    description: 'Calculate discount amount and final price after discount.',
    category: 'finance',
    subcategory: 'other',
    authorId: 'mike-finance',
    component: DiscountCalculator,
    content: DiscountCalculatorContent,
    meta: {
      title: 'Discount Calculator - Calculate Your Savings',
      description: 'Use our discount calculator to find out how much you save and what the final price will be after applying a discount.',
      keywords: ["discount calculator","savings","price calculator","finance tools"],
    },
  },
  {
    id: 'budget-calculator',
    title: 'Budget Calculator',
    slug: 'budget-calculator',
    description: 'Create and manage a monthly budget with income and expenses.',
    category: 'finance',
    subcategory: 'budgeting',
    authorId: 'mike-finance',
    component: BudgetCalculator,
    content: BudgetCalculatorContent,
    meta: {
      title: 'Budget Calculator - Manage Your Finances',
      description: 'Use our budget calculator to track your income and expenses effectively.',
      keywords: ["budget calculator","finance","monthly budget","expenses","income"],
    },
  },
  {
    id: 'debt-to-income-calculator',
    title: 'Debt to Income Calculator',
    slug: 'debt-to-income-calculator',
    description: 'Calculate your debt-to-income ratio to assess financial health.',
    category: 'finance',
    subcategory: 'budgeting',
    authorId: 'mike-finance',
    component: DebtToIncomeCalculator,
    content: DebtToIncomeCalculatorContent,
    meta: {
      title: 'Debt to Income Calculator',
      description: 'Use our Debt to Income Calculator to determine your financial health and manage your debts effectively.',
      keywords: ["debt","income","financial health","DTI","budgeting"],
    },
  },
  {
    id: 'salary-calculator',
    title: 'Salary Calculator',
    slug: 'salary-calculator',
    description: 'Convert between hourly, weekly, monthly, and annual salary.',
    category: 'finance',
    subcategory: 'budgeting',
    authorId: 'mike-finance',
    component: SalaryCalculator,
    content: SalaryCalculatorContent,
    meta: {
      title: 'Salary Calculator',
      description: 'Easily convert your salary between different payment frequencies.',
      keywords: ["salary","calculator","finance","budgeting","conversion"],
    },
  },
  {
    id: 'ideal-weight-calculator',
    title: 'Ideal Weight Calculator',
    slug: 'ideal-weight-calculator',
    description: 'Calculate your ideal body weight based on height, gender, and body frame.',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: IdealWeightCalculator,
    content: IdealWeightCalculatorContent,
    meta: {
      title: 'Ideal Weight Calculator',
      description: 'Find out your ideal body weight based on height, gender, and body frame with our easy-to-use calculator.',
      keywords: ["ideal weight","body weight calculator","health","fitness"],
    },
  },
  {
    id: 'body-surface-area-calculator',
    title: 'Body Surface Area Calculator',
    slug: 'body-surface-area-calculator',
    description: 'Calculate body surface area (BSA) using various formulas (Mosteller, Du Bois, etc.).',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: BodySurfaceAreaCalculator,
    content: BodySurfaceAreaCalculatorContent,
    meta: {
      title: 'Body Surface Area Calculator - Calculate Your BSA',
      description: 'Use our Body Surface Area Calculator to quickly find your BSA based on weight and height.',
      keywords: ["Body Surface Area","BSA","Health","Fitness","Calculator"],
    },
  },
  {
    id: 'lean-body-mass-calculator',
    title: 'Lean Body Mass Calculator',
    slug: 'lean-body-mass-calculator',
    description: 'Calculate lean body mass (LBM) and fat-free mass.',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: LeanBodyMassCalculator,
    content: LeanBodyMassCalculatorContent,
    meta: {
      title: 'Lean Body Mass Calculator',
      description: 'Use our Lean Body Mass Calculator to determine your lean body mass and fat-free mass based on your weight and body fat percentage.',
      keywords: ["lean body mass","LBM","body fat percentage","fitness calculator"],
    },
  },
  {
    id: 'waist-to-hip-ratio-calculator',
    title: 'Waist to Hip Ratio Calculator',
    slug: 'waist-to-hip-ratio-calculator',
    description: 'Calculate waist-to-hip ratio (WHR) to assess health risks.',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: WaistToHipRatioCalculator,
    content: WaistToHipRatioCalculatorContent,
    meta: {
      title: 'Waist to Hip Ratio Calculator',
      description: 'Use our Waist to Hip Ratio Calculator to assess your health risks based on your waist and hip measurements.',
      keywords: ["waist to hip ratio","WHR","health calculator","fitness","body measurement"],
    },
  },
  {
    id: 'running-pace-calculator',
    title: 'Running Pace Calculator',
    slug: 'running-pace-calculator',
    description: 'Calculate running pace, speed, and time for various distances.',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: RunningPaceCalculator,
    content: RunningPaceCalculatorContent,
    meta: {
      title: 'Running Pace Calculator',
      description: 'Easily calculate your running pace and speed based on distance and time.',
      keywords: ["running pace","pace calculator","running speed","fitness calculator"],
    },
  },
  {
    id: 'steps-to-miles-calculator',
    title: 'Steps to Miles Calculator',
    slug: 'steps-to-miles-calculator',
    description: 'Convert steps to miles or kilometers based on stride length.',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: StepsToMilesCalculator,
    content: StepsToMilesCalculatorContent,
    meta: {
      title: 'Steps to Miles Calculator',
      description: 'Easily convert your steps to miles or kilometers with our user-friendly calculator.',
      keywords: ["steps to miles","distance converter","fitness calculator","stride length"],
    },
  },
  {
    id: 'exercise-calorie-burn-calculator',
    title: 'Exercise Calorie Burn Calculator',
    slug: 'exercise-calorie-burn-calculator',
    description: 'Calculate calories burned during various exercises and activities.',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: ExerciseCalorieBurnCalculator,
    content: ExerciseCalorieBurnCalculatorContent,
    meta: {
      title: 'Exercise Calorie Burn Calculator',
      description: 'Estimate calories burned during different physical activities based on weight, duration, and intensity.',
      keywords: ["calorie burn","exercise calculator","fitness","health"],
    },
  },
  {
    id: 'protein-calculator',
    title: 'Protein Calculator',
    slug: 'protein-calculator',
    description: 'Calculate daily protein needs based on weight, activity level, and goals.',
    category: 'health',
    subcategory: 'nutrition',
    authorId: 'nutritionist-ben',
    component: ProteinCalculator,
    content: ProteinCalculatorContent,
    meta: {
      title: 'Protein Calculator - Daily Protein Needs',
      description: 'Use our Protein Calculator to determine your daily protein requirements based on weight, activity level, and fitness goals.',
      keywords: ["protein calculator","daily protein needs","nutrition","health"],
    },
  },
  {
    id: 'water-intake-calculator',
    title: 'Water Intake Calculator',
    slug: 'water-intake-calculator',
    description: 'Calculate daily water intake needs based on weight, activity, and climate.',
    category: 'health',
    subcategory: 'nutrition',
    authorId: 'nutritionist-ben',
    component: WaterIntakeCalculator,
    content: WaterIntakeCalculatorContent,
    meta: {
      title: 'Water Intake Calculator - Stay Hydrated',
      description: 'Use our Water Intake Calculator to determine your daily hydration needs based on weight, activity level, and climate.',
      keywords: ["water intake","hydration","health","nutrition","calculator"],
    },
  },
  {
    id: 'heart-rate-calculator',
    title: 'Heart Rate Calculator',
    slug: 'heart-rate-calculator',
    description: 'Calculate target heart rate zones, maximum heart rate, and resting heart rate.',
    category: 'health',
    subcategory: 'medical',
    authorId: 'dr-sarah-smith',
    component: HeartRateCalculator,
    content: HeartRateCalculatorContent,
    meta: {
      title: 'Heart Rate Calculator - Optimize Your Workouts',
      description: 'Use our heart rate calculator to find your target heart rate zones, maximum heart rate, and resting heart rate for effective workouts.',
      keywords: ["heart rate","calculator","fitness","health","exercise"],
    },
  },
  {
    id: 'pregnancy-due-date-calculator',
    title: 'Pregnancy Due Date Calculator',
    slug: 'pregnancy-due-date-calculator',
    description: 'Calculate pregnancy due date based on last menstrual period or conception date.',
    category: 'health',
    subcategory: 'pregnancy',
    authorId: 'dr-sarah-smith',
    component: PregnancyDueDateCalculator,
    content: PregnancyDueDateCalculatorContent,
    meta: {
      title: 'Pregnancy Due Date Calculator',
      description: 'Use our Pregnancy Due Date Calculator to estimate your due date based on your last menstrual period or conception date.',
      keywords: ["pregnancy","due date","calculator","health"],
    },
  },
  {
    id: 'percentage-increase-calculator',
    title: 'Percentage Increase Calculator',
    slug: 'percentage-increase-calculator',
    description: 'Calculate percentage increase or decrease between two values.',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: PercentageIncreaseCalculator,
    content: PercentageIncreaseCalculatorContent,
    meta: {
      title: 'Percentage Increase Calculator',
      description: 'Easily calculate the percentage increase or decrease between two values with our user-friendly calculator.',
      keywords: ["percentage increase","calculator","math","percentage decrease"],
    },
  },
  {
    id: 'proportion-calculator',
    title: 'Proportion Calculator',
    slug: 'proportion-calculator',
    description: 'Solve proportions and find missing values in proportional relationships.',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: ProportionCalculator,
    content: ProportionCalculatorContent,
    meta: {
      title: 'Proportion Calculator',
      description: 'Easily solve proportions and find missing values with our online Proportion Calculator.',
      keywords: ["proportion","calculator","math","ratios","solve proportions"],
    },
  },
  {
    id: 'cube-root-calculator',
    title: 'Cube Root Calculator',
    slug: 'cube-root-calculator',
    description: 'Calculate the cube root of any number.',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: CubeRootCalculator,
    content: CubeRootCalculatorContent,
    meta: {
      title: 'Cube Root Calculator - Find the Cube Root of Any Number',
      description: 'Use our Cube Root Calculator to quickly find the cube root of any number with ease.',
      keywords: ["cube root","calculator","math","cube root calculator"],
    },
  },
  {
    id: 'exponent-calculator',
    title: 'Exponent Calculator',
    slug: 'exponent-calculator',
    description: 'Calculate numbers raised to a power (exponentiation).',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: ExponentCalculator,
    content: ExponentCalculatorContent,
    meta: {
      title: 'Exponent Calculator - Calculate Exponentiation Easily',
      description: 'Use our Exponent Calculator to quickly calculate numbers raised to a power. Simple and efficient for all your exponentiation needs.',
      keywords: ["exponent calculator","calculate exponentiation","math calculator"],
    },
  },
  {
    id: 'logarithm-calculator',
    title: 'Logarithm Calculator',
    slug: 'logarithm-calculator',
    description: 'Calculate logarithms (natural log, base 10, or custom base).',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: LogarithmCalculator,
    content: LogarithmCalculatorContent,
    meta: {
      title: 'Logarithm Calculator - Calculate Logarithms Easily',
      description: 'Use our logarithm calculator to compute logarithms in various bases including base 10, natural log, and base 2.',
      keywords: ["logarithm","calculator","math","log","natural log"],
    },
  },
  {
    id: 'factorial-calculator',
    title: 'Factorial Calculator',
    slug: 'factorial-calculator',
    description: 'Calculate factorial of a number (n!).',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: FactorialCalculator,
    content: FactorialCalculatorContent,
    meta: {
      title: 'Factorial Calculator - Calculate n!',
      description: 'Use our Factorial Calculator to compute the factorial of any non-negative integer.',
      keywords: ["factorial","calculator","math","n!"],
    },
  },
  {
    id: 'gcd-calculator',
    title: 'GCD Calculator',
    slug: 'gcd-calculator',
    description: 'Calculate Greatest Common Divisor (GCD) of two or more numbers.',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: GCDCalculator,
    content: GCDCalculatorContent,
    meta: {
      title: 'GCD Calculator - Find the Greatest Common Divisor',
      description: 'Use our GCD Calculator to find the Greatest Common Divisor of two numbers quickly and easily.',
      keywords: ["GCD","Greatest Common Divisor","math calculator","number theory"],
    },
  },
  {
    id: 'lcm-calculator',
    title: 'LCM Calculator',
    slug: 'lcm-calculator',
    description: 'Calculate Least Common Multiple (LCM) of two or more numbers.',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: LCMCalculator,
    content: LCMCalculatorContent,
    meta: {
      title: 'LCM Calculator - Calculate Least Common Multiple',
      description: 'Use our LCM calculator to find the least common multiple of two numbers quickly and easily.',
      keywords: ["LCM","Least Common Multiple","Calculator","Math"],
    },
  },
  {
    id: 'linear-equation-solver',
    title: 'Linear Equation Solver',
    slug: 'linear-equation-solver',
    description: 'Solve linear equations in one variable (ax + b = 0).',
    category: 'math',
    subcategory: 'algebra',
    authorId: 'prof-math',
    component: LinearEquationSolver,
    content: LinearEquationSolverContent,
    meta: {
      title: 'Linear Equation Solver - Solve Linear Equations Easily',
      description: 'Use our Linear Equation Solver to quickly find the value of x in equations of the form ax + b = 0.',
      keywords: ["linear equation","math","algebra","solve equations","calculator"],
    },
  },
  {
    id: 'distance-calculator',
    title: 'Distance Calculator',
    slug: 'distance-calculator',
    description: 'Calculate distance between two points in 2D or 3D space.',
    category: 'math',
    subcategory: 'algebra',
    authorId: 'prof-geometry',
    component: DistanceCalculator,
    content: DistanceCalculatorContent,
    meta: {
      title: 'Distance Calculator - Calculate Distance Between Points',
      description: 'Use our Distance Calculator to find the distance between two points in 2D or 3D space easily.',
      keywords: ["distance calculator","calculate distance","geometry","math"],
    },
  },
  {
    id: 'pythagorean-theorem-calculator',
    title: 'Pythagorean Theorem Calculator',
    slug: 'pythagorean-theorem-calculator',
    description: 'Calculate missing side of a right triangle using Pythagorean theorem.',
    category: 'math',
    subcategory: 'geometry',
    authorId: 'prof-geometry',
    component: PythagoreanTheoremCalculator,
    content: PythagoreanTheoremCalculatorContent,
    meta: {
      title: 'Pythagorean Theorem Calculator',
      description: 'Easily calculate the missing side of a right triangle using the Pythagorean theorem.',
      keywords: ["Pythagorean theorem","triangle calculator","geometry calculator","math tools"],
    },
  },
  {
    id: 'circle-calculator',
    title: 'Circle Calculator',
    slug: 'circle-calculator',
    description: 'Calculate circle area, circumference, radius, and diameter.',
    category: 'math',
    subcategory: 'geometry',
    authorId: 'prof-geometry',
    component: CircleCalculator,
    content: CircleCalculatorContent,
    meta: {
      title: 'Circle Calculator - Calculate Area and Circumference',
      description: 'Use our Circle Calculator to find the area and circumference of a circle based on its radius.',
      keywords: ["circle calculator","area","circumference","geometry"],
    },
  },
  {
    id: 'triangle-calculator',
    title: 'Triangle Calculator',
    slug: 'triangle-calculator',
    description: 'Calculate triangle area, perimeter, and angles given sides.',
    category: 'math',
    subcategory: 'geometry',
    authorId: 'prof-geometry',
    component: TriangleCalculator,
    content: TriangleCalculatorContent,
    meta: {
      title: 'Triangle Calculator - Calculate Area, Perimeter, and Angles',
      description: 'Use our Triangle Calculator to find the area, perimeter, and angles of a triangle based on its sides.',
      keywords: ["triangle","calculator","geometry","area","perimeter","angles"],
    },
  },
  {
    id: 'variance-calculator',
    title: 'Variance Calculator',
    slug: 'variance-calculator',
    description: 'Calculate variance and standard deviation of a dataset.',
    category: 'statistics',
    subcategory: 'descriptive',
    authorId: 'prof-data',
    component: VarianceCalculator,
    content: VarianceCalculatorContent,
    meta: {
      title: 'Variance Calculator - Calculate Variance and Standard Deviation',
      description: 'Use our variance calculator to find the variance and standard deviation of your dataset quickly and easily.',
      keywords: ["variance calculator","calculate variance","standard deviation","statistics"],
    },
  },
  {
    id: 'range-calculator',
    title: 'Range Calculator',
    slug: 'range-calculator',
    description: 'Calculate the range (difference between max and min) of a dataset.',
    category: 'statistics',
    subcategory: 'descriptive',
    authorId: 'prof-data',
    component: RangeCalculator,
    content: RangeCalculatorContent,
    meta: {
      title: 'Range Calculator - Calculate the Range of Your Data',
      description: 'Use our range calculator to find the difference between the maximum and minimum values in your dataset quickly and easily.',
      keywords: ["range calculator","statistics","data analysis","calculate range"],
    },
  },
  {
    id: 'percentile-calculator',
    title: 'Percentile Calculator',
    slug: 'percentile-calculator',
    description: 'Calculate percentiles and quartiles of a dataset.',
    category: 'statistics',
    subcategory: 'descriptive',
    authorId: 'prof-data',
    component: PercentileCalculator,
    content: PercentileCalculatorContent,
    meta: {
      title: 'Percentile Calculator - Calculate Percentiles Easily',
      description: 'Use our Percentile Calculator to quickly find the percentile of your dataset. Input your numbers and get results instantly.',
      keywords: ["percentile","calculator","statistics","data analysis"],
    },
  },
  {
    id: 'z-score-calculator',
    title: 'Z-Score Calculator',
    slug: 'z-score-calculator',
    description: 'Calculate z-score (standard score) for a data point.',
    category: 'statistics',
    subcategory: 'descriptive',
    authorId: 'prof-data',
    component: ZScoreCalculator,
    content: ZScoreCalculatorContent,
    meta: {
      title: 'Z-Score Calculator - Calculate Your Z-Score Easily',
      description: 'Use our Z-Score Calculator to find the standard score for your data point quickly and accurately.',
      keywords: ["Z-Score","Standard Score","Statistics Calculator","Descriptive Statistics"],
    },
  },
  {
    id: 'probability-calculator',
    title: 'Probability Calculator',
    slug: 'probability-calculator',
    description: 'Calculate probability of events and combinations.',
    category: 'statistics',
    subcategory: 'probability',
    authorId: 'prof-data',
    component: ProbabilityCalculator,
    content: ProbabilityCalculatorContent,
    meta: {
      title: 'Probability Calculator - Calculate Probability of Events',
      description: 'Use our Probability Calculator to find the likelihood of events occurring based on favorable and total outcomes.',
      keywords: ["probability","calculator","statistics","favorable outcomes","total outcomes"],
    },
  },
  {
    id: 'combination-calculator',
    title: 'Combination Calculator',
    slug: 'combination-calculator',
    description: 'Calculate combinations (nCr) - ways to choose r items from n items.',
    category: 'statistics',
    subcategory: 'probability',
    authorId: 'prof-data',
    component: CombinationCalculator,
    content: CombinationCalculatorContent,
    meta: {
      title: 'Combination Calculator',
      description: 'Easily calculate combinations (nCr) for statistical analysis.',
      keywords: ["combinations","nCr","statistics","probability","calculator"],
    },
  },
  {
    id: 'permutation-calculator',
    title: 'Permutation Calculator',
    slug: 'permutation-calculator',
    description: 'Calculate permutations (nPr) - ordered arrangements.',
    category: 'statistics',
    subcategory: 'probability',
    authorId: 'prof-data',
    component: PermutationCalculator,
    content: PermutationCalculatorContent,
    meta: {
      title: 'Permutation Calculator - Calculate nPr',
      description: 'Easily calculate permutations with our online Permutation Calculator. Input total items and items to arrange.',
      keywords: ["permutation","calculator","nPr","statistics","probability"],
    },
  },
  {
    id: 'time-zone-converter',
    title: 'Time Zone Converter',
    slug: 'time-zone-converter',
    description: 'Convert time between different time zones worldwide.',
    category: 'everyday-life',
    subcategory: 'date-time',
    authorId: 'lisa-daily',
    component: TimeZoneConverter,
    content: TimeZoneConverterContent,
    meta: {
      title: 'Time Zone Converter',
      description: 'Easily convert time between various time zones including UTC, EST, PST, and GMT.',
      keywords: ["time zone converter","convert time","UTC","EST","PST","GMT"],
    },
  },
  {
    id: 'paint-calculator',
    title: 'Paint Calculator',
    slug: 'paint-calculator',
    description: 'Calculate how much paint you need for a room based on dimensions.',
    category: 'everyday-life',
    subcategory: 'home-garden',
    authorId: 'lisa-daily',
    component: PaintCalculator,
    content: PaintCalculatorContent,
    meta: {
      title: 'Paint Calculator - Estimate Your Paint Needs',
      description: 'Use our Paint Calculator to determine the amount of paint needed for your room based on its dimensions and the number of coats.',
      keywords: ["paint calculator","paint estimation","home improvement","DIY painting"],
    },
  },
  {
    id: 'tile-calculator',
    title: 'Tile Calculator',
    slug: 'tile-calculator',
    description: 'Calculate number of tiles needed for a floor or wall area.',
    category: 'everyday-life',
    subcategory: 'home-garden',
    authorId: 'lisa-daily',
    component: TileCalculator,
    content: TileCalculatorContent,
    meta: {
      title: 'Tile Calculator - Estimate Your Tile Needs',
      description: 'Use our Tile Calculator to estimate the number of tiles needed for your flooring or wall project, including waste percentage.',
      keywords: ["tile calculator","flooring","home improvement","tile estimation"],
    },
  },
  {
    id: 'force-calculator',
    title: 'Force Calculator',
    slug: 'force-calculator',
    description: 'Calculate force using F = ma (Newton\'s second law).',
    category: 'physics',
    subcategory: 'mechanics',
    authorId: 'prof-isaac-newton',
    component: ForceCalculator,
    content: ForceCalculatorContent,
    meta: {
      title: 'Force Calculator - Calculate Force with F = ma',
      description: 'Use our Force Calculator to compute force based on mass and acceleration using Newton\'s second law.',
      keywords: ["force calculator","physics","Newton's second law","calculate force"],
    },
  },
  {
    id: 'acceleration-calculator',
    title: 'Acceleration Calculator',
    slug: 'acceleration-calculator',
    description: 'Calculate acceleration from velocity and time.',
    category: 'physics',
    subcategory: 'mechanics',
    authorId: 'prof-isaac-newton',
    component: AccelerationCalculator,
    content: AccelerationCalculatorContent,
    meta: {
      title: 'Acceleration Calculator - Calculate Acceleration Easily',
      description: 'Use our acceleration calculator to find the acceleration based on initial and final velocity over time.',
      keywords: ["acceleration","calculator","physics","mechanics","velocity","time"],
    },
  },
  {
    id: 'kinetic-energy-calculator',
    title: 'Kinetic Energy Calculator',
    slug: 'kinetic-energy-calculator',
    description: 'Calculate kinetic energy using KE = ½mv².',
    category: 'physics',
    subcategory: 'mechanics',
    authorId: 'prof-isaac-newton',
    component: KineticEnergyCalculator,
    content: KineticEnergyCalculatorContent,
    meta: {
      title: 'Kinetic Energy Calculator',
      description: 'Easily calculate kinetic energy with our online calculator.',
      keywords: ["kinetic energy","calculator","physics","mechanics"],
    },
  },
  {
    id: 'potential-energy-calculator',
    title: 'Potential Energy Calculator',
    slug: 'potential-energy-calculator',
    description: 'Calculate gravitational potential energy using PE = mgh.',
    category: 'physics',
    subcategory: 'mechanics',
    authorId: 'prof-isaac-newton',
    component: PotentialEnergyCalculator,
    content: PotentialEnergyCalculatorContent,
    meta: {
      title: 'Potential Energy Calculator',
      description: 'Easily calculate gravitational potential energy with our online calculator.',
      keywords: ["potential energy","calculator","physics","mechanics","gravitational energy"],
    },
  },
  {
    id: 'ohms-law-calculator',
    title: 'Ohm’s Law Calculator',
    slug: 'ohms-law-calculator',
    description: 'Calculate voltage, current, or resistance using Ohm\'s Law (V = IR).',
    category: 'physics',
    subcategory: 'electricity',
    authorId: 'dr-albert-einstein',
    component: OhmsLawCalculator,
    content: OhmsLawCalculatorContent,
    meta: {
      title: 'Ohm’s Law Calculator - Calculate Voltage, Current, and Resistance',
      description: 'Use our Ohm’s Law calculator to easily compute voltage, current, or resistance in electrical circuits.',
      keywords: ["Ohm's Law","Voltage","Current","Resistance","Electrical Engineering"],
    },
  },
  {
    id: 'height-converter',
    title: 'Height Converter',
    slug: 'height-converter',
    description: 'Convert height between feet/inches and centimeters/meters.',
    category: 'conversion',
    subcategory: 'length',
    authorId: 'unit-master',
    component: HeightConverter,
    content: HeightConverterContent,
    meta: {
      title: 'Height Converter - Convert Between Units',
      description: 'Easily convert height measurements between feet, inches, centimeters, and meters with our height converter tool.',
      keywords: ["height converter","convert height","feet to cm","cm to ft"],
    },
  },
  {
    id: 'currency-converter',
    title: 'Currency Converter',
    slug: 'currency-converter',
    description: 'Convert between different currencies with real-time exchange rates.',
    category: 'finance',
    subcategory: 'currency',
    authorId: 'mike-finance',
    component: CurrencyConverter,
    content: CurrencyConverterContent,
    meta: {
      title: 'Currency Converter - Convert Currencies Easily',
      description: 'Use our Currency Converter to easily convert between USD, EUR, GBP, and JPY with real-time exchange rates.',
      keywords: ["currency converter","convert currencies","USD to EUR","exchange rates"],
    },
  },
  {
    id: 'mode-calculator',
    title: 'Mode Calculator',
    slug: 'mode-calculator',
    description: 'Calculate the mode (most frequently occurring value) of a dataset.',
    category: 'statistics',
    subcategory: 'descriptive',
    authorId: 'prof-data',
    component: ModeCalculator,
    content: ModeCalculatorContent,
    meta: {
      title: 'Mode Calculator — Descriptive Statistics Tool',
      description: 'Quickly compute the mode of a numeric dataset. Enter comma-separated numbers to find the most frequently occurring value(s) and visualize the frequency distribution.',
      keywords: ["mode","mode calculator","statistics","descriptive statistics","frequency distribution","multimodal","data analysis"],
    },
  },
  {
    id: 'distance-converter',
    title: 'Distance Converter',
    slug: 'distance-converter',
    description: 'Convert distances including nautical miles, leagues, and other specialized units.',
    category: 'conversion',
    subcategory: 'length',
    authorId: 'unit-master',
    component: DistanceConverter,
    content: DistanceConverterContent,
    meta: {
      title: 'Distance Converter — Convert Km, Mi, Nmi, and Meters',
      description: 'Convert distances between kilometers, miles, nautical miles, and meters. Includes charts and PDF export.',
      keywords: ["distance converter","kilometers to miles","nautical miles","convert km to mi","distance conversion","meters to miles"],
    },
  },
  {
    id: 'mile-to-kilometer-converter',
    title: 'Miles ↔ Kilometers Converter',
    slug: 'mile-to-kilometer-converter',
    description: 'Convert miles to kilometers and kilometers to miles. Automatic calculations, charts, and PDF export.',
    category: 'conversion',
    subcategory: 'length',
    authorId: 'unit-master',
    component: MileToKilometerConverter,
    content: MileToKilometerConverterContent,
    meta: {
      title: 'Miles to Kilometers Converter — Convert mi to km & km to mi',
      description: 'Quickly convert distances between miles and kilometers. Automatic results, bar charts for comparison, and PDF export.',
      keywords: ["miles to kilometers","mi to km","kilometers to miles","distance converter","unit conversion"],
    },
  },
  {
    id: 'inch-to-centimeter-converter',
    title: 'Inch to Centimeter Converter',
    slug: 'inch-to-centimeter-converter',
    description: 'Convert inches to centimeters and centimeters to inches with automatic calculations and visual charts.',
    category: 'conversion',
    subcategory: 'length',
    authorId: 'unit-master',
    component: InchToCentimeterConverter,
    content: InchToCentimeterConverterContent,
    meta: {
      title: 'Inch to Centimeter Converter — Convert in ↔ cm',
      description: 'Fast and accurate converter to transform inches to centimeters and centimeters to inches. Includes charts and PDF export.',
      keywords: ["inch to centimeter","in to cm","length converter","unit conversion","conversion calculator"],
    },
  },
  {
    id: 'foot-to-meter-converter',
    title: 'Foot to Meter Converter',
    slug: 'foot-to-meter-converter',
    description: 'Convert feet to meters and vice versa.',
    category: 'conversion',
    subcategory: 'length',
    authorId: 'unit-master',
    component: FootToMeterConverter,
    content: FootToMeterConverterContent,
    meta: {
      title: 'Foot to Meter Converter — Convert ft to m and m to ft',
      description: 'Instantly convert between feet (ft) and meters (m). Accurate, fast, and includes charts and PDF export.',
      keywords: ["feet to meters","ft to m","meter to foot","length converter","unit conversion","ft m converter"],
    },
  },
  {
    id: 'yard-to-meter-converter',
    title: 'Yard ↔ Meter Converter',
    slug: 'yard-to-meter-converter',
    description: 'Convert yards to meters and meters to yards quickly and accurately.',
    category: 'conversion',
    subcategory: 'length',
    authorId: 'unit-master',
    component: YardToMeterConverter,
    content: YardToMeterConverterContent,
    meta: {
      title: 'Yard to Meter Converter — Convert Yards and Meters',
      description: 'Quickly convert between yards and meters. Auto-calculating length converter with charts and PDF export. Accurate conversions using 1 yd = 0.9144 m.',
      keywords: ["yard to meter","yards to meters","meter to yard","length converter","unit conversion","yd to m","m to yd"],
    },
  },
  {
    id: 'nautical-mile-converter',
    title: 'Nautical Mile Converter',
    slug: 'nautical-mile-converter',
    description: 'Convert nautical miles to kilometers, miles, or meters.',
    category: 'conversion',
    subcategory: 'length',
    authorId: 'unit-master',
    component: NauticalMileConverter,
    content: NauticalMileConverterContent,
    meta: {
      title: 'Nautical Mile Converter — Convert nmi to km, mi, and m',
      description: 'Convert distances measured in nautical miles (nmi) to kilometers (km), miles (mi), or meters (m). Accurate, instant conversions with charts and PDF export.',
      keywords: ["nautical mile converter","nmi to km","nmi to miles","nautical miles to meters","distance conversion","length converter"],
    },
  },
  {
    id: 'pound-to-kilogram-converter',
    title: 'Pound to Kilogram Converter',
    slug: 'pound-to-kilogram-converter',
    description: 'Convert pounds to kilograms and vice versa.',
    category: 'conversion',
    subcategory: 'weight',
    authorId: 'unit-master',
    component: PoundToKilogramConverter,
    content: PoundToKilogramConverterContent,
    meta: {
      title: 'Pound to Kilogram Converter — Convert lb ↔ kg',
      description: 'Instantly convert between pounds (lb) and kilograms (kg). Accurate, bi-directional conversion with charting and PDF export.',
      keywords: ["pound to kilogram","lb to kg","kilogram to pound","weight converter","unit conversion","lb kg converter"],
    },
  },
  {
    id: 'ounce-to-gram-converter',
    title: 'Ounce to Gram Converter',
    slug: 'ounce-to-gram-converter',
    description: 'Convert ounces to grams and vice versa.',
    category: 'conversion',
    subcategory: 'weight',
    authorId: 'unit-master',
    component: OunceToGramConverter,
    content: OunceToGramConverterContent,
    meta: {
      title: 'Ounce to Gram Converter — Convert oz to g and g to oz',
      description: 'Quickly convert between ounces (oz) and grams (g). Instant results, charts, and PDF export. Uses precise conversion factor 1 oz = 28.349523125 g.',
      keywords: ["ounce to gram","oz to g","grams to ounces","weight converter","unit conversion","oz g converter"],
    },
  },
  {
    id: 'stone-to-kilogram-converter',
    title: 'Stone to Kilogram Converter',
    slug: 'stone-to-kilogram-converter',
    description: 'Convert stones to kilograms and vice versa.',
    category: 'conversion',
    subcategory: 'weight',
    authorId: 'unit-master',
    component: StoneToKilogramConverter,
    content: StoneToKilogramConverterContent,
    meta: {
      title: 'Stone to Kilogram Converter — Convert stones and kilograms',
      description: 'Quickly convert between stones (st) and kilograms (kg). Includes charts and PDF export for results.',
      keywords: ["stone to kilogram","stones to kg","kg to stones","weight converter","stone converter","kilogram converter"],
    },
  },
  {
    id: 'tonne-to-kilogram-converter',
    title: 'Tonne to Kilogram Converter',
    slug: 'tonne-to-kilogram-converter',
    description: 'Convert tonnes to kilograms and vice versa.',
    category: 'conversion',
    subcategory: 'weight',
    authorId: 'unit-master',
    component: TonneToKilogramConverter,
    content: TonneToKilogramConverterContent,
    meta: {
      title: 'Tonne to Kilogram Converter — Convert t to kg and kg to t',
      description: 'Quickly convert between tonnes (t) and kilograms (kg). Instant, accurate conversion with charting and PDF export.',
      keywords: ["tonne to kilogram","t to kg","kilogram to tonne","weight converter","unit conversion","tonnes kilograms converter"],
    },
  },
  {
    id: 'liter-to-gallon-converter',
    title: 'Liter to Gallon Converter',
    slug: 'liter-to-gallon-converter',
    description: 'Convert liters to gallons and vice versa.',
    category: 'conversion',
    subcategory: 'volume',
    authorId: 'unit-master',
    component: LiterToGallonConverter,
    content: LiterToGallonConverterContent,
    meta: {
      title: 'Liter to Gallon Converter — Convert Liters and US Gallons',
      description: 'Quickly convert between liters and US gallons. Enter a volume, choose units, and get instant results with optional charts and PDF export.',
      keywords: ["liters","gallons","liters to gallons","gallon to liter","volume converter","unit conversion"],
    },
  },
  {
    id: 'cubic-meter-converter',
    title: 'Cubic Meter Converter',
    slug: 'cubic-meter-converter',
    description: 'Convert cubic meters to other volume units.',
    category: 'conversion',
    subcategory: 'volume',
    authorId: 'unit-master',
    component: CubicMeterConverter,
    content: CubicMeterConverterContent,
    meta: {
      title: 'Cubic Meter Converter — Convert m³ to Liters, Gallons, Cubic Feet',
      description: 'Convert cubic meters (m³) to liters, US gallons, and cubic feet quickly and accurately. Auto-calculating converter with charts and PDF export.',
      keywords: ["cubic meter","m3","volume converter","liters","gallons","cubic feet","unit conversion","volume"],
    },
  },
  {
    id: 'cup-to-milliliter-converter',
    title: 'Cup to Milliliter Converter',
    slug: 'cup-to-milliliter-converter',
    description: 'Convert between US cups and milliliters (mL). Quickly convert cups to mL and mL to cups with automatic calculation and PDF export.',
    category: 'conversion',
    subcategory: 'volume',
    authorId: 'unit-master',
    component: CupToMilliliterConverter,
    content: CupToMilliliterConverterContent,
    meta: {
      title: 'Cup to Milliliter Converter — Convert Cups ↔ mL',
      description: 'Free online converter to switch between US cups and milliliters. Instant results, charts, and PDF export for recipes and measurements.',
      keywords: ["cup to mL","cups to milliliters","volume converter","convert cups to ml","milliliters to cups"],
    },
  },
  {
    id: 'fluid-ounce-converter',
    title: 'Fluid Ounce Converter',
    slug: 'fluid-ounce-converter',
    description: 'Convert fluid ounces to milliliters and other volume units.',
    category: 'conversion',
    subcategory: 'volume',
    authorId: 'unit-master',
    component: FluidOunceConverter,
    content: FluidOunceConverterContent,
    meta: {
      title: 'Fluid Ounce Converter - Convert fl oz to mL, L, Cups, Pints, Quarts, Gallons',
      description: 'Quickly convert US fluid ounces (fl oz) to milliliters (mL) and other common volume units. Includes charts and PDF export for results.',
      keywords: ["fluid ounce","fl oz","milliliters","mL","volume converter","unit conversion","convert fl oz to mL","cups","pints","quarts","gallons"],
    },
  },
  {
    id: 'celsius-to-fahrenheit-converter',
    title: 'Celsius ↔ Fahrenheit Converter',
    slug: 'celsius-to-fahrenheit-converter',
    description: 'Convert temperatures between Celsius and Fahrenheit instantly. Supports both directions with instant results and charting.',
    category: 'conversion',
    subcategory: 'temperature',
    authorId: 'unit-master',
    component: CelsiusToFahrenheitConverter,
    content: CelsiusToFahrenheitConverterContent,
    meta: {
      title: 'Celsius to Fahrenheit Converter — Instant Temperature Conversion',
      description: 'Convert Celsius (°C) to Fahrenheit (°F) and vice versa. Instant, accurate conversions with charts and PDF export.',
      keywords: ["celsius to fahrenheit","fahrenheit to celsius","temperature converter","°C to °F","°F to °C","temperature conversion"],
    },
  },
  {
    id: 'square-foot-to-square-meter-converter',
    title: 'Square Feet ↔ Square Meters Converter',
    slug: 'square-foot-to-square-meter-converter',
    description: 'Convert square feet to square meters and vice versa.',
    category: 'conversion',
    subcategory: 'area',
    authorId: 'unit-master',
    component: SquareFootToSquareMeterConverter,
    content: SquareFootToSquareMeterConverterContent,
    meta: {
      title: 'Square Feet to Square Meters Converter — Unit Master',
      description: 'Convert areas between square feet (ft²) and square meters (m²) instantly. Auto-calculates on input and includes charts and PDF export.',
      keywords: ["square feet to square meters","ft2 to m2","area conversion","unit converter","square feet converter","square meters converter"],
    },
  },
  {
    id: 'acre-to-hectare-converter',
    title: 'Acre to Hectare Converter',
    slug: 'acre-to-hectare-converter',
    description: 'Convert acres to hectares and vice versa.',
    category: 'conversion',
    subcategory: 'area',
    authorId: 'unit-master',
    component: AcreToHectareConverter,
    content: AcreToHectareConverterContent,
    meta: {
      title: 'Acre to Hectare Converter — Area Conversion Tool',
      description: 'Quickly convert between acres and hectares. Accurate area conversions using square meters as the base unit. Includes charts and PDF export.',
      keywords: ["acre to hectare","hectare to acre","area conversion","acres hectares converter","acre hectare conversion"],
    },
  },
  {
    id: 'square-kilometer-to-square-mile-converter',
    title: 'Square Kilometer to Square Mile Converter',
    slug: 'square-kilometer-to-square-mile-converter',
    description: 'Convert square kilometers (km²) to square miles (mi²) and vice versa. Precise conversions via square meters with instant results and charts.',
    category: 'conversion',
    subcategory: 'area',
    authorId: 'unit-master',
    component: SquareKilometerToSquareMileConverter,
    content: SquareKilometerToSquareMileConverterContent,
    meta: {
      title: 'Square Kilometer to Square Mile Converter — Area Conversion Tool',
      description: 'Instantly convert between square kilometers and square miles. Accurate area conversions using square meters as a base unit. Includes charts and PDF export.',
      keywords: ["square kilometer to square mile","km2 to mi2","area conversion","square miles to square kilometers","area converter","land area conversion"],
    },
  },
  {
    id: 'loan-comparison-calculator',
    title: 'Loan Comparison Calculator',
    slug: 'loan-comparison-calculator',
    description: 'Compare multiple loan options side by side.',
    category: 'finance',
    subcategory: 'loans',
    authorId: 'mike-finance',
    component: LoanComparisonCalculator,
    content: LoanComparisonCalculatorContent,
    meta: {
      title: 'Loan Comparison Calculator — Compare Monthly Payments & Interest',
      description: 'Compare two loan offers by entering amounts, APRs, and terms. See monthly payments, total payments, and total interest side-by-side. Download results as PDF and view comparison charts.',
      keywords: ["loan comparison","loan calculator","mortgage comparison","monthly payment calculator","loan interest comparison","finance tools"],
    },
  },
  {
    id: 'amortization-schedule-generator',
    title: 'Amortization Schedule Generator',
    slug: 'amortization-schedule-generator',
    description: 'Generate a complete amortization schedule for a loan.',
    category: 'finance',
    subcategory: 'loans',
    authorId: 'mike-finance',
    component: AmortizationScheduleGenerator,
    content: AmortizationScheduleGeneratorContent,
    meta: {
      title: 'Amortization Schedule Generator — Loan Calculator',
      description: 'Generate a full amortization schedule, calculate periodic payments, total interest, and visualize the remaining balance over time for mortgages and loans.',
      keywords: ["amortization","loan calculator","mortgage schedule","payment schedule","loan amortization","total interest"],
    },
  },
  {
    id: 'stock-return-calculator',
    title: 'Stock Return Calculator',
    slug: 'stock-return-calculator',
    description: 'Calculate stock returns including dividends and capital gains.',
    category: 'finance',
    subcategory: 'investments',
    authorId: 'investment-pro',
    component: StockReturnCalculator,
    content: StockReturnCalculatorContent,
    meta: {
      title: 'Stock Return Calculator — Calculate Capital Gains & Dividends',
      description: 'Use this Stock Return Calculator to compute capital gains, total dividends, absolute return, and percentage return on your stock investment. Fast, automatic calculations and downloadable PDF results.',
      keywords: ["stock return calculator","capital gains calculator","dividend calculator","investment return","portfolio returns","stock returns"],
    },
  },
  {
    id: 'dividend-calculator',
    title: 'Dividend Calculator',
    slug: 'dividend-calculator',
    description: 'Calculate dividend yield and annual dividend income.',
    category: 'finance',
    subcategory: 'investments',
    authorId: 'investment-pro',
    component: DividendCalculator,
    content: DividendCalculatorContent,
    meta: {
      title: 'Dividend Calculator — Calculate Yield & Annual Income',
      description: 'Compute dividend yield (percentage) and annual dividend income based on share price, annual dividend per share, and number of shares. Export results to PDF and view charts.',
      keywords: ["dividend calculator","dividend yield","annual dividend income","investment calculator","stocks","finance"],
    },
  },
  {
    id: 'capital-gains-tax-calculator',
    title: 'Capital Gains Tax Calculator',
    slug: 'capital-gains-tax-calculator',
    description: 'Calculate capital gains tax on investments.',
    category: 'finance',
    subcategory: 'taxes',
    authorId: 'tax-expert-carol',
    component: CapitalGainsTaxCalculator,
    content: CapitalGainsTaxCalculatorContent,
    meta: {
      title: 'Capital Gains Tax Calculator — Estimate Tax on Investment Gains',
      description: 'Estimate capital gains tax, after-tax proceeds, and annualized return. Enter purchase price, sale price, holding period, and tax rate for an instant calculation.',
      keywords: ["capital gains tax","tax calculator","investment tax","capital gains","financial calculator","tax estimator"],
    },
  },
  {
    id: 'property-tax-calculator',
    title: 'Property Tax Calculator',
    slug: 'property-tax-calculator',
    description: 'Calculate annual property tax based on assessed value and tax rate.',
    category: 'finance',
    subcategory: 'taxes',
    authorId: 'tax-expert-carol',
    component: PropertyTaxCalculator,
    content: PropertyTaxCalculatorContent,
    meta: {
      title: 'Property Tax Calculator — Estimate Annual Property Taxes',
      description: 'Estimate annual property taxes by entering the assessed property value and the local tax rate. Quick, accurate, and easy to use.',
      keywords: ["property tax calculator","annual property tax","assessed value","tax rate","real estate taxes","property tax estimate"],
    },
  },
  {
    id: 'vat-calculator',
    title: 'VAT Calculator',
    slug: 'vat-calculator',
    description: 'Calculate Value Added Tax (VAT) on purchases.',
    category: 'finance',
    subcategory: 'taxes',
    authorId: 'tax-expert-carol',
    component: VATCalculator,
    content: VATCalculatorContent,
    meta: {
      title: 'VAT Calculator — Calculate VAT Amount and Total',
      description: 'Quickly compute VAT (Value Added Tax) and total price including VAT. Enter an amount excluding VAT and a VAT rate to get the VAT amount and gross total.',
      keywords: ["VAT calculator","value added tax","VAT rate","tax calculator","net to gross","finance tools"],
    },
  },
  {
    id: 'tax-refund-calculator',
    title: 'Tax Refund Calculator',
    slug: 'tax-refund-calculator',
    description: 'Estimate your tax refund based on withholdings and deductions.',
    category: 'finance',
    subcategory: 'taxes',
    authorId: 'tax-expert-carol',
    component: TaxRefundCalculator,
    content: TaxRefundCalculatorContent,
    meta: {
      title: 'Tax Refund Calculator — Estimate Your Refund or Amount Owed',
      description: 'Estimate whether you\'ll receive a tax refund or owe money. Enter your income, withholdings, deductions, and filing status for an immediate estimate and charts.',
      keywords: ["tax refund","tax estimate","withholdings","tax deductions","tax calculator","refund estimator","income tax"],
    },
  },
  {
    id: 'tax-bracket-calculator',
    title: 'Tax Bracket Calculator',
    slug: 'tax-bracket-calculator',
    description: 'Determine your tax bracket and estimate federal tax owed based on annual income and filing status.',
    category: 'finance',
    subcategory: 'taxes',
    authorId: 'tax-expert-carol',
    component: TaxBracketCalculator,
    content: TaxBracketCalculatorContent,
    meta: {
      title: 'Tax Bracket Calculator — Estimate Your Federal Tax & Marginal Rate',
      description: 'Use the Tax Bracket Calculator to estimate your federal tax owed, marginal tax rate, and effective tax rate based on annual income and filing status. Auto-calculates as you type.',
      keywords: ["tax bracket","tax calculator","marginal tax rate","effective tax rate","income tax","federal tax calculator","filing status"],
    },
  },
  {
    id: 'expense-tracker-calculator',
    title: 'Expense Tracker Calculator',
    slug: 'expense-tracker-calculator',
    description: 'Track and categorize monthly expenses.',
    category: 'finance',
    subcategory: 'budgeting',
    authorId: 'mike-finance',
    component: ExpenseTrackerCalculator,
    content: ExpenseTrackerCalculatorContent,
    meta: {
      title: 'Expense Tracker Calculator — Monthly Budget & Expense Breakdown',
      description: 'Calculate your total monthly expenses and see a category breakdown with percentages and charts. Ideal for budgeting and financial planning.',
      keywords: ["expense tracker","budgeting","monthly expenses","budget calculator","personal finance","expense breakdown"],
    },
  },
  {
    id: 'cost-of-living-calculator',
    title: 'Cost of Living Calculator',
    slug: 'cost-of-living-calculator',
    description: 'Compare cost of living between different cities.',
    category: 'finance',
    subcategory: 'budgeting',
    authorId: 'mike-finance',
    component: CostOfLivingCalculator,
    content: CostOfLivingCalculatorContent,
    meta: {
      title: 'Cost of Living Calculator — Compare City Salaries & Expenses',
      description: 'Estimate the equivalent salary you would need in a target city to maintain your current standard of living. Compare city cost-of-living indices and download results as a PDF.',
      keywords: ["cost of living","salary comparison","city comparison","relocation calculator","budgeting","cost-of-living calculator"],
    },
  },
  {
    id: 'retirement-calculator',
    title: 'Retirement Calculator',
    slug: 'retirement-calculator',
    description: 'Calculate how much you need to save for retirement by projecting your current savings and monthly contributions with an expected annual return.',
    category: 'finance',
    subcategory: 'retirement',
    authorId: 'investment-pro',
    component: RetirementCalculator,
    content: RetirementCalculatorContent,
    meta: {
      title: 'Retirement Calculator — Project Your Retirement Savings',
      description: 'Estimate how much your current retirement savings and monthly contributions will grow by your target retirement age. Uses monthly compounding with an expected annual return.',
      keywords: ["retirement calculator","retirement savings","future value","compound interest","investment projection","retirement planning"],
    },
  },
  {
    id: 'social-security-calculator',
    title: 'Social Security Calculator',
    slug: 'social-security-calculator',
    description: 'Estimate your Social Security benefits.',
    category: 'finance',
    subcategory: 'retirement',
    authorId: 'investment-pro',
    component: SocialSecurityCalculator,
    content: SocialSecurityCalculatorContent,
    meta: {
      title: 'Social Security Calculator - Estimate Your Retirement Benefits',
      description: 'Use our Social Security Calculator to quickly estimate monthly and annual Social Security benefits based on your current age, planned retirement age, and average annual income.',
      keywords: ["social security calculator","retirement benefits","estimate social security","retirement planning","social security estimate"],
    },
  },
  {
    id: 'pension-calculator',
    title: 'Pension Calculator',
    slug: 'pension-calculator',
    description: 'Calculate pension benefits based on years of service and final average salary.',
    category: 'finance',
    subcategory: 'retirement',
    authorId: 'investment-pro',
    component: PensionCalculator,
    content: PensionCalculatorContent,
    meta: {
      title: 'Pension Calculator — Estimate Annual Pension & Replacement Rate',
      description: 'Estimate your annual pension benefit and replacement rate using years of service, final average salary, and pension multiplier. Instant results with charts and PDF export.',
      keywords: ["pension calculator","retirement calculator","annual pension","replacement rate","pension multiplier","years of service","final average salary"],
    },
  },
  {
    id: 'retirement-savings-goal-calculator',
    title: 'Retirement Savings Goal Calculator',
    slug: 'retirement-savings-goal-calculator',
    description: 'Calculate how much you need to save monthly to reach your retirement goal.',
    category: 'finance',
    subcategory: 'retirement',
    authorId: 'investment-pro',
    component: RetirementSavingsGoalCalculator,
    content: RetirementSavingsGoalCalculatorContent,
    meta: {
      title: 'Retirement Savings Goal Calculator – Monthly Savings Needed',
      description: 'Estimate the monthly savings required to reach your retirement goal. Enter your current savings, years until retirement, and expected annual return to get instant results and charts.',
      keywords: ["retirement calculator","monthly savings","retirement goal","savings goal","investment return","financial planning"],
    },
  },
  {
    id: 'life-insurance-calculator',
    title: 'Life Insurance Calculator',
    slug: 'life-insurance-calculator',
    description: 'Calculate how much life insurance coverage you need.',
    category: 'finance',
    subcategory: 'insurance',
    authorId: 'mike-finance',
    component: LifeInsuranceCalculator,
    content: LifeInsuranceCalculatorContent,
    meta: {
      title: 'Life Insurance Calculator — Estimate Coverage Needed',
      description: 'Quickly estimate the life insurance coverage you should consider. Calculate income replacement, add debts, subtract savings, and get a recommended coverage amount.',
      keywords: ["life insurance calculator","insurance coverage calculator","how much life insurance do i need","life insurance estimate","coverage calculator"],
    },
  },
  {
    id: 'health-insurance-calculator',
    title: 'Health Insurance Calculator',
    slug: 'health-insurance-calculator',
    description: 'Compare health insurance plan costs and coverage.',
    category: 'finance',
    subcategory: 'insurance',
    authorId: 'mike-finance',
    component: HealthInsuranceCalculator,
    content: HealthInsuranceCalculatorContent,
    meta: {
      title: 'Health Insurance Calculator - Compare Plan Costs & Coverage',
      description: 'Estimate annual costs with a health insurance plan vs. without. Enter premium, deductible, out-of-pocket max, and expected medical costs to compare total costs and savings.',
      keywords: ["health insurance calculator","insurance cost calculator","premium calculator","deductible calculator","out-of-pocket maximum","healthcare cost comparison"],
    },
  },
  {
    id: 'car-insurance-calculator',
    title: 'Car Insurance Calculator',
    slug: 'car-insurance-calculator',
    description: 'Estimate car insurance costs based on vehicle and driver information.',
    category: 'finance',
    subcategory: 'insurance',
    authorId: 'mike-finance',
    component: CarInsuranceCalculator,
    content: CarInsuranceCalculatorContent,
    meta: {
      title: 'Car Insurance Calculator - Estimate Your Annual Premium',
      description: 'Use the Car Insurance Calculator to estimate annual insurance premiums based on vehicle value, driver age, driving record, and coverage level. Get instant, transparent results and a premium breakdown.',
      keywords: ["car insurance calculator","auto insurance estimate","insurance premium calculator","vehicle insurance cost","insurance quote estimate"],
    },
  },
  {
    id: 'exchange-rate-calculator',
    title: 'Exchange Rate Calculator',
    slug: 'exchange-rate-calculator',
    description: 'Calculate exchange rates and conversion fees.',
    category: 'finance',
    subcategory: 'currency',
    authorId: 'mike-finance',
    component: ExchangeRateCalculator,
    content: ExchangeRateCalculatorContent,
    meta: {
      title: 'Exchange Rate Calculator — Convert USD, EUR, GBP | Finance Tools',
      description: 'Convert currencies between USD, EUR, and GBP. Use default market rates or provide a custom exchange rate to calculate converted amounts and implied fees.',
      keywords: ["exchange rate","currency converter","USD to EUR","EUR to GBP","currency conversion","conversion fee","forex calculator"],
    },
  },
  {
    id: 'body-type-calculator',
    title: 'Body Type Calculator',
    slug: 'body-type-calculator',
    description: 'Determine your body type (Ectomorph, Mesomorph, Endomorph) from wrist circumference and height.',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: BodyTypeCalculator,
    content: BodyTypeCalculatorContent,
    meta: {
      title: 'Body Type Calculator - Ectomorph, Mesomorph, Endomorph',
      description: 'Estimate your body type by calculating a frame index using wrist circumference and height. Provides instant classification and visualization to guide fitness planning.',
      keywords: ["body type","ectomorph","mesomorph","endomorph","frame index","wrist circumference","fitness","health calculator"],
    },
  },
  {
    id: 'vo2-max-calculator',
    title: 'VO2 Max Calculator',
    slug: 'vo2-max-calculator',
    description: 'Estimate your VO2 max (maximum oxygen consumption) from resting and maximum heart rates and body weight.',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: VO2MaxCalculator,
    content: VO2MaxCalculatorContent,
    meta: {
      title: 'VO2 Max Calculator — Estimate Your Aerobic Fitness',
      description: 'Quickly estimate your VO2 max (ml/kg/min and L/min) using resting heart rate, maximum heart rate, age, and weight. Includes age-normative comparison and PDF export.',
      keywords: ["VO2 max","VO2 calculator","aerobic fitness","heart rate","fitness calculator","ml/kg/min","L/min"],
    },
  },
  {
    id: 'training-zone-calculator',
    title: 'Training Zone Calculator',
    slug: 'training-zone-calculator',
    description: 'Calculate your heart rate training zones for optimal workouts using the Karvonen method (accounts for resting heart rate).',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: TrainingZoneCalculator,
    content: TrainingZoneCalculatorContent,
    meta: {
      title: 'Training Zone Calculator — Heart Rate Zones (Fat Burn, Cardio, Peak)',
      description: 'Compute personalized heart rate training zones (fat burn, cardio, peak) with the Karvonen method. Enter age and resting heart rate to get target bpm ranges and charts.',
      keywords: ["training zone","heart rate zones","Karvonen","fat burn","cardio zone","peak zone","HRR","fitness calculator"],
    },
  },
  {
    id: 'one-rep-max-calculator',
    title: 'One-Rep Max Calculator',
    slug: 'one-rep-max-calculator',
    description: 'Calculate your one-rep maximum (1RM) for strength training.',
    category: 'health',
    subcategory: 'fitness',
    authorId: 'dr-fitness',
    component: OneRepMaxCalculator,
    content: OneRepMaxCalculatorContent,
    meta: {
      title: 'One-Rep Max (1RM) Calculator — Estimate Your Strength',
      description: 'Estimate your one-rep maximum (1RM) using common formulas (Epley, Brzycki, Lombardi). Ideal for strength training programming and tracking progress.',
      keywords: ["one rep max","1RM","Epley","Brzycki","Lombardi","strength calculator","fitness","training"],
    },
  },
  {
    id: 'carb-calculator',
    title: 'Carb Calculator',
    slug: 'carb-calculator',
    description: 'Calculate daily carbohydrate needs based on goals and activity level.',
    category: 'health',
    subcategory: 'nutrition',
    authorId: 'nutritionist-ben',
    component: CarbCalculator,
    content: CarbCalculatorContent,
    meta: {
      title: 'Carb Calculator — Daily Carbohydrate Needs',
      description: 'Estimate your daily carbohydrate needs based on weight, activity level, and goals (lose, maintain, gain). Provides grams per kilogram and total grams per day.',
      keywords: ["carbohydrate calculator","carb needs","nutrition calculator","daily carbs","carb per kg","weight management","sports nutrition"],
    },
  },
  {
    id: 'fat-calculator',
    title: 'Fat Calculator',
    slug: 'fat-calculator',
    description: 'Calculate daily fat intake needs.',
    category: 'health',
    subcategory: 'nutrition',
    authorId: 'nutritionist-ben',
    component: FatCalculator,
    content: FatCalculatorContent,
    meta: {
      title: 'Fat Calculator — Daily Fat Intake (grams & calories)',
      description: 'Calculate your daily fat needs based on total calorie intake and the percentage of calories from fat. Results shown in grams and kcal with charts and PDF export.',
      keywords: ["fat calculator","daily fat intake","fat grams","fat calories","macronutrients","nutrition","calorie percentage"],
    },
  },
  {
    id: 'fiber-calculator',
    title: 'Fiber Calculator',
    slug: 'fiber-calculator',
    description: 'Calculate daily fiber needs based on age and gender.',
    category: 'health',
    subcategory: 'nutrition',
    authorId: 'nutritionist-ben',
    component: FiberCalculator,
    content: FiberCalculatorContent,
    meta: {
      title: 'Daily Fiber Needs Calculator — Nutrition Tools',
      description: 'Estimate your recommended daily fiber intake using age, gender, and daily calorie intake. Uses IOM guideline (14g/1000 kcal) combined with age/gender references.',
      keywords: ["fiber calculator","daily fiber needs","nutrition","fiber intake","health","calorie-based fiber"],
    },
  },
  {
    id: 'meal-prep-calculator',
    title: 'Meal Prep Calculator',
    slug: 'meal-prep-calculator',
    description: 'Calculate ingredients needed for meal prep based on servings.',
    category: 'health',
    subcategory: 'nutrition',
    authorId: 'nutritionist-ben',
    component: MealPrepCalculator,
    content: MealPrepCalculatorContent,
    meta: {
      title: 'Meal Prep Calculator — Nutrition & Macro Planning',
      description: 'Quickly calculate total protein, carbs, fat, and estimated calories for multiple servings. Perfect for meal prep, batch cooking, and macro tracking.',
      keywords: ["meal prep calculator","macro calculator","nutrition","protein carbs fat","calorie estimator","batch cooking"],
    },
  },
  {
    id: 'portion-size-calculator',
    title: 'Portion Size Calculator',
    slug: 'portion-size-calculator',
    description: 'Calculate appropriate portion sizes based on your goals.',
    category: 'health',
    subcategory: 'nutrition',
    authorId: 'nutritionist-ben',
    component: PortionSizeCalculator,
    content: PortionSizeCalculatorContent,
    meta: {
      title: 'Portion Size Calculator — Estimate grams per meal for protein, carbs, and vegetables',
      description: 'Estimate recommended portion sizes (grams per meal) based on your daily calorie goal and number of meals. Supports protein, carbohydrates, and vegetables with instant calculation and downloadable PDF.',
      keywords: ["portion size","portion calculator","nutrition","meal planning","protein portions","carbohydrate portions","vegetable portions","calorie to grams"],
    },
  },
  {
    id: 'blood-pressure-calculator',
    title: 'Blood Pressure Calculator',
    slug: 'blood-pressure-calculator',
    description: 'Assess blood pressure readings and categories.',
    category: 'health',
    subcategory: 'medical',
    authorId: 'dr-sarah-smith',
    component: BloodPressureCalculator,
    content: BloodPressureCalculatorContent,
    meta: {
      title: 'Blood Pressure Calculator — Assess Systolic & Diastolic Readings',
      description: 'Enter systolic and diastolic blood pressure readings to determine the category (Normal, Elevated, Hypertension Stage 1/2, Hypertensive Crisis) and calculate pulse pressure. Includes charting and PDF export.',
      keywords: ["blood pressure","blood pressure calculator","systolic","diastolic","hypertension","pulse pressure","mmHg","health calculator"],
    },
  },
  {
    id: 'sleep-calculator',
    title: 'Sleep Calculator',
    slug: 'sleep-calculator',
    description: 'Calculate optimal sleep times based on sleep cycles.',
    category: 'health',
    subcategory: 'medical',
    authorId: 'dr-sarah-smith',
    component: SleepCalculator,
    content: SleepCalculatorContent,
    meta: {
      title: 'Sleep Calculator — Calculate Optimal Bedtime by Sleep Cycles',
      description: 'Find the best bedtime by specifying your wake time and desired number of 90-minute sleep cycles. Helps you plan sleep to wake up feeling refreshed.',
      keywords: ["sleep calculator","sleep cycles","bedtime calculator","optimal sleep","sleep health"],
    },
  },
  {
    id: 'vitamin-calculator',
    title: 'Vitamin & Mineral Calculator',
    slug: 'vitamin-calculator',
    description: 'Calculate daily vitamin and mineral needs.',
    category: 'health',
    subcategory: 'medical',
    authorId: 'dr-sarah-smith',
    component: VitaminCalculator,
    content: VitaminCalculatorContent,
    meta: {
      title: 'Vitamin & Mineral Daily Needs Calculator',
      description: 'Estimate recommended daily intakes for Vitamin D, Vitamin C, and Calcium based on age and gender. Includes recommended values and tolerable upper intake levels.',
      keywords: ["vitamin calculator","vitamin d","vitamin c","calcium","daily intake","nutrition","health calculator"],
    },
  },
  {
    id: 'drug-dosage-calculator',
    title: 'Drug Dosage Calculator',
    slug: 'drug-dosage-calculator',
    description: 'Calculate medication dosage based on weight and concentration. (Medical disclaimer required)',
    category: 'health',
    subcategory: 'medical',
    authorId: 'dr-sarah-smith',
    component: DrugDosageCalculator,
    content: DrugDosageCalculatorContent,
    meta: {
      title: 'Drug Dosage Calculator – Weight-Based Medication Dosing (mg & mL)',
      description: 'Estimate medication dose and administration volume using patient weight (kg), dose per kg (mg/kg), and medication concentration (mg/mL). Includes medical disclaimer and visualization.',
      keywords: ["drug dosage calculator","dose per kg","medication concentration","mg to mL","weight based dosing","medical calculator"],
    },
  },
  {
    id: 'ovulation-calculator',
    title: 'Ovulation Calculator',
    slug: 'ovulation-calculator',
    description: 'Calculate ovulation dates and fertile window.',
    category: 'health',
    subcategory: 'pregnancy',
    authorId: 'dr-sarah-smith',
    component: OvulationCalculator,
    content: OvulationCalculatorContent,
    meta: {
      title: 'Ovulation Calculator — Estimate Ovulation & Fertile Window',
      description: 'Estimate your ovulation date, fertile window, and next period using the first day of your last period and your average cycle length. Helpful for family planning and tracking.',
      keywords: ["ovulation calculator","fertile window","ovulation date","menstrual cycle","pregnancy","cycle tracker","fertility"],
    },
  },
  {
    id: 'pregnancy-week-calculator',
    title: 'Pregnancy Week Calculator',
    slug: 'pregnancy-week-calculator',
    description: 'Calculate current pregnancy week and trimester.',
    category: 'health',
    subcategory: 'pregnancy',
    authorId: 'dr-sarah-smith',
    component: PregnancyWeekCalculator,
    content: PregnancyWeekCalculatorContent,
    meta: {
      title: 'Pregnancy Week Calculator — Determine Gestational Age & Trimester',
      description: 'Calculate your current pregnancy week and trimester using the first day of your last period (LMP). Get gestational age in weeks and days, trimester, and estimated due date.',
      keywords: ["pregnancy week calculator","gestational age","trimester calculator","due date estimator","pregnancy calculator","LMP calculator"],
    },
  },
  {
    id: 'baby-growth-calculator',
    title: 'Baby Growth Calculator',
    slug: 'baby-growth-calculator',
    description: 'Track baby\'s growth during pregnancy.',
    category: 'health',
    subcategory: 'pregnancy',
    authorId: 'dr-sarah-smith',
    component: BabyGrowthCalculator,
    content: BabyGrowthCalculatorContent,
    meta: {
      title: 'Baby Growth Calculator — Track Fetal Weight by Weeks Pregnant',
      description: 'Estimate expected fetal weight for a given week of pregnancy and compare with observed weight. Get percent difference and a quick classification (Below average, Average, Above average).',
      keywords: ["baby growth","fetal weight","pregnancy","weeks pregnant","fetal growth calculator","pregnancy growth"],
    },
  },
  {
    id: 'pregnancy-weight-gain-calculator',
    title: 'Pregnancy Weight Gain Calculator',
    slug: 'pregnancy-weight-gain-calculator',
    description: 'Calculate recommended weight gain during pregnancy based on pre-pregnancy BMI and gestational age.',
    category: 'health',
    subcategory: 'pregnancy',
    authorId: 'dr-sarah-smith',
    component: PregnancyWeightGainCalculator,
    content: PregnancyWeightGainCalculatorContent,
    meta: {
      title: 'Pregnancy Weight Gain Calculator — Recommended Weight Gain During Pregnancy',
      description: 'Estimate your pregnancy weight gain based on pre-pregnancy BMI, current weight, and weeks pregnant. See recommended ranges and track progress.',
      keywords: ["pregnancy weight gain","pregnancy calculator","gestational weight","pre-pregnancy BMI","weight gain recommendations","IOM pregnancy weight"],
    },
  },
  {
    id: 'breastfeeding-calculator',
    title: 'Breastfeeding Calculator',
    slug: 'breastfeeding-calculator',
    description: 'Calculate feeding schedule and milk intake for breastfeeding based on baby age, weight, and feedings per day.',
    category: 'health',
    subcategory: 'pregnancy',
    authorId: 'dr-sarah-smith',
    component: BreastfeedingCalculator,
    content: BreastfeedingCalculatorContent,
    meta: {
      title: 'Breastfeeding Calculator — Estimate Daily Milk Intake & Per Feeding Volume',
      description: 'Use the Breastfeeding Calculator to estimate your baby\'s daily breast milk intake and average volume per feeding based on age, weight, and feedings per day. Helpful for planning and monitoring feeding patterns.',
      keywords: ["breastfeeding calculator","milk intake","feeding schedule","baby feeding calculator","infant intake","breast milk estimate"],
    },
  },
  {
    id: 'prime-number-calculator',
    title: 'Prime Number Calculator',
    slug: 'prime-number-calculator',
    description: 'Check if a number is prime and find prime factors.',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: PrimeNumberCalculator,
    content: PrimeNumberCalculatorContent,
    meta: {
      title: 'Prime Number Calculator — Check Primality & Find Factors',
      description: 'Determine whether an integer is prime and compute its prime factors instantly. Includes visual analysis and PDF export.',
      keywords: ["prime number","prime factors","prime checker","factorization","math calculator","number theory"],
    },
  },
  {
    id: 'scientific-calculator',
    title: 'Scientific Calculator',
    slug: 'scientific-calculator',
    description: 'Advanced scientific calculator with trigonometric and logarithmic functions.',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: ScientificCalculator,
    content: ScientificCalculatorContent,
    meta: {
      title: 'Scientific Calculator — Advanced Trigonometric & Logarithmic Evaluator',
      description: 'Use the Scientific Calculator to evaluate trigonometric, logarithmic, exponential expressions and plot functions using x. Supports degrees and radians.',
      keywords: ["scientific calculator","trigonometry","logarithm","sin","cos","tan","plot","math","calculator"],
    },
  },
  {
    id: 'number-base-converter',
    title: 'Number Base Converter',
    slug: 'number-base-converter',
    description: 'Convert numbers between binary, decimal, hexadecimal, and octal.',
    category: 'math',
    subcategory: 'basic',
    authorId: 'prof-math',
    component: NumberBaseConverter,
    content: NumberBaseConverterContent,
    meta: {
      title: 'Number Base Converter — Convert between binary, octal, decimal, hexadecimal',
      description: 'Convert integer numbers between binary (base 2), octal (base 8), decimal (base 10), and hexadecimal (base 16). Supports negative integers and shows digit-length comparison charts.',
      keywords: ["number base converter","binary to decimal","hex to decimal","decimal to hex","octal converter","base conversion","binary converter","hex converter","convert bases"],
    },
  },
  {
    id: 'system-of-equations-solver',
    title: 'System of Equations Solver',
    slug: 'system-of-equations-solver',
    description: 'Solve systems of linear equations.',
    category: 'math',
    subcategory: 'algebra',
    authorId: 'prof-math',
    component: SystemOfEquationsSolver,
    content: SystemOfEquationsSolverContent,
    meta: {
      title: 'System of Equations Solver — Algebra Calculator',
      description: 'Solve 2x2 systems of linear equations using Cramer\'s Rule. Enter coefficients for a1, b1, c1 and a2, b2, c2 to compute x and y. Includes charting and PDF export.',
      keywords: ["system of equations","linear equations","Cramer's Rule","2x2 solver","algebra calculator","solve equations"],
    },
  },
  {
    id: 'polynomial-calculator',
    title: 'Polynomial Calculator',
    slug: 'polynomial-calculator',
    description: 'Solve polynomial equations and find roots.',
    category: 'math',
    subcategory: 'algebra',
    authorId: 'prof-math',
    component: PolynomialCalculator,
    content: PolynomialCalculatorContent,
    meta: {
      title: 'Polynomial Calculator — Find Roots of Polynomials',
      description: 'Compute real and complex roots of polynomials. Enter the degree and coefficients (highest degree first) to get roots, magnitudes, charts, and a downloadable PDF report.',
      keywords: ["polynomial calculator","find roots","complex roots","algebra","polynomial roots","math tools"],
    },
  },
  {
    id: 'matrix-calculator',
    title: 'Matrix Calculator',
    slug: 'matrix-calculator',
    description: 'Perform matrix operations (addition, multiplication, etc.).',
    category: 'math',
    subcategory: 'algebra',
    authorId: 'prof-math',
    component: MatrixCalculator,
    content: MatrixCalculatorContent,
    meta: {
      title: 'Matrix Calculator — Add & Multiply Matrices Online',
      description: 'Matrix Calculator: perform addition and multiplication of matrices. Enter matrices as rows separated by \';\' and values by \',\' to compute results instantly and download a PDF.',
      keywords: ["matrix calculator","matrix addition","matrix multiplication","linear algebra","matrix operations","online calculator"],
    },
  },
  {
    id: 'determinant-calculator',
    title: 'Determinant Calculator',
    slug: 'determinant-calculator',
    description: 'Calculate the determinant of a matrix.',
    category: 'math',
    subcategory: 'algebra',
    authorId: 'prof-math',
    component: DeterminantCalculator,
    content: DeterminantCalculatorContent,
    meta: {
      title: 'Determinant Calculator — Compute Determinants of Square Matrices',
      description: 'Online Determinant Calculator: enter a square matrix (rows separated by \';\' and values by \',\') to compute its determinant. Auto-calculates and supports PDF export and charts.',
      keywords: ["determinant","matrix determinant","square matrix","linear algebra","math calculator","matrix calculator","determinant calculator"],
    },
  },
  {
    id: 'inverse-matrix-calculator',
    title: 'Inverse Matrix Calculator',
    slug: 'inverse-matrix-calculator',
    description: 'Calculate the inverse of a square matrix. Input rows separated by \';\' and values separated by \',\'.',
    category: 'math',
    subcategory: 'algebra',
    authorId: 'prof-math',
    component: InverseMatrixCalculator,
    content: InverseMatrixCalculatorContent,
    meta: {
      title: 'Inverse Matrix Calculator — Algebra Tools',
      description: 'Compute the inverse of square matrices instantly. Supports input like \'1,2;3,4\'. Shows determinant, inverse matrix, and an entry magnitude chart. Exports results to PDF.',
      keywords: ["matrix inverse","invert matrix","linear algebra","determinant","matrix calculator","Gauss-Jordan"],
    },
  },
  {
    id: 'slope-calculator',
    title: 'Slope Calculator',
    slug: 'slope-calculator',
    description: 'Calculate the slope of a line from two points.',
    category: 'math',
    subcategory: 'algebra',
    authorId: 'prof-math',
    component: SlopeCalculator,
    content: SlopeCalculatorContent,
    meta: {
      title: 'Slope Calculator — Calculate slope from two points',
      description: 'Compute the slope (m) of a line given two points (x1, y1) and (x2, y2). Handles vertical lines and provides a chart visualization.',
      keywords: ["slope calculator","calculate slope","slope from two points","algebra calculator","math tools"],
    },
  },
  {
    id: 'midpoint-calculator',
    title: 'Midpoint Calculator',
    slug: 'midpoint-calculator',
    description: 'Calculate the midpoint between two points.',
    category: 'math',
    subcategory: 'algebra',
    authorId: 'prof-math',
    component: MidpointCalculator,
    content: MidpointCalculatorContent,
    meta: {
      title: 'Midpoint Calculator — Algebra Tools',
      description: 'Find the midpoint between two 2D points quickly. Enter coordinates for Point 1 and Point 2 to get the midpoint and visual chart. Includes PDF export.',
      keywords: ["midpoint","midpoint calculator","geometry","algebra","coordinate geometry","2D midpoint","point midpoint"],
    },
  },
  {
    id: 'area-calculator',
    title: 'Area Calculator',
    slug: 'area-calculator',
    description: 'Calculate area of various shapes (circle, rectangle, triangle) with live updates, charts, and PDF export.',
    category: 'math',
    subcategory: 'geometry',
    authorId: 'prof-geometry',
    component: AreaCalculator,
    content: AreaCalculatorContent,
    meta: {
      title: 'Area Calculator — Circle, Rectangle, Triangle | Geometry Tools',
      description: 'Compute the area of circles, rectangles, and triangles. Live calculations, visual charts, and PDF export. Enter dimensions and get instant results in square units.',
      keywords: ["area calculator","circle area","rectangle area","triangle area","geometry calculator","math tools"],
    },
  },
  {
    id: 'volume-calculator',
    title: 'Volume Calculator',
    slug: 'volume-calculator',
    description: 'Calculate volume of 3D shapes (sphere, cylinder, cone) quickly and accurately. Auto-calculates as you enter radius and height, includes charts and PDF export.',
    category: 'math',
    subcategory: 'geometry',
    authorId: 'prof-geometry',
    component: VolumeCalculator,
    content: VolumeCalculatorContent,
    meta: {
      title: 'Volume Calculator — Sphere, Cylinder, Cone | Geometry Tools',
      description: 'Compute volumes for spheres, cylinders, and cones. Enter radius and height to get results instantly. Includes comparison charts and PDF export.',
      keywords: ["volume calculator","sphere volume","cylinder volume","cone volume","geometry calculator","3D shapes"],
    },
  },
  {
    id: 'perimeter-calculator',
    title: 'Perimeter Calculator',
    slug: 'perimeter-calculator',
    description: 'Calculate perimeter of various shapes.',
    category: 'math',
    subcategory: 'geometry',
    authorId: 'prof-geometry',
    component: PerimeterCalculator,
    content: PerimeterCalculatorContent,
    meta: {
      title: 'Perimeter Calculator — Rectangle, Square & Triangle Perimeters',
      description: 'Instantly calculate the perimeter of rectangles, squares, and triangles. Includes charts and PDF export for results.',
      keywords: ["perimeter calculator","rectangle perimeter","square perimeter","triangle perimeter","geometry calculator","math tools"],
    },
  },
  {
    id: 'circumference-calculator',
    title: 'Circumference Calculator',
    slug: 'circumference-calculator',
    description: 'Calculate the circumference of a circle from its radius. Supports multiple units and instant calculation.',
    category: 'math',
    subcategory: 'geometry',
    authorId: 'prof-geometry',
    component: CircumferenceCalculator,
    content: CircumferenceCalculatorContent,
    meta: {
      title: 'Circumference Calculator — Geometry Tools',
      description: 'Compute the circumference of a circle using C = 2πr. Enter radius, choose units, and get instant results with charting and PDF export.',
      keywords: ["circumference","circle","radius","geometry","calculator","circumference calculator","math tools"],
    },
  },
  {
    id: 'rectangle-calculator',
    title: 'Rectangle Calculator',
    slug: 'rectangle-calculator',
    description: 'Calculate area, perimeter, and diagonal of a rectangle.',
    category: 'math',
    subcategory: 'geometry',
    authorId: 'prof-geometry',
    component: RectangleCalculator,
    content: RectangleCalculatorContent,
    meta: {
      title: 'Rectangle Calculator — Area, Perimeter & Diagonal',
      description: 'Quickly compute the area, perimeter, and diagonal of a rectangle. Enter length and width to get automatic results and visual comparisons.',
      keywords: ["rectangle calculator","area calculator","perimeter calculator","diagonal calculator","geometry calculator","math","rectangle"],
    },
  },
  {
    id: 'cylinder-calculator',
    title: 'Cylinder Calculator',
    slug: 'cylinder-calculator',
    description: 'Calculate volume, surface area, and lateral area of a cylinder.',
    category: 'math',
    subcategory: 'geometry',
    authorId: 'prof-geometry',
    component: CylinderCalculator,
    content: CylinderCalculatorContent,
    meta: {
      title: 'Cylinder Calculator — Volume & Surface Area | Geometry Tools',
      description: 'Compute the volume, lateral area, and total surface area of a cylinder. Enter radius and height to get instant results and export a PDF.',
      keywords: ["cylinder calculator","volume of cylinder","surface area cylinder","lateral area cylinder","geometry calculator","cylinder volume calculator"],
    },
  },
  {
    id: 'quartile-calculator',
    title: 'Quartile Calculator',
    slug: 'quartile-calculator',
    description: 'Calculate quartiles (Q1, Q2, Q3) of a dataset.',
    category: 'statistics',
    subcategory: 'descriptive',
    authorId: 'prof-data',
    component: QuartileCalculator,
    content: QuartileCalculatorContent,
    meta: {
      title: 'Quartile Calculator — Calculate Q1, Q2, Q3 of a Dataset',
      description: 'Compute quartiles for a list of numbers. Enter a comma-separated list and get Q1, the median (Q2), Q3, count, and a comparison chart. Download results as a PDF.',
      keywords: ["quartile","quartiles","Q1","Q2","median","Q3","quartile calculator","statistics","descriptive statistics"],
    },
  },
  {
    id: 'outlier-calculator',
    title: 'Outlier Calculator',
    slug: 'outlier-calculator',
    description: 'Identify outliers in a dataset using the Interquartile Range (IQR) method.',
    category: 'statistics',
    subcategory: 'descriptive',
    authorId: 'prof-data',
    component: OutlierCalculator,
    content: OutlierCalculatorContent,
    meta: {
      title: 'Outlier Calculator — IQR-based Outlier Detection',
      description: 'Detect outliers in your dataset using the robust Interquartile Range (IQR) method. Paste comma-separated numbers to compute Q1, median, Q3, IQR, fences and list outliers.',
      keywords: ["outlier detection","IQR","interquartile range","statistics","descriptive statistics","outliers","data cleaning"],
    },
  },
  {
    id: 'binomial-distribution-calculator',
    title: 'Binomial Distribution Calculator',
    slug: 'binomial-distribution-calculator',
    description: 'Calculate binomial distribution probabilities (P(X = k) and cumulative probabilities) for given n and p.',
    category: 'statistics',
    subcategory: 'probability',
    authorId: 'prof-data',
    component: BinomialDistributionCalculator,
    content: BinomialDistributionCalculatorContent,
    meta: {
      title: 'Binomial Distribution Calculator — Statistics Tools',
      description: 'Compute P(X = k) and cumulative binomial probabilities for a binomial(n, p) distribution. Interactive PMF chart and PDF export.',
      keywords: ["binomial distribution","binomial calculator","probability","pmf","cumulative probability","statistics","probability calculator"],
    },
  },
  {
    id: 'normal-distribution-calculator',
    title: 'Normal Distribution Calculator',
    slug: 'normal-distribution-calculator',
    description: 'Calculate probabilities for normal distribution.',
    category: 'statistics',
    subcategory: 'probability',
    authorId: 'prof-data',
    component: NormalDistributionCalculator,
    content: NormalDistributionCalculatorContent,
    meta: {
      title: 'Normal Distribution Calculator — PDF & Chart | Statistics Tools',
      description: 'Compute PDF and CDF for a normal (Gaussian) distribution given mean (μ), standard deviation (σ), and value (x). Includes z-score, chart visualization, and PDF export.',
      keywords: ["normal distribution","Gaussian","pdf","cdf","z-score","probability","statistics","normal distribution calculator"],
    },
  },
  {
    id: 'poisson-distribution-calculator',
    title: 'Poisson Distribution Calculator',
    slug: 'poisson-distribution-calculator',
    description: 'Calculate Poisson distribution probabilities.',
    category: 'statistics',
    subcategory: 'probability',
    authorId: 'prof-data',
    component: PoissonDistributionCalculator,
    content: PoissonDistributionCalculatorContent,
    meta: {
      title: 'Poisson Distribution Calculator – statistics · probability',
      description: 'Compute Poisson probabilities P(X = k), P(X ≤ k), or P(X ≥ k) given the average rate λ. Includes automatic calculation, charts, and PDF export.',
      keywords: ["Poisson","Poisson distribution","PMF","CDF","probability","statistics","lambda","poisson calculator"],
    },
  },
  {
    id: 'linear-regression-calculator',
    title: 'Linear Regression Calculator',
    slug: 'linear-regression-calculator',
    description: 'Calculate linear regression line and correlation coefficient.',
    category: 'statistics',
    subcategory: 'regression',
    authorId: 'analyst-alex',
    component: LinearRegressionCalculator,
    content: LinearRegressionCalculatorContent,
    meta: {
      title: 'Linear Regression Calculator — Statistics Tools',
      description: 'Compute the linear regression line (slope & intercept), Pearson correlation coefficient, and R² for paired data. Enter comma-separated X and Y values to get instant results and charts.',
      keywords: ["linear regression","slope","intercept","correlation","Pearson r","R squared","statistics","regression"],
    },
  },
  {
    id: 'correlation-calculator',
    title: 'Correlation Calculator',
    slug: 'correlation-calculator',
    description: 'Calculate correlation coefficient between two variables.',
    category: 'statistics',
    subcategory: 'regression',
    authorId: 'analyst-alex',
    component: CorrelationCalculator,
    content: CorrelationCalculatorContent,
    meta: {
      title: 'Correlation Calculator — Pearson r for two variables',
      description: 'Compute the Pearson correlation coefficient (r) and r² between two variables. Enter comma-separated X and Y values of equal length to get instant results and a scatter plot visualization.',
      keywords: ["correlation","pearson r","correlation coefficient","r squared","statistics","regression","scatter plot","data analysis"],
    },
  },
  {
    id: 'r-squared-calculator',
    title: 'R-squared Calculator',
    slug: 'r-squared-calculator',
    description: 'Calculate R-squared (coefficient of determination) for a simple linear regression given comma-separated X and Y values.',
    category: 'statistics',
    subcategory: 'regression',
    authorId: 'analyst-alex',
    component: RSquaredCalculator,
    content: RSquaredCalculatorContent,
    meta: {
      title: 'R-squared Calculator — Simple Linear Regression Tool',
      description: 'Compute slope, intercept, and R-squared (coefficient of determination) for a simple linear regression. Enter comma-separated X and Y values to get instant results and charts.',
      keywords: ["r-squared","coefficient of determination","linear regression","statistics calculator","regression analysis","slope intercept","r2 calculator"],
    },
  },
  {
    id: 't-test-calculator',
    title: 'T-Test Calculator',
    slug: 't-test-calculator',
    description: 'Perform t-test for comparing means.',
    category: 'statistics',
    subcategory: 'testing',
    authorId: 'analyst-alex',
    component: TTestCalculator,
    content: TTestCalculatorContent,
    meta: {
      title: 'T-Test Calculator — Compare Means with Welch\'s t-test',
      description: 'Online T-Test Calculator to compare means of two independent samples using Welch\'s t-test. Computes t statistic, degrees of freedom, and two-tailed p-value with charts and PDF export.',
      keywords: ["t-test","Welch t-test","compare means","statistics","p-value","t statistic","hypothesis testing"],
    },
  },
  {
    id: 'chi-square-calculator',
    title: 'Chi-Square Test for Independence',
    slug: 'chi-square-calculator',
    description: 'Perform chi-square test for independence.',
    category: 'statistics',
    subcategory: 'testing',
    authorId: 'analyst-alex',
    component: ChiSquareCalculator,
    content: ChiSquareCalculatorContent,
    meta: {
      title: 'Chi-Square Test for Independence Calculator',
      description: 'Calculate chi-square statistic, degrees of freedom, and p-value for contingency tables. Enter observed frequencies and optional expected frequencies.',
      keywords: ["chi-square","chi square","chi-square test","contingency table","statistics","independence test","p-value","degrees of freedom"],
    },
  },
  {
    id: 'anova-calculator',
    title: 'ANOVA Calculator',
    slug: 'anova-calculator',
    description: 'Perform Analysis of Variance (ANOVA) test.',
    category: 'statistics',
    subcategory: 'testing',
    authorId: 'analyst-alex',
    component: ANOVACalculator,
    content: ANOVACalculatorContent,
    meta: {
      title: 'ANOVA Calculator — One-way Analysis of Variance',
      description: 'Compute one-way ANOVA (SSB, SSW, MSB, MSW, F statistic and p-value). Enter comma-separated observations for each group and get instant results.',
      keywords: ["ANOVA","Analysis of Variance","F-test","statistical test","one-way ANOVA","statistics calculator","anova calculator"],
    },
  },
  {
    id: 'sample-size-calculator',
    title: 'Sample Size Calculator',
    slug: 'sample-size-calculator',
    description: 'Calculate required sample size for statistical tests using confidence level, margin of error, and population size.',
    category: 'statistics',
    subcategory: 'testing',
    authorId: 'analyst-alex',
    component: SampleSizeCalculator,
    content: SampleSizeCalculatorContent,
    meta: {
      title: 'Sample Size Calculator — Determine Required Sample for Surveys & Tests',
      description: 'Quickly calculate the required sample size for surveys and statistical tests. Enter confidence level, margin of error, and population size to get an immediate recommended sample size with optional charts and PDF export.',
      keywords: ["sample size","sample size calculator","statistics","margin of error","confidence level","population size","survey sample"],
    },
  },
  {
    id: 'confidence-interval-calculator',
    title: 'Confidence Interval Calculator',
    slug: 'confidence-interval-calculator',
    description: 'Calculate confidence interval for a population mean.',
    category: 'statistics',
    subcategory: 'testing',
    authorId: 'analyst-alex',
    component: ConfidenceIntervalCalculator,
    content: ConfidenceIntervalCalculatorContent,
    meta: {
      title: 'Confidence Interval Calculator – Statistics Tool',
      description: 'Compute two-sided confidence intervals for a population mean using sample mean, standard deviation, sample size, and confidence level. Includes charts and PDF export.',
      keywords: ["confidence interval","mean","statistics","margin of error","standard error","confidence level","z-score","calculator"],
    },
  },
  {
    id: 'day-of-week-calculator',
    title: 'Day of Week Calculator',
    slug: 'day-of-week-calculator',
    description: 'Find what day of the week a specific date falls on.',
    category: 'everyday-life',
    subcategory: 'date-time',
    authorId: 'lisa-daily',
    component: DayOfWeekCalculator,
    content: DayOfWeekCalculatorContent,
    meta: {
      title: 'Day of Week Calculator — Find the Weekday for Any Date',
      description: 'Quickly determine the day of the week (Sunday, Monday, etc.) for any date. Instant results, charts, and PDF export.',
      keywords: ["day of week","weekday calculator","date to weekday","calendar","date calculator","day lookup"],
    },
  },
  {
    id: 'leap-year-calculator',
    title: 'Leap Year Calculator',
    slug: 'leap-year-calculator',
    description: 'Check if a year is a leap year.',
    category: 'everyday-life',
    subcategory: 'date-time',
    authorId: 'lisa-daily',
    component: LeapYearCalculator,
    content: LeapYearCalculatorContent,
    meta: {
      title: 'Leap Year Calculator — Check if a year is a leap year',
      description: 'Enter any year to determine whether it is a leap year using the Gregorian calendar rules. Includes visual chart and PDF export.',
      keywords: ["leap year","leap-year","calendar","year calculator","date","date-time","Gregorian calendar"],
    },
  },
  {
    id: 'countdown-timer-calculator',
    title: 'Countdown Timer',
    slug: 'countdown-timer-calculator',
    description: 'Calculate time remaining until a target date.',
    category: 'everyday-life',
    subcategory: 'date-time',
    authorId: 'lisa-daily',
    component: CountdownTimerCalculator,
    content: CountdownTimerCalculatorContent,
    meta: {
      title: 'Countdown Timer — Time Remaining Calculator',
      description: 'Calculate days, hours, minutes, and seconds remaining until a target date. Toggle charts and download results as a PDF.',
      keywords: ["countdown","timer","date calculator","time remaining","deadline","event countdown"],
    },
  },
  {
    id: 'recipe-scaling-calculator',
    title: 'Recipe Scaling Calculator',
    slug: 'recipe-scaling-calculator',
    description: 'Scale recipe ingredients up or down based on serving size.',
    category: 'everyday-life',
    subcategory: 'cooking',
    authorId: 'chef-gordon',
    component: RecipeScalingCalculator,
    content: RecipeScalingCalculatorContent,
    meta: {
      title: 'Recipe Scaling Calculator — Scale Ingredients by Serving Size',
      description: 'Instantly scale recipe ingredient quantities based on original and desired servings. Supports cups, tablespoons, and teaspoons with precise conversions.',
      keywords: ["recipe scaling","scale recipe","ingredient scaling","cooking calculator","cups to tbsp","tablespoons to teaspoons"],
    },
  },
  {
    id: 'cooking-time-calculator',
    title: 'Cooking Time Calculator',
    slug: 'cooking-time-calculator',
    description: 'Calculate cooking times based on food type and weight.',
    category: 'everyday-life',
    subcategory: 'cooking',
    authorId: 'chef-gordon',
    component: CookingTimeCalculator,
    content: CookingTimeCalculatorContent,
    meta: {
      title: 'Cooking Time Calculator — Estimate Cooking Times by Weight',
      description: 'Estimate cooking times for chicken, beef, and pork based on weight (kg) and cooking method (roast, grill, bake). Use our calculator to plan meals and ensure food safety.',
      keywords: ["cooking time","cooking calculator","cooking time calculator","roast chicken time","grill beef time","pork cooking time","minutes per kg","meal planning"],
    },
  },
  {
    id: 'oven-temperature-converter',
    title: 'Oven Temperature Converter',
    slug: 'oven-temperature-converter',
    description: 'Convert oven temperatures between Celsius, Fahrenheit, and gas marks.',
    category: 'everyday-life',
    subcategory: 'cooking',
    authorId: 'chef-gordon',
    component: OvenTemperatureConverter,
    content: OvenTemperatureConverterContent,
    meta: {
      title: 'Oven Temperature Converter - Celsius, Fahrenheit & Gas Mark Converter',
      description: 'Quickly convert oven temperatures between Celsius, Fahrenheit, and traditional gas marks. Ideal for following recipes from different regions or older cookbooks.',
      keywords: ["oven temperature converter","celsius to fahrenheit","fahrenheit to celsius","gas mark to celsius","gas mark converter","cooking tools"],
    },
  },
  {
    id: 'ingredient-substitution-calculator',
    title: 'Ingredient Substitution Calculator',
    slug: 'ingredient-substitution-calculator',
    description: 'Find ingredient substitutions and conversion ratios.',
    category: 'everyday-life',
    subcategory: 'cooking',
    authorId: 'chef-gordon',
    component: IngredientSubstitutionCalculator,
    content: IngredientSubstitutionCalculatorContent,
    meta: {
      title: 'Ingredient Substitution Calculator — Quick Cooking Swaps',
      description: 'Quickly find common ingredient substitutions and conversion ratios. Convert between cups, tablespoons, and teaspoons and download results as a PDF.',
      keywords: ["ingredient substitution","cooking","recipe swaps","butter substitute","egg substitute","flour substitute","cup to tbsp","tablespoon to teaspoon","kitchen conversions"],
    },
  },
  {
    id: 'unit-price-calculator',
    title: 'Unit Price Calculator',
    slug: 'unit-price-calculator',
    description: 'Calculate unit price to compare product value.',
    category: 'everyday-life',
    subcategory: 'shopping',
    authorId: 'lisa-daily',
    component: UnitPriceCalculator,
    content: UnitPriceCalculatorContent,
    meta: {
      title: 'Unit Price Calculator — Compare Cost per Kilogram, Pound, or Ounce',
      description: 'Quickly calculate price per kilogram and see equivalent prices per pound and ounce. Use the Unit Price Calculator to compare product value and find the best deal.',
      keywords: ["unit price","price per kg","price per pound","price per ounce","shopping calculator","compare prices","unit price calculator"],
    },
  },
  {
    id: 'percentage-off-calculator',
    title: 'Percentage Off Calculator',
    slug: 'percentage-off-calculator',
    description: 'Calculate final price after percentage discount.',
    category: 'everyday-life',
    subcategory: 'shopping',
    authorId: 'lisa-daily',
    component: PercentageOffCalculator,
    content: PercentageOffCalculatorContent,
    meta: {
      title: 'Percentage Off Calculator — Calculate Final Price & Savings',
      description: 'Quickly compute the final price after a percentage discount. Enter the original price and discount percentage to see final cost and savings instantly. Includes charting and PDF export.',
      keywords: ["percentage off calculator","discount calculator","final price calculator","savings calculator","shopping discount"],
    },
  },
  {
    id: 'split-bill-calculator',
    title: 'Split Bill Calculator',
    slug: 'split-bill-calculator',
    description: 'Split a bill evenly among multiple people.',
    category: 'everyday-life',
    subcategory: 'shopping',
    authorId: 'lisa-daily',
    component: SplitBillCalculator,
    content: SplitBillCalculatorContent,
    meta: {
      title: 'Split Bill Calculator — Split a bill evenly with tip',
      description: 'Quickly split a bill evenly among multiple people, include tip percentage, and see per-person costs. Auto-calculates and provides downloadable PDF and charts.',
      keywords: ["split bill","bill splitter","tip calculator","split bill calculator","per person cost","restaurant tip","shared expenses"],
    },
  },
  {
    id: 'mileage-calculator',
    title: 'Mileage Calculator',
    slug: 'mileage-calculator',
    description: 'Calculate fuel mileage and cost per mile.',
    category: 'everyday-life',
    subcategory: 'travel',
    authorId: 'tom-practical',
    component: MileageCalculator,
    content: MileageCalculatorContent,
    meta: {
      title: 'Mileage Calculator — MPG & Cost per Mile',
      description: 'Calculate miles per gallon (MPG), total fuel cost, and cost per mile. Ideal for trip planning and budgeting fuel expenses.',
      keywords: ["mileage calculator","mpg calculator","cost per mile","fuel cost calculator","trip fuel estimator","miles per gallon"],
    },
  },
  {
    id: 'travel-time-calculator',
    title: 'Travel Time Calculator',
    slug: 'travel-time-calculator',
    description: 'Calculate travel time based on distance and speed.',
    category: 'everyday-life',
    subcategory: 'travel',
    authorId: 'tom-practical',
    component: TravelTimeCalculator,
    content: TravelTimeCalculatorContent,
    meta: {
      title: 'Travel Time Calculator — Estimate Trip Duration',
      description: 'Quickly estimate travel time by entering distance (km) and average speed (km/h). Converts values to base units for accurate results and shows formatted hours, minutes, and seconds.',
      keywords: ["travel time calculator","distance speed time","trip duration estimator","km km/h travel time","travel planning"],
    },
  },
  {
    id: 'concrete-calculator',
    title: 'Concrete Calculator',
    slug: 'concrete-calculator',
    description: 'Calculate the amount of concrete needed for a project by entering length, width, and depth in meters. Provides volume in cubic meters and liters.',
    category: 'everyday-life',
    subcategory: 'home-garden',
    authorId: 'mike-builder',
    component: ConcreteCalculator,
    content: ConcreteCalculatorContent,
    meta: {
      title: 'Concrete Calculator — Estimate Concrete Volume (m³ & L)',
      description: 'Quickly estimate the amount of concrete required for slabs, foundations, patios and more. Enter length, width and depth in meters to get volume in cubic meters and liters.',
      keywords: ["concrete calculator","concrete volume","m3 to liters","slab calculator","construction calculator","home garden"],
    },
  },
  {
    id: 'carpet-calculator',
    title: 'Carpet Calculator',
    slug: 'carpet-calculator',
    description: 'Calculate carpet needed for a room including waste.',
    category: 'everyday-life',
    subcategory: 'home-garden',
    authorId: 'lisa-daily',
    component: CarpetCalculator,
    content: CarpetCalculatorContent,
    meta: {
      title: 'Carpet Calculator — Estimate Carpet Needed (with Waste)',
      description: 'Estimate how much carpet you need for a room. Enter length and width (meters or feet) and include a waste percentage to account for cuts and seams. Results show total square meters required and an easy comparison chart.',
      keywords: ["carpet calculator","carpet estimator","how much carpet","carpet waste","room area calculator","flooring calculator","home improvement"],
    },
  },
  {
    id: 'fence-calculator',
    title: 'Fence Calculator',
    slug: 'fence-calculator',
    description: 'Calculate materials needed for fencing.',
    category: 'everyday-life',
    subcategory: 'home-garden',
    authorId: 'mike-builder',
    component: FenceCalculator,
    content: FenceCalculatorContent,
    meta: {
      title: 'Fence Calculator — Panels & Posts Estimator',
      description: 'Estimate how many fence panels and posts you need based on perimeter, panel width, and posts per panel. Includes PDF export and charts.',
      keywords: ["fence calculator","fence panels","posts","fencing estimator","materials estimate","home garden","perimeter"],
    },
  },
  {
    id: 'lawn-area-calculator',
    title: 'Lawn Area Calculator',
    slug: 'lawn-area-calculator',
    description: 'Calculate lawn area for seeding or sodding.',
    category: 'everyday-life',
    subcategory: 'home-garden',
    authorId: 'lisa-daily',
    component: LawnAreaCalculator,
    content: LawnAreaCalculatorContent,
    meta: {
      title: 'Lawn Area Calculator — Calculate Lawn Area for Seeding & Sodding',
      description: 'Quickly compute lawn area in square meters or square feet to estimate seed, sod, or fertilizer needs. Enter length and width in meters — results update instantly.',
      keywords: ["lawn area","lawn calculator","seeding","sodding","square meters","square feet","yard area","turf estimation"],
    },
  },
  {
    id: 'overtime-calculator',
    title: 'Overtime Pay Calculator',
    slug: 'overtime-calculator',
    description: 'Calculate overtime pay based on hours worked.',
    category: 'everyday-life',
    subcategory: 'time-management',
    authorId: 'tom-practical',
    component: OvertimeCalculator,
    content: OvertimeCalculatorContent,
    meta: {
      title: 'Overtime Pay Calculator — Calculate Regular & Overtime Wages',
      description: 'Easily calculate regular pay, overtime pay, and total gross pay. Enter regular hours, overtime hours, hourly rate, and overtime multiplier. Results update automatically.',
      keywords: ["overtime calculator","overtime pay","hourly pay calculator","work hours calculator","time management","paycheck calculator"],
    },
  },
  {
    id: 'time-card-calculator',
    title: 'Time Card Calculator',
    slug: 'time-card-calculator',
    description: 'Calculate total hours worked from time card entries.',
    category: 'everyday-life',
    subcategory: 'time-management',
    authorId: 'tom-practical',
    component: TimeCardCalculator,
    content: TimeCardCalculatorContent,
    meta: {
      title: 'Time Card Calculator — Calculate Hours Worked | Practical Tools',
      description: 'Use the Time Card Calculator to compute total hours worked from clock in/out times and break duration. Supports overnight shifts and provides PDF export.',
      keywords: ["time card calculator","hours worked","clock in clock out","break time","work hours calculator","overnight shift calculator"],
    },
  },
  {
    id: 'productivity-calculator',
    title: 'Productivity Calculator',
    slug: 'productivity-calculator',
    description: 'Calculate productivity metrics and efficiency.',
    category: 'everyday-life',
    subcategory: 'time-management',
    authorId: 'tom-practical',
    component: ProductivityCalculator,
    content: ProductivityCalculatorContent,
    meta: {
      title: 'Productivity Calculator — Tasks per Hour & Efficiency',
      description: 'Use the Productivity Calculator to compute tasks-per-hour, completion rate, and a productivity index. Ideal for personal time management and team performance tracking.',
      keywords: ["productivity calculator","tasks per hour","completion rate","efficiency","time management","productivity index"],
    },
  },
  {
    id: 'age-difference-calculator',
    title: 'Age Difference Calculator',
    slug: 'age-difference-calculator',
    description: 'Calculate age difference between two people.',
    category: 'everyday-life',
    subcategory: 'relationships',
    authorId: 'lisa-daily',
    component: AgeDifferenceCalculator,
    content: AgeDifferenceCalculatorContent,
    meta: {
      title: 'Age Difference Calculator — Calculate Age Gaps Easily',
      description: 'Calculate the age difference between two people by entering their birth dates. Get ages in years, months, days and the absolute difference in years and days. Includes charts and PDF export.',
      keywords: ["age difference","age calculator","birth date difference","age gap","age comparison","relationships"],
    },
  },
  {
    id: 'relationship-duration-calculator',
    title: 'Relationship Duration Calculator',
    slug: 'relationship-duration-calculator',
    description: 'Calculate how long a relationship has lasted.',
    category: 'everyday-life',
    subcategory: 'relationships',
    authorId: 'lisa-daily',
    component: RelationshipDurationCalculator,
    content: RelationshipDurationCalculatorContent,
    meta: {
      title: 'Relationship Duration Calculator — How Long Has Your Relationship Lasted?',
      description: 'Instantly calculate the duration of a relationship in years, months, and days. Handles leap years and varying month lengths. Download results as PDF.',
      keywords: ["relationship duration","relationship calculator","anniversary calculator","date difference","years months days","how long relationship lasted"],
    },
  },
  {
    id: 'pet-age-calculator',
    title: 'Pet Age Calculator',
    slug: 'pet-age-calculator',
    description: 'Convert pet age (dog or cat) to equivalent human years using commonly used veterinary approximations.',
    category: 'everyday-life',
    subcategory: 'pets',
    authorId: 'lisa-daily',
    component: PetAgeCalculator,
    content: PetAgeCalculatorContent,
    meta: {
      title: 'Pet Age to Human Years Calculator — Dog & Cat Age Converter',
      description: 'Estimate the equivalent human age of a dog or cat. Use our Pet Age Calculator to convert pet years into human years with common veterinary approximations.',
      keywords: ["pet age","dog age","cat age","human years","pet calculator","age converter"],
    },
  },
  {
    id: 'pet-food-calculator',
    title: 'Pet Food Calculator',
    slug: 'pet-food-calculator',
    description: 'Calculate daily food requirements for pets.',
    category: 'everyday-life',
    subcategory: 'pets',
    authorId: 'lisa-daily',
    component: PetFoodCalculator,
    content: PetFoodCalculatorContent,
    meta: {
      title: 'Pet Food Calculator — Daily Feeding Guide for Dogs & Cats',
      description: 'Estimate daily calorie and food amounts for dogs and cats based on weight and activity level using standard veterinary equations.',
      keywords: ["pet food calculator","dog feeding","cat feeding","daily calories","RER","pet nutrition"],
    },
  },
  {
    id: 'velocity-calculator',
    title: 'Velocity Calculator',
    slug: 'velocity-calculator',
    description: 'Calculate velocity from distance and time.',
    category: 'physics',
    subcategory: 'mechanics',
    authorId: 'prof-isaac-newton',
    component: VelocityCalculator,
    content: VelocityCalculatorContent,
    meta: {
      title: 'Velocity Calculator — Distance and Time to Velocity (m/s)',
      description: 'Compute velocity (m/s) by entering distance in meters and time in seconds. Auto-calculates on input and offers charts and PDF export.',
      keywords: ["velocity calculator","velocity","speed","distance time calculator","physics calculator","m/s"],
    },
  },
  {
    id: 'momentum-calculator',
    title: 'Momentum Calculator',
    slug: 'momentum-calculator',
    description: 'Calculate momentum using p = mv.',
    category: 'physics',
    subcategory: 'mechanics',
    authorId: 'prof-isaac-newton',
    component: MomentumCalculator,
    content: MomentumCalculatorContent,
    meta: {
      title: 'Momentum Calculator — Physics',
      description: 'Calculate linear momentum (p = mv) given mass (kg) and velocity (m/s). Instant results, chart visualization, and PDF export.',
      keywords: ["momentum","physics","mechanics","momentum calculator","p=mv","mass","velocity"],
    },
  },
  {
    id: 'work-calculator',
    title: 'Work Calculator',
    slug: 'work-calculator',
    description: 'Calculate work done using W = Fd. Enter force (N), distance (m), and angle between force and displacement.',
    category: 'physics',
    subcategory: 'mechanics',
    authorId: 'prof-isaac-newton',
    component: WorkCalculator,
    content: WorkCalculatorContent,
    meta: {
      title: 'Work Calculator — Physics Tools',
      description: 'Compute mechanical work using W = F × d × cos(θ). Supports degrees and radians. Quick and accurate calculations for physics problems.',
      keywords: ["work calculator","mechanical work","physics calculator","W = Fd","force distance angle","joules"],
    },
  },
  {
    id: 'friction-calculator',
    title: 'Friction Calculator',
    slug: 'friction-calculator',
    description: 'Calculate frictional force.',
    category: 'physics',
    subcategory: 'mechanics',
    authorId: 'prof-isaac-newton',
    component: FrictionCalculator,
    content: FrictionCalculatorContent,
    meta: {
      title: 'Friction Calculator — Calculate Frictional Force (μ × N)',
      description: 'Compute frictional force from normal force and coefficient of friction. Instant calculations with charting and PDF export.',
      keywords: ["friction calculator","frictional force","coefficient of friction","normal force","mechanics calculator","physics tools"],
    },
  },
  {
    id: 'gravity-calculator',
    title: 'Gravity Calculator',
    slug: 'gravity-calculator',
    description: 'Calculate gravitational force using F = G(m1*m2)/r².',
    category: 'physics',
    subcategory: 'mechanics',
    authorId: 'prof-isaac-newton',
    component: GravityCalculator,
    content: GravityCalculatorContent,
    meta: {
      title: 'Gravity Calculator — Compute Gravitational Force (F = G m1 m2 / r²)',
      description: 'Use the Gravity Calculator to compute the gravitational attraction between two masses. Enter masses (kg) and distance (m) to get the force in newtons (N).',
      keywords: ["gravity","gravitational force","Newton","physics","force calculator","F = G m1 m2 r^2"],
    },
  },
  {
    id: 'projectile-motion-calculator',
    title: 'Projectile Motion Calculator',
    slug: 'projectile-motion-calculator',
    description: 'Calculate projectile motion parameters (range, height, time).',
    category: 'physics',
    subcategory: 'mechanics',
    authorId: 'prof-isaac-newton',
    component: ProjectileMotionCalculator,
    content: ProjectileMotionCalculatorContent,
    meta: {
      title: 'Projectile Motion Calculator - Range, Height & Time Calculator',
      description: 'Calculate projectile range, maximum height, and time of flight using initial velocity, launch angle, and initial height. Includes charts and PDF export.',
      keywords: ["projectile motion","range calculator","maximum height","time of flight","physics calculator","mechanics"],
    },
  },
  {
    id: 'centripetal-force-calculator',
    title: 'Centripetal Force Calculator',
    slug: 'centripetal-force-calculator',
    description: 'Calculate centripetal force using F = m v² / r. Enter mass (kg), velocity (m/s), and radius (m) to compute force in Newtons (N).',
    category: 'physics',
    subcategory: 'mechanics',
    authorId: 'prof-isaac-newton',
    component: CentripetalForceCalculator,
    content: CentripetalForceCalculatorContent,
    meta: {
      title: 'Centripetal Force Calculator — F = m·v² / r',
      description: 'Compute the centripetal force for an object moving in a circular path. Use mass (kg), velocity (m/s), and radius (m) to get the force in Newtons (N).',
      keywords: ["centripetal force","centripetal acceleration","physics calculator","mechanics","F = m v^2 / r"],
    },
  },
  {
    id: 'angular-velocity-calculator',
    title: 'Angular Velocity Calculator',
    slug: 'angular-velocity-calculator',
    description: 'Calculate angular velocity from rotational motion.',
    category: 'physics',
    subcategory: 'mechanics',
    authorId: 'prof-isaac-newton',
    component: AngularVelocityCalculator,
    content: AngularVelocityCalculatorContent,
    meta: {
      title: 'Angular Velocity Calculator — Physics Tools',
      description: 'Compute angular velocity (rad/s or RPM) from angular displacement and time. Instant results, charts, and PDF export.',
      keywords: ["angular velocity","rad/s","RPM","rotation","physics","mechanics","calculator"],
    },
  },
  {
    id: 'heat-transfer-calculator',
    title: 'Heat Transfer Calculator',
    slug: 'heat-transfer-calculator',
    description: 'Calculate heat transfer using Q = mcΔT.',
    category: 'physics',
    subcategory: 'thermodynamics',
    authorId: 'dr-albert-einstein',
    component: HeatTransferCalculator,
    content: HeatTransferCalculatorContent,
    meta: {
      title: 'Heat Transfer Calculator — Q = m·c·ΔT | Thermodynamics Tool',
      description: 'Compute heat transfer (Q) using Q = m·c·ΔT. Enter mass (kg), specific heat (J/kg·K), and temperature change (K) to get results in joules (J).',
      keywords: ["heat transfer","specific heat","Q = m c ΔT","thermodynamics","heat calculator","Joules","temperature change"],
    },
  },
  {
    id: 'ideal-gas-law-calculator',
    title: 'Ideal Gas Law Calculator',
    slug: 'ideal-gas-law-calculator',
    description: 'Calculate gas properties using PV = nRT.',
    category: 'physics',
    subcategory: 'thermodynamics',
    authorId: 'dr-albert-einstein',
    component: IdealGasLawCalculator,
    content: IdealGasLawCalculatorContent,
    meta: {
      title: 'Ideal Gas Law Calculator — PV = nRT | Thermodynamics Tools',
      description: 'Use the Ideal Gas Law calculator to compute pressure, volume, number of moles, or temperature (PV = nRT). Provide three properties to calculate the fourth or check consistency between all four.',
      keywords: ["ideal gas law","PV = nRT","pressure calculator","volume calculator","moles calculator","temperature calculator","thermodynamics","physics calculator"],
    },
  },
  {
    id: 'density-calculator',
    title: 'Density Calculator',
    slug: 'density-calculator',
    description: 'Calculate density using ρ = m/V.',
    category: 'physics',
    subcategory: 'thermodynamics',
    authorId: 'dr-albert-einstein',
    component: DensityCalculator,
    content: DensityCalculatorContent,
    meta: {
      title: 'Density Calculator — ρ = m / V | Physics Tools',
      description: 'Compute density (kg/m³) by entering mass (kg) and volume (m³). Instant calculations, charts, and PDF export for physics and thermodynamics applications.',
      keywords: ["density","mass","volume","rho","physics","thermodynamics","kg/m3","calculator"],
    },
  },
  {
    id: 'electric-power-calculator',
    title: 'Electric Power Calculator',
    slug: 'electric-power-calculator',
    description: 'Calculate electric power using P = IV or P = I²R.',
    category: 'physics',
    subcategory: 'electricity',
    authorId: 'dr-albert-einstein',
    component: ElectricPowerCalculator,
    content: ElectricPowerCalculatorContent,
    meta: {
      title: 'Electric Power Calculator — Calculate P = VI or P = I²R',
      description: 'Compute electric power quickly using P = V × I or P = I² × R. Enter voltage, current, and/or resistance to get power in watts with comparison charts and PDF export.',
      keywords: ["electric power calculator","P = VI","P = I^2 R","power calculation","voltage current resistance","watts calculator"],
    },
  },
  {
    id: 'series-parallel-resistor-calculator',
    title: 'Series & Parallel Resistor Calculator',
    slug: 'series-parallel-resistor-calculator',
    description: 'Calculate equivalent resistance for series and parallel resistor circuits.',
    category: 'physics',
    subcategory: 'electricity',
    authorId: 'dr-albert-einstein',
    component: SeriesParallelResistorCalculator,
    content: SeriesParallelResistorCalculatorContent,
    meta: {
      title: 'Series & Parallel Resistor Calculator — Equivalent Resistance Tool',
      description: 'Compute equivalent resistance for resistor arrays in series or parallel. Enter resistor values (Ω) separated by commas and choose the circuit configuration to get instant results and comparison charts.',
      keywords: ["resistor calculator","series resistor","parallel resistor","equivalent resistance","electronics calculator","physics calculator"],
    },
  },
  {
    id: 'lens-calculator',
    title: 'Lens Calculator',
    slug: 'lens-calculator',
    description: 'Calculate focal length and image properties for lenses.',
    category: 'physics',
    subcategory: 'optics',
    authorId: 'dr-albert-einstein',
    component: LensCalculator,
    content: LensCalculatorContent,
    meta: {
      title: 'Lens Calculator — Image Distance & Magnification | Optics Tools',
      description: 'Compute image distance, magnification, and image nature (real/virtual) for thin lenses using the lens formula. Supports convex and concave lenses with instant results and downloadable PDF.',
      keywords: ["lens calculator","image distance","magnification","thin lens equation","optics","convex lens","concave lens"],
    },
  },
  {
    id: 'refraction-calculator',
    title: 'Refraction Calculator',
    slug: 'refraction-calculator',
    description: 'Calculate refraction angle using Snell\'s law.',
    category: 'physics',
    subcategory: 'optics',
    authorId: 'dr-albert-einstein',
    component: RefractionCalculator,
    content: RefractionCalculatorContent,
    meta: {
      title: 'Refraction Calculator — Snell\'s Law | Optics Tools',
      description: 'Compute the refracted angle between two media using Snell\'s law. Handles total internal reflection and displays the critical angle when applicable.',
      keywords: ["Snell's law","refraction calculator","optics","refracted angle","critical angle","total internal reflection","physics calculator"],
    },
  },
  {
    id: 'wavelength-calculator',
    title: 'Wavelength Calculator',
    slug: 'wavelength-calculator',
    description: 'Calculate wavelength from frequency and wave speed.',
    category: 'physics',
    subcategory: 'waves',
    authorId: 'dr-albert-einstein',
    component: WavelengthCalculator,
    content: WavelengthCalculatorContent,
    meta: {
      title: 'Wavelength Calculator - Calculate λ from frequency and wave speed',
      description: 'Quickly compute the wavelength (λ) using the relation λ = v / f. Enter frequency in Hz and wave speed in m/s to get the wavelength in meters.',
      keywords: ["wavelength","frequency","wave speed","physics calculator","λ = v / f","wave calculator","acoustics","optics"],
    },
  },
  {
    id: 'wave-speed-calculator',
    title: 'Wave Speed Calculator',
    slug: 'wave-speed-calculator',
    description: 'Calculate wave speed from wavelength and frequency.',
    category: 'physics',
    subcategory: 'waves',
    authorId: 'dr-albert-einstein',
    component: WaveSpeedCalculator,
    content: WaveSpeedCalculatorContent,
    meta: {
      title: 'Wave Speed Calculator — v = f × λ | Physics Tools',
      description: 'Calculate the speed of a wave given its wavelength (m) and frequency (Hz). Instant results, charts, and PDF export.',
      keywords: ["wave speed","wavelength","frequency","physics calculator","waves","v = f × λ","wave velocity"],
    },
  },
  {
    id: 'lumber-calculator',
    title: 'Lumber Calculator',
    slug: 'lumber-calculator',
    description: 'Calculate lumber needed for construction projects.',
    category: 'construction',
    subcategory: 'materials',
    authorId: 'mike-builder',
    component: LumberCalculator,
    content: LumberCalculatorContent,
    meta: {
      title: 'Lumber Calculator — Estimate Boards & Linear Meters',
      description: 'Quickly estimate the number of boards, total linear meters, and approximate board area needed for construction projects. Enter project dimensions and select a board size to get instant results.',
      keywords: ["lumber calculator","boards needed","material estimator","construction calculator","lumber estimate","board quantity"],
    },
  },
  {
    id: 'drywall-calculator',
    title: 'Drywall Calculator',
    slug: 'drywall-calculator',
    description: 'Calculate drywall sheets needed for a room.',
    category: 'construction',
    subcategory: 'materials',
    authorId: 'mike-builder',
    component: DrywallCalculator,
    content: DrywallCalculatorContent,
    meta: {
      title: 'Drywall Calculator — Sheets Needed for a Room',
      description: 'Estimate how many drywall sheets you need to cover the walls of a room. Input length, width, and height in meters and get an immediate result with downloadable PDF and charts.',
      keywords: ["drywall calculator","drywall sheets","sheetrock estimate","construction materials","room drywall","drywall area calculator"],
    },
  },
  {
    id: 'insulation-calculator',
    title: 'Insulation Calculator',
    slug: 'insulation-calculator',
    description: 'Calculate insulation needed for walls and attics.',
    category: 'construction',
    subcategory: 'materials',
    authorId: 'mike-builder',
    component: InsulationCalculator,
    content: InsulationCalculatorContent,
    meta: {
      title: 'Insulation Calculator — Estimate Insulation Volume & R-Value',
      description: 'Quickly estimate the insulation volume (m³) and total R-value for walls, ceilings, and attics. Enter area (m²), thickness (cm) and R-value per inch to get instant results and a downloadable report.',
      keywords: ["insulation calculator","insulation volume","R-value calculator","insulation estimate","construction tools","building materials"],
    },
  },
  {
    id: 'flooring-calculator',
    title: 'Flooring Calculator',
    slug: 'flooring-calculator',
    description: 'Calculate flooring materials needed including waste.',
    category: 'construction',
    subcategory: 'materials',
    authorId: 'mike-builder',
    component: FlooringCalculator,
    content: FlooringCalculatorContent,
    meta: {
      title: 'Flooring Calculator — Estimate Flooring Materials & Waste',
      description: 'Estimate the amount of flooring material you need. Enter room length and width (m) and include a waste percentage to get total area to purchase.',
      keywords: ["flooring calculator","flooring estimate","tile calculator","plank calculator","waste percentage","material estimate","square meters"],
    },
  },
  {
    id: 'roofing-calculator',
    title: 'Roofing Calculator',
    slug: 'roofing-calculator',
    description: 'Calculate roofing materials needed for a roof.',
    category: 'construction',
    subcategory: 'materials',
    authorId: 'mike-builder',
    component: RoofingCalculator,
    content: RoofingCalculatorContent,
    meta: {
      title: 'Roofing Calculator — Estimate Roof Area & Materials',
      description: 'Estimate roof area accounting for pitch and calculate required roofing sheets with waste allowance. Ideal for builders, contractors, and DIY projects.',
      keywords: ["roof calculator","roof area","roofing materials","roof pitch","roofing sheets","construction calculator"],
    },
  },
  {
    id: 'foundation-calculator',
    title: 'Foundation Calculator',
    slug: 'foundation-calculator',
    description: 'Calculate concrete needed for foundation.',
    category: 'construction',
    subcategory: 'structural',
    authorId: 'sarah-architect',
    component: FoundationCalculator,
    content: FoundationCalculatorContent,
    meta: {
      title: 'Foundation Calculator — Concrete Volume & Material Estimate',
      description: 'Quickly calculate foundation concrete volume, estimated mass, and approximate cement bag requirements. Ideal for preliminary planning of rectangular foundations.',
      keywords: ["foundation calculator","concrete volume","foundation concrete","construction calculator","structural calculator","concrete estimate"],
    },
  },
  {
    id: 'beam-calculator',
    title: 'Beam Calculator',
    slug: 'beam-calculator',
    description: 'Calculate beam load capacity and required section modulus for a simply supported beam with a central point load.',
    category: 'construction',
    subcategory: 'structural',
    authorId: 'sarah-architect',
    component: BeamCalculator,
    content: BeamCalculatorContent,
    meta: {
      title: 'Beam Calculator — Structural Beam Load & Section Modulus',
      description: 'Quickly estimate bending moment and required section modulus for a simply supported beam with a central point load. Useful for preliminary structural checks.',
      keywords: ["beam calculator","bending moment","section modulus","structural","beam span","load","steel beam","wood beam","concrete beam"],
    },
  },
  {
    id: 'column-calculator',
    title: 'Column Calculator',
    slug: 'column-calculator',
    description: 'Calculate column load capacity.',
    category: 'construction',
    subcategory: 'structural',
    authorId: 'sarah-architect',
    component: ColumnCalculator,
    content: ColumnCalculatorContent,
    meta: {
      title: 'Column Calculator — Estimate Column Load Capacity | Structural Tools',
      description: 'Estimate axial load capacity of rectangular columns. Enter dimensions and select material to get a preliminary capacity estimate with a simple slenderness check.',
      keywords: ["column calculator","column load capacity","structural calculator","column buckling","concrete column","steel column","construction tools"],
    },
  },
  {
    id: 'rafter-calculator',
    title: 'Rafter Calculator',
    slug: 'rafter-calculator',
    description: 'Calculate rafter length and spacing.',
    category: 'construction',
    subcategory: 'structural',
    authorId: 'sarah-architect',
    component: RafterCalculator,
    content: RafterCalculatorContent,
    meta: {
      title: 'Rafter Calculator — Rafter Length, Rise, Run & Spacing | Construction Tools',
      description: 'Quickly calculate rafter length, rise, run, and estimated number of rafters by entering roof span (m), pitch (degrees), and spacing (cm).',
      keywords: ["rafter calculator","rafter length","roof pitch calculator","rafter spacing","construction calculator","structural tools"],
    },
  },
  {
    id: 'stair-calculator',
    title: 'Stair Calculator',
    slug: 'stair-calculator',
    description: 'Calculate stair dimensions and number of steps.',
    category: 'construction',
    subcategory: 'structural',
    authorId: 'sarah-architect',
    component: StairCalculator,
    content: StairCalculatorContent,
    meta: {
      title: 'Stair Calculator — Determine number of steps & stair dimensions',
      description: 'Use the Stair Calculator to compute the number of risers, adjusted rise per step, and total run from total rise, run per step, and rise per step. Ideal for architects and builders.',
      keywords: ["stair calculator","stair steps","rise and run","staircase design","number of steps","construction calculator"],
    },
  },
  {
    id: 'deck-calculator',
    title: 'Deck Calculator',
    slug: 'deck-calculator',
    description: 'Calculate materials needed for deck construction.',
    category: 'construction',
    subcategory: 'structural',
    authorId: 'mike-builder',
    component: DeckCalculator,
    content: DeckCalculatorContent,
    meta: {
      title: 'Deck Calculator — Estimate Joists, Deck Boards & Fasteners',
      description: 'Quickly estimate deck area, number of joists, total joist length, required decking boards, and fastener quantities for a rectangular deck. Ideal for early planning and material budgeting.',
      keywords: ["deck calculator","deck materials","joist spacing","deck boards","deck area","construction calculator","structural estimator"],
    },
  },
  {
    id: 'electrical-load-calculator',
    title: 'Electrical Load Calculator',
    slug: 'electrical-load-calculator',
    description: 'Calculate electrical load for a building.',
    category: 'construction',
    subcategory: 'electrical',
    authorId: 'mike-builder',
    component: ElectricalLoadCalculator,
    content: ElectricalLoadCalculatorContent,
    meta: {
      title: 'Electrical Load Calculator — Estimate Building Electrical Load',
      description: 'Quickly estimate total wattage and current draw for a group of appliances. Enter number of appliances, average wattage, and voltage to compute total watts and amps.',
      keywords: ["electrical load calculator","building load","amps calculator","wattage calculator","electrical planning","voltage","appliances"],
    },
  },
  {
    id: 'wire-size-calculator',
    title: 'Wire Size Calculator',
    slug: 'wire-size-calculator',
    description: 'Calculate appropriate wire gauge for electrical circuits based on current, voltage, and distance. Recommends a metric conductor size to meet a specified voltage drop.',
    category: 'construction',
    subcategory: 'electrical',
    authorId: 'mike-builder',
    component: WireSizeCalculator,
    content: WireSizeCalculatorContent,
    meta: {
      title: 'Wire Size Calculator — Electrical Wire Sizing Tool',
      description: 'Calculate recommended wire size (mm²) for copper conductors using current, voltage and distance. Includes voltage drop estimates and charted comparisons.',
      keywords: ["wire size calculator","voltage drop","wire gauge","electrical","copper conductor","wire sizing","electrical calculator"],
    },
  },
  {
    id: 'voltage-drop-calculator',
    title: 'Voltage Drop Calculator',
    slug: 'voltage-drop-calculator',
    description: 'Calculate voltage drop in electrical circuits.',
    category: 'construction',
    subcategory: 'electrical',
    authorId: 'mike-builder',
    component: VoltageDropCalculator,
    content: VoltageDropCalculatorContent,
    meta: {
      title: 'Voltage Drop Calculator — Electrical Voltage Loss Estimator',
      description: 'Estimate voltage drop in electrical circuits by entering current, conductor resistance per meter, and distance. Includes charts and PDF export.',
      keywords: ["voltage drop","electrical","voltage loss","conductor resistance","circuit design","voltage drop calculator"],
    },
  },
  {
    id: 'circuit-breaker-calculator',
    title: 'Circuit Breaker Calculator',
    slug: 'circuit-breaker-calculator',
    description: 'Calculate appropriate circuit breaker size.',
    category: 'construction',
    subcategory: 'electrical',
    authorId: 'mike-builder',
    component: CircuitBreakerCalculator,
    content: CircuitBreakerCalculatorContent,
    meta: {
      title: 'Circuit Breaker Calculator — Determine Breaker Size from Load',
      description: 'Use this Circuit Breaker Calculator to estimate the correct breaker size based on total load (W), voltage (V), and a safety factor. Includes recommended breaker and charts.',
      keywords: ["circuit breaker","breaker size","electrical calculator","ampere calculation","load current","electrical safety","construction tools"],
    },
  },
  {
    id: 'pipe-size-calculator',
    title: 'Pipe Size Calculator',
    slug: 'pipe-size-calculator',
    description: 'Calculate pipe size needed for water flow.',
    category: 'construction',
    subcategory: 'plumbing',
    authorId: 'mike-builder',
    component: PipeSizeCalculator,
    content: PipeSizeCalculatorContent,
    meta: {
      title: 'Pipe Size Calculator — Plumbing & Water Flow',
      description: 'Compute the required internal pipe diameter for a given water flow rate (L/min) and target velocity (m/s). Useful for plumbing and hydraulic planning.',
      keywords: ["pipe size calculator","pipe diameter","flow rate","water velocity","plumbing calculator","hydraulic design"],
    },
  },
  {
    id: 'water-flow-calculator',
    title: 'Water Flow Calculator',
    slug: 'water-flow-calculator',
    description: 'Calculate water flow rate through pipes.',
    category: 'construction',
    subcategory: 'plumbing',
    authorId: 'mike-builder',
    component: WaterFlowCalculator,
    content: WaterFlowCalculatorContent,
    meta: {
      title: 'Water Flow Calculator — Plumbing | Construction Tools',
      description: 'Calculate water flow rate through pipes given diameter (cm) and velocity (m/s). Outputs m³/s, L/s, and m³/h for quick plumbing and construction estimates.',
      keywords: ["water flow","flow rate","pipe flow","plumbing calculator","construction tools","m3/s","L/s","m3/h"],
    },
  },
  {
    id: 'punnett-square-calculator',
    title: 'Punnett Square Calculator',
    slug: 'punnett-square-calculator',
    description: 'Generate Punnett squares for genetic crosses.',
    category: 'biology',
    subcategory: 'genetics',
    authorId: 'dr-jane-watson',
    component: PunnettSquareCalculator,
    content: PunnettSquareCalculatorContent,
    meta: {
      title: 'Punnett Square Calculator — Genetics Tool',
      description: 'Generate Punnett squares for single-gene genetic crosses. Predict offspring genotype and phenotype probabilities (e.g., AA, Aa, aa).',
      keywords: ["punnett square","genetics","genotype","phenotype","Aa","monohybrid cross","biology","genetics calculator"],
    },
  },
  {
    id: 'hardy-weinberg-calculator',
    title: 'Hardy-Weinberg Equilibrium Calculator',
    slug: 'hardy-weinberg-calculator',
    description: 'Calculate allele and genotype frequencies using Hardy-Weinberg equilibrium (p², 2pq, q²) from allele frequencies p and q.',
    category: 'biology',
    subcategory: 'genetics',
    authorId: 'dr-jane-watson',
    component: HardyWeinbergCalculator,
    content: HardyWeinbergCalculatorContent,
    meta: {
      title: 'Hardy-Weinberg Equilibrium Calculator — Population Genetics Tool',
      description: 'Compute allele (p, q) and genotype (p², 2pq, q²) frequencies using the Hardy-Weinberg equilibrium. Interactive calculator with charts and PDF export.',
      keywords: ["Hardy-Weinberg","population genetics","allele frequency","genotype frequency","p2","2pq","q2","genetics calculator"],
    },
  },
  {
    id: 'genetic-distance-calculator',
    title: 'Genetic Distance Calculator',
    slug: 'genetic-distance-calculator',
    description: 'Calculate genetic distance between populations using Nei\'s genetic identity and distance for a biallelic locus.',
    category: 'biology',
    subcategory: 'genetics',
    authorId: 'dr-jane-watson',
    component: GeneticDistanceCalculator,
    content: GeneticDistanceCalculatorContent,
    meta: {
      title: 'Genetic Distance Calculator — Biology Tools',
      description: 'Compute Nei\'s genetic identity and genetic distance between two populations from allele frequencies. Interactive calculator with charts and PDF export.',
      keywords: ["genetic distance","Nei genetic identity","allele frequency","population genetics","biallelic","genetics calculator"],
    },
  },
  {
    id: 'dna-sequence-calculator',
    title: 'DNA Sequence Calculator',
    slug: 'dna-sequence-calculator',
    description: 'Analyze DNA sequences and calculate complementary strands.',
    category: 'biology',
    subcategory: 'genetics',
    authorId: 'dr-jane-watson',
    component: DNASequenceCalculator,
    content: DNASequenceCalculatorContent,
    meta: {
      title: 'DNA Sequence Calculator — Complement & Reverse Complement Analyzer',
      description: 'Quickly compute the complement or reverse complement of DNA sequences, view nucleotide counts, sequence length, and GC content. Ideal for genetics and molecular biology tasks.',
      keywords: ["DNA calculator","reverse complement","complement DNA","GC content","nucleotide counts","genetics","bioinformatics"],
    },
  },
  {
    id: 'allele-frequency-calculator',
    title: 'Allele Frequency Calculator',
    slug: 'allele-frequency-calculator',
    description: 'Calculate allele frequencies (p and q) in a population from genotype counts (AA, Aa, aa).',
    category: 'biology',
    subcategory: 'genetics',
    authorId: 'dr-jane-watson',
    component: AlleleFrequencyCalculator,
    content: AlleleFrequencyCalculatorContent,
    meta: {
      title: 'Allele Frequency Calculator — Population Genetics Tool',
      description: 'Compute allele frequencies p and q from genotype counts (AA, Aa, aa). Useful for population genetics, Hardy-Weinberg checks, and reporting.',
      keywords: ["allele frequency","population genetics","Hardy-Weinberg","genetics calculator","allele p","allele q","genotype counts"],
    },
  },
  {
    id: 'population-growth-calculator',
    title: 'Population Growth Calculator',
    slug: 'population-growth-calculator',
    description: 'Calculate population growth using exponential or logistic models.',
    category: 'biology',
    subcategory: 'ecology',
    authorId: 'dr-jane-watson',
    component: PopulationGrowthCalculator,
    content: PopulationGrowthCalculatorContent,
    meta: {
      title: 'Population Growth Calculator — Exponential & Logistic Models',
      description: 'Estimate population change over time using exponential or logistic growth models. Interactive charts and PDF export included.',
      keywords: ["population growth","exponential growth","logistic growth","ecology calculator","population dynamics","carrying capacity"],
    },
  },
  {
    id: 'growth-rate-calculator',
    title: 'Growth Rate Calculator',
    slug: 'growth-rate-calculator',
    description: 'Calculate population growth rate.',
    category: 'biology',
    subcategory: 'ecology',
    authorId: 'dr-jane-watson',
    component: GrowthRateCalculator,
    content: GrowthRateCalculatorContent,
    meta: {
      title: 'Population Growth Rate Calculator — Ecology Tools',
      description: 'Calculate continuous and compound population growth rates (r and CAGR). Enter initial and final populations and the time period to get instant results and charts.',
      keywords: ["growth rate","population growth","CAGR","continuous growth rate","ecology calculator","population dynamics"],
    },
  },
  {
    id: 'carrying-capacity-calculator',
    title: 'Carrying Capacity Calculator',
    slug: 'carrying-capacity-calculator',
    description: 'Calculate carrying capacity for a population based on available resources and a simple per-individual resource assumption.',
    category: 'biology',
    subcategory: 'ecology',
    authorId: 'dr-jane-watson',
    component: CarryingCapacityCalculator,
    content: CarryingCapacityCalculatorContent,
    meta: {
      title: 'Carrying Capacity Calculator — Ecology Tools',
      description: 'Estimate the carrying capacity (K) of a population using available resources and a simple resource-per-individual assumption. Useful for quick ecological assessments and teaching.',
      keywords: ["carrying capacity","ecology","population","resources","logistic growth","biology calculator"],
    },
  },
  {
    id: 'biodiversity-calculator',
    title: 'Biodiversity Calculator',
    slug: 'biodiversity-calculator',
    description: 'Calculate biodiversity indices (Shannon, Simpson) from species counts. Useful for ecology and conservation studies.',
    category: 'biology',
    subcategory: 'ecology',
    authorId: 'dr-jane-watson',
    component: BiodiversityCalculator,
    content: BiodiversityCalculatorContent,
    meta: {
      title: 'Biodiversity Calculator — Shannon & Simpson Indices',
      description: 'Compute Shannon\'s and Simpson\'s biodiversity indices from comma-separated species counts. View species richness, total individuals and abundance chart.',
      keywords: ["biodiversity","Shannon index","Simpson index","species richness","ecology","diversity","conservation"],
    },
  },
  {
    id: 'cell-count-calculator',
    title: 'Cell Count Calculator',
    slug: 'cell-count-calculator',
    description: 'Calculate cell concentration from dilution series. Computes cells/mL and cells/L from cells counted, dilution factor, and counted volume.',
    category: 'biology',
    subcategory: 'microbiology',
    authorId: 'dr-jane-watson',
    component: CellCountCalculator,
    content: CellCountCalculatorContent,
    meta: {
      title: 'Cell Count Calculator — Compute Cells per mL and Cells per L',
      description: 'Use this Cell Count Calculator to determine cell concentrations from dilution series. Enter cells counted, dilution factor, and volume (mL) to get cells/mL and cells/L instantly.',
      keywords: ["cell concentration","cells per mL","cells per L","dilution factor","hemocytometer","microbiology","cell count calculator"],
    },
  },
  {
    id: 'dilution-calculator',
    title: 'Dilution Calculator',
    slug: 'dilution-calculator',
    description: 'Calculate dilution ratios and concentrations.',
    category: 'biology',
    subcategory: 'microbiology',
    authorId: 'dr-jane-watson',
    component: DilutionCalculator,
    content: DilutionCalculatorContent,
    meta: {
      title: 'Dilution Calculator — C1V1 = C2V2 | Microbiology Tools',
      description: 'Quickly compute required stock volume, diluent volume, and dilution factor using the C1V1 = C2V2 formula. Ideal for microbiology and lab workflows.',
      keywords: ["dilution","C1V1","C2V2","dilution calculator","concentration","microbiology","laboratory"],
    },
  },
  {
    id: 'ph-calculator',
    title: 'pH Calculator',
    slug: 'ph-calculator',
    description: 'Calculate pH from hydrogen ion concentration.',
    category: 'biology',
    subcategory: 'microbiology',
    authorId: 'dr-jane-watson',
    component: PHCalculator,
    content: PHCalculatorContent,
    meta: {
      title: 'pH Calculator — Convert [H+] to pH | Microbiology Tools',
      description: 'Instantly calculate the pH of a solution from hydrogen ion concentration ([H+] in M). Useful for lab prep, titrations, and buffer calculations.',
      keywords: ["pH calculator","hydrogen ion concentration","H+ concentration","pH from concentration","microbiology tools","chemistry calculator"],
    },
  },
  {
    id: 'osmolarity-calculator',
    title: 'Osmolarity Calculator',
    slug: 'osmolarity-calculator',
    description: 'Calculate osmolarity of solutions.',
    category: 'biology',
    subcategory: 'microbiology',
    authorId: 'dr-jane-watson',
    component: OsmolarityCalculator,
    content: OsmolarityCalculatorContent,
    meta: {
      title: 'Osmolarity Calculator — Microbiology Tools',
      description: 'Compute osmolarity (Osm/L) from molarity and the number of particles per molecule. Useful for lab preparations, media formulation, and microbiology experiments.',
      keywords: ["osmolarity","molarity","osmoles","osmotic","microbiology","biology","calculator"],
    },
  },
  {
    id: 'enzyme-kinetics-calculator',
    title: 'Enzyme Kinetics Calculator',
    slug: 'enzyme-kinetics-calculator',
    description: 'Calculate enzyme kinetics parameters (Km, Vmax). Estimate Km from observed reaction rates using the Michaelis-Menten equation and visualize the Michaelis-Menten curve.',
    category: 'biology',
    subcategory: 'microbiology',
    authorId: 'dr-jane-watson',
    component: EnzymeKineticsCalculator,
    content: EnzymeKineticsCalculatorContent,
    meta: {
      title: 'Enzyme Kinetics Calculator — Estimate Km from Michaelis-Menten',
      description: 'Estimate the Michaelis constant (Km) using substrate concentration, observed reaction rate, and Vmax. Visualize the Michaelis-Menten curve and download results as PDF.',
      keywords: ["enzyme kinetics","Km calculator","Michaelis-Menten","Vmax","substrate concentration","microbiology","biochemistry","enzyme kinetics calculator"],
    },
  },
  {
    id: 'half-life-calculator',
    title: 'Half-Life Calculator',
    slug: 'half-life-calculator',
    description: 'Calculate half-life for biological processes using initial and final amounts over a given time period.',
    category: 'biology',
    subcategory: 'microbiology',
    authorId: 'dr-jane-watson',
    component: HalfLifeCalculator,
    content: HalfLifeCalculatorContent,
    meta: {
      title: 'Half-Life Calculator - Microbiology Tools',
      description: 'Compute the half-life for biological exponential decay processes. Enter initial amount, final amount, and time to get the half-life (same units as time).',
      keywords: ["half-life","half life calculator","exponential decay","microbiology","biological kinetics","pharmacokinetics","decay rate"],
    },
  },
  {
    id: 'respiration-rate-calculator',
    title: 'Respiration Rate Calculator',
    slug: 'respiration-rate-calculator',
    description: 'Calculate cellular respiration rates.',
    category: 'biology',
    subcategory: 'microbiology',
    authorId: 'dr-jane-watson',
    component: RespirationRateCalculator,
    content: RespirationRateCalculatorContent,
    meta: {
      title: 'Respiration Rate Calculator — Cellular Oxygen Consumption',
      description: 'Compute cellular respiration rates (mL O2/min and mL O2/(g·min)) from oxygen consumed, time, and sample weight. Instant calculations with charts and PDF export.',
      keywords: ["respiration rate","cellular respiration","oxygen consumption","microbiology calculator","metabolic rate","mL per minute","mL per gram"],
    },
  },
  {
    id: 'mole-calculator',
    title: 'Mole Calculator',
    slug: 'mole-calculator',
    description: 'Calculate number of moles from mass and molar mass.',
    category: 'chemistry',
    subcategory: 'stoichiometry',
    authorId: 'prof-marie-curie',
    component: MoleCalculator,
    content: MoleCalculatorContent,
    meta: {
      title: 'Mole Calculator — Calculate moles from mass and molar mass',
      description: 'Quickly compute the number of moles from a given mass (g) and molar mass (g/mol). Useful for stoichiometry, solution preparation, and lab calculations.',
      keywords: ["mole calculator","moles","molar mass","stoichiometry","chemistry calculator","mass to moles"],
    },
  },
  {
    id: 'molarity-calculator',
    title: 'Molarity Calculator',
    slug: 'molarity-calculator',
    description: 'Calculate molarity (concentration) of solutions.',
    category: 'chemistry',
    subcategory: 'stoichiometry',
    authorId: 'prof-marie-curie',
    component: MolarityCalculator,
    content: MolarityCalculatorContent,
    meta: {
      title: 'Molarity Calculator - Chemistry Stoichiometry Tool',
      description: 'Quickly calculate the molarity (mol/L) of a solution by entering moles of solute and solution volume. Supports automatic unit conversion for volume (L, mL, µL).',
      keywords: ["molarity","concentration","chemistry calculator","stoichiometry","mol/L","solution concentration"],
    },
  },
  {
    id: 'molality-calculator',
    title: 'Molality Calculator',
    slug: 'molality-calculator',
    description: 'Calculate molality (moles per kg solvent).',
    category: 'chemistry',
    subcategory: 'stoichiometry',
    authorId: 'prof-marie-curie',
    component: MolalityCalculator,
    content: MolalityCalculatorContent,
    meta: {
      title: 'Molality Calculator — Chemistry Stoichiometry Tool',
      description: 'Quickly calculate molality (moles of solute per kilogram of solvent). Enter the moles of solute and solvent mass in kg to get instant results and downloadable PDF summaries.',
      keywords: ["molality","molality calculator","chemistry","stoichiometry","moles per kilogram","solution concentration"],
    },
  },
  {
    id: 'stoichiometry-calculator',
    title: 'Stoichiometry Calculator',
    slug: 'stoichiometry-calculator',
    description: 'Calculate reactant and product amounts in chemical reactions.',
    category: 'chemistry',
    subcategory: 'stoichiometry',
    authorId: 'prof-marie-curie',
    component: StoichiometryCalculator,
    content: StoichiometryCalculatorContent,
    meta: {
      title: 'Stoichiometry Calculator — Chemistry Tools',
      description: 'Use the Stoichiometry Calculator to compute product masses from a given reactant mass using balanced chemical equations and molar masses.',
      keywords: ["stoichiometry","chemistry calculator","molar mass","reaction stoichiometry","chemical reaction calculator"],
    },
  },
  {
    id: 'percent-composition-calculator',
    title: 'Percent Composition Calculator',
    slug: 'percent-composition-calculator',
    description: 'Calculate percent composition by mass of elements in compounds.',
    category: 'chemistry',
    subcategory: 'stoichiometry',
    authorId: 'prof-marie-curie',
    component: PercentCompositionCalculator,
    content: PercentCompositionCalculatorContent,
    meta: {
      title: 'Percent Composition Calculator — Chemistry Stoichiometry Tool',
      description: 'Compute percent composition by mass for elements in chemical formulas. Supports nested parentheses and common element symbols. Instant calculations and PDF export.',
      keywords: ["percent composition","molar mass","chemical formula","stoichiometry","chemistry calculator","element percent","percent composition calculator"],
    },
  },
  {
    id: 'empirical-formula-calculator',
    title: 'Empirical Formula Calculator',
    slug: 'empirical-formula-calculator',
    description: 'Calculate empirical formula from percent composition.',
    category: 'chemistry',
    subcategory: 'stoichiometry',
    authorId: 'prof-marie-curie',
    component: EmpiricalFormulaCalculator,
    content: EmpiricalFormulaCalculatorContent,
    meta: {
      title: 'Empirical Formula Calculator — Determine Empirical Formulas from Percent Composition',
      description: 'Compute the empirical formula of a compound using percent composition. Enter element symbols and their percent by mass to get the simplest whole-number formula and a mole breakdown.',
      keywords: ["empirical formula","percent composition","stoichiometry","chemistry calculator","mole ratios","empirical formula calculator"],
    },
  },
  {
    id: 'molecular-formula-calculator',
    title: 'Molecular Formula Calculator',
    slug: 'molecular-formula-calculator',
    description: 'Calculate the molecular formula from an empirical formula and molecular mass. Enter an empirical formula (e.g., CH2O) and the molecular mass in g/mol to determine the molecular formula and element breakdown.',
    category: 'chemistry',
    subcategory: 'stoichiometry',
    authorId: 'prof-marie-curie',
    component: MolecularFormulaCalculator,
    content: MolecularFormulaCalculatorContent,
    meta: {
      title: 'Molecular Formula Calculator — Determine Molecular Formula from Empirical Formula and Mass',
      description: 'Use this Molecular Formula Calculator to convert an empirical formula and molecular mass (g/mol) into a full molecular formula. Ideal for chemistry students and researchers working on stoichiometry and structural analysis.',
      keywords: ["molecular formula","empirical formula","molecular mass","stoichiometry","chemistry calculator","molecular formula calculator"],
    },
  },
  {
    id: 'solution-concentration-calculator',
    title: 'Solution Concentration Calculator',
    slug: 'solution-concentration-calculator',
    description: 'Calculate solution concentration in various units (M, g/L, % w/v, ppm) from solute mass, solution volume, and molar mass.',
    category: 'chemistry',
    subcategory: 'solutions',
    authorId: 'prof-marie-curie',
    component: SolutionConcentrationCalculator,
    content: SolutionConcentrationCalculatorContent,
    meta: {
      title: 'Solution Concentration Calculator — Chemistry Tools',
      description: 'Compute molarity, mass concentration (g/L), percent (w/v), and approximate ppm from solute mass, solution volume, and molar mass. Instant results and PDF export.',
      keywords: ["solution concentration","molarity calculator","g/L","percent w/v","ppm","chemistry calculator","solute mass","molar mass"],
    },
  },
  {
    id: 'dilution-calculator-chemistry',
    title: 'Dilution Calculator (Chemistry)',
    slug: 'dilution-calculator-chemistry',
    description: 'Calculate dilution volumes for solutions using the dilution equation C1V1 = C2V2.',
    category: 'chemistry',
    subcategory: 'solutions',
    authorId: 'prof-marie-curie',
    component: DilutionCalculatorChemistry,
    content: DilutionCalculatorChemistryContent,
    meta: {
      title: 'Dilution Calculator — Chemistry | Prepare Solutions with C1V1 = C2V2',
      description: 'Use this dilution calculator to determine the volume of concentrated stock required to make a diluted solution. Enter initial concentration (C1), desired final concentration (C2), and final volume (V2).',
      keywords: ["dilution calculator","chemistry calculator","C1V1 C2V2","solution dilution","prepare solutions","laboratory calculations"],
    },
  },
  {
    id: 'ph-calculator-chemistry',
    title: 'pH & pOH Calculator',
    slug: 'ph-calculator-chemistry',
    description: 'Calculate pH and pOH of aqueous solutions from hydrogen ion concentration (H+). Assumes Kw = 1e-14 at 25°C.',
    category: 'chemistry',
    subcategory: 'solutions',
    authorId: 'prof-marie-curie',
    component: PHCalculatorChemistry,
    content: PHCalculatorChemistryContent,
    meta: {
      title: 'pH & pOH Calculator — Chemistry | Solutions',
      description: 'Compute the pH and pOH of aqueous solutions quickly by entering the hydrogen ion concentration [H+]. Includes automatic calculation, charts, and PDF export.',
      keywords: ["pH calculator","pOH calculator","hydrogen ion concentration","Kw","chemistry","solutions","pH pOH converter"],
    },
  },
  {
    id: 'buffer-calculator',
    title: 'Buffer pH Calculator',
    slug: 'buffer-calculator',
    description: 'Calculate buffer pH using Henderson-Hasselbalch equation for solutions. Input pKa and concentrations of conjugate base [A-] and weak acid [HA] to compute pH or pOH.',
    category: 'chemistry',
    subcategory: 'solutions',
    authorId: 'prof-marie-curie',
    component: BufferCalculator,
    content: BufferCalculatorContent,
    meta: {
      title: 'Buffer pH Calculator — Henderson-Hasselbalch Equation',
      description: 'Interactive Buffer pH Calculator using the Henderson-Hasselbalch equation. Compute pH or pOH from pKa and concentrations of [A-] and [HA]. Includes charts and PDF export.',
      keywords: ["buffer pH","Henderson-Hasselbalch","buffer calculator","pKa","pH calculation","chemistry tools"],
    },
  },
  {
    id: 'titration-calculator',
    title: 'Titration Calculator',
    slug: 'titration-calculator',
    description: 'Calculate titration volumes and equivalence points for monoprotic acid-base titrations.',
    category: 'chemistry',
    subcategory: 'solutions',
    authorId: 'prof-marie-curie',
    component: TitrationCalculator,
    content: TitrationCalculatorContent,
    meta: {
      title: 'Titration Calculator — Equivalence Point & Volume Calculator',
      description: 'Compute moles of acid and the volume of base required to reach the equivalence point for monoprotic titrations. Supports acid volume in mL or L and automatic PDF export.',
      keywords: ["titration","equivalence point","acid base titration","titration calculator","chemistry","solutions","moles","volume calculation"],
    },
  },
  {
    id: 'enthalpy-calculator',
    title: 'Enthalpy Calculator',
    slug: 'enthalpy-calculator',
    description: 'Calculate enthalpy change in chemical reactions. Enter total heat (J) and moles to get ΔH in J/mol or kJ/mol.',
    category: 'chemistry',
    subcategory: 'thermodynamics',
    authorId: 'prof-marie-curie',
    component: EnthalpyCalculator,
    content: EnthalpyCalculatorContent,
    meta: {
      title: 'Enthalpy Calculator — ΔH per mole (J/mol, kJ/mol)',
      description: 'Compute the molar enthalpy change (ΔH) from total heat and moles. Supports J/mol and kJ/mol with instant calculation and downloadable PDF report.',
      keywords: ["enthalpy","ΔH","enthalpy calculator","thermodynamics","chemistry calculator","J/mol","kJ/mol"],
    },
  },
  {
    id: 'entropy-calculator',
    title: 'Entropy Calculator',
    slug: 'entropy-calculator',
    description: 'Calculate entropy change.',
    category: 'chemistry',
    subcategory: 'thermodynamics',
    authorId: 'prof-marie-curie',
    component: EntropyCalculator,
    content: EntropyCalculatorContent,
    meta: {
      title: 'Entropy Calculator — ΔS = Q / T | Thermodynamics Tool',
      description: 'Compute entropy change (ΔS) for reversible processes using heat (J) and temperature (K). Ideal for students and engineers doing quick thermodynamics checks.',
      keywords: ["entropy calculator","ΔS","thermodynamics","entropy change","heat","temperature","J/K"],
    },
  },
  {
    id: 'gibbs-free-energy-calculator',
    title: 'Gibbs Free Energy Calculator',
    slug: 'gibbs-free-energy-calculator',
    description: 'Calculate Gibbs free energy using ΔG = ΔH - TΔS with enthalpy (kJ/mol), entropy (J/mol·K), and temperature (K).',
    category: 'chemistry',
    subcategory: 'thermodynamics',
    authorId: 'prof-marie-curie',
    component: GibbsFreeEnergyCalculator,
    content: GibbsFreeEnergyCalculatorContent,
    meta: {
      title: 'Gibbs Free Energy Calculator — ΔG = ΔH − TΔS',
      description: 'Compute Gibbs free energy for chemical reactions. Enter enthalpy (kJ/mol), entropy (J/mol·K), and temperature (K) to get ΔG. Includes charting and PDF export.',
      keywords: ["Gibbs free energy","ΔG calculator","Gibbs energy","thermodynamics","enthalpy","entropy","chemical spontaneity","pdf export","recharts"],
    },
  },
  {
    id: 'reaction-rate-calculator',
    title: 'Reaction Rate Calculator',
    slug: 'reaction-rate-calculator',
    description: 'Calculate reaction rates and rate constants.',
    category: 'chemistry',
    subcategory: 'thermodynamics',
    authorId: 'prof-marie-curie',
    component: ReactionRateCalculator,
    content: ReactionRateCalculatorContent,
    meta: {
      title: 'Reaction Rate Calculator — Chemistry Kinetics Tool',
      description: 'Compute average reaction rates (Δ[A]/Δt), pseudo first-order rate constants, and half-lives. Quick and accurate chemistry kinetics estimates.',
      keywords: ["reaction rate","rate constant","chemical kinetics","half-life","average rate","chemistry calculator"],
    },
  },
  {
    id: 'equilibrium-constant-calculator',
    title: 'Equilibrium Constant Calculator',
    slug: 'equilibrium-constant-calculator',
    description: 'Calculate equilibrium constant (K) for reactions.',
    category: 'chemistry',
    subcategory: 'thermodynamics',
    authorId: 'prof-marie-curie',
    component: EquilibriumConstantCalculator,
    content: EquilibriumConstantCalculatorContent,
    meta: {
      title: 'Equilibrium Constant Calculator — Chemistry Tools',
      description: 'Compute equilibrium constants (K) from product and reactant concentrations and stoichiometric coefficients. Supports comma-separated inputs and PDF export.',
      keywords: ["equilibrium constant","K","chemical equilibrium","Kc","concentration","stoichiometric coefficients","chemistry calculator","thermodynamics"],
    },
  },
  {
    id: 'bond-energy-calculator',
    title: 'Bond Energy Calculator',
    slug: 'bond-energy-calculator',
    description: 'Calculate bond energy totals and reaction enthalpy (ΔH) from lists of bonds broken and formed. Enter bond energies as comma-separated values (kJ/mol).',
    category: 'chemistry',
    subcategory: 'organic',
    authorId: 'prof-marie-curie',
    component: BondEnergyCalculator,
    content: BondEnergyCalculatorContent,
    meta: {
      title: 'Bond Energy Calculator — Reaction Enthalpy (ΔH) Estimator',
      description: 'Estimate reaction enthalpy by summing bond energies of bonds broken and bonds formed. Supports comma-separated bond energy lists and exports results to PDF.',
      keywords: ["bond energy","enthalpy","delta H","reaction enthalpy","chemistry calculator","organic chemistry","kJ/mol","bond energies"],
    },
  },
  {
    id: 'marathon-time-calculator',
    title: 'Marathon Time Calculator',
    slug: 'marathon-time-calculator',
    description: 'Calculate estimated marathon time from shorter race times using Riegel\'s formula. Enter a race distance and time to get a predicted marathon finish time and pace.',
    category: 'sports',
    subcategory: 'running',
    authorId: 'coach-johnson',
    component: MarathonTimeCalculator,
    content: MarathonTimeCalculatorContent,
    meta: {
      title: 'Marathon Time Calculator — Predict Your Marathon Finish Time',
      description: 'Estimate your marathon finish time from a shorter race (5K, 10K, half marathon) using Riegel\'s formula. Get predicted finish time and average pace.',
      keywords: ["marathon time calculator","race prediction","running calculator","Riegel formula","marathon pace","finish time estimate"],
    },
  },
  {
    id: '5k-time-calculator',
    title: '5K Time Calculator',
    slug: '5k-time-calculator',
    description: 'Calculate 5K race time predictions using your current pace and training distance (Riegel formula).',
    category: 'sports',
    subcategory: 'running',
    authorId: 'coach-johnson',
    component: FiveKTimeCalculator,
    content: FiveKTimeCalculatorContent,
    meta: {
      title: '5K Time Calculator — Predict Your 5K Race Time',
      description: 'Predict your 5K race time using your current pace (min/km) and a recent training distance. Uses the Riegel formula for reliable race time extrapolation.',
      keywords: ["5k time","5k prediction","race time calculator","running","Riegel formula","pace calculator"],
    },
  },
  {
    id: '10k-time-calculator',
    title: '10K Time Calculator',
    slug: '10k-time-calculator',
    description: 'Calculate 10K race time predictions.',
    category: 'sports',
    subcategory: 'running',
    authorId: 'coach-johnson',
    component: TenKTimeCalculator,
    content: TenKTimeCalculatorContent,
    meta: {
      title: '10K Time Calculator — Predict Your 10K Race Time',
      description: 'Estimate your 10K finish time from a current training pace and distance using a Riegel-based prediction. Includes charts and PDF export.',
      keywords: ["10k","10k time","running","race prediction","Riegel","pace calculator","running pace","race time estimator"],
    },
  },
  {
    id: 'cycling-power-calculator',
    title: 'Cycling Power Calculator',
    slug: 'cycling-power-calculator',
    description: 'Calculate cycling power output from force and velocity (Power = Force × Velocity).',
    category: 'sports',
    subcategory: 'cycling',
    authorId: 'coach-johnson',
    component: CyclingPowerCalculator,
    content: CyclingPowerCalculatorContent,
    meta: {
      title: 'Cycling Power Calculator — Calculate Power from Force and Velocity',
      description: 'Quickly compute cycling power output using force (N) and velocity (m/s). Results update automatically and can be exported as a PDF. Includes charts and practical tips for cyclists and coaches.',
      keywords: ["cycling","power","watts","force","velocity","cycling calculator","sports","performance"],
    },
  },
  {
    id: 'cycling-speed-calculator',
    title: 'Cycling Speed Calculator',
    slug: 'cycling-speed-calculator',
    description: 'Calculate cycling speed from cadence and gear ratio.',
    category: 'sports',
    subcategory: 'cycling',
    authorId: 'coach-johnson',
    component: CyclingSpeedCalculator,
    content: CyclingSpeedCalculatorContent,
    meta: {
      title: 'Cycling Speed Calculator — Estimate Speed from Cadence & Gear Ratio',
      description: 'Estimate your bicycle speed using cadence (rpm), gear ratio, and wheel circumference. Get results in km/h and m/s, view charts, and download a PDF report.',
      keywords: ["cycling speed calculator","cadence to speed","gear ratio speed","wheel circumference","bike speed estimator"],
    },
  },
  {
    id: 'bike-gear-calculator',
    title: 'Bike Gear Calculator',
    slug: 'bike-gear-calculator',
    description: 'Calculate bike gear ratios and gear inches.',
    category: 'sports',
    subcategory: 'cycling',
    authorId: 'coach-johnson',
    component: BikeGearCalculator,
    content: BikeGearCalculatorContent,
    meta: {
      title: 'Bike Gear Calculator — Calculate Gear Ratio & Gear Inches',
      description: 'Calculate gear ratios and gear inches for bicycles. Enter chainring teeth, cog teeth, and wheel diameter to see gear ratio and gear inches instantly, with charts and PDF export.',
      keywords: ["bike gear calculator","gear ratio","gear inches","cycling","chainring","cog","wheel diameter","cycling tools"],
    },
  },
  {
    id: 'cycling-calorie-burn-calculator',
    title: 'Cycling Calorie Burn Calculator',
    slug: 'cycling-calorie-burn-calculator',
    description: 'Calculate calories burned during cycling.',
    category: 'sports',
    subcategory: 'cycling',
    authorId: 'coach-johnson',
    component: CyclingCalorieBurnCalculator,
    content: CyclingCalorieBurnCalculatorContent,
    meta: {
      title: 'Cycling Calorie Burn Calculator - Calculate Calories Burned',
      description: 'Estimate how many calories you burn while cycling based on weight, duration, and average speed. Uses MET values to provide quick and practical estimates.',
      keywords: ["cycling calories","calorie burn calculator","cycling calorie calculator","MET cycling","bike calories"],
    },
  },
  {
    id: 'volume-calculator-strength',
    title: 'Strength Training Volume Calculator',
    slug: 'volume-calculator-strength',
    description: 'Calculate training volume for strength training.',
    category: 'sports',
    subcategory: 'strength',
    authorId: 'trainer-maria',
    component: VolumeCalculatorStrength,
    content: VolumeCalculatorStrengthContent,
    meta: {
      title: 'Strength Training Volume Calculator — Calculate Sets × Reps × Weight',
      description: 'Quickly calculate training volume (kg) for strength exercises by multiplying sets, reps, and weight. Export results to PDF and visualize volume.',
      keywords: ["strength training","training volume","sets reps weight","volume calculator","strength calculator","workload"],
    },
  },
  {
    id: 'rest-period-calculator',
    title: 'Rest Period Calculator',
    slug: 'rest-period-calculator',
    description: 'Calculate optimal rest periods between sets based on exercise type and intensity (% of 1RM).',
    category: 'sports',
    subcategory: 'strength',
    authorId: 'trainer-maria',
    component: RestPeriodCalculator,
    content: RestPeriodCalculatorContent,
    meta: {
      title: 'Rest Period Calculator — Optimal Rest Between Sets',
      description: 'Estimate recommended rest periods between sets for strength, hypertrophy, and endurance training. Adjust by intensity (% of 1RM) to personalize recovery time.',
      keywords: ["rest period","rest between sets","1RM","strength training","hypertrophy","endurance","workout recovery","training rest calculator"],
    },
  },
  {
    id: 'progressive-overload-calculator',
    title: 'Progressive Overload Calculator',
    slug: 'progressive-overload-calculator',
    description: 'Calculate progressive overload increments.',
    category: 'sports',
    subcategory: 'strength',
    authorId: 'trainer-maria',
    component: ProgressiveOverloadCalculator,
    content: ProgressiveOverloadCalculatorContent,
    meta: {
      title: 'Progressive Overload Calculator — Strength Training Increment Planner',
      description: 'Instantly calculate progressive overload increments. Enter your current working weight and desired increment percentage to get the increase amount and new target weight. Includes charts and PDF export.',
      keywords: ["progressive overload","strength training","weight increment","training progression","calculator","increment percentage","fitness"],
    },
  },
  {
    id: 'baseball-stats-calculator',
    title: 'Baseball Stats Calculator',
    slug: 'baseball-stats-calculator',
    description: 'Calculate baseball statistics like batting average, hits per 100 at-bats, and projected hits over a 600 AB season.',
    category: 'sports',
    subcategory: 'team-sports',
    authorId: 'coach-johnson',
    component: BaseballStatsCalculator,
    content: BaseballStatsCalculatorContent,
    meta: {
      title: 'Baseball Stats Calculator — Batting Average & Projections',
      description: 'Quickly compute batting average (AVG), hits per 100 at-bats, and projected hits for a 600 at-bat season. Ideal for coaches and analysts.',
      keywords: ["baseball","batting average","AVG","baseball calculator","hits","at-bats","sports calculator","player projections"],
    },
  },
  {
    id: 'basketball-stats-calculator',
    title: 'Basketball Stats Calculator',
    slug: 'basketball-stats-calculator',
    description: 'Calculate basketball statistics such as field goal percentage from field goals made and attempted.',
    category: 'sports',
    subcategory: 'team-sports',
    authorId: 'coach-johnson',
    component: BasketballStatsCalculator,
    content: BasketballStatsCalculatorContent,
    meta: {
      title: 'Basketball Stats Calculator — Field Goal Percentage (FG%)',
      description: 'Compute field goal percentage quickly by entering field goals made and attempted. Auto-calculates results and provides visualization and PDF export.',
      keywords: ["basketball calculator","field goal percentage","FG%","basketball stats","shooting efficiency","team stats"],
    },
  },
  {
    id: 'football-stats-calculator',
    title: 'Football Stats Calculator',
    slug: 'football-stats-calculator',
    description: 'Calculate football statistics (completion percentage and completion decimal) based on completions and pass attempts.',
    category: 'sports',
    subcategory: 'team-sports',
    authorId: 'coach-johnson',
    component: FootballStatsCalculator,
    content: FootballStatsCalculatorContent,
    meta: {
      title: 'Football Completion Percentage Calculator — Football Stats Calculator',
      description: 'Quickly calculate completion percentage and completion decimal using completions and pass attempts. Ideal for coaches, analysts, and fans.',
      keywords: ["football calculator","completion percentage","pass attempts","completions","football stats","sports calculator"],
    },
  },
  {
    id: 'golf-handicap-calculator',
    title: 'Golf Handicap Calculator',
    slug: 'golf-handicap-calculator',
    description: 'Calculate golf handicap index.',
    category: 'sports',
    subcategory: 'team-sports',
    authorId: 'coach-johnson',
    component: GolfHandicapCalculator,
    content: GolfHandicapCalculatorContent,
    meta: {
      title: 'Golf Handicap Calculator — Estimate Your Handicap Index',
      description: 'Estimate your golf handicap index using recent scores, course rating, and slope rating. Learn how differentials are calculated and view a breakdown of selected differentials.',
      keywords: ["golf handicap","handicap index","golf calculator","course rating","slope rating","score differential"],
    },
  },
  {
    id: 'tennis-serve-speed-calculator',
    title: 'Tennis Serve Speed Calculator',
    slug: 'tennis-serve-speed-calculator',
    description: 'Calculate tennis serve speed from distance and time.',
    category: 'sports',
    subcategory: 'team-sports',
    authorId: 'coach-johnson',
    component: TennisServeSpeedCalculator,
    content: TennisServeSpeedCalculatorContent,
    meta: {
      title: 'Tennis Serve Speed Calculator — Calculate Serve Velocity (m/s & km/h)',
      description: 'Quickly calculate tennis serve speed from distance (meters) and time (seconds). Shows base speed in m/s and converted speed in km/h, includes charts and PDF export.',
      keywords: ["tennis serve speed","serve speed calculator","m/s to km/h","sports calculator","tennis metrics"],
    },
  },
  {
    id: 'swimming-pace-calculator',
    title: 'Swimming Pace Calculator',
    slug: 'swimming-pace-calculator',
    description: 'Calculate swimming pace per 100m and generate split times for 50m segments. Enter distance (meters) and total time (seconds) to auto-calculate pace and splits.',
    category: 'sports',
    subcategory: 'other',
    authorId: 'trainer-maria',
    component: SwimmingPaceCalculator,
    content: SwimmingPaceCalculatorContent,
    meta: {
      title: 'Swimming Pace Calculator — Pace per 100m & Splits',
      description: 'Determine your swimming pace per 100m and view split times for 50m segments. Automatically updates as you change distance and time. Download results as a PDF.',
      keywords: ["swimming pace","pace per 100m","swim splits","swimming calculator","swim training","swim pace calculator"],
    },
  },
  {
    id: 'food-cost-calculator',
    title: 'Food Cost Calculator',
    slug: 'food-cost-calculator',
    description: 'Calculate food cost per serving and profit margins.',
    category: 'food',
    subcategory: 'nutrition',
    authorId: 'nutritionist-amy',
    component: FoodCostCalculator,
    content: FoodCostCalculatorContent,
    meta: {
      title: 'Food Cost Calculator — Calculate Cost per Serving & Profit Margins',
      description: 'Use this Food Cost Calculator to compute cost per serving, profit per serving, and profit margins. Ideal for chefs, caterers, and restaurant owners.',
      keywords: ["food cost calculator","cost per serving","profit margin","menu pricing","recipe costing","food pricing"],
    },
  },
  {
    id: 'nutrition-label-calculator',
    title: 'Nutrition Label Calculator',
    slug: 'nutrition-label-calculator',
    description: 'Calculate nutrition facts per serving.',
    category: 'food',
    subcategory: 'nutrition',
    authorId: 'nutritionist-amy',
    component: NutritionLabelCalculator,
    content: NutritionLabelCalculatorContent,
    meta: {
      title: 'Nutrition Label Calculator — Per Serving Nutrition Facts',
      description: 'Calculate calories, protein, carbs, fat per serving and view calorie breakdown from macronutrients. Ideal for recipe nutrition labeling and meal planning.',
      keywords: ["nutrition label","calories per serving","protein per serving","carbs per serving","fat per serving","nutrition calculator","recipe nutrition"],
    },
  },
  {
    id: 'recipe-converter',
    title: 'Recipe Converter',
    slug: 'recipe-converter',
    description: 'Convert recipe measurements and serving sizes.',
    category: 'food',
    subcategory: 'recipe',
    authorId: 'chef-gordon',
    component: RecipeConverter,
    content: RecipeConverterContent,
    meta: {
      title: 'Recipe Converter — Scale Ingredients & Convert Units',
      description: 'Scale ingredient amounts between different serving sizes and view equivalents across cups, tablespoons, and teaspoons. Perfect for cooking and baking adjustments.',
      keywords: ["recipe converter","scale recipe","ingredient converter","cups to tbsp","tablespoons to teaspoons","serving size calculator","cooking conversion"],
    },
  },
  {
    id: 'cooking-measurement-converter',
    title: 'Cooking Measurement Converter',
    slug: 'cooking-measurement-converter',
    description: 'Convert between cups, tablespoons, and teaspoons for everyday cooking measurements.',
    category: 'food',
    subcategory: 'conversions',
    authorId: 'chef-gordon',
    component: CookingMeasurementConverter,
    content: CookingMeasurementConverterContent,
    meta: {
      title: 'Cooking Measurement Converter — Cups, Tablespoons & Teaspoons',
      description: 'Quickly convert cooking measurements between cups, tablespoons, and teaspoons. Auto-calculating converter with charts and PDF export.',
      keywords: ["cooking","conversion","cup to tablespoon","tablespoon to teaspoon","cup to tsp","measurement converter","recipe conversions"],
    },
  },
  {
    id: 'calorie-density-calculator',
    title: 'Calorie Density Calculator',
    slug: 'calorie-density-calculator',
    description: 'Calculate calorie density (kcal per gram and per 100g) of foods for meal planning and portion control.',
    category: 'food',
    subcategory: 'other',
    authorId: 'nutritionist-amy',
    component: CalorieDensityCalculator,
    content: CalorieDensityCalculatorContent,
    meta: {
      title: 'Calorie Density Calculator — kcal per gram & per 100g',
      description: 'Quickly calculate calorie density of foods. Get kcal per gram and kcal per 100g to compare foods, plan portions, and make healthier choices.',
      keywords: ["calorie density","kcal per gram","kcal per 100g","food nutrition","portion control","calories per gram"],
    },
  },
  {
    id: 'food-waste-calculator',
    title: 'Food Waste Calculator',
    slug: 'food-waste-calculator',
    description: 'Calculate food waste, wasted cost, and potential cost savings from different reduction scenarios.',
    category: 'food',
    subcategory: 'other',
    authorId: 'nutritionist-amy',
    component: FoodWasteCalculator,
    content: FoodWasteCalculatorContent,
    meta: {
      title: 'Food Waste Calculator — Estimate Wasted Food and Cost Savings',
      description: 'Use this Food Waste Calculator to quickly estimate kilograms of wasted food, the monetary cost of that waste, and potential savings from reduction scenarios like 25%, 50%, or 100% reduction.',
      keywords: ["food waste calculator","food waste","food waste reduction","cost savings","kg wasted","sustainability","nutritionist"],
    },
  },
  {
    id: 'carbon-footprint-calculator',
    title: 'Carbon Footprint Calculator',
    slug: 'carbon-footprint-calculator',
    description: 'Calculate personal or household carbon footprint.',
    category: 'ecology',
    subcategory: 'carbon',
    authorId: 'dr-green',
    component: CarbonFootprintCalculator,
    content: CarbonFootprintCalculatorContent,
    meta: {
      title: 'Carbon Footprint Calculator — Estimate Your Household Emissions',
      description: 'Estimate monthly and annual CO₂ emissions from electricity, natural gas, and driving. Get a breakdown and download a PDF report.',
      keywords: ["carbon footprint","CO2 calculator","emissions calculator","household carbon","ecology","carbon"],
    },
  },
  {
    id: 'water-usage-calculator',
    title: 'Water Usage Calculator',
    slug: 'water-usage-calculator',
    description: 'Calculate daily and annual water usage.',
    category: 'ecology',
    subcategory: 'water',
    authorId: 'dr-green',
    component: WaterUsageCalculator,
    content: WaterUsageCalculatorContent,
    meta: {
      title: 'Water Usage Calculator — Estimate Daily & Annual Water Consumption',
      description: 'Estimate your household\'s daily and annual water usage from showers, laundry, and dishwasher runs. Convert results between liters and gallons and download a PDF summary.',
      keywords: ["water usage","water calculator","daily water use","annual water use","water conservation","showers","laundry","dishwasher","liters","gallons"],
    },
  },
  {
    id: 'energy-consumption-calculator',
    title: 'Energy Consumption Calculator',
    slug: 'energy-consumption-calculator',
    description: 'Calculate household energy consumption and costs.',
    category: 'ecology',
    subcategory: 'energy',
    authorId: 'eco-expert-sam',
    component: EnergyConsumptionCalculator,
    content: EnergyConsumptionCalculatorContent,
    meta: {
      title: 'Energy Consumption Calculator — Estimate Household kWh & Cost',
      description: 'Estimate daily, monthly, and annual household energy usage (kWh) and costs using number of appliances, average wattage, hours of use, and electricity rate.',
      keywords: ["energy calculator","household energy","kWh calculator","electricity cost","energy consumption","eco","sustainability"],
    },
  },
  {
    id: 'recycling-calculator',
    title: 'Recycling Impact Calculator',
    slug: 'recycling-calculator',
    description: 'Calculate recycling impact and waste reduction.',
    category: 'ecology',
    subcategory: 'waste',
    authorId: 'eco-expert-sam',
    component: RecyclingCalculator,
    content: RecyclingCalculatorContent,
    meta: {
      title: 'Recycling Impact Calculator — Estimate Waste Diversion & CO2 Savings',
      description: 'Use the Recycling Impact Calculator to estimate how much waste you divert from landfill based on weekly waste generation and recycling rate. See annual totals and an estimated CO2 savings.',
      keywords: ["recycling calculator","waste reduction","recycling impact","CO2 savings","ecology","sustainability","waste management"],
    },
  },
  {
    id: 'compost-calculator',
    title: 'Compost Calculator',
    slug: 'compost-calculator',
    description: 'Calculate compost production and benefits.',
    category: 'ecology',
    subcategory: 'waste',
    authorId: 'eco-expert-sam',
    component: CompostCalculator,
    content: CompostCalculatorContent,
    meta: {
      title: 'Compost Calculator – Estimate Compost Production & GHG Benefits',
      description: 'Estimate how much compost you can produce from weekly food and yard waste, and see estimated annual greenhouse gas reductions from diverting organics from landfill.',
      keywords: ["compost calculator","compost production","food waste","yard waste","waste diversion","greenhouse gas reduction","ecology","sustainability"],
    },
  },
  {
    id: 'solar-panel-calculator',
    title: 'Solar Panel Calculator',
    slug: 'solar-panel-calculator',
    description: 'Calculate solar panel requirements and savings.',
    category: 'ecology',
    subcategory: 'energy',
    authorId: 'eco-expert-sam',
    component: SolarPanelCalculator,
    content: SolarPanelCalculatorContent,
    meta: {
      title: 'Solar Panel Calculator — Estimate Panels, Production & Savings',
      description: 'Estimate how many solar panels you need based on monthly electricity usage, available roof area, and average sunlight hours. Get production estimates, required area, and savings.',
      keywords: ["solar calculator","solar panels","solar panel estimate","renewable energy","solar savings","roof area solar"],
    },
  },
  {
    id: 'wind-energy-calculator',
    title: 'Wind Energy Calculator',
    slug: 'wind-energy-calculator',
    description: 'Calculate wind energy potential and generation based on average wind speed, turbine diameter, and turbine efficiency.',
    category: 'ecology',
    subcategory: 'energy',
    authorId: 'eco-expert-sam',
    component: WindEnergyCalculator,
    content: WindEnergyCalculatorContent,
    meta: {
      title: 'Wind Energy Calculator — Estimate Wind Power & Annual Generation',
      description: 'Estimate the power available in the wind and the portion a turbine can extract. Enter wind speed (m/s), turbine diameter (m), and efficiency (%) to get power (kW) and estimated annual energy (kWh).',
      keywords: ["wind energy","wind power calculator","turbine energy","renewable energy","wind turbine","wind power estimation"],
    },
  },
  {
    id: 'tree-planting-calculator',
    title: 'Tree Planting Carbon Offset Calculator',
    slug: 'tree-planting-calculator',
    description: 'Calculate carbon offset from tree planting by specifying number of trees, age, and tree species.',
    category: 'ecology',
    subcategory: 'carbon',
    authorId: 'dr-green',
    component: TreePlantingCalculator,
    content: TreePlantingCalculatorContent,
    meta: {
      title: 'Tree Planting Carbon Offset Calculator — Estimate CO₂ Sequestration',
      description: 'Estimate carbon sequestration from tree planting by number of trees, tree age, and species. Get results in kg CO₂ and tonnes CO₂ with charts and PDF export.',
      keywords: ["tree planting","carbon offset","CO2 sequestration","ecology calculator","carbon calculator","tree carbon"],
    },
  },
  {
    id: 'carbon-offset-calculator',
    title: 'Carbon Offset Calculator',
    slug: 'carbon-offset-calculator',
    description: 'Calculate carbon offset needed for activities.',
    category: 'ecology',
    subcategory: 'carbon',
    authorId: 'dr-green',
    component: CarbonOffsetCalculator,
    content: CarbonOffsetCalculatorContent,
    meta: {
      title: 'Carbon Offset Calculator — Estimate CO2 Offsets',
      description: 'Estimate the kilograms or tonnes of CO2 you need to offset for common activities like flights, driving, and electricity usage. Auto-calculates and provides charts and PDF export.',
      keywords: ["carbon offset","CO2 calculator","carbon emissions","offset calculator","flight emissions","driving emissions","electricity emissions"],
    },
  },
  {
    id: 'ecological-footprint-calculator',
    title: 'Ecological Footprint Calculator',
    slug: 'ecological-footprint-calculator',
    description: 'Calculate personal ecological footprint.',
    category: 'ecology',
    subcategory: 'sustainability',
    authorId: 'eco-expert-sam',
    component: EcologicalFootprintCalculator,
    content: EcologicalFootprintCalculatorContent,
    meta: {
      title: 'Ecological Footprint Calculator — Estimate Your Annual Footprint',
      description: 'Estimate your personal ecological footprint (global hectares/year) based on diet, housing, and monthly transportation. Compare lifestyle choices and discover reduction opportunities.',
      keywords: ["ecological footprint","footprint calculator","sustainability","global hectares","diet footprint","housing footprint","transportation footprint"],
    },
  },
  {
    id: 'home-energy-calculator',
    title: 'Home Energy Calculator',
    slug: 'home-energy-calculator',
    description: 'Calculate home energy usage and efficiency.',
    category: 'ecology',
    subcategory: 'energy',
    authorId: 'eco-expert-sam',
    component: HomeEnergyCalculator,
    content: HomeEnergyCalculatorContent,
    meta: {
      title: 'Home Energy Calculator — Estimate Annual Energy Use & Cost',
      description: 'Estimate your home\'s annual energy consumption (kWh) and approximate yearly cost based on square footage, heating type, and insulation quality. Compare options and download results.',
      keywords: ["home energy calculator","energy usage","kWh estimate","heating efficiency","home insulation","energy cost estimate"],
    },
  },
  {
    id: 'transportation-carbon-calculator',
    title: 'Transportation Carbon Calculator',
    slug: 'transportation-carbon-calculator',
    description: 'Calculate carbon emissions from transportation.',
    category: 'ecology',
    subcategory: 'carbon',
    authorId: 'dr-green',
    component: TransportationCarbonCalculator,
    content: TransportationCarbonCalculatorContent,
    meta: {
      title: 'Transportation Carbon Calculator — Estimate Vehicle CO2 Emissions',
      description: 'Estimate annual and per-mile CO2 emissions for gasoline, diesel, and electric vehicles. Enter miles driven, vehicle MPG, and fuel type to get yearly emissions in kg and tonnes.',
      keywords: ["transportation carbon calculator","vehicle emissions","CO2 calculator","carbon footprint","electric vehicle emissions","gasoline emissions","diesel emissions"],
    },
  },
  {
    id: 'food-carbon-calculator',
    title: 'Food Carbon Calculator',
    slug: 'food-carbon-calculator',
    description: 'Calculate carbon footprint of food choices.',
    category: 'ecology',
    subcategory: 'carbon',
    authorId: 'dr-green',
    component: FoodCarbonCalculator,
    content: FoodCarbonCalculatorContent,
    meta: {
      title: 'Food Carbon Calculator — Estimate kg CO2e from Food',
      description: 'Estimate the greenhouse gas emissions (kg CO2e) of different foods. Compare beef, chicken, and vegetables by amount in kilograms.',
      keywords: ["food carbon calculator","food emissions","carbon footprint","kg CO2e","sustainable eating","ecology calculator"],
    },
  },
  {
    id: 'waste-reduction-calculator',
    title: 'Waste Reduction Calculator',
    slug: 'waste-reduction-calculator',
    description: 'Calculate waste reduction impact and savings.',
    category: 'ecology',
    subcategory: 'waste',
    authorId: 'eco-expert-sam',
    component: WasteReductionCalculator,
    content: WasteReductionCalculatorContent,
    meta: {
      title: 'Waste Reduction Calculator — Estimate Weekly & Annual Waste Savings',
      description: 'Use this waste reduction calculator to estimate how much waste you can save per week and per year by reducing your weekly waste by a given percentage. Ideal for households and small businesses.',
      keywords: ["waste reduction","waste calculator","reduce waste","annual waste savings","ecology","sustainability","waste management"],
    },
  },
  {
    id: 'sustainability-score-calculator',
    title: 'Sustainability Score Calculator',
    slug: 'sustainability-score-calculator',
    description: 'Calculate overall sustainability score based on energy efficiency, water conservation, waste reduction, and transportation. Use presets to emphasize different priorities.',
    category: 'ecology',
    subcategory: 'sustainability',
    authorId: 'eco-expert-sam',
    component: SustainabilityScoreCalculator,
    content: SustainabilityScoreCalculatorContent,
    meta: {
      title: 'Sustainability Score Calculator — Ecology Tools',
      description: 'Compute a combined sustainability score (1-10) from energy, water, waste, and transportation scores. Adjustable presets and downloadable PDF report.',
      keywords: ["sustainability score","ecology calculator","environmental score","energy efficiency","water conservation","waste reduction","transportation impact","sustainability"],
    },
  },
];

export function getCalculatorBySlug(slug: string): CalculatorConfig | undefined {
  return calculators.find((calc) => calc.slug === slug);
}

export function getCalculatorsByCategory(category: string): CalculatorConfig[] {
  return calculators.filter((calc) => calc.category === category);
}

export function getCalculatorsBySubcategory(category: string, subcategory: string): CalculatorConfig[] {
  return calculators.filter((calc) => calc.category === category && calc.subcategory === subcategory);
}

export function getCalculatorsByAuthor(authorId: string): CalculatorConfig[] {
  return calculators.filter((calc) => calc.authorId === authorId);
}
