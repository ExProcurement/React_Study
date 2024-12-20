import { useState, useRef } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    // 아래 4개의 state의 형태가 유사하기 때문에, 이것들을 객체로 묶어서 관리해볼 것이다.
    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    // 이벤트 핸들러도 state들과 마찬가지로 통합하는 것이 가능하다.
    // const onChangeName = (e) => {
    //     setInput({
    //         ...input,
    //         name: e.target.value
    //     });
    // }

    // const onChangeBirth = (e) => {
    //     setInput({
    //         ...input,
    //         birth :e.target.value
    //     });
    // }

    // const onChangeCountry = (e) => {
    //     setInput({
    //         ...input,
    //         country: e.target.value
    //     });
    // }

    // const onChangeBio = (e) => {
    //     setInput({
    //         ...input,
    //         bio: e.target.value
    //     });
    // }

    // 통합 이벤트 핸들러
    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current)

        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    };

    const onSubmit = () => {
        if(input.name === "") {
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    };

    return (
        <div>



            <div>
                <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder="이름" />
            </div>
            
            <div>
                <input name="birth" value={input.birth} onChange={onChange} type="date" /> 
            </div>

            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} />
            </div>
            
            <button onClick={onSubmit}>제출</button>

        </div>

    );
};

export default Register;