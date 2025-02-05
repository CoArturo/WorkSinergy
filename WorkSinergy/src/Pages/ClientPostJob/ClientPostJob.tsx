import React, { useEffect, useState } from "react";
import './ClientPostJob.css'
import { Select } from "antd";
import { initialPostJob, PostJob } from "../../Interfaces/Post";
import { GetModel, initialGetModel } from "../../Interfaces/GetModel";
import { Currency } from "../../Interfaces/Currency";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { useNavigate } from "react-router-dom";

export const ClientPostJob: React.FC = () => {
    const auth: any = useAuthUser()

    const TAG = "https://localhost:7014/api/v1/Tag"
    const CURRENCY = `https://localhost:7014/api/v1/Currency`
    const SKILL = "https://localhost:7014/api/v1/Ability"
    const JOB = "https://localhost:7014/api/v1/Post"

    const navigate = useNavigate()

    const [postNewJob, setPostNewJob] = useState<PostJob>({...initialPostJob, creatorUserId: auth.id});
    const [categories, setCategories] = useState<GetModel[]>([initialGetModel]);
    const [skills, setSkills] = useState<GetModel[]>([initialGetModel]);

    const [categoriesUser, setCategoriesUser] = useState<number[]>([]);
    const [skillsUser, setSkillsUser] = useState<number[]>([]);
    const [currencys, setCurrencys] = useState<Currency[]>([]);


    useEffect(()=>{
        console.log(postNewJob)
    }, [postNewJob])

    useEffect(()=>{
        getCategoriesAndSkills()
        getCurrency()
        console.log(auth.id)
    }, [])

    useEffect(()=>{
        // console.log(skills)
        console.log("Categorias", categoriesUser)
        console.log("habilidades", skillsUser)
    }, [categoriesUser, skillsUser])

    useEffect(()=>{
        setPostNewJob({...postNewJob, categories: categoriesUser, abilities: skillsUser})
    }, [categoriesUser, skillsUser])

    const getCategoriesAndSkills = async() => {
        fetch(TAG, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
              },
        })
        .then((response) => response.json())
        .then(data => {
            setCategories(data.data)
            
        })
        .catch((error) => console.error("Error: ", error))

        fetch(SKILL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
              },
        })
        .then((response) => response.json())
        .then(data => {
            setSkills(data.data)
            
        })
        .catch((error) => console.error("Error: ", error))
    }

    const getCurrency = async () => {
        await fetch(CURRENCY, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then((response) => response.json())
        .then(data => {
            // console.log(data)
            if(data.data != null)
            {
                setCurrencys(data.data)
            }
            // navigate("/")
        })
        .catch((error) => console.error("Error: ", error))
    }

    const fetchPostNewJob = () => {
        fetch(JOB, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(postNewJob),
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            if(data != null)
            {
                navigate("/client/home")
            }
            // setPostNewJob(initialPostJob)
        })
        .catch((error) => console.error("Error: ", error))
    }

    return(
        <>
            <main className="postFormContainer">
                <section className="postJobTitle">
                    <h1>Publica un trabajo</h1>
                    <p>Sigue los siguientes pasos para tu publicación</p>
                </section>
                <section className="postJobForm">
                    <article className="postJob1Step postJobStep">
                        
                        <div className="paso1">
                            <div className="stepsNumber paso1Number">
                                <p>1</p>
                            </div>
                            <div className="esferas">
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                            </div>
                        </div>

                        <div className="step1Form stepForm">
                            <h2>Titulo de la publicación</h2>
                            <p className="stepTip"><span><i className="fa-regular fa-lightbulb"></i> Tip:</span> Trata de que el título sea corto, pero descriptivo.</p>
                            <input type="text" placeholder="Escribe el titulo..." onChange={(e)=>setPostNewJob({...postNewJob, title: e.target.value})}/>
                            <p className="stepExamples"><span>Ejemplos: </span>"Desarrollo de una App E-commerce", "Rediseño de Logotipo Corporativo"</p>
                        </div>

                    </article>

                    <article className="postJob2Step postJobStep">
                        
                        <div className="paso2">
                            <div className="stepsNumber paso2Number">
                                <p>2</p>
                            </div>
                            <div className="esferas">
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                            </div>
                        </div>

                        <div className="step2Form stepForm">
                            <h2>Descripción del Proyecto</h2>
                            <p className="stepTip"><span><i className="fa-regular fa-lightbulb"></i> Tip:</span> Incluye el contexto, los objetivos, el público objetivo y cualquier otro detalle importante.</p>
                            <textarea placeholder="Escribe la descripcion..." onChange={(e)=>setPostNewJob({...postNewJob, description: e.target.value})}/>
                            <p className="stepExamples"><span>Ejemplos: </span>“Necesitamos una aplicación móvil para iOS y Android con funcionalidad de carrito de compras, integración de pagos y diseño de interfaz simple y moderno. La app debe ser compatible con actualizaciones futuras.” </p>
                        </div>

                    </article>

                    <article className="postJob3Step postJobStep">
                        
                        <div className="paso3">
                            <div className="stepsNumber paso3Number">
                                <p>3</p>
                            </div>
                            <div className="esferas">
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>

                            </div>
                        </div>

                        <div className="step3Form stepForm">
                            <h2>Categoría del Proyecto</h2>
                            <p className="stepTip"><span><i className="fa-regular fa-lightbulb"></i> Tip:</span> Le pondremos en contacto con candidatos especializados en la categoría seleccionada.</p>
                            <div className="stepSelects">
                                <div className="label">
                                    <label>Categoria</label>
                                    <Select 
                                        placeholder="Selecciona una categoria..." 
                                        
                                        onChange={(value) => setCategoriesUser((prevcategoriesUser) => prevcategoriesUser.includes(value) 
                                            ? prevcategoriesUser 
                                            : [...prevcategoriesUser, value])} 

                                        style={{width: 280, height:50, marginRight:30}} 
                                        defaultValue={null} 
                                        value={0}>
                                        {
                                            categories.map((category) => {
                                                return(
                                                    <Select.Option key={category.id} value={category.id}> {category.name} </Select.Option>
                                                )
                                            })
                                        }
                                    </Select>
                                </div>
                            </div>

                            <div className="habilidades">
                                {categories &&
                                    categories
                                        .filter((category) => categoriesUser.includes(category.id))
                                        .map((category) => (
                                            <div className="habilidad" key={category.id}>
                                                {category.name} <i className="fa-regular fa-xmark" onClick={()=>setCategoriesUser((prevcategoriesUser) => prevcategoriesUser.filter((categoryId)=> categoryId !== category.id))}></i>
                                            </div>
                                        ))
                                }
                            </div>
                            <p className="stepExamples"><span>Ejemplos: </span>“Web, Móvil y Desarrollo de Software”, “Diseño UX/UI”</p>
                        </div>

                    </article>

                    <article className="postJob4Step postJobStep">
                        
                        <div className="paso4">
                            <div className="stepsNumber paso4Number">
                                <p>4</p>
                            </div>
                            <div className="esferas">
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>

                            </div>
                        </div>

                        <div className="step4Form stepForm">
                            <h2>Habilidades del Proyecto</h2>
                            <p className="stepTip"><span><i className="fa-regular fa-lightbulb"></i> Tip:</span> Agrega de 2-3 habilidades, para mejores resultados.</p>
                            <br />
                            <Select 
                                        placeholder="Selecciona una categoria..." 
                                        
                                        onChange={(value) => setSkillsUser((prevskillsUser) => prevskillsUser.includes(value) 
                                            ? prevskillsUser 
                                            : [...prevskillsUser, value])} 

                                        style={{width: 280, height:50, marginRight:30}} 
                                        defaultValue={null} 
                                        value={0}>
                                        {skills &&
                                            skills.map((skill) => {
                                                return(
                                                    <Select.Option key={skill.id} value={skill.id}> {skill.name} </Select.Option>
                                                )
                                            })
                                        }
                            </Select>
                            <br />
                            <br />
                            <p>Habilidades seleccionadas</p>
                            <div className="habilidades">
                                {skills &&
                                    skills
                                        .filter((skill) => skillsUser.includes(skill.id))
                                        .map((skill) => (
                                            <div className="habilidad" key={skill.id}>
                                                {skill.name} <i className="fa-regular fa-xmark" onClick={()=>setSkillsUser((prevskillsUser) => prevskillsUser.filter((skillId)=> skillId !== skill.id))}></i>
                                            </div>
                                        ))
                                }
                            </div>

                        </div>

                    </article>

                    <article className="postJob5Step postJobStep">
                        
                        <div className="paso5">
                            <div className="stepsNumber paso5Number">
                                <p>5</p>
                            </div>
                            <div className="esferas">
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                                <div className="esfera"></div>
                            </div>
                        </div>

                        <div className="step5Form stepForm">
                            <h2>Descripción del Proyecto</h2>
                            <p className="stepTip"><span><i className="fa-regular fa-lightbulb"></i> Tip:</span> Esto nos ayudará a emparejarlo con el freelancer dentro de su rango.</p>
                            <div className="inputsStepForm5">
                                <div className="inputStepForm5">
                                    <label htmlFor="pricePerHour"></label>
                                    <i className="fa-regular fa-sack-dollar"></i>
                                    <p>Precio por hora</p>
                                    <input type="radio" name="payTerm" id="pricePerHour" onClick={(e)=>setPostNewJob({...postNewJob, contractOption: "PerHour"})}/>
                                </div>

                                <div className="inputStepForm5">
                                    <label htmlFor="fixedPrice"></label>
                                    <i className="fa-regular fa-clock"></i>
                                    <p>Precio fijo</p>
                                    <input type="radio" name="payTerm" id="fixedPrice" onClick={(e)=>setPostNewJob({...postNewJob, contractOption: "FixedPrice"})}/>
                                </div>
                            </div>
                            <h3>Divisa</h3>
                            <p className="stepTip stepTip5">Elige la moneda de preferencia para el pago.</p>
                            <Select 
                                placeholder="Selecciona una moneda..." 
                                style={{width: 280, height:50, marginRight:30}} 
                                defaultValue={null}
                                onChange={(value:number)=>setPostNewJob({...postNewJob, currencyId: value})}
                                >
                                {
                                    currencys.map((currency) => {
                                        return(
                                            <Select.Option key={currency.id} value={currency.id}> {currency.name} </Select.Option>
                                        )
                                    })
                                }
                            </Select>
                            <h3>Especifica el monto</h3>

                            <div className="inputsStepForm5">

                                <div className="inputAmout">
                                    <input type="number" placeholder="Desde" name="payTerm" id="pricePerHour" onChange={(e)=>setPostNewJob({...postNewJob, from: parseInt(e.target.value)})}/>
                                    <p>/hr</p>
                                </div>

                                <div className="inputAmout">
                                    <input type="number" placeholder="Hasta" name="payTerm" id="fixedPrice" onChange={(e)=>setPostNewJob({...postNewJob, to: parseInt(e.target.value)})}/>
                                    <p>/hr</p>
                                </div>

                            </div>
                        </div>

                    </article>
                    
                    <button className="btn submitBtn" onClick={fetchPostNewJob}>Publicar propuesta</button>
                </section>
            </main>
        </>
    )
}