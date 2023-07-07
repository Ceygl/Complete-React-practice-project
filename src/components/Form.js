import React, { Component } from 'react';
import InputGroups from './InputGroups';
import Buttons from './Buttons';

const Form = () => {
    return (
        <form className="form">
            <InputGroups />
            <Buttons />
        </form>
    )
}

export default Form;