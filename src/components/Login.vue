<template>
    <div class="logo">

    </div>

    <div class="login-div">
        <h2>Log in to your Chord account</h2>
        <div class="user-input">
            <div class="input user-email">
                <p>Email Address</p>
                <input type="text" name="userEmail">
            </div>
            <div class="input user-password">
                <p>Password</p>
                <input type="text" name="userPassword">
            </div>
        </div>
        <input type="button" value="Log In" class="log-in-btn">
    </div>
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

<style lang="scss">
.login-div {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 16rem;
    width: 40rem;
    p {
        font-size: 0.8rem;
    }
}

.user-input {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 60%;
    justify-content: space-between;
}

.input {
    justify-content: space-between;
    align-items: baseline;
    margin-top: 1rem;
    padding: 0rem;

    input {
        font-size: 1rem;
        height: 2rem;
        width: 100%;
        margin-top: 0.5rem;
        padding: 5px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid black;
    }
}

.log-in-btn {
    width: 50%;
    padding: 0rem;
    height: 2rem;
    border: 1px solid black;
    background-color: grey;
    color: white;
}
</style>