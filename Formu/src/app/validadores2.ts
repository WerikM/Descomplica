import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import {validate_cpf, validate_cnpj} from "js-brasil/src/validate"

export function validateCpf(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if(!value ) {
            return null;
        }

        const isCpf = validate_cpf(value);

        return isCpf ? null : {cpfValidator: true}
    }
}
export function createCNPJValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if(!value) {
            return null;
        }

        const isCNPJ = validate_cnpj(value);
        return isCNPJ ? null : {cnpjValidator: true}
    }
}