import { LoginScene } from "./scene/public/login/login.scene";
import { RegisterScene } from "./scene/public/register/register.scene";

export const routes = {
    public: [
        {
            path: '/register',
            scene: RegisterScene
        },
        {
            path: '/login',
            scene: LoginScene
        }

    ],

    private: [

    ]

}