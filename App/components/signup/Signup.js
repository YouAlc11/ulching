export class Signup {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'account-pages pt-2 pt-sm-5 pb-4 pb-sm-5';
        this.element.innerHTML = `<div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-5">
                                            <div class="card auth-card">
                                                <div class="card-body px-3 py-5">
                                                    <div class="mx-auto mb-4 text-center auth-logo">
                                                        <a href="index.html" class="logo-dark">
                                                            <img
                                                                src="../../../resources/assets/images/logo-sm.png"
                                                                height="30"
                                                                class="me-1"
                                                                alt="logo sm"
                                                            />
                                                            <img
                                                                src="../../../resources/assets/images/logo-dark.png"
                                                                height="24"
                                                                alt="logo dark"
                                                            />
                                                        </a>

                                                        <a href="index.html" class="logo-light">
                                                            <img
                                                                src="../../../resources/assets/images/logo-sm.png"
                                                                height="30"
                                                                class="me-1"
                                                                alt="logo sm"
                                                            />
                                                            <img
                                                                src="../../../resources/assets/images/logo-light.png"
                                                                height="24"
                                                                alt="logo light"
                                                            />
                                                        </a>
                                                    </div>

                                                    <h2 class="fw-bold text-center fs-18">
                                                        Sign Up
                                                    </h2>
                                                    <p class="text-muted text-center mt-1 mb-4">
                                                        New to our platform? Sign up now! It only
                                                        takes a minute.
                                                    </p>

                                                    <div class="px-4">
                                                        
                                                        <p class="mt-3 fw-semibold no-span">
                                                            OR sign with
                                                        </p>

                                                        <div class="text-center">
                                                            <a
                                                                href="javascript:void(0);"
                                                                class="btn btn-light shadow-none"
                                                                ><i class="bx bxl-google fs-20"></i
                                                            ></a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                class="btn btn-light shadow-none"
                                                                ><i
                                                                    class="bx bxl-facebook fs-20"
                                                                ></i
                                                            ></a>
                                                            <a
                                                                href="javascript:void(0);"
                                                                class="btn btn-light shadow-none"
                                                                ><i class="bx bxl-github fs-20"></i
                                                            ></a>
                                                        </div>
                                                    </div>
                                                    <!-- end col -->
                                                </div>
                                                <!-- end card-body -->
                                            </div>
                                            <!-- end card -->

                                            <p class="text-white mb-0 text-center">
                                                I already have an account
                                                <a
                                                    href="auth-signin2.html"
                                                    class="text-white fw-bold ms-1"
                                                    >Sign In</a
                                                >
                                            </p>
                                        </div>
                                        <!-- end col -->
                                    </div>
                                    <!-- end row -->
                                </div>`;
    }

    render() {
        return this.element;
    }
}