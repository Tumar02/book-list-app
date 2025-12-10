const usersDB = [];
let currentConfirmationCode = null;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

export const mockRegister = async ({ email, password }) => {
    await delay(1000); 
    if (usersDB.find(u => u.email === email)) {
        throw new Error("Пользователь с таким email уже существует.");
    }
    const newUser = { email, password, isVerified: false };
    usersDB.push(newUser);
    console.log(`[Mock Register] Пользователь ${email} зарегистрирован.`);
    return { success: true };
};

export const mockLogin = async ({ email, password }) => {
    await delay(1000);
    const user = usersDB.find(u => u.email === email && u.password === password);

    if (!user) {
        throw new Error("Неправильный email или пароль.");
    }
    
    currentConfirmationCode = generateCode();
    
 
    console.log(`[Mock Login] Пользователь ${email} успешно авторизован. 
    
    ===================================================
    СКРИНШОТ: ИМИТАЦИЯ ОТПРАВЛЕННОГО КОДА ПОДТВЕРЖДЕНИЯ (В КОНСОЛЬ):
    КОД ПОДТВЕРЖДЕНИЯ: ${currentConfirmationCode}
    ===================================================
    `);

    return { success: true, email: user.email };
};

export const mockVerifyCode = async ({ code }) => {
    await delay(500);

    if (code === currentConfirmationCode) {
        currentConfirmationCode = null; 
        return { success: true, token: "mock-jwt-token-12345" };
    } else {
        throw new Error("Неверный код подтверждения.");
    }
};