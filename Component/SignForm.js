import React, {useRef} from 'react';
import BorderedInput from './BorderedInput';

function SignForm({isSignUp, onSubmit, form, createChangeTextHandler}) {
    const passwordRef = useRef();
    const confirmPassword = useRef();

    return(
        <>
            <BorderedInput
                hasMarginBottom
                placeholder="이메일"
                value={form.email}
                onChangeText={createChangeTextHandler('email')}
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="email"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
            />
            <BorderedInput
                placeholder="비밀번호"
                hasMarginBottom={isSignUp}
                value={form.password}
                onChangeText={createChangeTextHandler('password')}
                secureTextEntry
                ref={passwordRef}
                returnKeyType={isSignUp ? 'next':'done'}
                onSubmitEditing={()=>{
                    if(isSignUp){
                        confirmPassword.current.focus();
                    } else{
                        onSubmit();
                    }
                 }}
            />
                {isSignUp &&(
                    <BorderedInput
                        placeholder = "비밀번호 확인"
                            value={form.confirmPassword}
                            onChangeText={createChangeTextHandler('confirmPassword')}
                            ref={confirmPassword}
                            returnKeyType="done"
                            onSubmitEditing={onSubmit}
                            secureTextEntry
                    />)}
            </>
    );
}

export default SignForm;

