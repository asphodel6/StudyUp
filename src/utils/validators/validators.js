export const validators = (value, type) => {
    switch (type) {
        case "email":
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(String(value).toLowerCase()) && value != "") {
                return "Некорректный email"
            }
            return "";
        case "password":
            if (value.length < 8 && value != "") {
                return "Пароль должен быть длиннее 7 символов"
            }
            return "";
        default:
            return "";
    }
}