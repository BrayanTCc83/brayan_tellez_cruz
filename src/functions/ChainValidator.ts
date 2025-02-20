export default class ChainValidator {
    data;
    isValid;
    error;

    constructor(data: string) {
        this.data = data;
        this.isValid = true;
        this.error = '';
    }
 
    min(min: number, error: string) {
        if(!this.isValid) {
            return this;
        }

        if(this.data.length < min) {
            this.isValid = false;
            this.error = error;
        }

        return this;
    }
 
    max(max: number, error: string) {
        if(!this.isValid) {
            return this;
        }

        if(this.data.length > max) {
            this.isValid = false;
            this.error = error;
        }

        return this;
    }

    regex(regex: RegExp, error: string) {
        if(!this.isValid) {
            return this;
        }

        if(!regex.test(this.data)) {
            this.isValid = false;
            this.error = error;
        }

        return this;
    }
}

export const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
export const regexpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const regexpNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;
export const regexEdad = /^(?:1[01]?\d|120)$/;

export const validators: {
    [key: string]: (data: string) => ChainValidator
} = {
    'email': (data: string) => new ChainValidator(data)
        .regex(regexpEmail, 'El correo no tiene un formato válido.'),
    'nombre': (data: string) => new ChainValidator(data)
        .regex(regexpNombre, 'El nombre no puede incluir números.'),
    'apellido': (data: string) => new ChainValidator(data)
        .regex(regexpNombre, 'El apellido no puede contener números.'),
    'edad': (data: string) => new ChainValidator(data)
        .regex(regexEdad, 'La edad debe estar en un rango de 1 a 120.'),
    'password': (data: string) => new ChainValidator(data)
        .min(8, 'La contraseña debe tener al menos 8 caracteres.')
        .max(40, 'La constraseña no debe superar los 40 caracteres.')
        .regex(regexPassword, 'Debes incluir caracteres especiales, letras y números.')
}