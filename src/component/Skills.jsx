import React from 'react';

function Skills({highlightskills1, highlightskills2}) {
    return (
        <div>
            {/* ========================== skills =========================== */}
            <section className="skills section"id="skills">
                <span className="section__subtitle">My abilities</span>
                <h2 className="section__title">My Experience</h2>
                
                <div className= "skills__container container grid">
                    <div className={highlightskills1 ? "skills__content active": "skills__content"}>
                        <h3 className="skills__title"> Frontend developer</h3>
                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">HTML</h3>
                                        <span className="skills__level">Basic</span>
                                    </div>
                                </div> 
                                
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">CSS</h3>
                                        <span className="skills__level">Advanced</span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Javascript</h3>
                                        <span className="skills__level">Intermediate</span>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">React</h3>
                                        <span className="skills__level">Intermediate</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Node</h3>
                                        <span className="skills__level">Intermediate</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Git</h3>
                                        <span className="skills__level">Intermediate</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={highlightskills2 ? "skills__content active": "skills__content"}>
                        <h3 className="skills__title"> Backend developer</h3>
                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">HTML</h3>
                                        <span className="skills__level">Basic</span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">CSS</h3>
                                        <span className="skills__level">Advanced</span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Javascript</h3>
                                        <span className="skills__level">Intermediate</span>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">React</h3>
                                        <span className="skills__level">Intermediate</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Node</h3>
                                        <span className="skills__level">Intermediate</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Git</h3>
                                        <span className="skills__level">Intermediate</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
