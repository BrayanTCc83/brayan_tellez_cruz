import type { JSX } from "astro/jsx-runtime";
import { useEffect, useState, type FormEvent } from "react";
import { validators } from "../../functions/ChainValidator.ts"

export interface InputProps {
    type: string
    label: string
    id: string
    validator: string
}

export interface ReferenceProps {
    text: string
    href: string
}

export interface FormProps {
    inputs: InputProps[]
    refs: ReferenceProps[]
    title: string
    uri: string
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    redirect: string
}

interface Data {
    [key: string]: string
}

interface ChangeDataHandler {
    e: FormEvent<HTMLInputElement>
    id: string
}

const Form = ({ inputs, title, refs, uri, method, redirect }: FormProps): JSX.Element => {
    const [ data, setData ] = useState<Data>({});
    const [ errors, setErrors ] = useState<Data>({});
    const [ last, setLast ] = useState<InputProps|null>(null);

    const handleChangeData = ({ e, id }: ChangeDataHandler) => {
        setData( old => ({ ...old, [id]: (e.target as HTMLInputElement).value }));
        setLast(inputs.find( input => input.id === id)??null);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        fetch(uri, {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
            .then((res) => {
                if(res.ok)
                    location.assign(redirect)
            })
            .catch( err => console.log(err) );
    }

    useEffect(() => {
        if(last !== null) {
            const validator = validators[last.validator];
            if(!validator) return;

            const result = validator(data[last.id]);
            if(!result.isValid) {
                setErrors( old => ({ ...old, [last.id]: result.error }) );
                return;
            }
            
            if(last.id in errors) {
                let copy = errors;
                delete copy[last.id];
                setErrors( () => ({ ...copy }) );
            }
        }
    }, [ data ]);

    return <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        {
            inputs.map( ({ id, type, label }) =>
                <fieldset
                    className={ `${ id in data && data[id].length > 0 ? 'complete' : '' } ${ id in errors ? 'error' : id in data ? 'success' : ''}` }
                    data-before={id in errors ? errors[id] : ''}
                    key={`input_${type}_${id}`}
                >
                    <input id={id} type={type} onInput={(e) => handleChangeData({ e, id })}/>
                    <label htmlFor={id}>{label}</label>
                </fieldset>
            )
        }
        <input type="submit" value="Enviar" disabled={ Object.keys(data).length < inputs.length || Object.keys(errors).length > 0 }/>
        {
            refs.map( ({ href, text }, index) => <a key={`anchor_ref_${index}`} href={href}>{text}</a> )
        }
    </form>
};

export default Form;