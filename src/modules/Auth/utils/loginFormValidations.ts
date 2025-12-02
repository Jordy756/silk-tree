type ValidationName = "email" | "password";

const loginFormValidations = {
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
};

export const getLoginFormValidation = (validationName: ValidationName) => loginFormValidations[validationName];
