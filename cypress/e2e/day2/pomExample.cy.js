/// <reference types="cypress"/>

import { Login } from "../../pageObjects/login"

const login=new Login();

describe("Login test",()=>{
    it("TC 001 positive login scenario",()=>{
        login.navigate();
        login.assertTitle();

    });
    it("TC002 positive scenario",()=>{
        login.navigate();
        login.loginLink();
        login.username();
        login.password();
        login.loginButton();
        login.assertUsername();

    });

    it("TC003 positive scenario using return this chain method",()=>{
        login.navigate();
        login.loginLink()
        .username()
        .password()
        .loginButton();
        login.assertUsername();

    });
})