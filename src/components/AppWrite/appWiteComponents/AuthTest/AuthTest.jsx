import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../auth.service";
import { login, logout } from "../../store/authSlice";

function AuthTest() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [users, setUsers] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const authStatus = useSelector((state) => state.auth.status);
    const userData = useSelector((state) => state.auth.userData);

    // Log Redux state changes
    useEffect(() => {
        console.log("📊 REDUX STATE CHANGED:", { authStatus, userData });
    }, [authStatus, userData]);

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const user = await authService.createAccount(email, password, name);
            console.log("Signup successful:", user);
            // Automatically log in after signup
            await handleLogin(e);
        } catch (error) {
            console.error("Signup error:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await authService.login(email, password);
            const currentUser = await authService.getCurrentUser();
            console.log("Login successful. Current user:", currentUser);
            dispatch(login({ userData: currentUser }));
        } catch (error) {
            console.error("Login error:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        setError("");
        setLoading(true);
        try {
            await authService.logout();
            console.log("Logout successful");
            dispatch(logout());
        } catch (error) {
            console.error("Logout error:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGetCurrentUser = async () => {
        setError("");
        try {
            const currentUser = await authService.getCurrentUser();
            console.log("Current user fetched:", currentUser);
            setUsers(currentUser);
        } catch (error) {
            console.error("Get current user error:", error);
            setError(error.message);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Appwrite Auth Test Component
            </h2>

            {/* Redux State Display */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">
                    Redux State:
                </h3>
                <div className="bg-white p-3 rounded border">
                    <p className="mb-1">
                        <strong>Auth Status:</strong>{" "}
                        <span className={authStatus ? "text-green-600" : "text-red-600"}>
                            {authStatus ? "✅ Logged In" : "❌ Logged Out"}
                        </span>
                    </p>
                    <p>
                        <strong>User Data:</strong>
                    </p>
                    <pre className="mt-2 p-2 bg-gray-100 rounded text-sm overflow-auto">
                        {JSON.stringify(userData, null, 2)}
                    </pre>
                </div>
            </div>

            {/* Error Display */}
            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}

            {/* Auth Forms */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Signup/Login Form */}
                <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">
                        {authStatus ? "Account Info" : "Login / Signup"}
                    </h3>
                    {!authStatus ? (
                        <form className="space-y-3">
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="flex gap-2">
                                <button
                                    onClick={handleLogin}
                                    disabled={loading}
                                    className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
                                >
                                    {loading ? "Processing..." : "Login"}
                                </button>
                                <button
                                    onClick={handleSignup}
                                    disabled={loading}
                                    className="flex-1 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
                                >
                                    {loading ? "Processing..." : "Signup"}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div>
                            <p className="text-green-600 mb-3">✅ You are logged in!</p>
                            <button
                                onClick={handleLogout}
                                disabled={loading}
                                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
                            >
                                {loading ? "Logging out..." : "Logout"}
                            </button>
                        </div>
                    )}
                </div>

                {/* User Info Display */}
                <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">
                        Current User Info
                    </h3>
                    <button
                        onClick={handleGetCurrentUser}
                        className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 mb-3 transition"
                    >
                        Get Current User
                    </button>
                    {users && (
                        <div className="bg-white p-3 rounded border">
                            <pre className="text-sm overflow-auto">
                                {JSON.stringify(users, null, 2)}
                            </pre>
                        </div>
                    )}
                </div>
            </div>

            {/* Instructions */}
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold mb-2 text-yellow-800">
                    📝 Instructions:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-yellow-900">
                    <li>Open your browser's console (F12) to see Redux actions</li>
                    <li>Install Redux DevTools extension to visualize state changes</li>
                    <li>Try logging in or signing up to see actions dispatched</li>
                    <li>Watch the Redux State box above update in real-time</li>
                    <li>Click "Get Current User" to fetch user data from Appwrite</li>
                </ul>
            </div>
        </div>
    );
}

export default AuthTest;
