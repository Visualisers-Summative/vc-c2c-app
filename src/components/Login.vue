<template>

    <section class="login">
        <div class="logo-header">
            <a href="#">
                <img src="../assets/images/Chords.svg" alt="chords-logo" class="logo">
            </a>
            <hr>
        </div>
        <div class="body">
            <div class="login-div">
                <div class="login-header">
                    <h2>Log in to your Chords account</h2>
                </div>
                <div class="user-input">
                    <div class="input user-email">
                        <p>Email address</p>
                        <input type="text" name="userEmail">
                    </div>
                    <div class="input user-password">
                        <p>Password</p>
                        <div class="password">
                            <input type="password" name="userPassword" class="password-inp">
                        </div>
                        <p><span>Forgot your password?</span></p>
                    </div>
                </div>
                <input type="button" value="Log In" class="log-in-btn">
                <p>New to Chords?
                    <a href="#">Create an account</a>
                </p>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {

        }
    }
}

</script>

<style lang="scss" scoped>

.logo-header {
    height: auto;
    margin-bottom: 4rem;

    .logo {
        width: 14rem;
        margin-bottom: 4rem;
    }
}

.login-div {
    background-color: white;
    margin: 10rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 20rem;
    width: 30rem;
    padding: 4rem 8rem 6rem 8rem;

    p {
        font-size: 0.8rem;
    }

    a {
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
    }
}

.login-header {
    display: flex;
    align-items: baseline;
    margin-bottom: 1rem;
}


.user-input {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60%;
    justify-content: space-between;
    margin: 2rem 0rem;
}

.input {
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1rem;


    input {
        font-size: 1rem;
        height: 2.5rem;
        width: 100%;
        margin-top: 0.5rem;
        margin-bottom: 5px;
        padding: 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid black;
    }

    span {
        font-weight: 600;
        cursor: pointer;
    }

    span:hover {
        text-decoration: underline;
    }

}

.log-in-btn {
    margin-bottom: 1.5rem;
    font-weight: 700;
    width: 100%;
    min-height: 2.5rem;
    border: 1px solid black;
    background-color: black;
    color: white;
    cursor: pointer;
}

.logo-c {
    width: 3rem;
}
</style>