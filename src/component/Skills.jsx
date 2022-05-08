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
                        <h3 className="skills__title"> Stacks</h3>
                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">React JS</h3>
                                        <span className="skills__level">**********</span>
                                    </div>
                                </div> 
                                
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Next JS</h3>
                                        <span className="skills__level">**********</span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Tailwind CSS</h3>
                                        <span className="skills__level">**********</span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Sanity</h3>
                                        <span className="skills__level">**********</span>
                                    </div>
                                </div>
                            </div>

                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Node</h3>
                                        <span className="skills__level">**********</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">MongoDB</h3>
                                        <span className="skills__level">**********</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Mark Down</h3>
                                        <span className="skills__level">**********</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Firebase</h3>
                                        <span className="skills__level">**********</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={highlightskills2 ? "skills__content active": "skills__content"}>
                        <h3 className="skills__title"> Tools</h3>
                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">VS Code</h3>
                                        <span className="skills__level">**********</span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Chrome </h3>
                                        <span className="skills__level">**********</span>
                                    </div>
                                </div>
                                
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Git / Github</h3>
                                        <span className="skills__level">**********</span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Postman</h3>
                                        <span className="skills__level">**********</span>
                                    </div>
                                </div>
                            </div>

                            <div className="skills__group">
                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Profiler</h3>
                                        <span className="skills__level">**********</span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <i className="bx bxs-badge-check"></i>
                                    <div>
                                        <h3 className="skills__name">Redux</h3>
                                        <span className="skills__level">**********</span>
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
