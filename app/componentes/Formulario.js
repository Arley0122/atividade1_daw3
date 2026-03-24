"use client"
import React, { useState } from "react";
import style from "@/app/style/style.module.css"
export default function Formulario({ titulo }) {

    const [nome, setNome] = useState("")
    const [periodo, setPeriodo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [curso, setCurso] = useState("")
    const [professor, setProfessor] = useState("")
    const [qtdAlunos, setQtdAlunos] = useState("")
    const [modalAberto, setModalAberto] = useState(false)

    const aoSubmeter = (e)=>{
        e.preventDefault()
        setModalAberto(true)
    }

    return (
        <>
            <form className="formulario" onSubmit={aoSubmeter} >
                <div className={style.container_labels}>
                    <label> <span className={style.span}>Nome da Disciplina: </span>
                        <input
                            required
                            type="text"
                            value={nome}
                            onChange={(e) => { setNome(e.target.value) }}
                        >
                        </input>
                    </label>
                    <label> <span className={style.span}>Período: </span>
                        <input
                            type="number"
                            value={periodo}
                            onChange={(e) => setPeriodo(e.target.value)}
                        >
                        </input>
                    </label>
                    <label>
                        <span className={style.span}>Descrição da Disciplina:</span>
                        <input
                            type="text"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        ></input>
                    </label>
                    <label> <span className={style.span}>Curso:</span>
                        <input
                            type="text"
                            value={curso}
                            onChange={(e) => setCurso(e.target.value)}
                        >
                        </input>
                    </label>
                    <label> <span className={style.span}>Professor: </span>
                        <input
                            type="text"
                            value={professor}
                            onChange={(e) => setProfessor(e.target.value)}
                        >
                        </input>
                    </label>
                    <label> <span className={style.span}>Quantidade de alunos:</span>
                        <input
                            type="number"
                            value={qtdAlunos}
                            onChange={(e) => setQtdAlunos(e.target.value)}
                        >
                        </input>
                    </label>
                </div>
                <input
                    className={style.button}
                    type="submit"
                >
                </input>

            </form>
            {modalAberto && (
                <div className={style.modal}>
                    <h2>Disciplina Cadastrada!</h2>
                    <p>Nome: {nome}</p>
                    <p>Período: {periodo}</p>
                    <p>Descrição: {descricao}</p>
                    <p>Curso: {curso}</p>
                    <p>Professor: {professor}</p>
                    <p>Quantidade de Alunos: {qtdAlunos}</p>
                    <button className={style.button}  onClick={() => setModalAberto(false)}>Fechar</button>
                </div>
                )}
        </>
    )
}