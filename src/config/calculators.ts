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
    faq: [
      { question: 'How do I convert meters to feet?', answer: 'Multiply the number of meters by 3.28084 to get the equivalent in feet. For example, 5 meters × 3.28084 = 16.404 feet.' },
      { question: 'What is the difference between metric and imperial units?', answer: 'The metric system uses base-10 conversions (millimeters, centimeters, meters, kilometers), while the imperial system uses various conversion factors (inches, feet, yards, miles).' },
      { question: 'How many centimeters are in a meter?', answer: 'There are 100 centimeters in 1 meter, which is a base-10 conversion in the metric system.' },
      { question: 'How do I convert kilometers to miles?', answer: 'Multiply kilometers by 0.621371 to get miles. For example, 10 km × 0.621371 = 6.21371 miles.' },
      { question: 'What is the most accurate way to convert length units?', answer: 'Use our online converter for the most accurate results, as it uses precise conversion factors. For manual calculations, always utilize the exact conversion factors rather than approximations.' },
    ],
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
    faq: [
      { question: 'How do I convert kilograms to pounds?', answer: 'Multiply the number of kilograms by 2.20462 to get pounds. For example, 10 kg × 2.20462 = 22.0462 pounds.' },
      { question: 'How many grams are in a kilogram?', answer: 'There are 1,000 grams in 1 kilogram. This is a base-10 conversion in the metric system.' },
      { question: 'What is the difference between weight and mass?', answer: 'Mass is the amount of matter in an object (measured in kg), while weight is the force of gravity on that mass (measured in newtons). In everyday use, we often use "weight" to mean mass.' },
      { question: 'How do I convert ounces to grams?', answer: 'Multiply ounces by 28.3495 to get grams. For example, 16 oz × 28.3495 = 453.592 grams (which equals 1 pound).' },
      { question: 'What is a stone in weight?', answer: 'stone is a British unit of weight equal to 14 pounds or approximately 6.35 kilograms. It\'s commonly used in the UK and Ireland for body weight.' },
      { question: 'Why is it important to convert weight correctly?', answer: 'ccurate weight conversion is crucial for cooking, shipping, health tracking, and scientific research to ensure safety and compliance with requirements.' },
    ],
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
    faq: [
      { question: 'How do I convert Celsius to Fahrenheit?', answer: 'Multiply Celsius by 9/5 and add 32. For example, 25°C × 9/5 + 32 = 77°F.' },
      { question: 'What is absolute zero in different scales?', answer: 'bsolute zero is 0 K, -273.15°C, or -459.67°F. It\'s the theoretical lowest possible temperature where all molecular motion stops.' },
      { question: 'At what temperature do Celsius and Fahrenheit equal each other?', answer: 'Celsius and Fahrenheit are equal at -40 degrees (-40°C = -40°F). This is the only point where both scales have the same numerical value.' },
      { question: 'Why is Kelvin used in science?', answer: 'Kelvin is an absolute scale starting at absolute zero, making it ideal for scientific calculations involving temperature ratios and thermodynamic equations.' },
      { question: 'What is room temperature in different scales?', answer: 'Room temperature is approximately 20-25°C (68-77°F or 293-298 K), though this can vary depending on location and personal preference.' },
    ],
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
    faq: [
      { question: 'How do I convert square meters to square feet?', answer: 'Multiply square meters by 10.7639 to get square feet. For example, 50 m² × 10.7639 = 538.195 ft².' },
      { question: 'How many acres are in a hectare?', answer: 'There are approximately 2.47105 acres in 1 hectare. This is a common conversion in agriculture and land management.' },
      { question: 'What is the difference between an acre and a hectare?', answer: 'n acre is an imperial unit equal to 4,046.86 square meters, while a hectare is a metric unit equal to 10,000 square meters. A hectare is about 2.47 times larger than an acre.' },
      { question: 'How do I convert square feet to square yards?', answer: 'Divide square feet by 9 to get square yards. For example, 90 ft² ÷ 9 = 10 yd².' },
      { question: 'What is a square mile in other units?', answer: '1 square mile equals 2.58999 square kilometers, 640 acres, or 27,878,400 square feet. It\'s used for measuring large areas like cities and counties.' },
    ],
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
    faq: [
      { question: 'How do I convert liters to gallons?', answer: 'Multiply liters by 0.264172 to get US gallons. For example, 10 L × 0.264172 = 2.64172 gallons.' },
      { question: 'How many milliliters are in a liter?', answer: 'There are 1,000 milliliters in 1 liter. This is a base-10 conversion in the metric system.' },
      { question: 'What is the difference between fluid ounces and regular ounces?', answer: 'Fluid ounces measure volume (for liquids), while regular ounces measure weight. 1 fluid ounce of water weighs approximately 1.043 ounces, but this varies by substance.' },
      { question: 'How do I convert cups to milliliters?', answer: 'Multiply cups by 236.588 to get milliliters. For example, 2 cups × 236.588 = 473.176 ml.' },
      { question: 'What is a cubic meter in liters?', answer: '1 cubic meter equals 1,000 liters. This is commonly used in construction, shipping, and industrial applications for large volume measurements.' },
      { question: 'Can you convert volume measurements for international cooking?', answer: 'Yes, our volume converter can help you convert between metric and imperial units, making it easy to follow any recipe from different parts of the world.' },
    ],
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
    faq: [
      { question: 'How do I convert km/h to mph?', answer: 'Multiply km/h by 0.621371 to get mph. For example, 100 km/h × 0.621371 = 62.1371 mph.' },
      { question: 'What is a knot in km/h?', answer: '1 knot equals 1.852 km/h. Knots are commonly used in aviation and maritime navigation.' },
      { question: 'What other units are used in speed measurement?', answer: 'Other than the commonly known units like km/h and mph, speed can also be expressed in feet per second (ft/s) and knots used mainly in marine and aviation contexts.' },
      { question: 'Can I use this speed converter for scientific calculations?', answer: 'Yes, our speed converter is precise and can provide accurate results for scientific calculations involving speed.' },
    ],
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
    faq: [
      { question: 'How many seconds are in an hour?', answer: 'There are 3,600 seconds in 1 hour (60 minutes × 60 seconds).' },
      { question: 'How do I convert days to hours?', answer: 'Multiply days by 24 to get hours. For example, 3 days × 24 = 72 hours.' },
      { question: 'What is the significance of time conversion for businesses?', answer: 'Time conversion is critical for businesses to manage schedules, track project timelines, and optimize work hours efficiently.' },
      { question: 'Can I convert weeks into days easily?', answer: 'Yes, simply multiply the number of weeks by 7 to get the equivalent number of days. For instance, 5 weeks × 7 = 35 days.' },
    ],
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
    faq: [
      { question: 'How do I convert calories to joules?', answer: 'Multiply calories by 4.184 to get joules. For example, 100 cal × 4.184 = 418.4 J.' },
      { question: 'What is the difference between a calorie and a kilocalorie?', answer: 'kilocalorie (kcal) is 1,000 calories. Food labels often use "Calories" (capital C) to mean kilocalories, which can be confusing.' },
      { question: 'Why is energy conversion important?', answer: 'Energy conversion is critical in multiple fields, including engineering, nutrition, and environmental science, as it helps in optimizing energy use and sustainability.' },
      { question: 'Can I convert between unconventional energy units?', answer: 'Yes, our converter supports various units, including unconventional ones, making it versatile for different applications.' },
    ],
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
    faq: [
      { question: 'How do I convert PSI to bars?', answer: 'Multiply PSI by 0.0689476 to get bars. For example, 30 PSI × 0.0689476 = 2.068 bars. Always double-check your calculations for accuracy.' },
      { question: 'What is standard atmospheric pressure?', answer: 'Standard atmospheric pressure at sea level is 101,325 pascals, 1 atmosphere, or approximately 1.01325 bars. Understanding this value is crucial for various scientific calculations.' },
      { question: 'Why is pressure conversion important?', answer: 'Pressure conversion is essential for ensuring accurate measurements while working in scientific, engineering, and medical fields. Errors in pressure readings can lead to severe consequences.' },
      { question: 'Can I convert pressure measurements online?', answer: 'Yes, many online tools are available that can help you quickly convert pressure measurements across various units. Always use reputable websites for accurate results.' },
    ],
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
    faq: [
      { question: 'How many megabytes are in a gigabyte?', answer: 'There are 1,024 megabytes in 1 gigabyte. This uses binary (base-2) conversion, not decimal.' },
      { question: 'Why is 1 GB = 1,024 MB instead of 1,000 MB?', answer: 'Computers use binary (base-2) numbering, so storage units are powers of 2. 2^10 = 1,024, which is why we use 1,024 instead of 1,000.' },
      { question: 'How can I convert data storage units accurately?', answer: 'Using a data storage converter tool is ideal, but understanding the unit factors helps ensure accurate conversion.' },
    ],
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
    faq: [
      { question: 'How accurate is the fuel economy converter?', answer: 'Our converter provides accurate results based on standardized formulas used in the automotive industry.' },
      { question: 'Why do fuel economy measurements matter?', answer: 'They directly influence fuel costs, overall vehicle efficiency, and environmental impact. Choosing a fuel-efficient vehicle can save money and reduce carbon emissions.' },
      { question: 'Can I use the fuel economy converter for hybrid or electric vehicles?', answer: 'Yes, although traditional conversions may vary, our tool aids in understanding equivalent fuel economies for hybrid and electric variants.' },
    ],
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
    faq: [
      { question: 'What are the most common frequency units?', answer: 'The most common frequency units are hertz (Hz), kilohertz (kHz), megahertz (MHz), and gigahertz (GHz). Each unit represents a different scale of frequency measurement.' },
      { question: 'How do I know which frequency unit to use?', answer: 'The choice of frequency unit often depends on the context in which the frequency is being used. For instance, audio frequencies are typically measured in hertz (Hz) or kilohertz (kHz), whereas radio frequencies may be expressed in megahertz (MHz) or gigahertz (GHz).' },
      { question: 'Can I convert frequency units manually?', answer: 'Yes, you can convert frequency units manually using the conversion factors mentioned earlier. Simply multiply or divide according to the relationship between the units.' },
    ],
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
    faq: [
      { question: 'What is capacitance?', answer: 'Capacitance is the ability of a system to store an electric charge. It is measured in farads and is an essential aspect of how capacitors operate within electronic circuits.' },
      { question: 'Why convert capacitance values?', answer: 'Converting capacitance values is necessary for accurate circuit design and integration. Different components and applications may require different units, so being able to convert ensures that all components work correctly together.' },
      { question: 'How accurate are the conversions in your tool?', answer: 'The capacitance converter utilizes precise calculations based on standardized conversion factors to ensure accuracy. However, always double-check your results, especially in critical applications.' },
    ],
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
    faq: [
      { question: 'What is a healthy body fat percentage?', answer: 'For men, a body fat percentage between 10-20% is typically considered healthy, while for women, the range is around 18-28%.' },
      { question: 'Can I lose body fat without dieting?', answer: 'Yes, incorporating regular exercise and increasing daily activity levels can lead to fat loss, even without dietary changes.' },
      { question: 'How often should I check my body fat percentage?', answer: 'It is recommended to measure your body fat percentage every 4-6 weeks to monitor progress accurately.' },
    ],
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
    faq: [
      { question: 'How does debt consolidation affect my credit score?', answer: 'The impact of debt consolidation on your credit score can vary. While consolidating can lower your credit utilization ratio, it may initially decrease your score due to hard inquiries. However, maintaining timely payments post-consolidation typically improves credit health over time.' },
      { question: 'Is debt consolidation the best option for me?', answer: 'Debt consolidation may be suitable if you have multiple high-interest debts. However, it\'s crucial to assess your overall financial situation and consider alternatives, such as debt management plans or credit counseling, based on individual needs.' },
      { question: 'Are there any risks associated with debt consolidation?', answer: 'Yes, risks may include incurring additional debt if you misuse credit after consolidation or not addressing the underlying financial issues. It\'s essential to create a sustainable repayment plan post-consolidation.' },
    ],
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
    faq: [
      { question: 'What is the contribution limit for a 401(k) plan?', answer: 'The IRS sets annual contribution limits for 401(k) accounts, which can vary each year based on inflation.' },
      { question: 'How does employer matching work?', answer: 'Employer matching varies by company; some match dollar-for-dollar, while others offer a percentage of what you contribute.' },
      { question: 'Can I withdraw from my 401(k) before retirement?', answer: 'While possible, early withdrawals typically incur penalties and taxes unless specific criteria are met.' },
      { question: 'What happens to my 401(k) when I change jobs?', answer: 'You may leave it with your former employer, roll it into a new employer\'s plan, or convert it to an individual retirement account (IRA).' },
      { question: 'How can I increase my 401(k) investment growth?', answer: 'Choosing a diversified portfolio and regularly contributing can enhance growth. Working with a financial advisor may also help.' },
    ],
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
    faq: [
      { question: 'What are the contribution limits for IRAs?', answer: 'For 2023, you can contribute up to $6,500 per year to your IRA, with a catch-up contribution of an additional $1,000 if you are aged 50 or older.' },
      { question: 'Can I have multiple IRAs?', answer: 'Yes, you can have multiple IRA accounts, but the total contributions across all accounts cannot exceed the annual limit.' },
      { question: 'What happens if I take money out of my IRA before retirement?', answer: 'Withdrawals made before age 59½ are typically subject to a 10% early withdrawal penalty, in addition to taxes on any taxable withdrawals.' },
    ],
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
    faq: [
      { question: 'How do I find the missing value in a proportion?', answer: 'ratio compares two quantities, while a proportion states that two ratios are equal.' },
      { question: 'Can the proportion calculator handle negative values?', answer: 'Yes, the proportion calculator can handle negative values as well as positive ones.' },
    ],
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
    faq: [
      { question: 'Why is the circle circumference important?', answer: 'The circumference helps determine how much material is needed for enclosures, tracks, or circular designs.' },
      { question: 'Can the area of a circle be negative?', answer: 'No, the area of a circle is always a positive value as it represents a measurable space.' },
      { question: 'How does changing the radius affect the circle\'s area?', answer: 'Increasing the radius significantly increases the area because the area is proportional to the square of the radius.' },
    ],
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
    faq: [
      { question: 'What is the difference between permutations and combinations?', answer: 'While permutations consider the order of arrangement, combinations focus solely on the selection of items without regard to order.' },
      { question: 'Can I use the permutation calculator for large numbers?', answer: 'Yes, our calculator can handle large values of n and r efficiently.' },
      { question: 'How does factorial impact permutation calculations?', answer: 'Factorials grow rapidly, which affects the total number of permutations possible as n increases.' },
    ],
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
    faq: [
      { question: 'What units are used to measure force?', answer: 'Force is measured in Newtons (N), where 1 Newton is defined as the force required to accelerate a mass of 1 kilogram at the rate of 1 meter per second squared.' },
      { question: 'Can different units be used for mass and acceleration?', answer: 'Yes, but it\'s important to convert the units accordingly to maintain consistency in calculations. For instance, if mass is in grams, convert it to kilograms (1 kg = 1000 g) before using the formula.' },
      { question: 'How can the force calculator help in education?', answer: 'The force calculator serves as an excellent educational tool for students to better understand the relationship between mass, acceleration, and force through practical examples and instant calculations.' },
    ],
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
    faq: [
      { question: 'What if there are multiple modes?', answer: 'If two or more values share the highest frequency, the dataset is multimodal and all such values are reported as modes.' },
      { question: 'What if values are non-numeric?', answer: 'This calculator ignores non-numeric entries. If you need to compute the mode for categorical data (strings), use a similar approach but ensure that inputs are provided as categories without commas inside category names.' },
      { question: 'How are decimals handled?', answer: 'Decimals are parsed as numeric values. For example, 2.0 and 2 are considered the same numeric value after parsing.' },
      { question: 'Can the mode be used with categorical data?', answer: 'Yes, the mode is ideal for analyzing categorical data, as it provides insight into the most frequently occurring category in your dataset.' },
    ],
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
    faq: [
      { question: 'Does the converter support negative distances?', answer: 'By default, this tool expects non-negative distances. If you need to handle directional distances or vectors, apply sign handling in your application logic.' },
      { question: 'Are nautical miles different from regular miles?', answer: 'Yes. A nautical mile (nmi) is based on the Earth\'s circumference and equals exactly 1852 meters. A statute mile (mi) equals 1609.344 meters.' },
      { question: 'How accurate are the conversions?', answer: 'Conversions use standardized factors, and results are rounded to six decimal places in the UI. For high-precision needs, adjust the rounding or perform calculations with high-precision libraries.' },
    ],
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
    faq: [
      { question: 'Is this converter accurate?', answer: 'Yes. The converter uses exact conversion factors (1 in = 0.0254 m, 1 cm = 0.01 m) and displays results rounded to six decimal places. For most practical purposes this is more than sufficient.' },
      { question: 'Can I convert negative values?', answer: 'Negative lengths are not typical in physical measurements. The calculator will accept negative numbers but be mindful of the context in which you use them.' },
      { question: 'Can I download the result?', answer: 'Yes. Use the download button in the calculator to generate a PDF summary of your inputs and results.' },
      { question: 'What features does this converter offer?', answer: 'side from basic conversions, this tool is designed for user convenience, with instant calculations, easy-to-read outputs, and a clear interface to assist users in achieving their desired measurements quickly.' },
    ],
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
    faq: [
      { question: 'Is the conversion exact?', answer: 'The relationship 1 ft = 0.3048 m is exact by definition. When displaying results, the converter rounds to a reasonable number of decimal places for readability, ensuring accurate representation while remaining user-friendly.' },
      { question: 'Why convert via a base unit?', answer: 'Converting via a base unit (meters) simplifies the logic and minimizes rounding errors, especially when supporting multiple units. This method also facilitates seamless expansion of the converter, enabling additional units to be integrated easily in the future.' },
      { question: 'Can I download the results?', answer: 'Yes — use the PDF download button to generate a summary of your inputs and results for record keeping or sharing with colleagues or clients, ensuring thorough documentation and convenience.' },
      { question: 'What is the easiest way to use this converter?', answer: 'Simply enter the value you want to convert, choose the unit from which you are converting (feet or meters), and the converter will automatically calculate the result in the desired unit. It\'s as straightforward as typing and reading! Perfect for decoding any length measurements quickly.' },
    ],
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
    faq: [
      { question: 'Is the conversion exact?', answer: 'The conversion factor 1 yd = 0.9144 m is exact by definition, so converting between yards and meters using this factor yields accurate results. We round the displayed result for readability.' },
      { question: 'Can I convert negative lengths?', answer: 'Negative lengths are uncommon for physical distances but the tool will accept negative numbers if needed. Use caution when interpreting negative values.' },
      { question: 'How many decimal places are shown?', answer: 'Results are shown rounded to six decimal places by default, which is sufficient for most practical purposes. You can use the displayed value for further calculations or export it via PDF.' },
      { question: 'What tools can I use for these conversions?', answer: 'In addition to this online converter, you can use calculators, smartphone apps, and measurement charts to convert between yards and meters, ensuring you always have the tools you need for precise measurements, regardless of the platform.' },
    ],
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
    faq: [
      { question: 'Is a nautical mile the same as a mile?', answer: 'No. A nautical mile (1,852 meters) is longer than a statute mile (1,609.34 meters). Use this converter to switch between them accurately to avoid miscalculations in navigation.' },
      { question: 'Why convert via meters?', answer: 'Converting via a base unit like meters simplifies the math and reduces possible rounding errors. It also makes adding more units straightforward, ensuring that the conversions remain consistent and reliable across different systems.' },
      { question: 'How accurate are the results?', answer: 'This converter uses the exact definition for the nautical mile (1852 m) and common conversion factors for kilometers and miles. Final results are rounded to six decimal places for display, providing highly accurate outputs essential for navigation purposes.' },
      { question: 'What are some common use cases for nautical miles?', answer: 'Nautical miles are primarily used in marine navigation, air traffic management, and by various industries involved in shipping and aviation. They are essential for charting courses, estimating travel times, and ensuring compliance with international navigation laws.' },
    ],
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
    faq: [
      { question: 'Is the conversion exact?', answer: 'The converter uses the standard defined factor of 1 st = 6.35029318 kg. Results are shown rounded to a reasonable number of decimal places for readability, ensuring you get a practical output while maintaining precision.' },
      { question: 'Why use kilograms as a base unit?', answer: 'Using a common base unit (kilograms) simplifies conversions between any supported weight units and reduces rounding errors. It also allows for clearer communication and understanding when discussing metrics across various contexts, including sports, medicine, and daily life.' },
      { question: 'Can I copy or export the results?', answer: 'Yes — use the PDF download option to export the inputs and results as a PDF for record keeping or sharing. This feature is ideal for those who might want to track their weight changes over time or share results with healthcare professionals.' },
    ],
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
    faq: [
      { question: 'Is a tonne the same as a metric ton?', answer: 'Yes. A tonne (abbreviated t) is the metric ton and equals 1,000 kilograms.' },
      { question: 'Can I convert negative values?', answer: 'This converter accepts non-negative values. Negative weights are uncommon for physical mass; if you need to represent net loss or deficit, enter the appropriate numeric value but be aware of physical interpretation.' },
      { question: 'How many decimal places are shown?', answer: 'Results are rounded to 6 decimal places for accuracy and readability. You can copy the result for use in spreadsheets or reports.' },
      { question: 'Why is it important to know the tonne to kilogram conversion?', answer: 'Understanding this conversion is vital for precise measurements in various fields, ensuring compliance with safety regulations and optimizing logistics processes.' },
    ],
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
    faq: [
      { question: 'Which gallon does this converter use?', answer: 'This converter uses the US liquid gallon (1 gal = 3.78541 liters). It does not convert to the UK (imperial) gallon.' },
      { question: 'Can I convert negative volumes?', answer: 'The converter expects non-negative values. Negative volumes are not meaningful for typical use cases and will not display a result.' },
      { question: 'How accurate is the result?', answer: 'Conversions use the standard factor (1 US gal = 3.78541 L) and results are shown to six decimal places. For most practical purposes, this is sufficiently accurate.' },
    ],
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
    faq: [
      { question: 'Are the gallons US or Imperial?', answer: 'This converter uses the US gallon (≈ 3.78541 liters). If you need imperial gallons, convert using the appropriate factor (1 imperial gallon ≈ 4.54609 liters).' },
      { question: 'Why convert via a base unit?', answer: 'Converting via a base unit (m³) reduces cumulative rounding errors and makes it easier to add more units in the future while keeping calculations consistent.' },
      { question: 'Can I download or share the results?', answer: 'Yes — use the download PDF action to export the inputs and results. Charts are also available to visualize the conversion when enabled.' },
      { question: 'What are the practical applications of cubic meter conversions?', answer: 'Cubic meter conversions are widely used in various fields, including construction for estimating concrete volumes, agriculture for measuring soil or fertilizer quantities, and environmental science for calculating water-related metrics.' },
      { question: 'Is there a difference between metric and imperial units?', answer: 'Yes, metric units are based on powers of ten, while imperial units are based on traditional measurements. It\'s important to understand these differences when converting volumes between systems.' },
    ],
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
    faq: [
      { question: 'Does this use US or Imperial fluid ounces?', answer: 'This converter uses US fluid ounces (fl oz). Imperial fluid ounces have a different value, so make sure you\'re converting the correct type for your use case.' },
      { question: 'Is the conversion exact?', answer: 'Conversion factors are based on widely accepted definitions (for example, 1 US fl oz = 29.5735 mL). Results are rounded for display but computed using the defined factors for consistency.' },
      { question: 'Can I convert large volumes?', answer: 'Yes. The converter supports a variety of units including liters and gallons for large volumes. Ensure your input is within a reasonable numeric range for your application.' },
      { question: 'How do I use the Fluid Ounce Converter?', answer: 'Simply enter the quantity in fluid ounces that you want to convert, select your target unit, and the converter will provide the result. It’s designed for convenience and accuracy.' },
    ],
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
    faq: [
      { question: 'Can I convert negative temperatures?', answer: 'Yes. The formulas work for negative values as well — temperatures below zero are common and handled correctly. This feature is particularly useful in regions that experience extreme cold.' },
      { question: 'Is there rounding in the results?', answer: 'Results are rounded to two decimal places for readability, but the underlying calculations use full precision internally. This ensures accuracy while keeping the result user-friendly.' },
      { question: 'How accurate is the conversion?', answer: 'These conversions use the exact mathematical formulas, so they are fully accurate subject to the displayed rounding. You can trust our Celsius ↔ Fahrenheit Converter for reliable results.' },
      { question: 'Why are Celsius and Fahrenheit different?', answer: 'Celsius and Fahrenheit are two different scales for measuring temperature. The Celsius scale is based on the metric system, where water freezes at 0°C and boils at 100°C, while the Fahrenheit scale, used primarily in the United States, places the freezing point at 32°F and boiling point at 212°F.' },
    ],
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
    faq: [
      { question: 'Is the conversion exact?', answer: 'The conversion factor from square feet to square meters (0.09290304) is a defined constant. Results are rounded for display, but the calculator uses that constant for accurate conversions. This ensures that even small differences in measurement are accounted for, leading to reliable outcomes.' },
      { question: 'Can I convert between other area units?', answer: 'This tool specifically converts between square feet and square meters. For other area units (acres, hectares, square inches), use a dedicated converter that includes those units or extend the conversion factors accordingly. It is important to choose the right tool to ensure conversion accuracy.' },
      { question: 'How should I handle very large or very small values?', answer: 'The calculator supports large and small numerical inputs. If you require scientific notation or higher precision, consider rounding policies for your application domain. Additionally, it’s advisable to consult relevant documentation for specific guidelines depending on your field.' },
    ],
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
    faq: [
      { question: 'Why convert via square meters?', answer: 'Converting through a common base unit (m²) ensures consistency and reduces cumulative rounding errors when converting between units that use different base magnitudes.' },
      { question: 'What is the exact conversion factor?', answer: '1 square kilometer = 1,000,000 m². 1 square mile = 2,589,988.110336 m² (international mile).' },
      { question: 'Can I convert very large or very small areas?', answer: 'Yes. The calculator supports decimal values and displays results with sensible rounding. For extremely large or small numbers, consider scientific notation in external tools if necessary.' },
    ],
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
    faq: [
      { question: 'Does this calculator include fees or taxes?', answer: 'No. This calculator performs pure amortization calculations based on principal, APR, and term. It does not include closing costs, origination fees, taxes, insurance, or other lender-specific charges.' },
      { question: 'What if the interest rate is 0%?', answer: 'If the APR is 0%, the monthly payment is simply the principal divided by the number of payments (years × 12). The calculator handles that case and will show zero total interest, making it an essential tool in various scenarios.' },
      { question: 'Can I compare more than two loans?', answer: 'This specific comparison tool supports two loans side-by-side for simplicity. For more complex comparisons, consider running multiple comparisons or using a spreadsheet to aggregate several offers.' },
    ],
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
    faq: [
      { question: 'What is amortization?', answer: 'mortization is the process of paying off a debt over time through regular payments. Each payment covers interest and reduces the principal.' },
      { question: 'Does making extra payments help?', answer: 'Yes. Extra payments applied to principal reduce the outstanding balance, which reduces interest accrual and can shorten the loan term.' },
      { question: 'Why might my actual loan differ from this schedule?', answer: 'Lenders may have different day-count conventions, fees, escrow payments, or rounding rules. This calculator assumes a standard fixed-rate loan without additional fees.' },
      { question: 'Can I use this tool for any type of loan?', answer: 'Yes, while it\'s designed primarily for fixed-rate loans like mortgages, you can adapt it for auto loans and personal loans as long as the interest rate structure is fixed.' },
      { question: 'How do I interpret the amortization schedule results?', answer: 'The schedule will show each payment\'s allocation between interest and principal, as well as the decreasing balance after each payment. This gives insight into how quickly you\'re paying down your debt.' },
    ],
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
    faq: [
      { question: 'Does this calculator account for taxes?', answer: 'No. This calculator shows pre-tax returns. Taxes on dividends and capital gains can significantly affect net returns, so consult a tax professional for post-tax calculations.' },
      { question: 'What about fees or commissions?', answer: 'This tool does not account for trading fees, commissions, or other transaction costs. Subtract those costs from the total return if you want a more accurate net return.' },
      { question: 'Can I calculate annualized returns?', answer: 'This calculator provides absolute and percentage returns. For annualized returns (CAGR), you need the holding period. Consider using a CAGR calculator if you know the investment duration.' },
    ],
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
    faq: [
      { question: 'Does this calculator include exemptions or deductions?', answer: 'No. This calculator computes the basic annual tax from assessed value and tax rate. It does not apply exemptions (such as homestead exemptions), tax caps, or other local adjustments. Subtract those separately as applicable.' },
      { question: 'What if my tax rate is expressed per $100 of assessed value?', answer: 'If your rate is expressed per $100 (for example, $1.20 per $100), convert it to a percentage by dividing by 100: $1.20 per $100 = 1.2%.' },
      { question: 'Can I use a different currency?', answer: 'Yes. The calculator displays numeric results. For presentation, the UI formats values in USD by default; however, the numeric calculation is currency-agnostic — you can interpret the result in your local currency.' },
      { question: 'How often do property taxes change?', answer: 'Property tax rates can change annually or biannually depending on local regulations. Always check with your local tax assessor’s office for the most current information.' },
    ],
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
    faq: [
      { question: 'Is this my exact tax bill?', answer: 'No. This calculator provides an estimate based on progressive federal tax brackets and does not account for deductions, credits, state/local taxes, additional taxes (e.g., self-employment tax), or other adjustments. For exact liability consult a tax professional or your tax software.' },
      { question: 'What\'s the difference between marginal and effective tax rate?', answer: 'Your marginal tax rate is the rate applied to the last dollar you earn. Your effective tax rate is the average rate you pay across your entire taxable income (total tax divided by total income).' },
      { question: 'Can I use this for state taxes?', answer: 'No. This calculator only estimates federal tax based on a simplified bracket model. State tax systems vary widely and may require separate calculations.' },
    ],
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
    faq: [
      { question: 'Do I need to enter all categories?', answer: 'No. You can leave categories blank or set them to 0. The calculator will treat blank inputs as 0 and compute totals accordingly. This flexibility allows users to customize their experience based on their unique financial situation.' },
      { question: 'Can I use this for yearly budgeting?', answer: 'Yes. Multiply the monthly totals by 12 to get an annual estimate. You can also adjust the values to reflect irregular annual expenses split into monthly equivalents. This feature enhances the accuracy of financial projections over longer periods.' },
      { question: 'How accurate are the percentages?', answer: 'Percentages are calculated as (category amount ÷ total) × 100 and are rounded to two decimal places for readability. Having precise calculations can aid in making quicker financial decisions based on your spending patterns.' },
      { question: 'What if I want to change my spending habits?', answer: 'The Expense Tracker allows you to set financial goals and create a budget based on your calculated expenses. Regularly tracking your spending can highlight areas where you may want to cut back to achieve those goals.' },
    ],
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
    faq: [
      { question: 'Are these definitive salary recommendations?', answer: 'No. These are estimates based on cost-of-living indices and don\'t account for taxes, benefits, housing quality, personal spending habits, or neighborhood differences. Use this as a directional guide when planning moves or salary negotiations.' },
      { question: 'What if my city isn\'t listed?', answer: 'The calculator includes common U.S. cities and falls back to a neutral index if a city isn\'t recognized. For precise planning, use local cost data or specialized cost-of-living services.' },
      { question: 'Can I download the results?', answer: 'Yes. Use the PDF download option in the calculator to save your inputs and results for reference.' },
    ],
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
    faq: [
      { question: 'Does this calculator account for inflation?', answer: 'No. The projection is nominal and does not adjust for inflation. To estimate real purchasing power, reduce the expected return by your assumed inflation rate. Factor in inflation in your overall budgeting for retirement.' },
      { question: 'What if my expected return is 0%?', answer: 'If you set the expected return to 0%, the calculator sums your current savings and the total contributions (no growth). This can serve as a conservative baseline for planning and showcases the importance of earning a return on investments.' },
      { question: 'Should I trust a single number?', answer: 'Treat this projection as an estimate. Market returns vary yearly. Use multiple scenarios (conservative, moderate, aggressive) to plan for uncertainty and develop a flexible retirement strategy.' },
    ],
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
    faq: [
      { question: 'Is this an official Social Security estimate?', answer: 'No. This is a simplified estimator for planning purposes. For an official estimate, check your Social Security statement at the SSA website or contact a qualified advisor.' },
      { question: 'Why does the calculator use a 40% base rate?', answer: 'The 40% replacement rate is a simplified proxy to provide quick estimates across a wide range of incomes. Actual replacement rates vary based on lifetime earnings, bend points, and indexing rules used by Social Security.' },
      { question: 'How should I use this estimate?', answer: 'Use this tool for high-level planning and to compare scenarios (e.g., retiring earlier vs. later). Combine these results with other retirement income sources and savings goals to build a complete retirement plan.' },
      { question: 'What factors could affect my Social Security benefits?', answer: 'Factors such as changes in income, working additional years, and legislative updates can influence the benefits you may receive. Staying informed about these changes is crucial to ensure accurate planning.' },
    ],
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
    faq: [
      { question: 'Is this an exact benefit calculation?', answer: 'This calculator provides an estimate based on a simple accrual formula. Actual benefit calculations may consider additional factors such as benefit caps, early retirement reductions, cost-of-living adjustments, final average salary definitions, and plan-specific rules. Always consult your plan administrator for precise details.' },
      { question: 'What is a pension multiplier?', answer: 'The pension multiplier (accrual rate) is the percentage of your final average salary that you earn for each year of service. For example, a 2% multiplier yields 2% of final salary per year of service. Understanding this is key in planning your retirement strategy.' },
      { question: 'How can I improve my replacement rate?', answer: 'Increasing years of service, improving the final average salary (through promotions or salary increases), and plan design (higher multipliers) can increase your replacement rate. Consider supplemental savings like 401(k) or IRAs to boost retirement income. Diversifying your retirement savings strategy can significantly enhance your financial stability in your golden years.' },
    ],
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
    faq: [
      { question: 'Is this calculator personalized?', answer: 'This tool provides a general estimate. For personalized advice, consider your full financial picture and speak with an expert.' },
      { question: 'Should I include my spouse\'s income?', answer: 'If your spouse contributes financially to your household, you may include their income in your planning or run the calculator for the household\'s combined income to decide appropriate coverage levels.' },
      { question: 'How often should I review my coverage?', answer: 'Review your coverage when major life events occur such as marriage, the birth of a child, home purchase, career changes, or significant changes in debt and savings.' },
      { question: 'What factor should I prioritize when calculating?', answer: 'While all factors matter, prioritizing annual income and debts is crucial, as they significantly affect how much your family may need in your absence.' },
    ],
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
    faq: [
      { question: 'Is this a guarantee of coverage?', answer: 'No. This calculator provides an estimate based on the inputs. Actual payments depend on plan details, co-insurance, network, covered services, and billing practices.' },
      { question: 'What about co-insurance or copayments?', answer: 'This simplified model assumes the patient pays up to the deductible and then up to the out-of-pocket maximum. If you have co-insurance or copays, the effective patient share after deductible may differ. Adjust the expected medical costs to approximate those effects.' },
      { question: 'How should I use the results from the calculator?', answer: 'Use the calculator to compare different plan scenarios by changing premiums, deductibles, and out-of-pocket maximums. Consider also non-financial factors like provider networks, prescription coverage, and customer service.' },
      { question: 'How can I optimize my health plan choices?', answer: 'Consider your family\'s health history and projected medical expenses when selecting a plan. Engage with health professionals or financial advisors to understand the benefits thoroughly.' },
    ],
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
    faq: [
      { question: 'Is this an official insurance quote?', answer: 'No. This calculator provides an estimate only. For a binding quote, contact licensed insurance providers who will consider additional factors such as location, annual mileage, vehicle safety features, and more.' },
      { question: 'Why does age affect my premium?', answer: 'Insurance companies use statistical data that shows different age groups have different risk profiles. Younger and older drivers often face higher rates due to higher observed risk.' },
      { question: 'Can I use this for commercial vehicles?', answer: 'This tool is designed for personal passenger vehicles. Commercial or specialty vehicle insurance involves different rating factors and coverages.' },
      { question: 'What factors can raise my premium besides age?', answer: 'Factors such as credit score, claim history, the type of vehicle, and even the location where the vehicle is parked overnight can impact your premium significantly.' },
      { question: 'How often should I review my insurance policy?', answer: 'It\'s advisable to review your insurance policy at least once a year or when significant life changes occur, such as moving, buying a new car, or after a major life event.' },
    ],
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
    faq: [
      { question: 'Can I use my own exchange rate?', answer: 'Yes. Enter a custom rate in the Exchange Rate field to override the default rate. The calculator will show the converted amount and the implied fee relative to the default market rate.' },
      { question: 'What currencies are supported?', answer: 'This tool supports USD, EUR, and GBP. The design follows a base-unit approach (USD) to compute default rates between any pair.' },
      { question: 'Does this include transfer fees?', answer: 'No. This calculator shows the conversion result and an implied fee if your provided rate differs from the default rate. It does not include additional bank or transfer fees. To include fees, adjust the exchange rate accordingly or calculate fees separately and subtract them from the converted amount.' },
    ],
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
    faq: [
      { question: 'Is this VO2 max test accurate?', answer: 'This formula provides a rough estimate based on heart rate. Individual variability, measurement error, medications, and fitness level can affect accuracy. For precise measurement, seek lab testing.' },
      { question: 'What should I use for maximum heart rate?', answer: 'If you have an actual measured maximal heart rate from a supervised test, use that value. If not, commonly used estimates (e.g., 220 minus age) are less accurate and will affect the VO2 estimate.' },
      { question: 'Can I use this calculator for training zones?', answer: 'This estimate serves as a good starting point for general fitness planning, but training zones should ideally be based on more specific testing (e.g., lactate threshold or ventilatory thresholds) for athletes or targeted programs.' },
      { question: 'How can I improve my VO2 max?', answer: 'Improving your VO2 max may involve engaging in high-intensity interval training (HIIT), continuous aerobic exercises, strength training, and ensuring proper recovery strategies.' },
    ],
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
    faq: [
      { question: 'Is the 220 − age formula accurate?', answer: 'The 220 − age formula is a general estimate for maximum heart rate. Individual max HR can vary. For clinical or precise training plans consider a supervised exercise test to ensure safety and accuracy.' },
      { question: 'Why use the Karvonen method?', answer: 'The Karvonen method accounts for resting heart rate, which provides a more individualized intensity target than percentages of max heart rate alone. This is essential for effective training results.' },
      { question: 'Should I use perceived exertion instead?', answer: 'Both objective (HR) and subjective (Rate of Perceived Exertion) methods are useful. If you lack a reliable heart rate monitor, perceived exertion is a practical alternative to gauge exertion levels.' },
    ],
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
    faq: [
      { question: 'Is the estimated 1RM exact?', answer: 'No. These formulas provide estimates that are useful for programming. Individual differences mean the true 1RM may vary.' },
      { question: 'Which formula should I trust?', answer: 'Epley and Brzycki are commonly used and generally reliable for moderate rep ranges (1–10). Lombardi can perform well across a broader range. Use the estimates as guidelines rather than absolute values.' },
      { question: 'Can I use this for any exercise?', answer: 'These estimates work best for compound strength movements (squat, bench press, deadlift, etc.). For isolation movements or very technical lifts, accuracy may vary.' },
      { question: 'How often should I recalculate my 1RM?', answer: 'It\'s a good idea to reassess your estimated 1RM every few weeks, especially after completing a training cycle, or when you notice significant changes in strength levels. Tracking progress regularly helps in making informed adjustments to your workout program.' },
    ],
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
    faq: [
      { question: 'Are these values suitable for everyone?', answer: 'These recommendations are general estimates. Individual needs vary with metabolic health, age, training load, and medical conditions. Consult a registered dietitian or healthcare professional for personalized guidance based on your unique situation.' },
      { question: 'How do I adjust for very high training loads?', answer: 'thletes with extremely high training volumes may require higher carbohydrate intakes (up to 8-12 g/kg in some endurance scenarios). Use the \'Active\' level as a baseline and consult a sports nutritionist for precise plans tailored to your training intensity and goals.' },
      { question: 'Can I use pounds (lbs)?', answer: 'This calculator accepts weight in kilograms. To convert pounds to kilograms, divide by 2.20462 (kg = lbs ÷ 2.20462). Using the metric system can help achieve more accurate recommendations based on global nutrition standards.' },
      { question: 'What types of carbs should I focus on?', answer: 'Prioritize complex carbohydrates such as whole grains, legumes, fruits, and vegetables as they provide sustained energy and fiber. Simple carbohydrates, such as sugars, should be consumed in moderation and primarily around intense training sessions to aid quick recovery.' },
    ],
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
    faq: [
      { question: 'Is fat the only macronutrient that has 9 kcal/g?', answer: 'Yes. Fat provides 9 kcal per gram. Protein and carbohydrates each provide 4 kcal per gram.' },
      { question: 'What percentage of calories should come from fat?', answer: 'Dietary recommendations vary by individual goals, health conditions, and dietary patterns. Many guidelines suggest 20-35% of total calories from fat for general health, but athletes, people on specialized diets, or those with medical conditions may have different targets. Consult a registered dietitian for personalized recommendations.' },
      { question: 'Does this calculator account for fat quality (saturated vs unsaturated)?', answer: 'No. This calculator estimates total fat intake in grams or calories. It does not differentiate between types of fat. For health, focus on unsaturated fats and limit saturated and trans fats.' },
    ],
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
    faq: [
      { question: 'When should I seek medical attention?', answer: 'If your systolic is >180 mmHg or diastolic is >120 mmHg, this may be a hypertensive crisis — seek emergency care immediately, especially if you have chest pain, shortness of breath, or neurological symptoms.' },
      { question: 'What is pulse pressure and why does it matter?', answer: 'Pulse pressure is the difference between systolic and diastolic pressure. Very high or very low pulse pressures can be associated with cardiovascular issues. Discuss abnormal values with your clinician.' },
      { question: 'How often should I measure my blood pressure?', answer: 'Follow your healthcare provider\'s guidance. For monitoring, many clinicians recommend taking 2-3 readings in the morning and evening for a week to establish a baseline.' },
      { question: 'What lifestyle changes can help manage blood pressure?', answer: 'Incorporating healthy habits such as a balanced diet, regular exercise, reducing alcohol, and quitting smoking can significantly impact blood pressure levels positively. Consulting with a dietitian can further personalize these changes.' },
    ],
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
    faq: [
      { question: 'Are sleep cycles exactly 90 minutes?', answer: 'Sleep cycles vary between individuals and with age, typically ranging from 80–110 minutes. This calculator uses 90 minutes as a widely accepted average.' },
      { question: 'Should I always aim for an exact number of cycles?', answer: 'iming for full cycles can help you wake up feeling refreshed. However, total sleep needs vary. Use this calculator as a guideline and listen to your body.' },
      { question: 'Can this replace medical advice?', answer: 'No. This tool provides general guidance. If you have ongoing sleep issues or suspect a sleep disorder, consult a medical professional.' },
      { question: 'How can I improve my sleep quality?', answer: 'Good sleep hygiene practices like maintaining a regular sleep schedule, creating a restful environment, and managing stress can significantly improve your sleep quality.' },
      { question: 'Why is sleep important?', answer: 'Sleep is essential for physical health, mental well-being, and overall quality of life. During sleep, your body repairs itself, consolidates memories, and rejuvenates for the day ahead.' },
    ],
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
    faq: [
      { question: 'Can this calculator be used for pediatric patients?', answer: 'Yes, but extra caution is required. Pediatric dosing often uses weight-based calculations and may require age-specific adjustments. Consult pediatric dosing guidelines and a pediatrician or pharmacist.' },
      { question: 'What should I do if concentration units differ?', answer: 'Ensure concentration is in mg/mL. If concentration is given in different units (e.g., mg/100mL or percentage), convert to mg/mL before using the calculator.' },
      { question: 'Does the calculator account for loading doses or infusion rates?', answer: 'No. This tool only calculates a simple dose based on weight and concentration. For loading doses, infusion rates, or complex regimens, consult clinical protocols and specialists.' },
    ],
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
    faq: [
      { question: 'What is a gestational week?', answer: 'Gestational weeks count the age of the pregnancy from the first day of the last menstrual period. Week 1 begins on the first day of the LMP.' },
      { question: 'How accurate is the estimated due date?', answer: 'n LMP-based due date is a good estimate for many pregnancies but may be less accurate if your menstrual cycles are irregular. Early ultrasound is the most reliable method to date a pregnancy.' },
      { question: 'Can I use this tool if I don\'t remember my LMP?', answer: 'If you don\'t remember your LMP, consult your healthcare provider. They may use ultrasound measurements to estimate gestational age.' },
    ],
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
    faq: [
      { question: 'Is this a medical diagnosis?', answer: 'No. This calculator provides estimates based on public guidelines and should not replace individualized medical advice. Always discuss weight concerns and nutrition with your healthcare provider.' },
      { question: 'Why use BMI for recommendations?', answer: 'BMI before pregnancy helps determine appropriate total weight gain recommendations, as body composition influences maternal and fetal outcomes. The Institute of Medicine recommendations are stratified by BMI categories.' },
      { question: 'What if my gain is outside the range?', answer: 'Being below or above the recommended range doesn\'t automatically mean a problem, but it is a prompt to consult your provider. They may review diet, activity, fetal growth, and other health factors to provide guidance.' },
      { question: 'How can I maintain a healthy pregnancy weight?', answer: 'Maintaining a healthy pregnancy weight involves balanced nutrition, regular physical activity (if approved by your doctor), and monitoring weight gain over time. It\'s essential to focus on nutrient-rich foods and stay hydrated.' },
      { question: 'What resources are available for weight management during pregnancy?', answer: 'Several resources are available, including consultations with a registered dietitian specialized in prenatal nutrition, pregnancy-specific fitness classes, and apps designed to monitor nutrition and activity levels. Your healthcare provider can also offer personalized recommendations.' },
    ],
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
    faq: [
      { question: 'Is this breastfeeding calculator a substitute for clinical advice?', answer: 'No. This calculator provides evidence-informed estimates but does not replace personalized medical assessment. Always consult your healthcare provider for tailored guidance.' },
      { question: 'Why does the intake per kg change with age?', answer: 's infants grow, the ml/kg/day requirement often decreases slowly because metabolic needs per kilogram decline while absolute intake grows with weight.' },
      { question: 'My baby seems hungrier than the estimate. What should I do?', answer: 'Growth spurts are common and can temporarily increase appetite. Monitor weight gain and diaper output, and consult a pediatrician or lactation consultant if you\\\'re concerned.' },
      { question: 'What additional factors should I consider for breast milk intake?', answer: 'Consider factors such as the baby\'s activity level, health status, and any specific dietary recommendations based on their unique needs.' },
    ],
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
    faq: [
      { question: 'What does log() mean?', answer: 'In this calculator, log(x) denotes base-10 logarithm. Use ln(x) for natural logarithm.' },
      { question: 'How do I plot a function?', answer: 'Include x in your expression (e.g. sin(x)*x). Toggle the chart view to see the function plotted. Select Degrees or Radians depending on your input.' },
      { question: 'Is the input sanitized?', answer: 'The calculator performs basic sanitization and only supports a set of functions and characters. Avoid entering arbitrary JavaScript code. If an expression cannot be evaluated, an error message will be shown.' },
      { question: 'What are common use cases for the scientific calculator?', answer: 'The scientific calculator is widely used in fields such as physics, engineering, architecture, and statistics. It assists in plotting graphs, solving equations, and implementing technical calculations quickly and efficiently.' },
      { question: 'Can I save my calculations?', answer: 'Yes, you can save your calculations. The Scientific Calculator features a PDF download option that allows you to store your inputs and results for future reference.' },
    ],
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
    faq: [
      { question: 'Can I enter prefixes like 0x or 0b?', answer: 'This converter expects raw digits corresponding to the selected base (e.g., FF for hex). Prefixes like 0x or 0b are not required and may cause validation to fail. Remove any prefixes before converting.' },
      { question: 'What happens with invalid characters?', answer: 'The tool validates input for the chosen source base and will display an error message if invalid characters are present (for example, letters outside A-F in hexadecimal or digits beyond 7 in octal).' },
      { question: 'Are large numbers supported?', answer: 'This converter uses JavaScript\'s Number.parseInt for parsing, which is suitable for typical use cases. Extremely large integers may lose precision; for arbitrary precision conversions, consider a BigInt-based or big-number library implementation.' },
    ],
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
    faq: [
      { question: 'Can I solve more than two equations?', answer: 'This tool is built for 2x2 systems. For larger systems, consider using Gaussian elimination or matrix-based solvers. We may add a multi-variable solver in a future update.' },
      { question: 'Why does the calculator show "No unique solution"?', answer: 'This indicates that the determinant is zero. It is essential to check if the equations are multiples of each other (yielding infinite solutions) or if they are inconsistent (yielding no solution).' },
      { question: 'How accurate are the results?', answer: 'The results are computed with JavaScript\'s floating-point arithmetic and are rounded to 6 decimal places for display. For critical applications, verification with higher-precision tools is recommended.' },
    ],
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
    faq: [
      { question: 'What format should coefficients use?', answer: 'Provide a comma-separated list in descending order of powers. Example for 2x² + 3x + 1: "2, 3, 1".' },
      { question: 'Can I get complex roots with this calculator?', answer: 'Yes, the calculator returns complex roots in a + bi format and shows their magnitudes on the chart, providing full insights into the behavior of the polynomial function.' },
      { question: 'How accurate are the roots displayed?', answer: 'The method iterates until a tight tolerance. For very high-degree polynomials or ill-conditioned coefficients, numerical accuracy may degrade; consider rescaling or using higher precision tools for such cases.' },
      { question: 'Is this calculator suitable for educational purposes?', answer: 'Absolutely! This calculator is a valuable resource for students learning about polynomial factorization, roots, and equations, providing instant feedback and detailed results to enhance understanding.' },
    ],
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
    faq: [
      { question: 'What if my matrix isn\'t square?', answer: 'The determinant is only defined for square matrices. The calculator will display an error if the number of rows and columns do not match, as only square matrices can be evaluated for their determinants.' },
      { question: 'How should I format the input for the determinant calculator?', answer: 'Separate rows with a semicolon (;) and values within a row with commas. For example, the input for a 4x4 matrix should be formatted as follows: 1,0,0,0;0,1,0,0;0,0,1,0;0,0,0,1.' },
      { question: 'Why does the calculator return 0 for some matrices?', answer: 'zero determinant means the matrix is singular, indicating that its rows or columns are linearly dependent. Such matrices cannot be inverted and are often significant in linear algebra discussions.' },
      { question: 'Can I use large matrices with the determinant calculator?', answer: 'Yes, but keep in mind that very large matrices or matrices with extremely large/small values may encounter floating point precision limits. Use the precision selector to control displayed rounding and minimize errors.' },
      { question: 'Are there any practical applications of determinants?', answer: 'Determinants have numerous applications in various fields such as engineering for stability analysis, computer graphics for transformations, and systems of equations in economics for modeling. Understanding determinants expands your mathematical toolkit significantly.' },
    ],
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
    faq: [
      { question: 'What format should I use for input?', answer: 'Use semicolons to separate rows and commas to separate values within a row, e.g. 1,2;3,4.' },
      { question: 'Why does it say the matrix is singular?', answer: 'matrix is singular when its determinant is zero (or extremely close to zero). Singular matrices do not have inverses, which means they cannot be used in calculations requiring matrix inversion.' },
      { question: 'Is there a size limit for matrices?', answer: 'This calculator performs numerical elimination in the browser. While small to medium matrices (2×2, 3×3, 4×4, etc.) work fine, very large matrices may be slow or numerically unstable.' },
      { question: 'How is this calculator different from others?', answer: 'Our Inverse Matrix Calculator is designed to provide clear and accurate results using the Gauss-Jordan elimination method, making it easy to visualize and understand the inverse operations.' },
    ],
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
    faq: [
      { question: 'What does it mean if the slope is negative?', answer: 'negative slope indicates that the line falls from left to right. As x increases, y decreases, which can be useful in various applications like economics where it may represent decreasing profit as costs rise.' },
      { question: 'What if Δx is zero?', answer: 'If Δx is zero (x1 === x2), the line is vertical, and the slope is undefined. The calculator will indicate this so you can understand that vertical lines represent situations where there is no change in the x-direction.' },
      { question: 'How precise is the result?', answer: 'Results are computed using JavaScript number precision and rounded to 6 decimal places for readability. For very large or very small numbers, consider the limits of floating point arithmetic.' },
      { question: 'Can slope be zero?', answer: 'Yes, a slope of zero indicates a horizontal line where y remains constant regardless of x. This situation is common in various fields, such as constant rates of interest in finance.' },
    ],
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
    faq: [
      { question: 'What if I enter non-numeric values?', answer: 'The calculator validates inputs and will not display a result until the coordinates are valid numbers. This ensures users receive accurate midpoint calculations without confusion.' },
      { question: 'Can this work for 3D points?', answer: 'This version computes 2D midpoints. For 3D, extend the formula to include the z-coordinate: ((x1+x2)/2, (y1+y2)/2, (z1+z2)/2). Such calculations can be crucial for applications in 3D modeling and computer simulations.' },
      { question: 'How precise is the result?', answer: 'Results are calculated in floating point and rounded to six decimal places in the calculator for clarity. For more precision, adjust the UI or export the raw values. This ensures comprehensive data handling for users needing meticulous measurements.' },
      { question: 'Can I use this calculator for programming tasks?', answer: 'bsolutely! The midpoint calculation can be integrated into algorithms for various programming tasks, such as graphics rendering or data visualization, making it an essential calculation for developers.' },
    ],
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
    faq: [
      { question: 'What units are used?', answer: 'The calculator returns area in abstract square units based on the units you enter (for example, if you enter meters, the result is in square meters). This flexibility makes it suitable for a wide range of applications, whether in the classroom or the professional field.' },
      { question: 'Can I calculate other shapes?', answer: 'This tool currently supports circle, rectangle, and triangle. For other shapes, you can decompose them into these primitives or use a dedicated calculator. Understanding these basic shapes is fundamental in geometry, and mastering their areas paves the way for more complex calculations.' },
      { question: 'Why are negative inputs treated as zero?', answer: 'Negative physical dimensions are invalid for area calculation. To ensure the calculator returns meaningful results, negative values are treated as zero. This feature helps maintain accuracy and provides a consistent user experience, preventing confusion with invalid inputs.' },
    ],
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
    faq: [
      { question: 'What units should I use?', answer: 'Use consistent units for radius and height. The resulting volume will be in cubic units (for example, if you enter meters, the result is in m³).' },
      { question: 'Can I use decimals?', answer: 'Yes. The calculator accepts decimal values. Results are shown with up to six decimal places for precision.' },
      { question: 'Why does the cylinder/cone require height?', answer: 'The cylinder and cone volume formulas include height (h). Without a valid height, the calculator cannot compute their volume and will prompt you to enter one.' },
      { question: 'What if I forget the formulas?', answer: 'No worries! The calculator provides formulas for the shapes. You can refer to them anytime while performing calculations.' },
      { question: 'Is the volume calculator easy to use?', answer: 'bsolutely! The volume calculator is designed to be user-friendly, allowing beginners and experts alike to perform calculations effortlessly.' },
    ],
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
    faq: [
      { question: 'Can I use different units for different sides?', answer: 'No. Enter all dimensions using the same unit to get a meaningful perimeter. Convert units before calculating if needed.' },
      { question: 'What if I only know the diagonal of a rectangle?', answer: 'The perimeter cannot be determined from the diagonal alone. You need both side lengths or enough information to derive them (e.g., diagonal and one side, using Pythagoras).' },
      { question: 'Do you support circles or other shapes?', answer: 'This calculator focuses on polygons: rectangles, squares, and triangles. For circles, you would use circumference = 2 × π × radius — consider using or creating a circumference calculator for that purpose.' },
    ],
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
    faq: [
      { question: 'Do length and width need to use the same units?', answer: 'Yes. Ensure both values are in the same units (for example, both in meters) so that area and diagonal calculations are correct.' },
      { question: 'What units are the results shown in?', answer: 'rea is shown in square units (units²). Perimeter and diagonal are shown in linear units (units). If you enter meters, the area will be in square meters (m²) and others in meters (m).' },
      { question: 'Can I use decimals?', answer: 'Yes. You can enter decimal values (for example 2.5). The calculator supports fractional dimensions and will display results with up to 6 decimal places.' },
    ],
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
    faq: [
      { question: 'What if X and Y lengths differ?', answer: 'The calculator requires X and Y to have the same number of observations. If lengths differ, an error will be shown.' },
      { question: 'How many data points do I need?', answer: 't least two paired observations are required to compute a slope. More points give more reliable estimates.' },
      { question: 'Can this detect non-linear relationships?', answer: 'Linear regression models linear relationships only. For non-linear patterns consider polynomial regression or other models.' },
      { question: 'What are the assumptions of linear regression?', answer: 'Key assumptions include linearly independent variables, homoscedasticity, normally distributed residuals, and no multicollinearity.' },
      { question: 'Is it necessary to standardize data?', answer: 'Standardizing data is not necessary for linear regression, but it can improve the interpretability of coefficients.' },
    ],
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
    faq: [
      { question: 'How many values do I need?', answer: 'At least two pairs are required to compute a correlation. More data generally produces a more reliable estimate and enhances the statistical significance of the result.' },
      { question: 'What if my lists are different lengths?', answer: 'The calculator requires X and Y to have the same number of entries. If they differ, you\'ll see an error prompting you to correct the inputs, ensuring the integrity of the analysis.' },
      { question: 'Does this test for causation?', answer: 'No. Correlation measures association, not causation. Further analysis and experimental design are needed to establish causality. It\'s essential to recognize that other intervening variables might influence the observed correlation.' },
    ],
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
    faq: [
      { question: 'Can I use this for paired data?', answer: 'No — this calculator performs an independent two-sample t-test (Welch\'s). For paired samples, calculate the differences and perform a one-sample t-test on the differences.' },
      { question: 'What if my samples have different sizes?', answer: 'Welch\'s t-test accounts for unequal variances and sample sizes; it is appropriate for samples with different n.' },
      { question: 'Why might the calculator return no result?', answer: 'Ensure each sample has at least two numeric values. Values must be comma-separated numbers (e.g., "1, 2, 3"). If the inputs are valid and you still encounter issues, refresh the page and try again.' },
      { question: 'Can I use this calculator for one-sample tests?', answer: 'This calculator is designed for independent two-sample t-tests. For one-sample tests, consider the specifics of your data and statistical needs.' },
    ],
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
    faq: [
      { question: 'What if expected frequency is zero?', answer: 'If an expected frequency is zero while the observed count is positive, the chi-square calculation is not valid. The calculator will flag this as an error. Consider combining categories to avoid zero expected counts.' },
      { question: 'How are expected frequencies computed?', answer: 'When computed, each expected cell E_ij is calculated as (row_total_i * column_total_j) / grand_total. This is the standard method for the test of independence.' },
      { question: 'Can I use non-integer frequencies?', answer: 'Observed frequencies should represent counts (integers). Expected frequencies may be fractional when computed from margins. This tool accepts numeric values but be cautious when using non-integer observed counts.' },
      { question: 'Where can I apply the Chi-Square Test for Independence?', answer: 'The Chi-Square Test is used in various fields such as market research, medical studies, and social sciences to evaluate relationships between categorical variables. It\'s beneficial in surveys, clinical trials, and analyzing customer preferences, among other scenarios.' },
      { question: 'What assumptions does the Chi-Square Test have?', answer: 'The primary assumptions include that the samples must be independent, the data should be in frequency form, and expected frequencies should be at least 5 for valid results. If these assumptions are violated, results may not be reliable.' },
    ],
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
    faq: [
      { question: 'Can I input different numbers of observations per group?', answer: 'Yes. One-way ANOVA supports unequal sample sizes. The calculator automatically accounts for the different group sizes when computing degrees of freedom and mean squares.' },
      { question: 'What if a group has non-numeric entries or blanks?', answer: 'Non-numeric tokens and empty entries are ignored. Make sure each observation is a valid number. If a group becomes empty after filtering invalid entries, it will be excluded from the analysis.' },
      { question: 'How do I decide significance?', answer: 'Compare the p-value to your alpha (commonly 0.05). If p < alpha, you reject the null hypothesis that all group means are equal. Remember to check assumptions and consider post-hoc tests to identify which groups differ.' },
    ],
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
    faq: [
      { question: 'Can I check dates far in the past or future?', answer: 'Yes — the calculator uses JavaScript Date objects, which support a wide range of years. For very ancient dates (before 100 AD), be mindful of calendar system differences (Julian vs. Gregorian).' },
      { question: 'Does the calculator consider time zones?', answer: 'This tool determines the weekday based solely on the calendar date (year, month, day) and constructs a local Date object. It avoids time-of-day and timezone conversions to provide consistent weekday results for the given date.' },
      { question: 'Can I export the result?', answer: 'Yes — use the download button in the calculator to generate a PDF containing the input date and the resulting weekday.' },
      { question: 'What if I want to calculate multiple dates?', answer: 'You can use the calculator to input multiple dates in sequence. For larger projects, consider leveraging the API endpoint designed for bulk date calculations.' },
    ],
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
    faq: [
      { question: 'Does this calculator work for negative years or BCE?', answer: 'The calculator applies the Gregorian arithmetic rules to any integer year. For historical years (BCE) or calendars before the Gregorian reform, astronomical and historical conventions may differ.' },
      { question: 'Why are some century years not leap years?', answer: 'Century years (divisible by 100) are only leap years if they are also divisible by 400. This correction reduces the small drift caused by treating every 4th year as a leap year.' },
      { question: 'Can I trust the calculator for future planning?', answer: 'Yes. The calculator follows the Gregorian calendar rules, which are the standard for civil calendars worldwide today. It is reliable for planning events and understanding time mechanics, ensuring accuracy regardless of how far into the future you look.' },
      { question: 'What happens in a leap year?', answer: 'In a leap year, February has an extra day, making it 29 days long, which can affect planning for events, payroll calculations, and other date-sensitive timing.' },
    ],
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
    faq: [
      { question: 'Can I change units while scaling?', answer: 'Yes. This tool converts your input to a base unit (teaspoons) internally, scales the amount, and converts it back to the unit you\'ve chosen to display.' },
      { question: 'Is the calculator precise for baking?', answer: 'For baking, weight-based measurements (grams/ounces) are more reliable. This calculator is great for quick volume-based scaling; for best results in baking, convert to weight when possible.' },
      { question: 'What if my original servings is zero?', answer: 'Original servings must be greater than zero for scaling. The calculator validates inputs and will not show results for invalid values.' },
      { question: 'Can I use the scaling calculator for any type of recipe?', answer: 'Yes! The scaling calculator can be applied to a wide variety of recipes, from baked goods to savory meals. Just input your ingredient amounts and let the calculator do the work.' },
      { question: 'How can I ensure consistency when scaling?', answer: 'To ensure consistency, always measure ingredients accurately and keep a record of any changes made to the original recipe. This will help replicate the results in future batches.' },
    ],
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
    faq: [
      { question: 'Are these substitutions exact?', answer: 'No — these are guidelines. Texture, flavor, and chemistry change depending on the recipe. Start with the suggested amounts and adjust as needed based on your results.' },
      { question: 'Can I trust volume-based swaps for all recipes?', answer: 'Volume swaps are convenient, but weight-based measurements are more accurate. For critical baking, prefer weight measurements when possible to ensure success.' },
      { question: 'Why only cup, tbsp, and tsp?', answer: 'These units cover most home-cooking scenarios and are easy to convert. If you need weight-based conversions, consider using a scale or a different tool focused on grams and ounces.' },
    ],
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
    faq: [
      { question: 'Can I use discounts greater than 100%?', answer: 'No. Discounts greater than 100% would imply the seller pays the buyer. Enter realistic values between 0 and 100 for meaningful results.' },
      { question: 'Does the calculator round the result?', answer: 'Yes. The final price and savings are rounded to two decimal places to match standard currency formatting.' },
      { question: 'Can I download the calculation?', answer: 'Yes. Use the "Download PDF" option to save the inputs and results as a PDF for record-keeping or sharing.' },
      { question: 'What if the original price is zero?', answer: 'If the original price is zero, the final price will also be zero, regardless of the discount percentage entered.' },
      { question: 'Is this calculator available for mobile devices?', answer: 'Yes! Our percentage off calculator is fully responsive and works seamlessly on all mobile devices.' },
    ],
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
    faq: [
      { question: 'Do I have to include a tip?', answer: 'No. Set the tip percentage to 0% to split only the base bill.' },
      { question: 'What if the number of people isn\'t a whole number?', answer: 'The calculator expects the number of people to be a whole number (1 or more). For fractional cases (e.g., someone pays half), adjust the inputs manually or compute their share separately.' },
      { question: 'Can I use this for currency other than USD?', answer: 'Yes. The calculator shows numerical results. Prepend/append your local currency symbol mentally or when sharing results. When downloading the PDF, you can interpret the values in any currency.' },
    ],
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
    faq: [
      { question: 'Can I use this for electric vehicles?', answer: 'This calculator is designed for liquid fuel (gallons) and miles per gallon. For electric vehicles, use range and energy consumption metrics (kWh per mile) and adapt the inputs accordingly. It’s essential to approach costs from a mileage standpoint for any vehicle type.' },
      { question: 'What if I only know fuel price and miles?', answer: 'You need fuel used (gallons) to compute mpg and cost per mile. If you know only price and miles, estimate gallons by dividing total fuel cost by price per gallon. This makes it critical to keep track of your expenses.' },
      { question: 'Why is cost per mile useful?', answer: 'Cost per mile helps compare overall running costs between vehicles and informs budgeting decisions for trips or fleet management. Understanding your expenses can help you make wiser financial decisions regarding travel and vehicle maintenance.' },
    ],
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
    faq: [
      { question: 'Can I use this for footings and walls?', answer: 'Yes. For simple rectangular footings or wall sections, you can use the same volume formula. For complex or reinforced structures, consult a structural engineer.' },
      { question: 'How much extra should I order?', answer: 'typical allowance is 5–10% for waste, spillage, and over-excavation. Use the higher end for large or difficult pours.' },
      { question: 'Can I convert the result to bags of cement?', answer: 'This calculator provides volume only. Bag counts depend on mix design and bag sizes; consult supplier specs or use a dedicated bag calculator for accurate counts.' },
      { question: 'What if my project has irregular shapes?', answer: 'For irregular shapes, divide the area into manageable sections and apply the formula for each section, then sum the results for the total volume required.' },
    ],
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
    faq: [
      { question: 'Can I enter measurements in feet?', answer: 'Yes. Select feet (ft) from the unit dropdown. The calculator converts your input to meters internally and shows results in square meters (m²).' },
      { question: 'What waste percentage should I use for carpet?', answer: 'For simple rectangular rooms, 5–10% is usually enough. For rooms with alcoves, obstructions, or patterned carpet, consider 10–15% or ask your installer for a recommendation.' },
      { question: 'Does the calculator account for seams or roll width?', answer: 'This tool provides a general estimate including waste. For precise ordering (considering roll widths, seam placement, and pattern repeats), consult a professional installer or supplier.' },
    ],
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
    faq: [
      { question: 'Do I need to round up panels?', answer: 'Yes. Panels are installed as whole units. The calculator rounds up to ensure you have enough panels to cover the full perimeter.' },
      { question: 'How do posts per panel work?', answer: 'Most panels share a post with adjacent panels. If you specify 2 posts per panel, that assumes each panel has a post on each end. Adjust this number based on your specific panel and post layout (some systems use fewer posts).' },
      { question: 'Should I include gates in the perimeter?', answer: 'Yes — include gates in the total perimeter measurement. Remember that gates often require extra posts for hinging and latching, so you may need additional posts beyond the calculator\'s basic estimate.' },
      { question: 'What kind of materials should I consider for my fence?', answer: 'Consider the climate, purpose, and aesthetics. Common materials include wood, vinyl, metal, and chain link. Each has its durability, maintenance, and appearance characteristics.' },
      { question: 'How can I ensure my fence remains durable?', answer: 'Regular maintenance, such as treating wood and checking for damage, ensures a longer lifespan. Choosing quality materials that withstand local weather conditions also contributes to durability.' },
    ],
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
    faq: [
      { question: 'Does this calculator account for taxes?', answer: 'No — this tool calculates gross pay before taxes and deductions. For net pay, apply tax rates and any withholdings applicable to your situation.' },
      { question: 'What if my overtime rate changes week to week?', answer: 'If rates vary, calculate each pay period separately and sum the results. This calculator is designed for a single pay period with uniform rates.' },
      { question: 'Is overtime always paid after 40 hours?', answer: 'Not always. While 40 hours is a common threshold in many jurisdictions and companies, local labor laws or contracts may define different thresholds. Check your local regulations or employment agreement.' },
      { question: 'How can I ensure I receive my overtime pay?', answer: 'lways keep a record of your hours worked. Report any discrepancies to your HR department promptly and know your rights as an employee based on local laws.' },
      { question: 'Can salaried employees receive overtime pay?', answer: 'Yes, in some cases. It depends on the employee classification and local labor laws. Some salaried positions are exempt from overtime, while others are entitled to it.' },
    ],
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
    faq: [
      { question: 'What if I enter zero hours?', answer: 'The calculator needs a positive time value to compute tasks-per-hour. If time is zero or empty, tasks-per-hour will not be calculated, which could lead to inaccurate productivity metrics.' },
      { question: 'Can I use this Productivity Calculator for teams?', answer: 'Yes. Aggregate tasks and total hours across the team to compute team-level productivity metrics. This will also allow you to address team inefficiencies more effectively.' },
      { question: 'How should I interpret the Productivity Index?', answer: 'Higher values indicate better performance relative to your target and pace. Use it to compare days or shifts — it normalizes rate with goal attainment, making it easier to gauge productivity levels among different periods or individuals.' },
      { question: 'How often should I use the Productivity Calculator?', answer: 'For best results, use the calculator daily or weekly. This way, you can notice trends in your productivity and make timely adjustments to your workflow as needed.' },
    ],
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
    faq: [
      { question: 'Can I compare future birth dates?', answer: 'This tool is designed for real birth dates up to today. If a birth date in the future is entered, the calculator will not return a valid age for that person, helping you avoid inaccuracies in your planning.' },
      { question: 'How precise is the age difference?', answer: 'Ages are shown in years, months, and days for clarity. The age difference is provided as an exact day count and as a decimal year approximation using the average year length (365.2425 days). This precision helps in understanding relationships effectively.' },
      { question: 'Can I export the results?', answer: 'Yes — use the PDF download button to generate a simple report containing the input dates and computed results, making it easy to share and keep for future reference.' },
    ],
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
    faq: [
      { question: 'What if the start date is after the current date?', answer: 'The tool will indicate that the start date is after the current date. If you\'d like a positive duration, swap the dates or enter the true start and end dates.' },
      { question: 'Does the calculator account for leap years?', answer: 'Yes. The total-day calculation uses actual JavaScript date differences (milliseconds between dates) which handles leap years. The years/months/days breakdown also accounts for varying month lengths.' },
      { question: 'Can I save or print the result?', answer: 'Yes. Use the "Download PDF" function in the calculator to generate a printable summary of the inputs and results.' },
      { question: 'What are some common uses for this calculator?', answer: 'Common uses include planning anniversary celebrations, reflecting on personal growth within the relationship, determining legal timelines, and maintaining personal records.' },
    ],
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
    faq: [
      { question: 'Is this conversion exact?', answer: 'No — it is an approximation intended to help compare pet ages with human aging. Breed, genetics, diet, and healthcare affect the actual aging process.' },
      { question: 'Why does the first year count so much?', answer: 'Pets mature much faster in their first years compared to humans. The first and second years capture major developmental stages, so they are weighted more heavily.' },
      { question: 'Can this be used for other pets?', answer: 'This tool is designed for dogs and cats only. Other species require different conversion rules.' },
      { question: 'What factors can affect my pet\'s aging?', answer: 'Several factors can influence the aging process of pets, including genetics, living conditions, diet, exercise, and healthcare. Regular vet visits can help monitor your pet\'s health and aging.' },
    ],
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
    faq: [
      { question: 'Can I use different units (e.g., kilometers and hours)?', answer: 'Yes — but convert all inputs to meters and seconds before using this calculator. For example, convert kilometers to meters (1 km = 1000 m) and hours to seconds (1 h = 3600 s).' },
      { question: 'What happens if time is zero?', answer: 'Division by zero is undefined. Ensure time > 0. This calculator will not show a result for time equal to zero, as that doesn’t physically represent a valid scenario.' },
      { question: 'Is direction considered in velocity?', answer: 'This tool calculates the scalar magnitude (speed). To include direction, provide vector components and use vector arithmetic to represent velocity accurately.' },
      { question: 'How can I apply velocity in practical scenarios?', answer: 'Velocity Calculator — compute velocity quickly and accurately by entering distance in meters and time in seconds. Ideal for physics students, engineers, and hobbyists performing kinematics calculations. With the help of this calculator, users can effectively determine how quickly they or objects in their environments are moving, aiding in better planning and execution of various tasks.' },
    ],
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
    faq: [
      { question: 'Can mass be zero or negative?', answer: 'Physically, mass is always non-negative. In the calculator mass should be entered as a non-negative value in kilograms.' },
      { question: 'Can velocity be negative?', answer: 'Yes. A negative velocity indicates motion in the opposite direction. Momentum will also be negative in that case, indicating direction.' },
      { question: 'Does the calculator handle units other than SI?', answer: 'This calculator expects SI units: mass in kilograms and velocity in meters per second. To use other units, convert them to SI first (for example, grams to kilograms or km/h to m/s).' },
      { question: 'How is momentum utilized in real-life scenarios?', answer: 'Momentum is applied in various fields including sports, vehicle safety design, and even in analyzing the trajectory of projectiles. Understanding momentum allows for better predictions in these scenarios, ensuring improved safety and efficiency.' },
    ],
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
    faq: [
      { question: 'What are the units of work?', answer: 'Work is measured in joules (J). One joule is equal to one newton-meter (1 J = 1 N·m).' },
      { question: 'What if the angle is 90°?', answer: 'If θ = 90°, cos(90°) = 0, so the work done is zero because the force is perpendicular to the displacement and does not move the object in the force\'s direction.' },
      { question: 'Can work be negative?', answer: 'Yes. If the component of the force along the displacement is opposite to the displacement (cos(θ) is negative), the work is negative, indicating that the force removes energy from the system.' },
      { question: 'How is work different from energy?', answer: 'Work is a transfer of energy. While work measures the energy transfer resulting from movement, energy itself is a property of a system that can exist in various forms, such as kinetic, potential, and thermal energy.' },
    ],
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
    faq: [
      { question: 'Does this consider air resistance?', answer: 'No. This calculator assumes a vacuum (no air resistance). Real projectiles will be affected by drag which reduces range and alters trajectory.' },
      { question: 'Can I use other units?', answer: 'Inputs are expected in SI units: meters, seconds, and meters per second. Convert other units to SI before using the calculator.' },
      { question: 'What if the initial height is negative?', answer: 'Negative initial height is allowed, but ensure it is physically meaningful for your scenario. If solutions are not real (e.g., discriminant negative), the calculator will not show results.' },
      { question: 'What other factors can I consider?', answer: 'You may also consider factors like air density, wind speed, and object\'s shape which can impact the motion in real-world scenarios beyond this simple calculator\'s assumptions.' },
    ],
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
    faq: [
      { question: 'Does the direction of velocity matter?', answer: 'Centripetal force depends on the speed (magnitude of velocity), not its direction. However, the force always points toward the center of the circular path, perpendicular to the instantaneous velocity, helping maintain the circular motion of the object.' },
      { question: 'What happens if the radius is zero?', answer: 'radius of zero is non-physical for circular motion and would mathematically produce an infinite force. Ensure that the radius is a positive number when using the calculator to prevent undefined or erroneous calculations.' },
      { question: 'Can this be used for rotation about an axis?', answer: 'Yes. For objects moving in a circular path around an axis, use the tangential speed at the radius of interest for v. If you have angular speed ω (rad/s), convert it using the formula v = ω × r, thus applying centripetal force concepts in rotational dynamics.' },
      { question: 'How does centripetal force relate to gravitational force?', answer: 'In many cases, such as satellites orbiting planets, gravitational force acts as the centripetal force. The mutual attraction between the celestial bodies provides the necessary centripetal force to keep the satellites in stable orbits, demonstrating the interconnectedness of these fundamental forces in physics.' },
    ],
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
    faq: [
      { question: 'Is the Ideal Gas Law always accurate?', answer: 'The Ideal Gas Law is an approximation that works well for many gases at moderate temperatures and low pressures. Real gases can deviate from ideal behavior at high pressures and low temperatures due to intermolecular forces and the finite volume of molecules.' },
      { question: 'What units should I use?', answer: 'Use SI units: pressure in pascals (Pa), volume in cubic meters (m³), temperature in kelvin (K), and amount in moles (mol). The calculator assumes these units for correct results.' },
      { question: 'Why does the calculator sometimes show a difference between provided and calculated pressure?', answer: 'When all four properties are provided, the calculator computes the pressure from n, R, T, and V and compares it against the provided pressure. Small differences can arise from rounding or measurement error. Large disagreements indicate inconsistent inputs or non-ideal gas behavior.' },
      { question: 'Can the Ideal Gas Law be applied to real gases?', answer: 'While the Ideal Gas Law offers great easy calculations for many scenarios, it does not perfectly describe real gases. When accuracy is critical, especially under high pressure or low temperature, use more complex equations of state.' },
    ],
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
    faq: [
      { question: 'Does this calculator account for joins and overlaps?', answer: 'No. This tool assumes boards are placed side-by-side without gaps or overlaps. For decking, siding, or other installations that require spacing or overlap, manually adjust the effective board width or add a waste percentage.' },
      { question: 'Why are board sizes given in inches?', answer: 'Lumber is commonly specified by nominal inches (e.g., 2x4). The calculator converts these nominal inch values to meters for metric calculations using a conversion factor (1 in = 0.0254 m).' },
      { question: 'Should I add extra boards?', answer: 'Yes. Always add extra material to account for cutting waste, mistakes, and defective boards. Typical allowances range from 5% to 15% depending on the complexity of the job.' },
      { question: 'What types of lumber are best for various projects?', answer: 'The best type of lumber depends on the specifics of your project. Softwoods are usually suitable for framing and indoor projects, while hardwoods are favored for furniture and high-traffic areas. Consider factors like weather durability and aesthetics.' },
    ],
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
    faq: [
      { question: 'Does this include the ceiling?', answer: 'No. This calculator estimates drywall for the walls only. To include the ceiling, add the ceiling area (length × width) to the total before dividing by sheet area.' },
      { question: 'How much extra should I buy?', answer: 'common recommendation is to purchase an additional 5–10% to cover waste and mistakes. For complex rooms with many openings or angles, consider 10–15% extra.' },
      { question: 'Can I change the sheet size?', answer: 'Yes. Use the sheet size selector in the calculator to pick a different sheet dimension. The calculator will immediately recalculate using the selected sheet area.' },
    ],
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
    faq: [
      { question: 'Can I use this for tiles or planks?', answer: 'Yes. This tool provides the area in square meters. To convert area into number of tiles or boxes, divide the total area by the coverage area of one tile/box (account for grout gaps when necessary).' },
      { question: 'What waste percentage should I use?', answer: 'For straight-lay plank flooring, 5–8% is common. For diagonal installs, complex cuts, or patterned tiles, use 10–15% or more. When in doubt, consult your installer or supplier.' },
      { question: 'Does the calculator consider doorways and closets?', answer: 'No. This calculator computes gross area. Subtract areas for large permanent fixtures if you need a net material estimate, but many installers recommend ordering a bit extra rather than risking a shortage.' },
      { question: 'What if my room has an irregular shape?', answer: 'For irregularly shaped rooms, divide the room into smaller sections, calculate each section\'s area, and then sum the areas to get the total. This will give you a more accurate estimate for flooring needs.' },
    ],
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
    faq: [
      { question: 'Can I use this for hip or multi-faceted roofs?', answer: 'This calculator assumes a simple gable roof with two identical slopes. For hips, valleys, dormers, or multiple roof planes, break the roof into sections, calculate each section separately, and sum the results. Increase the waste factor to cover additional cuts and complexity.' },
      { question: 'What pitch should I enter?', answer: 'Enter the roof pitch as an angle in degrees (0–89). Avoid values of 90° which are vertical walls. If you only know rise/run, convert to degrees using arctan(rise/run) × (180/π).' },
      { question: 'Does the calculator include underlayment or fixings?', answer: 'No. This tool estimates roof covering area and sheet counts. Underlayment, nails, screws, flashing, ridge caps, and other accessories should be estimated separately based on product specifications and linear measurements.' },
    ],
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
    faq: [
      { question: 'Can I use this for continuous spans or distributed loads?', answer: 'No — this calculator assumes a simply supported beam with a central point load. For distributed loads or continuous spans, use a different analysis or consult a structural engineer.' },
      { question: 'Does it check shear or deflection?', answer: 'No — it provides bending moment and required section modulus only. Check shear capacity and deflection limits separately using appropriate formulas and standards.' },
      { question: 'Are the material values exact?', answer: 'Material values are representative. For design, use certified material properties and local code values. Values vary by grade, treatment, and factors of safety, which is essential for accurate and safe design calculations.' },
      { question: 'Is this calculator suitable for every type of beam?', answer: 'This calculator is specifically designed for simply supported beams with central point loads. For other beam types such as cantilever or fixed beams, consult appropriate resources or engineers for specific analyses.' },
    ],
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
    faq: [
      { question: 'Do I need more joists at the edges?', answer: 'The calculator adds an extra joist to account for an end joist on each side in a simplified way. For engineered designs, consider ledger attachments, rim joists, and local code requirements.' },
      { question: 'What board width should I use?', answer: 'This tool assumes 140 mm (14 cm) board width by default. If you use narrower or wider boards, update the calculator assumptions in your planning stage or manually adjust counts.' },
      { question: 'Are screw estimates accurate?', answer: 'Screw estimates are approximate. Different manufacturers recommend different fastener spacing, and hidden fasteners change requirements. Use the screw estimate as a starting point and consult product guidance for final quantities.' },
      { question: 'How can I improve my deck design?', answer: 'Consider factors such as sun exposure, drainage, and deck height. Consulting a professional deck designer can provide tailored solutions and innovative ideas to enhance your deck\'s usability and aesthetic appeal.' },
    ],
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
    faq: [
      { question: 'Does this calculator consider cable temperature or material?', answer: 'No. This calculator uses a simple resistance per meter value you provide. For temperature and material effects, use manufacturer cable tables or more advanced engineering tools.' },
      { question: 'Should I include the return conductor?', answer: 'Yes. The calculator multiplies distance by 2 to account for the round-trip (supply and return) conductor path for single-phase circuits.' },
      { question: 'What is an acceptable percentage voltage drop?', answer: 'Industry guidance often recommends keeping voltage drop to within 3% for feeders and 3% for branch circuits (total 6%). Refer to local electrical codes and standards for exact requirements.' },
      { question: 'How do I interpret the results from the voltage drop calculator?', answer: 'The output of the calculator will help you determine if your current setup is viable. If the voltage drop exceeds 5% of the nominal supply, it typically indicates a need for reevaluation of wiring or component selection.' },
    ],
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
    faq: [
      { question: 'Can I use this calculator for three-phase systems?', answer: 'This calculator assumes a simple single-phase calculation (I = P ÷ V). For three-phase systems, the formula changes to I = P ÷ (√3 × V × powerFactor) for line-to-line voltages. Adjust your inputs accordingly or consult an electrical engineer.' },
      { question: 'Why is a safety factor important in circuit breaker sizing?', answer: 'Safety factors account for startup currents, inrush, future load growth, and other uncertainties that can affect current draw. Typical values range from 115% to 125%, but specific applications may require adjusting the margins.' },
      { question: 'Does the recommended breaker size equal the conductor size?', answer: 'Not necessarily. Conductor sizing depends on ampacity tables, installation method, and any derating factors that may apply. This tool recommends a breaker size; always select conductor sizes based on code tables and actual installation conditions.' },
      { question: 'Can a circuit breaker wear out, and how often should I check it?', answer: 'Yes, circuit breakers can wear out over time due to mechanical stress and electrical loads. It\'s important to inspect them regularly, especially in older systems, and consider replacement if frequent tripping occurs.' },
    ],
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
    faq: [
      { question: 'Can I use this Pipe Size Calculator for other fluids?', answer: 'This calculator assumes incompressible flow and uses velocity as the design parameter. For viscous or compressible fluids, or if temperature significantly changes density, use fluid-specific hydraulic calculations.' },
      { question: 'Why is velocity important in pipe design?', answer: 'Velocity impacts pressure drop and noise. Designing for an appropriate velocity balances pipe cost and energy losses in pumping. Too high a velocity can lead to cavitation, while too low can result in sedimentation.' },
      { question: 'How to choose a standard pipe size effectively?', answer: 'fter calculating the theoretical diameter, consult pipe standard nominal sizes (e.g., DN series, NPS/IPS). Select a nominal size that provides equal or larger internal diameter than computed. A higher nominal size can enhance flow rates further.' },
      { question: 'What are the common applications for this calculator?', answer: 'The Pipe Size Calculator is widely used in construction, plumbing, and water management sectors. It is essential for designing efficient irrigation systems, sewage systems, and even heating and cooling applications in buildings.' },
      { question: 'What impact does temperature have on pipe size?', answer: 'Temperature changes can affect fluid density and therefore flow. Always consider temperature variations during design to ensure optimal performance and compliance with safety regulations.' },
    ],
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
    faq: [
      { question: 'Do I need to convert units first?', answer: 'No. Enter the diameter in centimeters and velocity in m/s — the calculator converts the diameter to meters internally.' },
      { question: 'What assumptions does this calculator make?', answer: 'It assumes steady uniform flow with the velocity you provide representing the average cross-sectional velocity. It does not account for frictional losses, turbulence, or changes in elevation.' },
      { question: 'Why provide results in multiple units?', answer: 'Different industries and reports use different flow units. Showing m³/s, L/s, and m³/h makes it easier to use results directly in calculations or specifications.' },
      { question: 'What factors can affect water flow rates?', answer: 'The flow rate can be influenced by various factors including pipe diameter, length, material, elevation changes, and the presence of fittings or bends that can create resistance.' },
      { question: 'How can I apply this calculator in real scenarios?', answer: 'You can use this calculator for tasks like designing a sprinkler system, determining the capacity of a water supply system, or optimizing the sizing of pipes in a building\'s plumbing network.' },
    ],
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
    faq: [
      { question: 'Can I use this for dihybrid crosses?', answer: 'This calculator is designed for single-gene (monohybrid) crosses. For dihybrid or more complex crosses, each parent produces more gamete combinations and a larger Punnett square is required. Consider using a dihybrid-specific tool or manually expand the gametes for multiple loci.' },
      { question: 'What notation should I use for genotypes?', answer: 'Use two-letter genotypes per parent for the same locus (e.g., AA, Aa, or aa). Uppercase letters denote the dominant allele; lowercase denotes the recessive allele.' },
      { question: 'Why does the tool show 75% dominant for Aa × Aa?', answer: 'In an Aa × Aa cross, the possible offspring genotypes are AA, Aa, and aa. AA and Aa both display the dominant phenotype, giving 3 out of 4 (75%) dominant and 1 out of 4 (25%) recessive.' },
      { question: 'How accurate is the Punnett Square?', answer: 'The Punnett square provides probabilities based on Mendelian genetics. While it offers insights into genetic inheritance under ideal conditions, real-life breeding may be influenced by additional factors, including environmental influences and genetic linkage.' },
    ],
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
    faq: [
      { question: 'What characters are allowed?', answer: 'Only the letters A, T, C, and G (case-insensitive) are allowed. Spaces are ignored, and invalid characters will prevent calculation.' },
      { question: 'Can I analyze RNA sequences?', answer: 'This tool is specifically designed for DNA sequences. For RNA, replace T with U and consider utilizing an RNA-specific calculator.' },
      { question: 'How is GC content calculated?', answer: 'GC content is computed as (G + C) / total_length × 100 and is presented to two decimal places.' },
    ],
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
    faq: [
      { question: 'Can this calculator handle zero counts?', answer: 'Yes. If the total number of individuals is zero, the calculator will not produce allele frequencies. For any positive total, frequencies are computed normally.' },
      { question: 'Does this assume Hardy-Weinberg equilibrium?', answer: 'No — the calculator simply computes observed allele frequencies from genotype counts. Hardy-Weinberg equilibrium is an additional assumption about genotype frequencies given allele frequencies; you can compare observed genotype proportions to expected HWE proportions using p and q = 1 − p if desired.' },
      { question: 'Why are allele frequencies useful?', answer: 'llele frequencies summarize genetic variation in populations and are used in studies of evolution, conservation genetics, disease gene mapping, and population structure analyses. They provide insights into how genetics influence traits and health, making them a cornerstone of biological research.' },
    ],
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
    faq: [
      { question: 'What if initial population is zero?', answer: 'The formulas require positive initial and final population values. If N0 is zero, the continuous rate and CAGR are undefined. Use alternative modeling approaches or add a small positive offset if appropriate for your study.' },
      { question: 'Can time be fractional?', answer: 'Yes. Time can be any positive real number (e.g., years, months, days) as long as units are consistent across the inputs.' },
      { question: 'How do I interpret negative growth?', answer: 'If the final population is smaller than the initial population, both r and CAGR will be negative, indicating a declining population over the time period.' },
    ],
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
    faq: [
      { question: 'What if I have zeros or empty entries?', answer: 'Zeros are allowed and will reduce contributions to indices. Empty entries will be ignored when parsing; ensure values are separated by commas for accurate calculations.' },
      { question: 'Which index should I use?', answer: 'Shannon\'s index is sensitive to rare species, capturing both richness and evenness, making it valuable in ecological studies. Simpson\'s index emphasizes the dominance of common species, so use the index that best fits your ecological question.' },
      { question: 'Can I compare samples?', answer: 'Yes — compute indices for multiple samples separately and compare values. Be mindful of sample size effects, and consider rarefaction or standardized sampling if sample sizes differ greatly.' },
      { question: 'How accurate are the indices provided?', answer: 'The indices provided by the calculator are estimates based on input data. For more rigorous statistical analyses, it is recommended to use specialized ecological statistics software.' },
    ],
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
    faq: [
      { question: 'What if my volume is in µL?', answer: 'Convert µL to mL before using the calculator (1 µL = 0.001 mL). For example, 100 µL = 0.1 mL.' },
      { question: 'Can I use this for colony counts on plates?', answer: 'Yes. For plate counts, use the number of colonies counted, the dilution factor, and the plated volume (in mL) to compute CFU/mL using the same formula.' },
      { question: 'Why is my calculated concentration extremely high?', answer: 'Check that the dilution factor and volume are correct and that the units are mL. Large dilution factors or small volumes produce large concentrations; ensure your sample preparation and counting are accurate.' },
      { question: 'How accurate is the cell count calculator?', answer: 'The accuracy of the calculator depends on the accuracy of the inputs you provide, including the cell count, dilution factor, and volume. Regular calibration and validation of your counting technique will help improve accuracy.' },
      { question: 'Can this calculator help in determining viable cell counts?', answer: 'While the calculator provides total cell counts, viable cell counts require additional assessments such as trypan blue exclusion or other viability assays to determine the proportion of living cells in your sample.' },
    ],
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
    faq: [
      { question: 'Can I increase concentration using this calculator?', answer: 'No — this calculator assumes you are diluting (reducing concentration). If the desired final concentration (C2) is greater than the initial stock concentration (C1), the computed stock volume (V1) will exceed the final volume (V2), indicating that concentrating is required.' },
      { question: 'Does the calculator handle unit conversions?', answer: 'No — ensure that concentration units and volume units are consistent before entering values (e.g., mL for volume and the same concentration units for C1 and C2). The result is provided in the same volume units you enter (mL by default).' },
      { question: 'How precise are the results?', answer: 'Results are rounded to six decimal places for display. For experimental work, round or adjust based on the precision of your measuring equipment and lab protocols.' },
    ],
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
    faq: [
      { question: 'What value should I use for "number of particles"?', answer: 'Use the number of particles produced when one formula unit dissolves. For non-electrolytes (e.g., glucose), this is 1. For NaCl it\'s 2, for CaCl2 it\'s 3, etc. When in doubt, use the van \'t Hoff factor for the solute.' },
      { question: 'What\'s the difference between osmolarity and osmolality?', answer: 'Osmolarity is osmoles per liter of solution (Osm/L), while osmolality is osmoles per kilogram of solvent (Osm/kg). This calculator computes osmolarity. For most dilute aqueous solutions the difference is small, but for precise work use osmolality when mass-based concentration is required.' },
      { question: 'Can I use this for ionic solutions?', answer: 'Yes — include the number of ions produced per formula unit as the particles value. Note that incomplete dissociation or ionic pairing in concentrated solutions may alter the effective number of particles; for concentrated electrolytes, empirical measurements or activity corrections may be necessary.' },
    ],
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
    faq: [
      { question: 'What is Km?', answer: 'Km (Michaelis constant) is the substrate concentration at which the reaction rate is half of Vmax for a simple Michaelis-Menten enzyme system. It provides insight into the affinity of the enzyme for the substrate: a lower Km indicates higher affinity.' },
      { question: 'Can I calculate Vmax from a single measurement?', answer: 'No — Vmax is best determined by analyzing multiple measurements across a range of substrate concentrations and fitting the data to the Michaelis-Menten model. This tool assumes you provide an estimated Vmax.' },
      { question: 'Why does the calculator require v &lt; Vmax?', answer: 'Mathematically, solving for Km from the rearranged Michaelis-Menten equation requires v to be greater than 0 and less than Vmax to produce a positive, finite Km. If v ≥ Vmax, the formula would produce zero or negative Km values which are biologically implausible for normal Michaelis-Menten kinetics.' },
    ],
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
    faq: [
      { question: 'What if the final amount is greater than or equal to the initial amount?', answer: 'The formula assumes decay (final < initial). If final >= initial, the half-life for decay is not defined; you may be observing growth or measurement error.' },
      { question: 'Can I use different units (seconds, minutes, hours)?', answer: 'Yes. The calculator returns the half-life in the same units as the Time Period you enter. Ensure consistency when interpreting results.' },
      { question: 'Is this valid for all biological processes?', answer: 'This tool is valid for processes that follow first-order kinetics (exponential decay). Some biological systems follow more complex dynamics; use appropriate models in those cases.' },
    ],
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
    faq: [
      { question: 'What if my molar mass is not known?', answer: 'You can calculate molar mass by summing the atomic masses of all atoms in the molecular formula. Use a periodic table or database to find atomic masses (in g/mol).' },
      { question: 'Can mass be negative?', answer: 'No. Mass should be a non-negative value. The calculator validates inputs and will not produce a result if the mass is negative or the molar mass is zero or not provided.' },
      { question: 'Why are chart bars different units?', answer: 'The chart displays both input values (grams and grams per mole) and the computed moles. These values have different units; the chart is intended to give a quick visual overview rather than a strict unit-comparable plot.' },
    ],
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
    faq: [
      { question: 'How is molality different from molarity?', answer: 'Molarity (M) is moles of solute per liter of solution and depends on temperature-sensitive volume. Molality (m) is moles of solute per kilogram of solvent and is independent of temperature.' },
      { question: 'Can molality be used for very dilute solutions?', answer: 'Yes. Molality is valid for dilute and concentrated solutions. For very dilute aqueous solutions, molality and molarity values can be similar but are not identical.' },
      { question: 'What units should I use?', answer: 'Use moles (mol) for the solute amount and kilograms (kg) for the solvent mass. Convert grams to kilograms by dividing by 1000 if needed.' },
    ],
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
    faq: [
      { question: 'What if my formula includes an element not listed?', answer: 'The calculator relies on an internal table of atomic weights. If an element is not recognized, you\'ll see an error listing the unknown symbol(s). You can request to add that element\'s atomic weight to the dataset.' },
      { question: 'Can I use fractional subscripts or hydrates (e.g., CuSO4·5H2O)?', answer: 'The current parser handles integer counts and nested parentheses. For hydrates using a middle dot (·), replace the dot with a plus sign or expand the hydrate explicitly (e.g., CuSO4 + 5H2O) or enter CuSO4(H2O)5.' },
      { question: 'Are results rounded?', answer: 'Results displayed by the calculator are rounded to a sensible number of decimal places, but the PDF download includes values with greater precision where applicable.' },
    ],
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
    faq: [
      { question: 'Why assume a 100 g sample?', answer: 'Percent compositions are relative. Assuming 100 g makes conversion to grams direct and simplifies the mole calculations.' },
      { question: 'What if the ratios are not exact integers?', answer: 'The calculator attempts small integer multipliers (1–12) to find the simplest whole-number ratio. This mirrors typical lab rounding procedures for empirical formula determination.' },
      { question: 'Can this give the molecular formula?', answer: 'The empirical formula shows the simplest whole-number ratio of atoms. To get the molecular formula, you also need the compound\'s molar mass and then determine the multiple between the empirical formula mass and the molecular mass.' },
    ],
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
    faq: [
      { question: 'What does C1V1 = C2V2 mean?', answer: 'It expresses conservation of solute amount. The moles of solute in the aliquot of stock (C1 × V1) equals the moles in the final diluted solution (C2 × V2).' },
      { question: 'Can I use different units?', answer: 'Yes, but keep them consistent. If you use mL for volume, ensure both V1 and V2 are in mL. The calculator uses liters internally and also displays milliliters for convenience.' },
      { question: 'What if C1 &lt; C2?', answer: 'If the stock concentration (C1) is lower than the desired final concentration (C2), you cannot obtain the desired concentration by dilution — you would need a more concentrated stock or to perform a concentration step.' },
    ],
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
    faq: [
      { question: 'What if I enter 0 or a negative concentration?', answer: 'Hydrogen ion concentration must be greater than 0. The calculator will not produce a valid pH for zero or negative values.' },
      { question: 'Does the calculator account for temperature?', answer: 'This calculator uses Kw = 1e-14, which is valid at 25°C. For solutions at different temperatures, Kw changes and pH + pOH will not necessarily equal 14.' },
      { question: 'Can I convert pH to hydrogen ion concentration?', answer: 'Yes — [H+] = 10^(-pH). Use the inverse relationship if you need to compute concentration from pH.' },
      { question: 'Why is pH important in chemistry?', answer: 'pH is crucial because it affects chemical reactions, biological processes, and the solubility of compounds. Many enzymes, for example, only function within a certain pH range.' },
      { question: 'Are there any tools to measure pH in real-time?', answer: 'Yes, there are various pH meters and strips that provide instant readings for solutions, which is useful in laboratory and field settings.' },
    ],
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
    faq: [
      { question: 'Can I enter negative heat values?', answer: 'Yes. Negative heat indicates an exothermic process where heat is released. The result will be negative, reflecting the direction of heat flow.' },
      { question: 'What unit should heat be in for the calculator?', answer: 'Heat should be entered in joules (J). If your data is in kilojoules (kJ), convert to joules first by multiplying by 1000.' },
      { question: 'How is the result converted to kJ/mol?', answer: 'The calculator computes ΔH in the base unit (J/mol) and then converts to kJ/mol by dividing by 1000, ensuring consistent and accurate conversions.' },
      { question: 'Why is understanding ΔH important?', answer: 'Knowing the enthalpy change helps predict whether a reaction is favorable and assists in energy management during chemical processes, which is especially useful in industrial applications.' },
    ],
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
    faq: [
      { question: 'Can I use this for irreversible processes?', answer: 'No. This calculator uses ΔS = Q_rev / T which applies for reversible heat transfer at constant temperature. Irreversible processes require different analysis (e.g., calculating entropy production).' },
      { question: 'What if temperature is not constant during the process?', answer: 'If temperature varies, compute ΔS by integrating dQ_rev/T over the process: ΔS = ∫(dQ_rev / T). This tool assumes constant T for simplicity.' },
      { question: 'Why must temperature be in kelvin?', answer: 'Entropy is defined using absolute temperature. Using Celsius or Fahrenheit will yield incorrect results unless converted to kelvin. This ensures the calculations align with the thermodynamic principles.' },
      { question: 'What does a positive or negative ΔS indicate?', answer: 'positive ΔS signifies an increase in entropy or disorder, suggesting the process is spontaneous under the given conditions. Conversely, a negative ΔS indicates decreased disorder, commonly associated with non-spontaneous reactions.' },
    ],
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
    faq: [
      { question: 'Can I use negative Δ[A] values?', answer: 'Yes. A negative Δ[A] indicates consumption of a reactant and will produce a negative average rate. Interpret the sign accordingly.' },
    ],
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
    faq: [
      { question: 'What if my coefficients order is different?', answer: 'Use the "Order" selector to indicate whether coefficients are listed as products then reactants or reactants then products. The default is products then reactants.' },
      { question: 'Does the calculator handle activities?', answer: 'This tool uses concentrations (Kc). For activity-based calculations, you would substitute activity values for concentrations before using the calculator.' },
      { question: 'How precise is the result?', answer: 'Results are displayed with up to six significant digits by default. Extremely large or small values may be shown in exponential form.' },
      { question: 'Why is the equilibrium constant important?', answer: 'The equilibrium constant helps predict the behavior of a reaction under specified conditions, making it a pivotal concept in chemical thermodynamics and kinetics.' },
      { question: 'Can this calculator be used for all reactions?', answer: 'Yes, as long as you have the appropriate concentrations and stoichiometric coefficients, this calculator can be used for various chemical reactions across different contexts.' },
    ],
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
    faq: [
      { question: 'Can I enter fractional or negative values?', answer: 'You can enter decimal values (e.g., 436.5). Negative bond energies are unusual for typical bond dissociation energies and will be treated as numeric inputs, but interpret negative values with caution.' },
      { question: 'Should I include units when typing values?', answer: 'No. Enter plain numbers separated by commas. Select the correct unit (kJ/mol or J/mol) from the unit selector. If you enter values in J/mol, the calculator will convert them to kJ/mol for the summary.' },
      { question: 'How accurate is this method?', answer: 'This approach gives a quick approximation and is useful for qualitative predictions (endothermic vs exothermic). For quantitative accuracy use experimental enthalpies or computational chemistry methods that account for molecular structure and environment.' },
    ],
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
    faq: [
      { question: 'Is this prediction exact?', answer: 'No — it\'s an estimate. Individual physiology, training, and conditions make exact prediction impossible. Use it as a guideline to help shape your training and racing strategies.' },
      { question: 'Can I use any race distance?', answer: 'Yes. The calculator accepts any race distance in kilometers and the finishing time in minutes. Performances from longer races (e.g., half marathon) are usually more predictive of marathon performance than short races (e.g., 5K). Explore different distance performances to enhance accuracy.' },
      { question: 'How should I interpret the pace number?', answer: 'Pace is shown as minutes per kilometer. Use it as a framework to plan your marathon pacing strategy — remember that race-specific factors like hills and fueling will influence your sustainable pace. Consider practicing at this pace during training runs to get accustomed to it.' },
      { question: 'How can I improve my marathon time?', answer: 'Improving your marathon time often involves a combination of speed work, long runs, and rest days. Paying attention to your nutrition, hydration strategies during runs, and pacing can also lead to better race performances. Experimenting with these elements in training will help you identify what works best for you.' },
    ],
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
    faq: [
      { question: 'Is the prediction exact?', answer: 'No — it\'s an estimate. The Riegel formula provides a reasonable extrapolation based on endurance scaling, but actual race performance depends on fitness, pacing, terrain, weather, and race-day conditions.' },
      { question: 'What distance should I use for training data?', answer: 'Use a recent, well-paced effort that reflects your current fitness. Time-trial efforts, tempo runs, or race results are good inputs. Very short or very irregular runs may give less reliable predictions.' },
      { question: 'Can I use pace in min/mile?', answer: 'This calculator expects minutes per kilometer. Convert pace in minutes per mile to min/km before using the tool (1 mile ≈ 1.60934 km).' },
    ],
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
    faq: [
      { question: 'Do I need to know my exact wheel circumference?', answer: 'For rough estimates, typical wheel circumferences (e.g. 2.05–2.2 m) are fine. For precise speed calculations, measure your wheel circumference or consult tire size charts.' },
      { question: 'How do I calculate gear ratio?', answer: 'Divide the number of teeth on the front chainring by the number of teeth on the rear cog. For example, 52/13 ≈ 4.0.' },
      { question: 'Can this calculator account for rolling resistance or wind?', answer: 'No — this tool provides a purely kinematic estimate (distance traveled per pedal revolution). Real-world speed is affected by many factors like aerodynamics, rolling resistance, gradient, and rider power.' },
      { question: 'What are some advanced tips for accurate measurements?', answer: 'To achieve accurate speed calculations, ensure your bike is properly maintained, tires are adequately inflated, and consider the environmental conditions during your rides.' },
    ],
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
    faq: [
      { question: 'Is this calculator 100% accurate?', answer: 'No. This calculator provides an estimate based on generalized MET values. Individual metabolic rates, body composition, and effort levels cause variation.' },
      { question: 'Can I use miles per hour instead of km/h?', answer: 'This tool expects speed in km/h. If you have mph, multiply by 1.609 to convert to km/h before entering.' },
      { question: 'How should I use this calculator for training?', answer: 'Use it to estimate energy expenditure per ride and track trends over time. For training load and adaptation, combine with intensity metrics like power or heart rate.' },
      { question: 'Can this calculator help with weight loss?', answer: 'bsolutely! By tracking calories burned, you can adjust your diet and exercise to achieve your weight loss goals effectively.' },
      { question: 'What should I do if I experience discrepancies in calorie estimates?', answer: 'If you find significant differences in estimated calorie burn, consider factors such as fitness level and metabolic differences. Consulting with a fitness professional can provide tailored advice.' },
    ],
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
    faq: [
      { question: 'Is higher volume always better?', answer: 'Not necessarily. While increased volume can promote hypertrophy and skill acquisition, it must be balanced with recovery and intensity. Individual response, training age, and goals determine optimal volume, so listen to your body to prevent burnout.' },
      { question: 'Should I use this for cardio or endurance?', answer: 'This calculator is tailored for external load-based strength work. For endurance or cardio, other metrics like distance, duration, and pace are more appropriate. If your primary goal is endurance, consider other tools designed specifically for that purpose.' },
      { question: 'Can I export results?', answer: 'Yes. Use the PDF export to save inputs and results for logging or sharing with a coach. This feature makes it easy to keep track of your progress over time.' },
    ],
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
    faq: [
      { question: 'Is the recommendation exact?', answer: 'No — it is an evidence-informed guideline. Individual responses vary based on fitness level, exercise selection, and recovery capacity. Use the recommended range and adjust based on performance and fatigue levels.' },
      { question: 'Can I use this for circuit training?', answer: 'For circuit training and metabolic conditioning, shorter rests are typical. Choose "Endurance" and lower intensity values to reflect circuit-style work for optimal results.' },
      { question: 'How should I progress rest periods over time?', answer: 's you get stronger, you may need slightly longer rests for maximal strength sets. For hypertrophy, rest periods can be manipulated to target more metabolic stress (<60s) or more mechanical tension (>90s) depending on your specific goals.' },
      { question: 'Can I adjust the rest period within a workout?', answer: 'bsolutely! Feel free to modify rest periods in real-time based on how you feel during a workout. Listening to your body can often lead to improved outcomes.' },
    ],
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
    faq: [
      { question: 'Should I include walks or hit-by-pitch?', answer: 'No. Batting average only counts official at-bats. Walks, hit-by-pitch, and sacrifices do not count as at-bats and therefore are not used in AVG calculations. To measure overall offensive contribution including walks, consider metrics like On-Base Percentage (OBP) or OPS.' },
      { question: 'What if at-bats is zero?', answer: 'If at-bats is zero, batting average is undefined. The calculator will display results only when valid, non-zero at-bats are provided.' },
      { question: 'Why project to 600 at-bats?', answer: '600 at-bat season is a common baseline used for projecting full-season counting stats for regular players. It provides a straightforward way to compare seasonal production across players with different current at-bat totals.' },
    ],
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
    faq: [
      { question: 'Can I use different units for distance or time?', answer: 'This tool expects distance in meters and time in seconds. If you have different units, convert them to meters and seconds before entering. This ensures that calculations are consistent and accurate.' },
      { question: 'Why is the base speed shown in m/s?', answer: 'Meters per second is the standard SI unit for speed and provides a precise base for conversions to other units like km/h. This allows athletes and coaches to have a clear understanding of performance metrics.' },
      { question: 'How accurate is this calculation?', answer: 'The calculation is mathematically accurate given the distance and time inputs. Real-world accuracy, however, depends on how precisely distance and time were measured. Ensure consistent conditions for the best results.' },
    ],
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
    faq: [
      { question: 'What if I enter an invalid value?', answer: 'The calculator requires positive numeric values for distance and time. If inputs are invalid or zero, results and charts will not be shown, ensuring that users always receive meaningful feedback.' },
      { question: 'Can I change split length?', answer: 'This tool uses 50m splits by default, which are common in pool training. For different split lengths, you can adapt the calculation logic or use the outputs to manually compute other split sizes. Customizing these settings can enhance training strategies.' },
      { question: 'Why is pace shown per 100m?', answer: 'Swimming performance is commonly reported as time per 100 meters, which makes it easy to compare efforts across different distances and training sets. Understanding this standard helps in evaluating and identifying areas for improvement in swimming technique and speed.' },
    ],
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
    faq: [
      { question: 'Can I use this for commercial labeling?', answer: 'This calculator helps estimate per-serving nutrition facts, but commercial labels often require specific rounding rules and compliance testing. Use these results as a guide and consult local regulations before publishing labels.' },
      { question: 'What if my total calories don\'t match the sum of macros?', answer: 'Small differences can arise from rounding or from calories contributed by non-macronutrient components (e.g., sugar alcohols, fiber). The calculator uses the supplied total calories per serving as the base for percent calculations when available.' },
      { question: 'How should I round values?', answer: 'Rounding rules vary by jurisdiction. Common practice is to round calories to the nearest whole number and grams to one decimal place for smaller values. Check local labeling guidelines for exact rules.' },
      { question: 'Why is accurate nutrition labeling important?', answer: 'ccurate nutrition labels help consumers make informed choices about their food intake, support dietary restrictions, and promote overall health and wellness. As awareness of nutrition continues to grow, having reliable data is essential for maintaining trust.' },
    ],
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
    faq: [
      { question: 'Can I convert between other units (like milliliters)?', answer: 'This converter focuses on common US kitchen volume units (cups, tbsp, tsp). For metric conversions (mL, L), consider using a dedicated volume converter where metric factors are provided. This ensures you\'re using the correct measurements for your recipes.' },
      { question: 'Does this work for both dry and liquid ingredients?', answer: 'Yes — the scaling math is the same for any ingredient measured by volume. For best results with dry ingredients, weighing by grams is recommended. This can help avoid inconsistencies caused by volume measurements, especially with fluffy ingredients like flour.' },
      { question: 'How should I round the results?', answer: 'The calculator shows multiple decimal places for precision, but when cooking, round to the nearest practical measurement (e.g., nearest 1/8 tsp or 1/4 tbsp) depending on the ingredient. Rounding helps keep the cooking process user-friendly without sacrificing accuracy.' },
      { question: 'What if I have a recipe that uses weights instead of volume?', answer: 'If your recipe lists ingredients by weight, consider converting those weights into volume measurements where possible or use a reliable online conversion tool to help with the transition. Keep in mind that some ingredients may have different weights depending on how they\'re packed.' },
    ],
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
    faq: [
      { question: 'Are these cooking measurement conversion factors exact?', answer: 'The factors used (1 cup = 240 ml, 1 tbsp = 15 ml, 1 tsp = 5 ml) are standard kitchen approximations. For very precise scientific work, use product-specific density conversions or professional references.' },
      { question: 'Does this handle ingredient density (e.g., converting cups of flour to grams)?', answer: 'No — this converter only handles volume units. Converting volumes to weights requires ingredient-specific density (grams per cup), which varies between ingredients like flour, sugar, and butter.' },
      { question: 'Can I trust the chart and PDF outputs for cooking measurements?', answer: 'Yes. The chart visually compares the original and converted values. The PDF export captures your inputs and the calculated result for printing or sharing.' },
      { question: 'Why is it essential to convert cooking measurements accurately?', answer: 'ccurate conversions are vital in cooking to ensure that the final dish has the correct flavors, textures, and overall quality. A small deviation can lead to unsatisfactory results.' },
      { question: 'Where can I find more resources on cooking measurements?', answer: 'You can explore several culinary blogs and websites dedicated to recipe conversions and cooking tips. Many offer downloadable resources and detailed guides on various cooking methods.' },
    ],
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
    faq: [
      { question: 'Why is it important to calculate food waste?', answer: 'Quantifying food waste helps identify opportunities to reduce costs, improve inventory management, and mitigate environmental impact.' },
      { question: 'What should I use for cost per kg?', answer: 'Use an average purchase cost per kilogram that reflects what you paid or the wholesale cost for the food items in question.' },
      { question: 'Can this calculator model different reduction strategies?', answer: 'Yes — use the reduction scenario selector to model different levels of waste reduction (25%, 50%, 75%, 100%). The calculator will clearly show kg and cost savings for the selected scenario.' },
      { question: 'How accurate are the results?', answer: 'Results depend on your inputs\' accuracy. For best accuracy, use measured weights and real cost data.' },
    ],
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
    faq: [
      { question: 'Are the values exact?', answer: 'No. The calculator uses representative average rates for common appliances and fixtures. Replace the inputs with your own measured or manufacturer-specified values for more accuracy.' },
      { question: 'Why show liters and gallons?', answer: 'Different regions use different units. We calculate in liters (a consistent base unit) and allow conversion to gallons for easier interpretation where needed.' },
      { question: 'Can I download the results?', answer: 'Yes. Use the PDF download to save a summary of inputs and results for record-keeping or sharing.' },
      { question: 'What should I do if my usage is higher than expected?', answer: 'Consider reviewing your water use habits, checking for leaks, and implementing some of the tips provided to reduce consumption.' },
    ],
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
    faq: [
      { question: 'Are these estimates exact?', answer: 'No. These are estimates based on the values you provide. Real consumption can vary based on appliance efficiency, cycles, and standby usage.' },
      { question: 'Why do we divide by 1000?', answer: 'Watt (W) is a unit of power. To convert watt-hours to kilowatt-hours (kWh), we divide watts by 1000 because 1 kW = 1000 W.' },
      { question: 'How can I get more accurate results?', answer: 'Measure actual wattage with a power meter for each appliance and track real usage hours. Use your utility bill to verify your electricity rate and monthly totals.' },
    ],
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
    faq: [
      { question: 'What does recycling rate mean?', answer: 'Your recycling rate is the share of your total waste that is actually recycled. For example, a 40% recycling rate means 40% of your waste is diverted to recycling streams and 60% goes to landfill or incineration. A better understanding of your recycling rate helps in planning better waste management strategies.' },
      { question: 'Are the CO2 savings precise?', answer: 'No — the CO2 savings are an estimate using an average factor. Different materials have different carbon savings when recycled. For material-specific assessments, use dedicated LCA (life-cycle assessment) data. This variability emphasizes the importance of considering material types when evaluating your recycling\'s environmental impact.' },
      { question: 'Can I use this for a household or a business?', answer: 'Yes. Enter the average waste produced (kg/week) for the household or facility and an estimated recycling rate. For larger operations, consider tracking material streams separately for greater accuracy. This will provide a clearer picture of your waste management practices and help identify areas for improvement.' },
    ],
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
    faq: [
      { question: 'Can I rely on the calculator for final system design?', answer: 'This calculator provides an initial estimate. For a final system design, consult a qualified solar installer who will evaluate structural roof constraints, local solar irradiance data, electrical requirements, and local regulations.' },
      { question: 'What if my roof area is too small?', answer: 'If your available roof area cannot support the number of panels required, consider partial coverage (offsetting part of your electricity), ground-mounted systems (if space permits), or community solar programs.' },
      { question: 'How accurate are savings estimates?', answer: 'Savings are estimated using a sample cost per kWh and the projected production. Your actual savings will depend on your local electricity rates, time-of-use tariffs, net metering policies, and how much of the produced energy you consume on-site.' },
    ],
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
    faq: [
      { question: 'Are these values exact?', answer: 'No. Values are simplified averages intended for estimation. Real-world sequestration varies by species, soil, climate, and management.' },
      { question: 'Can I use this for carbon credits?', answer: 'This calculator provides rough estimates. Certified carbon credit programs require rigorous measurement, monitoring, and verification protocols. Use this tool for planning only.' },
      { question: 'Why does tree age matter?', answer: 'Younger trees sequester less carbon compared to mature trees. Including tree age gives a better estimate of total accumulated sequestration over time.' },
      { question: 'How can I maximize my carbon offset?', answer: 'Maximizing offset potential involves selecting appropriate species for your locale, ensuring proper planting techniques, and committing to ongoing care and support of the trees throughout their growth stages.' },
    ],
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
    faq: [
      { question: 'Can I use this to purchase offsets directly?', answer: 'This tool estimates the amount of carbon to offset. To purchase offsets, look for reputable projects and registries (e.g., Verra, Gold Standard) and follow their purchasing processes.' },
      { question: 'Why are emission factors approximate?', answer: 'Emission factors vary by aircraft type, vehicle efficiency, electricity grid mix, and other factors. This calculator uses common average factors for quick estimates; use detailed lifecycle analyses for precise calculations.' },
      { question: 'How should I enter distances and emissions?', answer: 'Enter distances in kilometers (km). Enter emissions in kilograms of CO2 (kg CO2). If you have a verified emissions number, prefer that over distance estimates.' },
      { question: 'Is carbon offsetting effective?', answer: 'Yes, carbon offsetting can be effective, especially when combined with efforts to reduce personal or organizational emissions. However, it\'s crucial to choose credible offset projects to ensure real environmental benefits.' },
    ],
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
    faq: [
      { question: 'Is this calculator an exact measurement?', answer: 'No. This calculator provides an estimate based on simplified assumptions. Real-world usage depends on local climate, behavior, appliance efficiency, and building specifics.' },
      { question: 'Why are different heating types normalized to kWh?', answer: 'Normalization to kWh-equivalents allows an apples-to-apples comparison across fuel types. Actual billing units may differ (therms, gallons, etc.), and fuel prices vary by location.' },
      { question: 'How can I achieve more accurate results?', answer: 'For more precise estimates, use actual historical energy bills, heating system efficiency ratings (AFUE/EER/COP), and local climate data. Consider a home energy audit for tailored recommendations to improve your home\'s energy profile.' },
      { question: 'What are some common mistakes to avoid when calculating home energy costs?', answer: 'Common mistakes include not accounting for all square footage during calculations, neglecting local climate factors, or using outdated energy pricing. Be sure to gather recent data for the most accurate estimates.' },
    ],
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
    faq: [
      { question: 'How accurate are these numbers?', answer: 'Emission factors are averages and can vary by region, farming practice, feed, and supply chain. Use these results as estimates to compare choices, not precise lifecycle analyses.' },
      { question: 'Can I use other units?', answer: 'This calculator uses kilograms as the base unit. If you have grams, convert to kilograms (1000 g = 1 kg) before entering the amount.' },
      { question: 'Why does beef have a higher footprint?', answer: 'Ruminant animals like cattle produce methane during digestion and require more land, feed, and water, leading to higher greenhouse gas emissions per kilogram compared to poultry or plant-based foods.' },
      { question: 'What impact does reducing meat consumption have?', answer: 'Switching to plant-based meals can significantly lower your weekly or monthly carbon footprint. Every small change contributes to a larger impact on the environment.' },
      { question: 'How can I calculate my total weekly emissions?', answer: 'By using this calculator for each type of food you consume in a week, you can sum the emissions to get your total food-related carbon emissions.' },
    ],
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
