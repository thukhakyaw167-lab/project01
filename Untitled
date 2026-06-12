<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ログイン</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="login_sereen.css">
</head>
<body>

    <!-- Header -->
    <header class="header">
        <nav class="header-nav">
            <a href="#" class="nav-link active">ログイン</a>
            <a href="#" class="nav-link">新規登録</a>
            <a href="#" class="nav-link">について</a>
        </nav>
    </header>

    <!-- Main -->
    <main class="main">
        <div class="login-card">
            <h1 class="login-title">ログイン</h1>
            <p class="login-subtitle">メールアドレスまたはユーザー名でログインしてください</p>

            <!-- Alert message (dynamic) -->
            <div class="alert" id="alertBox" role="alert" hidden></div>

            <form class="login-form" id="loginForm" novalidate>
                <!-- Email / Username -->
                <div class="form-group">
                    <label for="identifier" class="form-label">メールアドレスまたはユーザー名</label>
                    <input
                        type="text"
                        id="identifier"
                        name="identifier"
                        class="form-input"
                        placeholder="メールアドレスまたはユーザー名を入力"
                        autocomplete="username"
                        required
                    >
                    <span class="error-msg" id="identifierError"></span>
                </div>

                <!-- Password -->
                <div class="form-group">
                    <label for="password" class="form-label">パスワード</label>
                    <div class="password-wrapper">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            class="form-input"
                            placeholder="パスワードを入力"
                            autocomplete="current-password"
                            required
                        >
                        <button type="button" class="toggle-password" id="togglePassword" aria-label="パスワードを表示">
                            <svg class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                        </button>
                    </div>
                    <div class="password-footer">
                        <span class="error-msg" id="passwordError"></span>
                        <a href="#" class="forgot-link">パスワードをお忘れですか？</a>
                    </div>
                </div>

                <!-- Submit -->
                <button type="submit" class="btn-login" id="loginBtn">
                    <span class="btn-text">ログイン</span>
                    <span class="btn-spinner" hidden>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
                            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/>
                        </svg>
                    </span>
                </button>
            </form>

            <!-- Divider -->
            <div class="divider">
                <span>または</span>
            </div>

            <!-- Sign up -->
            <p class="signup-text">
                アカウントをお持ちでないですか？
                <a href="#" class="signup-link">新規登録</a>
            </p>
        </div>
    </main>

    <script src="login_screen.js"></script>
</body>
</html>