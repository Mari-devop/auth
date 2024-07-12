export interface AuthTokens {
    access_token: string;
    refresh_token: string;
}

export interface AuthContextType {
    authTokens: AuthTokens | null;
    login: (email: string, password: string, navigate: Function) => Promise<void>;
    signup: (email: string, password: string, navigate: Function) => Promise<void>;
    logout: (navigate: Function) => void;
    refreshAccessToken: () => Promise<void>;
}

export interface ErrorResponse {
    body: {
        code: number;
        message: string;
        status: string;
    };
    status_code: number;
}

export interface LoginResponse {
    body: {
        access_token: string;
        refresh_token: string;
    };
    statusCode: number;
}