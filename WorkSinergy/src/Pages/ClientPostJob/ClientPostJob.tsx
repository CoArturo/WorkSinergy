import React from "react";
import './ClientPostJob.css'
import { Select } from "antd";

export const ClientPostJob: React.FC = () => {

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
                            <input type="text" placeholder="Escribe el titulo..."/>
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
                            <textarea placeholder="Escribe la descripcion..."/>
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
                                    <label>Categoría</label>
                                    <Select placeholder="Selecciona la categoria..." style={{width: 280, height:50, marginRight:30}} options={[{ value: 'sample', label: <span>sample</span> }]} />
                                </div>

                                <div className="label">
                                    <label>Especialidad</label>
                                    <Select placeholder="Selecciona la especialidad..." style={{width: 280, height:50}} options={[{ value: 'sample', label: <span>sample</span> }]} />
                                </div>
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
                            <h2>Categoría del Proyecto</h2>
                            <p className="stepTip"><span><i className="fa-regular fa-lightbulb"></i> Tip:</span> Agrega de 2-3 habilidades, para mejores resultados.</p>
                            <input type="text" placeholder="Buscar una habilidad"/>
                            <p>Habilidades seleccionadas</p>
                            <div className="habilidades">
                                <div className="habilidad">
                                    Diseño UI <i className="fa-regular fa-xmark"></i>
                                </div>

                                <div className="habilidad">
                                    Web Design <i className="fa-regular fa-xmark"></i>
                                </div>

                                <div className="habilidad">
                                    Diseño UI <i className="fa-regular fa-xmark"></i>
                                </div>

                                <div className="habilidad">
                                    Metalpo <i className="fa-regular fa-xmark"></i>
                                </div>

                                <div className="habilidad">
                                    HTML5 <i className="fa-regular fa-xmark"></i>
                                </div>

                                <div className="habilidad">
                                    CSS3 <i className="fa-regular fa-xmark"></i>
                                </div>
                            </div>
                        </div>

                    </article>
                </section>
            </main>
        </>
    )
}