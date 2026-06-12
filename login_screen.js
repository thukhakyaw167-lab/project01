document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const identifierInput = document.getElementById('identifier');
    const passwordInput = document.getElementById('password');
    const identifierError = document.getElementById('identifierError');
    const passwordError = document.getElementById('passwordError');
    const alertBox = document.getElementById('alertBox');
    const loginBtn = document.getElementById('loginBtn');
    const btnText = loginBtn.querySelector('.btn-text');
    const btnSpinner = loginBtn.querySelector('.btn-spinner');
    const togglePassword = document.getElementById('togglePassword');

    // Show / hide password
    togglePassword.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        togglePassword.setAttribute(
            'aria-label',
            isPassword ? 'パスワードを非表示' : 'パスワードを表示'
        );
    });

    // Clear errors on input
    [identifierInput, passwordInput].forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('error');
            const errorEl = input.id === 'identifier' ? identifierError : passwordError;
            errorEl.textContent = '';
            hideAlert();
        });
    });

    // Validation
    function validate() {
        let isValid = true;

        const identifier = identifierInput.value.trim();
        const password = passwordInput.value;

        identifierError.textContent = '';
        passwordError.textContent = '';
        identifierInput.classList.remove('error');
        passwordInput.classList.remove('error');

        if (!identifier) {
            identifierError.textContent = 'メールアドレスまたはユーザー名を入力してください';
            identifierInput.classList.add('error');
            isValid = false;
        } else if (identifier.includes('@') && !isValidEmail(identifier)) {
            identifierError.textContent = '有効なメールアドレスを入力してください';
            identifierInput.classList.add('error');
            isValid = false;
        }

        if (!password) {
            passwordError.textContent = 'パスワードを入力してください';
            passwordInput.classList.add('error');
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = 'パスワードは6文字以上で入力してください';
            passwordInput.classList.add('error');
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showAlert(message, type = 'error') {
        alertBox.textContent = message;
        alertBox.className = `alert ${type}`;
        alertBox.hidden = false;
    }

    function hideAlert() {
        alertBox.hidden = true;
    }

    function setLoading(loading) {
        loginBtn.disabled = loading;
        btnText.hidden = loading;
        btnSpinner.hidden = !loading;
    }

    // Form submit (demo — replace with real API/PHP endpoint)
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideAlert();

        if (!validate()) return;

        setLoading(true);

        try {
            // Simulate API call — replace with fetch() to your PHP backend
            await simulateLogin({
                identifier: identifierInput.value.trim(),
                password: passwordInput.value
            });

            showAlert('ログインに成功しました！', 'success');

            // Redirect after success (change URL as needed)
            setTimeout(() => {
                // window.location.href = 'dashboard.php';
            }, 1500);

        } catch (err) {
            showAlert(err.message || 'ログインに失敗しました。もう一度お試しください。');
        } finally {
            setLoading(false);
        }
    });

    // Demo login simulation
    function simulateLogin(credentials) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Demo: accept any login with password "password123"
                if (credentials.password === 'password123') {
                    resolve({ success: true });
                } else {
                    reject(new Error('メールアドレスまたはパスワードが正しくありません'));
                }
            }, 1200);
        });
    }
});