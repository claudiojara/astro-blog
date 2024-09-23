export interface Process {
    steps: Step[];
}

export interface Step {
    name:        string;
    description: string;
    states:      State[];
}

export interface State {
    name:      string;
    roles:     Role[];
    nextState: NextState | null;
}

export interface NextState {
    stepName:  string;
    stateName: string;
}

export enum Role {
    Analyst = "analyst",
    MedicalAuditor = "medicalAuditor",
    Supervisor = "supervisor",
    Treasury = "treasury",
}
