export declare let FromRawLineData: {};
export declare class Handle<T> {
    value: number;
    constructor(id: number);
    toTape(args: any[]): void;
}
export declare function Value(type: string, value: any): any;
export declare class IfcAbsorbedDoseMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcAccelerationMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcAmountOfSubstanceMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcAngularVelocityMeasure {
    value: number;
    constructor(v: number);
}
export declare type IfcArcIndex = Array<IfcPositiveInteger>;
export declare class IfcAreaDensityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcAreaMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcBinary {
    value: number;
    constructor(v: number);
}
export declare class IfcBoolean {
    value: boolean;
    constructor(v: boolean);
}
export declare class IfcBoxAlignment {
    value: IfcLabel;
    constructor(v: IfcLabel);
}
export declare class IfcCardinalPointReference {
    value: number;
    constructor(v: number);
}
export declare type IfcComplexNumber = Array<number>;
export declare type IfcCompoundPlaneAngleMeasure = Array<number>;
export declare class IfcContextDependentMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcCountMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcCurvatureMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcDate {
    value: string;
    constructor(v: string);
}
export declare class IfcDateTime {
    value: string;
    constructor(v: string);
}
export declare class IfcDayInMonthNumber {
    value: number;
    constructor(v: number);
}
export declare class IfcDayInWeekNumber {
    value: number;
    constructor(v: number);
}
export declare class IfcDescriptiveMeasure {
    value: string;
    constructor(v: string);
}
export declare class IfcDimensionCount {
    value: number;
    constructor(v: number);
}
export declare class IfcDoseEquivalentMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcDuration {
    value: string;
    constructor(v: string);
}
export declare class IfcDynamicViscosityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcElectricCapacitanceMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcElectricChargeMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcElectricConductanceMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcElectricCurrentMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcElectricResistanceMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcElectricVoltageMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcEnergyMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcFontStyle {
    value: string;
    constructor(v: string);
}
export declare class IfcFontVariant {
    value: string;
    constructor(v: string);
}
export declare class IfcFontWeight {
    value: string;
    constructor(v: string);
}
export declare class IfcForceMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcFrequencyMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcGloballyUniqueId {
    value: string;
    constructor(v: string);
}
export declare class IfcHeatFluxDensityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcHeatingValueMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcIdentifier {
    value: string;
    constructor(v: string);
}
export declare class IfcIlluminanceMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcInductanceMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcInteger {
    value: number;
    constructor(v: number);
}
export declare class IfcIntegerCountRateMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcIonConcentrationMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcIsothermalMoistureCapacityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcKinematicViscosityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcLabel {
    value: string;
    constructor(v: string);
}
export declare class IfcLanguageId {
    value: IfcIdentifier;
    constructor(v: IfcIdentifier);
}
export declare class IfcLengthMeasure {
    value: number;
    constructor(v: number);
}
export declare type IfcLineIndex = Array<IfcPositiveInteger>;
export declare class IfcLinearForceMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcLinearMomentMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcLinearStiffnessMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcLinearVelocityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcLogical {
    value: boolean;
    constructor(v: boolean);
}
export declare class IfcLuminousFluxMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcLuminousIntensityDistributionMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcLuminousIntensityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcMagneticFluxDensityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcMagneticFluxMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcMassDensityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcMassFlowRateMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcMassMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcMassPerLengthMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcModulusOfElasticityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcModulusOfLinearSubgradeReactionMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcModulusOfRotationalSubgradeReactionMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcModulusOfSubgradeReactionMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcMoistureDiffusivityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcMolecularWeightMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcMomentOfInertiaMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcMonetaryMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcMonthInYearNumber {
    value: number;
    constructor(v: number);
}
export declare class IfcNonNegativeLengthMeasure {
    value: IfcLengthMeasure;
    constructor(v: IfcLengthMeasure);
}
export declare class IfcNormalisedRatioMeasure {
    value: IfcRatioMeasure;
    constructor(v: IfcRatioMeasure);
}
export declare class IfcNumericMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcPHMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcParameterValue {
    value: number;
    constructor(v: number);
}
export declare class IfcPlanarForceMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcPlaneAngleMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcPositiveInteger {
    value: IfcInteger;
    constructor(v: IfcInteger);
}
export declare class IfcPositiveLengthMeasure {
    value: IfcLengthMeasure;
    constructor(v: IfcLengthMeasure);
}
export declare class IfcPositivePlaneAngleMeasure {
    value: IfcPlaneAngleMeasure;
    constructor(v: IfcPlaneAngleMeasure);
}
export declare class IfcPositiveRatioMeasure {
    value: IfcRatioMeasure;
    constructor(v: IfcRatioMeasure);
}
export declare class IfcPowerMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcPresentableText {
    value: string;
    constructor(v: string);
}
export declare class IfcPressureMeasure {
    value: number;
    constructor(v: number);
}
export declare type IfcPropertySetDefinitionSet = Array<IfcPropertySetDefinition>;
export declare class IfcRadioActivityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcRatioMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcReal {
    value: number;
    constructor(v: number);
}
export declare class IfcRotationalFrequencyMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcRotationalMassMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcRotationalStiffnessMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcSectionModulusMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcSectionalAreaIntegralMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcShearModulusMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcSolidAngleMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcSoundPowerLevelMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcSoundPowerMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcSoundPressureLevelMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcSoundPressureMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcSpecificHeatCapacityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcSpecularExponent {
    value: number;
    constructor(v: number);
}
export declare class IfcSpecularRoughness {
    value: number;
    constructor(v: number);
}
export declare class IfcTemperatureGradientMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcTemperatureRateOfChangeMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcText {
    value: string;
    constructor(v: string);
}
export declare class IfcTextAlignment {
    value: string;
    constructor(v: string);
}
export declare class IfcTextDecoration {
    value: string;
    constructor(v: string);
}
export declare class IfcTextFontName {
    value: string;
    constructor(v: string);
}
export declare class IfcTextTransformation {
    value: string;
    constructor(v: string);
}
export declare class IfcThermalAdmittanceMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcThermalConductivityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcThermalExpansionCoefficientMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcThermalResistanceMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcThermalTransmittanceMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcThermodynamicTemperatureMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcTime {
    value: string;
    constructor(v: string);
}
export declare class IfcTimeMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcTimeStamp {
    value: number;
    constructor(v: number);
}
export declare class IfcTorqueMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcURIReference {
    value: string;
    constructor(v: string);
}
export declare class IfcVaporPermeabilityMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcVolumeMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcVolumetricFlowRateMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcWarpingConstantMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcWarpingMomentMeasure {
    value: number;
    constructor(v: number);
}
export declare class IfcActionRequestTypeEnum {
    value: string;
    constructor(v: string);
    static EMAIL: string;
    static FAX: string;
    static PHONE: string;
    static POST: string;
    static VERBAL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcActionSourceTypeEnum {
    value: string;
    constructor(v: string);
    static DEAD_LOAD_G: string;
    static COMPLETION_G1: string;
    static LIVE_LOAD_Q: string;
    static SNOW_S: string;
    static WIND_W: string;
    static PRESTRESSING_P: string;
    static SETTLEMENT_U: string;
    static TEMPERATURE_T: string;
    static EARTHQUAKE_E: string;
    static FIRE: string;
    static IMPULSE: string;
    static IMPACT: string;
    static TRANSPORT: string;
    static ERECTION: string;
    static PROPPING: string;
    static SYSTEM_IMPERFECTION: string;
    static SHRINKAGE: string;
    static CREEP: string;
    static LACK_OF_FIT: string;
    static BUOYANCY: string;
    static ICE: string;
    static CURRENT: string;
    static WAVE: string;
    static RAIN: string;
    static BRAKES: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcActionTypeEnum {
    value: string;
    constructor(v: string);
    static PERMANENT_G: string;
    static VARIABLE_Q: string;
    static EXTRAORDINARY_A: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcActuatorTypeEnum {
    value: string;
    constructor(v: string);
    static ELECTRICACTUATOR: string;
    static HANDOPERATEDACTUATOR: string;
    static HYDRAULICACTUATOR: string;
    static PNEUMATICACTUATOR: string;
    static THERMOSTATICACTUATOR: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcAddressTypeEnum {
    value: string;
    constructor(v: string);
    static OFFICE: string;
    static SITE: string;
    static HOME: string;
    static DISTRIBUTIONPOINT: string;
    static USERDEFINED: string;
}
export declare class IfcAirTerminalBoxTypeEnum {
    value: string;
    constructor(v: string);
    static CONSTANTFLOW: string;
    static VARIABLEFLOWPRESSUREDEPENDANT: string;
    static VARIABLEFLOWPRESSUREINDEPENDANT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcAirTerminalTypeEnum {
    value: string;
    constructor(v: string);
    static DIFFUSER: string;
    static GRILLE: string;
    static LOUVRE: string;
    static REGISTER: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcAirToAirHeatRecoveryTypeEnum {
    value: string;
    constructor(v: string);
    static FIXEDPLATECOUNTERFLOWEXCHANGER: string;
    static FIXEDPLATECROSSFLOWEXCHANGER: string;
    static FIXEDPLATEPARALLELFLOWEXCHANGER: string;
    static ROTARYWHEEL: string;
    static RUNAROUNDCOILLOOP: string;
    static HEATPIPE: string;
    static TWINTOWERENTHALPYRECOVERYLOOPS: string;
    static THERMOSIPHONSEALEDTUBEHEATEXCHANGERS: string;
    static THERMOSIPHONCOILTYPEHEATEXCHANGERS: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcAlarmTypeEnum {
    value: string;
    constructor(v: string);
    static BELL: string;
    static BREAKGLASSBUTTON: string;
    static LIGHT: string;
    static MANUALPULLBOX: string;
    static SIREN: string;
    static WHISTLE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcAlignmentTypeEnum {
    value: string;
    constructor(v: string);
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcAnalysisModelTypeEnum {
    value: string;
    constructor(v: string);
    static IN_PLANE_LOADING_2D: string;
    static OUT_PLANE_LOADING_2D: string;
    static LOADING_3D: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcAnalysisTheoryTypeEnum {
    value: string;
    constructor(v: string);
    static FIRST_ORDER_THEORY: string;
    static SECOND_ORDER_THEORY: string;
    static THIRD_ORDER_THEORY: string;
    static FULL_NONLINEAR_THEORY: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcArithmeticOperatorEnum {
    value: string;
    constructor(v: string);
    static ADD: string;
    static DIVIDE: string;
    static MULTIPLY: string;
    static SUBTRACT: string;
}
export declare class IfcAssemblyPlaceEnum {
    value: string;
    constructor(v: string);
    static SITE: string;
    static FACTORY: string;
    static NOTDEFINED: string;
}
export declare class IfcAudioVisualApplianceTypeEnum {
    value: string;
    constructor(v: string);
    static AMPLIFIER: string;
    static CAMERA: string;
    static DISPLAY: string;
    static MICROPHONE: string;
    static PLAYER: string;
    static PROJECTOR: string;
    static RECEIVER: string;
    static SPEAKER: string;
    static SWITCHER: string;
    static TELEPHONE: string;
    static TUNER: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcBSplineCurveForm {
    value: string;
    constructor(v: string);
    static POLYLINE_FORM: string;
    static CIRCULAR_ARC: string;
    static ELLIPTIC_ARC: string;
    static PARABOLIC_ARC: string;
    static HYPERBOLIC_ARC: string;
    static UNSPECIFIED: string;
}
export declare class IfcBSplineSurfaceForm {
    value: string;
    constructor(v: string);
    static PLANE_SURF: string;
    static CYLINDRICAL_SURF: string;
    static CONICAL_SURF: string;
    static SPHERICAL_SURF: string;
    static TOROIDAL_SURF: string;
    static SURF_OF_REVOLUTION: string;
    static RULED_SURF: string;
    static GENERALISED_CONE: string;
    static QUADRIC_SURF: string;
    static SURF_OF_LINEAR_EXTRUSION: string;
    static UNSPECIFIED: string;
}
export declare class IfcBeamTypeEnum {
    value: string;
    constructor(v: string);
    static BEAM: string;
    static JOIST: string;
    static HOLLOWCORE: string;
    static LINTEL: string;
    static SPANDREL: string;
    static T_BEAM: string;
    static GIRDER_SEGMENT: string;
    static DIAPHRAGM: string;
    static PIERCAP: string;
    static HATSTONE: string;
    static CORNICE: string;
    static EDGEBEAM: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcBearingTypeDisplacementEnum {
    value: string;
    constructor(v: string);
    static FIXED_MOVEMENT: string;
    static GUIDED_LONGITUDINAL: string;
    static GUIDED_TRANSVERSAL: string;
    static FREE_MOVEMENT: string;
    static NOTDEFINED: string;
}
export declare class IfcBearingTypeEnum {
    value: string;
    constructor(v: string);
    static CYLINDRICAL: string;
    static SPHERICAL: string;
    static ELASTOMERIC: string;
    static POT: string;
    static GUIDE: string;
    static ROCKER: string;
    static ROLLER: string;
    static DISK: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcBenchmarkEnum {
    value: string;
    constructor(v: string);
    static GREATERTHAN: string;
    static GREATERTHANOREQUALTO: string;
    static LESSTHAN: string;
    static LESSTHANOREQUALTO: string;
    static EQUALTO: string;
    static NOTEQUALTO: string;
    static INCLUDES: string;
    static NOTINCLUDES: string;
    static INCLUDEDIN: string;
    static NOTINCLUDEDIN: string;
}
export declare class IfcBoilerTypeEnum {
    value: string;
    constructor(v: string);
    static WATER: string;
    static STEAM: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcBooleanOperator {
    value: string;
    constructor(v: string);
    static UNION: string;
    static INTERSECTION: string;
    static DIFFERENCE: string;
}
export declare class IfcBridgePartTypeEnum {
    value: string;
    constructor(v: string);
    static ABUTMENT: string;
    static DECK: string;
    static DECK_SEGMENT: string;
    static FOUNDATION: string;
    static PIER: string;
    static PIER_SEGMENT: string;
    static PYLON: string;
    static SUBSTRUCTURE: string;
    static SUPERSTRUCTURE: string;
    static SURFACESTRUCTURE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcBridgeTypeEnum {
    value: string;
    constructor(v: string);
    static ARCHED: string;
    static CABLE_STAYED: string;
    static CANTILEVER: string;
    static CULVERT: string;
    static FRAMEWORK: string;
    static GIRDER: string;
    static SUSPENSION: string;
    static TRUSS: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcBuildingElementPartTypeEnum {
    value: string;
    constructor(v: string);
    static INSULATION: string;
    static PRECASTPANEL: string;
    static APRON: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcBuildingElementProxyTypeEnum {
    value: string;
    constructor(v: string);
    static COMPLEX: string;
    static ELEMENT: string;
    static PARTIAL: string;
    static PROVISIONFORVOID: string;
    static PROVISIONFORSPACE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcBuildingSystemTypeEnum {
    value: string;
    constructor(v: string);
    static FENESTRATION: string;
    static FOUNDATION: string;
    static LOADBEARING: string;
    static OUTERSHELL: string;
    static SHADING: string;
    static TRANSPORT: string;
    static REINFORCING: string;
    static PRESTRESSING: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcBurnerTypeEnum {
    value: string;
    constructor(v: string);
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCableCarrierFittingTypeEnum {
    value: string;
    constructor(v: string);
    static BEND: string;
    static CROSS: string;
    static REDUCER: string;
    static TEE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCableCarrierSegmentTypeEnum {
    value: string;
    constructor(v: string);
    static CABLELADDERSEGMENT: string;
    static CABLETRAYSEGMENT: string;
    static CABLETRUNKINGSEGMENT: string;
    static CONDUITSEGMENT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCableFittingTypeEnum {
    value: string;
    constructor(v: string);
    static CONNECTOR: string;
    static ENTRY: string;
    static EXIT: string;
    static JUNCTION: string;
    static TRANSITION: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCableSegmentTypeEnum {
    value: string;
    constructor(v: string);
    static BUSBARSEGMENT: string;
    static CABLESEGMENT: string;
    static CONDUCTORSEGMENT: string;
    static CORESEGMENT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCaissonFoundationTypeEnum {
    value: string;
    constructor(v: string);
    static WELL: string;
    static CAISSON: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcChangeActionEnum {
    value: string;
    constructor(v: string);
    static NOCHANGE: string;
    static MODIFIED: string;
    static ADDED: string;
    static DELETED: string;
    static NOTDEFINED: string;
}
export declare class IfcChillerTypeEnum {
    value: string;
    constructor(v: string);
    static AIRCOOLED: string;
    static WATERCOOLED: string;
    static HEATRECOVERY: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcChimneyTypeEnum {
    value: string;
    constructor(v: string);
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCoilTypeEnum {
    value: string;
    constructor(v: string);
    static DXCOOLINGCOIL: string;
    static ELECTRICHEATINGCOIL: string;
    static GASHEATINGCOIL: string;
    static HYDRONICCOIL: string;
    static STEAMHEATINGCOIL: string;
    static WATERCOOLINGCOIL: string;
    static WATERHEATINGCOIL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcColumnTypeEnum {
    value: string;
    constructor(v: string);
    static COLUMN: string;
    static PILASTER: string;
    static PIERSTEM: string;
    static PIERSTEM_SEGMENT: string;
    static STANDCOLUMN: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCommunicationsApplianceTypeEnum {
    value: string;
    constructor(v: string);
    static ANTENNA: string;
    static COMPUTER: string;
    static FAX: string;
    static GATEWAY: string;
    static MODEM: string;
    static NETWORKAPPLIANCE: string;
    static NETWORKBRIDGE: string;
    static NETWORKHUB: string;
    static PRINTER: string;
    static REPEATER: string;
    static ROUTER: string;
    static SCANNER: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcComplexPropertyTemplateTypeEnum {
    value: string;
    constructor(v: string);
    static P_COMPLEX: string;
    static Q_COMPLEX: string;
}
export declare class IfcCompressorTypeEnum {
    value: string;
    constructor(v: string);
    static DYNAMIC: string;
    static RECIPROCATING: string;
    static ROTARY: string;
    static SCROLL: string;
    static TROCHOIDAL: string;
    static SINGLESTAGE: string;
    static BOOSTER: string;
    static OPENTYPE: string;
    static HERMETIC: string;
    static SEMIHERMETIC: string;
    static WELDEDSHELLHERMETIC: string;
    static ROLLINGPISTON: string;
    static ROTARYVANE: string;
    static SINGLESCREW: string;
    static TWINSCREW: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCondenserTypeEnum {
    value: string;
    constructor(v: string);
    static AIRCOOLED: string;
    static EVAPORATIVECOOLED: string;
    static WATERCOOLED: string;
    static WATERCOOLEDBRAZEDPLATE: string;
    static WATERCOOLEDSHELLCOIL: string;
    static WATERCOOLEDSHELLTUBE: string;
    static WATERCOOLEDTUBEINTUBE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcConnectionTypeEnum {
    value: string;
    constructor(v: string);
    static ATPATH: string;
    static ATSTART: string;
    static ATEND: string;
    static NOTDEFINED: string;
}
export declare class IfcConstraintEnum {
    value: string;
    constructor(v: string);
    static HARD: string;
    static SOFT: string;
    static ADVISORY: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcConstructionEquipmentResourceTypeEnum {
    value: string;
    constructor(v: string);
    static DEMOLISHING: string;
    static EARTHMOVING: string;
    static ERECTING: string;
    static HEATING: string;
    static LIGHTING: string;
    static PAVING: string;
    static PUMPING: string;
    static TRANSPORTING: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcConstructionMaterialResourceTypeEnum {
    value: string;
    constructor(v: string);
    static AGGREGATES: string;
    static CONCRETE: string;
    static DRYWALL: string;
    static FUEL: string;
    static GYPSUM: string;
    static MASONRY: string;
    static METAL: string;
    static PLASTIC: string;
    static WOOD: string;
    static NOTDEFINED: string;
    static USERDEFINED: string;
}
export declare class IfcConstructionProductResourceTypeEnum {
    value: string;
    constructor(v: string);
    static ASSEMBLY: string;
    static FORMWORK: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcControllerTypeEnum {
    value: string;
    constructor(v: string);
    static FLOATING: string;
    static PROGRAMMABLE: string;
    static PROPORTIONAL: string;
    static MULTIPOSITION: string;
    static TWOPOSITION: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCooledBeamTypeEnum {
    value: string;
    constructor(v: string);
    static ACTIVE: string;
    static PASSIVE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCoolingTowerTypeEnum {
    value: string;
    constructor(v: string);
    static NATURALDRAFT: string;
    static MECHANICALINDUCEDDRAFT: string;
    static MECHANICALFORCEDDRAFT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCostItemTypeEnum {
    value: string;
    constructor(v: string);
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCostScheduleTypeEnum {
    value: string;
    constructor(v: string);
    static BUDGET: string;
    static COSTPLAN: string;
    static ESTIMATE: string;
    static TENDER: string;
    static PRICEDBILLOFQUANTITIES: string;
    static UNPRICEDBILLOFQUANTITIES: string;
    static SCHEDULEOFRATES: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCoveringTypeEnum {
    value: string;
    constructor(v: string);
    static CEILING: string;
    static FLOORING: string;
    static CLADDING: string;
    static ROOFING: string;
    static MOLDING: string;
    static SKIRTINGBOARD: string;
    static INSULATION: string;
    static MEMBRANE: string;
    static SLEEVING: string;
    static WRAPPING: string;
    static COPING: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCrewResourceTypeEnum {
    value: string;
    constructor(v: string);
    static OFFICE: string;
    static SITE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCurtainWallTypeEnum {
    value: string;
    constructor(v: string);
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcCurveInterpolationEnum {
    value: string;
    constructor(v: string);
    static LINEAR: string;
    static LOG_LINEAR: string;
    static LOG_LOG: string;
    static NOTDEFINED: string;
}
export declare class IfcDamperTypeEnum {
    value: string;
    constructor(v: string);
    static BACKDRAFTDAMPER: string;
    static BALANCINGDAMPER: string;
    static BLASTDAMPER: string;
    static CONTROLDAMPER: string;
    static FIREDAMPER: string;
    static FIRESMOKEDAMPER: string;
    static FUMEHOODEXHAUST: string;
    static GRAVITYDAMPER: string;
    static GRAVITYRELIEFDAMPER: string;
    static RELIEFDAMPER: string;
    static SMOKEDAMPER: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDataOriginEnum {
    value: string;
    constructor(v: string);
    static MEASURED: string;
    static PREDICTED: string;
    static SIMULATED: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDerivedUnitEnum {
    value: string;
    constructor(v: string);
    static ANGULARVELOCITYUNIT: string;
    static AREADENSITYUNIT: string;
    static COMPOUNDPLANEANGLEUNIT: string;
    static DYNAMICVISCOSITYUNIT: string;
    static HEATFLUXDENSITYUNIT: string;
    static INTEGERCOUNTRATEUNIT: string;
    static ISOTHERMALMOISTURECAPACITYUNIT: string;
    static KINEMATICVISCOSITYUNIT: string;
    static LINEARVELOCITYUNIT: string;
    static MASSDENSITYUNIT: string;
    static MASSFLOWRATEUNIT: string;
    static MOISTUREDIFFUSIVITYUNIT: string;
    static MOLECULARWEIGHTUNIT: string;
    static SPECIFICHEATCAPACITYUNIT: string;
    static THERMALADMITTANCEUNIT: string;
    static THERMALCONDUCTANCEUNIT: string;
    static THERMALRESISTANCEUNIT: string;
    static THERMALTRANSMITTANCEUNIT: string;
    static VAPORPERMEABILITYUNIT: string;
    static VOLUMETRICFLOWRATEUNIT: string;
    static ROTATIONALFREQUENCYUNIT: string;
    static TORQUEUNIT: string;
    static MOMENTOFINERTIAUNIT: string;
    static LINEARMOMENTUNIT: string;
    static LINEARFORCEUNIT: string;
    static PLANARFORCEUNIT: string;
    static MODULUSOFELASTICITYUNIT: string;
    static SHEARMODULUSUNIT: string;
    static LINEARSTIFFNESSUNIT: string;
    static ROTATIONALSTIFFNESSUNIT: string;
    static MODULUSOFSUBGRADEREACTIONUNIT: string;
    static ACCELERATIONUNIT: string;
    static CURVATUREUNIT: string;
    static HEATINGVALUEUNIT: string;
    static IONCONCENTRATIONUNIT: string;
    static LUMINOUSINTENSITYDISTRIBUTIONUNIT: string;
    static MASSPERLENGTHUNIT: string;
    static MODULUSOFLINEARSUBGRADEREACTIONUNIT: string;
    static MODULUSOFROTATIONALSUBGRADEREACTIONUNIT: string;
    static PHUNIT: string;
    static ROTATIONALMASSUNIT: string;
    static SECTIONAREAINTEGRALUNIT: string;
    static SECTIONMODULUSUNIT: string;
    static SOUNDPOWERLEVELUNIT: string;
    static SOUNDPOWERUNIT: string;
    static SOUNDPRESSURELEVELUNIT: string;
    static SOUNDPRESSUREUNIT: string;
    static TEMPERATUREGRADIENTUNIT: string;
    static TEMPERATURERATEOFCHANGEUNIT: string;
    static THERMALEXPANSIONCOEFFICIENTUNIT: string;
    static WARPINGCONSTANTUNIT: string;
    static WARPINGMOMENTUNIT: string;
    static USERDEFINED: string;
}
export declare class IfcDirectionSenseEnum {
    value: string;
    constructor(v: string);
    static POSITIVE: string;
    static NEGATIVE: string;
}
export declare class IfcDiscreteAccessoryTypeEnum {
    value: string;
    constructor(v: string);
    static ANCHORPLATE: string;
    static BRACKET: string;
    static SHOE: string;
    static EXPANSION_JOINT_DEVICE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDistributionChamberElementTypeEnum {
    value: string;
    constructor(v: string);
    static FORMEDDUCT: string;
    static INSPECTIONCHAMBER: string;
    static INSPECTIONPIT: string;
    static MANHOLE: string;
    static METERCHAMBER: string;
    static SUMP: string;
    static TRENCH: string;
    static VALVECHAMBER: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDistributionPortTypeEnum {
    value: string;
    constructor(v: string);
    static CABLE: string;
    static CABLECARRIER: string;
    static DUCT: string;
    static PIPE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDistributionSystemEnum {
    value: string;
    constructor(v: string);
    static AIRCONDITIONING: string;
    static AUDIOVISUAL: string;
    static CHEMICAL: string;
    static CHILLEDWATER: string;
    static COMMUNICATION: string;
    static COMPRESSEDAIR: string;
    static CONDENSERWATER: string;
    static CONTROL: string;
    static CONVEYING: string;
    static DATA: string;
    static DISPOSAL: string;
    static DOMESTICCOLDWATER: string;
    static DOMESTICHOTWATER: string;
    static DRAINAGE: string;
    static EARTHING: string;
    static ELECTRICAL: string;
    static ELECTROACOUSTIC: string;
    static EXHAUST: string;
    static FIREPROTECTION: string;
    static FUEL: string;
    static GAS: string;
    static HAZARDOUS: string;
    static HEATING: string;
    static LIGHTING: string;
    static LIGHTNINGPROTECTION: string;
    static MUNICIPALSOLIDWASTE: string;
    static OIL: string;
    static OPERATIONAL: string;
    static POWERGENERATION: string;
    static RAINWATER: string;
    static REFRIGERATION: string;
    static SECURITY: string;
    static SEWAGE: string;
    static SIGNAL: string;
    static STORMWATER: string;
    static TELEPHONE: string;
    static TV: string;
    static VACUUM: string;
    static VENT: string;
    static VENTILATION: string;
    static WASTEWATER: string;
    static WATERSUPPLY: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDocumentConfidentialityEnum {
    value: string;
    constructor(v: string);
    static PUBLIC: string;
    static RESTRICTED: string;
    static CONFIDENTIAL: string;
    static PERSONAL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDocumentStatusEnum {
    value: string;
    constructor(v: string);
    static DRAFT: string;
    static FINALDRAFT: string;
    static FINAL: string;
    static REVISION: string;
    static NOTDEFINED: string;
}
export declare class IfcDoorPanelOperationEnum {
    value: string;
    constructor(v: string);
    static SWINGING: string;
    static DOUBLE_ACTING: string;
    static SLIDING: string;
    static FOLDING: string;
    static REVOLVING: string;
    static ROLLINGUP: string;
    static FIXEDPANEL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDoorPanelPositionEnum {
    value: string;
    constructor(v: string);
    static LEFT: string;
    static MIDDLE: string;
    static RIGHT: string;
    static NOTDEFINED: string;
}
export declare class IfcDoorStyleConstructionEnum {
    value: string;
    constructor(v: string);
    static ALUMINIUM: string;
    static HIGH_GRADE_STEEL: string;
    static STEEL: string;
    static WOOD: string;
    static ALUMINIUM_WOOD: string;
    static ALUMINIUM_PLASTIC: string;
    static PLASTIC: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDoorStyleOperationEnum {
    value: string;
    constructor(v: string);
    static SINGLE_SWING_LEFT: string;
    static SINGLE_SWING_RIGHT: string;
    static DOUBLE_DOOR_SINGLE_SWING: string;
    static DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_LEFT: string;
    static DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_RIGHT: string;
    static DOUBLE_SWING_LEFT: string;
    static DOUBLE_SWING_RIGHT: string;
    static DOUBLE_DOOR_DOUBLE_SWING: string;
    static SLIDING_TO_LEFT: string;
    static SLIDING_TO_RIGHT: string;
    static DOUBLE_DOOR_SLIDING: string;
    static FOLDING_TO_LEFT: string;
    static FOLDING_TO_RIGHT: string;
    static DOUBLE_DOOR_FOLDING: string;
    static REVOLVING: string;
    static ROLLINGUP: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDoorTypeEnum {
    value: string;
    constructor(v: string);
    static DOOR: string;
    static GATE: string;
    static TRAPDOOR: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDoorTypeOperationEnum {
    value: string;
    constructor(v: string);
    static SINGLE_SWING_LEFT: string;
    static SINGLE_SWING_RIGHT: string;
    static DOUBLE_DOOR_SINGLE_SWING: string;
    static DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_LEFT: string;
    static DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_RIGHT: string;
    static DOUBLE_SWING_LEFT: string;
    static DOUBLE_SWING_RIGHT: string;
    static DOUBLE_DOOR_DOUBLE_SWING: string;
    static SLIDING_TO_LEFT: string;
    static SLIDING_TO_RIGHT: string;
    static DOUBLE_DOOR_SLIDING: string;
    static FOLDING_TO_LEFT: string;
    static FOLDING_TO_RIGHT: string;
    static DOUBLE_DOOR_FOLDING: string;
    static REVOLVING: string;
    static ROLLINGUP: string;
    static SWING_FIXED_LEFT: string;
    static SWING_FIXED_RIGHT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDuctFittingTypeEnum {
    value: string;
    constructor(v: string);
    static BEND: string;
    static CONNECTOR: string;
    static ENTRY: string;
    static EXIT: string;
    static JUNCTION: string;
    static OBSTRUCTION: string;
    static TRANSITION: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDuctSegmentTypeEnum {
    value: string;
    constructor(v: string);
    static RIGIDSEGMENT: string;
    static FLEXIBLESEGMENT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcDuctSilencerTypeEnum {
    value: string;
    constructor(v: string);
    static FLATOVAL: string;
    static RECTANGULAR: string;
    static ROUND: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcElectricApplianceTypeEnum {
    value: string;
    constructor(v: string);
    static DISHWASHER: string;
    static ELECTRICCOOKER: string;
    static FREESTANDINGELECTRICHEATER: string;
    static FREESTANDINGFAN: string;
    static FREESTANDINGWATERHEATER: string;
    static FREESTANDINGWATERCOOLER: string;
    static FREEZER: string;
    static FRIDGE_FREEZER: string;
    static HANDDRYER: string;
    static KITCHENMACHINE: string;
    static MICROWAVE: string;
    static PHOTOCOPIER: string;
    static REFRIGERATOR: string;
    static TUMBLEDRYER: string;
    static VENDINGMACHINE: string;
    static WASHINGMACHINE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcElectricDistributionBoardTypeEnum {
    value: string;
    constructor(v: string);
    static CONSUMERUNIT: string;
    static DISTRIBUTIONBOARD: string;
    static MOTORCONTROLCENTRE: string;
    static SWITCHBOARD: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcElectricFlowStorageDeviceTypeEnum {
    value: string;
    constructor(v: string);
    static BATTERY: string;
    static CAPACITORBANK: string;
    static HARMONICFILTER: string;
    static INDUCTORBANK: string;
    static UPS: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcElectricGeneratorTypeEnum {
    value: string;
    constructor(v: string);
    static CHP: string;
    static ENGINEGENERATOR: string;
    static STANDALONE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcElectricMotorTypeEnum {
    value: string;
    constructor(v: string);
    static DC: string;
    static INDUCTION: string;
    static POLYPHASE: string;
    static RELUCTANCESYNCHRONOUS: string;
    static SYNCHRONOUS: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcElectricTimeControlTypeEnum {
    value: string;
    constructor(v: string);
    static TIMECLOCK: string;
    static TIMEDELAY: string;
    static RELAY: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcElementAssemblyTypeEnum {
    value: string;
    constructor(v: string);
    static ACCESSORY_ASSEMBLY: string;
    static ARCH: string;
    static BEAM_GRID: string;
    static BRACED_FRAME: string;
    static GIRDER: string;
    static REINFORCEMENT_UNIT: string;
    static RIGID_FRAME: string;
    static SLAB_FIELD: string;
    static TRUSS: string;
    static ABUTMENT: string;
    static PIER: string;
    static PYLON: string;
    static CROSS_BRACING: string;
    static DECK: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcElementCompositionEnum {
    value: string;
    constructor(v: string);
    static COMPLEX: string;
    static ELEMENT: string;
    static PARTIAL: string;
}
export declare class IfcEngineTypeEnum {
    value: string;
    constructor(v: string);
    static EXTERNALCOMBUSTION: string;
    static INTERNALCOMBUSTION: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcEvaporativeCoolerTypeEnum {
    value: string;
    constructor(v: string);
    static DIRECTEVAPORATIVERANDOMMEDIAAIRCOOLER: string;
    static DIRECTEVAPORATIVERIGIDMEDIAAIRCOOLER: string;
    static DIRECTEVAPORATIVESLINGERSPACKAGEDAIRCOOLER: string;
    static DIRECTEVAPORATIVEPACKAGEDROTARYAIRCOOLER: string;
    static DIRECTEVAPORATIVEAIRWASHER: string;
    static INDIRECTEVAPORATIVEPACKAGEAIRCOOLER: string;
    static INDIRECTEVAPORATIVEWETCOIL: string;
    static INDIRECTEVAPORATIVECOOLINGTOWERORCOILCOOLER: string;
    static INDIRECTDIRECTCOMBINATION: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcEvaporatorTypeEnum {
    value: string;
    constructor(v: string);
    static DIRECTEXPANSION: string;
    static DIRECTEXPANSIONSHELLANDTUBE: string;
    static DIRECTEXPANSIONTUBEINTUBE: string;
    static DIRECTEXPANSIONBRAZEDPLATE: string;
    static FLOODEDSHELLANDTUBE: string;
    static SHELLANDCOIL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcEventTriggerTypeEnum {
    value: string;
    constructor(v: string);
    static EVENTRULE: string;
    static EVENTMESSAGE: string;
    static EVENTTIME: string;
    static EVENTCOMPLEX: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcEventTypeEnum {
    value: string;
    constructor(v: string);
    static STARTEVENT: string;
    static ENDEVENT: string;
    static INTERMEDIATEEVENT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcExternalSpatialElementTypeEnum {
    value: string;
    constructor(v: string);
    static EXTERNAL: string;
    static EXTERNAL_EARTH: string;
    static EXTERNAL_WATER: string;
    static EXTERNAL_FIRE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcFanTypeEnum {
    value: string;
    constructor(v: string);
    static CENTRIFUGALFORWARDCURVED: string;
    static CENTRIFUGALRADIAL: string;
    static CENTRIFUGALBACKWARDINCLINEDCURVED: string;
    static CENTRIFUGALAIRFOIL: string;
    static TUBEAXIAL: string;
    static VANEAXIAL: string;
    static PROPELLORAXIAL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcFastenerTypeEnum {
    value: string;
    constructor(v: string);
    static GLUE: string;
    static MORTAR: string;
    static WELD: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcFilterTypeEnum {
    value: string;
    constructor(v: string);
    static AIRPARTICLEFILTER: string;
    static COMPRESSEDAIRFILTER: string;
    static ODORFILTER: string;
    static OILFILTER: string;
    static STRAINER: string;
    static WATERFILTER: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcFireSuppressionTerminalTypeEnum {
    value: string;
    constructor(v: string);
    static BREECHINGINLET: string;
    static FIREHYDRANT: string;
    static HOSEREEL: string;
    static SPRINKLER: string;
    static SPRINKLERDEFLECTOR: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcFlowDirectionEnum {
    value: string;
    constructor(v: string);
    static SOURCE: string;
    static SINK: string;
    static SOURCEANDSINK: string;
    static NOTDEFINED: string;
}
export declare class IfcFlowInstrumentTypeEnum {
    value: string;
    constructor(v: string);
    static PRESSUREGAUGE: string;
    static THERMOMETER: string;
    static AMMETER: string;
    static FREQUENCYMETER: string;
    static POWERFACTORMETER: string;
    static PHASEANGLEMETER: string;
    static VOLTMETER_PEAK: string;
    static VOLTMETER_RMS: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcFlowMeterTypeEnum {
    value: string;
    constructor(v: string);
    static ENERGYMETER: string;
    static GASMETER: string;
    static OILMETER: string;
    static WATERMETER: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcFootingTypeEnum {
    value: string;
    constructor(v: string);
    static CAISSON_FOUNDATION: string;
    static FOOTING_BEAM: string;
    static PAD_FOOTING: string;
    static PILE_CAP: string;
    static STRIP_FOOTING: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcFurnitureTypeEnum {
    value: string;
    constructor(v: string);
    static CHAIR: string;
    static TABLE: string;
    static DESK: string;
    static BED: string;
    static FILECABINET: string;
    static SHELF: string;
    static SOFA: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcGeographicElementTypeEnum {
    value: string;
    constructor(v: string);
    static TERRAIN: string;
    static SOIL_BORING_POINT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcGeometricProjectionEnum {
    value: string;
    constructor(v: string);
    static GRAPH_VIEW: string;
    static SKETCH_VIEW: string;
    static MODEL_VIEW: string;
    static PLAN_VIEW: string;
    static REFLECTED_PLAN_VIEW: string;
    static SECTION_VIEW: string;
    static ELEVATION_VIEW: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcGlobalOrLocalEnum {
    value: string;
    constructor(v: string);
    static GLOBAL_COORDS: string;
    static LOCAL_COORDS: string;
}
export declare class IfcGridTypeEnum {
    value: string;
    constructor(v: string);
    static RECTANGULAR: string;
    static RADIAL: string;
    static TRIANGULAR: string;
    static IRREGULAR: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcHeatExchangerTypeEnum {
    value: string;
    constructor(v: string);
    static PLATE: string;
    static SHELLANDTUBE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcHumidifierTypeEnum {
    value: string;
    constructor(v: string);
    static STEAMINJECTION: string;
    static ADIABATICAIRWASHER: string;
    static ADIABATICPAN: string;
    static ADIABATICWETTEDELEMENT: string;
    static ADIABATICATOMIZING: string;
    static ADIABATICULTRASONIC: string;
    static ADIABATICRIGIDMEDIA: string;
    static ADIABATICCOMPRESSEDAIRNOZZLE: string;
    static ASSISTEDELECTRIC: string;
    static ASSISTEDNATURALGAS: string;
    static ASSISTEDPROPANE: string;
    static ASSISTEDBUTANE: string;
    static ASSISTEDSTEAM: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcInterceptorTypeEnum {
    value: string;
    constructor(v: string);
    static CYCLONIC: string;
    static GREASE: string;
    static OIL: string;
    static PETROL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcInternalOrExternalEnum {
    value: string;
    constructor(v: string);
    static INTERNAL: string;
    static EXTERNAL: string;
    static EXTERNAL_EARTH: string;
    static EXTERNAL_WATER: string;
    static EXTERNAL_FIRE: string;
    static NOTDEFINED: string;
}
export declare class IfcInventoryTypeEnum {
    value: string;
    constructor(v: string);
    static ASSETINVENTORY: string;
    static SPACEINVENTORY: string;
    static FURNITUREINVENTORY: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcJunctionBoxTypeEnum {
    value: string;
    constructor(v: string);
    static DATA: string;
    static POWER: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcKnotType {
    value: string;
    constructor(v: string);
    static UNIFORM_KNOTS: string;
    static QUASI_UNIFORM_KNOTS: string;
    static PIECEWISE_BEZIER_KNOTS: string;
    static UNSPECIFIED: string;
}
export declare class IfcLaborResourceTypeEnum {
    value: string;
    constructor(v: string);
    static ADMINISTRATION: string;
    static CARPENTRY: string;
    static CLEANING: string;
    static CONCRETE: string;
    static DRYWALL: string;
    static ELECTRIC: string;
    static FINISHING: string;
    static FLOORING: string;
    static GENERAL: string;
    static HVAC: string;
    static LANDSCAPING: string;
    static MASONRY: string;
    static PAINTING: string;
    static PAVING: string;
    static PLUMBING: string;
    static ROOFING: string;
    static SITEGRADING: string;
    static STEELWORK: string;
    static SURVEYING: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcLampTypeEnum {
    value: string;
    constructor(v: string);
    static COMPACTFLUORESCENT: string;
    static FLUORESCENT: string;
    static HALOGEN: string;
    static HIGHPRESSUREMERCURY: string;
    static HIGHPRESSURESODIUM: string;
    static LED: string;
    static METALHALIDE: string;
    static OLED: string;
    static TUNGSTENFILAMENT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcLayerSetDirectionEnum {
    value: string;
    constructor(v: string);
    static AXIS1: string;
    static AXIS2: string;
    static AXIS3: string;
}
export declare class IfcLightDistributionCurveEnum {
    value: string;
    constructor(v: string);
    static TYPE_A: string;
    static TYPE_B: string;
    static TYPE_C: string;
    static NOTDEFINED: string;
}
export declare class IfcLightEmissionSourceEnum {
    value: string;
    constructor(v: string);
    static COMPACTFLUORESCENT: string;
    static FLUORESCENT: string;
    static HIGHPRESSUREMERCURY: string;
    static HIGHPRESSURESODIUM: string;
    static LIGHTEMITTINGDIODE: string;
    static LOWPRESSURESODIUM: string;
    static LOWVOLTAGEHALOGEN: string;
    static MAINVOLTAGEHALOGEN: string;
    static METALHALIDE: string;
    static TUNGSTENFILAMENT: string;
    static NOTDEFINED: string;
}
export declare class IfcLightFixtureTypeEnum {
    value: string;
    constructor(v: string);
    static POINTSOURCE: string;
    static DIRECTIONSOURCE: string;
    static SECURITYLIGHTING: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcLoadGroupTypeEnum {
    value: string;
    constructor(v: string);
    static LOAD_GROUP: string;
    static LOAD_CASE: string;
    static LOAD_COMBINATION: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcLogicalOperatorEnum {
    value: string;
    constructor(v: string);
    static LOGICALAND: string;
    static LOGICALOR: string;
    static LOGICALXOR: string;
    static LOGICALNOTAND: string;
    static LOGICALNOTOR: string;
}
export declare class IfcMechanicalFastenerTypeEnum {
    value: string;
    constructor(v: string);
    static ANCHORBOLT: string;
    static BOLT: string;
    static DOWEL: string;
    static NAIL: string;
    static NAILPLATE: string;
    static RIVET: string;
    static SCREW: string;
    static SHEARCONNECTOR: string;
    static STAPLE: string;
    static STUDSHEARCONNECTOR: string;
    static COUPLER: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcMedicalDeviceTypeEnum {
    value: string;
    constructor(v: string);
    static AIRSTATION: string;
    static FEEDAIRUNIT: string;
    static OXYGENGENERATOR: string;
    static OXYGENPLANT: string;
    static VACUUMSTATION: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcMemberTypeEnum {
    value: string;
    constructor(v: string);
    static BRACE: string;
    static CHORD: string;
    static COLLAR: string;
    static MEMBER: string;
    static MULLION: string;
    static PLATE: string;
    static POST: string;
    static PURLIN: string;
    static RAFTER: string;
    static STRINGER: string;
    static STRUT: string;
    static STUD: string;
    static STIFFENING_RIB: string;
    static ARCH_SEGMENT: string;
    static SUSPENSION_CABLE: string;
    static SUSPENDER: string;
    static STAY_CABLE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcMotorConnectionTypeEnum {
    value: string;
    constructor(v: string);
    static BELTDRIVE: string;
    static COUPLING: string;
    static DIRECTDRIVE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcNullStyle {
    value: string;
    constructor(v: string);
    static NULL: string;
}
export declare class IfcObjectTypeEnum {
    value: string;
    constructor(v: string);
    static PRODUCT: string;
    static PROCESS: string;
    static CONTROL: string;
    static RESOURCE: string;
    static ACTOR: string;
    static GROUP: string;
    static PROJECT: string;
    static NOTDEFINED: string;
}
export declare class IfcObjectiveEnum {
    value: string;
    constructor(v: string);
    static CODECOMPLIANCE: string;
    static CODEWAIVER: string;
    static DESIGNINTENT: string;
    static EXTERNAL: string;
    static HEALTHANDSAFETY: string;
    static MERGECONFLICT: string;
    static MODELVIEW: string;
    static PARAMETER: string;
    static REQUIREMENT: string;
    static SPECIFICATION: string;
    static TRIGGERCONDITION: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcOccupantTypeEnum {
    value: string;
    constructor(v: string);
    static ASSIGNEE: string;
    static ASSIGNOR: string;
    static LESSEE: string;
    static LESSOR: string;
    static LETTINGAGENT: string;
    static OWNER: string;
    static TENANT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcOpeningElementTypeEnum {
    value: string;
    constructor(v: string);
    static OPENING: string;
    static RECESS: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcOutletTypeEnum {
    value: string;
    constructor(v: string);
    static AUDIOVISUALOUTLET: string;
    static COMMUNICATIONSOUTLET: string;
    static POWEROUTLET: string;
    static DATAOUTLET: string;
    static TELEPHONEOUTLET: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcPerformanceHistoryTypeEnum {
    value: string;
    constructor(v: string);
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcPermeableCoveringOperationEnum {
    value: string;
    constructor(v: string);
    static GRILL: string;
    static LOUVER: string;
    static SCREEN: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcPermitTypeEnum {
    value: string;
    constructor(v: string);
    static ACCESS: string;
    static BUILDING: string;
    static WORK: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcPhysicalOrVirtualEnum {
    value: string;
    constructor(v: string);
    static PHYSICAL: string;
    static VIRTUAL: string;
    static NOTDEFINED: string;
}
export declare class IfcPileConstructionEnum {
    value: string;
    constructor(v: string);
    static CAST_IN_PLACE: string;
    static COMPOSITE: string;
    static PRECAST_CONCRETE: string;
    static PREFAB_STEEL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcPileTypeEnum {
    value: string;
    constructor(v: string);
    static BORED: string;
    static DRIVEN: string;
    static JETGROUTING: string;
    static COHESION: string;
    static FRICTION: string;
    static SUPPORT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcPipeFittingTypeEnum {
    value: string;
    constructor(v: string);
    static BEND: string;
    static CONNECTOR: string;
    static ENTRY: string;
    static EXIT: string;
    static JUNCTION: string;
    static OBSTRUCTION: string;
    static TRANSITION: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcPipeSegmentTypeEnum {
    value: string;
    constructor(v: string);
    static CULVERT: string;
    static FLEXIBLESEGMENT: string;
    static RIGIDSEGMENT: string;
    static GUTTER: string;
    static SPOOL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcPlateTypeEnum {
    value: string;
    constructor(v: string);
    static CURTAIN_PANEL: string;
    static SHEET: string;
    static FLANGE_PLATE: string;
    static WEB_PLATE: string;
    static STIFFENER_PLATE: string;
    static GUSSET_PLATE: string;
    static COVER_PLATE: string;
    static SPLICE_PLATE: string;
    static BASE_PLATE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcPreferredSurfaceCurveRepresentation {
    value: string;
    constructor(v: string);
    static CURVE3D: string;
    static PCURVE_S1: string;
    static PCURVE_S2: string;
}
export declare class IfcProcedureTypeEnum {
    value: string;
    constructor(v: string);
    static ADVICE_CAUTION: string;
    static ADVICE_NOTE: string;
    static ADVICE_WARNING: string;
    static CALIBRATION: string;
    static DIAGNOSTIC: string;
    static SHUTDOWN: string;
    static STARTUP: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcProfileTypeEnum {
    value: string;
    constructor(v: string);
    static CURVE: string;
    static AREA: string;
}
export declare class IfcProjectOrderTypeEnum {
    value: string;
    constructor(v: string);
    static CHANGEORDER: string;
    static MAINTENANCEWORKORDER: string;
    static MOVEORDER: string;
    static PURCHASEORDER: string;
    static WORKORDER: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcProjectedOrTrueLengthEnum {
    value: string;
    constructor(v: string);
    static PROJECTED_LENGTH: string;
    static TRUE_LENGTH: string;
}
export declare class IfcProjectionElementTypeEnum {
    value: string;
    constructor(v: string);
    static BLISTER: string;
    static DEVIATOR: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcPropertySetTemplateTypeEnum {
    value: string;
    constructor(v: string);
    static PSET_TYPEDRIVENONLY: string;
    static PSET_TYPEDRIVENOVERRIDE: string;
    static PSET_OCCURRENCEDRIVEN: string;
    static PSET_PERFORMANCEDRIVEN: string;
    static QTO_TYPEDRIVENONLY: string;
    static QTO_TYPEDRIVENOVERRIDE: string;
    static QTO_OCCURRENCEDRIVEN: string;
    static NOTDEFINED: string;
}
export declare class IfcProtectiveDeviceTrippingUnitTypeEnum {
    value: string;
    constructor(v: string);
    static ELECTRONIC: string;
    static ELECTROMAGNETIC: string;
    static RESIDUALCURRENT: string;
    static THERMAL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcProtectiveDeviceTypeEnum {
    value: string;
    constructor(v: string);
    static CIRCUITBREAKER: string;
    static EARTHLEAKAGECIRCUITBREAKER: string;
    static EARTHINGSWITCH: string;
    static FUSEDISCONNECTOR: string;
    static RESIDUALCURRENTCIRCUITBREAKER: string;
    static RESIDUALCURRENTSWITCH: string;
    static VARISTOR: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcPumpTypeEnum {
    value: string;
    constructor(v: string);
    static CIRCULATOR: string;
    static ENDSUCTION: string;
    static SPLITCASE: string;
    static SUBMERSIBLEPUMP: string;
    static SUMPPUMP: string;
    static VERTICALINLINE: string;
    static VERTICALTURBINE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcRailingTypeEnum {
    value: string;
    constructor(v: string);
    static HANDRAIL: string;
    static GUARDRAIL: string;
    static BALUSTRADE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcRampFlightTypeEnum {
    value: string;
    constructor(v: string);
    static STRAIGHT: string;
    static SPIRAL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcRampTypeEnum {
    value: string;
    constructor(v: string);
    static STRAIGHT_RUN_RAMP: string;
    static TWO_STRAIGHT_RUN_RAMP: string;
    static QUARTER_TURN_RAMP: string;
    static TWO_QUARTER_TURN_RAMP: string;
    static HALF_TURN_RAMP: string;
    static SPIRAL_RAMP: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcRecurrenceTypeEnum {
    value: string;
    constructor(v: string);
    static DAILY: string;
    static WEEKLY: string;
    static MONTHLY_BY_DAY_OF_MONTH: string;
    static MONTHLY_BY_POSITION: string;
    static BY_DAY_COUNT: string;
    static BY_WEEKDAY_COUNT: string;
    static YEARLY_BY_DAY_OF_MONTH: string;
    static YEARLY_BY_POSITION: string;
}
export declare class IfcReferentTypeEnum {
    value: string;
    constructor(v: string);
    static KILOPOINT: string;
    static MILEPOINT: string;
    static STATION: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcReflectanceMethodEnum {
    value: string;
    constructor(v: string);
    static BLINN: string;
    static FLAT: string;
    static GLASS: string;
    static MATT: string;
    static METAL: string;
    static MIRROR: string;
    static PHONG: string;
    static PLASTIC: string;
    static STRAUSS: string;
    static NOTDEFINED: string;
}
export declare class IfcReinforcingBarRoleEnum {
    value: string;
    constructor(v: string);
    static MAIN: string;
    static SHEAR: string;
    static LIGATURE: string;
    static STUD: string;
    static PUNCHING: string;
    static EDGE: string;
    static RING: string;
    static ANCHORING: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcReinforcingBarSurfaceEnum {
    value: string;
    constructor(v: string);
    static PLAIN: string;
    static TEXTURED: string;
}
export declare class IfcReinforcingBarTypeEnum {
    value: string;
    constructor(v: string);
    static ANCHORING: string;
    static EDGE: string;
    static LIGATURE: string;
    static MAIN: string;
    static PUNCHING: string;
    static RING: string;
    static SHEAR: string;
    static STUD: string;
    static SPACEBAR: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcReinforcingMeshTypeEnum {
    value: string;
    constructor(v: string);
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcRoleEnum {
    value: string;
    constructor(v: string);
    static SUPPLIER: string;
    static MANUFACTURER: string;
    static CONTRACTOR: string;
    static SUBCONTRACTOR: string;
    static ARCHITECT: string;
    static STRUCTURALENGINEER: string;
    static COSTENGINEER: string;
    static CLIENT: string;
    static BUILDINGOWNER: string;
    static BUILDINGOPERATOR: string;
    static MECHANICALENGINEER: string;
    static ELECTRICALENGINEER: string;
    static PROJECTMANAGER: string;
    static FACILITIESMANAGER: string;
    static CIVILENGINEER: string;
    static COMMISSIONINGENGINEER: string;
    static ENGINEER: string;
    static OWNER: string;
    static CONSULTANT: string;
    static CONSTRUCTIONMANAGER: string;
    static FIELDCONSTRUCTIONMANAGER: string;
    static RESELLER: string;
    static USERDEFINED: string;
}
export declare class IfcRoofTypeEnum {
    value: string;
    constructor(v: string);
    static FLAT_ROOF: string;
    static SHED_ROOF: string;
    static GABLE_ROOF: string;
    static HIP_ROOF: string;
    static HIPPED_GABLE_ROOF: string;
    static GAMBREL_ROOF: string;
    static MANSARD_ROOF: string;
    static BARREL_ROOF: string;
    static RAINBOW_ROOF: string;
    static BUTTERFLY_ROOF: string;
    static PAVILION_ROOF: string;
    static DOME_ROOF: string;
    static FREEFORM: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcSIPrefix {
    value: string;
    constructor(v: string);
    static EXA: string;
    static PETA: string;
    static TERA: string;
    static GIGA: string;
    static MEGA: string;
    static KILO: string;
    static HECTO: string;
    static DECA: string;
    static DECI: string;
    static CENTI: string;
    static MILLI: string;
    static MICRO: string;
    static NANO: string;
    static PICO: string;
    static FEMTO: string;
    static ATTO: string;
}
export declare class IfcSIUnitName {
    value: string;
    constructor(v: string);
    static AMPERE: string;
    static BECQUEREL: string;
    static CANDELA: string;
    static COULOMB: string;
    static CUBIC_METRE: string;
    static DEGREE_CELSIUS: string;
    static FARAD: string;
    static GRAM: string;
    static GRAY: string;
    static HENRY: string;
    static HERTZ: string;
    static JOULE: string;
    static KELVIN: string;
    static LUMEN: string;
    static LUX: string;
    static METRE: string;
    static MOLE: string;
    static NEWTON: string;
    static OHM: string;
    static PASCAL: string;
    static RADIAN: string;
    static SECOND: string;
    static SIEMENS: string;
    static SIEVERT: string;
    static SQUARE_METRE: string;
    static STERADIAN: string;
    static TESLA: string;
    static VOLT: string;
    static WATT: string;
    static WEBER: string;
}
export declare class IfcSanitaryTerminalTypeEnum {
    value: string;
    constructor(v: string);
    static BATH: string;
    static BIDET: string;
    static CISTERN: string;
    static SHOWER: string;
    static SINK: string;
    static SANITARYFOUNTAIN: string;
    static TOILETPAN: string;
    static URINAL: string;
    static WASHHANDBASIN: string;
    static WCSEAT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcSectionTypeEnum {
    value: string;
    constructor(v: string);
    static UNIFORM: string;
    static TAPERED: string;
}
export declare class IfcSensorTypeEnum {
    value: string;
    constructor(v: string);
    static COSENSOR: string;
    static CO2SENSOR: string;
    static CONDUCTANCESENSOR: string;
    static CONTACTSENSOR: string;
    static FIRESENSOR: string;
    static FLOWSENSOR: string;
    static FROSTSENSOR: string;
    static GASSENSOR: string;
    static HEATSENSOR: string;
    static HUMIDITYSENSOR: string;
    static IDENTIFIERSENSOR: string;
    static IONCONCENTRATIONSENSOR: string;
    static LEVELSENSOR: string;
    static LIGHTSENSOR: string;
    static MOISTURESENSOR: string;
    static MOVEMENTSENSOR: string;
    static PHSENSOR: string;
    static PRESSURESENSOR: string;
    static RADIATIONSENSOR: string;
    static RADIOACTIVITYSENSOR: string;
    static SMOKESENSOR: string;
    static SOUNDSENSOR: string;
    static TEMPERATURESENSOR: string;
    static WINDSENSOR: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcSequenceEnum {
    value: string;
    constructor(v: string);
    static START_START: string;
    static START_FINISH: string;
    static FINISH_START: string;
    static FINISH_FINISH: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcShadingDeviceTypeEnum {
    value: string;
    constructor(v: string);
    static JALOUSIE: string;
    static SHUTTER: string;
    static AWNING: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcSimplePropertyTemplateTypeEnum {
    value: string;
    constructor(v: string);
    static P_SINGLEVALUE: string;
    static P_ENUMERATEDVALUE: string;
    static P_BOUNDEDVALUE: string;
    static P_LISTVALUE: string;
    static P_TABLEVALUE: string;
    static P_REFERENCEVALUE: string;
    static Q_LENGTH: string;
    static Q_AREA: string;
    static Q_VOLUME: string;
    static Q_COUNT: string;
    static Q_WEIGHT: string;
    static Q_TIME: string;
}
export declare class IfcSlabTypeEnum {
    value: string;
    constructor(v: string);
    static FLOOR: string;
    static ROOF: string;
    static LANDING: string;
    static BASESLAB: string;
    static APPROACH_SLAB: string;
    static PAVING: string;
    static WEARING: string;
    static SIDEWALK: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcSolarDeviceTypeEnum {
    value: string;
    constructor(v: string);
    static SOLARCOLLECTOR: string;
    static SOLARPANEL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcSpaceHeaterTypeEnum {
    value: string;
    constructor(v: string);
    static CONVECTOR: string;
    static RADIATOR: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcSpaceTypeEnum {
    value: string;
    constructor(v: string);
    static SPACE: string;
    static PARKING: string;
    static GFA: string;
    static INTERNAL: string;
    static EXTERNAL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcSpatialZoneTypeEnum {
    value: string;
    constructor(v: string);
    static CONSTRUCTION: string;
    static FIRESAFETY: string;
    static LIGHTING: string;
    static OCCUPANCY: string;
    static SECURITY: string;
    static THERMAL: string;
    static TRANSPORT: string;
    static VENTILATION: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcStackTerminalTypeEnum {
    value: string;
    constructor(v: string);
    static BIRDCAGE: string;
    static COWL: string;
    static RAINWATERHOPPER: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcStairFlightTypeEnum {
    value: string;
    constructor(v: string);
    static STRAIGHT: string;
    static WINDER: string;
    static SPIRAL: string;
    static CURVED: string;
    static FREEFORM: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcStairTypeEnum {
    value: string;
    constructor(v: string);
    static STRAIGHT_RUN_STAIR: string;
    static TWO_STRAIGHT_RUN_STAIR: string;
    static QUARTER_WINDING_STAIR: string;
    static QUARTER_TURN_STAIR: string;
    static HALF_WINDING_STAIR: string;
    static HALF_TURN_STAIR: string;
    static TWO_QUARTER_WINDING_STAIR: string;
    static TWO_QUARTER_TURN_STAIR: string;
    static THREE_QUARTER_WINDING_STAIR: string;
    static THREE_QUARTER_TURN_STAIR: string;
    static SPIRAL_STAIR: string;
    static DOUBLE_RETURN_STAIR: string;
    static CURVED_RUN_STAIR: string;
    static TWO_CURVED_RUN_STAIR: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcStateEnum {
    value: string;
    constructor(v: string);
    static READWRITE: string;
    static READONLY: string;
    static LOCKED: string;
    static READWRITELOCKED: string;
    static READONLYLOCKED: string;
}
export declare class IfcStructuralCurveActivityTypeEnum {
    value: string;
    constructor(v: string);
    static CONST: string;
    static LINEAR: string;
    static POLYGONAL: string;
    static EQUIDISTANT: string;
    static SINUS: string;
    static PARABOLA: string;
    static DISCRETE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcStructuralCurveMemberTypeEnum {
    value: string;
    constructor(v: string);
    static RIGID_JOINED_MEMBER: string;
    static PIN_JOINED_MEMBER: string;
    static CABLE: string;
    static TENSION_MEMBER: string;
    static COMPRESSION_MEMBER: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcStructuralSurfaceActivityTypeEnum {
    value: string;
    constructor(v: string);
    static CONST: string;
    static BILINEAR: string;
    static DISCRETE: string;
    static ISOCONTOUR: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcStructuralSurfaceMemberTypeEnum {
    value: string;
    constructor(v: string);
    static BENDING_ELEMENT: string;
    static MEMBRANE_ELEMENT: string;
    static SHELL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcSubContractResourceTypeEnum {
    value: string;
    constructor(v: string);
    static PURCHASE: string;
    static WORK: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcSurfaceFeatureTypeEnum {
    value: string;
    constructor(v: string);
    static MARK: string;
    static TAG: string;
    static TREATMENT: string;
    static DEFECT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcSurfaceSide {
    value: string;
    constructor(v: string);
    static POSITIVE: string;
    static NEGATIVE: string;
    static BOTH: string;
}
export declare class IfcSwitchingDeviceTypeEnum {
    value: string;
    constructor(v: string);
    static CONTACTOR: string;
    static DIMMERSWITCH: string;
    static EMERGENCYSTOP: string;
    static KEYPAD: string;
    static MOMENTARYSWITCH: string;
    static SELECTORSWITCH: string;
    static STARTER: string;
    static SWITCHDISCONNECTOR: string;
    static TOGGLESWITCH: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcSystemFurnitureElementTypeEnum {
    value: string;
    constructor(v: string);
    static PANEL: string;
    static WORKSURFACE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcTankTypeEnum {
    value: string;
    constructor(v: string);
    static BASIN: string;
    static BREAKPRESSURE: string;
    static EXPANSION: string;
    static FEEDANDEXPANSION: string;
    static PRESSUREVESSEL: string;
    static STORAGE: string;
    static VESSEL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcTaskDurationEnum {
    value: string;
    constructor(v: string);
    static ELAPSEDTIME: string;
    static WORKTIME: string;
    static NOTDEFINED: string;
}
export declare class IfcTaskTypeEnum {
    value: string;
    constructor(v: string);
    static ATTENDANCE: string;
    static CONSTRUCTION: string;
    static DEMOLITION: string;
    static DISMANTLE: string;
    static DISPOSAL: string;
    static INSTALLATION: string;
    static LOGISTIC: string;
    static MAINTENANCE: string;
    static MOVE: string;
    static OPERATION: string;
    static REMOVAL: string;
    static RENOVATION: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcTendonAnchorTypeEnum {
    value: string;
    constructor(v: string);
    static COUPLER: string;
    static FIXED_END: string;
    static TENSIONING_END: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcTendonConduitTypeEnum {
    value: string;
    constructor(v: string);
    static DUCT: string;
    static COUPLER: string;
    static GROUTING_DUCT: string;
    static TRUMPET: string;
    static DIABOLO: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcTendonTypeEnum {
    value: string;
    constructor(v: string);
    static BAR: string;
    static COATED: string;
    static STRAND: string;
    static WIRE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcTextPath {
    value: string;
    constructor(v: string);
    static LEFT: string;
    static RIGHT: string;
    static UP: string;
    static DOWN: string;
}
export declare class IfcTimeSeriesDataTypeEnum {
    value: string;
    constructor(v: string);
    static CONTINUOUS: string;
    static DISCRETE: string;
    static DISCRETEBINARY: string;
    static PIECEWISEBINARY: string;
    static PIECEWISECONSTANT: string;
    static PIECEWISECONTINUOUS: string;
    static NOTDEFINED: string;
}
export declare class IfcTransformerTypeEnum {
    value: string;
    constructor(v: string);
    static CURRENT: string;
    static FREQUENCY: string;
    static INVERTER: string;
    static RECTIFIER: string;
    static VOLTAGE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcTransitionCode {
    value: string;
    constructor(v: string);
    static DISCONTINUOUS: string;
    static CONTINUOUS: string;
    static CONTSAMEGRADIENT: string;
    static CONTSAMEGRADIENTSAMECURVATURE: string;
}
export declare class IfcTransitionCurveType {
    value: string;
    constructor(v: string);
    static BIQUADRATICPARABOLA: string;
    static BLOSSCURVE: string;
    static CLOTHOIDCURVE: string;
    static COSINECURVE: string;
    static CUBICPARABOLA: string;
    static SINECURVE: string;
}
export declare class IfcTransportElementTypeEnum {
    value: string;
    constructor(v: string);
    static ELEVATOR: string;
    static ESCALATOR: string;
    static MOVINGWALKWAY: string;
    static CRANEWAY: string;
    static LIFTINGGEAR: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcTrimmingPreference {
    value: string;
    constructor(v: string);
    static CARTESIAN: string;
    static PARAMETER: string;
    static UNSPECIFIED: string;
}
export declare class IfcTubeBundleTypeEnum {
    value: string;
    constructor(v: string);
    static FINNED: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcUnitEnum {
    value: string;
    constructor(v: string);
    static ABSORBEDDOSEUNIT: string;
    static AMOUNTOFSUBSTANCEUNIT: string;
    static AREAUNIT: string;
    static DOSEEQUIVALENTUNIT: string;
    static ELECTRICCAPACITANCEUNIT: string;
    static ELECTRICCHARGEUNIT: string;
    static ELECTRICCONDUCTANCEUNIT: string;
    static ELECTRICCURRENTUNIT: string;
    static ELECTRICRESISTANCEUNIT: string;
    static ELECTRICVOLTAGEUNIT: string;
    static ENERGYUNIT: string;
    static FORCEUNIT: string;
    static FREQUENCYUNIT: string;
    static ILLUMINANCEUNIT: string;
    static INDUCTANCEUNIT: string;
    static LENGTHUNIT: string;
    static LUMINOUSFLUXUNIT: string;
    static LUMINOUSINTENSITYUNIT: string;
    static MAGNETICFLUXDENSITYUNIT: string;
    static MAGNETICFLUXUNIT: string;
    static MASSUNIT: string;
    static PLANEANGLEUNIT: string;
    static POWERUNIT: string;
    static PRESSUREUNIT: string;
    static RADIOACTIVITYUNIT: string;
    static SOLIDANGLEUNIT: string;
    static THERMODYNAMICTEMPERATUREUNIT: string;
    static TIMEUNIT: string;
    static VOLUMEUNIT: string;
    static USERDEFINED: string;
}
export declare class IfcUnitaryControlElementTypeEnum {
    value: string;
    constructor(v: string);
    static ALARMPANEL: string;
    static CONTROLPANEL: string;
    static GASDETECTIONPANEL: string;
    static INDICATORPANEL: string;
    static MIMICPANEL: string;
    static HUMIDISTAT: string;
    static THERMOSTAT: string;
    static WEATHERSTATION: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcUnitaryEquipmentTypeEnum {
    value: string;
    constructor(v: string);
    static AIRHANDLER: string;
    static AIRCONDITIONINGUNIT: string;
    static DEHUMIDIFIER: string;
    static SPLITSYSTEM: string;
    static ROOFTOPUNIT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcValveTypeEnum {
    value: string;
    constructor(v: string);
    static AIRRELEASE: string;
    static ANTIVACUUM: string;
    static CHANGEOVER: string;
    static CHECK: string;
    static COMMISSIONING: string;
    static DIVERTING: string;
    static DRAWOFFCOCK: string;
    static DOUBLECHECK: string;
    static DOUBLEREGULATING: string;
    static FAUCET: string;
    static FLUSHING: string;
    static GASCOCK: string;
    static GASTAP: string;
    static ISOLATING: string;
    static MIXING: string;
    static PRESSUREREDUCING: string;
    static PRESSURERELIEF: string;
    static REGULATING: string;
    static SAFETYCUTOFF: string;
    static STEAMTRAP: string;
    static STOPCOCK: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcVibrationDamperTypeEnum {
    value: string;
    constructor(v: string);
    static BENDING_YIELD: string;
    static SHEAR_YIELD: string;
    static AXIAL_YIELD: string;
    static FRICTION: string;
    static VISCOUS: string;
    static RUBBER: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcVibrationIsolatorTypeEnum {
    value: string;
    constructor(v: string);
    static COMPRESSION: string;
    static SPRING: string;
    static BASE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcVoidingFeatureTypeEnum {
    value: string;
    constructor(v: string);
    static CUTOUT: string;
    static NOTCH: string;
    static HOLE: string;
    static MITER: string;
    static CHAMFER: string;
    static EDGE: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcWallTypeEnum {
    value: string;
    constructor(v: string);
    static MOVABLE: string;
    static PARAPET: string;
    static PARTITIONING: string;
    static PLUMBINGWALL: string;
    static SHEAR: string;
    static SOLIDWALL: string;
    static STANDARD: string;
    static POLYGONAL: string;
    static ELEMENTEDWALL: string;
    static RETAININGWALL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcWasteTerminalTypeEnum {
    value: string;
    constructor(v: string);
    static FLOORTRAP: string;
    static FLOORWASTE: string;
    static GULLYSUMP: string;
    static GULLYTRAP: string;
    static ROOFDRAIN: string;
    static WASTEDISPOSALUNIT: string;
    static WASTETRAP: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcWindowPanelOperationEnum {
    value: string;
    constructor(v: string);
    static SIDEHUNGRIGHTHAND: string;
    static SIDEHUNGLEFTHAND: string;
    static TILTANDTURNRIGHTHAND: string;
    static TILTANDTURNLEFTHAND: string;
    static TOPHUNG: string;
    static BOTTOMHUNG: string;
    static PIVOTHORIZONTAL: string;
    static PIVOTVERTICAL: string;
    static SLIDINGHORIZONTAL: string;
    static SLIDINGVERTICAL: string;
    static REMOVABLECASEMENT: string;
    static FIXEDCASEMENT: string;
    static OTHEROPERATION: string;
    static NOTDEFINED: string;
}
export declare class IfcWindowPanelPositionEnum {
    value: string;
    constructor(v: string);
    static LEFT: string;
    static MIDDLE: string;
    static RIGHT: string;
    static BOTTOM: string;
    static TOP: string;
    static NOTDEFINED: string;
}
export declare class IfcWindowStyleConstructionEnum {
    value: string;
    constructor(v: string);
    static ALUMINIUM: string;
    static HIGH_GRADE_STEEL: string;
    static STEEL: string;
    static WOOD: string;
    static ALUMINIUM_WOOD: string;
    static PLASTIC: string;
    static OTHER_CONSTRUCTION: string;
    static NOTDEFINED: string;
}
export declare class IfcWindowStyleOperationEnum {
    value: string;
    constructor(v: string);
    static SINGLE_PANEL: string;
    static DOUBLE_PANEL_VERTICAL: string;
    static DOUBLE_PANEL_HORIZONTAL: string;
    static TRIPLE_PANEL_VERTICAL: string;
    static TRIPLE_PANEL_BOTTOM: string;
    static TRIPLE_PANEL_TOP: string;
    static TRIPLE_PANEL_LEFT: string;
    static TRIPLE_PANEL_RIGHT: string;
    static TRIPLE_PANEL_HORIZONTAL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcWindowTypeEnum {
    value: string;
    constructor(v: string);
    static WINDOW: string;
    static SKYLIGHT: string;
    static LIGHTDOME: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcWindowTypePartitioningEnum {
    value: string;
    constructor(v: string);
    static SINGLE_PANEL: string;
    static DOUBLE_PANEL_VERTICAL: string;
    static DOUBLE_PANEL_HORIZONTAL: string;
    static TRIPLE_PANEL_VERTICAL: string;
    static TRIPLE_PANEL_BOTTOM: string;
    static TRIPLE_PANEL_TOP: string;
    static TRIPLE_PANEL_LEFT: string;
    static TRIPLE_PANEL_RIGHT: string;
    static TRIPLE_PANEL_HORIZONTAL: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcWorkCalendarTypeEnum {
    value: string;
    constructor(v: string);
    static FIRSTSHIFT: string;
    static SECONDSHIFT: string;
    static THIRDSHIFT: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcWorkPlanTypeEnum {
    value: string;
    constructor(v: string);
    static ACTUAL: string;
    static BASELINE: string;
    static PLANNED: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare class IfcWorkScheduleTypeEnum {
    value: string;
    constructor(v: string);
    static ACTUAL: string;
    static BASELINE: string;
    static PLANNED: string;
    static USERDEFINED: string;
    static NOTDEFINED: string;
}
export declare type IfcActorSelect = (Handle<IfcOrganization> | IfcOrganization) | (Handle<IfcPerson> | IfcPerson) | (Handle<IfcPersonAndOrganization> | IfcPersonAndOrganization);
export declare type IfcAppliedValueSelect = (Handle<IfcMeasureWithUnit> | IfcMeasureWithUnit) | (Handle<IfcReference> | IfcReference) | IfcValue;
export declare type IfcAxis2Placement = (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
export declare type IfcBendingParameterSelect = IfcLengthMeasure | IfcPlaneAngleMeasure;
export declare type IfcBooleanOperand = (Handle<IfcBooleanResult> | IfcBooleanResult) | (Handle<IfcCsgPrimitive3D> | IfcCsgPrimitive3D) | (Handle<IfcHalfSpaceSolid> | IfcHalfSpaceSolid) | (Handle<IfcSolidModel> | IfcSolidModel) | (Handle<IfcTessellatedFaceSet> | IfcTessellatedFaceSet);
export declare type IfcClassificationReferenceSelect = (Handle<IfcClassification> | IfcClassification) | (Handle<IfcClassificationReference> | IfcClassificationReference);
export declare type IfcClassificationSelect = (Handle<IfcClassification> | IfcClassification) | (Handle<IfcClassificationReference> | IfcClassificationReference);
export declare type IfcColour = (Handle<IfcColourSpecification> | IfcColourSpecification) | (Handle<IfcPreDefinedColour> | IfcPreDefinedColour);
export declare type IfcColourOrFactor = (Handle<IfcColourRgb> | IfcColourRgb) | IfcNormalisedRatioMeasure;
export declare type IfcCoordinateReferenceSystemSelect = (Handle<IfcCoordinateReferenceSystem> | IfcCoordinateReferenceSystem) | (Handle<IfcGeometricRepresentationContext> | IfcGeometricRepresentationContext);
export declare type IfcCsgSelect = (Handle<IfcBooleanResult> | IfcBooleanResult) | (Handle<IfcCsgPrimitive3D> | IfcCsgPrimitive3D);
export declare type IfcCurveFontOrScaledCurveFontSelect = (Handle<IfcCurveStyleFontAndScaling> | IfcCurveStyleFontAndScaling) | IfcCurveStyleFontSelect;
export declare type IfcCurveOnSurface = (Handle<IfcCompositeCurveOnSurface> | IfcCompositeCurveOnSurface) | (Handle<IfcPcurve> | IfcPcurve) | (Handle<IfcSurfaceCurve> | IfcSurfaceCurve);
export declare type IfcCurveOrEdgeCurve = (Handle<IfcBoundedCurve> | IfcBoundedCurve) | (Handle<IfcEdgeCurve> | IfcEdgeCurve);
export declare type IfcCurveStyleFontSelect = (Handle<IfcCurveStyleFont> | IfcCurveStyleFont) | (Handle<IfcPreDefinedCurveFont> | IfcPreDefinedCurveFont);
export declare type IfcDefinitionSelect = (Handle<IfcObjectDefinition> | IfcObjectDefinition) | (Handle<IfcPropertyDefinition> | IfcPropertyDefinition);
export declare type IfcDerivedMeasureValue = IfcAbsorbedDoseMeasure | IfcAccelerationMeasure | IfcAngularVelocityMeasure | IfcAreaDensityMeasure | IfcCompoundPlaneAngleMeasure | IfcCurvatureMeasure | IfcDoseEquivalentMeasure | IfcDynamicViscosityMeasure | IfcElectricCapacitanceMeasure | IfcElectricChargeMeasure | IfcElectricConductanceMeasure | IfcElectricResistanceMeasure | IfcElectricVoltageMeasure | IfcEnergyMeasure | IfcForceMeasure | IfcFrequencyMeasure | IfcHeatFluxDensityMeasure | IfcHeatingValueMeasure | IfcIlluminanceMeasure | IfcInductanceMeasure | IfcIntegerCountRateMeasure | IfcIonConcentrationMeasure | IfcIsothermalMoistureCapacityMeasure | IfcKinematicViscosityMeasure | IfcLinearForceMeasure | IfcLinearMomentMeasure | IfcLinearStiffnessMeasure | IfcLinearVelocityMeasure | IfcLuminousFluxMeasure | IfcLuminousIntensityDistributionMeasure | IfcMagneticFluxDensityMeasure | IfcMagneticFluxMeasure | IfcMassDensityMeasure | IfcMassFlowRateMeasure | IfcMassPerLengthMeasure | IfcModulusOfElasticityMeasure | IfcModulusOfLinearSubgradeReactionMeasure | IfcModulusOfRotationalSubgradeReactionMeasure | IfcModulusOfSubgradeReactionMeasure | IfcMoistureDiffusivityMeasure | IfcMolecularWeightMeasure | IfcMomentOfInertiaMeasure | IfcMonetaryMeasure | IfcPHMeasure | IfcPlanarForceMeasure | IfcPowerMeasure | IfcPressureMeasure | IfcRadioActivityMeasure | IfcRotationalFrequencyMeasure | IfcRotationalMassMeasure | IfcRotationalStiffnessMeasure | IfcSectionModulusMeasure | IfcSectionalAreaIntegralMeasure | IfcShearModulusMeasure | IfcSoundPowerLevelMeasure | IfcSoundPowerMeasure | IfcSoundPressureLevelMeasure | IfcSoundPressureMeasure | IfcSpecificHeatCapacityMeasure | IfcTemperatureGradientMeasure | IfcTemperatureRateOfChangeMeasure | IfcThermalAdmittanceMeasure | IfcThermalConductivityMeasure | IfcThermalExpansionCoefficientMeasure | IfcThermalResistanceMeasure | IfcThermalTransmittanceMeasure | IfcTorqueMeasure | IfcVaporPermeabilityMeasure | IfcVolumetricFlowRateMeasure | IfcWarpingConstantMeasure | IfcWarpingMomentMeasure;
export declare type IfcDocumentSelect = (Handle<IfcDocumentInformation> | IfcDocumentInformation) | (Handle<IfcDocumentReference> | IfcDocumentReference);
export declare type IfcFillStyleSelect = IfcColour | (Handle<IfcExternallyDefinedHatchStyle> | IfcExternallyDefinedHatchStyle) | (Handle<IfcFillAreaStyleHatching> | IfcFillAreaStyleHatching) | (Handle<IfcFillAreaStyleTiles> | IfcFillAreaStyleTiles);
export declare type IfcGeometricSetSelect = (Handle<IfcCurve> | IfcCurve) | (Handle<IfcPoint> | IfcPoint) | (Handle<IfcSurface> | IfcSurface);
export declare type IfcGridPlacementDirectionSelect = (Handle<IfcDirection> | IfcDirection) | (Handle<IfcVirtualGridIntersection> | IfcVirtualGridIntersection);
export declare type IfcHatchLineDistanceSelect = IfcPositiveLengthMeasure | (Handle<IfcVector> | IfcVector);
export declare type IfcLayeredItem = (Handle<IfcRepresentation> | IfcRepresentation) | (Handle<IfcRepresentationItem> | IfcRepresentationItem);
export declare type IfcLibrarySelect = (Handle<IfcLibraryInformation> | IfcLibraryInformation) | (Handle<IfcLibraryReference> | IfcLibraryReference);
export declare type IfcLightDistributionDataSourceSelect = (Handle<IfcExternalReference> | IfcExternalReference) | (Handle<IfcLightIntensityDistribution> | IfcLightIntensityDistribution);
export declare type IfcMaterialSelect = (Handle<IfcMaterialDefinition> | IfcMaterialDefinition) | (Handle<IfcMaterialList> | IfcMaterialList) | (Handle<IfcMaterialUsageDefinition> | IfcMaterialUsageDefinition);
export declare type IfcMeasureValue = IfcAmountOfSubstanceMeasure | IfcAreaMeasure | IfcComplexNumber | IfcContextDependentMeasure | IfcCountMeasure | IfcDescriptiveMeasure | IfcElectricCurrentMeasure | IfcLengthMeasure | IfcLuminousIntensityMeasure | IfcMassMeasure | IfcNonNegativeLengthMeasure | IfcNormalisedRatioMeasure | IfcNumericMeasure | IfcParameterValue | IfcPlaneAngleMeasure | IfcPositiveLengthMeasure | IfcPositivePlaneAngleMeasure | IfcPositiveRatioMeasure | IfcRatioMeasure | IfcSolidAngleMeasure | IfcThermodynamicTemperatureMeasure | IfcTimeMeasure | IfcVolumeMeasure;
export declare type IfcMetricValueSelect = (Handle<IfcAppliedValue> | IfcAppliedValue) | (Handle<IfcMeasureWithUnit> | IfcMeasureWithUnit) | (Handle<IfcReference> | IfcReference) | (Handle<IfcTable> | IfcTable) | (Handle<IfcTimeSeries> | IfcTimeSeries) | IfcValue;
export declare type IfcModulusOfRotationalSubgradeReactionSelect = IfcBoolean | IfcModulusOfRotationalSubgradeReactionMeasure;
export declare type IfcModulusOfSubgradeReactionSelect = IfcBoolean | IfcModulusOfSubgradeReactionMeasure;
export declare type IfcModulusOfTranslationalSubgradeReactionSelect = IfcBoolean | IfcModulusOfLinearSubgradeReactionMeasure;
export declare type IfcObjectReferenceSelect = (Handle<IfcAddress> | IfcAddress) | (Handle<IfcAppliedValue> | IfcAppliedValue) | (Handle<IfcExternalReference> | IfcExternalReference) | (Handle<IfcMaterialDefinition> | IfcMaterialDefinition) | (Handle<IfcOrganization> | IfcOrganization) | (Handle<IfcPerson> | IfcPerson) | (Handle<IfcPersonAndOrganization> | IfcPersonAndOrganization) | (Handle<IfcTable> | IfcTable) | (Handle<IfcTimeSeries> | IfcTimeSeries);
export declare type IfcPointOrVertexPoint = (Handle<IfcPoint> | IfcPoint) | (Handle<IfcVertexPoint> | IfcVertexPoint);
export declare type IfcPresentationStyleSelect = (Handle<IfcCurveStyle> | IfcCurveStyle) | (Handle<IfcFillAreaStyle> | IfcFillAreaStyle) | IfcNullStyle | (Handle<IfcSurfaceStyle> | IfcSurfaceStyle) | (Handle<IfcTextStyle> | IfcTextStyle);
export declare type IfcProcessSelect = (Handle<IfcProcess> | IfcProcess) | (Handle<IfcTypeProcess> | IfcTypeProcess);
export declare type IfcProductRepresentationSelect = (Handle<IfcProductDefinitionShape> | IfcProductDefinitionShape) | (Handle<IfcRepresentationMap> | IfcRepresentationMap);
export declare type IfcProductSelect = (Handle<IfcProduct> | IfcProduct) | (Handle<IfcTypeProduct> | IfcTypeProduct);
export declare type IfcPropertySetDefinitionSelect = (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition) | IfcPropertySetDefinitionSet;
export declare type IfcResourceObjectSelect = (Handle<IfcActorRole> | IfcActorRole) | (Handle<IfcAppliedValue> | IfcAppliedValue) | (Handle<IfcApproval> | IfcApproval) | (Handle<IfcConstraint> | IfcConstraint) | (Handle<IfcContextDependentUnit> | IfcContextDependentUnit) | (Handle<IfcConversionBasedUnit> | IfcConversionBasedUnit) | (Handle<IfcExternalInformation> | IfcExternalInformation) | (Handle<IfcExternalReference> | IfcExternalReference) | (Handle<IfcMaterialDefinition> | IfcMaterialDefinition) | (Handle<IfcOrganization> | IfcOrganization) | (Handle<IfcPerson> | IfcPerson) | (Handle<IfcPersonAndOrganization> | IfcPersonAndOrganization) | (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | (Handle<IfcProfileDef> | IfcProfileDef) | (Handle<IfcPropertyAbstraction> | IfcPropertyAbstraction) | (Handle<IfcShapeAspect> | IfcShapeAspect) | (Handle<IfcTimeSeries> | IfcTimeSeries);
export declare type IfcResourceSelect = (Handle<IfcResource> | IfcResource) | (Handle<IfcTypeResource> | IfcTypeResource);
export declare type IfcRotationalStiffnessSelect = IfcBoolean | IfcRotationalStiffnessMeasure;
export declare type IfcSegmentIndexSelect = IfcArcIndex | IfcLineIndex;
export declare type IfcShell = (Handle<IfcClosedShell> | IfcClosedShell) | (Handle<IfcOpenShell> | IfcOpenShell);
export declare type IfcSimpleValue = IfcBinary | IfcBoolean | IfcDate | IfcDateTime | IfcDuration | IfcIdentifier | IfcInteger | IfcLabel | IfcLogical | IfcPositiveInteger | IfcReal | IfcText | IfcTime | IfcTimeStamp;
export declare type IfcSizeSelect = IfcDescriptiveMeasure | IfcLengthMeasure | IfcNormalisedRatioMeasure | IfcPositiveLengthMeasure | IfcPositiveRatioMeasure | IfcRatioMeasure;
export declare type IfcSolidOrShell = (Handle<IfcClosedShell> | IfcClosedShell) | (Handle<IfcSolidModel> | IfcSolidModel);
export declare type IfcSpaceBoundarySelect = (Handle<IfcExternalSpatialElement> | IfcExternalSpatialElement) | (Handle<IfcSpace> | IfcSpace);
export declare type IfcSpecularHighlightSelect = IfcSpecularExponent | IfcSpecularRoughness;
export declare type IfcStructuralActivityAssignmentSelect = (Handle<IfcElement> | IfcElement) | (Handle<IfcStructuralItem> | IfcStructuralItem);
export declare type IfcStyleAssignmentSelect = (Handle<IfcPresentationStyle> | IfcPresentationStyle) | (Handle<IfcPresentationStyleAssignment> | IfcPresentationStyleAssignment);
export declare type IfcSurfaceOrFaceSurface = (Handle<IfcFaceBasedSurfaceModel> | IfcFaceBasedSurfaceModel) | (Handle<IfcFaceSurface> | IfcFaceSurface) | (Handle<IfcSurface> | IfcSurface);
export declare type IfcSurfaceStyleElementSelect = (Handle<IfcExternallyDefinedSurfaceStyle> | IfcExternallyDefinedSurfaceStyle) | (Handle<IfcSurfaceStyleLighting> | IfcSurfaceStyleLighting) | (Handle<IfcSurfaceStyleRefraction> | IfcSurfaceStyleRefraction) | (Handle<IfcSurfaceStyleShading> | IfcSurfaceStyleShading) | (Handle<IfcSurfaceStyleWithTextures> | IfcSurfaceStyleWithTextures);
export declare type IfcTextFontSelect = (Handle<IfcExternallyDefinedTextFont> | IfcExternallyDefinedTextFont) | (Handle<IfcPreDefinedTextFont> | IfcPreDefinedTextFont);
export declare type IfcTimeOrRatioSelect = IfcDuration | IfcRatioMeasure;
export declare type IfcTranslationalStiffnessSelect = IfcBoolean | IfcLinearStiffnessMeasure;
export declare type IfcTrimmingSelect = (Handle<IfcCartesianPoint> | IfcCartesianPoint) | IfcParameterValue;
export declare type IfcUnit = (Handle<IfcDerivedUnit> | IfcDerivedUnit) | (Handle<IfcMonetaryUnit> | IfcMonetaryUnit) | (Handle<IfcNamedUnit> | IfcNamedUnit);
export declare type IfcValue = IfcDerivedMeasureValue | IfcMeasureValue | IfcSimpleValue;
export declare type IfcVectorOrDirection = (Handle<IfcDirection> | IfcDirection) | (Handle<IfcVector> | IfcVector);
export declare type IfcWarpingStiffnessSelect = IfcBoolean | IfcWarpingMomentMeasure;
export declare class IfcActionRequest {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, PredefinedType: IfcActionRequestTypeEnum | null, Status: IfcLabel | null, LongDescription: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    PredefinedType: IfcActionRequestTypeEnum | null;
    Status: IfcLabel | null;
    LongDescription: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcActionRequest;
    ToTape(): any[];
}
export declare class IfcActor {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, TheActor: IfcActorSelect);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    TheActor: IfcActorSelect;
    static FromTape(expressID: number, type: number, tape: any[]): IfcActor;
    ToTape(): any[];
}
export declare class IfcActorRole {
    constructor(expressID: number, type: number, Role: IfcRoleEnum, UserDefinedRole: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    Role: IfcRoleEnum;
    UserDefinedRole: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcActorRole;
    ToTape(): any[];
}
export declare class IfcActuator {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcActuatorTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcActuatorTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcActuator;
    ToTape(): any[];
}
export declare class IfcActuatorType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcActuatorTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcActuatorTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcActuatorType;
    ToTape(): any[];
}
export declare class IfcAddress {
    constructor(expressID: number, type: number, Purpose: IfcAddressTypeEnum | null, Description: IfcText | null, UserDefinedPurpose: IfcLabel | null);
    expressID: number;
    type: number;
    Purpose: IfcAddressTypeEnum | null;
    Description: IfcText | null;
    UserDefinedPurpose: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAddress;
    ToTape(): any[];
}
export declare class IfcAdvancedBrep {
    constructor(expressID: number, type: number, Outer: (Handle<IfcClosedShell> | IfcClosedShell));
    expressID: number;
    type: number;
    Outer: (Handle<IfcClosedShell> | IfcClosedShell);
    static FromTape(expressID: number, type: number, tape: any[]): IfcAdvancedBrep;
    ToTape(): any[];
}
export declare class IfcAdvancedBrepWithVoids {
    constructor(expressID: number, type: number, Outer: (Handle<IfcClosedShell> | IfcClosedShell), Voids: (Handle<IfcClosedShell> | IfcClosedShell)[]);
    expressID: number;
    type: number;
    Outer: (Handle<IfcClosedShell> | IfcClosedShell);
    Voids: (Handle<IfcClosedShell> | IfcClosedShell)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcAdvancedBrepWithVoids;
    ToTape(): any[];
}
export declare class IfcAdvancedFace {
    constructor(expressID: number, type: number, Bounds: (Handle<IfcFaceBound> | IfcFaceBound)[], FaceSurface: (Handle<IfcSurface> | IfcSurface), SameSense: IfcBoolean);
    expressID: number;
    type: number;
    Bounds: (Handle<IfcFaceBound> | IfcFaceBound)[];
    FaceSurface: (Handle<IfcSurface> | IfcSurface);
    SameSense: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAdvancedFace;
    ToTape(): any[];
}
export declare class IfcAirTerminal {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcAirTerminalTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcAirTerminalTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAirTerminal;
    ToTape(): any[];
}
export declare class IfcAirTerminalBox {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcAirTerminalBoxTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcAirTerminalBoxTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAirTerminalBox;
    ToTape(): any[];
}
export declare class IfcAirTerminalBoxType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcAirTerminalBoxTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcAirTerminalBoxTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAirTerminalBoxType;
    ToTape(): any[];
}
export declare class IfcAirTerminalType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcAirTerminalTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcAirTerminalTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAirTerminalType;
    ToTape(): any[];
}
export declare class IfcAirToAirHeatRecovery {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcAirToAirHeatRecoveryTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcAirToAirHeatRecoveryTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAirToAirHeatRecovery;
    ToTape(): any[];
}
export declare class IfcAirToAirHeatRecoveryType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcAirToAirHeatRecoveryTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcAirToAirHeatRecoveryTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAirToAirHeatRecoveryType;
    ToTape(): any[];
}
export declare class IfcAlarm {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcAlarmTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcAlarmTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAlarm;
    ToTape(): any[];
}
export declare class IfcAlarmType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcAlarmTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcAlarmTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAlarmType;
    ToTape(): any[];
}
export declare class IfcAlignment {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Axis: (Handle<IfcCurve> | IfcCurve), PredefinedType: IfcAlignmentTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Axis: (Handle<IfcCurve> | IfcCurve);
    PredefinedType: IfcAlignmentTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAlignment;
    ToTape(): any[];
}
export declare class IfcAlignment2DHorizontal {
    constructor(expressID: number, type: number, StartDistAlong: IfcLengthMeasure | null, Segments: (Handle<IfcAlignment2DHorizontalSegment> | IfcAlignment2DHorizontalSegment)[]);
    expressID: number;
    type: number;
    StartDistAlong: IfcLengthMeasure | null;
    Segments: (Handle<IfcAlignment2DHorizontalSegment> | IfcAlignment2DHorizontalSegment)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcAlignment2DHorizontal;
    ToTape(): any[];
}
export declare class IfcAlignment2DHorizontalSegment {
    constructor(expressID: number, type: number, TangentialContinuity: IfcBoolean | null, StartTag: IfcLabel | null, EndTag: IfcLabel | null, CurveGeometry: (Handle<IfcCurveSegment2D> | IfcCurveSegment2D));
    expressID: number;
    type: number;
    TangentialContinuity: IfcBoolean | null;
    StartTag: IfcLabel | null;
    EndTag: IfcLabel | null;
    CurveGeometry: (Handle<IfcCurveSegment2D> | IfcCurveSegment2D);
    static FromTape(expressID: number, type: number, tape: any[]): IfcAlignment2DHorizontalSegment;
    ToTape(): any[];
}
export declare class IfcAlignment2DSegment {
    constructor(expressID: number, type: number, TangentialContinuity: IfcBoolean | null, StartTag: IfcLabel | null, EndTag: IfcLabel | null);
    expressID: number;
    type: number;
    TangentialContinuity: IfcBoolean | null;
    StartTag: IfcLabel | null;
    EndTag: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAlignment2DSegment;
    ToTape(): any[];
}
export declare class IfcAlignment2DVerSegCircularArc {
    constructor(expressID: number, type: number, TangentialContinuity: IfcBoolean | null, StartTag: IfcLabel | null, EndTag: IfcLabel | null, StartDistAlong: IfcLengthMeasure, HorizontalLength: IfcPositiveLengthMeasure, StartHeight: IfcLengthMeasure, StartGradient: IfcRatioMeasure, Radius: IfcPositiveLengthMeasure, IsConvex: IfcBoolean);
    expressID: number;
    type: number;
    TangentialContinuity: IfcBoolean | null;
    StartTag: IfcLabel | null;
    EndTag: IfcLabel | null;
    StartDistAlong: IfcLengthMeasure;
    HorizontalLength: IfcPositiveLengthMeasure;
    StartHeight: IfcLengthMeasure;
    StartGradient: IfcRatioMeasure;
    Radius: IfcPositiveLengthMeasure;
    IsConvex: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAlignment2DVerSegCircularArc;
    ToTape(): any[];
}
export declare class IfcAlignment2DVerSegLine {
    constructor(expressID: number, type: number, TangentialContinuity: IfcBoolean | null, StartTag: IfcLabel | null, EndTag: IfcLabel | null, StartDistAlong: IfcLengthMeasure, HorizontalLength: IfcPositiveLengthMeasure, StartHeight: IfcLengthMeasure, StartGradient: IfcRatioMeasure);
    expressID: number;
    type: number;
    TangentialContinuity: IfcBoolean | null;
    StartTag: IfcLabel | null;
    EndTag: IfcLabel | null;
    StartDistAlong: IfcLengthMeasure;
    HorizontalLength: IfcPositiveLengthMeasure;
    StartHeight: IfcLengthMeasure;
    StartGradient: IfcRatioMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAlignment2DVerSegLine;
    ToTape(): any[];
}
export declare class IfcAlignment2DVerSegParabolicArc {
    constructor(expressID: number, type: number, TangentialContinuity: IfcBoolean | null, StartTag: IfcLabel | null, EndTag: IfcLabel | null, StartDistAlong: IfcLengthMeasure, HorizontalLength: IfcPositiveLengthMeasure, StartHeight: IfcLengthMeasure, StartGradient: IfcRatioMeasure, ParabolaConstant: IfcPositiveLengthMeasure, IsConvex: IfcBoolean);
    expressID: number;
    type: number;
    TangentialContinuity: IfcBoolean | null;
    StartTag: IfcLabel | null;
    EndTag: IfcLabel | null;
    StartDistAlong: IfcLengthMeasure;
    HorizontalLength: IfcPositiveLengthMeasure;
    StartHeight: IfcLengthMeasure;
    StartGradient: IfcRatioMeasure;
    ParabolaConstant: IfcPositiveLengthMeasure;
    IsConvex: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAlignment2DVerSegParabolicArc;
    ToTape(): any[];
}
export declare class IfcAlignment2DVertical {
    constructor(expressID: number, type: number, Segments: (Handle<IfcAlignment2DVerticalSegment> | IfcAlignment2DVerticalSegment)[]);
    expressID: number;
    type: number;
    Segments: (Handle<IfcAlignment2DVerticalSegment> | IfcAlignment2DVerticalSegment)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcAlignment2DVertical;
    ToTape(): any[];
}
export declare class IfcAlignment2DVerticalSegment {
    constructor(expressID: number, type: number, TangentialContinuity: IfcBoolean | null, StartTag: IfcLabel | null, EndTag: IfcLabel | null, StartDistAlong: IfcLengthMeasure, HorizontalLength: IfcPositiveLengthMeasure, StartHeight: IfcLengthMeasure, StartGradient: IfcRatioMeasure);
    expressID: number;
    type: number;
    TangentialContinuity: IfcBoolean | null;
    StartTag: IfcLabel | null;
    EndTag: IfcLabel | null;
    StartDistAlong: IfcLengthMeasure;
    HorizontalLength: IfcPositiveLengthMeasure;
    StartHeight: IfcLengthMeasure;
    StartGradient: IfcRatioMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAlignment2DVerticalSegment;
    ToTape(): any[];
}
export declare class IfcAlignmentCurve {
    constructor(expressID: number, type: number, Horizontal: (Handle<IfcAlignment2DHorizontal> | IfcAlignment2DHorizontal), Vertical: (Handle<IfcAlignment2DVertical> | IfcAlignment2DVertical) | null, Tag: IfcLabel | null);
    expressID: number;
    type: number;
    Horizontal: (Handle<IfcAlignment2DHorizontal> | IfcAlignment2DHorizontal);
    Vertical: (Handle<IfcAlignment2DVertical> | IfcAlignment2DVertical) | null;
    Tag: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAlignmentCurve;
    ToTape(): any[];
}
export declare class IfcAnnotation {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAnnotation;
    ToTape(): any[];
}
export declare class IfcAnnotationFillArea {
    constructor(expressID: number, type: number, OuterBoundary: (Handle<IfcCurve> | IfcCurve), InnerBoundaries: (Handle<IfcCurve> | IfcCurve)[] | null);
    expressID: number;
    type: number;
    OuterBoundary: (Handle<IfcCurve> | IfcCurve);
    InnerBoundaries: (Handle<IfcCurve> | IfcCurve)[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAnnotationFillArea;
    ToTape(): any[];
}
export declare class IfcApplication {
    constructor(expressID: number, type: number, ApplicationDeveloper: (Handle<IfcOrganization> | IfcOrganization), Version: IfcLabel, ApplicationFullName: IfcLabel, ApplicationIdentifier: IfcIdentifier);
    expressID: number;
    type: number;
    ApplicationDeveloper: (Handle<IfcOrganization> | IfcOrganization);
    Version: IfcLabel;
    ApplicationFullName: IfcLabel;
    ApplicationIdentifier: IfcIdentifier;
    static FromTape(expressID: number, type: number, tape: any[]): IfcApplication;
    ToTape(): any[];
}
export declare class IfcAppliedValue {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, AppliedValue: IfcAppliedValueSelect | null, UnitBasis: (Handle<IfcMeasureWithUnit> | IfcMeasureWithUnit) | null, ApplicableDate: IfcDate | null, FixedUntilDate: IfcDate | null, Category: IfcLabel | null, Condition: IfcLabel | null, ArithmeticOperator: IfcArithmeticOperatorEnum | null, Components: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    AppliedValue: IfcAppliedValueSelect | null;
    UnitBasis: (Handle<IfcMeasureWithUnit> | IfcMeasureWithUnit) | null;
    ApplicableDate: IfcDate | null;
    FixedUntilDate: IfcDate | null;
    Category: IfcLabel | null;
    Condition: IfcLabel | null;
    ArithmeticOperator: IfcArithmeticOperatorEnum | null;
    Components: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAppliedValue;
    ToTape(): any[];
}
export declare class IfcApproval {
    constructor(expressID: number, type: number, Identifier: IfcIdentifier | null, Name: IfcLabel | null, Description: IfcText | null, TimeOfApproval: IfcDateTime | null, Status: IfcLabel | null, Level: IfcLabel | null, Qualifier: IfcText | null, RequestingApproval: IfcActorSelect | null, GivingApproval: IfcActorSelect | null);
    expressID: number;
    type: number;
    Identifier: IfcIdentifier | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    TimeOfApproval: IfcDateTime | null;
    Status: IfcLabel | null;
    Level: IfcLabel | null;
    Qualifier: IfcText | null;
    RequestingApproval: IfcActorSelect | null;
    GivingApproval: IfcActorSelect | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcApproval;
    ToTape(): any[];
}
export declare class IfcApprovalRelationship {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, RelatingApproval: (Handle<IfcApproval> | IfcApproval), RelatedApprovals: (Handle<IfcApproval> | IfcApproval)[]);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingApproval: (Handle<IfcApproval> | IfcApproval);
    RelatedApprovals: (Handle<IfcApproval> | IfcApproval)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcApprovalRelationship;
    ToTape(): any[];
}
export declare class IfcArbitraryClosedProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, OuterCurve: (Handle<IfcCurve> | IfcCurve));
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    OuterCurve: (Handle<IfcCurve> | IfcCurve);
    static FromTape(expressID: number, type: number, tape: any[]): IfcArbitraryClosedProfileDef;
    ToTape(): any[];
}
export declare class IfcArbitraryOpenProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Curve: (Handle<IfcBoundedCurve> | IfcBoundedCurve));
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Curve: (Handle<IfcBoundedCurve> | IfcBoundedCurve);
    static FromTape(expressID: number, type: number, tape: any[]): IfcArbitraryOpenProfileDef;
    ToTape(): any[];
}
export declare class IfcArbitraryProfileDefWithVoids {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, OuterCurve: (Handle<IfcCurve> | IfcCurve), InnerCurves: (Handle<IfcCurve> | IfcCurve)[]);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    OuterCurve: (Handle<IfcCurve> | IfcCurve);
    InnerCurves: (Handle<IfcCurve> | IfcCurve)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcArbitraryProfileDefWithVoids;
    ToTape(): any[];
}
export declare class IfcAsset {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, OriginalValue: (Handle<IfcCostValue> | IfcCostValue) | null, CurrentValue: (Handle<IfcCostValue> | IfcCostValue) | null, TotalReplacementCost: (Handle<IfcCostValue> | IfcCostValue) | null, Owner: IfcActorSelect | null, User: IfcActorSelect | null, ResponsiblePerson: (Handle<IfcPerson> | IfcPerson) | null, IncorporationDate: IfcDate | null, DepreciatedValue: (Handle<IfcCostValue> | IfcCostValue) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    OriginalValue: (Handle<IfcCostValue> | IfcCostValue) | null;
    CurrentValue: (Handle<IfcCostValue> | IfcCostValue) | null;
    TotalReplacementCost: (Handle<IfcCostValue> | IfcCostValue) | null;
    Owner: IfcActorSelect | null;
    User: IfcActorSelect | null;
    ResponsiblePerson: (Handle<IfcPerson> | IfcPerson) | null;
    IncorporationDate: IfcDate | null;
    DepreciatedValue: (Handle<IfcCostValue> | IfcCostValue) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAsset;
    ToTape(): any[];
}
export declare class IfcAsymmetricIShapeProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, BottomFlangeWidth: IfcPositiveLengthMeasure, OverallDepth: IfcPositiveLengthMeasure, WebThickness: IfcPositiveLengthMeasure, BottomFlangeThickness: IfcPositiveLengthMeasure, BottomFlangeFilletRadius: IfcNonNegativeLengthMeasure | null, TopFlangeWidth: IfcPositiveLengthMeasure, TopFlangeThickness: IfcPositiveLengthMeasure | null, TopFlangeFilletRadius: IfcNonNegativeLengthMeasure | null, BottomFlangeEdgeRadius: IfcNonNegativeLengthMeasure | null, BottomFlangeSlope: IfcPlaneAngleMeasure | null, TopFlangeEdgeRadius: IfcNonNegativeLengthMeasure | null, TopFlangeSlope: IfcPlaneAngleMeasure | null);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    BottomFlangeWidth: IfcPositiveLengthMeasure;
    OverallDepth: IfcPositiveLengthMeasure;
    WebThickness: IfcPositiveLengthMeasure;
    BottomFlangeThickness: IfcPositiveLengthMeasure;
    BottomFlangeFilletRadius: IfcNonNegativeLengthMeasure | null;
    TopFlangeWidth: IfcPositiveLengthMeasure;
    TopFlangeThickness: IfcPositiveLengthMeasure | null;
    TopFlangeFilletRadius: IfcNonNegativeLengthMeasure | null;
    BottomFlangeEdgeRadius: IfcNonNegativeLengthMeasure | null;
    BottomFlangeSlope: IfcPlaneAngleMeasure | null;
    TopFlangeEdgeRadius: IfcNonNegativeLengthMeasure | null;
    TopFlangeSlope: IfcPlaneAngleMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAsymmetricIShapeProfileDef;
    ToTape(): any[];
}
export declare class IfcAudioVisualAppliance {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcAudioVisualApplianceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcAudioVisualApplianceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAudioVisualAppliance;
    ToTape(): any[];
}
export declare class IfcAudioVisualApplianceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcAudioVisualApplianceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcAudioVisualApplianceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAudioVisualApplianceType;
    ToTape(): any[];
}
export declare class IfcAxis1Placement {
    constructor(expressID: number, type: number, Location: (Handle<IfcCartesianPoint> | IfcCartesianPoint), Axis: (Handle<IfcDirection> | IfcDirection) | null);
    expressID: number;
    type: number;
    Location: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    Axis: (Handle<IfcDirection> | IfcDirection) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAxis1Placement;
    ToTape(): any[];
}
export declare class IfcAxis2Placement2D {
    constructor(expressID: number, type: number, Location: (Handle<IfcCartesianPoint> | IfcCartesianPoint), RefDirection: (Handle<IfcDirection> | IfcDirection) | null);
    expressID: number;
    type: number;
    Location: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    RefDirection: (Handle<IfcDirection> | IfcDirection) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAxis2Placement2D;
    ToTape(): any[];
}
export declare class IfcAxis2Placement3D {
    constructor(expressID: number, type: number, Location: (Handle<IfcCartesianPoint> | IfcCartesianPoint), Axis: (Handle<IfcDirection> | IfcDirection) | null, RefDirection: (Handle<IfcDirection> | IfcDirection) | null);
    expressID: number;
    type: number;
    Location: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    Axis: (Handle<IfcDirection> | IfcDirection) | null;
    RefDirection: (Handle<IfcDirection> | IfcDirection) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcAxis2Placement3D;
    ToTape(): any[];
}
export declare class IfcBSplineCurve {
    constructor(expressID: number, type: number, Degree: IfcInteger, ControlPointsList: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[], CurveForm: IfcBSplineCurveForm, ClosedCurve: IfcLogical, SelfIntersect: IfcLogical);
    expressID: number;
    type: number;
    Degree: IfcInteger;
    ControlPointsList: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[];
    CurveForm: IfcBSplineCurveForm;
    ClosedCurve: IfcLogical;
    SelfIntersect: IfcLogical;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBSplineCurve;
    ToTape(): any[];
}
export declare class IfcBSplineCurveWithKnots {
    constructor(expressID: number, type: number, Degree: IfcInteger, ControlPointsList: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[], CurveForm: IfcBSplineCurveForm, ClosedCurve: IfcLogical, SelfIntersect: IfcLogical, KnotMultiplicities: IfcInteger[], Knots: IfcParameterValue[], KnotSpec: IfcKnotType);
    expressID: number;
    type: number;
    Degree: IfcInteger;
    ControlPointsList: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[];
    CurveForm: IfcBSplineCurveForm;
    ClosedCurve: IfcLogical;
    SelfIntersect: IfcLogical;
    KnotMultiplicities: IfcInteger[];
    Knots: IfcParameterValue[];
    KnotSpec: IfcKnotType;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBSplineCurveWithKnots;
    ToTape(): any[];
}
export declare class IfcBSplineSurface {
    constructor(expressID: number, type: number, UDegree: IfcInteger, VDegree: IfcInteger, ControlPointsList: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[], SurfaceForm: IfcBSplineSurfaceForm, UClosed: IfcLogical, VClosed: IfcLogical, SelfIntersect: IfcLogical);
    expressID: number;
    type: number;
    UDegree: IfcInteger;
    VDegree: IfcInteger;
    ControlPointsList: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[];
    SurfaceForm: IfcBSplineSurfaceForm;
    UClosed: IfcLogical;
    VClosed: IfcLogical;
    SelfIntersect: IfcLogical;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBSplineSurface;
    ToTape(): any[];
}
export declare class IfcBSplineSurfaceWithKnots {
    constructor(expressID: number, type: number, UDegree: IfcInteger, VDegree: IfcInteger, ControlPointsList: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[], SurfaceForm: IfcBSplineSurfaceForm, UClosed: IfcLogical, VClosed: IfcLogical, SelfIntersect: IfcLogical, UMultiplicities: IfcInteger[], VMultiplicities: IfcInteger[], UKnots: IfcParameterValue[], VKnots: IfcParameterValue[], KnotSpec: IfcKnotType);
    expressID: number;
    type: number;
    UDegree: IfcInteger;
    VDegree: IfcInteger;
    ControlPointsList: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[];
    SurfaceForm: IfcBSplineSurfaceForm;
    UClosed: IfcLogical;
    VClosed: IfcLogical;
    SelfIntersect: IfcLogical;
    UMultiplicities: IfcInteger[];
    VMultiplicities: IfcInteger[];
    UKnots: IfcParameterValue[];
    VKnots: IfcParameterValue[];
    KnotSpec: IfcKnotType;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBSplineSurfaceWithKnots;
    ToTape(): any[];
}
export declare class IfcBeam {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcBeamTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcBeamTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBeam;
    ToTape(): any[];
}
export declare class IfcBeamStandardCase {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcBeamTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcBeamTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBeamStandardCase;
    ToTape(): any[];
}
export declare class IfcBeamType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcBeamTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcBeamTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBeamType;
    ToTape(): any[];
}
export declare class IfcBearing {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcBearingTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcBearingTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBearing;
    ToTape(): any[];
}
export declare class IfcBearingType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcBearingTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcBearingTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBearingType;
    ToTape(): any[];
}
export declare class IfcBlobTexture {
    constructor(expressID: number, type: number, RepeatS: IfcBoolean, RepeatT: IfcBoolean, Mode: IfcIdentifier | null, TextureTransform: (Handle<IfcCartesianTransformationOperator2D> | IfcCartesianTransformationOperator2D) | null, Parameter: IfcIdentifier[] | null, RasterFormat: IfcIdentifier, RasterCode: IfcBinary);
    expressID: number;
    type: number;
    RepeatS: IfcBoolean;
    RepeatT: IfcBoolean;
    Mode: IfcIdentifier | null;
    TextureTransform: (Handle<IfcCartesianTransformationOperator2D> | IfcCartesianTransformationOperator2D) | null;
    Parameter: IfcIdentifier[] | null;
    RasterFormat: IfcIdentifier;
    RasterCode: IfcBinary;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBlobTexture;
    ToTape(): any[];
}
export declare class IfcBlock {
    constructor(expressID: number, type: number, Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D), XLength: IfcPositiveLengthMeasure, YLength: IfcPositiveLengthMeasure, ZLength: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
    XLength: IfcPositiveLengthMeasure;
    YLength: IfcPositiveLengthMeasure;
    ZLength: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBlock;
    ToTape(): any[];
}
export declare class IfcBoiler {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcBoilerTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcBoilerTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBoiler;
    ToTape(): any[];
}
export declare class IfcBoilerType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcBoilerTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcBoilerTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBoilerType;
    ToTape(): any[];
}
export declare class IfcBooleanClippingResult {
    constructor(expressID: number, type: number, Operator: IfcBooleanOperator, FirstOperand: IfcBooleanOperand, SecondOperand: IfcBooleanOperand);
    expressID: number;
    type: number;
    Operator: IfcBooleanOperator;
    FirstOperand: IfcBooleanOperand;
    SecondOperand: IfcBooleanOperand;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBooleanClippingResult;
    ToTape(): any[];
}
export declare class IfcBooleanResult {
    constructor(expressID: number, type: number, Operator: IfcBooleanOperator, FirstOperand: IfcBooleanOperand, SecondOperand: IfcBooleanOperand);
    expressID: number;
    type: number;
    Operator: IfcBooleanOperator;
    FirstOperand: IfcBooleanOperand;
    SecondOperand: IfcBooleanOperand;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBooleanResult;
    ToTape(): any[];
}
export declare class IfcBoundaryCondition {
    constructor(expressID: number, type: number, Name: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBoundaryCondition;
    ToTape(): any[];
}
export declare class IfcBoundaryCurve {
    constructor(expressID: number, type: number, Segments: (Handle<IfcCompositeCurveSegment> | IfcCompositeCurveSegment)[], SelfIntersect: IfcLogical);
    expressID: number;
    type: number;
    Segments: (Handle<IfcCompositeCurveSegment> | IfcCompositeCurveSegment)[];
    SelfIntersect: IfcLogical;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBoundaryCurve;
    ToTape(): any[];
}
export declare class IfcBoundaryEdgeCondition {
    constructor(expressID: number, type: number, Name: IfcLabel | null, TranslationalStiffnessByLengthX: IfcModulusOfTranslationalSubgradeReactionSelect | null, TranslationalStiffnessByLengthY: IfcModulusOfTranslationalSubgradeReactionSelect | null, TranslationalStiffnessByLengthZ: IfcModulusOfTranslationalSubgradeReactionSelect | null, RotationalStiffnessByLengthX: IfcModulusOfRotationalSubgradeReactionSelect | null, RotationalStiffnessByLengthY: IfcModulusOfRotationalSubgradeReactionSelect | null, RotationalStiffnessByLengthZ: IfcModulusOfRotationalSubgradeReactionSelect | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    TranslationalStiffnessByLengthX: IfcModulusOfTranslationalSubgradeReactionSelect | null;
    TranslationalStiffnessByLengthY: IfcModulusOfTranslationalSubgradeReactionSelect | null;
    TranslationalStiffnessByLengthZ: IfcModulusOfTranslationalSubgradeReactionSelect | null;
    RotationalStiffnessByLengthX: IfcModulusOfRotationalSubgradeReactionSelect | null;
    RotationalStiffnessByLengthY: IfcModulusOfRotationalSubgradeReactionSelect | null;
    RotationalStiffnessByLengthZ: IfcModulusOfRotationalSubgradeReactionSelect | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBoundaryEdgeCondition;
    ToTape(): any[];
}
export declare class IfcBoundaryFaceCondition {
    constructor(expressID: number, type: number, Name: IfcLabel | null, TranslationalStiffnessByAreaX: IfcModulusOfSubgradeReactionSelect | null, TranslationalStiffnessByAreaY: IfcModulusOfSubgradeReactionSelect | null, TranslationalStiffnessByAreaZ: IfcModulusOfSubgradeReactionSelect | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    TranslationalStiffnessByAreaX: IfcModulusOfSubgradeReactionSelect | null;
    TranslationalStiffnessByAreaY: IfcModulusOfSubgradeReactionSelect | null;
    TranslationalStiffnessByAreaZ: IfcModulusOfSubgradeReactionSelect | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBoundaryFaceCondition;
    ToTape(): any[];
}
export declare class IfcBoundaryNodeCondition {
    constructor(expressID: number, type: number, Name: IfcLabel | null, TranslationalStiffnessX: IfcTranslationalStiffnessSelect | null, TranslationalStiffnessY: IfcTranslationalStiffnessSelect | null, TranslationalStiffnessZ: IfcTranslationalStiffnessSelect | null, RotationalStiffnessX: IfcRotationalStiffnessSelect | null, RotationalStiffnessY: IfcRotationalStiffnessSelect | null, RotationalStiffnessZ: IfcRotationalStiffnessSelect | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    TranslationalStiffnessX: IfcTranslationalStiffnessSelect | null;
    TranslationalStiffnessY: IfcTranslationalStiffnessSelect | null;
    TranslationalStiffnessZ: IfcTranslationalStiffnessSelect | null;
    RotationalStiffnessX: IfcRotationalStiffnessSelect | null;
    RotationalStiffnessY: IfcRotationalStiffnessSelect | null;
    RotationalStiffnessZ: IfcRotationalStiffnessSelect | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBoundaryNodeCondition;
    ToTape(): any[];
}
export declare class IfcBoundaryNodeConditionWarping {
    constructor(expressID: number, type: number, Name: IfcLabel | null, TranslationalStiffnessX: IfcTranslationalStiffnessSelect | null, TranslationalStiffnessY: IfcTranslationalStiffnessSelect | null, TranslationalStiffnessZ: IfcTranslationalStiffnessSelect | null, RotationalStiffnessX: IfcRotationalStiffnessSelect | null, RotationalStiffnessY: IfcRotationalStiffnessSelect | null, RotationalStiffnessZ: IfcRotationalStiffnessSelect | null, WarpingStiffness: IfcWarpingStiffnessSelect | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    TranslationalStiffnessX: IfcTranslationalStiffnessSelect | null;
    TranslationalStiffnessY: IfcTranslationalStiffnessSelect | null;
    TranslationalStiffnessZ: IfcTranslationalStiffnessSelect | null;
    RotationalStiffnessX: IfcRotationalStiffnessSelect | null;
    RotationalStiffnessY: IfcRotationalStiffnessSelect | null;
    RotationalStiffnessZ: IfcRotationalStiffnessSelect | null;
    WarpingStiffness: IfcWarpingStiffnessSelect | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBoundaryNodeConditionWarping;
    ToTape(): any[];
}
export declare class IfcBoundedCurve {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBoundedCurve;
    ToTape(): any[];
}
export declare class IfcBoundedSurface {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBoundedSurface;
    ToTape(): any[];
}
export declare class IfcBoundingBox {
    constructor(expressID: number, type: number, Corner: (Handle<IfcCartesianPoint> | IfcCartesianPoint), XDim: IfcPositiveLengthMeasure, YDim: IfcPositiveLengthMeasure, ZDim: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    Corner: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    XDim: IfcPositiveLengthMeasure;
    YDim: IfcPositiveLengthMeasure;
    ZDim: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBoundingBox;
    ToTape(): any[];
}
export declare class IfcBoxedHalfSpace {
    constructor(expressID: number, type: number, BaseSurface: (Handle<IfcSurface> | IfcSurface), AgreementFlag: IfcBoolean, Enclosure: (Handle<IfcBoundingBox> | IfcBoundingBox));
    expressID: number;
    type: number;
    BaseSurface: (Handle<IfcSurface> | IfcSurface);
    AgreementFlag: IfcBoolean;
    Enclosure: (Handle<IfcBoundingBox> | IfcBoundingBox);
    static FromTape(expressID: number, type: number, tape: any[]): IfcBoxedHalfSpace;
    ToTape(): any[];
}
export declare class IfcBridge {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, LongName: IfcLabel | null, CompositionType: IfcElementCompositionEnum | null, PredefinedType: IfcBridgeTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    LongName: IfcLabel | null;
    CompositionType: IfcElementCompositionEnum | null;
    PredefinedType: IfcBridgeTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBridge;
    ToTape(): any[];
}
export declare class IfcBridgePart {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, LongName: IfcLabel | null, CompositionType: IfcElementCompositionEnum | null, PredefinedType: IfcBridgePartTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    LongName: IfcLabel | null;
    CompositionType: IfcElementCompositionEnum | null;
    PredefinedType: IfcBridgePartTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBridgePart;
    ToTape(): any[];
}
export declare class IfcBuilding {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, LongName: IfcLabel | null, CompositionType: IfcElementCompositionEnum | null, ElevationOfRefHeight: IfcLengthMeasure | null, ElevationOfTerrain: IfcLengthMeasure | null, BuildingAddress: (Handle<IfcPostalAddress> | IfcPostalAddress) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    LongName: IfcLabel | null;
    CompositionType: IfcElementCompositionEnum | null;
    ElevationOfRefHeight: IfcLengthMeasure | null;
    ElevationOfTerrain: IfcLengthMeasure | null;
    BuildingAddress: (Handle<IfcPostalAddress> | IfcPostalAddress) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBuilding;
    ToTape(): any[];
}
export declare class IfcBuildingElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBuildingElement;
    ToTape(): any[];
}
export declare class IfcBuildingElementPart {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcBuildingElementPartTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcBuildingElementPartTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBuildingElementPart;
    ToTape(): any[];
}
export declare class IfcBuildingElementPartType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcBuildingElementPartTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcBuildingElementPartTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBuildingElementPartType;
    ToTape(): any[];
}
export declare class IfcBuildingElementProxy {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcBuildingElementProxyTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcBuildingElementProxyTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBuildingElementProxy;
    ToTape(): any[];
}
export declare class IfcBuildingElementProxyType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcBuildingElementProxyTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcBuildingElementProxyTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBuildingElementProxyType;
    ToTape(): any[];
}
export declare class IfcBuildingElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBuildingElementType;
    ToTape(): any[];
}
export declare class IfcBuildingStorey {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, LongName: IfcLabel | null, CompositionType: IfcElementCompositionEnum | null, Elevation: IfcLengthMeasure | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    LongName: IfcLabel | null;
    CompositionType: IfcElementCompositionEnum | null;
    Elevation: IfcLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBuildingStorey;
    ToTape(): any[];
}
export declare class IfcBuildingSystem {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, PredefinedType: IfcBuildingSystemTypeEnum | null, LongName: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    PredefinedType: IfcBuildingSystemTypeEnum | null;
    LongName: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBuildingSystem;
    ToTape(): any[];
}
export declare class IfcBurner {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcBurnerTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcBurnerTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBurner;
    ToTape(): any[];
}
export declare class IfcBurnerType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcBurnerTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcBurnerTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcBurnerType;
    ToTape(): any[];
}
export declare class IfcCShapeProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, Depth: IfcPositiveLengthMeasure, Width: IfcPositiveLengthMeasure, WallThickness: IfcPositiveLengthMeasure, Girth: IfcPositiveLengthMeasure, InternalFilletRadius: IfcNonNegativeLengthMeasure | null);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    Depth: IfcPositiveLengthMeasure;
    Width: IfcPositiveLengthMeasure;
    WallThickness: IfcPositiveLengthMeasure;
    Girth: IfcPositiveLengthMeasure;
    InternalFilletRadius: IfcNonNegativeLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCShapeProfileDef;
    ToTape(): any[];
}
export declare class IfcCableCarrierFitting {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcCableCarrierFittingTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcCableCarrierFittingTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCableCarrierFitting;
    ToTape(): any[];
}
export declare class IfcCableCarrierFittingType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcCableCarrierFittingTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcCableCarrierFittingTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCableCarrierFittingType;
    ToTape(): any[];
}
export declare class IfcCableCarrierSegment {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcCableCarrierSegmentTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcCableCarrierSegmentTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCableCarrierSegment;
    ToTape(): any[];
}
export declare class IfcCableCarrierSegmentType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcCableCarrierSegmentTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcCableCarrierSegmentTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCableCarrierSegmentType;
    ToTape(): any[];
}
export declare class IfcCableFitting {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcCableFittingTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcCableFittingTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCableFitting;
    ToTape(): any[];
}
export declare class IfcCableFittingType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcCableFittingTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcCableFittingTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCableFittingType;
    ToTape(): any[];
}
export declare class IfcCableSegment {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcCableSegmentTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcCableSegmentTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCableSegment;
    ToTape(): any[];
}
export declare class IfcCableSegmentType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcCableSegmentTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcCableSegmentTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCableSegmentType;
    ToTape(): any[];
}
export declare class IfcCaissonFoundation {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcCaissonFoundationTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcCaissonFoundationTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCaissonFoundation;
    ToTape(): any[];
}
export declare class IfcCaissonFoundationType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcCaissonFoundationTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcCaissonFoundationTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCaissonFoundationType;
    ToTape(): any[];
}
export declare class IfcCartesianPoint {
    constructor(expressID: number, type: number, Coordinates: IfcLengthMeasure[]);
    expressID: number;
    type: number;
    Coordinates: IfcLengthMeasure[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcCartesianPoint;
    ToTape(): any[];
}
export declare class IfcCartesianPointList {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCartesianPointList;
    ToTape(): any[];
}
export declare class IfcCartesianPointList2D {
    constructor(expressID: number, type: number, CoordList: IfcLengthMeasure[], TagList: IfcLabel[] | null);
    expressID: number;
    type: number;
    CoordList: IfcLengthMeasure[];
    TagList: IfcLabel[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCartesianPointList2D;
    ToTape(): any[];
}
export declare class IfcCartesianPointList3D {
    constructor(expressID: number, type: number, CoordList: IfcLengthMeasure[], TagList: IfcLabel[] | null);
    expressID: number;
    type: number;
    CoordList: IfcLengthMeasure[];
    TagList: IfcLabel[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCartesianPointList3D;
    ToTape(): any[];
}
export declare class IfcCartesianTransformationOperator {
    constructor(expressID: number, type: number, Axis1: (Handle<IfcDirection> | IfcDirection) | null, Axis2: (Handle<IfcDirection> | IfcDirection) | null, LocalOrigin: (Handle<IfcCartesianPoint> | IfcCartesianPoint), Scale: IfcReal | null);
    expressID: number;
    type: number;
    Axis1: (Handle<IfcDirection> | IfcDirection) | null;
    Axis2: (Handle<IfcDirection> | IfcDirection) | null;
    LocalOrigin: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    Scale: IfcReal | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCartesianTransformationOperator;
    ToTape(): any[];
}
export declare class IfcCartesianTransformationOperator2D {
    constructor(expressID: number, type: number, Axis1: (Handle<IfcDirection> | IfcDirection) | null, Axis2: (Handle<IfcDirection> | IfcDirection) | null, LocalOrigin: (Handle<IfcCartesianPoint> | IfcCartesianPoint), Scale: IfcReal | null);
    expressID: number;
    type: number;
    Axis1: (Handle<IfcDirection> | IfcDirection) | null;
    Axis2: (Handle<IfcDirection> | IfcDirection) | null;
    LocalOrigin: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    Scale: IfcReal | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCartesianTransformationOperator2D;
    ToTape(): any[];
}
export declare class IfcCartesianTransformationOperator2DnonUniform {
    constructor(expressID: number, type: number, Axis1: (Handle<IfcDirection> | IfcDirection) | null, Axis2: (Handle<IfcDirection> | IfcDirection) | null, LocalOrigin: (Handle<IfcCartesianPoint> | IfcCartesianPoint), Scale: IfcReal | null, Scale2: IfcReal | null);
    expressID: number;
    type: number;
    Axis1: (Handle<IfcDirection> | IfcDirection) | null;
    Axis2: (Handle<IfcDirection> | IfcDirection) | null;
    LocalOrigin: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    Scale: IfcReal | null;
    Scale2: IfcReal | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCartesianTransformationOperator2DnonUniform;
    ToTape(): any[];
}
export declare class IfcCartesianTransformationOperator3D {
    constructor(expressID: number, type: number, Axis1: (Handle<IfcDirection> | IfcDirection) | null, Axis2: (Handle<IfcDirection> | IfcDirection) | null, LocalOrigin: (Handle<IfcCartesianPoint> | IfcCartesianPoint), Scale: IfcReal | null, Axis3: (Handle<IfcDirection> | IfcDirection) | null);
    expressID: number;
    type: number;
    Axis1: (Handle<IfcDirection> | IfcDirection) | null;
    Axis2: (Handle<IfcDirection> | IfcDirection) | null;
    LocalOrigin: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    Scale: IfcReal | null;
    Axis3: (Handle<IfcDirection> | IfcDirection) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCartesianTransformationOperator3D;
    ToTape(): any[];
}
export declare class IfcCartesianTransformationOperator3DnonUniform {
    constructor(expressID: number, type: number, Axis1: (Handle<IfcDirection> | IfcDirection) | null, Axis2: (Handle<IfcDirection> | IfcDirection) | null, LocalOrigin: (Handle<IfcCartesianPoint> | IfcCartesianPoint), Scale: IfcReal | null, Axis3: (Handle<IfcDirection> | IfcDirection) | null, Scale2: IfcReal | null, Scale3: IfcReal | null);
    expressID: number;
    type: number;
    Axis1: (Handle<IfcDirection> | IfcDirection) | null;
    Axis2: (Handle<IfcDirection> | IfcDirection) | null;
    LocalOrigin: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    Scale: IfcReal | null;
    Axis3: (Handle<IfcDirection> | IfcDirection) | null;
    Scale2: IfcReal | null;
    Scale3: IfcReal | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCartesianTransformationOperator3DnonUniform;
    ToTape(): any[];
}
export declare class IfcCenterLineProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Curve: (Handle<IfcBoundedCurve> | IfcBoundedCurve), Thickness: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Curve: (Handle<IfcBoundedCurve> | IfcBoundedCurve);
    Thickness: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCenterLineProfileDef;
    ToTape(): any[];
}
export declare class IfcChiller {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcChillerTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcChillerTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcChiller;
    ToTape(): any[];
}
export declare class IfcChillerType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcChillerTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcChillerTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcChillerType;
    ToTape(): any[];
}
export declare class IfcChimney {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcChimneyTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcChimneyTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcChimney;
    ToTape(): any[];
}
export declare class IfcChimneyType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcChimneyTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcChimneyTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcChimneyType;
    ToTape(): any[];
}
export declare class IfcCircle {
    constructor(expressID: number, type: number, Position: IfcAxis2Placement, Radius: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    Position: IfcAxis2Placement;
    Radius: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCircle;
    ToTape(): any[];
}
export declare class IfcCircleHollowProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, Radius: IfcPositiveLengthMeasure, WallThickness: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    Radius: IfcPositiveLengthMeasure;
    WallThickness: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCircleHollowProfileDef;
    ToTape(): any[];
}
export declare class IfcCircleProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, Radius: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    Radius: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCircleProfileDef;
    ToTape(): any[];
}
export declare class IfcCircularArcSegment2D {
    constructor(expressID: number, type: number, StartPoint: (Handle<IfcCartesianPoint> | IfcCartesianPoint), StartDirection: IfcPlaneAngleMeasure, SegmentLength: IfcPositiveLengthMeasure, Radius: IfcPositiveLengthMeasure, IsCCW: IfcBoolean);
    expressID: number;
    type: number;
    StartPoint: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    StartDirection: IfcPlaneAngleMeasure;
    SegmentLength: IfcPositiveLengthMeasure;
    Radius: IfcPositiveLengthMeasure;
    IsCCW: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCircularArcSegment2D;
    ToTape(): any[];
}
export declare class IfcCivilElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCivilElement;
    ToTape(): any[];
}
export declare class IfcCivilElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCivilElementType;
    ToTape(): any[];
}
export declare class IfcClassification {
    constructor(expressID: number, type: number, Source: IfcLabel | null, Edition: IfcLabel | null, EditionDate: IfcDate | null, Name: IfcLabel, Description: IfcText | null, Location: IfcURIReference | null, ReferenceTokens: IfcIdentifier[] | null);
    expressID: number;
    type: number;
    Source: IfcLabel | null;
    Edition: IfcLabel | null;
    EditionDate: IfcDate | null;
    Name: IfcLabel;
    Description: IfcText | null;
    Location: IfcURIReference | null;
    ReferenceTokens: IfcIdentifier[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcClassification;
    ToTape(): any[];
}
export declare class IfcClassificationReference {
    constructor(expressID: number, type: number, Location: IfcURIReference | null, Identification: IfcIdentifier | null, Name: IfcLabel | null, ReferencedSource: IfcClassificationReferenceSelect | null, Description: IfcText | null, Sort: IfcIdentifier | null);
    expressID: number;
    type: number;
    Location: IfcURIReference | null;
    Identification: IfcIdentifier | null;
    Name: IfcLabel | null;
    ReferencedSource: IfcClassificationReferenceSelect | null;
    Description: IfcText | null;
    Sort: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcClassificationReference;
    ToTape(): any[];
}
export declare class IfcClosedShell {
    constructor(expressID: number, type: number, CfsFaces: (Handle<IfcFace> | IfcFace)[]);
    expressID: number;
    type: number;
    CfsFaces: (Handle<IfcFace> | IfcFace)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcClosedShell;
    ToTape(): any[];
}
export declare class IfcCoil {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcCoilTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcCoilTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCoil;
    ToTape(): any[];
}
export declare class IfcCoilType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcCoilTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcCoilTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCoilType;
    ToTape(): any[];
}
export declare class IfcColourRgb {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Red: IfcNormalisedRatioMeasure, Green: IfcNormalisedRatioMeasure, Blue: IfcNormalisedRatioMeasure);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Red: IfcNormalisedRatioMeasure;
    Green: IfcNormalisedRatioMeasure;
    Blue: IfcNormalisedRatioMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcColourRgb;
    ToTape(): any[];
}
export declare class IfcColourRgbList {
    constructor(expressID: number, type: number, ColourList: IfcNormalisedRatioMeasure[]);
    expressID: number;
    type: number;
    ColourList: IfcNormalisedRatioMeasure[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcColourRgbList;
    ToTape(): any[];
}
export declare class IfcColourSpecification {
    constructor(expressID: number, type: number, Name: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcColourSpecification;
    ToTape(): any[];
}
export declare class IfcColumn {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcColumnTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcColumnTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcColumn;
    ToTape(): any[];
}
export declare class IfcColumnStandardCase {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcColumnTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcColumnTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcColumnStandardCase;
    ToTape(): any[];
}
export declare class IfcColumnType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcColumnTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcColumnTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcColumnType;
    ToTape(): any[];
}
export declare class IfcCommunicationsAppliance {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcCommunicationsApplianceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcCommunicationsApplianceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCommunicationsAppliance;
    ToTape(): any[];
}
export declare class IfcCommunicationsApplianceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcCommunicationsApplianceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcCommunicationsApplianceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCommunicationsApplianceType;
    ToTape(): any[];
}
export declare class IfcComplexProperty {
    constructor(expressID: number, type: number, Name: IfcIdentifier, Description: IfcText | null, UsageName: IfcIdentifier, HasProperties: (Handle<IfcProperty> | IfcProperty)[]);
    expressID: number;
    type: number;
    Name: IfcIdentifier;
    Description: IfcText | null;
    UsageName: IfcIdentifier;
    HasProperties: (Handle<IfcProperty> | IfcProperty)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcComplexProperty;
    ToTape(): any[];
}
export declare class IfcComplexPropertyTemplate {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, UsageName: IfcLabel | null, TemplateType: IfcComplexPropertyTemplateTypeEnum | null, HasPropertyTemplates: (Handle<IfcPropertyTemplate> | IfcPropertyTemplate)[] | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    UsageName: IfcLabel | null;
    TemplateType: IfcComplexPropertyTemplateTypeEnum | null;
    HasPropertyTemplates: (Handle<IfcPropertyTemplate> | IfcPropertyTemplate)[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcComplexPropertyTemplate;
    ToTape(): any[];
}
export declare class IfcCompositeCurve {
    constructor(expressID: number, type: number, Segments: (Handle<IfcCompositeCurveSegment> | IfcCompositeCurveSegment)[], SelfIntersect: IfcLogical);
    expressID: number;
    type: number;
    Segments: (Handle<IfcCompositeCurveSegment> | IfcCompositeCurveSegment)[];
    SelfIntersect: IfcLogical;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCompositeCurve;
    ToTape(): any[];
}
export declare class IfcCompositeCurveOnSurface {
    constructor(expressID: number, type: number, Segments: (Handle<IfcCompositeCurveSegment> | IfcCompositeCurveSegment)[], SelfIntersect: IfcLogical);
    expressID: number;
    type: number;
    Segments: (Handle<IfcCompositeCurveSegment> | IfcCompositeCurveSegment)[];
    SelfIntersect: IfcLogical;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCompositeCurveOnSurface;
    ToTape(): any[];
}
export declare class IfcCompositeCurveSegment {
    constructor(expressID: number, type: number, Transition: IfcTransitionCode, SameSense: IfcBoolean, ParentCurve: (Handle<IfcCurve> | IfcCurve));
    expressID: number;
    type: number;
    Transition: IfcTransitionCode;
    SameSense: IfcBoolean;
    ParentCurve: (Handle<IfcCurve> | IfcCurve);
    static FromTape(expressID: number, type: number, tape: any[]): IfcCompositeCurveSegment;
    ToTape(): any[];
}
export declare class IfcCompositeProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Profiles: (Handle<IfcProfileDef> | IfcProfileDef)[], Label: IfcLabel | null);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Profiles: (Handle<IfcProfileDef> | IfcProfileDef)[];
    Label: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCompositeProfileDef;
    ToTape(): any[];
}
export declare class IfcCompressor {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcCompressorTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcCompressorTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCompressor;
    ToTape(): any[];
}
export declare class IfcCompressorType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcCompressorTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcCompressorTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCompressorType;
    ToTape(): any[];
}
export declare class IfcCondenser {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcCondenserTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcCondenserTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCondenser;
    ToTape(): any[];
}
export declare class IfcCondenserType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcCondenserTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcCondenserTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCondenserType;
    ToTape(): any[];
}
export declare class IfcConic {
    constructor(expressID: number, type: number, Position: IfcAxis2Placement);
    expressID: number;
    type: number;
    Position: IfcAxis2Placement;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConic;
    ToTape(): any[];
}
export declare class IfcConnectedFaceSet {
    constructor(expressID: number, type: number, CfsFaces: (Handle<IfcFace> | IfcFace)[]);
    expressID: number;
    type: number;
    CfsFaces: (Handle<IfcFace> | IfcFace)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcConnectedFaceSet;
    ToTape(): any[];
}
export declare class IfcConnectionCurveGeometry {
    constructor(expressID: number, type: number, CurveOnRelatingElement: IfcCurveOrEdgeCurve, CurveOnRelatedElement: IfcCurveOrEdgeCurve | null);
    expressID: number;
    type: number;
    CurveOnRelatingElement: IfcCurveOrEdgeCurve;
    CurveOnRelatedElement: IfcCurveOrEdgeCurve | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConnectionCurveGeometry;
    ToTape(): any[];
}
export declare class IfcConnectionGeometry {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConnectionGeometry;
    ToTape(): any[];
}
export declare class IfcConnectionPointEccentricity {
    constructor(expressID: number, type: number, PointOnRelatingElement: IfcPointOrVertexPoint, PointOnRelatedElement: IfcPointOrVertexPoint | null, EccentricityInX: IfcLengthMeasure | null, EccentricityInY: IfcLengthMeasure | null, EccentricityInZ: IfcLengthMeasure | null);
    expressID: number;
    type: number;
    PointOnRelatingElement: IfcPointOrVertexPoint;
    PointOnRelatedElement: IfcPointOrVertexPoint | null;
    EccentricityInX: IfcLengthMeasure | null;
    EccentricityInY: IfcLengthMeasure | null;
    EccentricityInZ: IfcLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConnectionPointEccentricity;
    ToTape(): any[];
}
export declare class IfcConnectionPointGeometry {
    constructor(expressID: number, type: number, PointOnRelatingElement: IfcPointOrVertexPoint, PointOnRelatedElement: IfcPointOrVertexPoint | null);
    expressID: number;
    type: number;
    PointOnRelatingElement: IfcPointOrVertexPoint;
    PointOnRelatedElement: IfcPointOrVertexPoint | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConnectionPointGeometry;
    ToTape(): any[];
}
export declare class IfcConnectionSurfaceGeometry {
    constructor(expressID: number, type: number, SurfaceOnRelatingElement: IfcSurfaceOrFaceSurface, SurfaceOnRelatedElement: IfcSurfaceOrFaceSurface | null);
    expressID: number;
    type: number;
    SurfaceOnRelatingElement: IfcSurfaceOrFaceSurface;
    SurfaceOnRelatedElement: IfcSurfaceOrFaceSurface | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConnectionSurfaceGeometry;
    ToTape(): any[];
}
export declare class IfcConnectionVolumeGeometry {
    constructor(expressID: number, type: number, VolumeOnRelatingElement: IfcSolidOrShell, VolumeOnRelatedElement: IfcSolidOrShell | null);
    expressID: number;
    type: number;
    VolumeOnRelatingElement: IfcSolidOrShell;
    VolumeOnRelatedElement: IfcSolidOrShell | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConnectionVolumeGeometry;
    ToTape(): any[];
}
export declare class IfcConstraint {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, ConstraintGrade: IfcConstraintEnum, ConstraintSource: IfcLabel | null, CreatingActor: IfcActorSelect | null, CreationTime: IfcDateTime | null, UserDefinedGrade: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    ConstraintGrade: IfcConstraintEnum;
    ConstraintSource: IfcLabel | null;
    CreatingActor: IfcActorSelect | null;
    CreationTime: IfcDateTime | null;
    UserDefinedGrade: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConstraint;
    ToTape(): any[];
}
export declare class IfcConstructionEquipmentResource {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null, PredefinedType: IfcConstructionEquipmentResourceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    PredefinedType: IfcConstructionEquipmentResourceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConstructionEquipmentResource;
    ToTape(): any[];
}
export declare class IfcConstructionEquipmentResourceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, ResourceType: IfcLabel | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null, PredefinedType: IfcConstructionEquipmentResourceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    ResourceType: IfcLabel | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    PredefinedType: IfcConstructionEquipmentResourceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConstructionEquipmentResourceType;
    ToTape(): any[];
}
export declare class IfcConstructionMaterialResource {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null, PredefinedType: IfcConstructionMaterialResourceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    PredefinedType: IfcConstructionMaterialResourceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConstructionMaterialResource;
    ToTape(): any[];
}
export declare class IfcConstructionMaterialResourceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, ResourceType: IfcLabel | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null, PredefinedType: IfcConstructionMaterialResourceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    ResourceType: IfcLabel | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    PredefinedType: IfcConstructionMaterialResourceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConstructionMaterialResourceType;
    ToTape(): any[];
}
export declare class IfcConstructionProductResource {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null, PredefinedType: IfcConstructionProductResourceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    PredefinedType: IfcConstructionProductResourceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConstructionProductResource;
    ToTape(): any[];
}
export declare class IfcConstructionProductResourceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, ResourceType: IfcLabel | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null, PredefinedType: IfcConstructionProductResourceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    ResourceType: IfcLabel | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    PredefinedType: IfcConstructionProductResourceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConstructionProductResourceType;
    ToTape(): any[];
}
export declare class IfcConstructionResource {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConstructionResource;
    ToTape(): any[];
}
export declare class IfcConstructionResourceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, ResourceType: IfcLabel | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    ResourceType: IfcLabel | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConstructionResourceType;
    ToTape(): any[];
}
export declare class IfcContext {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, LongName: IfcLabel | null, Phase: IfcLabel | null, RepresentationContexts: (Handle<IfcRepresentationContext> | IfcRepresentationContext)[] | null, UnitsInContext: (Handle<IfcUnitAssignment> | IfcUnitAssignment) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    LongName: IfcLabel | null;
    Phase: IfcLabel | null;
    RepresentationContexts: (Handle<IfcRepresentationContext> | IfcRepresentationContext)[] | null;
    UnitsInContext: (Handle<IfcUnitAssignment> | IfcUnitAssignment) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcContext;
    ToTape(): any[];
}
export declare class IfcContextDependentUnit {
    constructor(expressID: number, type: number, Dimensions: (Handle<IfcDimensionalExponents> | IfcDimensionalExponents), UnitType: IfcUnitEnum, Name: IfcLabel);
    expressID: number;
    type: number;
    Dimensions: (Handle<IfcDimensionalExponents> | IfcDimensionalExponents);
    UnitType: IfcUnitEnum;
    Name: IfcLabel;
    static FromTape(expressID: number, type: number, tape: any[]): IfcContextDependentUnit;
    ToTape(): any[];
}
export declare class IfcControl {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcControl;
    ToTape(): any[];
}
export declare class IfcController {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcControllerTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcControllerTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcController;
    ToTape(): any[];
}
export declare class IfcControllerType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcControllerTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcControllerTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcControllerType;
    ToTape(): any[];
}
export declare class IfcConversionBasedUnit {
    constructor(expressID: number, type: number, Dimensions: (Handle<IfcDimensionalExponents> | IfcDimensionalExponents), UnitType: IfcUnitEnum, Name: IfcLabel, ConversionFactor: (Handle<IfcMeasureWithUnit> | IfcMeasureWithUnit));
    expressID: number;
    type: number;
    Dimensions: (Handle<IfcDimensionalExponents> | IfcDimensionalExponents);
    UnitType: IfcUnitEnum;
    Name: IfcLabel;
    ConversionFactor: (Handle<IfcMeasureWithUnit> | IfcMeasureWithUnit);
    static FromTape(expressID: number, type: number, tape: any[]): IfcConversionBasedUnit;
    ToTape(): any[];
}
export declare class IfcConversionBasedUnitWithOffset {
    constructor(expressID: number, type: number, Dimensions: (Handle<IfcDimensionalExponents> | IfcDimensionalExponents), UnitType: IfcUnitEnum, Name: IfcLabel, ConversionFactor: (Handle<IfcMeasureWithUnit> | IfcMeasureWithUnit), ConversionOffset: IfcReal);
    expressID: number;
    type: number;
    Dimensions: (Handle<IfcDimensionalExponents> | IfcDimensionalExponents);
    UnitType: IfcUnitEnum;
    Name: IfcLabel;
    ConversionFactor: (Handle<IfcMeasureWithUnit> | IfcMeasureWithUnit);
    ConversionOffset: IfcReal;
    static FromTape(expressID: number, type: number, tape: any[]): IfcConversionBasedUnitWithOffset;
    ToTape(): any[];
}
export declare class IfcCooledBeam {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcCooledBeamTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcCooledBeamTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCooledBeam;
    ToTape(): any[];
}
export declare class IfcCooledBeamType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcCooledBeamTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcCooledBeamTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCooledBeamType;
    ToTape(): any[];
}
export declare class IfcCoolingTower {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcCoolingTowerTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcCoolingTowerTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCoolingTower;
    ToTape(): any[];
}
export declare class IfcCoolingTowerType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcCoolingTowerTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcCoolingTowerTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCoolingTowerType;
    ToTape(): any[];
}
export declare class IfcCoordinateOperation {
    constructor(expressID: number, type: number, SourceCRS: IfcCoordinateReferenceSystemSelect, TargetCRS: (Handle<IfcCoordinateReferenceSystem> | IfcCoordinateReferenceSystem));
    expressID: number;
    type: number;
    SourceCRS: IfcCoordinateReferenceSystemSelect;
    TargetCRS: (Handle<IfcCoordinateReferenceSystem> | IfcCoordinateReferenceSystem);
    static FromTape(expressID: number, type: number, tape: any[]): IfcCoordinateOperation;
    ToTape(): any[];
}
export declare class IfcCoordinateReferenceSystem {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, GeodeticDatum: IfcIdentifier | null, VerticalDatum: IfcIdentifier | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    GeodeticDatum: IfcIdentifier | null;
    VerticalDatum: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCoordinateReferenceSystem;
    ToTape(): any[];
}
export declare class IfcCostItem {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, PredefinedType: IfcCostItemTypeEnum | null, CostValues: (Handle<IfcCostValue> | IfcCostValue)[] | null, CostQuantities: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity)[] | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    PredefinedType: IfcCostItemTypeEnum | null;
    CostValues: (Handle<IfcCostValue> | IfcCostValue)[] | null;
    CostQuantities: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity)[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCostItem;
    ToTape(): any[];
}
export declare class IfcCostSchedule {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, PredefinedType: IfcCostScheduleTypeEnum | null, Status: IfcLabel | null, SubmittedOn: IfcDateTime | null, UpdateDate: IfcDateTime | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    PredefinedType: IfcCostScheduleTypeEnum | null;
    Status: IfcLabel | null;
    SubmittedOn: IfcDateTime | null;
    UpdateDate: IfcDateTime | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCostSchedule;
    ToTape(): any[];
}
export declare class IfcCostValue {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, AppliedValue: IfcAppliedValueSelect | null, UnitBasis: (Handle<IfcMeasureWithUnit> | IfcMeasureWithUnit) | null, ApplicableDate: IfcDate | null, FixedUntilDate: IfcDate | null, Category: IfcLabel | null, Condition: IfcLabel | null, ArithmeticOperator: IfcArithmeticOperatorEnum | null, Components: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    AppliedValue: IfcAppliedValueSelect | null;
    UnitBasis: (Handle<IfcMeasureWithUnit> | IfcMeasureWithUnit) | null;
    ApplicableDate: IfcDate | null;
    FixedUntilDate: IfcDate | null;
    Category: IfcLabel | null;
    Condition: IfcLabel | null;
    ArithmeticOperator: IfcArithmeticOperatorEnum | null;
    Components: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCostValue;
    ToTape(): any[];
}
export declare class IfcCovering {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcCoveringTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcCoveringTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCovering;
    ToTape(): any[];
}
export declare class IfcCoveringType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcCoveringTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcCoveringTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCoveringType;
    ToTape(): any[];
}
export declare class IfcCrewResource {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null, PredefinedType: IfcCrewResourceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    PredefinedType: IfcCrewResourceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCrewResource;
    ToTape(): any[];
}
export declare class IfcCrewResourceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, ResourceType: IfcLabel | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null, PredefinedType: IfcCrewResourceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    ResourceType: IfcLabel | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    PredefinedType: IfcCrewResourceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCrewResourceType;
    ToTape(): any[];
}
export declare class IfcCsgPrimitive3D {
    constructor(expressID: number, type: number, Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D));
    expressID: number;
    type: number;
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
    static FromTape(expressID: number, type: number, tape: any[]): IfcCsgPrimitive3D;
    ToTape(): any[];
}
export declare class IfcCsgSolid {
    constructor(expressID: number, type: number, TreeRootExpression: IfcCsgSelect);
    expressID: number;
    type: number;
    TreeRootExpression: IfcCsgSelect;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCsgSolid;
    ToTape(): any[];
}
export declare class IfcCurrencyRelationship {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, RelatingMonetaryUnit: (Handle<IfcMonetaryUnit> | IfcMonetaryUnit), RelatedMonetaryUnit: (Handle<IfcMonetaryUnit> | IfcMonetaryUnit), ExchangeRate: IfcPositiveRatioMeasure, RateDateTime: IfcDateTime | null, RateSource: (Handle<IfcLibraryInformation> | IfcLibraryInformation) | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingMonetaryUnit: (Handle<IfcMonetaryUnit> | IfcMonetaryUnit);
    RelatedMonetaryUnit: (Handle<IfcMonetaryUnit> | IfcMonetaryUnit);
    ExchangeRate: IfcPositiveRatioMeasure;
    RateDateTime: IfcDateTime | null;
    RateSource: (Handle<IfcLibraryInformation> | IfcLibraryInformation) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCurrencyRelationship;
    ToTape(): any[];
}
export declare class IfcCurtainWall {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcCurtainWallTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcCurtainWallTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCurtainWall;
    ToTape(): any[];
}
export declare class IfcCurtainWallType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcCurtainWallTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcCurtainWallTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCurtainWallType;
    ToTape(): any[];
}
export declare class IfcCurve {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCurve;
    ToTape(): any[];
}
export declare class IfcCurveBoundedPlane {
    constructor(expressID: number, type: number, BasisSurface: (Handle<IfcPlane> | IfcPlane), OuterBoundary: (Handle<IfcCurve> | IfcCurve), InnerBoundaries: (Handle<IfcCurve> | IfcCurve)[]);
    expressID: number;
    type: number;
    BasisSurface: (Handle<IfcPlane> | IfcPlane);
    OuterBoundary: (Handle<IfcCurve> | IfcCurve);
    InnerBoundaries: (Handle<IfcCurve> | IfcCurve)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcCurveBoundedPlane;
    ToTape(): any[];
}
export declare class IfcCurveBoundedSurface {
    constructor(expressID: number, type: number, BasisSurface: (Handle<IfcSurface> | IfcSurface), Boundaries: (Handle<IfcBoundaryCurve> | IfcBoundaryCurve)[], ImplicitOuter: IfcBoolean);
    expressID: number;
    type: number;
    BasisSurface: (Handle<IfcSurface> | IfcSurface);
    Boundaries: (Handle<IfcBoundaryCurve> | IfcBoundaryCurve)[];
    ImplicitOuter: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCurveBoundedSurface;
    ToTape(): any[];
}
export declare class IfcCurveSegment2D {
    constructor(expressID: number, type: number, StartPoint: (Handle<IfcCartesianPoint> | IfcCartesianPoint), StartDirection: IfcPlaneAngleMeasure, SegmentLength: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    StartPoint: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    StartDirection: IfcPlaneAngleMeasure;
    SegmentLength: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCurveSegment2D;
    ToTape(): any[];
}
export declare class IfcCurveStyle {
    constructor(expressID: number, type: number, Name: IfcLabel | null, CurveFont: IfcCurveFontOrScaledCurveFontSelect | null, CurveWidth: IfcSizeSelect | null, CurveColour: IfcColour | null, ModelOrDraughting: IfcBoolean | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    CurveFont: IfcCurveFontOrScaledCurveFontSelect | null;
    CurveWidth: IfcSizeSelect | null;
    CurveColour: IfcColour | null;
    ModelOrDraughting: IfcBoolean | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCurveStyle;
    ToTape(): any[];
}
export declare class IfcCurveStyleFont {
    constructor(expressID: number, type: number, Name: IfcLabel | null, PatternList: (Handle<IfcCurveStyleFontPattern> | IfcCurveStyleFontPattern)[]);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    PatternList: (Handle<IfcCurveStyleFontPattern> | IfcCurveStyleFontPattern)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcCurveStyleFont;
    ToTape(): any[];
}
export declare class IfcCurveStyleFontAndScaling {
    constructor(expressID: number, type: number, Name: IfcLabel | null, CurveFont: IfcCurveStyleFontSelect, CurveFontScaling: IfcPositiveRatioMeasure);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    CurveFont: IfcCurveStyleFontSelect;
    CurveFontScaling: IfcPositiveRatioMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCurveStyleFontAndScaling;
    ToTape(): any[];
}
export declare class IfcCurveStyleFontPattern {
    constructor(expressID: number, type: number, VisibleSegmentLength: IfcLengthMeasure, InvisibleSegmentLength: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    VisibleSegmentLength: IfcLengthMeasure;
    InvisibleSegmentLength: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCurveStyleFontPattern;
    ToTape(): any[];
}
export declare class IfcCylindricalSurface {
    constructor(expressID: number, type: number, Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D), Radius: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
    Radius: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcCylindricalSurface;
    ToTape(): any[];
}
export declare class IfcDamper {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcDamperTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcDamperTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDamper;
    ToTape(): any[];
}
export declare class IfcDamperType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcDamperTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcDamperTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDamperType;
    ToTape(): any[];
}
export declare class IfcDeepFoundation {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDeepFoundation;
    ToTape(): any[];
}
export declare class IfcDeepFoundationType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDeepFoundationType;
    ToTape(): any[];
}
export declare class IfcDerivedProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, ParentProfile: (Handle<IfcProfileDef> | IfcProfileDef), Operator: (Handle<IfcCartesianTransformationOperator2D> | IfcCartesianTransformationOperator2D), Label: IfcLabel | null);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    ParentProfile: (Handle<IfcProfileDef> | IfcProfileDef);
    Operator: (Handle<IfcCartesianTransformationOperator2D> | IfcCartesianTransformationOperator2D);
    Label: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDerivedProfileDef;
    ToTape(): any[];
}
export declare class IfcDerivedUnit {
    constructor(expressID: number, type: number, Elements: (Handle<IfcDerivedUnitElement> | IfcDerivedUnitElement)[], UnitType: IfcDerivedUnitEnum, UserDefinedType: IfcLabel | null);
    expressID: number;
    type: number;
    Elements: (Handle<IfcDerivedUnitElement> | IfcDerivedUnitElement)[];
    UnitType: IfcDerivedUnitEnum;
    UserDefinedType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDerivedUnit;
    ToTape(): any[];
}
export declare class IfcDerivedUnitElement {
    constructor(expressID: number, type: number, Unit: (Handle<IfcNamedUnit> | IfcNamedUnit), Exponent: number);
    expressID: number;
    type: number;
    Unit: (Handle<IfcNamedUnit> | IfcNamedUnit);
    Exponent: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDerivedUnitElement;
    ToTape(): any[];
}
export declare class IfcDimensionalExponents {
    constructor(expressID: number, type: number, LengthExponent: number, MassExponent: number, TimeExponent: number, ElectricCurrentExponent: number, ThermodynamicTemperatureExponent: number, AmountOfSubstanceExponent: number, LuminousIntensityExponent: number);
    expressID: number;
    type: number;
    LengthExponent: number;
    MassExponent: number;
    TimeExponent: number;
    ElectricCurrentExponent: number;
    ThermodynamicTemperatureExponent: number;
    AmountOfSubstanceExponent: number;
    LuminousIntensityExponent: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDimensionalExponents;
    ToTape(): any[];
}
export declare class IfcDirection {
    constructor(expressID: number, type: number, DirectionRatios: IfcReal[]);
    expressID: number;
    type: number;
    DirectionRatios: IfcReal[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcDirection;
    ToTape(): any[];
}
export declare class IfcDiscreteAccessory {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcDiscreteAccessoryTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcDiscreteAccessoryTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDiscreteAccessory;
    ToTape(): any[];
}
export declare class IfcDiscreteAccessoryType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcDiscreteAccessoryTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcDiscreteAccessoryTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDiscreteAccessoryType;
    ToTape(): any[];
}
export declare class IfcDistanceExpression {
    constructor(expressID: number, type: number, DistanceAlong: IfcLengthMeasure, OffsetLateral: IfcLengthMeasure | null, OffsetVertical: IfcLengthMeasure | null, OffsetLongitudinal: IfcLengthMeasure | null, AlongHorizontal: IfcBoolean | null);
    expressID: number;
    type: number;
    DistanceAlong: IfcLengthMeasure;
    OffsetLateral: IfcLengthMeasure | null;
    OffsetVertical: IfcLengthMeasure | null;
    OffsetLongitudinal: IfcLengthMeasure | null;
    AlongHorizontal: IfcBoolean | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDistanceExpression;
    ToTape(): any[];
}
export declare class IfcDistributionChamberElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcDistributionChamberElementTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcDistributionChamberElementTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDistributionChamberElement;
    ToTape(): any[];
}
export declare class IfcDistributionChamberElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcDistributionChamberElementTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcDistributionChamberElementTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDistributionChamberElementType;
    ToTape(): any[];
}
export declare class IfcDistributionCircuit {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, LongName: IfcLabel | null, PredefinedType: IfcDistributionSystemEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    LongName: IfcLabel | null;
    PredefinedType: IfcDistributionSystemEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDistributionCircuit;
    ToTape(): any[];
}
export declare class IfcDistributionControlElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDistributionControlElement;
    ToTape(): any[];
}
export declare class IfcDistributionControlElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDistributionControlElementType;
    ToTape(): any[];
}
export declare class IfcDistributionElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDistributionElement;
    ToTape(): any[];
}
export declare class IfcDistributionElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDistributionElementType;
    ToTape(): any[];
}
export declare class IfcDistributionFlowElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDistributionFlowElement;
    ToTape(): any[];
}
export declare class IfcDistributionFlowElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDistributionFlowElementType;
    ToTape(): any[];
}
export declare class IfcDistributionPort {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, FlowDirection: IfcFlowDirectionEnum | null, PredefinedType: IfcDistributionPortTypeEnum | null, SystemType: IfcDistributionSystemEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    FlowDirection: IfcFlowDirectionEnum | null;
    PredefinedType: IfcDistributionPortTypeEnum | null;
    SystemType: IfcDistributionSystemEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDistributionPort;
    ToTape(): any[];
}
export declare class IfcDistributionSystem {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, LongName: IfcLabel | null, PredefinedType: IfcDistributionSystemEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    LongName: IfcLabel | null;
    PredefinedType: IfcDistributionSystemEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDistributionSystem;
    ToTape(): any[];
}
export declare class IfcDocumentInformation {
    constructor(expressID: number, type: number, Identification: IfcIdentifier, Name: IfcLabel, Description: IfcText | null, Location: IfcURIReference | null, Purpose: IfcText | null, IntendedUse: IfcText | null, Scope: IfcText | null, Revision: IfcLabel | null, DocumentOwner: IfcActorSelect | null, Editors: IfcActorSelect[] | null, CreationTime: IfcDateTime | null, LastRevisionTime: IfcDateTime | null, ElectronicFormat: IfcIdentifier | null, ValidFrom: IfcDate | null, ValidUntil: IfcDate | null, Confidentiality: IfcDocumentConfidentialityEnum | null, Status: IfcDocumentStatusEnum | null);
    expressID: number;
    type: number;
    Identification: IfcIdentifier;
    Name: IfcLabel;
    Description: IfcText | null;
    Location: IfcURIReference | null;
    Purpose: IfcText | null;
    IntendedUse: IfcText | null;
    Scope: IfcText | null;
    Revision: IfcLabel | null;
    DocumentOwner: IfcActorSelect | null;
    Editors: IfcActorSelect[] | null;
    CreationTime: IfcDateTime | null;
    LastRevisionTime: IfcDateTime | null;
    ElectronicFormat: IfcIdentifier | null;
    ValidFrom: IfcDate | null;
    ValidUntil: IfcDate | null;
    Confidentiality: IfcDocumentConfidentialityEnum | null;
    Status: IfcDocumentStatusEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDocumentInformation;
    ToTape(): any[];
}
export declare class IfcDocumentInformationRelationship {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, RelatingDocument: (Handle<IfcDocumentInformation> | IfcDocumentInformation), RelatedDocuments: (Handle<IfcDocumentInformation> | IfcDocumentInformation)[], RelationshipType: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingDocument: (Handle<IfcDocumentInformation> | IfcDocumentInformation);
    RelatedDocuments: (Handle<IfcDocumentInformation> | IfcDocumentInformation)[];
    RelationshipType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDocumentInformationRelationship;
    ToTape(): any[];
}
export declare class IfcDocumentReference {
    constructor(expressID: number, type: number, Location: IfcURIReference | null, Identification: IfcIdentifier | null, Name: IfcLabel | null, Description: IfcText | null, ReferencedDocument: (Handle<IfcDocumentInformation> | IfcDocumentInformation) | null);
    expressID: number;
    type: number;
    Location: IfcURIReference | null;
    Identification: IfcIdentifier | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ReferencedDocument: (Handle<IfcDocumentInformation> | IfcDocumentInformation) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDocumentReference;
    ToTape(): any[];
}
export declare class IfcDoor {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, OverallHeight: IfcPositiveLengthMeasure | null, OverallWidth: IfcPositiveLengthMeasure | null, PredefinedType: IfcDoorTypeEnum | null, OperationType: IfcDoorTypeOperationEnum | null, UserDefinedOperationType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    OverallHeight: IfcPositiveLengthMeasure | null;
    OverallWidth: IfcPositiveLengthMeasure | null;
    PredefinedType: IfcDoorTypeEnum | null;
    OperationType: IfcDoorTypeOperationEnum | null;
    UserDefinedOperationType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDoor;
    ToTape(): any[];
}
export declare class IfcDoorLiningProperties {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, LiningDepth: IfcPositiveLengthMeasure | null, LiningThickness: IfcNonNegativeLengthMeasure | null, ThresholdDepth: IfcPositiveLengthMeasure | null, ThresholdThickness: IfcNonNegativeLengthMeasure | null, TransomThickness: IfcNonNegativeLengthMeasure | null, TransomOffset: IfcLengthMeasure | null, LiningOffset: IfcLengthMeasure | null, ThresholdOffset: IfcLengthMeasure | null, CasingThickness: IfcPositiveLengthMeasure | null, CasingDepth: IfcPositiveLengthMeasure | null, ShapeAspectStyle: (Handle<IfcShapeAspect> | IfcShapeAspect) | null, LiningToPanelOffsetX: IfcLengthMeasure | null, LiningToPanelOffsetY: IfcLengthMeasure | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    LiningDepth: IfcPositiveLengthMeasure | null;
    LiningThickness: IfcNonNegativeLengthMeasure | null;
    ThresholdDepth: IfcPositiveLengthMeasure | null;
    ThresholdThickness: IfcNonNegativeLengthMeasure | null;
    TransomThickness: IfcNonNegativeLengthMeasure | null;
    TransomOffset: IfcLengthMeasure | null;
    LiningOffset: IfcLengthMeasure | null;
    ThresholdOffset: IfcLengthMeasure | null;
    CasingThickness: IfcPositiveLengthMeasure | null;
    CasingDepth: IfcPositiveLengthMeasure | null;
    ShapeAspectStyle: (Handle<IfcShapeAspect> | IfcShapeAspect) | null;
    LiningToPanelOffsetX: IfcLengthMeasure | null;
    LiningToPanelOffsetY: IfcLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDoorLiningProperties;
    ToTape(): any[];
}
export declare class IfcDoorPanelProperties {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, PanelDepth: IfcPositiveLengthMeasure | null, PanelOperation: IfcDoorPanelOperationEnum, PanelWidth: IfcNormalisedRatioMeasure | null, PanelPosition: IfcDoorPanelPositionEnum, ShapeAspectStyle: (Handle<IfcShapeAspect> | IfcShapeAspect) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    PanelDepth: IfcPositiveLengthMeasure | null;
    PanelOperation: IfcDoorPanelOperationEnum;
    PanelWidth: IfcNormalisedRatioMeasure | null;
    PanelPosition: IfcDoorPanelPositionEnum;
    ShapeAspectStyle: (Handle<IfcShapeAspect> | IfcShapeAspect) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDoorPanelProperties;
    ToTape(): any[];
}
export declare class IfcDoorStandardCase {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, OverallHeight: IfcPositiveLengthMeasure | null, OverallWidth: IfcPositiveLengthMeasure | null, PredefinedType: IfcDoorTypeEnum | null, OperationType: IfcDoorTypeOperationEnum | null, UserDefinedOperationType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    OverallHeight: IfcPositiveLengthMeasure | null;
    OverallWidth: IfcPositiveLengthMeasure | null;
    PredefinedType: IfcDoorTypeEnum | null;
    OperationType: IfcDoorTypeOperationEnum | null;
    UserDefinedOperationType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDoorStandardCase;
    ToTape(): any[];
}
export declare class IfcDoorStyle {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, OperationType: IfcDoorStyleOperationEnum, ConstructionType: IfcDoorStyleConstructionEnum, ParameterTakesPrecedence: IfcBoolean, Sizeable: IfcBoolean);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    OperationType: IfcDoorStyleOperationEnum;
    ConstructionType: IfcDoorStyleConstructionEnum;
    ParameterTakesPrecedence: IfcBoolean;
    Sizeable: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDoorStyle;
    ToTape(): any[];
}
export declare class IfcDoorType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcDoorTypeEnum, OperationType: IfcDoorTypeOperationEnum, ParameterTakesPrecedence: IfcBoolean | null, UserDefinedOperationType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcDoorTypeEnum;
    OperationType: IfcDoorTypeOperationEnum;
    ParameterTakesPrecedence: IfcBoolean | null;
    UserDefinedOperationType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDoorType;
    ToTape(): any[];
}
export declare class IfcDraughtingPreDefinedColour {
    constructor(expressID: number, type: number, Name: IfcLabel);
    expressID: number;
    type: number;
    Name: IfcLabel;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDraughtingPreDefinedColour;
    ToTape(): any[];
}
export declare class IfcDraughtingPreDefinedCurveFont {
    constructor(expressID: number, type: number, Name: IfcLabel);
    expressID: number;
    type: number;
    Name: IfcLabel;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDraughtingPreDefinedCurveFont;
    ToTape(): any[];
}
export declare class IfcDuctFitting {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcDuctFittingTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcDuctFittingTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDuctFitting;
    ToTape(): any[];
}
export declare class IfcDuctFittingType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcDuctFittingTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcDuctFittingTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDuctFittingType;
    ToTape(): any[];
}
export declare class IfcDuctSegment {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcDuctSegmentTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcDuctSegmentTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDuctSegment;
    ToTape(): any[];
}
export declare class IfcDuctSegmentType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcDuctSegmentTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcDuctSegmentTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDuctSegmentType;
    ToTape(): any[];
}
export declare class IfcDuctSilencer {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcDuctSilencerTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcDuctSilencerTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDuctSilencer;
    ToTape(): any[];
}
export declare class IfcDuctSilencerType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcDuctSilencerTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcDuctSilencerTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcDuctSilencerType;
    ToTape(): any[];
}
export declare class IfcEdge {
    constructor(expressID: number, type: number, EdgeStart: (Handle<IfcVertex> | IfcVertex), EdgeEnd: (Handle<IfcVertex> | IfcVertex));
    expressID: number;
    type: number;
    EdgeStart: (Handle<IfcVertex> | IfcVertex);
    EdgeEnd: (Handle<IfcVertex> | IfcVertex);
    static FromTape(expressID: number, type: number, tape: any[]): IfcEdge;
    ToTape(): any[];
}
export declare class IfcEdgeCurve {
    constructor(expressID: number, type: number, EdgeStart: (Handle<IfcVertex> | IfcVertex), EdgeEnd: (Handle<IfcVertex> | IfcVertex), EdgeGeometry: (Handle<IfcCurve> | IfcCurve), SameSense: IfcBoolean);
    expressID: number;
    type: number;
    EdgeStart: (Handle<IfcVertex> | IfcVertex);
    EdgeEnd: (Handle<IfcVertex> | IfcVertex);
    EdgeGeometry: (Handle<IfcCurve> | IfcCurve);
    SameSense: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEdgeCurve;
    ToTape(): any[];
}
export declare class IfcEdgeLoop {
    constructor(expressID: number, type: number, EdgeList: (Handle<IfcOrientedEdge> | IfcOrientedEdge)[]);
    expressID: number;
    type: number;
    EdgeList: (Handle<IfcOrientedEdge> | IfcOrientedEdge)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcEdgeLoop;
    ToTape(): any[];
}
export declare class IfcElectricAppliance {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcElectricApplianceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcElectricApplianceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElectricAppliance;
    ToTape(): any[];
}
export declare class IfcElectricApplianceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcElectricApplianceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcElectricApplianceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElectricApplianceType;
    ToTape(): any[];
}
export declare class IfcElectricDistributionBoard {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcElectricDistributionBoardTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcElectricDistributionBoardTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElectricDistributionBoard;
    ToTape(): any[];
}
export declare class IfcElectricDistributionBoardType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcElectricDistributionBoardTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcElectricDistributionBoardTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElectricDistributionBoardType;
    ToTape(): any[];
}
export declare class IfcElectricFlowStorageDevice {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcElectricFlowStorageDeviceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcElectricFlowStorageDeviceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElectricFlowStorageDevice;
    ToTape(): any[];
}
export declare class IfcElectricFlowStorageDeviceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcElectricFlowStorageDeviceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcElectricFlowStorageDeviceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElectricFlowStorageDeviceType;
    ToTape(): any[];
}
export declare class IfcElectricGenerator {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcElectricGeneratorTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcElectricGeneratorTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElectricGenerator;
    ToTape(): any[];
}
export declare class IfcElectricGeneratorType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcElectricGeneratorTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcElectricGeneratorTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElectricGeneratorType;
    ToTape(): any[];
}
export declare class IfcElectricMotor {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcElectricMotorTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcElectricMotorTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElectricMotor;
    ToTape(): any[];
}
export declare class IfcElectricMotorType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcElectricMotorTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcElectricMotorTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElectricMotorType;
    ToTape(): any[];
}
export declare class IfcElectricTimeControl {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcElectricTimeControlTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcElectricTimeControlTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElectricTimeControl;
    ToTape(): any[];
}
export declare class IfcElectricTimeControlType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcElectricTimeControlTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcElectricTimeControlTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElectricTimeControlType;
    ToTape(): any[];
}
export declare class IfcElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElement;
    ToTape(): any[];
}
export declare class IfcElementAssembly {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, AssemblyPlace: IfcAssemblyPlaceEnum | null, PredefinedType: IfcElementAssemblyTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    AssemblyPlace: IfcAssemblyPlaceEnum | null;
    PredefinedType: IfcElementAssemblyTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElementAssembly;
    ToTape(): any[];
}
export declare class IfcElementAssemblyType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcElementAssemblyTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcElementAssemblyTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElementAssemblyType;
    ToTape(): any[];
}
export declare class IfcElementComponent {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElementComponent;
    ToTape(): any[];
}
export declare class IfcElementComponentType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElementComponentType;
    ToTape(): any[];
}
export declare class IfcElementQuantity {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, MethodOfMeasurement: IfcLabel | null, Quantities: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity)[]);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    MethodOfMeasurement: IfcLabel | null;
    Quantities: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcElementQuantity;
    ToTape(): any[];
}
export declare class IfcElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcElementType;
    ToTape(): any[];
}
export declare class IfcElementarySurface {
    constructor(expressID: number, type: number, Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D));
    expressID: number;
    type: number;
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
    static FromTape(expressID: number, type: number, tape: any[]): IfcElementarySurface;
    ToTape(): any[];
}
export declare class IfcEllipse {
    constructor(expressID: number, type: number, Position: IfcAxis2Placement, SemiAxis1: IfcPositiveLengthMeasure, SemiAxis2: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    Position: IfcAxis2Placement;
    SemiAxis1: IfcPositiveLengthMeasure;
    SemiAxis2: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEllipse;
    ToTape(): any[];
}
export declare class IfcEllipseProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, SemiAxis1: IfcPositiveLengthMeasure, SemiAxis2: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    SemiAxis1: IfcPositiveLengthMeasure;
    SemiAxis2: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEllipseProfileDef;
    ToTape(): any[];
}
export declare class IfcEnergyConversionDevice {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEnergyConversionDevice;
    ToTape(): any[];
}
export declare class IfcEnergyConversionDeviceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEnergyConversionDeviceType;
    ToTape(): any[];
}
export declare class IfcEngine {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcEngineTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcEngineTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEngine;
    ToTape(): any[];
}
export declare class IfcEngineType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcEngineTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcEngineTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEngineType;
    ToTape(): any[];
}
export declare class IfcEvaporativeCooler {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcEvaporativeCoolerTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcEvaporativeCoolerTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEvaporativeCooler;
    ToTape(): any[];
}
export declare class IfcEvaporativeCoolerType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcEvaporativeCoolerTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcEvaporativeCoolerTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEvaporativeCoolerType;
    ToTape(): any[];
}
export declare class IfcEvaporator {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcEvaporatorTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcEvaporatorTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEvaporator;
    ToTape(): any[];
}
export declare class IfcEvaporatorType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcEvaporatorTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcEvaporatorTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEvaporatorType;
    ToTape(): any[];
}
export declare class IfcEvent {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, PredefinedType: IfcEventTypeEnum | null, EventTriggerType: IfcEventTriggerTypeEnum | null, UserDefinedEventTriggerType: IfcLabel | null, EventOccurenceTime: (Handle<IfcEventTime> | IfcEventTime) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    PredefinedType: IfcEventTypeEnum | null;
    EventTriggerType: IfcEventTriggerTypeEnum | null;
    UserDefinedEventTriggerType: IfcLabel | null;
    EventOccurenceTime: (Handle<IfcEventTime> | IfcEventTime) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEvent;
    ToTape(): any[];
}
export declare class IfcEventTime {
    constructor(expressID: number, type: number, Name: IfcLabel | null, DataOrigin: IfcDataOriginEnum | null, UserDefinedDataOrigin: IfcLabel | null, ActualDate: IfcDateTime | null, EarlyDate: IfcDateTime | null, LateDate: IfcDateTime | null, ScheduleDate: IfcDateTime | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    DataOrigin: IfcDataOriginEnum | null;
    UserDefinedDataOrigin: IfcLabel | null;
    ActualDate: IfcDateTime | null;
    EarlyDate: IfcDateTime | null;
    LateDate: IfcDateTime | null;
    ScheduleDate: IfcDateTime | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEventTime;
    ToTape(): any[];
}
export declare class IfcEventType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, ProcessType: IfcLabel | null, PredefinedType: IfcEventTypeEnum, EventTriggerType: IfcEventTriggerTypeEnum, UserDefinedEventTriggerType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    ProcessType: IfcLabel | null;
    PredefinedType: IfcEventTypeEnum;
    EventTriggerType: IfcEventTriggerTypeEnum;
    UserDefinedEventTriggerType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcEventType;
    ToTape(): any[];
}
export declare class IfcExtendedProperties {
    constructor(expressID: number, type: number, Name: IfcIdentifier | null, Description: IfcText | null, Properties: (Handle<IfcProperty> | IfcProperty)[]);
    expressID: number;
    type: number;
    Name: IfcIdentifier | null;
    Description: IfcText | null;
    Properties: (Handle<IfcProperty> | IfcProperty)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcExtendedProperties;
    ToTape(): any[];
}
export declare class IfcExternalInformation {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcExternalInformation;
    ToTape(): any[];
}
export declare class IfcExternalReference {
    constructor(expressID: number, type: number, Location: IfcURIReference | null, Identification: IfcIdentifier | null, Name: IfcLabel | null);
    expressID: number;
    type: number;
    Location: IfcURIReference | null;
    Identification: IfcIdentifier | null;
    Name: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcExternalReference;
    ToTape(): any[];
}
export declare class IfcExternalReferenceRelationship {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, RelatingReference: (Handle<IfcExternalReference> | IfcExternalReference), RelatedResourceObjects: IfcResourceObjectSelect[]);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingReference: (Handle<IfcExternalReference> | IfcExternalReference);
    RelatedResourceObjects: IfcResourceObjectSelect[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcExternalReferenceRelationship;
    ToTape(): any[];
}
export declare class IfcExternalSpatialElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, LongName: IfcLabel | null, PredefinedType: IfcExternalSpatialElementTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    LongName: IfcLabel | null;
    PredefinedType: IfcExternalSpatialElementTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcExternalSpatialElement;
    ToTape(): any[];
}
export declare class IfcExternalSpatialStructureElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, LongName: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    LongName: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcExternalSpatialStructureElement;
    ToTape(): any[];
}
export declare class IfcExternallyDefinedHatchStyle {
    constructor(expressID: number, type: number, Location: IfcURIReference | null, Identification: IfcIdentifier | null, Name: IfcLabel | null);
    expressID: number;
    type: number;
    Location: IfcURIReference | null;
    Identification: IfcIdentifier | null;
    Name: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcExternallyDefinedHatchStyle;
    ToTape(): any[];
}
export declare class IfcExternallyDefinedSurfaceStyle {
    constructor(expressID: number, type: number, Location: IfcURIReference | null, Identification: IfcIdentifier | null, Name: IfcLabel | null);
    expressID: number;
    type: number;
    Location: IfcURIReference | null;
    Identification: IfcIdentifier | null;
    Name: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcExternallyDefinedSurfaceStyle;
    ToTape(): any[];
}
export declare class IfcExternallyDefinedTextFont {
    constructor(expressID: number, type: number, Location: IfcURIReference | null, Identification: IfcIdentifier | null, Name: IfcLabel | null);
    expressID: number;
    type: number;
    Location: IfcURIReference | null;
    Identification: IfcIdentifier | null;
    Name: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcExternallyDefinedTextFont;
    ToTape(): any[];
}
export declare class IfcExtrudedAreaSolid {
    constructor(expressID: number, type: number, SweptArea: (Handle<IfcProfileDef> | IfcProfileDef), Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null, ExtrudedDirection: (Handle<IfcDirection> | IfcDirection), Depth: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    SweptArea: (Handle<IfcProfileDef> | IfcProfileDef);
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    ExtrudedDirection: (Handle<IfcDirection> | IfcDirection);
    Depth: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcExtrudedAreaSolid;
    ToTape(): any[];
}
export declare class IfcExtrudedAreaSolidTapered {
    constructor(expressID: number, type: number, SweptArea: (Handle<IfcProfileDef> | IfcProfileDef), Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null, ExtrudedDirection: (Handle<IfcDirection> | IfcDirection), Depth: IfcPositiveLengthMeasure, EndSweptArea: (Handle<IfcProfileDef> | IfcProfileDef));
    expressID: number;
    type: number;
    SweptArea: (Handle<IfcProfileDef> | IfcProfileDef);
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    ExtrudedDirection: (Handle<IfcDirection> | IfcDirection);
    Depth: IfcPositiveLengthMeasure;
    EndSweptArea: (Handle<IfcProfileDef> | IfcProfileDef);
    static FromTape(expressID: number, type: number, tape: any[]): IfcExtrudedAreaSolidTapered;
    ToTape(): any[];
}
export declare class IfcFace {
    constructor(expressID: number, type: number, Bounds: (Handle<IfcFaceBound> | IfcFaceBound)[]);
    expressID: number;
    type: number;
    Bounds: (Handle<IfcFaceBound> | IfcFaceBound)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcFace;
    ToTape(): any[];
}
export declare class IfcFaceBasedSurfaceModel {
    constructor(expressID: number, type: number, FbsmFaces: (Handle<IfcConnectedFaceSet> | IfcConnectedFaceSet)[]);
    expressID: number;
    type: number;
    FbsmFaces: (Handle<IfcConnectedFaceSet> | IfcConnectedFaceSet)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcFaceBasedSurfaceModel;
    ToTape(): any[];
}
export declare class IfcFaceBound {
    constructor(expressID: number, type: number, Bound: (Handle<IfcLoop> | IfcLoop), Orientation: IfcBoolean);
    expressID: number;
    type: number;
    Bound: (Handle<IfcLoop> | IfcLoop);
    Orientation: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFaceBound;
    ToTape(): any[];
}
export declare class IfcFaceOuterBound {
    constructor(expressID: number, type: number, Bound: (Handle<IfcLoop> | IfcLoop), Orientation: IfcBoolean);
    expressID: number;
    type: number;
    Bound: (Handle<IfcLoop> | IfcLoop);
    Orientation: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFaceOuterBound;
    ToTape(): any[];
}
export declare class IfcFaceSurface {
    constructor(expressID: number, type: number, Bounds: (Handle<IfcFaceBound> | IfcFaceBound)[], FaceSurface: (Handle<IfcSurface> | IfcSurface), SameSense: IfcBoolean);
    expressID: number;
    type: number;
    Bounds: (Handle<IfcFaceBound> | IfcFaceBound)[];
    FaceSurface: (Handle<IfcSurface> | IfcSurface);
    SameSense: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFaceSurface;
    ToTape(): any[];
}
export declare class IfcFacetedBrep {
    constructor(expressID: number, type: number, Outer: (Handle<IfcClosedShell> | IfcClosedShell));
    expressID: number;
    type: number;
    Outer: (Handle<IfcClosedShell> | IfcClosedShell);
    static FromTape(expressID: number, type: number, tape: any[]): IfcFacetedBrep;
    ToTape(): any[];
}
export declare class IfcFacetedBrepWithVoids {
    constructor(expressID: number, type: number, Outer: (Handle<IfcClosedShell> | IfcClosedShell), Voids: (Handle<IfcClosedShell> | IfcClosedShell)[]);
    expressID: number;
    type: number;
    Outer: (Handle<IfcClosedShell> | IfcClosedShell);
    Voids: (Handle<IfcClosedShell> | IfcClosedShell)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcFacetedBrepWithVoids;
    ToTape(): any[];
}
export declare class IfcFacility {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, LongName: IfcLabel | null, CompositionType: IfcElementCompositionEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    LongName: IfcLabel | null;
    CompositionType: IfcElementCompositionEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFacility;
    ToTape(): any[];
}
export declare class IfcFacilityPart {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, LongName: IfcLabel | null, CompositionType: IfcElementCompositionEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    LongName: IfcLabel | null;
    CompositionType: IfcElementCompositionEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFacilityPart;
    ToTape(): any[];
}
export declare class IfcFailureConnectionCondition {
    constructor(expressID: number, type: number, Name: IfcLabel | null, TensionFailureX: IfcForceMeasure | null, TensionFailureY: IfcForceMeasure | null, TensionFailureZ: IfcForceMeasure | null, CompressionFailureX: IfcForceMeasure | null, CompressionFailureY: IfcForceMeasure | null, CompressionFailureZ: IfcForceMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    TensionFailureX: IfcForceMeasure | null;
    TensionFailureY: IfcForceMeasure | null;
    TensionFailureZ: IfcForceMeasure | null;
    CompressionFailureX: IfcForceMeasure | null;
    CompressionFailureY: IfcForceMeasure | null;
    CompressionFailureZ: IfcForceMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFailureConnectionCondition;
    ToTape(): any[];
}
export declare class IfcFan {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcFanTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcFanTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFan;
    ToTape(): any[];
}
export declare class IfcFanType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcFanTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcFanTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFanType;
    ToTape(): any[];
}
export declare class IfcFastener {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcFastenerTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcFastenerTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFastener;
    ToTape(): any[];
}
export declare class IfcFastenerType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcFastenerTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcFastenerTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFastenerType;
    ToTape(): any[];
}
export declare class IfcFeatureElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFeatureElement;
    ToTape(): any[];
}
export declare class IfcFeatureElementAddition {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFeatureElementAddition;
    ToTape(): any[];
}
export declare class IfcFeatureElementSubtraction {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFeatureElementSubtraction;
    ToTape(): any[];
}
export declare class IfcFillAreaStyle {
    constructor(expressID: number, type: number, Name: IfcLabel | null, FillStyles: IfcFillStyleSelect[], ModelorDraughting: IfcBoolean | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    FillStyles: IfcFillStyleSelect[];
    ModelorDraughting: IfcBoolean | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFillAreaStyle;
    ToTape(): any[];
}
export declare class IfcFillAreaStyleHatching {
    constructor(expressID: number, type: number, HatchLineAppearance: (Handle<IfcCurveStyle> | IfcCurveStyle), StartOfNextHatchLine: IfcHatchLineDistanceSelect, PointOfReferenceHatchLine: (Handle<IfcCartesianPoint> | IfcCartesianPoint) | null, PatternStart: (Handle<IfcCartesianPoint> | IfcCartesianPoint) | null, HatchLineAngle: IfcPlaneAngleMeasure);
    expressID: number;
    type: number;
    HatchLineAppearance: (Handle<IfcCurveStyle> | IfcCurveStyle);
    StartOfNextHatchLine: IfcHatchLineDistanceSelect;
    PointOfReferenceHatchLine: (Handle<IfcCartesianPoint> | IfcCartesianPoint) | null;
    PatternStart: (Handle<IfcCartesianPoint> | IfcCartesianPoint) | null;
    HatchLineAngle: IfcPlaneAngleMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFillAreaStyleHatching;
    ToTape(): any[];
}
export declare class IfcFillAreaStyleTiles {
    constructor(expressID: number, type: number, TilingPattern: (Handle<IfcVector> | IfcVector)[], Tiles: (Handle<IfcStyledItem> | IfcStyledItem)[], TilingScale: IfcPositiveRatioMeasure);
    expressID: number;
    type: number;
    TilingPattern: (Handle<IfcVector> | IfcVector)[];
    Tiles: (Handle<IfcStyledItem> | IfcStyledItem)[];
    TilingScale: IfcPositiveRatioMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFillAreaStyleTiles;
    ToTape(): any[];
}
export declare class IfcFilter {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcFilterTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcFilterTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFilter;
    ToTape(): any[];
}
export declare class IfcFilterType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcFilterTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcFilterTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFilterType;
    ToTape(): any[];
}
export declare class IfcFireSuppressionTerminal {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcFireSuppressionTerminalTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcFireSuppressionTerminalTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFireSuppressionTerminal;
    ToTape(): any[];
}
export declare class IfcFireSuppressionTerminalType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcFireSuppressionTerminalTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcFireSuppressionTerminalTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFireSuppressionTerminalType;
    ToTape(): any[];
}
export declare class IfcFixedReferenceSweptAreaSolid {
    constructor(expressID: number, type: number, SweptArea: (Handle<IfcProfileDef> | IfcProfileDef), Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null, Directrix: (Handle<IfcCurve> | IfcCurve), StartParam: IfcParameterValue | null, EndParam: IfcParameterValue | null, FixedReference: (Handle<IfcDirection> | IfcDirection));
    expressID: number;
    type: number;
    SweptArea: (Handle<IfcProfileDef> | IfcProfileDef);
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    Directrix: (Handle<IfcCurve> | IfcCurve);
    StartParam: IfcParameterValue | null;
    EndParam: IfcParameterValue | null;
    FixedReference: (Handle<IfcDirection> | IfcDirection);
    static FromTape(expressID: number, type: number, tape: any[]): IfcFixedReferenceSweptAreaSolid;
    ToTape(): any[];
}
export declare class IfcFlowController {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowController;
    ToTape(): any[];
}
export declare class IfcFlowControllerType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowControllerType;
    ToTape(): any[];
}
export declare class IfcFlowFitting {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowFitting;
    ToTape(): any[];
}
export declare class IfcFlowFittingType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowFittingType;
    ToTape(): any[];
}
export declare class IfcFlowInstrument {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcFlowInstrumentTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcFlowInstrumentTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowInstrument;
    ToTape(): any[];
}
export declare class IfcFlowInstrumentType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcFlowInstrumentTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcFlowInstrumentTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowInstrumentType;
    ToTape(): any[];
}
export declare class IfcFlowMeter {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcFlowMeterTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcFlowMeterTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowMeter;
    ToTape(): any[];
}
export declare class IfcFlowMeterType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcFlowMeterTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcFlowMeterTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowMeterType;
    ToTape(): any[];
}
export declare class IfcFlowMovingDevice {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowMovingDevice;
    ToTape(): any[];
}
export declare class IfcFlowMovingDeviceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowMovingDeviceType;
    ToTape(): any[];
}
export declare class IfcFlowSegment {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowSegment;
    ToTape(): any[];
}
export declare class IfcFlowSegmentType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowSegmentType;
    ToTape(): any[];
}
export declare class IfcFlowStorageDevice {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowStorageDevice;
    ToTape(): any[];
}
export declare class IfcFlowStorageDeviceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowStorageDeviceType;
    ToTape(): any[];
}
export declare class IfcFlowTerminal {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowTerminal;
    ToTape(): any[];
}
export declare class IfcFlowTerminalType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowTerminalType;
    ToTape(): any[];
}
export declare class IfcFlowTreatmentDevice {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowTreatmentDevice;
    ToTape(): any[];
}
export declare class IfcFlowTreatmentDeviceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFlowTreatmentDeviceType;
    ToTape(): any[];
}
export declare class IfcFooting {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcFootingTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcFootingTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFooting;
    ToTape(): any[];
}
export declare class IfcFootingType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcFootingTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcFootingTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFootingType;
    ToTape(): any[];
}
export declare class IfcFurnishingElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFurnishingElement;
    ToTape(): any[];
}
export declare class IfcFurnishingElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFurnishingElementType;
    ToTape(): any[];
}
export declare class IfcFurniture {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcFurnitureTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcFurnitureTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFurniture;
    ToTape(): any[];
}
export declare class IfcFurnitureType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, AssemblyPlace: IfcAssemblyPlaceEnum, PredefinedType: IfcFurnitureTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    AssemblyPlace: IfcAssemblyPlaceEnum;
    PredefinedType: IfcFurnitureTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcFurnitureType;
    ToTape(): any[];
}
export declare class IfcGeographicElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcGeographicElementTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcGeographicElementTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcGeographicElement;
    ToTape(): any[];
}
export declare class IfcGeographicElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcGeographicElementTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcGeographicElementTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcGeographicElementType;
    ToTape(): any[];
}
export declare class IfcGeometricCurveSet {
    constructor(expressID: number, type: number, Elements: IfcGeometricSetSelect[]);
    expressID: number;
    type: number;
    Elements: IfcGeometricSetSelect[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcGeometricCurveSet;
    ToTape(): any[];
}
export declare class IfcGeometricRepresentationContext {
    constructor(expressID: number, type: number, ContextIdentifier: IfcLabel | null, ContextType: IfcLabel | null, CoordinateSpaceDimension: IfcDimensionCount, Precision: IfcReal | null, WorldCoordinateSystem: IfcAxis2Placement, TrueNorth: (Handle<IfcDirection> | IfcDirection) | null);
    expressID: number;
    type: number;
    ContextIdentifier: IfcLabel | null;
    ContextType: IfcLabel | null;
    CoordinateSpaceDimension: IfcDimensionCount;
    Precision: IfcReal | null;
    WorldCoordinateSystem: IfcAxis2Placement;
    TrueNorth: (Handle<IfcDirection> | IfcDirection) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcGeometricRepresentationContext;
    ToTape(): any[];
}
export declare class IfcGeometricRepresentationItem {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcGeometricRepresentationItem;
    ToTape(): any[];
}
export declare class IfcGeometricRepresentationSubContext {
    constructor(expressID: number, type: number, ContextIdentifier: IfcLabel | null, ContextType: IfcLabel | null, CoordinateSpaceDimension: IfcDimensionCount, Precision: IfcReal | null, WorldCoordinateSystem: IfcAxis2Placement, TrueNorth: (Handle<IfcDirection> | IfcDirection) | null, ParentContext: (Handle<IfcGeometricRepresentationContext> | IfcGeometricRepresentationContext), TargetScale: IfcPositiveRatioMeasure | null, TargetView: IfcGeometricProjectionEnum, UserDefinedTargetView: IfcLabel | null);
    expressID: number;
    type: number;
    ContextIdentifier: IfcLabel | null;
    ContextType: IfcLabel | null;
    CoordinateSpaceDimension: IfcDimensionCount;
    Precision: IfcReal | null;
    WorldCoordinateSystem: IfcAxis2Placement;
    TrueNorth: (Handle<IfcDirection> | IfcDirection) | null;
    ParentContext: (Handle<IfcGeometricRepresentationContext> | IfcGeometricRepresentationContext);
    TargetScale: IfcPositiveRatioMeasure | null;
    TargetView: IfcGeometricProjectionEnum;
    UserDefinedTargetView: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcGeometricRepresentationSubContext;
    ToTape(): any[];
}
export declare class IfcGeometricSet {
    constructor(expressID: number, type: number, Elements: IfcGeometricSetSelect[]);
    expressID: number;
    type: number;
    Elements: IfcGeometricSetSelect[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcGeometricSet;
    ToTape(): any[];
}
export declare class IfcGrid {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, UAxes: (Handle<IfcGridAxis> | IfcGridAxis)[], VAxes: (Handle<IfcGridAxis> | IfcGridAxis)[], WAxes: (Handle<IfcGridAxis> | IfcGridAxis)[] | null, PredefinedType: IfcGridTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    UAxes: (Handle<IfcGridAxis> | IfcGridAxis)[];
    VAxes: (Handle<IfcGridAxis> | IfcGridAxis)[];
    WAxes: (Handle<IfcGridAxis> | IfcGridAxis)[] | null;
    PredefinedType: IfcGridTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcGrid;
    ToTape(): any[];
}
export declare class IfcGridAxis {
    constructor(expressID: number, type: number, AxisTag: IfcLabel | null, AxisCurve: (Handle<IfcCurve> | IfcCurve), SameSense: IfcBoolean);
    expressID: number;
    type: number;
    AxisTag: IfcLabel | null;
    AxisCurve: (Handle<IfcCurve> | IfcCurve);
    SameSense: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcGridAxis;
    ToTape(): any[];
}
export declare class IfcGridPlacement {
    constructor(expressID: number, type: number, PlacementRelTo: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, PlacementLocation: (Handle<IfcVirtualGridIntersection> | IfcVirtualGridIntersection), PlacementRefDirection: IfcGridPlacementDirectionSelect | null);
    expressID: number;
    type: number;
    PlacementRelTo: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    PlacementLocation: (Handle<IfcVirtualGridIntersection> | IfcVirtualGridIntersection);
    PlacementRefDirection: IfcGridPlacementDirectionSelect | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcGridPlacement;
    ToTape(): any[];
}
export declare class IfcGroup {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcGroup;
    ToTape(): any[];
}
export declare class IfcHalfSpaceSolid {
    constructor(expressID: number, type: number, BaseSurface: (Handle<IfcSurface> | IfcSurface), AgreementFlag: IfcBoolean);
    expressID: number;
    type: number;
    BaseSurface: (Handle<IfcSurface> | IfcSurface);
    AgreementFlag: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcHalfSpaceSolid;
    ToTape(): any[];
}
export declare class IfcHeatExchanger {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcHeatExchangerTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcHeatExchangerTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcHeatExchanger;
    ToTape(): any[];
}
export declare class IfcHeatExchangerType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcHeatExchangerTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcHeatExchangerTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcHeatExchangerType;
    ToTape(): any[];
}
export declare class IfcHumidifier {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcHumidifierTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcHumidifierTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcHumidifier;
    ToTape(): any[];
}
export declare class IfcHumidifierType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcHumidifierTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcHumidifierTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcHumidifierType;
    ToTape(): any[];
}
export declare class IfcIShapeProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, OverallWidth: IfcPositiveLengthMeasure, OverallDepth: IfcPositiveLengthMeasure, WebThickness: IfcPositiveLengthMeasure, FlangeThickness: IfcPositiveLengthMeasure, FilletRadius: IfcNonNegativeLengthMeasure | null, FlangeEdgeRadius: IfcNonNegativeLengthMeasure | null, FlangeSlope: IfcPlaneAngleMeasure | null);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    OverallWidth: IfcPositiveLengthMeasure;
    OverallDepth: IfcPositiveLengthMeasure;
    WebThickness: IfcPositiveLengthMeasure;
    FlangeThickness: IfcPositiveLengthMeasure;
    FilletRadius: IfcNonNegativeLengthMeasure | null;
    FlangeEdgeRadius: IfcNonNegativeLengthMeasure | null;
    FlangeSlope: IfcPlaneAngleMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcIShapeProfileDef;
    ToTape(): any[];
}
export declare class IfcImageTexture {
    constructor(expressID: number, type: number, RepeatS: IfcBoolean, RepeatT: IfcBoolean, Mode: IfcIdentifier | null, TextureTransform: (Handle<IfcCartesianTransformationOperator2D> | IfcCartesianTransformationOperator2D) | null, Parameter: IfcIdentifier[] | null, URLReference: IfcURIReference);
    expressID: number;
    type: number;
    RepeatS: IfcBoolean;
    RepeatT: IfcBoolean;
    Mode: IfcIdentifier | null;
    TextureTransform: (Handle<IfcCartesianTransformationOperator2D> | IfcCartesianTransformationOperator2D) | null;
    Parameter: IfcIdentifier[] | null;
    URLReference: IfcURIReference;
    static FromTape(expressID: number, type: number, tape: any[]): IfcImageTexture;
    ToTape(): any[];
}
export declare class IfcIndexedColourMap {
    constructor(expressID: number, type: number, MappedTo: (Handle<IfcTessellatedFaceSet> | IfcTessellatedFaceSet), Opacity: IfcNormalisedRatioMeasure | null, Colours: (Handle<IfcColourRgbList> | IfcColourRgbList), ColourIndex: IfcPositiveInteger[]);
    expressID: number;
    type: number;
    MappedTo: (Handle<IfcTessellatedFaceSet> | IfcTessellatedFaceSet);
    Opacity: IfcNormalisedRatioMeasure | null;
    Colours: (Handle<IfcColourRgbList> | IfcColourRgbList);
    ColourIndex: IfcPositiveInteger[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcIndexedColourMap;
    ToTape(): any[];
}
export declare class IfcIndexedPolyCurve {
    constructor(expressID: number, type: number, Points: (Handle<IfcCartesianPointList> | IfcCartesianPointList), Segments: IfcSegmentIndexSelect[] | null, SelfIntersect: IfcBoolean | null);
    expressID: number;
    type: number;
    Points: (Handle<IfcCartesianPointList> | IfcCartesianPointList);
    Segments: IfcSegmentIndexSelect[] | null;
    SelfIntersect: IfcBoolean | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcIndexedPolyCurve;
    ToTape(): any[];
}
export declare class IfcIndexedPolygonalFace {
    constructor(expressID: number, type: number, CoordIndex: IfcPositiveInteger[]);
    expressID: number;
    type: number;
    CoordIndex: IfcPositiveInteger[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcIndexedPolygonalFace;
    ToTape(): any[];
}
export declare class IfcIndexedPolygonalFaceWithVoids {
    constructor(expressID: number, type: number, CoordIndex: IfcPositiveInteger[], InnerCoordIndices: IfcPositiveInteger[]);
    expressID: number;
    type: number;
    CoordIndex: IfcPositiveInteger[];
    InnerCoordIndices: IfcPositiveInteger[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcIndexedPolygonalFaceWithVoids;
    ToTape(): any[];
}
export declare class IfcIndexedTextureMap {
    constructor(expressID: number, type: number, Maps: (Handle<IfcSurfaceTexture> | IfcSurfaceTexture)[], MappedTo: (Handle<IfcTessellatedFaceSet> | IfcTessellatedFaceSet), TexCoords: (Handle<IfcTextureVertexList> | IfcTextureVertexList));
    expressID: number;
    type: number;
    Maps: (Handle<IfcSurfaceTexture> | IfcSurfaceTexture)[];
    MappedTo: (Handle<IfcTessellatedFaceSet> | IfcTessellatedFaceSet);
    TexCoords: (Handle<IfcTextureVertexList> | IfcTextureVertexList);
    static FromTape(expressID: number, type: number, tape: any[]): IfcIndexedTextureMap;
    ToTape(): any[];
}
export declare class IfcIndexedTriangleTextureMap {
    constructor(expressID: number, type: number, Maps: (Handle<IfcSurfaceTexture> | IfcSurfaceTexture)[], MappedTo: (Handle<IfcTessellatedFaceSet> | IfcTessellatedFaceSet), TexCoords: (Handle<IfcTextureVertexList> | IfcTextureVertexList), TexCoordIndex: IfcPositiveInteger[] | null);
    expressID: number;
    type: number;
    Maps: (Handle<IfcSurfaceTexture> | IfcSurfaceTexture)[];
    MappedTo: (Handle<IfcTessellatedFaceSet> | IfcTessellatedFaceSet);
    TexCoords: (Handle<IfcTextureVertexList> | IfcTextureVertexList);
    TexCoordIndex: IfcPositiveInteger[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcIndexedTriangleTextureMap;
    ToTape(): any[];
}
export declare class IfcInterceptor {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcInterceptorTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcInterceptorTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcInterceptor;
    ToTape(): any[];
}
export declare class IfcInterceptorType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcInterceptorTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcInterceptorTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcInterceptorType;
    ToTape(): any[];
}
export declare class IfcIntersectionCurve {
    constructor(expressID: number, type: number, Curve3D: (Handle<IfcCurve> | IfcCurve), AssociatedGeometry: (Handle<IfcPcurve> | IfcPcurve)[], MasterRepresentation: IfcPreferredSurfaceCurveRepresentation);
    expressID: number;
    type: number;
    Curve3D: (Handle<IfcCurve> | IfcCurve);
    AssociatedGeometry: (Handle<IfcPcurve> | IfcPcurve)[];
    MasterRepresentation: IfcPreferredSurfaceCurveRepresentation;
    static FromTape(expressID: number, type: number, tape: any[]): IfcIntersectionCurve;
    ToTape(): any[];
}
export declare class IfcInventory {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, PredefinedType: IfcInventoryTypeEnum | null, Jurisdiction: IfcActorSelect | null, ResponsiblePersons: (Handle<IfcPerson> | IfcPerson)[] | null, LastUpdateDate: IfcDate | null, CurrentValue: (Handle<IfcCostValue> | IfcCostValue) | null, OriginalValue: (Handle<IfcCostValue> | IfcCostValue) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    PredefinedType: IfcInventoryTypeEnum | null;
    Jurisdiction: IfcActorSelect | null;
    ResponsiblePersons: (Handle<IfcPerson> | IfcPerson)[] | null;
    LastUpdateDate: IfcDate | null;
    CurrentValue: (Handle<IfcCostValue> | IfcCostValue) | null;
    OriginalValue: (Handle<IfcCostValue> | IfcCostValue) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcInventory;
    ToTape(): any[];
}
export declare class IfcIrregularTimeSeries {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, StartTime: IfcDateTime, EndTime: IfcDateTime, TimeSeriesDataType: IfcTimeSeriesDataTypeEnum, DataOrigin: IfcDataOriginEnum, UserDefinedDataOrigin: IfcLabel | null, Unit: IfcUnit | null, Values: (Handle<IfcIrregularTimeSeriesValue> | IfcIrregularTimeSeriesValue)[]);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    StartTime: IfcDateTime;
    EndTime: IfcDateTime;
    TimeSeriesDataType: IfcTimeSeriesDataTypeEnum;
    DataOrigin: IfcDataOriginEnum;
    UserDefinedDataOrigin: IfcLabel | null;
    Unit: IfcUnit | null;
    Values: (Handle<IfcIrregularTimeSeriesValue> | IfcIrregularTimeSeriesValue)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcIrregularTimeSeries;
    ToTape(): any[];
}
export declare class IfcIrregularTimeSeriesValue {
    constructor(expressID: number, type: number, TimeStamp: IfcDateTime, ListValues: IfcValue[]);
    expressID: number;
    type: number;
    TimeStamp: IfcDateTime;
    ListValues: IfcValue[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcIrregularTimeSeriesValue;
    ToTape(): any[];
}
export declare class IfcJunctionBox {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcJunctionBoxTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcJunctionBoxTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcJunctionBox;
    ToTape(): any[];
}
export declare class IfcJunctionBoxType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcJunctionBoxTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcJunctionBoxTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcJunctionBoxType;
    ToTape(): any[];
}
export declare class IfcLShapeProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, Depth: IfcPositiveLengthMeasure, Width: IfcPositiveLengthMeasure | null, Thickness: IfcPositiveLengthMeasure, FilletRadius: IfcNonNegativeLengthMeasure | null, EdgeRadius: IfcNonNegativeLengthMeasure | null, LegSlope: IfcPlaneAngleMeasure | null);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    Depth: IfcPositiveLengthMeasure;
    Width: IfcPositiveLengthMeasure | null;
    Thickness: IfcPositiveLengthMeasure;
    FilletRadius: IfcNonNegativeLengthMeasure | null;
    EdgeRadius: IfcNonNegativeLengthMeasure | null;
    LegSlope: IfcPlaneAngleMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLShapeProfileDef;
    ToTape(): any[];
}
export declare class IfcLaborResource {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null, PredefinedType: IfcLaborResourceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    PredefinedType: IfcLaborResourceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLaborResource;
    ToTape(): any[];
}
export declare class IfcLaborResourceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, ResourceType: IfcLabel | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null, PredefinedType: IfcLaborResourceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    ResourceType: IfcLabel | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    PredefinedType: IfcLaborResourceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLaborResourceType;
    ToTape(): any[];
}
export declare class IfcLagTime {
    constructor(expressID: number, type: number, Name: IfcLabel | null, DataOrigin: IfcDataOriginEnum | null, UserDefinedDataOrigin: IfcLabel | null, LagValue: IfcTimeOrRatioSelect, DurationType: IfcTaskDurationEnum);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    DataOrigin: IfcDataOriginEnum | null;
    UserDefinedDataOrigin: IfcLabel | null;
    LagValue: IfcTimeOrRatioSelect;
    DurationType: IfcTaskDurationEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLagTime;
    ToTape(): any[];
}
export declare class IfcLamp {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcLampTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcLampTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLamp;
    ToTape(): any[];
}
export declare class IfcLampType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcLampTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcLampTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLampType;
    ToTape(): any[];
}
export declare class IfcLibraryInformation {
    constructor(expressID: number, type: number, Name: IfcLabel, Version: IfcLabel | null, Publisher: IfcActorSelect | null, VersionDate: IfcDateTime | null, Location: IfcURIReference | null, Description: IfcText | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Version: IfcLabel | null;
    Publisher: IfcActorSelect | null;
    VersionDate: IfcDateTime | null;
    Location: IfcURIReference | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLibraryInformation;
    ToTape(): any[];
}
export declare class IfcLibraryReference {
    constructor(expressID: number, type: number, Location: IfcURIReference | null, Identification: IfcIdentifier | null, Name: IfcLabel | null, Description: IfcText | null, Language: IfcLanguageId | null, ReferencedLibrary: (Handle<IfcLibraryInformation> | IfcLibraryInformation) | null);
    expressID: number;
    type: number;
    Location: IfcURIReference | null;
    Identification: IfcIdentifier | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    Language: IfcLanguageId | null;
    ReferencedLibrary: (Handle<IfcLibraryInformation> | IfcLibraryInformation) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLibraryReference;
    ToTape(): any[];
}
export declare class IfcLightDistributionData {
    constructor(expressID: number, type: number, MainPlaneAngle: IfcPlaneAngleMeasure, SecondaryPlaneAngle: IfcPlaneAngleMeasure[], LuminousIntensity: IfcLuminousIntensityDistributionMeasure[]);
    expressID: number;
    type: number;
    MainPlaneAngle: IfcPlaneAngleMeasure;
    SecondaryPlaneAngle: IfcPlaneAngleMeasure[];
    LuminousIntensity: IfcLuminousIntensityDistributionMeasure[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcLightDistributionData;
    ToTape(): any[];
}
export declare class IfcLightFixture {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcLightFixtureTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcLightFixtureTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLightFixture;
    ToTape(): any[];
}
export declare class IfcLightFixtureType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcLightFixtureTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcLightFixtureTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLightFixtureType;
    ToTape(): any[];
}
export declare class IfcLightIntensityDistribution {
    constructor(expressID: number, type: number, LightDistributionCurve: IfcLightDistributionCurveEnum, DistributionData: (Handle<IfcLightDistributionData> | IfcLightDistributionData)[]);
    expressID: number;
    type: number;
    LightDistributionCurve: IfcLightDistributionCurveEnum;
    DistributionData: (Handle<IfcLightDistributionData> | IfcLightDistributionData)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcLightIntensityDistribution;
    ToTape(): any[];
}
export declare class IfcLightSource {
    constructor(expressID: number, type: number, Name: IfcLabel | null, LightColour: (Handle<IfcColourRgb> | IfcColourRgb), AmbientIntensity: IfcNormalisedRatioMeasure | null, Intensity: IfcNormalisedRatioMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    LightColour: (Handle<IfcColourRgb> | IfcColourRgb);
    AmbientIntensity: IfcNormalisedRatioMeasure | null;
    Intensity: IfcNormalisedRatioMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLightSource;
    ToTape(): any[];
}
export declare class IfcLightSourceAmbient {
    constructor(expressID: number, type: number, Name: IfcLabel | null, LightColour: (Handle<IfcColourRgb> | IfcColourRgb), AmbientIntensity: IfcNormalisedRatioMeasure | null, Intensity: IfcNormalisedRatioMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    LightColour: (Handle<IfcColourRgb> | IfcColourRgb);
    AmbientIntensity: IfcNormalisedRatioMeasure | null;
    Intensity: IfcNormalisedRatioMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLightSourceAmbient;
    ToTape(): any[];
}
export declare class IfcLightSourceDirectional {
    constructor(expressID: number, type: number, Name: IfcLabel | null, LightColour: (Handle<IfcColourRgb> | IfcColourRgb), AmbientIntensity: IfcNormalisedRatioMeasure | null, Intensity: IfcNormalisedRatioMeasure | null, Orientation: (Handle<IfcDirection> | IfcDirection));
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    LightColour: (Handle<IfcColourRgb> | IfcColourRgb);
    AmbientIntensity: IfcNormalisedRatioMeasure | null;
    Intensity: IfcNormalisedRatioMeasure | null;
    Orientation: (Handle<IfcDirection> | IfcDirection);
    static FromTape(expressID: number, type: number, tape: any[]): IfcLightSourceDirectional;
    ToTape(): any[];
}
export declare class IfcLightSourceGoniometric {
    constructor(expressID: number, type: number, Name: IfcLabel | null, LightColour: (Handle<IfcColourRgb> | IfcColourRgb), AmbientIntensity: IfcNormalisedRatioMeasure | null, Intensity: IfcNormalisedRatioMeasure | null, Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D), ColourAppearance: (Handle<IfcColourRgb> | IfcColourRgb) | null, ColourTemperature: IfcThermodynamicTemperatureMeasure, LuminousFlux: IfcLuminousFluxMeasure, LightEmissionSource: IfcLightEmissionSourceEnum, LightDistributionDataSource: IfcLightDistributionDataSourceSelect);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    LightColour: (Handle<IfcColourRgb> | IfcColourRgb);
    AmbientIntensity: IfcNormalisedRatioMeasure | null;
    Intensity: IfcNormalisedRatioMeasure | null;
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
    ColourAppearance: (Handle<IfcColourRgb> | IfcColourRgb) | null;
    ColourTemperature: IfcThermodynamicTemperatureMeasure;
    LuminousFlux: IfcLuminousFluxMeasure;
    LightEmissionSource: IfcLightEmissionSourceEnum;
    LightDistributionDataSource: IfcLightDistributionDataSourceSelect;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLightSourceGoniometric;
    ToTape(): any[];
}
export declare class IfcLightSourcePositional {
    constructor(expressID: number, type: number, Name: IfcLabel | null, LightColour: (Handle<IfcColourRgb> | IfcColourRgb), AmbientIntensity: IfcNormalisedRatioMeasure | null, Intensity: IfcNormalisedRatioMeasure | null, Position: (Handle<IfcCartesianPoint> | IfcCartesianPoint), Radius: IfcPositiveLengthMeasure, ConstantAttenuation: IfcReal, DistanceAttenuation: IfcReal, QuadricAttenuation: IfcReal);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    LightColour: (Handle<IfcColourRgb> | IfcColourRgb);
    AmbientIntensity: IfcNormalisedRatioMeasure | null;
    Intensity: IfcNormalisedRatioMeasure | null;
    Position: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    Radius: IfcPositiveLengthMeasure;
    ConstantAttenuation: IfcReal;
    DistanceAttenuation: IfcReal;
    QuadricAttenuation: IfcReal;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLightSourcePositional;
    ToTape(): any[];
}
export declare class IfcLightSourceSpot {
    constructor(expressID: number, type: number, Name: IfcLabel | null, LightColour: (Handle<IfcColourRgb> | IfcColourRgb), AmbientIntensity: IfcNormalisedRatioMeasure | null, Intensity: IfcNormalisedRatioMeasure | null, Position: (Handle<IfcCartesianPoint> | IfcCartesianPoint), Radius: IfcPositiveLengthMeasure, ConstantAttenuation: IfcReal, DistanceAttenuation: IfcReal, QuadricAttenuation: IfcReal, Orientation: (Handle<IfcDirection> | IfcDirection), ConcentrationExponent: IfcReal | null, SpreadAngle: IfcPositivePlaneAngleMeasure, BeamWidthAngle: IfcPositivePlaneAngleMeasure);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    LightColour: (Handle<IfcColourRgb> | IfcColourRgb);
    AmbientIntensity: IfcNormalisedRatioMeasure | null;
    Intensity: IfcNormalisedRatioMeasure | null;
    Position: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    Radius: IfcPositiveLengthMeasure;
    ConstantAttenuation: IfcReal;
    DistanceAttenuation: IfcReal;
    QuadricAttenuation: IfcReal;
    Orientation: (Handle<IfcDirection> | IfcDirection);
    ConcentrationExponent: IfcReal | null;
    SpreadAngle: IfcPositivePlaneAngleMeasure;
    BeamWidthAngle: IfcPositivePlaneAngleMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLightSourceSpot;
    ToTape(): any[];
}
export declare class IfcLine {
    constructor(expressID: number, type: number, Pnt: (Handle<IfcCartesianPoint> | IfcCartesianPoint), Dir: (Handle<IfcVector> | IfcVector));
    expressID: number;
    type: number;
    Pnt: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    Dir: (Handle<IfcVector> | IfcVector);
    static FromTape(expressID: number, type: number, tape: any[]): IfcLine;
    ToTape(): any[];
}
export declare class IfcLineSegment2D {
    constructor(expressID: number, type: number, StartPoint: (Handle<IfcCartesianPoint> | IfcCartesianPoint), StartDirection: IfcPlaneAngleMeasure, SegmentLength: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    StartPoint: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    StartDirection: IfcPlaneAngleMeasure;
    SegmentLength: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLineSegment2D;
    ToTape(): any[];
}
export declare class IfcLinearPlacement {
    constructor(expressID: number, type: number, PlacementRelTo: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, PlacementMeasuredAlong: (Handle<IfcCurve> | IfcCurve), Distance: (Handle<IfcDistanceExpression> | IfcDistanceExpression), Orientation: (Handle<IfcOrientationExpression> | IfcOrientationExpression) | null, CartesianPosition: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null);
    expressID: number;
    type: number;
    PlacementRelTo: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    PlacementMeasuredAlong: (Handle<IfcCurve> | IfcCurve);
    Distance: (Handle<IfcDistanceExpression> | IfcDistanceExpression);
    Orientation: (Handle<IfcOrientationExpression> | IfcOrientationExpression) | null;
    CartesianPosition: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLinearPlacement;
    ToTape(): any[];
}
export declare class IfcLinearPositioningElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Axis: (Handle<IfcCurve> | IfcCurve));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Axis: (Handle<IfcCurve> | IfcCurve);
    static FromTape(expressID: number, type: number, tape: any[]): IfcLinearPositioningElement;
    ToTape(): any[];
}
export declare class IfcLocalPlacement {
    constructor(expressID: number, type: number, PlacementRelTo: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, RelativePlacement: IfcAxis2Placement);
    expressID: number;
    type: number;
    PlacementRelTo: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    RelativePlacement: IfcAxis2Placement;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLocalPlacement;
    ToTape(): any[];
}
export declare class IfcLoop {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcLoop;
    ToTape(): any[];
}
export declare class IfcManifoldSolidBrep {
    constructor(expressID: number, type: number, Outer: (Handle<IfcClosedShell> | IfcClosedShell));
    expressID: number;
    type: number;
    Outer: (Handle<IfcClosedShell> | IfcClosedShell);
    static FromTape(expressID: number, type: number, tape: any[]): IfcManifoldSolidBrep;
    ToTape(): any[];
}
export declare class IfcMapConversion {
    constructor(expressID: number, type: number, SourceCRS: IfcCoordinateReferenceSystemSelect, TargetCRS: (Handle<IfcCoordinateReferenceSystem> | IfcCoordinateReferenceSystem), Eastings: IfcLengthMeasure, Northings: IfcLengthMeasure, OrthogonalHeight: IfcLengthMeasure, XAxisAbscissa: IfcReal | null, XAxisOrdinate: IfcReal | null, Scale: IfcReal | null);
    expressID: number;
    type: number;
    SourceCRS: IfcCoordinateReferenceSystemSelect;
    TargetCRS: (Handle<IfcCoordinateReferenceSystem> | IfcCoordinateReferenceSystem);
    Eastings: IfcLengthMeasure;
    Northings: IfcLengthMeasure;
    OrthogonalHeight: IfcLengthMeasure;
    XAxisAbscissa: IfcReal | null;
    XAxisOrdinate: IfcReal | null;
    Scale: IfcReal | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMapConversion;
    ToTape(): any[];
}
export declare class IfcMappedItem {
    constructor(expressID: number, type: number, MappingSource: (Handle<IfcRepresentationMap> | IfcRepresentationMap), MappingTarget: (Handle<IfcCartesianTransformationOperator> | IfcCartesianTransformationOperator));
    expressID: number;
    type: number;
    MappingSource: (Handle<IfcRepresentationMap> | IfcRepresentationMap);
    MappingTarget: (Handle<IfcCartesianTransformationOperator> | IfcCartesianTransformationOperator);
    static FromTape(expressID: number, type: number, tape: any[]): IfcMappedItem;
    ToTape(): any[];
}
export declare class IfcMaterial {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, Category: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    Category: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterial;
    ToTape(): any[];
}
export declare class IfcMaterialClassificationRelationship {
    constructor(expressID: number, type: number, MaterialClassifications: IfcClassificationSelect[], ClassifiedMaterial: (Handle<IfcMaterial> | IfcMaterial));
    expressID: number;
    type: number;
    MaterialClassifications: IfcClassificationSelect[];
    ClassifiedMaterial: (Handle<IfcMaterial> | IfcMaterial);
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialClassificationRelationship;
    ToTape(): any[];
}
export declare class IfcMaterialConstituent {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, Material: (Handle<IfcMaterial> | IfcMaterial), Fraction: IfcNormalisedRatioMeasure | null, Category: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    Material: (Handle<IfcMaterial> | IfcMaterial);
    Fraction: IfcNormalisedRatioMeasure | null;
    Category: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialConstituent;
    ToTape(): any[];
}
export declare class IfcMaterialConstituentSet {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, MaterialConstituents: (Handle<IfcMaterialConstituent> | IfcMaterialConstituent)[] | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    MaterialConstituents: (Handle<IfcMaterialConstituent> | IfcMaterialConstituent)[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialConstituentSet;
    ToTape(): any[];
}
export declare class IfcMaterialDefinition {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialDefinition;
    ToTape(): any[];
}
export declare class IfcMaterialDefinitionRepresentation {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, Representations: (Handle<IfcRepresentation> | IfcRepresentation)[], RepresentedMaterial: (Handle<IfcMaterial> | IfcMaterial));
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    Representations: (Handle<IfcRepresentation> | IfcRepresentation)[];
    RepresentedMaterial: (Handle<IfcMaterial> | IfcMaterial);
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialDefinitionRepresentation;
    ToTape(): any[];
}
export declare class IfcMaterialLayer {
    constructor(expressID: number, type: number, Material: (Handle<IfcMaterial> | IfcMaterial) | null, LayerThickness: IfcNonNegativeLengthMeasure, IsVentilated: IfcLogical | null, Name: IfcLabel | null, Description: IfcText | null, Category: IfcLabel | null, Priority: IfcInteger | null);
    expressID: number;
    type: number;
    Material: (Handle<IfcMaterial> | IfcMaterial) | null;
    LayerThickness: IfcNonNegativeLengthMeasure;
    IsVentilated: IfcLogical | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    Category: IfcLabel | null;
    Priority: IfcInteger | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialLayer;
    ToTape(): any[];
}
export declare class IfcMaterialLayerSet {
    constructor(expressID: number, type: number, MaterialLayers: (Handle<IfcMaterialLayer> | IfcMaterialLayer)[], LayerSetName: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    MaterialLayers: (Handle<IfcMaterialLayer> | IfcMaterialLayer)[];
    LayerSetName: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialLayerSet;
    ToTape(): any[];
}
export declare class IfcMaterialLayerSetUsage {
    constructor(expressID: number, type: number, ForLayerSet: (Handle<IfcMaterialLayerSet> | IfcMaterialLayerSet), LayerSetDirection: IfcLayerSetDirectionEnum, DirectionSense: IfcDirectionSenseEnum, OffsetFromReferenceLine: IfcLengthMeasure, ReferenceExtent: IfcPositiveLengthMeasure | null);
    expressID: number;
    type: number;
    ForLayerSet: (Handle<IfcMaterialLayerSet> | IfcMaterialLayerSet);
    LayerSetDirection: IfcLayerSetDirectionEnum;
    DirectionSense: IfcDirectionSenseEnum;
    OffsetFromReferenceLine: IfcLengthMeasure;
    ReferenceExtent: IfcPositiveLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialLayerSetUsage;
    ToTape(): any[];
}
export declare class IfcMaterialLayerWithOffsets {
    constructor(expressID: number, type: number, Material: (Handle<IfcMaterial> | IfcMaterial) | null, LayerThickness: IfcNonNegativeLengthMeasure, IsVentilated: IfcLogical | null, Name: IfcLabel | null, Description: IfcText | null, Category: IfcLabel | null, Priority: IfcInteger | null, OffsetDirection: IfcLayerSetDirectionEnum, OffsetValues: IfcLengthMeasure);
    expressID: number;
    type: number;
    Material: (Handle<IfcMaterial> | IfcMaterial) | null;
    LayerThickness: IfcNonNegativeLengthMeasure;
    IsVentilated: IfcLogical | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    Category: IfcLabel | null;
    Priority: IfcInteger | null;
    OffsetDirection: IfcLayerSetDirectionEnum;
    OffsetValues: IfcLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialLayerWithOffsets;
    ToTape(): any[];
}
export declare class IfcMaterialList {
    constructor(expressID: number, type: number, Materials: (Handle<IfcMaterial> | IfcMaterial)[]);
    expressID: number;
    type: number;
    Materials: (Handle<IfcMaterial> | IfcMaterial)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialList;
    ToTape(): any[];
}
export declare class IfcMaterialProfile {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, Material: (Handle<IfcMaterial> | IfcMaterial) | null, Profile: (Handle<IfcProfileDef> | IfcProfileDef), Priority: IfcInteger | null, Category: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    Material: (Handle<IfcMaterial> | IfcMaterial) | null;
    Profile: (Handle<IfcProfileDef> | IfcProfileDef);
    Priority: IfcInteger | null;
    Category: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialProfile;
    ToTape(): any[];
}
export declare class IfcMaterialProfileSet {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, MaterialProfiles: (Handle<IfcMaterialProfile> | IfcMaterialProfile)[], CompositeProfile: (Handle<IfcCompositeProfileDef> | IfcCompositeProfileDef) | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    MaterialProfiles: (Handle<IfcMaterialProfile> | IfcMaterialProfile)[];
    CompositeProfile: (Handle<IfcCompositeProfileDef> | IfcCompositeProfileDef) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialProfileSet;
    ToTape(): any[];
}
export declare class IfcMaterialProfileSetUsage {
    constructor(expressID: number, type: number, ForProfileSet: (Handle<IfcMaterialProfileSet> | IfcMaterialProfileSet), CardinalPoint: IfcCardinalPointReference | null, ReferenceExtent: IfcPositiveLengthMeasure | null);
    expressID: number;
    type: number;
    ForProfileSet: (Handle<IfcMaterialProfileSet> | IfcMaterialProfileSet);
    CardinalPoint: IfcCardinalPointReference | null;
    ReferenceExtent: IfcPositiveLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialProfileSetUsage;
    ToTape(): any[];
}
export declare class IfcMaterialProfileSetUsageTapering {
    constructor(expressID: number, type: number, ForProfileSet: (Handle<IfcMaterialProfileSet> | IfcMaterialProfileSet), CardinalPoint: IfcCardinalPointReference | null, ReferenceExtent: IfcPositiveLengthMeasure | null, ForProfileEndSet: (Handle<IfcMaterialProfileSet> | IfcMaterialProfileSet), CardinalEndPoint: IfcCardinalPointReference | null);
    expressID: number;
    type: number;
    ForProfileSet: (Handle<IfcMaterialProfileSet> | IfcMaterialProfileSet);
    CardinalPoint: IfcCardinalPointReference | null;
    ReferenceExtent: IfcPositiveLengthMeasure | null;
    ForProfileEndSet: (Handle<IfcMaterialProfileSet> | IfcMaterialProfileSet);
    CardinalEndPoint: IfcCardinalPointReference | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialProfileSetUsageTapering;
    ToTape(): any[];
}
export declare class IfcMaterialProfileWithOffsets {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, Material: (Handle<IfcMaterial> | IfcMaterial) | null, Profile: (Handle<IfcProfileDef> | IfcProfileDef), Priority: IfcInteger | null, Category: IfcLabel | null, OffsetValues: IfcLengthMeasure);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    Material: (Handle<IfcMaterial> | IfcMaterial) | null;
    Profile: (Handle<IfcProfileDef> | IfcProfileDef);
    Priority: IfcInteger | null;
    Category: IfcLabel | null;
    OffsetValues: IfcLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialProfileWithOffsets;
    ToTape(): any[];
}
export declare class IfcMaterialProperties {
    constructor(expressID: number, type: number, Name: IfcIdentifier | null, Description: IfcText | null, Properties: (Handle<IfcProperty> | IfcProperty)[], Material: (Handle<IfcMaterialDefinition> | IfcMaterialDefinition));
    expressID: number;
    type: number;
    Name: IfcIdentifier | null;
    Description: IfcText | null;
    Properties: (Handle<IfcProperty> | IfcProperty)[];
    Material: (Handle<IfcMaterialDefinition> | IfcMaterialDefinition);
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialProperties;
    ToTape(): any[];
}
export declare class IfcMaterialRelationship {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, RelatingMaterial: (Handle<IfcMaterial> | IfcMaterial), RelatedMaterials: (Handle<IfcMaterial> | IfcMaterial)[], Expression: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingMaterial: (Handle<IfcMaterial> | IfcMaterial);
    RelatedMaterials: (Handle<IfcMaterial> | IfcMaterial)[];
    Expression: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialRelationship;
    ToTape(): any[];
}
export declare class IfcMaterialUsageDefinition {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMaterialUsageDefinition;
    ToTape(): any[];
}
export declare class IfcMeasureWithUnit {
    constructor(expressID: number, type: number, ValueComponent: IfcValue, UnitComponent: IfcUnit);
    expressID: number;
    type: number;
    ValueComponent: IfcValue;
    UnitComponent: IfcUnit;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMeasureWithUnit;
    ToTape(): any[];
}
export declare class IfcMechanicalFastener {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, NominalDiameter: IfcPositiveLengthMeasure | null, NominalLength: IfcPositiveLengthMeasure | null, PredefinedType: IfcMechanicalFastenerTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    NominalDiameter: IfcPositiveLengthMeasure | null;
    NominalLength: IfcPositiveLengthMeasure | null;
    PredefinedType: IfcMechanicalFastenerTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMechanicalFastener;
    ToTape(): any[];
}
export declare class IfcMechanicalFastenerType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcMechanicalFastenerTypeEnum, NominalDiameter: IfcPositiveLengthMeasure | null, NominalLength: IfcPositiveLengthMeasure | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcMechanicalFastenerTypeEnum;
    NominalDiameter: IfcPositiveLengthMeasure | null;
    NominalLength: IfcPositiveLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMechanicalFastenerType;
    ToTape(): any[];
}
export declare class IfcMedicalDevice {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcMedicalDeviceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcMedicalDeviceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMedicalDevice;
    ToTape(): any[];
}
export declare class IfcMedicalDeviceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcMedicalDeviceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcMedicalDeviceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMedicalDeviceType;
    ToTape(): any[];
}
export declare class IfcMember {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcMemberTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcMemberTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMember;
    ToTape(): any[];
}
export declare class IfcMemberStandardCase {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcMemberTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcMemberTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMemberStandardCase;
    ToTape(): any[];
}
export declare class IfcMemberType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcMemberTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcMemberTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMemberType;
    ToTape(): any[];
}
export declare class IfcMetric {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, ConstraintGrade: IfcConstraintEnum, ConstraintSource: IfcLabel | null, CreatingActor: IfcActorSelect | null, CreationTime: IfcDateTime | null, UserDefinedGrade: IfcLabel | null, Benchmark: IfcBenchmarkEnum, ValueSource: IfcLabel | null, DataValue: IfcMetricValueSelect | null, ReferencePath: (Handle<IfcReference> | IfcReference) | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    ConstraintGrade: IfcConstraintEnum;
    ConstraintSource: IfcLabel | null;
    CreatingActor: IfcActorSelect | null;
    CreationTime: IfcDateTime | null;
    UserDefinedGrade: IfcLabel | null;
    Benchmark: IfcBenchmarkEnum;
    ValueSource: IfcLabel | null;
    DataValue: IfcMetricValueSelect | null;
    ReferencePath: (Handle<IfcReference> | IfcReference) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMetric;
    ToTape(): any[];
}
export declare class IfcMirroredProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, ParentProfile: (Handle<IfcProfileDef> | IfcProfileDef), Operator: (Handle<IfcCartesianTransformationOperator2D> | IfcCartesianTransformationOperator2D), Label: IfcLabel | null);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    ParentProfile: (Handle<IfcProfileDef> | IfcProfileDef);
    Operator: (Handle<IfcCartesianTransformationOperator2D> | IfcCartesianTransformationOperator2D);
    Label: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMirroredProfileDef;
    ToTape(): any[];
}
export declare class IfcMonetaryUnit {
    constructor(expressID: number, type: number, Currency: IfcLabel);
    expressID: number;
    type: number;
    Currency: IfcLabel;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMonetaryUnit;
    ToTape(): any[];
}
export declare class IfcMotorConnection {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcMotorConnectionTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcMotorConnectionTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMotorConnection;
    ToTape(): any[];
}
export declare class IfcMotorConnectionType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcMotorConnectionTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcMotorConnectionTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcMotorConnectionType;
    ToTape(): any[];
}
export declare class IfcNamedUnit {
    constructor(expressID: number, type: number, Dimensions: (Handle<IfcDimensionalExponents> | IfcDimensionalExponents), UnitType: IfcUnitEnum);
    expressID: number;
    type: number;
    Dimensions: (Handle<IfcDimensionalExponents> | IfcDimensionalExponents);
    UnitType: IfcUnitEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcNamedUnit;
    ToTape(): any[];
}
export declare class IfcObject {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcObject;
    ToTape(): any[];
}
export declare class IfcObjectDefinition {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcObjectDefinition;
    ToTape(): any[];
}
export declare class IfcObjectPlacement {
    constructor(expressID: number, type: number, PlacementRelTo: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null);
    expressID: number;
    type: number;
    PlacementRelTo: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcObjectPlacement;
    ToTape(): any[];
}
export declare class IfcObjective {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, ConstraintGrade: IfcConstraintEnum, ConstraintSource: IfcLabel | null, CreatingActor: IfcActorSelect | null, CreationTime: IfcDateTime | null, UserDefinedGrade: IfcLabel | null, BenchmarkValues: (Handle<IfcConstraint> | IfcConstraint)[] | null, LogicalAggregator: IfcLogicalOperatorEnum | null, ObjectiveQualifier: IfcObjectiveEnum, UserDefinedQualifier: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    ConstraintGrade: IfcConstraintEnum;
    ConstraintSource: IfcLabel | null;
    CreatingActor: IfcActorSelect | null;
    CreationTime: IfcDateTime | null;
    UserDefinedGrade: IfcLabel | null;
    BenchmarkValues: (Handle<IfcConstraint> | IfcConstraint)[] | null;
    LogicalAggregator: IfcLogicalOperatorEnum | null;
    ObjectiveQualifier: IfcObjectiveEnum;
    UserDefinedQualifier: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcObjective;
    ToTape(): any[];
}
export declare class IfcOccupant {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, TheActor: IfcActorSelect, PredefinedType: IfcOccupantTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    TheActor: IfcActorSelect;
    PredefinedType: IfcOccupantTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcOccupant;
    ToTape(): any[];
}
export declare class IfcOffsetCurve {
    constructor(expressID: number, type: number, BasisCurve: (Handle<IfcCurve> | IfcCurve));
    expressID: number;
    type: number;
    BasisCurve: (Handle<IfcCurve> | IfcCurve);
    static FromTape(expressID: number, type: number, tape: any[]): IfcOffsetCurve;
    ToTape(): any[];
}
export declare class IfcOffsetCurve2D {
    constructor(expressID: number, type: number, BasisCurve: (Handle<IfcCurve> | IfcCurve), Distance: IfcLengthMeasure, SelfIntersect: IfcLogical);
    expressID: number;
    type: number;
    BasisCurve: (Handle<IfcCurve> | IfcCurve);
    Distance: IfcLengthMeasure;
    SelfIntersect: IfcLogical;
    static FromTape(expressID: number, type: number, tape: any[]): IfcOffsetCurve2D;
    ToTape(): any[];
}
export declare class IfcOffsetCurve3D {
    constructor(expressID: number, type: number, BasisCurve: (Handle<IfcCurve> | IfcCurve), Distance: IfcLengthMeasure, SelfIntersect: IfcLogical, RefDirection: (Handle<IfcDirection> | IfcDirection));
    expressID: number;
    type: number;
    BasisCurve: (Handle<IfcCurve> | IfcCurve);
    Distance: IfcLengthMeasure;
    SelfIntersect: IfcLogical;
    RefDirection: (Handle<IfcDirection> | IfcDirection);
    static FromTape(expressID: number, type: number, tape: any[]): IfcOffsetCurve3D;
    ToTape(): any[];
}
export declare class IfcOffsetCurveByDistances {
    constructor(expressID: number, type: number, BasisCurve: (Handle<IfcCurve> | IfcCurve), OffsetValues: (Handle<IfcDistanceExpression> | IfcDistanceExpression)[], Tag: IfcLabel | null);
    expressID: number;
    type: number;
    BasisCurve: (Handle<IfcCurve> | IfcCurve);
    OffsetValues: (Handle<IfcDistanceExpression> | IfcDistanceExpression)[];
    Tag: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcOffsetCurveByDistances;
    ToTape(): any[];
}
export declare class IfcOpenShell {
    constructor(expressID: number, type: number, CfsFaces: (Handle<IfcFace> | IfcFace)[]);
    expressID: number;
    type: number;
    CfsFaces: (Handle<IfcFace> | IfcFace)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcOpenShell;
    ToTape(): any[];
}
export declare class IfcOpeningElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcOpeningElementTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcOpeningElementTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcOpeningElement;
    ToTape(): any[];
}
export declare class IfcOpeningStandardCase {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcOpeningElementTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcOpeningElementTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcOpeningStandardCase;
    ToTape(): any[];
}
export declare class IfcOrganization {
    constructor(expressID: number, type: number, Identification: IfcIdentifier | null, Name: IfcLabel, Description: IfcText | null, Roles: (Handle<IfcActorRole> | IfcActorRole)[] | null, Addresses: (Handle<IfcAddress> | IfcAddress)[] | null);
    expressID: number;
    type: number;
    Identification: IfcIdentifier | null;
    Name: IfcLabel;
    Description: IfcText | null;
    Roles: (Handle<IfcActorRole> | IfcActorRole)[] | null;
    Addresses: (Handle<IfcAddress> | IfcAddress)[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcOrganization;
    ToTape(): any[];
}
export declare class IfcOrganizationRelationship {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, RelatingOrganization: (Handle<IfcOrganization> | IfcOrganization), RelatedOrganizations: (Handle<IfcOrganization> | IfcOrganization)[]);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingOrganization: (Handle<IfcOrganization> | IfcOrganization);
    RelatedOrganizations: (Handle<IfcOrganization> | IfcOrganization)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcOrganizationRelationship;
    ToTape(): any[];
}
export declare class IfcOrientationExpression {
    constructor(expressID: number, type: number, LateralAxisDirection: (Handle<IfcDirection> | IfcDirection), VerticalAxisDirection: (Handle<IfcDirection> | IfcDirection));
    expressID: number;
    type: number;
    LateralAxisDirection: (Handle<IfcDirection> | IfcDirection);
    VerticalAxisDirection: (Handle<IfcDirection> | IfcDirection);
    static FromTape(expressID: number, type: number, tape: any[]): IfcOrientationExpression;
    ToTape(): any[];
}
export declare class IfcOrientedEdge {
    constructor(expressID: number, type: number, EdgeStart: (Handle<IfcVertex> | IfcVertex), EdgeEnd: (Handle<IfcVertex> | IfcVertex), EdgeElement: (Handle<IfcEdge> | IfcEdge), Orientation: IfcBoolean);
    expressID: number;
    type: number;
    EdgeStart: (Handle<IfcVertex> | IfcVertex);
    EdgeEnd: (Handle<IfcVertex> | IfcVertex);
    EdgeElement: (Handle<IfcEdge> | IfcEdge);
    Orientation: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcOrientedEdge;
    ToTape(): any[];
}
export declare class IfcOuterBoundaryCurve {
    constructor(expressID: number, type: number, Segments: (Handle<IfcCompositeCurveSegment> | IfcCompositeCurveSegment)[], SelfIntersect: IfcLogical);
    expressID: number;
    type: number;
    Segments: (Handle<IfcCompositeCurveSegment> | IfcCompositeCurveSegment)[];
    SelfIntersect: IfcLogical;
    static FromTape(expressID: number, type: number, tape: any[]): IfcOuterBoundaryCurve;
    ToTape(): any[];
}
export declare class IfcOutlet {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcOutletTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcOutletTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcOutlet;
    ToTape(): any[];
}
export declare class IfcOutletType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcOutletTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcOutletTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcOutletType;
    ToTape(): any[];
}
export declare class IfcOwnerHistory {
    constructor(expressID: number, type: number, OwningUser: (Handle<IfcPersonAndOrganization> | IfcPersonAndOrganization), OwningApplication: (Handle<IfcApplication> | IfcApplication), State: IfcStateEnum | null, ChangeAction: IfcChangeActionEnum | null, LastModifiedDate: IfcTimeStamp | null, LastModifyingUser: (Handle<IfcPersonAndOrganization> | IfcPersonAndOrganization) | null, LastModifyingApplication: (Handle<IfcApplication> | IfcApplication) | null, CreationDate: IfcTimeStamp);
    expressID: number;
    type: number;
    OwningUser: (Handle<IfcPersonAndOrganization> | IfcPersonAndOrganization);
    OwningApplication: (Handle<IfcApplication> | IfcApplication);
    State: IfcStateEnum | null;
    ChangeAction: IfcChangeActionEnum | null;
    LastModifiedDate: IfcTimeStamp | null;
    LastModifyingUser: (Handle<IfcPersonAndOrganization> | IfcPersonAndOrganization) | null;
    LastModifyingApplication: (Handle<IfcApplication> | IfcApplication) | null;
    CreationDate: IfcTimeStamp;
    static FromTape(expressID: number, type: number, tape: any[]): IfcOwnerHistory;
    ToTape(): any[];
}
export declare class IfcParameterizedProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcParameterizedProfileDef;
    ToTape(): any[];
}
export declare class IfcPath {
    constructor(expressID: number, type: number, EdgeList: (Handle<IfcOrientedEdge> | IfcOrientedEdge)[]);
    expressID: number;
    type: number;
    EdgeList: (Handle<IfcOrientedEdge> | IfcOrientedEdge)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcPath;
    ToTape(): any[];
}
export declare class IfcPcurve {
    constructor(expressID: number, type: number, BasisSurface: (Handle<IfcSurface> | IfcSurface), ReferenceCurve: (Handle<IfcCurve> | IfcCurve));
    expressID: number;
    type: number;
    BasisSurface: (Handle<IfcSurface> | IfcSurface);
    ReferenceCurve: (Handle<IfcCurve> | IfcCurve);
    static FromTape(expressID: number, type: number, tape: any[]): IfcPcurve;
    ToTape(): any[];
}
export declare class IfcPerformanceHistory {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, LifeCyclePhase: IfcLabel, PredefinedType: IfcPerformanceHistoryTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    LifeCyclePhase: IfcLabel;
    PredefinedType: IfcPerformanceHistoryTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPerformanceHistory;
    ToTape(): any[];
}
export declare class IfcPermeableCoveringProperties {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, OperationType: IfcPermeableCoveringOperationEnum, PanelPosition: IfcWindowPanelPositionEnum, FrameDepth: IfcPositiveLengthMeasure | null, FrameThickness: IfcPositiveLengthMeasure | null, ShapeAspectStyle: (Handle<IfcShapeAspect> | IfcShapeAspect) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    OperationType: IfcPermeableCoveringOperationEnum;
    PanelPosition: IfcWindowPanelPositionEnum;
    FrameDepth: IfcPositiveLengthMeasure | null;
    FrameThickness: IfcPositiveLengthMeasure | null;
    ShapeAspectStyle: (Handle<IfcShapeAspect> | IfcShapeAspect) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPermeableCoveringProperties;
    ToTape(): any[];
}
export declare class IfcPermit {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, PredefinedType: IfcPermitTypeEnum | null, Status: IfcLabel | null, LongDescription: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    PredefinedType: IfcPermitTypeEnum | null;
    Status: IfcLabel | null;
    LongDescription: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPermit;
    ToTape(): any[];
}
export declare class IfcPerson {
    constructor(expressID: number, type: number, Identification: IfcIdentifier | null, FamilyName: IfcLabel | null, GivenName: IfcLabel | null, MiddleNames: IfcLabel[] | null, PrefixTitles: IfcLabel[] | null, SuffixTitles: IfcLabel[] | null, Roles: (Handle<IfcActorRole> | IfcActorRole)[] | null, Addresses: (Handle<IfcAddress> | IfcAddress)[] | null);
    expressID: number;
    type: number;
    Identification: IfcIdentifier | null;
    FamilyName: IfcLabel | null;
    GivenName: IfcLabel | null;
    MiddleNames: IfcLabel[] | null;
    PrefixTitles: IfcLabel[] | null;
    SuffixTitles: IfcLabel[] | null;
    Roles: (Handle<IfcActorRole> | IfcActorRole)[] | null;
    Addresses: (Handle<IfcAddress> | IfcAddress)[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPerson;
    ToTape(): any[];
}
export declare class IfcPersonAndOrganization {
    constructor(expressID: number, type: number, ThePerson: (Handle<IfcPerson> | IfcPerson), TheOrganization: (Handle<IfcOrganization> | IfcOrganization), Roles: (Handle<IfcActorRole> | IfcActorRole)[] | null);
    expressID: number;
    type: number;
    ThePerson: (Handle<IfcPerson> | IfcPerson);
    TheOrganization: (Handle<IfcOrganization> | IfcOrganization);
    Roles: (Handle<IfcActorRole> | IfcActorRole)[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPersonAndOrganization;
    ToTape(): any[];
}
export declare class IfcPhysicalComplexQuantity {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, HasQuantities: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity)[], Discrimination: IfcLabel, Quality: IfcLabel | null, Usage: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    HasQuantities: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity)[];
    Discrimination: IfcLabel;
    Quality: IfcLabel | null;
    Usage: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPhysicalComplexQuantity;
    ToTape(): any[];
}
export declare class IfcPhysicalQuantity {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPhysicalQuantity;
    ToTape(): any[];
}
export declare class IfcPhysicalSimpleQuantity {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPhysicalSimpleQuantity;
    ToTape(): any[];
}
export declare class IfcPile {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcPileTypeEnum | null, ConstructionType: IfcPileConstructionEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcPileTypeEnum | null;
    ConstructionType: IfcPileConstructionEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPile;
    ToTape(): any[];
}
export declare class IfcPileType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcPileTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcPileTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPileType;
    ToTape(): any[];
}
export declare class IfcPipeFitting {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcPipeFittingTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcPipeFittingTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPipeFitting;
    ToTape(): any[];
}
export declare class IfcPipeFittingType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcPipeFittingTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcPipeFittingTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPipeFittingType;
    ToTape(): any[];
}
export declare class IfcPipeSegment {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcPipeSegmentTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcPipeSegmentTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPipeSegment;
    ToTape(): any[];
}
export declare class IfcPipeSegmentType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcPipeSegmentTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcPipeSegmentTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPipeSegmentType;
    ToTape(): any[];
}
export declare class IfcPixelTexture {
    constructor(expressID: number, type: number, RepeatS: IfcBoolean, RepeatT: IfcBoolean, Mode: IfcIdentifier | null, TextureTransform: (Handle<IfcCartesianTransformationOperator2D> | IfcCartesianTransformationOperator2D) | null, Parameter: IfcIdentifier[] | null, Width: IfcInteger, Height: IfcInteger, ColourComponents: IfcInteger, Pixel: IfcBinary[]);
    expressID: number;
    type: number;
    RepeatS: IfcBoolean;
    RepeatT: IfcBoolean;
    Mode: IfcIdentifier | null;
    TextureTransform: (Handle<IfcCartesianTransformationOperator2D> | IfcCartesianTransformationOperator2D) | null;
    Parameter: IfcIdentifier[] | null;
    Width: IfcInteger;
    Height: IfcInteger;
    ColourComponents: IfcInteger;
    Pixel: IfcBinary[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcPixelTexture;
    ToTape(): any[];
}
export declare class IfcPlacement {
    constructor(expressID: number, type: number, Location: (Handle<IfcCartesianPoint> | IfcCartesianPoint));
    expressID: number;
    type: number;
    Location: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    static FromTape(expressID: number, type: number, tape: any[]): IfcPlacement;
    ToTape(): any[];
}
export declare class IfcPlanarBox {
    constructor(expressID: number, type: number, SizeInX: IfcLengthMeasure, SizeInY: IfcLengthMeasure, Placement: IfcAxis2Placement);
    expressID: number;
    type: number;
    SizeInX: IfcLengthMeasure;
    SizeInY: IfcLengthMeasure;
    Placement: IfcAxis2Placement;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPlanarBox;
    ToTape(): any[];
}
export declare class IfcPlanarExtent {
    constructor(expressID: number, type: number, SizeInX: IfcLengthMeasure, SizeInY: IfcLengthMeasure);
    expressID: number;
    type: number;
    SizeInX: IfcLengthMeasure;
    SizeInY: IfcLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPlanarExtent;
    ToTape(): any[];
}
export declare class IfcPlane {
    constructor(expressID: number, type: number, Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D));
    expressID: number;
    type: number;
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
    static FromTape(expressID: number, type: number, tape: any[]): IfcPlane;
    ToTape(): any[];
}
export declare class IfcPlate {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcPlateTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcPlateTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPlate;
    ToTape(): any[];
}
export declare class IfcPlateStandardCase {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcPlateTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcPlateTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPlateStandardCase;
    ToTape(): any[];
}
export declare class IfcPlateType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcPlateTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcPlateTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPlateType;
    ToTape(): any[];
}
export declare class IfcPoint {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPoint;
    ToTape(): any[];
}
export declare class IfcPointOnCurve {
    constructor(expressID: number, type: number, BasisCurve: (Handle<IfcCurve> | IfcCurve), PointParameter: IfcParameterValue);
    expressID: number;
    type: number;
    BasisCurve: (Handle<IfcCurve> | IfcCurve);
    PointParameter: IfcParameterValue;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPointOnCurve;
    ToTape(): any[];
}
export declare class IfcPointOnSurface {
    constructor(expressID: number, type: number, BasisSurface: (Handle<IfcSurface> | IfcSurface), PointParameterU: IfcParameterValue, PointParameterV: IfcParameterValue);
    expressID: number;
    type: number;
    BasisSurface: (Handle<IfcSurface> | IfcSurface);
    PointParameterU: IfcParameterValue;
    PointParameterV: IfcParameterValue;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPointOnSurface;
    ToTape(): any[];
}
export declare class IfcPolyLoop {
    constructor(expressID: number, type: number, Polygon: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[]);
    expressID: number;
    type: number;
    Polygon: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcPolyLoop;
    ToTape(): any[];
}
export declare class IfcPolygonalBoundedHalfSpace {
    constructor(expressID: number, type: number, BaseSurface: (Handle<IfcSurface> | IfcSurface), AgreementFlag: IfcBoolean, Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D), PolygonalBoundary: (Handle<IfcBoundedCurve> | IfcBoundedCurve));
    expressID: number;
    type: number;
    BaseSurface: (Handle<IfcSurface> | IfcSurface);
    AgreementFlag: IfcBoolean;
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
    PolygonalBoundary: (Handle<IfcBoundedCurve> | IfcBoundedCurve);
    static FromTape(expressID: number, type: number, tape: any[]): IfcPolygonalBoundedHalfSpace;
    ToTape(): any[];
}
export declare class IfcPolygonalFaceSet {
    constructor(expressID: number, type: number, Coordinates: (Handle<IfcCartesianPointList3D> | IfcCartesianPointList3D), Closed: IfcBoolean | null, Faces: (Handle<IfcIndexedPolygonalFace> | IfcIndexedPolygonalFace)[], PnIndex: IfcPositiveInteger[] | null);
    expressID: number;
    type: number;
    Coordinates: (Handle<IfcCartesianPointList3D> | IfcCartesianPointList3D);
    Closed: IfcBoolean | null;
    Faces: (Handle<IfcIndexedPolygonalFace> | IfcIndexedPolygonalFace)[];
    PnIndex: IfcPositiveInteger[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPolygonalFaceSet;
    ToTape(): any[];
}
export declare class IfcPolyline {
    constructor(expressID: number, type: number, Points: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[]);
    expressID: number;
    type: number;
    Points: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcPolyline;
    ToTape(): any[];
}
export declare class IfcPort {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPort;
    ToTape(): any[];
}
export declare class IfcPositioningElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPositioningElement;
    ToTape(): any[];
}
export declare class IfcPostalAddress {
    constructor(expressID: number, type: number, Purpose: IfcAddressTypeEnum | null, Description: IfcText | null, UserDefinedPurpose: IfcLabel | null, InternalLocation: IfcLabel | null, AddressLines: IfcLabel[] | null, PostalBox: IfcLabel | null, Town: IfcLabel | null, Region: IfcLabel | null, PostalCode: IfcLabel | null, Country: IfcLabel | null);
    expressID: number;
    type: number;
    Purpose: IfcAddressTypeEnum | null;
    Description: IfcText | null;
    UserDefinedPurpose: IfcLabel | null;
    InternalLocation: IfcLabel | null;
    AddressLines: IfcLabel[] | null;
    PostalBox: IfcLabel | null;
    Town: IfcLabel | null;
    Region: IfcLabel | null;
    PostalCode: IfcLabel | null;
    Country: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPostalAddress;
    ToTape(): any[];
}
export declare class IfcPreDefinedColour {
    constructor(expressID: number, type: number, Name: IfcLabel);
    expressID: number;
    type: number;
    Name: IfcLabel;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPreDefinedColour;
    ToTape(): any[];
}
export declare class IfcPreDefinedCurveFont {
    constructor(expressID: number, type: number, Name: IfcLabel);
    expressID: number;
    type: number;
    Name: IfcLabel;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPreDefinedCurveFont;
    ToTape(): any[];
}
export declare class IfcPreDefinedItem {
    constructor(expressID: number, type: number, Name: IfcLabel);
    expressID: number;
    type: number;
    Name: IfcLabel;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPreDefinedItem;
    ToTape(): any[];
}
export declare class IfcPreDefinedProperties {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPreDefinedProperties;
    ToTape(): any[];
}
export declare class IfcPreDefinedPropertySet {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPreDefinedPropertySet;
    ToTape(): any[];
}
export declare class IfcPreDefinedTextFont {
    constructor(expressID: number, type: number, Name: IfcLabel);
    expressID: number;
    type: number;
    Name: IfcLabel;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPreDefinedTextFont;
    ToTape(): any[];
}
export declare class IfcPresentationItem {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPresentationItem;
    ToTape(): any[];
}
export declare class IfcPresentationLayerAssignment {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, AssignedItems: IfcLayeredItem[], Identifier: IfcIdentifier | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    AssignedItems: IfcLayeredItem[];
    Identifier: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPresentationLayerAssignment;
    ToTape(): any[];
}
export declare class IfcPresentationLayerWithStyle {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, AssignedItems: IfcLayeredItem[], Identifier: IfcIdentifier | null, LayerOn: IfcLogical, LayerFrozen: IfcLogical, LayerBlocked: IfcLogical, LayerStyles: (Handle<IfcPresentationStyle> | IfcPresentationStyle)[]);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    AssignedItems: IfcLayeredItem[];
    Identifier: IfcIdentifier | null;
    LayerOn: IfcLogical;
    LayerFrozen: IfcLogical;
    LayerBlocked: IfcLogical;
    LayerStyles: (Handle<IfcPresentationStyle> | IfcPresentationStyle)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcPresentationLayerWithStyle;
    ToTape(): any[];
}
export declare class IfcPresentationStyle {
    constructor(expressID: number, type: number, Name: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPresentationStyle;
    ToTape(): any[];
}
export declare class IfcPresentationStyleAssignment {
    constructor(expressID: number, type: number, Styles: IfcPresentationStyleSelect[]);
    expressID: number;
    type: number;
    Styles: IfcPresentationStyleSelect[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcPresentationStyleAssignment;
    ToTape(): any[];
}
export declare class IfcProcedure {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, PredefinedType: IfcProcedureTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    PredefinedType: IfcProcedureTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProcedure;
    ToTape(): any[];
}
export declare class IfcProcedureType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, ProcessType: IfcLabel | null, PredefinedType: IfcProcedureTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    ProcessType: IfcLabel | null;
    PredefinedType: IfcProcedureTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProcedureType;
    ToTape(): any[];
}
export declare class IfcProcess {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProcess;
    ToTape(): any[];
}
export declare class IfcProduct {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProduct;
    ToTape(): any[];
}
export declare class IfcProductDefinitionShape {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, Representations: (Handle<IfcRepresentation> | IfcRepresentation)[]);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    Representations: (Handle<IfcRepresentation> | IfcRepresentation)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcProductDefinitionShape;
    ToTape(): any[];
}
export declare class IfcProductRepresentation {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, Representations: (Handle<IfcRepresentation> | IfcRepresentation)[]);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    Representations: (Handle<IfcRepresentation> | IfcRepresentation)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcProductRepresentation;
    ToTape(): any[];
}
export declare class IfcProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProfileDef;
    ToTape(): any[];
}
export declare class IfcProfileProperties {
    constructor(expressID: number, type: number, Name: IfcIdentifier | null, Description: IfcText | null, Properties: (Handle<IfcProperty> | IfcProperty)[], ProfileDefinition: (Handle<IfcProfileDef> | IfcProfileDef));
    expressID: number;
    type: number;
    Name: IfcIdentifier | null;
    Description: IfcText | null;
    Properties: (Handle<IfcProperty> | IfcProperty)[];
    ProfileDefinition: (Handle<IfcProfileDef> | IfcProfileDef);
    static FromTape(expressID: number, type: number, tape: any[]): IfcProfileProperties;
    ToTape(): any[];
}
export declare class IfcProject {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, LongName: IfcLabel | null, Phase: IfcLabel | null, RepresentationContexts: (Handle<IfcRepresentationContext> | IfcRepresentationContext)[] | null, UnitsInContext: (Handle<IfcUnitAssignment> | IfcUnitAssignment) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    LongName: IfcLabel | null;
    Phase: IfcLabel | null;
    RepresentationContexts: (Handle<IfcRepresentationContext> | IfcRepresentationContext)[] | null;
    UnitsInContext: (Handle<IfcUnitAssignment> | IfcUnitAssignment) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProject;
    ToTape(): any[];
}
export declare class IfcProjectLibrary {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, LongName: IfcLabel | null, Phase: IfcLabel | null, RepresentationContexts: (Handle<IfcRepresentationContext> | IfcRepresentationContext)[] | null, UnitsInContext: (Handle<IfcUnitAssignment> | IfcUnitAssignment) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    LongName: IfcLabel | null;
    Phase: IfcLabel | null;
    RepresentationContexts: (Handle<IfcRepresentationContext> | IfcRepresentationContext)[] | null;
    UnitsInContext: (Handle<IfcUnitAssignment> | IfcUnitAssignment) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProjectLibrary;
    ToTape(): any[];
}
export declare class IfcProjectOrder {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, PredefinedType: IfcProjectOrderTypeEnum | null, Status: IfcLabel | null, LongDescription: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    PredefinedType: IfcProjectOrderTypeEnum | null;
    Status: IfcLabel | null;
    LongDescription: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProjectOrder;
    ToTape(): any[];
}
export declare class IfcProjectedCRS {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, GeodeticDatum: IfcIdentifier | null, VerticalDatum: IfcIdentifier | null, MapProjection: IfcIdentifier | null, MapZone: IfcIdentifier | null, MapUnit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    GeodeticDatum: IfcIdentifier | null;
    VerticalDatum: IfcIdentifier | null;
    MapProjection: IfcIdentifier | null;
    MapZone: IfcIdentifier | null;
    MapUnit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProjectedCRS;
    ToTape(): any[];
}
export declare class IfcProjectionElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcProjectionElementTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcProjectionElementTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProjectionElement;
    ToTape(): any[];
}
export declare class IfcProperty {
    constructor(expressID: number, type: number, Name: IfcIdentifier, Description: IfcText | null);
    expressID: number;
    type: number;
    Name: IfcIdentifier;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProperty;
    ToTape(): any[];
}
export declare class IfcPropertyAbstraction {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertyAbstraction;
    ToTape(): any[];
}
export declare class IfcPropertyBoundedValue {
    constructor(expressID: number, type: number, Name: IfcIdentifier, Description: IfcText | null, UpperBoundValue: IfcValue | null, LowerBoundValue: IfcValue | null, Unit: IfcUnit | null, SetPointValue: IfcValue | null);
    expressID: number;
    type: number;
    Name: IfcIdentifier;
    Description: IfcText | null;
    UpperBoundValue: IfcValue | null;
    LowerBoundValue: IfcValue | null;
    Unit: IfcUnit | null;
    SetPointValue: IfcValue | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertyBoundedValue;
    ToTape(): any[];
}
export declare class IfcPropertyDefinition {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertyDefinition;
    ToTape(): any[];
}
export declare class IfcPropertyDependencyRelationship {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, DependingProperty: (Handle<IfcProperty> | IfcProperty), DependantProperty: (Handle<IfcProperty> | IfcProperty), Expression: IfcText | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    DependingProperty: (Handle<IfcProperty> | IfcProperty);
    DependantProperty: (Handle<IfcProperty> | IfcProperty);
    Expression: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertyDependencyRelationship;
    ToTape(): any[];
}
export declare class IfcPropertyEnumeratedValue {
    constructor(expressID: number, type: number, Name: IfcIdentifier, Description: IfcText | null, EnumerationValues: IfcValue[] | null, EnumerationReference: (Handle<IfcPropertyEnumeration> | IfcPropertyEnumeration) | null);
    expressID: number;
    type: number;
    Name: IfcIdentifier;
    Description: IfcText | null;
    EnumerationValues: IfcValue[] | null;
    EnumerationReference: (Handle<IfcPropertyEnumeration> | IfcPropertyEnumeration) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertyEnumeratedValue;
    ToTape(): any[];
}
export declare class IfcPropertyEnumeration {
    constructor(expressID: number, type: number, Name: IfcLabel, EnumerationValues: IfcValue[], Unit: IfcUnit | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    EnumerationValues: IfcValue[];
    Unit: IfcUnit | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertyEnumeration;
    ToTape(): any[];
}
export declare class IfcPropertyListValue {
    constructor(expressID: number, type: number, Name: IfcIdentifier, Description: IfcText | null, ListValues: IfcValue[] | null, Unit: IfcUnit | null);
    expressID: number;
    type: number;
    Name: IfcIdentifier;
    Description: IfcText | null;
    ListValues: IfcValue[] | null;
    Unit: IfcUnit | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertyListValue;
    ToTape(): any[];
}
export declare class IfcPropertyReferenceValue {
    constructor(expressID: number, type: number, Name: IfcIdentifier, Description: IfcText | null, UsageName: IfcText | null, PropertyReference: IfcObjectReferenceSelect | null);
    expressID: number;
    type: number;
    Name: IfcIdentifier;
    Description: IfcText | null;
    UsageName: IfcText | null;
    PropertyReference: IfcObjectReferenceSelect | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertyReferenceValue;
    ToTape(): any[];
}
export declare class IfcPropertySet {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, HasProperties: (Handle<IfcProperty> | IfcProperty)[]);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    HasProperties: (Handle<IfcProperty> | IfcProperty)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertySet;
    ToTape(): any[];
}
export declare class IfcPropertySetDefinition {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertySetDefinition;
    ToTape(): any[];
}
export declare class IfcPropertySetTemplate {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, TemplateType: IfcPropertySetTemplateTypeEnum | null, ApplicableEntity: IfcIdentifier | null, HasPropertyTemplates: (Handle<IfcPropertyTemplate> | IfcPropertyTemplate)[]);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    TemplateType: IfcPropertySetTemplateTypeEnum | null;
    ApplicableEntity: IfcIdentifier | null;
    HasPropertyTemplates: (Handle<IfcPropertyTemplate> | IfcPropertyTemplate)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertySetTemplate;
    ToTape(): any[];
}
export declare class IfcPropertySingleValue {
    constructor(expressID: number, type: number, Name: IfcIdentifier, Description: IfcText | null, NominalValue: IfcValue | null, Unit: IfcUnit | null);
    expressID: number;
    type: number;
    Name: IfcIdentifier;
    Description: IfcText | null;
    NominalValue: IfcValue | null;
    Unit: IfcUnit | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertySingleValue;
    ToTape(): any[];
}
export declare class IfcPropertyTableValue {
    constructor(expressID: number, type: number, Name: IfcIdentifier, Description: IfcText | null, DefiningValues: IfcValue[] | null, DefinedValues: IfcValue[] | null, Expression: IfcText | null, DefiningUnit: IfcUnit | null, DefinedUnit: IfcUnit | null, CurveInterpolation: IfcCurveInterpolationEnum | null);
    expressID: number;
    type: number;
    Name: IfcIdentifier;
    Description: IfcText | null;
    DefiningValues: IfcValue[] | null;
    DefinedValues: IfcValue[] | null;
    Expression: IfcText | null;
    DefiningUnit: IfcUnit | null;
    DefinedUnit: IfcUnit | null;
    CurveInterpolation: IfcCurveInterpolationEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertyTableValue;
    ToTape(): any[];
}
export declare class IfcPropertyTemplate {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertyTemplate;
    ToTape(): any[];
}
export declare class IfcPropertyTemplateDefinition {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPropertyTemplateDefinition;
    ToTape(): any[];
}
export declare class IfcProtectiveDevice {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcProtectiveDeviceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcProtectiveDeviceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProtectiveDevice;
    ToTape(): any[];
}
export declare class IfcProtectiveDeviceTrippingUnit {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcProtectiveDeviceTrippingUnitTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcProtectiveDeviceTrippingUnitTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProtectiveDeviceTrippingUnit;
    ToTape(): any[];
}
export declare class IfcProtectiveDeviceTrippingUnitType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcProtectiveDeviceTrippingUnitTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcProtectiveDeviceTrippingUnitTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProtectiveDeviceTrippingUnitType;
    ToTape(): any[];
}
export declare class IfcProtectiveDeviceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcProtectiveDeviceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcProtectiveDeviceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProtectiveDeviceType;
    ToTape(): any[];
}
export declare class IfcProxy {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, ProxyType: IfcObjectTypeEnum, Tag: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    ProxyType: IfcObjectTypeEnum;
    Tag: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcProxy;
    ToTape(): any[];
}
export declare class IfcPump {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcPumpTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcPumpTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPump;
    ToTape(): any[];
}
export declare class IfcPumpType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcPumpTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcPumpTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcPumpType;
    ToTape(): any[];
}
export declare class IfcQuantityArea {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null, AreaValue: IfcAreaMeasure, Formula: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null;
    AreaValue: IfcAreaMeasure;
    Formula: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcQuantityArea;
    ToTape(): any[];
}
export declare class IfcQuantityCount {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null, CountValue: IfcCountMeasure, Formula: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null;
    CountValue: IfcCountMeasure;
    Formula: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcQuantityCount;
    ToTape(): any[];
}
export declare class IfcQuantityLength {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null, LengthValue: IfcLengthMeasure, Formula: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null;
    LengthValue: IfcLengthMeasure;
    Formula: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcQuantityLength;
    ToTape(): any[];
}
export declare class IfcQuantitySet {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcQuantitySet;
    ToTape(): any[];
}
export declare class IfcQuantityTime {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null, TimeValue: IfcTimeMeasure, Formula: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null;
    TimeValue: IfcTimeMeasure;
    Formula: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcQuantityTime;
    ToTape(): any[];
}
export declare class IfcQuantityVolume {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null, VolumeValue: IfcVolumeMeasure, Formula: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null;
    VolumeValue: IfcVolumeMeasure;
    Formula: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcQuantityVolume;
    ToTape(): any[];
}
export declare class IfcQuantityWeight {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null, WeightValue: IfcMassMeasure, Formula: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    Unit: (Handle<IfcNamedUnit> | IfcNamedUnit) | null;
    WeightValue: IfcMassMeasure;
    Formula: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcQuantityWeight;
    ToTape(): any[];
}
export declare class IfcRailing {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcRailingTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcRailingTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRailing;
    ToTape(): any[];
}
export declare class IfcRailingType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcRailingTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcRailingTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRailingType;
    ToTape(): any[];
}
export declare class IfcRamp {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcRampTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcRampTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRamp;
    ToTape(): any[];
}
export declare class IfcRampFlight {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcRampFlightTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcRampFlightTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRampFlight;
    ToTape(): any[];
}
export declare class IfcRampFlightType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcRampFlightTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcRampFlightTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRampFlightType;
    ToTape(): any[];
}
export declare class IfcRampType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcRampTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcRampTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRampType;
    ToTape(): any[];
}
export declare class IfcRationalBSplineCurveWithKnots {
    constructor(expressID: number, type: number, Degree: IfcInteger, ControlPointsList: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[], CurveForm: IfcBSplineCurveForm, ClosedCurve: IfcLogical, SelfIntersect: IfcLogical, KnotMultiplicities: IfcInteger[], Knots: IfcParameterValue[], KnotSpec: IfcKnotType, WeightsData: IfcReal[]);
    expressID: number;
    type: number;
    Degree: IfcInteger;
    ControlPointsList: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[];
    CurveForm: IfcBSplineCurveForm;
    ClosedCurve: IfcLogical;
    SelfIntersect: IfcLogical;
    KnotMultiplicities: IfcInteger[];
    Knots: IfcParameterValue[];
    KnotSpec: IfcKnotType;
    WeightsData: IfcReal[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcRationalBSplineCurveWithKnots;
    ToTape(): any[];
}
export declare class IfcRationalBSplineSurfaceWithKnots {
    constructor(expressID: number, type: number, UDegree: IfcInteger, VDegree: IfcInteger, ControlPointsList: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[], SurfaceForm: IfcBSplineSurfaceForm, UClosed: IfcLogical, VClosed: IfcLogical, SelfIntersect: IfcLogical, UMultiplicities: IfcInteger[], VMultiplicities: IfcInteger[], UKnots: IfcParameterValue[], VKnots: IfcParameterValue[], KnotSpec: IfcKnotType, WeightsData: IfcReal[]);
    expressID: number;
    type: number;
    UDegree: IfcInteger;
    VDegree: IfcInteger;
    ControlPointsList: (Handle<IfcCartesianPoint> | IfcCartesianPoint)[];
    SurfaceForm: IfcBSplineSurfaceForm;
    UClosed: IfcLogical;
    VClosed: IfcLogical;
    SelfIntersect: IfcLogical;
    UMultiplicities: IfcInteger[];
    VMultiplicities: IfcInteger[];
    UKnots: IfcParameterValue[];
    VKnots: IfcParameterValue[];
    KnotSpec: IfcKnotType;
    WeightsData: IfcReal[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcRationalBSplineSurfaceWithKnots;
    ToTape(): any[];
}
export declare class IfcRectangleHollowProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, XDim: IfcPositiveLengthMeasure, YDim: IfcPositiveLengthMeasure, WallThickness: IfcPositiveLengthMeasure, InnerFilletRadius: IfcNonNegativeLengthMeasure | null, OuterFilletRadius: IfcNonNegativeLengthMeasure | null);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    XDim: IfcPositiveLengthMeasure;
    YDim: IfcPositiveLengthMeasure;
    WallThickness: IfcPositiveLengthMeasure;
    InnerFilletRadius: IfcNonNegativeLengthMeasure | null;
    OuterFilletRadius: IfcNonNegativeLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRectangleHollowProfileDef;
    ToTape(): any[];
}
export declare class IfcRectangleProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, XDim: IfcPositiveLengthMeasure, YDim: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    XDim: IfcPositiveLengthMeasure;
    YDim: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRectangleProfileDef;
    ToTape(): any[];
}
export declare class IfcRectangularPyramid {
    constructor(expressID: number, type: number, Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D), XLength: IfcPositiveLengthMeasure, YLength: IfcPositiveLengthMeasure, Height: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
    XLength: IfcPositiveLengthMeasure;
    YLength: IfcPositiveLengthMeasure;
    Height: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRectangularPyramid;
    ToTape(): any[];
}
export declare class IfcRectangularTrimmedSurface {
    constructor(expressID: number, type: number, BasisSurface: (Handle<IfcSurface> | IfcSurface), U1: IfcParameterValue, V1: IfcParameterValue, U2: IfcParameterValue, V2: IfcParameterValue, Usense: IfcBoolean, Vsense: IfcBoolean);
    expressID: number;
    type: number;
    BasisSurface: (Handle<IfcSurface> | IfcSurface);
    U1: IfcParameterValue;
    V1: IfcParameterValue;
    U2: IfcParameterValue;
    V2: IfcParameterValue;
    Usense: IfcBoolean;
    Vsense: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRectangularTrimmedSurface;
    ToTape(): any[];
}
export declare class IfcRecurrencePattern {
    constructor(expressID: number, type: number, RecurrenceType: IfcRecurrenceTypeEnum, DayComponent: IfcDayInMonthNumber[] | null, WeekdayComponent: IfcDayInWeekNumber[] | null, MonthComponent: IfcMonthInYearNumber[] | null, Position: IfcInteger | null, Interval: IfcInteger | null, Occurrences: IfcInteger | null, TimePeriods: (Handle<IfcTimePeriod> | IfcTimePeriod)[] | null);
    expressID: number;
    type: number;
    RecurrenceType: IfcRecurrenceTypeEnum;
    DayComponent: IfcDayInMonthNumber[] | null;
    WeekdayComponent: IfcDayInWeekNumber[] | null;
    MonthComponent: IfcMonthInYearNumber[] | null;
    Position: IfcInteger | null;
    Interval: IfcInteger | null;
    Occurrences: IfcInteger | null;
    TimePeriods: (Handle<IfcTimePeriod> | IfcTimePeriod)[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRecurrencePattern;
    ToTape(): any[];
}
export declare class IfcReference {
    constructor(expressID: number, type: number, TypeIdentifier: IfcIdentifier | null, AttributeIdentifier: IfcIdentifier | null, InstanceName: IfcLabel | null, ListPositions: IfcInteger[] | null, InnerReference: (Handle<IfcReference> | IfcReference) | null);
    expressID: number;
    type: number;
    TypeIdentifier: IfcIdentifier | null;
    AttributeIdentifier: IfcIdentifier | null;
    InstanceName: IfcLabel | null;
    ListPositions: IfcInteger[] | null;
    InnerReference: (Handle<IfcReference> | IfcReference) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcReference;
    ToTape(): any[];
}
export declare class IfcReferent {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, PredefinedType: IfcReferentTypeEnum | null, RestartDistance: IfcLengthMeasure | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    PredefinedType: IfcReferentTypeEnum | null;
    RestartDistance: IfcLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcReferent;
    ToTape(): any[];
}
export declare class IfcRegularTimeSeries {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, StartTime: IfcDateTime, EndTime: IfcDateTime, TimeSeriesDataType: IfcTimeSeriesDataTypeEnum, DataOrigin: IfcDataOriginEnum, UserDefinedDataOrigin: IfcLabel | null, Unit: IfcUnit | null, TimeStep: IfcTimeMeasure, Values: (Handle<IfcTimeSeriesValue> | IfcTimeSeriesValue)[]);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    StartTime: IfcDateTime;
    EndTime: IfcDateTime;
    TimeSeriesDataType: IfcTimeSeriesDataTypeEnum;
    DataOrigin: IfcDataOriginEnum;
    UserDefinedDataOrigin: IfcLabel | null;
    Unit: IfcUnit | null;
    TimeStep: IfcTimeMeasure;
    Values: (Handle<IfcTimeSeriesValue> | IfcTimeSeriesValue)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcRegularTimeSeries;
    ToTape(): any[];
}
export declare class IfcReinforcementBarProperties {
    constructor(expressID: number, type: number, TotalCrossSectionArea: IfcAreaMeasure, SteelGrade: IfcLabel, BarSurface: IfcReinforcingBarSurfaceEnum | null, EffectiveDepth: IfcLengthMeasure | null, NominalBarDiameter: IfcPositiveLengthMeasure | null, BarCount: IfcCountMeasure | null);
    expressID: number;
    type: number;
    TotalCrossSectionArea: IfcAreaMeasure;
    SteelGrade: IfcLabel;
    BarSurface: IfcReinforcingBarSurfaceEnum | null;
    EffectiveDepth: IfcLengthMeasure | null;
    NominalBarDiameter: IfcPositiveLengthMeasure | null;
    BarCount: IfcCountMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcReinforcementBarProperties;
    ToTape(): any[];
}
export declare class IfcReinforcementDefinitionProperties {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, DefinitionType: IfcLabel | null, ReinforcementSectionDefinitions: (Handle<IfcSectionReinforcementProperties> | IfcSectionReinforcementProperties)[]);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    DefinitionType: IfcLabel | null;
    ReinforcementSectionDefinitions: (Handle<IfcSectionReinforcementProperties> | IfcSectionReinforcementProperties)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcReinforcementDefinitionProperties;
    ToTape(): any[];
}
export declare class IfcReinforcingBar {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, SteelGrade: IfcLabel | null, NominalDiameter: IfcPositiveLengthMeasure | null, CrossSectionArea: IfcAreaMeasure | null, BarLength: IfcPositiveLengthMeasure | null, PredefinedType: IfcReinforcingBarTypeEnum | null, BarSurface: IfcReinforcingBarSurfaceEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    SteelGrade: IfcLabel | null;
    NominalDiameter: IfcPositiveLengthMeasure | null;
    CrossSectionArea: IfcAreaMeasure | null;
    BarLength: IfcPositiveLengthMeasure | null;
    PredefinedType: IfcReinforcingBarTypeEnum | null;
    BarSurface: IfcReinforcingBarSurfaceEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcReinforcingBar;
    ToTape(): any[];
}
export declare class IfcReinforcingBarType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcReinforcingBarTypeEnum, NominalDiameter: IfcPositiveLengthMeasure | null, CrossSectionArea: IfcAreaMeasure | null, BarLength: IfcPositiveLengthMeasure | null, BarSurface: IfcReinforcingBarSurfaceEnum | null, BendingShapeCode: IfcLabel | null, BendingParameters: IfcBendingParameterSelect[] | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcReinforcingBarTypeEnum;
    NominalDiameter: IfcPositiveLengthMeasure | null;
    CrossSectionArea: IfcAreaMeasure | null;
    BarLength: IfcPositiveLengthMeasure | null;
    BarSurface: IfcReinforcingBarSurfaceEnum | null;
    BendingShapeCode: IfcLabel | null;
    BendingParameters: IfcBendingParameterSelect[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcReinforcingBarType;
    ToTape(): any[];
}
export declare class IfcReinforcingElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, SteelGrade: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    SteelGrade: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcReinforcingElement;
    ToTape(): any[];
}
export declare class IfcReinforcingElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcReinforcingElementType;
    ToTape(): any[];
}
export declare class IfcReinforcingMesh {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, SteelGrade: IfcLabel | null, MeshLength: IfcPositiveLengthMeasure | null, MeshWidth: IfcPositiveLengthMeasure | null, LongitudinalBarNominalDiameter: IfcPositiveLengthMeasure | null, TransverseBarNominalDiameter: IfcPositiveLengthMeasure | null, LongitudinalBarCrossSectionArea: IfcAreaMeasure | null, TransverseBarCrossSectionArea: IfcAreaMeasure | null, LongitudinalBarSpacing: IfcPositiveLengthMeasure | null, TransverseBarSpacing: IfcPositiveLengthMeasure | null, PredefinedType: IfcReinforcingMeshTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    SteelGrade: IfcLabel | null;
    MeshLength: IfcPositiveLengthMeasure | null;
    MeshWidth: IfcPositiveLengthMeasure | null;
    LongitudinalBarNominalDiameter: IfcPositiveLengthMeasure | null;
    TransverseBarNominalDiameter: IfcPositiveLengthMeasure | null;
    LongitudinalBarCrossSectionArea: IfcAreaMeasure | null;
    TransverseBarCrossSectionArea: IfcAreaMeasure | null;
    LongitudinalBarSpacing: IfcPositiveLengthMeasure | null;
    TransverseBarSpacing: IfcPositiveLengthMeasure | null;
    PredefinedType: IfcReinforcingMeshTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcReinforcingMesh;
    ToTape(): any[];
}
export declare class IfcReinforcingMeshType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcReinforcingMeshTypeEnum, MeshLength: IfcPositiveLengthMeasure | null, MeshWidth: IfcPositiveLengthMeasure | null, LongitudinalBarNominalDiameter: IfcPositiveLengthMeasure | null, TransverseBarNominalDiameter: IfcPositiveLengthMeasure | null, LongitudinalBarCrossSectionArea: IfcAreaMeasure | null, TransverseBarCrossSectionArea: IfcAreaMeasure | null, LongitudinalBarSpacing: IfcPositiveLengthMeasure | null, TransverseBarSpacing: IfcPositiveLengthMeasure | null, BendingShapeCode: IfcLabel | null, BendingParameters: IfcBendingParameterSelect[] | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcReinforcingMeshTypeEnum;
    MeshLength: IfcPositiveLengthMeasure | null;
    MeshWidth: IfcPositiveLengthMeasure | null;
    LongitudinalBarNominalDiameter: IfcPositiveLengthMeasure | null;
    TransverseBarNominalDiameter: IfcPositiveLengthMeasure | null;
    LongitudinalBarCrossSectionArea: IfcAreaMeasure | null;
    TransverseBarCrossSectionArea: IfcAreaMeasure | null;
    LongitudinalBarSpacing: IfcPositiveLengthMeasure | null;
    TransverseBarSpacing: IfcPositiveLengthMeasure | null;
    BendingShapeCode: IfcLabel | null;
    BendingParameters: IfcBendingParameterSelect[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcReinforcingMeshType;
    ToTape(): any[];
}
export declare class IfcRelAggregates {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingObject: (Handle<IfcObjectDefinition> | IfcObjectDefinition), RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[]);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingObject: (Handle<IfcObjectDefinition> | IfcObjectDefinition);
    RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAggregates;
    ToTape(): any[];
}
export declare class IfcRelAssigns {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[], RelatedObjectsType: IfcObjectTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[];
    RelatedObjectsType: IfcObjectTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssigns;
    ToTape(): any[];
}
export declare class IfcRelAssignsToActor {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[], RelatedObjectsType: IfcObjectTypeEnum | null, RelatingActor: (Handle<IfcActor> | IfcActor), ActingRole: (Handle<IfcActorRole> | IfcActorRole) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[];
    RelatedObjectsType: IfcObjectTypeEnum | null;
    RelatingActor: (Handle<IfcActor> | IfcActor);
    ActingRole: (Handle<IfcActorRole> | IfcActorRole) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssignsToActor;
    ToTape(): any[];
}
export declare class IfcRelAssignsToControl {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[], RelatedObjectsType: IfcObjectTypeEnum | null, RelatingControl: (Handle<IfcControl> | IfcControl));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[];
    RelatedObjectsType: IfcObjectTypeEnum | null;
    RelatingControl: (Handle<IfcControl> | IfcControl);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssignsToControl;
    ToTape(): any[];
}
export declare class IfcRelAssignsToGroup {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[], RelatedObjectsType: IfcObjectTypeEnum | null, RelatingGroup: (Handle<IfcGroup> | IfcGroup));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[];
    RelatedObjectsType: IfcObjectTypeEnum | null;
    RelatingGroup: (Handle<IfcGroup> | IfcGroup);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssignsToGroup;
    ToTape(): any[];
}
export declare class IfcRelAssignsToGroupByFactor {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[], RelatedObjectsType: IfcObjectTypeEnum | null, RelatingGroup: (Handle<IfcGroup> | IfcGroup), Factor: IfcRatioMeasure);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[];
    RelatedObjectsType: IfcObjectTypeEnum | null;
    RelatingGroup: (Handle<IfcGroup> | IfcGroup);
    Factor: IfcRatioMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssignsToGroupByFactor;
    ToTape(): any[];
}
export declare class IfcRelAssignsToProcess {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[], RelatedObjectsType: IfcObjectTypeEnum | null, RelatingProcess: IfcProcessSelect, QuantityInProcess: (Handle<IfcMeasureWithUnit> | IfcMeasureWithUnit) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[];
    RelatedObjectsType: IfcObjectTypeEnum | null;
    RelatingProcess: IfcProcessSelect;
    QuantityInProcess: (Handle<IfcMeasureWithUnit> | IfcMeasureWithUnit) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssignsToProcess;
    ToTape(): any[];
}
export declare class IfcRelAssignsToProduct {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[], RelatedObjectsType: IfcObjectTypeEnum | null, RelatingProduct: IfcProductSelect);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[];
    RelatedObjectsType: IfcObjectTypeEnum | null;
    RelatingProduct: IfcProductSelect;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssignsToProduct;
    ToTape(): any[];
}
export declare class IfcRelAssignsToResource {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[], RelatedObjectsType: IfcObjectTypeEnum | null, RelatingResource: IfcResourceSelect);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[];
    RelatedObjectsType: IfcObjectTypeEnum | null;
    RelatingResource: IfcResourceSelect;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssignsToResource;
    ToTape(): any[];
}
export declare class IfcRelAssociates {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: IfcDefinitionSelect[]);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: IfcDefinitionSelect[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssociates;
    ToTape(): any[];
}
export declare class IfcRelAssociatesApproval {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: IfcDefinitionSelect[], RelatingApproval: (Handle<IfcApproval> | IfcApproval));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: IfcDefinitionSelect[];
    RelatingApproval: (Handle<IfcApproval> | IfcApproval);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssociatesApproval;
    ToTape(): any[];
}
export declare class IfcRelAssociatesClassification {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: IfcDefinitionSelect[], RelatingClassification: IfcClassificationSelect);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: IfcDefinitionSelect[];
    RelatingClassification: IfcClassificationSelect;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssociatesClassification;
    ToTape(): any[];
}
export declare class IfcRelAssociatesConstraint {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: IfcDefinitionSelect[], Intent: IfcLabel | null, RelatingConstraint: (Handle<IfcConstraint> | IfcConstraint));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: IfcDefinitionSelect[];
    Intent: IfcLabel | null;
    RelatingConstraint: (Handle<IfcConstraint> | IfcConstraint);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssociatesConstraint;
    ToTape(): any[];
}
export declare class IfcRelAssociatesDocument {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: IfcDefinitionSelect[], RelatingDocument: IfcDocumentSelect);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: IfcDefinitionSelect[];
    RelatingDocument: IfcDocumentSelect;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssociatesDocument;
    ToTape(): any[];
}
export declare class IfcRelAssociatesLibrary {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: IfcDefinitionSelect[], RelatingLibrary: IfcLibrarySelect);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: IfcDefinitionSelect[];
    RelatingLibrary: IfcLibrarySelect;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssociatesLibrary;
    ToTape(): any[];
}
export declare class IfcRelAssociatesMaterial {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: IfcDefinitionSelect[], RelatingMaterial: IfcMaterialSelect);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: IfcDefinitionSelect[];
    RelatingMaterial: IfcMaterialSelect;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelAssociatesMaterial;
    ToTape(): any[];
}
export declare class IfcRelConnects {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelConnects;
    ToTape(): any[];
}
export declare class IfcRelConnectsElements {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ConnectionGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null, RelatingElement: (Handle<IfcElement> | IfcElement), RelatedElement: (Handle<IfcElement> | IfcElement));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ConnectionGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null;
    RelatingElement: (Handle<IfcElement> | IfcElement);
    RelatedElement: (Handle<IfcElement> | IfcElement);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelConnectsElements;
    ToTape(): any[];
}
export declare class IfcRelConnectsPathElements {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ConnectionGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null, RelatingElement: (Handle<IfcElement> | IfcElement), RelatedElement: (Handle<IfcElement> | IfcElement), RelatingPriorities: IfcInteger[], RelatedPriorities: IfcInteger[], RelatedConnectionType: IfcConnectionTypeEnum, RelatingConnectionType: IfcConnectionTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ConnectionGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null;
    RelatingElement: (Handle<IfcElement> | IfcElement);
    RelatedElement: (Handle<IfcElement> | IfcElement);
    RelatingPriorities: IfcInteger[];
    RelatedPriorities: IfcInteger[];
    RelatedConnectionType: IfcConnectionTypeEnum;
    RelatingConnectionType: IfcConnectionTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelConnectsPathElements;
    ToTape(): any[];
}
export declare class IfcRelConnectsPortToElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingPort: (Handle<IfcPort> | IfcPort), RelatedElement: (Handle<IfcDistributionElement> | IfcDistributionElement));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingPort: (Handle<IfcPort> | IfcPort);
    RelatedElement: (Handle<IfcDistributionElement> | IfcDistributionElement);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelConnectsPortToElement;
    ToTape(): any[];
}
export declare class IfcRelConnectsPorts {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingPort: (Handle<IfcPort> | IfcPort), RelatedPort: (Handle<IfcPort> | IfcPort), RealizingElement: (Handle<IfcElement> | IfcElement) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingPort: (Handle<IfcPort> | IfcPort);
    RelatedPort: (Handle<IfcPort> | IfcPort);
    RealizingElement: (Handle<IfcElement> | IfcElement) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelConnectsPorts;
    ToTape(): any[];
}
export declare class IfcRelConnectsStructuralActivity {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingElement: IfcStructuralActivityAssignmentSelect, RelatedStructuralActivity: (Handle<IfcStructuralActivity> | IfcStructuralActivity));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingElement: IfcStructuralActivityAssignmentSelect;
    RelatedStructuralActivity: (Handle<IfcStructuralActivity> | IfcStructuralActivity);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelConnectsStructuralActivity;
    ToTape(): any[];
}
export declare class IfcRelConnectsStructuralMember {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingStructuralMember: (Handle<IfcStructuralMember> | IfcStructuralMember), RelatedStructuralConnection: (Handle<IfcStructuralConnection> | IfcStructuralConnection), AppliedCondition: (Handle<IfcBoundaryCondition> | IfcBoundaryCondition) | null, AdditionalConditions: (Handle<IfcStructuralConnectionCondition> | IfcStructuralConnectionCondition) | null, SupportedLength: IfcLengthMeasure | null, ConditionCoordinateSystem: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingStructuralMember: (Handle<IfcStructuralMember> | IfcStructuralMember);
    RelatedStructuralConnection: (Handle<IfcStructuralConnection> | IfcStructuralConnection);
    AppliedCondition: (Handle<IfcBoundaryCondition> | IfcBoundaryCondition) | null;
    AdditionalConditions: (Handle<IfcStructuralConnectionCondition> | IfcStructuralConnectionCondition) | null;
    SupportedLength: IfcLengthMeasure | null;
    ConditionCoordinateSystem: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelConnectsStructuralMember;
    ToTape(): any[];
}
export declare class IfcRelConnectsWithEccentricity {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingStructuralMember: (Handle<IfcStructuralMember> | IfcStructuralMember), RelatedStructuralConnection: (Handle<IfcStructuralConnection> | IfcStructuralConnection), AppliedCondition: (Handle<IfcBoundaryCondition> | IfcBoundaryCondition) | null, AdditionalConditions: (Handle<IfcStructuralConnectionCondition> | IfcStructuralConnectionCondition) | null, SupportedLength: IfcLengthMeasure | null, ConditionCoordinateSystem: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null, ConnectionConstraint: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingStructuralMember: (Handle<IfcStructuralMember> | IfcStructuralMember);
    RelatedStructuralConnection: (Handle<IfcStructuralConnection> | IfcStructuralConnection);
    AppliedCondition: (Handle<IfcBoundaryCondition> | IfcBoundaryCondition) | null;
    AdditionalConditions: (Handle<IfcStructuralConnectionCondition> | IfcStructuralConnectionCondition) | null;
    SupportedLength: IfcLengthMeasure | null;
    ConditionCoordinateSystem: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    ConnectionConstraint: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelConnectsWithEccentricity;
    ToTape(): any[];
}
export declare class IfcRelConnectsWithRealizingElements {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ConnectionGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null, RelatingElement: (Handle<IfcElement> | IfcElement), RelatedElement: (Handle<IfcElement> | IfcElement), RealizingElements: (Handle<IfcElement> | IfcElement)[], ConnectionType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ConnectionGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null;
    RelatingElement: (Handle<IfcElement> | IfcElement);
    RelatedElement: (Handle<IfcElement> | IfcElement);
    RealizingElements: (Handle<IfcElement> | IfcElement)[];
    ConnectionType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelConnectsWithRealizingElements;
    ToTape(): any[];
}
export declare class IfcRelContainedInSpatialStructure {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedElements: (Handle<IfcProduct> | IfcProduct)[], RelatingStructure: (Handle<IfcSpatialElement> | IfcSpatialElement));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedElements: (Handle<IfcProduct> | IfcProduct)[];
    RelatingStructure: (Handle<IfcSpatialElement> | IfcSpatialElement);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelContainedInSpatialStructure;
    ToTape(): any[];
}
export declare class IfcRelCoversBldgElements {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingBuildingElement: (Handle<IfcElement> | IfcElement), RelatedCoverings: (Handle<IfcCovering> | IfcCovering)[]);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingBuildingElement: (Handle<IfcElement> | IfcElement);
    RelatedCoverings: (Handle<IfcCovering> | IfcCovering)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelCoversBldgElements;
    ToTape(): any[];
}
export declare class IfcRelCoversSpaces {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingSpace: (Handle<IfcSpace> | IfcSpace), RelatedCoverings: (Handle<IfcCovering> | IfcCovering)[]);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingSpace: (Handle<IfcSpace> | IfcSpace);
    RelatedCoverings: (Handle<IfcCovering> | IfcCovering)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelCoversSpaces;
    ToTape(): any[];
}
export declare class IfcRelDeclares {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingContext: (Handle<IfcContext> | IfcContext), RelatedDefinitions: IfcDefinitionSelect[]);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingContext: (Handle<IfcContext> | IfcContext);
    RelatedDefinitions: IfcDefinitionSelect[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelDeclares;
    ToTape(): any[];
}
export declare class IfcRelDecomposes {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelDecomposes;
    ToTape(): any[];
}
export declare class IfcRelDefines {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelDefines;
    ToTape(): any[];
}
export declare class IfcRelDefinesByObject {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: (Handle<IfcObject> | IfcObject)[], RelatingObject: (Handle<IfcObject> | IfcObject));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: (Handle<IfcObject> | IfcObject)[];
    RelatingObject: (Handle<IfcObject> | IfcObject);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelDefinesByObject;
    ToTape(): any[];
}
export declare class IfcRelDefinesByProperties {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[], RelatingPropertyDefinition: IfcPropertySetDefinitionSelect);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[];
    RelatingPropertyDefinition: IfcPropertySetDefinitionSelect;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelDefinesByProperties;
    ToTape(): any[];
}
export declare class IfcRelDefinesByTemplate {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[], RelatingTemplate: (Handle<IfcPropertySetTemplate> | IfcPropertySetTemplate));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[];
    RelatingTemplate: (Handle<IfcPropertySetTemplate> | IfcPropertySetTemplate);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelDefinesByTemplate;
    ToTape(): any[];
}
export declare class IfcRelDefinesByType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedObjects: (Handle<IfcObject> | IfcObject)[], RelatingType: (Handle<IfcTypeObject> | IfcTypeObject));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedObjects: (Handle<IfcObject> | IfcObject)[];
    RelatingType: (Handle<IfcTypeObject> | IfcTypeObject);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelDefinesByType;
    ToTape(): any[];
}
export declare class IfcRelFillsElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingOpeningElement: (Handle<IfcOpeningElement> | IfcOpeningElement), RelatedBuildingElement: (Handle<IfcElement> | IfcElement));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingOpeningElement: (Handle<IfcOpeningElement> | IfcOpeningElement);
    RelatedBuildingElement: (Handle<IfcElement> | IfcElement);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelFillsElement;
    ToTape(): any[];
}
export declare class IfcRelFlowControlElements {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedControlElements: (Handle<IfcDistributionControlElement> | IfcDistributionControlElement)[], RelatingFlowElement: (Handle<IfcDistributionFlowElement> | IfcDistributionFlowElement));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedControlElements: (Handle<IfcDistributionControlElement> | IfcDistributionControlElement)[];
    RelatingFlowElement: (Handle<IfcDistributionFlowElement> | IfcDistributionFlowElement);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelFlowControlElements;
    ToTape(): any[];
}
export declare class IfcRelInterferesElements {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingElement: (Handle<IfcElement> | IfcElement), RelatedElement: (Handle<IfcElement> | IfcElement), InterferenceGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null, InterferenceType: IfcIdentifier | null, ImpliedOrder: boolean);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingElement: (Handle<IfcElement> | IfcElement);
    RelatedElement: (Handle<IfcElement> | IfcElement);
    InterferenceGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null;
    InterferenceType: IfcIdentifier | null;
    ImpliedOrder: boolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelInterferesElements;
    ToTape(): any[];
}
export declare class IfcRelNests {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingObject: (Handle<IfcObjectDefinition> | IfcObjectDefinition), RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[]);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingObject: (Handle<IfcObjectDefinition> | IfcObjectDefinition);
    RelatedObjects: (Handle<IfcObjectDefinition> | IfcObjectDefinition)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelNests;
    ToTape(): any[];
}
export declare class IfcRelPositions {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingPositioningElement: (Handle<IfcPositioningElement> | IfcPositioningElement), RelatedProducts: (Handle<IfcProduct> | IfcProduct)[]);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingPositioningElement: (Handle<IfcPositioningElement> | IfcPositioningElement);
    RelatedProducts: (Handle<IfcProduct> | IfcProduct)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelPositions;
    ToTape(): any[];
}
export declare class IfcRelProjectsElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingElement: (Handle<IfcElement> | IfcElement), RelatedFeatureElement: (Handle<IfcFeatureElementAddition> | IfcFeatureElementAddition));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingElement: (Handle<IfcElement> | IfcElement);
    RelatedFeatureElement: (Handle<IfcFeatureElementAddition> | IfcFeatureElementAddition);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelProjectsElement;
    ToTape(): any[];
}
export declare class IfcRelReferencedInSpatialStructure {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatedElements: (Handle<IfcProduct> | IfcProduct)[], RelatingStructure: (Handle<IfcSpatialElement> | IfcSpatialElement));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedElements: (Handle<IfcProduct> | IfcProduct)[];
    RelatingStructure: (Handle<IfcSpatialElement> | IfcSpatialElement);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelReferencedInSpatialStructure;
    ToTape(): any[];
}
export declare class IfcRelSequence {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingProcess: (Handle<IfcProcess> | IfcProcess), RelatedProcess: (Handle<IfcProcess> | IfcProcess), TimeLag: (Handle<IfcLagTime> | IfcLagTime) | null, SequenceType: IfcSequenceEnum | null, UserDefinedSequenceType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingProcess: (Handle<IfcProcess> | IfcProcess);
    RelatedProcess: (Handle<IfcProcess> | IfcProcess);
    TimeLag: (Handle<IfcLagTime> | IfcLagTime) | null;
    SequenceType: IfcSequenceEnum | null;
    UserDefinedSequenceType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelSequence;
    ToTape(): any[];
}
export declare class IfcRelServicesBuildings {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingSystem: (Handle<IfcSystem> | IfcSystem), RelatedBuildings: (Handle<IfcSpatialElement> | IfcSpatialElement)[]);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingSystem: (Handle<IfcSystem> | IfcSystem);
    RelatedBuildings: (Handle<IfcSpatialElement> | IfcSpatialElement)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelServicesBuildings;
    ToTape(): any[];
}
export declare class IfcRelSpaceBoundary {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingSpace: IfcSpaceBoundarySelect, RelatedBuildingElement: (Handle<IfcElement> | IfcElement), ConnectionGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null, PhysicalOrVirtualBoundary: IfcPhysicalOrVirtualEnum, InternalOrExternalBoundary: IfcInternalOrExternalEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingSpace: IfcSpaceBoundarySelect;
    RelatedBuildingElement: (Handle<IfcElement> | IfcElement);
    ConnectionGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null;
    PhysicalOrVirtualBoundary: IfcPhysicalOrVirtualEnum;
    InternalOrExternalBoundary: IfcInternalOrExternalEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelSpaceBoundary;
    ToTape(): any[];
}
export declare class IfcRelSpaceBoundary1stLevel {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingSpace: IfcSpaceBoundarySelect, RelatedBuildingElement: (Handle<IfcElement> | IfcElement), ConnectionGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null, PhysicalOrVirtualBoundary: IfcPhysicalOrVirtualEnum, InternalOrExternalBoundary: IfcInternalOrExternalEnum, ParentBoundary: (Handle<IfcRelSpaceBoundary1stLevel> | IfcRelSpaceBoundary1stLevel) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingSpace: IfcSpaceBoundarySelect;
    RelatedBuildingElement: (Handle<IfcElement> | IfcElement);
    ConnectionGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null;
    PhysicalOrVirtualBoundary: IfcPhysicalOrVirtualEnum;
    InternalOrExternalBoundary: IfcInternalOrExternalEnum;
    ParentBoundary: (Handle<IfcRelSpaceBoundary1stLevel> | IfcRelSpaceBoundary1stLevel) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelSpaceBoundary1stLevel;
    ToTape(): any[];
}
export declare class IfcRelSpaceBoundary2ndLevel {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingSpace: IfcSpaceBoundarySelect, RelatedBuildingElement: (Handle<IfcElement> | IfcElement), ConnectionGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null, PhysicalOrVirtualBoundary: IfcPhysicalOrVirtualEnum, InternalOrExternalBoundary: IfcInternalOrExternalEnum, ParentBoundary: (Handle<IfcRelSpaceBoundary1stLevel> | IfcRelSpaceBoundary1stLevel) | null, CorrespondingBoundary: (Handle<IfcRelSpaceBoundary2ndLevel> | IfcRelSpaceBoundary2ndLevel) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingSpace: IfcSpaceBoundarySelect;
    RelatedBuildingElement: (Handle<IfcElement> | IfcElement);
    ConnectionGeometry: (Handle<IfcConnectionGeometry> | IfcConnectionGeometry) | null;
    PhysicalOrVirtualBoundary: IfcPhysicalOrVirtualEnum;
    InternalOrExternalBoundary: IfcInternalOrExternalEnum;
    ParentBoundary: (Handle<IfcRelSpaceBoundary1stLevel> | IfcRelSpaceBoundary1stLevel) | null;
    CorrespondingBoundary: (Handle<IfcRelSpaceBoundary2ndLevel> | IfcRelSpaceBoundary2ndLevel) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelSpaceBoundary2ndLevel;
    ToTape(): any[];
}
export declare class IfcRelVoidsElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, RelatingBuildingElement: (Handle<IfcElement> | IfcElement), RelatedOpeningElement: (Handle<IfcFeatureElementSubtraction> | IfcFeatureElementSubtraction));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingBuildingElement: (Handle<IfcElement> | IfcElement);
    RelatedOpeningElement: (Handle<IfcFeatureElementSubtraction> | IfcFeatureElementSubtraction);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelVoidsElement;
    ToTape(): any[];
}
export declare class IfcRelationship {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRelationship;
    ToTape(): any[];
}
export declare class IfcReparametrisedCompositeCurveSegment {
    constructor(expressID: number, type: number, Transition: IfcTransitionCode, SameSense: IfcBoolean, ParentCurve: (Handle<IfcCurve> | IfcCurve), ParamLength: IfcParameterValue);
    expressID: number;
    type: number;
    Transition: IfcTransitionCode;
    SameSense: IfcBoolean;
    ParentCurve: (Handle<IfcCurve> | IfcCurve);
    ParamLength: IfcParameterValue;
    static FromTape(expressID: number, type: number, tape: any[]): IfcReparametrisedCompositeCurveSegment;
    ToTape(): any[];
}
export declare class IfcRepresentation {
    constructor(expressID: number, type: number, ContextOfItems: (Handle<IfcRepresentationContext> | IfcRepresentationContext), RepresentationIdentifier: IfcLabel | null, RepresentationType: IfcLabel | null, Items: (Handle<IfcRepresentationItem> | IfcRepresentationItem)[]);
    expressID: number;
    type: number;
    ContextOfItems: (Handle<IfcRepresentationContext> | IfcRepresentationContext);
    RepresentationIdentifier: IfcLabel | null;
    RepresentationType: IfcLabel | null;
    Items: (Handle<IfcRepresentationItem> | IfcRepresentationItem)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcRepresentation;
    ToTape(): any[];
}
export declare class IfcRepresentationContext {
    constructor(expressID: number, type: number, ContextIdentifier: IfcLabel | null, ContextType: IfcLabel | null);
    expressID: number;
    type: number;
    ContextIdentifier: IfcLabel | null;
    ContextType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRepresentationContext;
    ToTape(): any[];
}
export declare class IfcRepresentationItem {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRepresentationItem;
    ToTape(): any[];
}
export declare class IfcRepresentationMap {
    constructor(expressID: number, type: number, MappingOrigin: IfcAxis2Placement, MappedRepresentation: (Handle<IfcRepresentation> | IfcRepresentation));
    expressID: number;
    type: number;
    MappingOrigin: IfcAxis2Placement;
    MappedRepresentation: (Handle<IfcRepresentation> | IfcRepresentation);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRepresentationMap;
    ToTape(): any[];
}
export declare class IfcResource {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcResource;
    ToTape(): any[];
}
export declare class IfcResourceApprovalRelationship {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, RelatedResourceObjects: IfcResourceObjectSelect[], RelatingApproval: (Handle<IfcApproval> | IfcApproval));
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatedResourceObjects: IfcResourceObjectSelect[];
    RelatingApproval: (Handle<IfcApproval> | IfcApproval);
    static FromTape(expressID: number, type: number, tape: any[]): IfcResourceApprovalRelationship;
    ToTape(): any[];
}
export declare class IfcResourceConstraintRelationship {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null, RelatingConstraint: (Handle<IfcConstraint> | IfcConstraint), RelatedResourceObjects: IfcResourceObjectSelect[]);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    RelatingConstraint: (Handle<IfcConstraint> | IfcConstraint);
    RelatedResourceObjects: IfcResourceObjectSelect[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcResourceConstraintRelationship;
    ToTape(): any[];
}
export declare class IfcResourceLevelRelationship {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcResourceLevelRelationship;
    ToTape(): any[];
}
export declare class IfcResourceTime {
    constructor(expressID: number, type: number, Name: IfcLabel | null, DataOrigin: IfcDataOriginEnum | null, UserDefinedDataOrigin: IfcLabel | null, ScheduleWork: IfcDuration | null, ScheduleUsage: IfcPositiveRatioMeasure | null, ScheduleStart: IfcDateTime | null, ScheduleFinish: IfcDateTime | null, ScheduleContour: IfcLabel | null, LevelingDelay: IfcDuration | null, IsOverAllocated: IfcBoolean | null, StatusTime: IfcDateTime | null, ActualWork: IfcDuration | null, ActualUsage: IfcPositiveRatioMeasure | null, ActualStart: IfcDateTime | null, ActualFinish: IfcDateTime | null, RemainingWork: IfcDuration | null, RemainingUsage: IfcPositiveRatioMeasure | null, Completion: IfcPositiveRatioMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    DataOrigin: IfcDataOriginEnum | null;
    UserDefinedDataOrigin: IfcLabel | null;
    ScheduleWork: IfcDuration | null;
    ScheduleUsage: IfcPositiveRatioMeasure | null;
    ScheduleStart: IfcDateTime | null;
    ScheduleFinish: IfcDateTime | null;
    ScheduleContour: IfcLabel | null;
    LevelingDelay: IfcDuration | null;
    IsOverAllocated: IfcBoolean | null;
    StatusTime: IfcDateTime | null;
    ActualWork: IfcDuration | null;
    ActualUsage: IfcPositiveRatioMeasure | null;
    ActualStart: IfcDateTime | null;
    ActualFinish: IfcDateTime | null;
    RemainingWork: IfcDuration | null;
    RemainingUsage: IfcPositiveRatioMeasure | null;
    Completion: IfcPositiveRatioMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcResourceTime;
    ToTape(): any[];
}
export declare class IfcRevolvedAreaSolid {
    constructor(expressID: number, type: number, SweptArea: (Handle<IfcProfileDef> | IfcProfileDef), Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null, Axis: (Handle<IfcAxis1Placement> | IfcAxis1Placement), Angle: IfcPlaneAngleMeasure);
    expressID: number;
    type: number;
    SweptArea: (Handle<IfcProfileDef> | IfcProfileDef);
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    Axis: (Handle<IfcAxis1Placement> | IfcAxis1Placement);
    Angle: IfcPlaneAngleMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRevolvedAreaSolid;
    ToTape(): any[];
}
export declare class IfcRevolvedAreaSolidTapered {
    constructor(expressID: number, type: number, SweptArea: (Handle<IfcProfileDef> | IfcProfileDef), Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null, Axis: (Handle<IfcAxis1Placement> | IfcAxis1Placement), Angle: IfcPlaneAngleMeasure, EndSweptArea: (Handle<IfcProfileDef> | IfcProfileDef));
    expressID: number;
    type: number;
    SweptArea: (Handle<IfcProfileDef> | IfcProfileDef);
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    Axis: (Handle<IfcAxis1Placement> | IfcAxis1Placement);
    Angle: IfcPlaneAngleMeasure;
    EndSweptArea: (Handle<IfcProfileDef> | IfcProfileDef);
    static FromTape(expressID: number, type: number, tape: any[]): IfcRevolvedAreaSolidTapered;
    ToTape(): any[];
}
export declare class IfcRightCircularCone {
    constructor(expressID: number, type: number, Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D), Height: IfcPositiveLengthMeasure, BottomRadius: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
    Height: IfcPositiveLengthMeasure;
    BottomRadius: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRightCircularCone;
    ToTape(): any[];
}
export declare class IfcRightCircularCylinder {
    constructor(expressID: number, type: number, Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D), Height: IfcPositiveLengthMeasure, Radius: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
    Height: IfcPositiveLengthMeasure;
    Radius: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRightCircularCylinder;
    ToTape(): any[];
}
export declare class IfcRoof {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcRoofTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcRoofTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRoof;
    ToTape(): any[];
}
export declare class IfcRoofType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcRoofTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcRoofTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRoofType;
    ToTape(): any[];
}
export declare class IfcRoot {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRoot;
    ToTape(): any[];
}
export declare class IfcRoundedRectangleProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, XDim: IfcPositiveLengthMeasure, YDim: IfcPositiveLengthMeasure, RoundingRadius: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    XDim: IfcPositiveLengthMeasure;
    YDim: IfcPositiveLengthMeasure;
    RoundingRadius: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcRoundedRectangleProfileDef;
    ToTape(): any[];
}
export declare class IfcSIUnit {
    constructor(expressID: number, type: number, Dimensions: (Handle<IfcDimensionalExponents> | IfcDimensionalExponents), UnitType: IfcUnitEnum, Prefix: IfcSIPrefix | null, Name: IfcSIUnitName);
    expressID: number;
    type: number;
    Dimensions: (Handle<IfcDimensionalExponents> | IfcDimensionalExponents);
    UnitType: IfcUnitEnum;
    Prefix: IfcSIPrefix | null;
    Name: IfcSIUnitName;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSIUnit;
    ToTape(): any[];
}
export declare class IfcSanitaryTerminal {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcSanitaryTerminalTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcSanitaryTerminalTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSanitaryTerminal;
    ToTape(): any[];
}
export declare class IfcSanitaryTerminalType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcSanitaryTerminalTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcSanitaryTerminalTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSanitaryTerminalType;
    ToTape(): any[];
}
export declare class IfcSchedulingTime {
    constructor(expressID: number, type: number, Name: IfcLabel | null, DataOrigin: IfcDataOriginEnum | null, UserDefinedDataOrigin: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    DataOrigin: IfcDataOriginEnum | null;
    UserDefinedDataOrigin: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSchedulingTime;
    ToTape(): any[];
}
export declare class IfcSeamCurve {
    constructor(expressID: number, type: number, Curve3D: (Handle<IfcCurve> | IfcCurve), AssociatedGeometry: (Handle<IfcPcurve> | IfcPcurve)[], MasterRepresentation: IfcPreferredSurfaceCurveRepresentation);
    expressID: number;
    type: number;
    Curve3D: (Handle<IfcCurve> | IfcCurve);
    AssociatedGeometry: (Handle<IfcPcurve> | IfcPcurve)[];
    MasterRepresentation: IfcPreferredSurfaceCurveRepresentation;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSeamCurve;
    ToTape(): any[];
}
export declare class IfcSectionProperties {
    constructor(expressID: number, type: number, SectionType: IfcSectionTypeEnum, StartProfile: (Handle<IfcProfileDef> | IfcProfileDef), EndProfile: (Handle<IfcProfileDef> | IfcProfileDef) | null);
    expressID: number;
    type: number;
    SectionType: IfcSectionTypeEnum;
    StartProfile: (Handle<IfcProfileDef> | IfcProfileDef);
    EndProfile: (Handle<IfcProfileDef> | IfcProfileDef) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSectionProperties;
    ToTape(): any[];
}
export declare class IfcSectionReinforcementProperties {
    constructor(expressID: number, type: number, LongitudinalStartPosition: IfcLengthMeasure, LongitudinalEndPosition: IfcLengthMeasure, TransversePosition: IfcLengthMeasure | null, ReinforcementRole: IfcReinforcingBarRoleEnum, SectionDefinition: (Handle<IfcSectionProperties> | IfcSectionProperties), CrossSectionReinforcementDefinitions: (Handle<IfcReinforcementBarProperties> | IfcReinforcementBarProperties)[]);
    expressID: number;
    type: number;
    LongitudinalStartPosition: IfcLengthMeasure;
    LongitudinalEndPosition: IfcLengthMeasure;
    TransversePosition: IfcLengthMeasure | null;
    ReinforcementRole: IfcReinforcingBarRoleEnum;
    SectionDefinition: (Handle<IfcSectionProperties> | IfcSectionProperties);
    CrossSectionReinforcementDefinitions: (Handle<IfcReinforcementBarProperties> | IfcReinforcementBarProperties)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcSectionReinforcementProperties;
    ToTape(): any[];
}
export declare class IfcSectionedSolid {
    constructor(expressID: number, type: number, Directrix: (Handle<IfcCurve> | IfcCurve), CrossSections: (Handle<IfcProfileDef> | IfcProfileDef)[]);
    expressID: number;
    type: number;
    Directrix: (Handle<IfcCurve> | IfcCurve);
    CrossSections: (Handle<IfcProfileDef> | IfcProfileDef)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcSectionedSolid;
    ToTape(): any[];
}
export declare class IfcSectionedSolidHorizontal {
    constructor(expressID: number, type: number, Directrix: (Handle<IfcCurve> | IfcCurve), CrossSections: (Handle<IfcProfileDef> | IfcProfileDef)[], CrossSectionPositions: (Handle<IfcDistanceExpression> | IfcDistanceExpression)[], FixedAxisVertical: IfcBoolean);
    expressID: number;
    type: number;
    Directrix: (Handle<IfcCurve> | IfcCurve);
    CrossSections: (Handle<IfcProfileDef> | IfcProfileDef)[];
    CrossSectionPositions: (Handle<IfcDistanceExpression> | IfcDistanceExpression)[];
    FixedAxisVertical: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSectionedSolidHorizontal;
    ToTape(): any[];
}
export declare class IfcSectionedSpine {
    constructor(expressID: number, type: number, SpineCurve: (Handle<IfcCompositeCurve> | IfcCompositeCurve), CrossSections: (Handle<IfcProfileDef> | IfcProfileDef)[], CrossSectionPositions: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D)[]);
    expressID: number;
    type: number;
    SpineCurve: (Handle<IfcCompositeCurve> | IfcCompositeCurve);
    CrossSections: (Handle<IfcProfileDef> | IfcProfileDef)[];
    CrossSectionPositions: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcSectionedSpine;
    ToTape(): any[];
}
export declare class IfcSensor {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcSensorTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcSensorTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSensor;
    ToTape(): any[];
}
export declare class IfcSensorType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcSensorTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcSensorTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSensorType;
    ToTape(): any[];
}
export declare class IfcShadingDevice {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcShadingDeviceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcShadingDeviceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcShadingDevice;
    ToTape(): any[];
}
export declare class IfcShadingDeviceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcShadingDeviceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcShadingDeviceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcShadingDeviceType;
    ToTape(): any[];
}
export declare class IfcShapeAspect {
    constructor(expressID: number, type: number, ShapeRepresentations: (Handle<IfcShapeModel> | IfcShapeModel)[], Name: IfcLabel | null, Description: IfcText | null, ProductDefinitional: IfcLogical, PartOfProductDefinitionShape: IfcProductRepresentationSelect | null);
    expressID: number;
    type: number;
    ShapeRepresentations: (Handle<IfcShapeModel> | IfcShapeModel)[];
    Name: IfcLabel | null;
    Description: IfcText | null;
    ProductDefinitional: IfcLogical;
    PartOfProductDefinitionShape: IfcProductRepresentationSelect | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcShapeAspect;
    ToTape(): any[];
}
export declare class IfcShapeModel {
    constructor(expressID: number, type: number, ContextOfItems: (Handle<IfcRepresentationContext> | IfcRepresentationContext), RepresentationIdentifier: IfcLabel | null, RepresentationType: IfcLabel | null, Items: (Handle<IfcRepresentationItem> | IfcRepresentationItem)[]);
    expressID: number;
    type: number;
    ContextOfItems: (Handle<IfcRepresentationContext> | IfcRepresentationContext);
    RepresentationIdentifier: IfcLabel | null;
    RepresentationType: IfcLabel | null;
    Items: (Handle<IfcRepresentationItem> | IfcRepresentationItem)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcShapeModel;
    ToTape(): any[];
}
export declare class IfcShapeRepresentation {
    constructor(expressID: number, type: number, ContextOfItems: (Handle<IfcRepresentationContext> | IfcRepresentationContext), RepresentationIdentifier: IfcLabel | null, RepresentationType: IfcLabel | null, Items: (Handle<IfcRepresentationItem> | IfcRepresentationItem)[]);
    expressID: number;
    type: number;
    ContextOfItems: (Handle<IfcRepresentationContext> | IfcRepresentationContext);
    RepresentationIdentifier: IfcLabel | null;
    RepresentationType: IfcLabel | null;
    Items: (Handle<IfcRepresentationItem> | IfcRepresentationItem)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcShapeRepresentation;
    ToTape(): any[];
}
export declare class IfcShellBasedSurfaceModel {
    constructor(expressID: number, type: number, SbsmBoundary: IfcShell[]);
    expressID: number;
    type: number;
    SbsmBoundary: IfcShell[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcShellBasedSurfaceModel;
    ToTape(): any[];
}
export declare class IfcSimpleProperty {
    constructor(expressID: number, type: number, Name: IfcIdentifier, Description: IfcText | null);
    expressID: number;
    type: number;
    Name: IfcIdentifier;
    Description: IfcText | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSimpleProperty;
    ToTape(): any[];
}
export declare class IfcSimplePropertyTemplate {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, TemplateType: IfcSimplePropertyTemplateTypeEnum | null, PrimaryMeasureType: IfcLabel | null, SecondaryMeasureType: IfcLabel | null, Enumerators: (Handle<IfcPropertyEnumeration> | IfcPropertyEnumeration) | null, PrimaryUnit: IfcUnit | null, SecondaryUnit: IfcUnit | null, Expression: IfcLabel | null, AccessState: IfcStateEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    TemplateType: IfcSimplePropertyTemplateTypeEnum | null;
    PrimaryMeasureType: IfcLabel | null;
    SecondaryMeasureType: IfcLabel | null;
    Enumerators: (Handle<IfcPropertyEnumeration> | IfcPropertyEnumeration) | null;
    PrimaryUnit: IfcUnit | null;
    SecondaryUnit: IfcUnit | null;
    Expression: IfcLabel | null;
    AccessState: IfcStateEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSimplePropertyTemplate;
    ToTape(): any[];
}
export declare class IfcSite {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, LongName: IfcLabel | null, CompositionType: IfcElementCompositionEnum | null, RefLatitude: IfcCompoundPlaneAngleMeasure | null, RefLongitude: IfcCompoundPlaneAngleMeasure | null, RefElevation: IfcLengthMeasure | null, LandTitleNumber: IfcLabel | null, SiteAddress: (Handle<IfcPostalAddress> | IfcPostalAddress) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    LongName: IfcLabel | null;
    CompositionType: IfcElementCompositionEnum | null;
    RefLatitude: IfcCompoundPlaneAngleMeasure | null;
    RefLongitude: IfcCompoundPlaneAngleMeasure | null;
    RefElevation: IfcLengthMeasure | null;
    LandTitleNumber: IfcLabel | null;
    SiteAddress: (Handle<IfcPostalAddress> | IfcPostalAddress) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSite;
    ToTape(): any[];
}
export declare class IfcSlab {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcSlabTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcSlabTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSlab;
    ToTape(): any[];
}
export declare class IfcSlabElementedCase {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcSlabTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcSlabTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSlabElementedCase;
    ToTape(): any[];
}
export declare class IfcSlabStandardCase {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcSlabTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcSlabTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSlabStandardCase;
    ToTape(): any[];
}
export declare class IfcSlabType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcSlabTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcSlabTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSlabType;
    ToTape(): any[];
}
export declare class IfcSlippageConnectionCondition {
    constructor(expressID: number, type: number, Name: IfcLabel | null, SlippageX: IfcLengthMeasure | null, SlippageY: IfcLengthMeasure | null, SlippageZ: IfcLengthMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    SlippageX: IfcLengthMeasure | null;
    SlippageY: IfcLengthMeasure | null;
    SlippageZ: IfcLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSlippageConnectionCondition;
    ToTape(): any[];
}
export declare class IfcSolarDevice {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcSolarDeviceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcSolarDeviceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSolarDevice;
    ToTape(): any[];
}
export declare class IfcSolarDeviceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcSolarDeviceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcSolarDeviceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSolarDeviceType;
    ToTape(): any[];
}
export declare class IfcSolidModel {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSolidModel;
    ToTape(): any[];
}
export declare class IfcSpace {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, LongName: IfcLabel | null, CompositionType: IfcElementCompositionEnum | null, PredefinedType: IfcSpaceTypeEnum | null, ElevationWithFlooring: IfcLengthMeasure | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    LongName: IfcLabel | null;
    CompositionType: IfcElementCompositionEnum | null;
    PredefinedType: IfcSpaceTypeEnum | null;
    ElevationWithFlooring: IfcLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSpace;
    ToTape(): any[];
}
export declare class IfcSpaceHeater {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcSpaceHeaterTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcSpaceHeaterTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSpaceHeater;
    ToTape(): any[];
}
export declare class IfcSpaceHeaterType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcSpaceHeaterTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcSpaceHeaterTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSpaceHeaterType;
    ToTape(): any[];
}
export declare class IfcSpaceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcSpaceTypeEnum, LongName: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcSpaceTypeEnum;
    LongName: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSpaceType;
    ToTape(): any[];
}
export declare class IfcSpatialElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, LongName: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    LongName: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSpatialElement;
    ToTape(): any[];
}
export declare class IfcSpatialElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSpatialElementType;
    ToTape(): any[];
}
export declare class IfcSpatialStructureElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, LongName: IfcLabel | null, CompositionType: IfcElementCompositionEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    LongName: IfcLabel | null;
    CompositionType: IfcElementCompositionEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSpatialStructureElement;
    ToTape(): any[];
}
export declare class IfcSpatialStructureElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSpatialStructureElementType;
    ToTape(): any[];
}
export declare class IfcSpatialZone {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, LongName: IfcLabel | null, PredefinedType: IfcSpatialZoneTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    LongName: IfcLabel | null;
    PredefinedType: IfcSpatialZoneTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSpatialZone;
    ToTape(): any[];
}
export declare class IfcSpatialZoneType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcSpatialZoneTypeEnum, LongName: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcSpatialZoneTypeEnum;
    LongName: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSpatialZoneType;
    ToTape(): any[];
}
export declare class IfcSphere {
    constructor(expressID: number, type: number, Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D), Radius: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
    Radius: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSphere;
    ToTape(): any[];
}
export declare class IfcSphericalSurface {
    constructor(expressID: number, type: number, Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D), Radius: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
    Radius: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSphericalSurface;
    ToTape(): any[];
}
export declare class IfcStackTerminal {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcStackTerminalTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcStackTerminalTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStackTerminal;
    ToTape(): any[];
}
export declare class IfcStackTerminalType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcStackTerminalTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcStackTerminalTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStackTerminalType;
    ToTape(): any[];
}
export declare class IfcStair {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcStairTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcStairTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStair;
    ToTape(): any[];
}
export declare class IfcStairFlight {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, NumberOfRisers: IfcInteger | null, NumberOfTreads: IfcInteger | null, RiserHeight: IfcPositiveLengthMeasure | null, TreadLength: IfcPositiveLengthMeasure | null, PredefinedType: IfcStairFlightTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    NumberOfRisers: IfcInteger | null;
    NumberOfTreads: IfcInteger | null;
    RiserHeight: IfcPositiveLengthMeasure | null;
    TreadLength: IfcPositiveLengthMeasure | null;
    PredefinedType: IfcStairFlightTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStairFlight;
    ToTape(): any[];
}
export declare class IfcStairFlightType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcStairFlightTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcStairFlightTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStairFlightType;
    ToTape(): any[];
}
export declare class IfcStairType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcStairTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcStairTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStairType;
    ToTape(): any[];
}
export declare class IfcStructuralAction {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad), GlobalOrLocal: IfcGlobalOrLocalEnum, DestabilizingLoad: IfcBoolean | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad);
    GlobalOrLocal: IfcGlobalOrLocalEnum;
    DestabilizingLoad: IfcBoolean | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralAction;
    ToTape(): any[];
}
export declare class IfcStructuralActivity {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad), GlobalOrLocal: IfcGlobalOrLocalEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad);
    GlobalOrLocal: IfcGlobalOrLocalEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralActivity;
    ToTape(): any[];
}
export declare class IfcStructuralAnalysisModel {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, PredefinedType: IfcAnalysisModelTypeEnum, OrientationOf2DPlane: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null, LoadedBy: (Handle<IfcStructuralLoadGroup> | IfcStructuralLoadGroup)[] | null, HasResults: (Handle<IfcStructuralResultGroup> | IfcStructuralResultGroup)[] | null, SharedPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    PredefinedType: IfcAnalysisModelTypeEnum;
    OrientationOf2DPlane: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    LoadedBy: (Handle<IfcStructuralLoadGroup> | IfcStructuralLoadGroup)[] | null;
    HasResults: (Handle<IfcStructuralResultGroup> | IfcStructuralResultGroup)[] | null;
    SharedPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralAnalysisModel;
    ToTape(): any[];
}
export declare class IfcStructuralConnection {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedCondition: (Handle<IfcBoundaryCondition> | IfcBoundaryCondition) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedCondition: (Handle<IfcBoundaryCondition> | IfcBoundaryCondition) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralConnection;
    ToTape(): any[];
}
export declare class IfcStructuralConnectionCondition {
    constructor(expressID: number, type: number, Name: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralConnectionCondition;
    ToTape(): any[];
}
export declare class IfcStructuralCurveAction {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad), GlobalOrLocal: IfcGlobalOrLocalEnum, DestabilizingLoad: IfcBoolean | null, ProjectedOrTrue: IfcProjectedOrTrueLengthEnum | null, PredefinedType: IfcStructuralCurveActivityTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad);
    GlobalOrLocal: IfcGlobalOrLocalEnum;
    DestabilizingLoad: IfcBoolean | null;
    ProjectedOrTrue: IfcProjectedOrTrueLengthEnum | null;
    PredefinedType: IfcStructuralCurveActivityTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralCurveAction;
    ToTape(): any[];
}
export declare class IfcStructuralCurveConnection {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedCondition: (Handle<IfcBoundaryCondition> | IfcBoundaryCondition) | null, Axis: (Handle<IfcDirection> | IfcDirection));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedCondition: (Handle<IfcBoundaryCondition> | IfcBoundaryCondition) | null;
    Axis: (Handle<IfcDirection> | IfcDirection);
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralCurveConnection;
    ToTape(): any[];
}
export declare class IfcStructuralCurveMember {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, PredefinedType: IfcStructuralCurveMemberTypeEnum, Axis: (Handle<IfcDirection> | IfcDirection));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    PredefinedType: IfcStructuralCurveMemberTypeEnum;
    Axis: (Handle<IfcDirection> | IfcDirection);
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralCurveMember;
    ToTape(): any[];
}
export declare class IfcStructuralCurveMemberVarying {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, PredefinedType: IfcStructuralCurveMemberTypeEnum, Axis: (Handle<IfcDirection> | IfcDirection));
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    PredefinedType: IfcStructuralCurveMemberTypeEnum;
    Axis: (Handle<IfcDirection> | IfcDirection);
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralCurveMemberVarying;
    ToTape(): any[];
}
export declare class IfcStructuralCurveReaction {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad), GlobalOrLocal: IfcGlobalOrLocalEnum, PredefinedType: IfcStructuralCurveActivityTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad);
    GlobalOrLocal: IfcGlobalOrLocalEnum;
    PredefinedType: IfcStructuralCurveActivityTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralCurveReaction;
    ToTape(): any[];
}
export declare class IfcStructuralItem {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralItem;
    ToTape(): any[];
}
export declare class IfcStructuralLinearAction {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad), GlobalOrLocal: IfcGlobalOrLocalEnum, DestabilizingLoad: IfcBoolean | null, ProjectedOrTrue: IfcProjectedOrTrueLengthEnum | null, PredefinedType: IfcStructuralCurveActivityTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad);
    GlobalOrLocal: IfcGlobalOrLocalEnum;
    DestabilizingLoad: IfcBoolean | null;
    ProjectedOrTrue: IfcProjectedOrTrueLengthEnum | null;
    PredefinedType: IfcStructuralCurveActivityTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLinearAction;
    ToTape(): any[];
}
export declare class IfcStructuralLoad {
    constructor(expressID: number, type: number, Name: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLoad;
    ToTape(): any[];
}
export declare class IfcStructuralLoadCase {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, PredefinedType: IfcLoadGroupTypeEnum, ActionType: IfcActionTypeEnum, ActionSource: IfcActionSourceTypeEnum, Coefficient: IfcRatioMeasure | null, Purpose: IfcLabel | null, SelfWeightCoefficients: IfcRatioMeasure[] | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    PredefinedType: IfcLoadGroupTypeEnum;
    ActionType: IfcActionTypeEnum;
    ActionSource: IfcActionSourceTypeEnum;
    Coefficient: IfcRatioMeasure | null;
    Purpose: IfcLabel | null;
    SelfWeightCoefficients: IfcRatioMeasure[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLoadCase;
    ToTape(): any[];
}
export declare class IfcStructuralLoadConfiguration {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Values: (Handle<IfcStructuralLoadOrResult> | IfcStructuralLoadOrResult)[], Locations: IfcLengthMeasure[] | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Values: (Handle<IfcStructuralLoadOrResult> | IfcStructuralLoadOrResult)[];
    Locations: IfcLengthMeasure[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLoadConfiguration;
    ToTape(): any[];
}
export declare class IfcStructuralLoadGroup {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, PredefinedType: IfcLoadGroupTypeEnum, ActionType: IfcActionTypeEnum, ActionSource: IfcActionSourceTypeEnum, Coefficient: IfcRatioMeasure | null, Purpose: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    PredefinedType: IfcLoadGroupTypeEnum;
    ActionType: IfcActionTypeEnum;
    ActionSource: IfcActionSourceTypeEnum;
    Coefficient: IfcRatioMeasure | null;
    Purpose: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLoadGroup;
    ToTape(): any[];
}
export declare class IfcStructuralLoadLinearForce {
    constructor(expressID: number, type: number, Name: IfcLabel | null, LinearForceX: IfcLinearForceMeasure | null, LinearForceY: IfcLinearForceMeasure | null, LinearForceZ: IfcLinearForceMeasure | null, LinearMomentX: IfcLinearMomentMeasure | null, LinearMomentY: IfcLinearMomentMeasure | null, LinearMomentZ: IfcLinearMomentMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    LinearForceX: IfcLinearForceMeasure | null;
    LinearForceY: IfcLinearForceMeasure | null;
    LinearForceZ: IfcLinearForceMeasure | null;
    LinearMomentX: IfcLinearMomentMeasure | null;
    LinearMomentY: IfcLinearMomentMeasure | null;
    LinearMomentZ: IfcLinearMomentMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLoadLinearForce;
    ToTape(): any[];
}
export declare class IfcStructuralLoadOrResult {
    constructor(expressID: number, type: number, Name: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLoadOrResult;
    ToTape(): any[];
}
export declare class IfcStructuralLoadPlanarForce {
    constructor(expressID: number, type: number, Name: IfcLabel | null, PlanarForceX: IfcPlanarForceMeasure | null, PlanarForceY: IfcPlanarForceMeasure | null, PlanarForceZ: IfcPlanarForceMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    PlanarForceX: IfcPlanarForceMeasure | null;
    PlanarForceY: IfcPlanarForceMeasure | null;
    PlanarForceZ: IfcPlanarForceMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLoadPlanarForce;
    ToTape(): any[];
}
export declare class IfcStructuralLoadSingleDisplacement {
    constructor(expressID: number, type: number, Name: IfcLabel | null, DisplacementX: IfcLengthMeasure | null, DisplacementY: IfcLengthMeasure | null, DisplacementZ: IfcLengthMeasure | null, RotationalDisplacementRX: IfcPlaneAngleMeasure | null, RotationalDisplacementRY: IfcPlaneAngleMeasure | null, RotationalDisplacementRZ: IfcPlaneAngleMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    DisplacementX: IfcLengthMeasure | null;
    DisplacementY: IfcLengthMeasure | null;
    DisplacementZ: IfcLengthMeasure | null;
    RotationalDisplacementRX: IfcPlaneAngleMeasure | null;
    RotationalDisplacementRY: IfcPlaneAngleMeasure | null;
    RotationalDisplacementRZ: IfcPlaneAngleMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLoadSingleDisplacement;
    ToTape(): any[];
}
export declare class IfcStructuralLoadSingleDisplacementDistortion {
    constructor(expressID: number, type: number, Name: IfcLabel | null, DisplacementX: IfcLengthMeasure | null, DisplacementY: IfcLengthMeasure | null, DisplacementZ: IfcLengthMeasure | null, RotationalDisplacementRX: IfcPlaneAngleMeasure | null, RotationalDisplacementRY: IfcPlaneAngleMeasure | null, RotationalDisplacementRZ: IfcPlaneAngleMeasure | null, Distortion: IfcCurvatureMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    DisplacementX: IfcLengthMeasure | null;
    DisplacementY: IfcLengthMeasure | null;
    DisplacementZ: IfcLengthMeasure | null;
    RotationalDisplacementRX: IfcPlaneAngleMeasure | null;
    RotationalDisplacementRY: IfcPlaneAngleMeasure | null;
    RotationalDisplacementRZ: IfcPlaneAngleMeasure | null;
    Distortion: IfcCurvatureMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLoadSingleDisplacementDistortion;
    ToTape(): any[];
}
export declare class IfcStructuralLoadSingleForce {
    constructor(expressID: number, type: number, Name: IfcLabel | null, ForceX: IfcForceMeasure | null, ForceY: IfcForceMeasure | null, ForceZ: IfcForceMeasure | null, MomentX: IfcTorqueMeasure | null, MomentY: IfcTorqueMeasure | null, MomentZ: IfcTorqueMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    ForceX: IfcForceMeasure | null;
    ForceY: IfcForceMeasure | null;
    ForceZ: IfcForceMeasure | null;
    MomentX: IfcTorqueMeasure | null;
    MomentY: IfcTorqueMeasure | null;
    MomentZ: IfcTorqueMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLoadSingleForce;
    ToTape(): any[];
}
export declare class IfcStructuralLoadSingleForceWarping {
    constructor(expressID: number, type: number, Name: IfcLabel | null, ForceX: IfcForceMeasure | null, ForceY: IfcForceMeasure | null, ForceZ: IfcForceMeasure | null, MomentX: IfcTorqueMeasure | null, MomentY: IfcTorqueMeasure | null, MomentZ: IfcTorqueMeasure | null, WarpingMoment: IfcWarpingMomentMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    ForceX: IfcForceMeasure | null;
    ForceY: IfcForceMeasure | null;
    ForceZ: IfcForceMeasure | null;
    MomentX: IfcTorqueMeasure | null;
    MomentY: IfcTorqueMeasure | null;
    MomentZ: IfcTorqueMeasure | null;
    WarpingMoment: IfcWarpingMomentMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLoadSingleForceWarping;
    ToTape(): any[];
}
export declare class IfcStructuralLoadStatic {
    constructor(expressID: number, type: number, Name: IfcLabel | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLoadStatic;
    ToTape(): any[];
}
export declare class IfcStructuralLoadTemperature {
    constructor(expressID: number, type: number, Name: IfcLabel | null, DeltaTConstant: IfcThermodynamicTemperatureMeasure | null, DeltaTY: IfcThermodynamicTemperatureMeasure | null, DeltaTZ: IfcThermodynamicTemperatureMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    DeltaTConstant: IfcThermodynamicTemperatureMeasure | null;
    DeltaTY: IfcThermodynamicTemperatureMeasure | null;
    DeltaTZ: IfcThermodynamicTemperatureMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralLoadTemperature;
    ToTape(): any[];
}
export declare class IfcStructuralMember {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralMember;
    ToTape(): any[];
}
export declare class IfcStructuralPlanarAction {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad), GlobalOrLocal: IfcGlobalOrLocalEnum, DestabilizingLoad: IfcBoolean | null, ProjectedOrTrue: IfcProjectedOrTrueLengthEnum | null, PredefinedType: IfcStructuralSurfaceActivityTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad);
    GlobalOrLocal: IfcGlobalOrLocalEnum;
    DestabilizingLoad: IfcBoolean | null;
    ProjectedOrTrue: IfcProjectedOrTrueLengthEnum | null;
    PredefinedType: IfcStructuralSurfaceActivityTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralPlanarAction;
    ToTape(): any[];
}
export declare class IfcStructuralPointAction {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad), GlobalOrLocal: IfcGlobalOrLocalEnum, DestabilizingLoad: IfcBoolean | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad);
    GlobalOrLocal: IfcGlobalOrLocalEnum;
    DestabilizingLoad: IfcBoolean | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralPointAction;
    ToTape(): any[];
}
export declare class IfcStructuralPointConnection {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedCondition: (Handle<IfcBoundaryCondition> | IfcBoundaryCondition) | null, ConditionCoordinateSystem: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedCondition: (Handle<IfcBoundaryCondition> | IfcBoundaryCondition) | null;
    ConditionCoordinateSystem: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralPointConnection;
    ToTape(): any[];
}
export declare class IfcStructuralPointReaction {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad), GlobalOrLocal: IfcGlobalOrLocalEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad);
    GlobalOrLocal: IfcGlobalOrLocalEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralPointReaction;
    ToTape(): any[];
}
export declare class IfcStructuralReaction {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad), GlobalOrLocal: IfcGlobalOrLocalEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad);
    GlobalOrLocal: IfcGlobalOrLocalEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralReaction;
    ToTape(): any[];
}
export declare class IfcStructuralResultGroup {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, TheoryType: IfcAnalysisTheoryTypeEnum, ResultForLoadGroup: (Handle<IfcStructuralLoadGroup> | IfcStructuralLoadGroup) | null, IsLinear: IfcBoolean);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    TheoryType: IfcAnalysisTheoryTypeEnum;
    ResultForLoadGroup: (Handle<IfcStructuralLoadGroup> | IfcStructuralLoadGroup) | null;
    IsLinear: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralResultGroup;
    ToTape(): any[];
}
export declare class IfcStructuralSurfaceAction {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad), GlobalOrLocal: IfcGlobalOrLocalEnum, DestabilizingLoad: IfcBoolean | null, ProjectedOrTrue: IfcProjectedOrTrueLengthEnum | null, PredefinedType: IfcStructuralSurfaceActivityTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad);
    GlobalOrLocal: IfcGlobalOrLocalEnum;
    DestabilizingLoad: IfcBoolean | null;
    ProjectedOrTrue: IfcProjectedOrTrueLengthEnum | null;
    PredefinedType: IfcStructuralSurfaceActivityTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralSurfaceAction;
    ToTape(): any[];
}
export declare class IfcStructuralSurfaceConnection {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedCondition: (Handle<IfcBoundaryCondition> | IfcBoundaryCondition) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedCondition: (Handle<IfcBoundaryCondition> | IfcBoundaryCondition) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralSurfaceConnection;
    ToTape(): any[];
}
export declare class IfcStructuralSurfaceMember {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, PredefinedType: IfcStructuralSurfaceMemberTypeEnum, Thickness: IfcPositiveLengthMeasure | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    PredefinedType: IfcStructuralSurfaceMemberTypeEnum;
    Thickness: IfcPositiveLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralSurfaceMember;
    ToTape(): any[];
}
export declare class IfcStructuralSurfaceMemberVarying {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, PredefinedType: IfcStructuralSurfaceMemberTypeEnum, Thickness: IfcPositiveLengthMeasure | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    PredefinedType: IfcStructuralSurfaceMemberTypeEnum;
    Thickness: IfcPositiveLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralSurfaceMemberVarying;
    ToTape(): any[];
}
export declare class IfcStructuralSurfaceReaction {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad), GlobalOrLocal: IfcGlobalOrLocalEnum, PredefinedType: IfcStructuralSurfaceActivityTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    AppliedLoad: (Handle<IfcStructuralLoad> | IfcStructuralLoad);
    GlobalOrLocal: IfcGlobalOrLocalEnum;
    PredefinedType: IfcStructuralSurfaceActivityTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStructuralSurfaceReaction;
    ToTape(): any[];
}
export declare class IfcStyleModel {
    constructor(expressID: number, type: number, ContextOfItems: (Handle<IfcRepresentationContext> | IfcRepresentationContext), RepresentationIdentifier: IfcLabel | null, RepresentationType: IfcLabel | null, Items: (Handle<IfcRepresentationItem> | IfcRepresentationItem)[]);
    expressID: number;
    type: number;
    ContextOfItems: (Handle<IfcRepresentationContext> | IfcRepresentationContext);
    RepresentationIdentifier: IfcLabel | null;
    RepresentationType: IfcLabel | null;
    Items: (Handle<IfcRepresentationItem> | IfcRepresentationItem)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcStyleModel;
    ToTape(): any[];
}
export declare class IfcStyledItem {
    constructor(expressID: number, type: number, Item: (Handle<IfcRepresentationItem> | IfcRepresentationItem) | null, Styles: IfcStyleAssignmentSelect[], Name: IfcLabel | null);
    expressID: number;
    type: number;
    Item: (Handle<IfcRepresentationItem> | IfcRepresentationItem) | null;
    Styles: IfcStyleAssignmentSelect[];
    Name: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcStyledItem;
    ToTape(): any[];
}
export declare class IfcStyledRepresentation {
    constructor(expressID: number, type: number, ContextOfItems: (Handle<IfcRepresentationContext> | IfcRepresentationContext), RepresentationIdentifier: IfcLabel | null, RepresentationType: IfcLabel | null, Items: (Handle<IfcRepresentationItem> | IfcRepresentationItem)[]);
    expressID: number;
    type: number;
    ContextOfItems: (Handle<IfcRepresentationContext> | IfcRepresentationContext);
    RepresentationIdentifier: IfcLabel | null;
    RepresentationType: IfcLabel | null;
    Items: (Handle<IfcRepresentationItem> | IfcRepresentationItem)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcStyledRepresentation;
    ToTape(): any[];
}
export declare class IfcSubContractResource {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null, PredefinedType: IfcSubContractResourceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    Usage: (Handle<IfcResourceTime> | IfcResourceTime) | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    PredefinedType: IfcSubContractResourceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSubContractResource;
    ToTape(): any[];
}
export declare class IfcSubContractResourceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, ResourceType: IfcLabel | null, BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null, BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null, PredefinedType: IfcSubContractResourceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    ResourceType: IfcLabel | null;
    BaseCosts: (Handle<IfcAppliedValue> | IfcAppliedValue)[] | null;
    BaseQuantity: (Handle<IfcPhysicalQuantity> | IfcPhysicalQuantity) | null;
    PredefinedType: IfcSubContractResourceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSubContractResourceType;
    ToTape(): any[];
}
export declare class IfcSubedge {
    constructor(expressID: number, type: number, EdgeStart: (Handle<IfcVertex> | IfcVertex), EdgeEnd: (Handle<IfcVertex> | IfcVertex), ParentEdge: (Handle<IfcEdge> | IfcEdge));
    expressID: number;
    type: number;
    EdgeStart: (Handle<IfcVertex> | IfcVertex);
    EdgeEnd: (Handle<IfcVertex> | IfcVertex);
    ParentEdge: (Handle<IfcEdge> | IfcEdge);
    static FromTape(expressID: number, type: number, tape: any[]): IfcSubedge;
    ToTape(): any[];
}
export declare class IfcSurface {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurface;
    ToTape(): any[];
}
export declare class IfcSurfaceCurve {
    constructor(expressID: number, type: number, Curve3D: (Handle<IfcCurve> | IfcCurve), AssociatedGeometry: (Handle<IfcPcurve> | IfcPcurve)[], MasterRepresentation: IfcPreferredSurfaceCurveRepresentation);
    expressID: number;
    type: number;
    Curve3D: (Handle<IfcCurve> | IfcCurve);
    AssociatedGeometry: (Handle<IfcPcurve> | IfcPcurve)[];
    MasterRepresentation: IfcPreferredSurfaceCurveRepresentation;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurfaceCurve;
    ToTape(): any[];
}
export declare class IfcSurfaceCurveSweptAreaSolid {
    constructor(expressID: number, type: number, SweptArea: (Handle<IfcProfileDef> | IfcProfileDef), Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null, Directrix: (Handle<IfcCurve> | IfcCurve), StartParam: IfcParameterValue | null, EndParam: IfcParameterValue | null, ReferenceSurface: (Handle<IfcSurface> | IfcSurface));
    expressID: number;
    type: number;
    SweptArea: (Handle<IfcProfileDef> | IfcProfileDef);
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    Directrix: (Handle<IfcCurve> | IfcCurve);
    StartParam: IfcParameterValue | null;
    EndParam: IfcParameterValue | null;
    ReferenceSurface: (Handle<IfcSurface> | IfcSurface);
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurfaceCurveSweptAreaSolid;
    ToTape(): any[];
}
export declare class IfcSurfaceFeature {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcSurfaceFeatureTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcSurfaceFeatureTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurfaceFeature;
    ToTape(): any[];
}
export declare class IfcSurfaceOfLinearExtrusion {
    constructor(expressID: number, type: number, SweptCurve: (Handle<IfcProfileDef> | IfcProfileDef), Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null, ExtrudedDirection: (Handle<IfcDirection> | IfcDirection), Depth: IfcLengthMeasure);
    expressID: number;
    type: number;
    SweptCurve: (Handle<IfcProfileDef> | IfcProfileDef);
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    ExtrudedDirection: (Handle<IfcDirection> | IfcDirection);
    Depth: IfcLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurfaceOfLinearExtrusion;
    ToTape(): any[];
}
export declare class IfcSurfaceOfRevolution {
    constructor(expressID: number, type: number, SweptCurve: (Handle<IfcProfileDef> | IfcProfileDef), Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null, AxisPosition: (Handle<IfcAxis1Placement> | IfcAxis1Placement));
    expressID: number;
    type: number;
    SweptCurve: (Handle<IfcProfileDef> | IfcProfileDef);
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    AxisPosition: (Handle<IfcAxis1Placement> | IfcAxis1Placement);
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurfaceOfRevolution;
    ToTape(): any[];
}
export declare class IfcSurfaceReinforcementArea {
    constructor(expressID: number, type: number, Name: IfcLabel | null, SurfaceReinforcement1: IfcLengthMeasure[] | null, SurfaceReinforcement2: IfcLengthMeasure[] | null, ShearReinforcement: IfcRatioMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    SurfaceReinforcement1: IfcLengthMeasure[] | null;
    SurfaceReinforcement2: IfcLengthMeasure[] | null;
    ShearReinforcement: IfcRatioMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurfaceReinforcementArea;
    ToTape(): any[];
}
export declare class IfcSurfaceStyle {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Side: IfcSurfaceSide, Styles: IfcSurfaceStyleElementSelect[]);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Side: IfcSurfaceSide;
    Styles: IfcSurfaceStyleElementSelect[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurfaceStyle;
    ToTape(): any[];
}
export declare class IfcSurfaceStyleLighting {
    constructor(expressID: number, type: number, DiffuseTransmissionColour: (Handle<IfcColourRgb> | IfcColourRgb), DiffuseReflectionColour: (Handle<IfcColourRgb> | IfcColourRgb), TransmissionColour: (Handle<IfcColourRgb> | IfcColourRgb), ReflectanceColour: (Handle<IfcColourRgb> | IfcColourRgb));
    expressID: number;
    type: number;
    DiffuseTransmissionColour: (Handle<IfcColourRgb> | IfcColourRgb);
    DiffuseReflectionColour: (Handle<IfcColourRgb> | IfcColourRgb);
    TransmissionColour: (Handle<IfcColourRgb> | IfcColourRgb);
    ReflectanceColour: (Handle<IfcColourRgb> | IfcColourRgb);
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurfaceStyleLighting;
    ToTape(): any[];
}
export declare class IfcSurfaceStyleRefraction {
    constructor(expressID: number, type: number, RefractionIndex: IfcReal | null, DispersionFactor: IfcReal | null);
    expressID: number;
    type: number;
    RefractionIndex: IfcReal | null;
    DispersionFactor: IfcReal | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurfaceStyleRefraction;
    ToTape(): any[];
}
export declare class IfcSurfaceStyleRendering {
    constructor(expressID: number, type: number, SurfaceColour: (Handle<IfcColourRgb> | IfcColourRgb), Transparency: IfcNormalisedRatioMeasure | null, DiffuseColour: IfcColourOrFactor | null, TransmissionColour: IfcColourOrFactor | null, DiffuseTransmissionColour: IfcColourOrFactor | null, ReflectionColour: IfcColourOrFactor | null, SpecularColour: IfcColourOrFactor | null, SpecularHighlight: IfcSpecularHighlightSelect | null, ReflectanceMethod: IfcReflectanceMethodEnum);
    expressID: number;
    type: number;
    SurfaceColour: (Handle<IfcColourRgb> | IfcColourRgb);
    Transparency: IfcNormalisedRatioMeasure | null;
    DiffuseColour: IfcColourOrFactor | null;
    TransmissionColour: IfcColourOrFactor | null;
    DiffuseTransmissionColour: IfcColourOrFactor | null;
    ReflectionColour: IfcColourOrFactor | null;
    SpecularColour: IfcColourOrFactor | null;
    SpecularHighlight: IfcSpecularHighlightSelect | null;
    ReflectanceMethod: IfcReflectanceMethodEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurfaceStyleRendering;
    ToTape(): any[];
}
export declare class IfcSurfaceStyleShading {
    constructor(expressID: number, type: number, SurfaceColour: (Handle<IfcColourRgb> | IfcColourRgb), Transparency: IfcNormalisedRatioMeasure | null);
    expressID: number;
    type: number;
    SurfaceColour: (Handle<IfcColourRgb> | IfcColourRgb);
    Transparency: IfcNormalisedRatioMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurfaceStyleShading;
    ToTape(): any[];
}
export declare class IfcSurfaceStyleWithTextures {
    constructor(expressID: number, type: number, Textures: (Handle<IfcSurfaceTexture> | IfcSurfaceTexture)[]);
    expressID: number;
    type: number;
    Textures: (Handle<IfcSurfaceTexture> | IfcSurfaceTexture)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurfaceStyleWithTextures;
    ToTape(): any[];
}
export declare class IfcSurfaceTexture {
    constructor(expressID: number, type: number, RepeatS: IfcBoolean, RepeatT: IfcBoolean, Mode: IfcIdentifier | null, TextureTransform: (Handle<IfcCartesianTransformationOperator2D> | IfcCartesianTransformationOperator2D) | null, Parameter: IfcIdentifier[] | null);
    expressID: number;
    type: number;
    RepeatS: IfcBoolean;
    RepeatT: IfcBoolean;
    Mode: IfcIdentifier | null;
    TextureTransform: (Handle<IfcCartesianTransformationOperator2D> | IfcCartesianTransformationOperator2D) | null;
    Parameter: IfcIdentifier[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSurfaceTexture;
    ToTape(): any[];
}
export declare class IfcSweptAreaSolid {
    constructor(expressID: number, type: number, SweptArea: (Handle<IfcProfileDef> | IfcProfileDef), Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null);
    expressID: number;
    type: number;
    SweptArea: (Handle<IfcProfileDef> | IfcProfileDef);
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSweptAreaSolid;
    ToTape(): any[];
}
export declare class IfcSweptDiskSolid {
    constructor(expressID: number, type: number, Directrix: (Handle<IfcCurve> | IfcCurve), Radius: IfcPositiveLengthMeasure, InnerRadius: IfcPositiveLengthMeasure | null, StartParam: IfcParameterValue | null, EndParam: IfcParameterValue | null);
    expressID: number;
    type: number;
    Directrix: (Handle<IfcCurve> | IfcCurve);
    Radius: IfcPositiveLengthMeasure;
    InnerRadius: IfcPositiveLengthMeasure | null;
    StartParam: IfcParameterValue | null;
    EndParam: IfcParameterValue | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSweptDiskSolid;
    ToTape(): any[];
}
export declare class IfcSweptDiskSolidPolygonal {
    constructor(expressID: number, type: number, Directrix: (Handle<IfcCurve> | IfcCurve), Radius: IfcPositiveLengthMeasure, InnerRadius: IfcPositiveLengthMeasure | null, StartParam: IfcParameterValue | null, EndParam: IfcParameterValue | null, FilletRadius: IfcPositiveLengthMeasure | null);
    expressID: number;
    type: number;
    Directrix: (Handle<IfcCurve> | IfcCurve);
    Radius: IfcPositiveLengthMeasure;
    InnerRadius: IfcPositiveLengthMeasure | null;
    StartParam: IfcParameterValue | null;
    EndParam: IfcParameterValue | null;
    FilletRadius: IfcPositiveLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSweptDiskSolidPolygonal;
    ToTape(): any[];
}
export declare class IfcSweptSurface {
    constructor(expressID: number, type: number, SweptCurve: (Handle<IfcProfileDef> | IfcProfileDef), Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null);
    expressID: number;
    type: number;
    SweptCurve: (Handle<IfcProfileDef> | IfcProfileDef);
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSweptSurface;
    ToTape(): any[];
}
export declare class IfcSwitchingDevice {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcSwitchingDeviceTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcSwitchingDeviceTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSwitchingDevice;
    ToTape(): any[];
}
export declare class IfcSwitchingDeviceType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcSwitchingDeviceTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcSwitchingDeviceTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSwitchingDeviceType;
    ToTape(): any[];
}
export declare class IfcSystem {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSystem;
    ToTape(): any[];
}
export declare class IfcSystemFurnitureElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcSystemFurnitureElementTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcSystemFurnitureElementTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSystemFurnitureElement;
    ToTape(): any[];
}
export declare class IfcSystemFurnitureElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcSystemFurnitureElementTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcSystemFurnitureElementTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcSystemFurnitureElementType;
    ToTape(): any[];
}
export declare class IfcTShapeProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, Depth: IfcPositiveLengthMeasure, FlangeWidth: IfcPositiveLengthMeasure, WebThickness: IfcPositiveLengthMeasure, FlangeThickness: IfcPositiveLengthMeasure, FilletRadius: IfcNonNegativeLengthMeasure | null, FlangeEdgeRadius: IfcNonNegativeLengthMeasure | null, WebEdgeRadius: IfcNonNegativeLengthMeasure | null, WebSlope: IfcPlaneAngleMeasure | null, FlangeSlope: IfcPlaneAngleMeasure | null);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    Depth: IfcPositiveLengthMeasure;
    FlangeWidth: IfcPositiveLengthMeasure;
    WebThickness: IfcPositiveLengthMeasure;
    FlangeThickness: IfcPositiveLengthMeasure;
    FilletRadius: IfcNonNegativeLengthMeasure | null;
    FlangeEdgeRadius: IfcNonNegativeLengthMeasure | null;
    WebEdgeRadius: IfcNonNegativeLengthMeasure | null;
    WebSlope: IfcPlaneAngleMeasure | null;
    FlangeSlope: IfcPlaneAngleMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTShapeProfileDef;
    ToTape(): any[];
}
export declare class IfcTable {
    constructor(expressID: number, type: number, Name: IfcLabel | null, Rows: (Handle<IfcTableRow> | IfcTableRow)[] | null, Columns: (Handle<IfcTableColumn> | IfcTableColumn)[] | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    Rows: (Handle<IfcTableRow> | IfcTableRow)[] | null;
    Columns: (Handle<IfcTableColumn> | IfcTableColumn)[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTable;
    ToTape(): any[];
}
export declare class IfcTableColumn {
    constructor(expressID: number, type: number, Identifier: IfcIdentifier | null, Name: IfcLabel | null, Description: IfcText | null, Unit: IfcUnit | null, ReferencePath: (Handle<IfcReference> | IfcReference) | null);
    expressID: number;
    type: number;
    Identifier: IfcIdentifier | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    Unit: IfcUnit | null;
    ReferencePath: (Handle<IfcReference> | IfcReference) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTableColumn;
    ToTape(): any[];
}
export declare class IfcTableRow {
    constructor(expressID: number, type: number, RowCells: IfcValue[] | null, IsHeading: IfcBoolean | null);
    expressID: number;
    type: number;
    RowCells: IfcValue[] | null;
    IsHeading: IfcBoolean | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTableRow;
    ToTape(): any[];
}
export declare class IfcTank {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcTankTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcTankTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTank;
    ToTape(): any[];
}
export declare class IfcTankType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcTankTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcTankTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTankType;
    ToTape(): any[];
}
export declare class IfcTask {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, Status: IfcLabel | null, WorkMethod: IfcLabel | null, IsMilestone: IfcBoolean, Priority: IfcInteger | null, TaskTime: (Handle<IfcTaskTime> | IfcTaskTime) | null, PredefinedType: IfcTaskTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    Status: IfcLabel | null;
    WorkMethod: IfcLabel | null;
    IsMilestone: IfcBoolean;
    Priority: IfcInteger | null;
    TaskTime: (Handle<IfcTaskTime> | IfcTaskTime) | null;
    PredefinedType: IfcTaskTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTask;
    ToTape(): any[];
}
export declare class IfcTaskTime {
    constructor(expressID: number, type: number, Name: IfcLabel | null, DataOrigin: IfcDataOriginEnum | null, UserDefinedDataOrigin: IfcLabel | null, DurationType: IfcTaskDurationEnum | null, ScheduleDuration: IfcDuration | null, ScheduleStart: IfcDateTime | null, ScheduleFinish: IfcDateTime | null, EarlyStart: IfcDateTime | null, EarlyFinish: IfcDateTime | null, LateStart: IfcDateTime | null, LateFinish: IfcDateTime | null, FreeFloat: IfcDuration | null, TotalFloat: IfcDuration | null, IsCritical: IfcBoolean | null, StatusTime: IfcDateTime | null, ActualDuration: IfcDuration | null, ActualStart: IfcDateTime | null, ActualFinish: IfcDateTime | null, RemainingTime: IfcDuration | null, Completion: IfcPositiveRatioMeasure | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    DataOrigin: IfcDataOriginEnum | null;
    UserDefinedDataOrigin: IfcLabel | null;
    DurationType: IfcTaskDurationEnum | null;
    ScheduleDuration: IfcDuration | null;
    ScheduleStart: IfcDateTime | null;
    ScheduleFinish: IfcDateTime | null;
    EarlyStart: IfcDateTime | null;
    EarlyFinish: IfcDateTime | null;
    LateStart: IfcDateTime | null;
    LateFinish: IfcDateTime | null;
    FreeFloat: IfcDuration | null;
    TotalFloat: IfcDuration | null;
    IsCritical: IfcBoolean | null;
    StatusTime: IfcDateTime | null;
    ActualDuration: IfcDuration | null;
    ActualStart: IfcDateTime | null;
    ActualFinish: IfcDateTime | null;
    RemainingTime: IfcDuration | null;
    Completion: IfcPositiveRatioMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTaskTime;
    ToTape(): any[];
}
export declare class IfcTaskTimeRecurring {
    constructor(expressID: number, type: number, Name: IfcLabel | null, DataOrigin: IfcDataOriginEnum | null, UserDefinedDataOrigin: IfcLabel | null, DurationType: IfcTaskDurationEnum | null, ScheduleDuration: IfcDuration | null, ScheduleStart: IfcDateTime | null, ScheduleFinish: IfcDateTime | null, EarlyStart: IfcDateTime | null, EarlyFinish: IfcDateTime | null, LateStart: IfcDateTime | null, LateFinish: IfcDateTime | null, FreeFloat: IfcDuration | null, TotalFloat: IfcDuration | null, IsCritical: IfcBoolean | null, StatusTime: IfcDateTime | null, ActualDuration: IfcDuration | null, ActualStart: IfcDateTime | null, ActualFinish: IfcDateTime | null, RemainingTime: IfcDuration | null, Completion: IfcPositiveRatioMeasure | null, Recurrence: (Handle<IfcRecurrencePattern> | IfcRecurrencePattern));
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    DataOrigin: IfcDataOriginEnum | null;
    UserDefinedDataOrigin: IfcLabel | null;
    DurationType: IfcTaskDurationEnum | null;
    ScheduleDuration: IfcDuration | null;
    ScheduleStart: IfcDateTime | null;
    ScheduleFinish: IfcDateTime | null;
    EarlyStart: IfcDateTime | null;
    EarlyFinish: IfcDateTime | null;
    LateStart: IfcDateTime | null;
    LateFinish: IfcDateTime | null;
    FreeFloat: IfcDuration | null;
    TotalFloat: IfcDuration | null;
    IsCritical: IfcBoolean | null;
    StatusTime: IfcDateTime | null;
    ActualDuration: IfcDuration | null;
    ActualStart: IfcDateTime | null;
    ActualFinish: IfcDateTime | null;
    RemainingTime: IfcDuration | null;
    Completion: IfcPositiveRatioMeasure | null;
    Recurrence: (Handle<IfcRecurrencePattern> | IfcRecurrencePattern);
    static FromTape(expressID: number, type: number, tape: any[]): IfcTaskTimeRecurring;
    ToTape(): any[];
}
export declare class IfcTaskType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, ProcessType: IfcLabel | null, PredefinedType: IfcTaskTypeEnum, WorkMethod: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    ProcessType: IfcLabel | null;
    PredefinedType: IfcTaskTypeEnum;
    WorkMethod: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTaskType;
    ToTape(): any[];
}
export declare class IfcTelecomAddress {
    constructor(expressID: number, type: number, Purpose: IfcAddressTypeEnum | null, Description: IfcText | null, UserDefinedPurpose: IfcLabel | null, TelephoneNumbers: IfcLabel[] | null, FacsimileNumbers: IfcLabel[] | null, PagerNumber: IfcLabel | null, ElectronicMailAddresses: IfcLabel[] | null, WWWHomePageURL: IfcURIReference | null, MessagingIDs: IfcURIReference[] | null);
    expressID: number;
    type: number;
    Purpose: IfcAddressTypeEnum | null;
    Description: IfcText | null;
    UserDefinedPurpose: IfcLabel | null;
    TelephoneNumbers: IfcLabel[] | null;
    FacsimileNumbers: IfcLabel[] | null;
    PagerNumber: IfcLabel | null;
    ElectronicMailAddresses: IfcLabel[] | null;
    WWWHomePageURL: IfcURIReference | null;
    MessagingIDs: IfcURIReference[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTelecomAddress;
    ToTape(): any[];
}
export declare class IfcTendon {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, SteelGrade: IfcLabel | null, PredefinedType: IfcTendonTypeEnum | null, NominalDiameter: IfcPositiveLengthMeasure | null, CrossSectionArea: IfcAreaMeasure | null, TensionForce: IfcForceMeasure | null, PreStress: IfcPressureMeasure | null, FrictionCoefficient: IfcNormalisedRatioMeasure | null, AnchorageSlip: IfcPositiveLengthMeasure | null, MinCurvatureRadius: IfcPositiveLengthMeasure | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    SteelGrade: IfcLabel | null;
    PredefinedType: IfcTendonTypeEnum | null;
    NominalDiameter: IfcPositiveLengthMeasure | null;
    CrossSectionArea: IfcAreaMeasure | null;
    TensionForce: IfcForceMeasure | null;
    PreStress: IfcPressureMeasure | null;
    FrictionCoefficient: IfcNormalisedRatioMeasure | null;
    AnchorageSlip: IfcPositiveLengthMeasure | null;
    MinCurvatureRadius: IfcPositiveLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTendon;
    ToTape(): any[];
}
export declare class IfcTendonAnchor {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, SteelGrade: IfcLabel | null, PredefinedType: IfcTendonAnchorTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    SteelGrade: IfcLabel | null;
    PredefinedType: IfcTendonAnchorTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTendonAnchor;
    ToTape(): any[];
}
export declare class IfcTendonAnchorType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcTendonAnchorTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcTendonAnchorTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTendonAnchorType;
    ToTape(): any[];
}
export declare class IfcTendonConduit {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, SteelGrade: IfcLabel | null, PredefinedType: IfcTendonConduitTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    SteelGrade: IfcLabel | null;
    PredefinedType: IfcTendonConduitTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTendonConduit;
    ToTape(): any[];
}
export declare class IfcTendonConduitType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcTendonConduitTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcTendonConduitTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTendonConduitType;
    ToTape(): any[];
}
export declare class IfcTendonType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcTendonTypeEnum, NominalDiameter: IfcPositiveLengthMeasure | null, CrossSectionArea: IfcAreaMeasure | null, SheathDiameter: IfcPositiveLengthMeasure | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcTendonTypeEnum;
    NominalDiameter: IfcPositiveLengthMeasure | null;
    CrossSectionArea: IfcAreaMeasure | null;
    SheathDiameter: IfcPositiveLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTendonType;
    ToTape(): any[];
}
export declare class IfcTessellatedFaceSet {
    constructor(expressID: number, type: number, Coordinates: (Handle<IfcCartesianPointList3D> | IfcCartesianPointList3D));
    expressID: number;
    type: number;
    Coordinates: (Handle<IfcCartesianPointList3D> | IfcCartesianPointList3D);
    static FromTape(expressID: number, type: number, tape: any[]): IfcTessellatedFaceSet;
    ToTape(): any[];
}
export declare class IfcTessellatedItem {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTessellatedItem;
    ToTape(): any[];
}
export declare class IfcTextLiteral {
    constructor(expressID: number, type: number, Literal: IfcPresentableText, Placement: IfcAxis2Placement, Path: IfcTextPath);
    expressID: number;
    type: number;
    Literal: IfcPresentableText;
    Placement: IfcAxis2Placement;
    Path: IfcTextPath;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTextLiteral;
    ToTape(): any[];
}
export declare class IfcTextLiteralWithExtent {
    constructor(expressID: number, type: number, Literal: IfcPresentableText, Placement: IfcAxis2Placement, Path: IfcTextPath, Extent: (Handle<IfcPlanarExtent> | IfcPlanarExtent), BoxAlignment: IfcBoxAlignment);
    expressID: number;
    type: number;
    Literal: IfcPresentableText;
    Placement: IfcAxis2Placement;
    Path: IfcTextPath;
    Extent: (Handle<IfcPlanarExtent> | IfcPlanarExtent);
    BoxAlignment: IfcBoxAlignment;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTextLiteralWithExtent;
    ToTape(): any[];
}
export declare class IfcTextStyle {
    constructor(expressID: number, type: number, Name: IfcLabel | null, TextCharacterAppearance: (Handle<IfcTextStyleForDefinedFont> | IfcTextStyleForDefinedFont) | null, TextStyle: (Handle<IfcTextStyleTextModel> | IfcTextStyleTextModel) | null, TextFontStyle: IfcTextFontSelect, ModelOrDraughting: IfcBoolean | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    TextCharacterAppearance: (Handle<IfcTextStyleForDefinedFont> | IfcTextStyleForDefinedFont) | null;
    TextStyle: (Handle<IfcTextStyleTextModel> | IfcTextStyleTextModel) | null;
    TextFontStyle: IfcTextFontSelect;
    ModelOrDraughting: IfcBoolean | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTextStyle;
    ToTape(): any[];
}
export declare class IfcTextStyleFontModel {
    constructor(expressID: number, type: number, Name: IfcLabel, FontFamily: IfcTextFontName[], FontStyle: IfcFontStyle | null, FontVariant: IfcFontVariant | null, FontWeight: IfcFontWeight | null, FontSize: IfcSizeSelect);
    expressID: number;
    type: number;
    Name: IfcLabel;
    FontFamily: IfcTextFontName[];
    FontStyle: IfcFontStyle | null;
    FontVariant: IfcFontVariant | null;
    FontWeight: IfcFontWeight | null;
    FontSize: IfcSizeSelect;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTextStyleFontModel;
    ToTape(): any[];
}
export declare class IfcTextStyleForDefinedFont {
    constructor(expressID: number, type: number, Colour: IfcColour, BackgroundColour: IfcColour | null);
    expressID: number;
    type: number;
    Colour: IfcColour;
    BackgroundColour: IfcColour | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTextStyleForDefinedFont;
    ToTape(): any[];
}
export declare class IfcTextStyleTextModel {
    constructor(expressID: number, type: number, TextIndent: IfcSizeSelect | null, TextAlign: IfcTextAlignment | null, TextDecoration: IfcTextDecoration | null, LetterSpacing: IfcSizeSelect | null, WordSpacing: IfcSizeSelect | null, TextTransform: IfcTextTransformation | null, LineHeight: IfcSizeSelect | null);
    expressID: number;
    type: number;
    TextIndent: IfcSizeSelect | null;
    TextAlign: IfcTextAlignment | null;
    TextDecoration: IfcTextDecoration | null;
    LetterSpacing: IfcSizeSelect | null;
    WordSpacing: IfcSizeSelect | null;
    TextTransform: IfcTextTransformation | null;
    LineHeight: IfcSizeSelect | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTextStyleTextModel;
    ToTape(): any[];
}
export declare class IfcTextureCoordinate {
    constructor(expressID: number, type: number, Maps: (Handle<IfcSurfaceTexture> | IfcSurfaceTexture)[]);
    expressID: number;
    type: number;
    Maps: (Handle<IfcSurfaceTexture> | IfcSurfaceTexture)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcTextureCoordinate;
    ToTape(): any[];
}
export declare class IfcTextureCoordinateGenerator {
    constructor(expressID: number, type: number, Maps: (Handle<IfcSurfaceTexture> | IfcSurfaceTexture)[], Mode: IfcLabel, Parameter: IfcReal[] | null);
    expressID: number;
    type: number;
    Maps: (Handle<IfcSurfaceTexture> | IfcSurfaceTexture)[];
    Mode: IfcLabel;
    Parameter: IfcReal[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTextureCoordinateGenerator;
    ToTape(): any[];
}
export declare class IfcTextureMap {
    constructor(expressID: number, type: number, Maps: (Handle<IfcSurfaceTexture> | IfcSurfaceTexture)[], Vertices: (Handle<IfcTextureVertex> | IfcTextureVertex)[], MappedTo: (Handle<IfcFace> | IfcFace));
    expressID: number;
    type: number;
    Maps: (Handle<IfcSurfaceTexture> | IfcSurfaceTexture)[];
    Vertices: (Handle<IfcTextureVertex> | IfcTextureVertex)[];
    MappedTo: (Handle<IfcFace> | IfcFace);
    static FromTape(expressID: number, type: number, tape: any[]): IfcTextureMap;
    ToTape(): any[];
}
export declare class IfcTextureVertex {
    constructor(expressID: number, type: number, Coordinates: IfcParameterValue[]);
    expressID: number;
    type: number;
    Coordinates: IfcParameterValue[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcTextureVertex;
    ToTape(): any[];
}
export declare class IfcTextureVertexList {
    constructor(expressID: number, type: number, TexCoordsList: IfcParameterValue[]);
    expressID: number;
    type: number;
    TexCoordsList: IfcParameterValue[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcTextureVertexList;
    ToTape(): any[];
}
export declare class IfcTimePeriod {
    constructor(expressID: number, type: number, StartTime: IfcTime, EndTime: IfcTime);
    expressID: number;
    type: number;
    StartTime: IfcTime;
    EndTime: IfcTime;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTimePeriod;
    ToTape(): any[];
}
export declare class IfcTimeSeries {
    constructor(expressID: number, type: number, Name: IfcLabel, Description: IfcText | null, StartTime: IfcDateTime, EndTime: IfcDateTime, TimeSeriesDataType: IfcTimeSeriesDataTypeEnum, DataOrigin: IfcDataOriginEnum, UserDefinedDataOrigin: IfcLabel | null, Unit: IfcUnit | null);
    expressID: number;
    type: number;
    Name: IfcLabel;
    Description: IfcText | null;
    StartTime: IfcDateTime;
    EndTime: IfcDateTime;
    TimeSeriesDataType: IfcTimeSeriesDataTypeEnum;
    DataOrigin: IfcDataOriginEnum;
    UserDefinedDataOrigin: IfcLabel | null;
    Unit: IfcUnit | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTimeSeries;
    ToTape(): any[];
}
export declare class IfcTimeSeriesValue {
    constructor(expressID: number, type: number, ListValues: IfcValue[]);
    expressID: number;
    type: number;
    ListValues: IfcValue[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcTimeSeriesValue;
    ToTape(): any[];
}
export declare class IfcTopologicalRepresentationItem {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTopologicalRepresentationItem;
    ToTape(): any[];
}
export declare class IfcTopologyRepresentation {
    constructor(expressID: number, type: number, ContextOfItems: (Handle<IfcRepresentationContext> | IfcRepresentationContext), RepresentationIdentifier: IfcLabel | null, RepresentationType: IfcLabel | null, Items: (Handle<IfcRepresentationItem> | IfcRepresentationItem)[]);
    expressID: number;
    type: number;
    ContextOfItems: (Handle<IfcRepresentationContext> | IfcRepresentationContext);
    RepresentationIdentifier: IfcLabel | null;
    RepresentationType: IfcLabel | null;
    Items: (Handle<IfcRepresentationItem> | IfcRepresentationItem)[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcTopologyRepresentation;
    ToTape(): any[];
}
export declare class IfcToroidalSurface {
    constructor(expressID: number, type: number, Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D), MajorRadius: IfcPositiveLengthMeasure, MinorRadius: IfcPositiveLengthMeasure);
    expressID: number;
    type: number;
    Position: (Handle<IfcAxis2Placement3D> | IfcAxis2Placement3D);
    MajorRadius: IfcPositiveLengthMeasure;
    MinorRadius: IfcPositiveLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcToroidalSurface;
    ToTape(): any[];
}
export declare class IfcTransformer {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcTransformerTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcTransformerTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTransformer;
    ToTape(): any[];
}
export declare class IfcTransformerType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcTransformerTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcTransformerTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTransformerType;
    ToTape(): any[];
}
export declare class IfcTransitionCurveSegment2D {
    constructor(expressID: number, type: number, StartPoint: (Handle<IfcCartesianPoint> | IfcCartesianPoint), StartDirection: IfcPlaneAngleMeasure, SegmentLength: IfcPositiveLengthMeasure, StartRadius: IfcPositiveLengthMeasure | null, EndRadius: IfcPositiveLengthMeasure | null, IsStartRadiusCCW: IfcBoolean, IsEndRadiusCCW: IfcBoolean, TransitionCurveType: IfcTransitionCurveType);
    expressID: number;
    type: number;
    StartPoint: (Handle<IfcCartesianPoint> | IfcCartesianPoint);
    StartDirection: IfcPlaneAngleMeasure;
    SegmentLength: IfcPositiveLengthMeasure;
    StartRadius: IfcPositiveLengthMeasure | null;
    EndRadius: IfcPositiveLengthMeasure | null;
    IsStartRadiusCCW: IfcBoolean;
    IsEndRadiusCCW: IfcBoolean;
    TransitionCurveType: IfcTransitionCurveType;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTransitionCurveSegment2D;
    ToTape(): any[];
}
export declare class IfcTransportElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcTransportElementTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcTransportElementTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTransportElement;
    ToTape(): any[];
}
export declare class IfcTransportElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcTransportElementTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcTransportElementTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTransportElementType;
    ToTape(): any[];
}
export declare class IfcTrapeziumProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, BottomXDim: IfcPositiveLengthMeasure, TopXDim: IfcPositiveLengthMeasure, YDim: IfcPositiveLengthMeasure, TopXOffset: IfcLengthMeasure);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    BottomXDim: IfcPositiveLengthMeasure;
    TopXDim: IfcPositiveLengthMeasure;
    YDim: IfcPositiveLengthMeasure;
    TopXOffset: IfcLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTrapeziumProfileDef;
    ToTape(): any[];
}
export declare class IfcTriangulatedFaceSet {
    constructor(expressID: number, type: number, Coordinates: (Handle<IfcCartesianPointList3D> | IfcCartesianPointList3D), Normals: IfcParameterValue[] | null, Closed: IfcBoolean | null, CoordIndex: IfcPositiveInteger[], PnIndex: IfcPositiveInteger[] | null);
    expressID: number;
    type: number;
    Coordinates: (Handle<IfcCartesianPointList3D> | IfcCartesianPointList3D);
    Normals: IfcParameterValue[] | null;
    Closed: IfcBoolean | null;
    CoordIndex: IfcPositiveInteger[];
    PnIndex: IfcPositiveInteger[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTriangulatedFaceSet;
    ToTape(): any[];
}
export declare class IfcTriangulatedIrregularNetwork {
    constructor(expressID: number, type: number, Coordinates: (Handle<IfcCartesianPointList3D> | IfcCartesianPointList3D), Normals: IfcParameterValue[] | null, Closed: IfcBoolean | null, CoordIndex: IfcPositiveInteger[], PnIndex: IfcPositiveInteger[] | null, Flags: IfcInteger[]);
    expressID: number;
    type: number;
    Coordinates: (Handle<IfcCartesianPointList3D> | IfcCartesianPointList3D);
    Normals: IfcParameterValue[] | null;
    Closed: IfcBoolean | null;
    CoordIndex: IfcPositiveInteger[];
    PnIndex: IfcPositiveInteger[] | null;
    Flags: IfcInteger[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcTriangulatedIrregularNetwork;
    ToTape(): any[];
}
export declare class IfcTrimmedCurve {
    constructor(expressID: number, type: number, BasisCurve: (Handle<IfcCurve> | IfcCurve), Trim1: IfcTrimmingSelect[], Trim2: IfcTrimmingSelect[], SenseAgreement: IfcBoolean, MasterRepresentation: IfcTrimmingPreference);
    expressID: number;
    type: number;
    BasisCurve: (Handle<IfcCurve> | IfcCurve);
    Trim1: IfcTrimmingSelect[];
    Trim2: IfcTrimmingSelect[];
    SenseAgreement: IfcBoolean;
    MasterRepresentation: IfcTrimmingPreference;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTrimmedCurve;
    ToTape(): any[];
}
export declare class IfcTubeBundle {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcTubeBundleTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcTubeBundleTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTubeBundle;
    ToTape(): any[];
}
export declare class IfcTubeBundleType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcTubeBundleTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcTubeBundleTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTubeBundleType;
    ToTape(): any[];
}
export declare class IfcTypeObject {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTypeObject;
    ToTape(): any[];
}
export declare class IfcTypeProcess {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, ProcessType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    ProcessType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTypeProcess;
    ToTape(): any[];
}
export declare class IfcTypeProduct {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTypeProduct;
    ToTape(): any[];
}
export declare class IfcTypeResource {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, Identification: IfcIdentifier | null, LongDescription: IfcText | null, ResourceType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    Identification: IfcIdentifier | null;
    LongDescription: IfcText | null;
    ResourceType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcTypeResource;
    ToTape(): any[];
}
export declare class IfcUShapeProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, Depth: IfcPositiveLengthMeasure, FlangeWidth: IfcPositiveLengthMeasure, WebThickness: IfcPositiveLengthMeasure, FlangeThickness: IfcPositiveLengthMeasure, FilletRadius: IfcNonNegativeLengthMeasure | null, EdgeRadius: IfcNonNegativeLengthMeasure | null, FlangeSlope: IfcPlaneAngleMeasure | null);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    Depth: IfcPositiveLengthMeasure;
    FlangeWidth: IfcPositiveLengthMeasure;
    WebThickness: IfcPositiveLengthMeasure;
    FlangeThickness: IfcPositiveLengthMeasure;
    FilletRadius: IfcNonNegativeLengthMeasure | null;
    EdgeRadius: IfcNonNegativeLengthMeasure | null;
    FlangeSlope: IfcPlaneAngleMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcUShapeProfileDef;
    ToTape(): any[];
}
export declare class IfcUnitAssignment {
    constructor(expressID: number, type: number, Units: IfcUnit[]);
    expressID: number;
    type: number;
    Units: IfcUnit[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcUnitAssignment;
    ToTape(): any[];
}
export declare class IfcUnitaryControlElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcUnitaryControlElementTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcUnitaryControlElementTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcUnitaryControlElement;
    ToTape(): any[];
}
export declare class IfcUnitaryControlElementType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcUnitaryControlElementTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcUnitaryControlElementTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcUnitaryControlElementType;
    ToTape(): any[];
}
export declare class IfcUnitaryEquipment {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcUnitaryEquipmentTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcUnitaryEquipmentTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcUnitaryEquipment;
    ToTape(): any[];
}
export declare class IfcUnitaryEquipmentType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcUnitaryEquipmentTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcUnitaryEquipmentTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcUnitaryEquipmentType;
    ToTape(): any[];
}
export declare class IfcValve {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcValveTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcValveTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcValve;
    ToTape(): any[];
}
export declare class IfcValveType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcValveTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcValveTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcValveType;
    ToTape(): any[];
}
export declare class IfcVector {
    constructor(expressID: number, type: number, Orientation: (Handle<IfcDirection> | IfcDirection), Magnitude: IfcLengthMeasure);
    expressID: number;
    type: number;
    Orientation: (Handle<IfcDirection> | IfcDirection);
    Magnitude: IfcLengthMeasure;
    static FromTape(expressID: number, type: number, tape: any[]): IfcVector;
    ToTape(): any[];
}
export declare class IfcVertex {
    constructor(expressID: number, type: number);
    expressID: number;
    type: number;
    static FromTape(expressID: number, type: number, tape: any[]): IfcVertex;
    ToTape(): any[];
}
export declare class IfcVertexLoop {
    constructor(expressID: number, type: number, LoopVertex: (Handle<IfcVertex> | IfcVertex));
    expressID: number;
    type: number;
    LoopVertex: (Handle<IfcVertex> | IfcVertex);
    static FromTape(expressID: number, type: number, tape: any[]): IfcVertexLoop;
    ToTape(): any[];
}
export declare class IfcVertexPoint {
    constructor(expressID: number, type: number, VertexGeometry: (Handle<IfcPoint> | IfcPoint));
    expressID: number;
    type: number;
    VertexGeometry: (Handle<IfcPoint> | IfcPoint);
    static FromTape(expressID: number, type: number, tape: any[]): IfcVertexPoint;
    ToTape(): any[];
}
export declare class IfcVibrationDamper {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcVibrationDamperTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcVibrationDamperTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcVibrationDamper;
    ToTape(): any[];
}
export declare class IfcVibrationDamperType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcVibrationDamperTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcVibrationDamperTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcVibrationDamperType;
    ToTape(): any[];
}
export declare class IfcVibrationIsolator {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcVibrationIsolatorTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcVibrationIsolatorTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcVibrationIsolator;
    ToTape(): any[];
}
export declare class IfcVibrationIsolatorType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcVibrationIsolatorTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcVibrationIsolatorTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcVibrationIsolatorType;
    ToTape(): any[];
}
export declare class IfcVirtualElement {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcVirtualElement;
    ToTape(): any[];
}
export declare class IfcVirtualGridIntersection {
    constructor(expressID: number, type: number, IntersectingAxes: (Handle<IfcGridAxis> | IfcGridAxis)[], OffsetDistances: IfcLengthMeasure[]);
    expressID: number;
    type: number;
    IntersectingAxes: (Handle<IfcGridAxis> | IfcGridAxis)[];
    OffsetDistances: IfcLengthMeasure[];
    static FromTape(expressID: number, type: number, tape: any[]): IfcVirtualGridIntersection;
    ToTape(): any[];
}
export declare class IfcVoidingFeature {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcVoidingFeatureTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcVoidingFeatureTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcVoidingFeature;
    ToTape(): any[];
}
export declare class IfcWall {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcWallTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcWallTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWall;
    ToTape(): any[];
}
export declare class IfcWallElementedCase {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcWallTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcWallTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWallElementedCase;
    ToTape(): any[];
}
export declare class IfcWallStandardCase {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcWallTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcWallTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWallStandardCase;
    ToTape(): any[];
}
export declare class IfcWallType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcWallTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcWallTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWallType;
    ToTape(): any[];
}
export declare class IfcWasteTerminal {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, PredefinedType: IfcWasteTerminalTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    PredefinedType: IfcWasteTerminalTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWasteTerminal;
    ToTape(): any[];
}
export declare class IfcWasteTerminalType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcWasteTerminalTypeEnum);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcWasteTerminalTypeEnum;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWasteTerminalType;
    ToTape(): any[];
}
export declare class IfcWindow {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, OverallHeight: IfcPositiveLengthMeasure | null, OverallWidth: IfcPositiveLengthMeasure | null, PredefinedType: IfcWindowTypeEnum | null, PartitioningType: IfcWindowTypePartitioningEnum | null, UserDefinedPartitioningType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    OverallHeight: IfcPositiveLengthMeasure | null;
    OverallWidth: IfcPositiveLengthMeasure | null;
    PredefinedType: IfcWindowTypeEnum | null;
    PartitioningType: IfcWindowTypePartitioningEnum | null;
    UserDefinedPartitioningType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWindow;
    ToTape(): any[];
}
export declare class IfcWindowLiningProperties {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, LiningDepth: IfcPositiveLengthMeasure | null, LiningThickness: IfcNonNegativeLengthMeasure | null, TransomThickness: IfcNonNegativeLengthMeasure | null, MullionThickness: IfcNonNegativeLengthMeasure | null, FirstTransomOffset: IfcNormalisedRatioMeasure | null, SecondTransomOffset: IfcNormalisedRatioMeasure | null, FirstMullionOffset: IfcNormalisedRatioMeasure | null, SecondMullionOffset: IfcNormalisedRatioMeasure | null, ShapeAspectStyle: (Handle<IfcShapeAspect> | IfcShapeAspect) | null, LiningOffset: IfcLengthMeasure | null, LiningToPanelOffsetX: IfcLengthMeasure | null, LiningToPanelOffsetY: IfcLengthMeasure | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    LiningDepth: IfcPositiveLengthMeasure | null;
    LiningThickness: IfcNonNegativeLengthMeasure | null;
    TransomThickness: IfcNonNegativeLengthMeasure | null;
    MullionThickness: IfcNonNegativeLengthMeasure | null;
    FirstTransomOffset: IfcNormalisedRatioMeasure | null;
    SecondTransomOffset: IfcNormalisedRatioMeasure | null;
    FirstMullionOffset: IfcNormalisedRatioMeasure | null;
    SecondMullionOffset: IfcNormalisedRatioMeasure | null;
    ShapeAspectStyle: (Handle<IfcShapeAspect> | IfcShapeAspect) | null;
    LiningOffset: IfcLengthMeasure | null;
    LiningToPanelOffsetX: IfcLengthMeasure | null;
    LiningToPanelOffsetY: IfcLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWindowLiningProperties;
    ToTape(): any[];
}
export declare class IfcWindowPanelProperties {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, OperationType: IfcWindowPanelOperationEnum, PanelPosition: IfcWindowPanelPositionEnum, FrameDepth: IfcPositiveLengthMeasure | null, FrameThickness: IfcPositiveLengthMeasure | null, ShapeAspectStyle: (Handle<IfcShapeAspect> | IfcShapeAspect) | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    OperationType: IfcWindowPanelOperationEnum;
    PanelPosition: IfcWindowPanelPositionEnum;
    FrameDepth: IfcPositiveLengthMeasure | null;
    FrameThickness: IfcPositiveLengthMeasure | null;
    ShapeAspectStyle: (Handle<IfcShapeAspect> | IfcShapeAspect) | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWindowPanelProperties;
    ToTape(): any[];
}
export declare class IfcWindowStandardCase {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null, Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null, Tag: IfcIdentifier | null, OverallHeight: IfcPositiveLengthMeasure | null, OverallWidth: IfcPositiveLengthMeasure | null, PredefinedType: IfcWindowTypeEnum | null, PartitioningType: IfcWindowTypePartitioningEnum | null, UserDefinedPartitioningType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    ObjectPlacement: (Handle<IfcObjectPlacement> | IfcObjectPlacement) | null;
    Representation: (Handle<IfcProductRepresentation> | IfcProductRepresentation) | null;
    Tag: IfcIdentifier | null;
    OverallHeight: IfcPositiveLengthMeasure | null;
    OverallWidth: IfcPositiveLengthMeasure | null;
    PredefinedType: IfcWindowTypeEnum | null;
    PartitioningType: IfcWindowTypePartitioningEnum | null;
    UserDefinedPartitioningType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWindowStandardCase;
    ToTape(): any[];
}
export declare class IfcWindowStyle {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ConstructionType: IfcWindowStyleConstructionEnum, OperationType: IfcWindowStyleOperationEnum, ParameterTakesPrecedence: IfcBoolean, Sizeable: IfcBoolean);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ConstructionType: IfcWindowStyleConstructionEnum;
    OperationType: IfcWindowStyleOperationEnum;
    ParameterTakesPrecedence: IfcBoolean;
    Sizeable: IfcBoolean;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWindowStyle;
    ToTape(): any[];
}
export declare class IfcWindowType {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ApplicableOccurrence: IfcIdentifier | null, HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null, RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null, Tag: IfcLabel | null, ElementType: IfcLabel | null, PredefinedType: IfcWindowTypeEnum, PartitioningType: IfcWindowTypePartitioningEnum, ParameterTakesPrecedence: IfcBoolean | null, UserDefinedPartitioningType: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ApplicableOccurrence: IfcIdentifier | null;
    HasPropertySets: (Handle<IfcPropertySetDefinition> | IfcPropertySetDefinition)[] | null;
    RepresentationMaps: (Handle<IfcRepresentationMap> | IfcRepresentationMap)[] | null;
    Tag: IfcLabel | null;
    ElementType: IfcLabel | null;
    PredefinedType: IfcWindowTypeEnum;
    PartitioningType: IfcWindowTypePartitioningEnum;
    ParameterTakesPrecedence: IfcBoolean | null;
    UserDefinedPartitioningType: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWindowType;
    ToTape(): any[];
}
export declare class IfcWorkCalendar {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, WorkingTimes: (Handle<IfcWorkTime> | IfcWorkTime)[] | null, ExceptionTimes: (Handle<IfcWorkTime> | IfcWorkTime)[] | null, PredefinedType: IfcWorkCalendarTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    WorkingTimes: (Handle<IfcWorkTime> | IfcWorkTime)[] | null;
    ExceptionTimes: (Handle<IfcWorkTime> | IfcWorkTime)[] | null;
    PredefinedType: IfcWorkCalendarTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWorkCalendar;
    ToTape(): any[];
}
export declare class IfcWorkControl {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, CreationDate: IfcDateTime, Creators: (Handle<IfcPerson> | IfcPerson)[] | null, Purpose: IfcLabel | null, Duration: IfcDuration | null, TotalFloat: IfcDuration | null, StartTime: IfcDateTime, FinishTime: IfcDateTime | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    CreationDate: IfcDateTime;
    Creators: (Handle<IfcPerson> | IfcPerson)[] | null;
    Purpose: IfcLabel | null;
    Duration: IfcDuration | null;
    TotalFloat: IfcDuration | null;
    StartTime: IfcDateTime;
    FinishTime: IfcDateTime | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWorkControl;
    ToTape(): any[];
}
export declare class IfcWorkPlan {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, CreationDate: IfcDateTime, Creators: (Handle<IfcPerson> | IfcPerson)[] | null, Purpose: IfcLabel | null, Duration: IfcDuration | null, TotalFloat: IfcDuration | null, StartTime: IfcDateTime, FinishTime: IfcDateTime | null, PredefinedType: IfcWorkPlanTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    CreationDate: IfcDateTime;
    Creators: (Handle<IfcPerson> | IfcPerson)[] | null;
    Purpose: IfcLabel | null;
    Duration: IfcDuration | null;
    TotalFloat: IfcDuration | null;
    StartTime: IfcDateTime;
    FinishTime: IfcDateTime | null;
    PredefinedType: IfcWorkPlanTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWorkPlan;
    ToTape(): any[];
}
export declare class IfcWorkSchedule {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, Identification: IfcIdentifier | null, CreationDate: IfcDateTime, Creators: (Handle<IfcPerson> | IfcPerson)[] | null, Purpose: IfcLabel | null, Duration: IfcDuration | null, TotalFloat: IfcDuration | null, StartTime: IfcDateTime, FinishTime: IfcDateTime | null, PredefinedType: IfcWorkScheduleTypeEnum | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    Identification: IfcIdentifier | null;
    CreationDate: IfcDateTime;
    Creators: (Handle<IfcPerson> | IfcPerson)[] | null;
    Purpose: IfcLabel | null;
    Duration: IfcDuration | null;
    TotalFloat: IfcDuration | null;
    StartTime: IfcDateTime;
    FinishTime: IfcDateTime | null;
    PredefinedType: IfcWorkScheduleTypeEnum | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWorkSchedule;
    ToTape(): any[];
}
export declare class IfcWorkTime {
    constructor(expressID: number, type: number, Name: IfcLabel | null, DataOrigin: IfcDataOriginEnum | null, UserDefinedDataOrigin: IfcLabel | null, RecurrencePattern: (Handle<IfcRecurrencePattern> | IfcRecurrencePattern) | null, Start: IfcDate | null, Finish: IfcDate | null);
    expressID: number;
    type: number;
    Name: IfcLabel | null;
    DataOrigin: IfcDataOriginEnum | null;
    UserDefinedDataOrigin: IfcLabel | null;
    RecurrencePattern: (Handle<IfcRecurrencePattern> | IfcRecurrencePattern) | null;
    Start: IfcDate | null;
    Finish: IfcDate | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcWorkTime;
    ToTape(): any[];
}
export declare class IfcZShapeProfileDef {
    constructor(expressID: number, type: number, ProfileType: IfcProfileTypeEnum, ProfileName: IfcLabel | null, Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null, Depth: IfcPositiveLengthMeasure, FlangeWidth: IfcPositiveLengthMeasure, WebThickness: IfcPositiveLengthMeasure, FlangeThickness: IfcPositiveLengthMeasure, FilletRadius: IfcNonNegativeLengthMeasure | null, EdgeRadius: IfcNonNegativeLengthMeasure | null);
    expressID: number;
    type: number;
    ProfileType: IfcProfileTypeEnum;
    ProfileName: IfcLabel | null;
    Position: (Handle<IfcAxis2Placement2D> | IfcAxis2Placement2D) | null;
    Depth: IfcPositiveLengthMeasure;
    FlangeWidth: IfcPositiveLengthMeasure;
    WebThickness: IfcPositiveLengthMeasure;
    FlangeThickness: IfcPositiveLengthMeasure;
    FilletRadius: IfcNonNegativeLengthMeasure | null;
    EdgeRadius: IfcNonNegativeLengthMeasure | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcZShapeProfileDef;
    ToTape(): any[];
}
export declare class IfcZone {
    constructor(expressID: number, type: number, GlobalId: IfcGloballyUniqueId, OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null, Name: IfcLabel | null, Description: IfcText | null, ObjectType: IfcLabel | null, LongName: IfcLabel | null);
    expressID: number;
    type: number;
    GlobalId: IfcGloballyUniqueId;
    OwnerHistory: (Handle<IfcOwnerHistory> | IfcOwnerHistory) | null;
    Name: IfcLabel | null;
    Description: IfcText | null;
    ObjectType: IfcLabel | null;
    LongName: IfcLabel | null;
    static FromTape(expressID: number, type: number, tape: any[]): IfcZone;
    ToTape(): any[];
}
