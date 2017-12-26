// import { BrokenRulesCollection } from './brokenrulescollection';

export class OperationResult<T> {
    isValid: boolean;
    // brokenRulesCollection: BrokenRulesCollection;
    data: T;
    total: number;

    constructor(data: T, total: number) {
        this.data = data;
        this.total = total;
    }
}
