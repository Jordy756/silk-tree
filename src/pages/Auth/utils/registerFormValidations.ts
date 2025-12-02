type ValidationName = "name" | "lastName" | "email" | "password" | "confirmPassword";

const validatePasswordMatch = (value: string, formValues: { password: string }) =>
    value === formValues.password || "Las contraseñas no coinciden";

const registerFormValidations = {
    name: {
        required: {
            value: true,
            message: "El nombre es requerido",
        },
        minLength: {
            value: 3,
            message: "El nombre no puede tener menos de 3 caracteres",
        },
        maxLength: {
            value: 50,
            message: "El nombre no puede tener más de 50 caracteres",
        },
        pattern: {
            value: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/,
            message: "El nombre debe comenzar con mayúscula y solo debe contener letras",
        },
    },
    lastName: {
        required: {
            value: true,
            message: "Los apellidos son requeridos",
        },
        minLength: {
            value: 3,
            message: "Los apellidos no pueden tener menos de 3 caracteres",
        },
        maxLength: {
            value: 50,
            message: "Los apellidos no pueden tener más de 50 caracteres",
        },
        pattern: {
            value: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/,
            message: "Cada apellido debe comenzar con mayúscula y solo debe contener letras",
        },
    },
    email: {
        required: {
            value: true,
            message: "El correo electrónico es requerido",
        },
        minLength: {
            value: 3,
            message: "El correo electrónico no puede tener menos de 3 caracteres",
        },
        maxLength: {
            value: 50,
            message: "El correo electrónico no puede tener más de 50 caracteres",
        },
        pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            message: "El correo electrónico no es válido",
        },
    },
    password: {
        required: {
            value: true,
            message: "La contraseña es requerida",
        },
        minLength: {
            value: 8,
            message: "La contraseña no puede tener menos de 8 caracteres",
        },
        maxLength: {
            value: 50,
            message: "La contraseña no puede tener más de 50 caracteres",
        },
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
                "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial",
        },
    },
    confirmPassword: {
        required: {
            value: true,
            message: "La confirmación de contraseña es requerida",
        },
        minLength: {
            value: 8,
            message: "La contraseña no puede tener menos de 8 caracteres",
        },
        maxLength: {
            value: 50,
            message: "La contraseña no puede tener más de 50 caracteres",
        },
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
                "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial",
        },
        validate: {
            matchesPreviousPassword: validatePasswordMatch,
        },
    },
};

export const getRegisterFormValidation = (validationName: ValidationName) => registerFormValidations[validationName];
