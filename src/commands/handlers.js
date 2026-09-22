import {owner, bio, skills, skillsNote, projects, resumeFile} from "../data/portfolio.js";

const groupBy = (arr, key) => 
    arr.reduce((acc, item) => {
        (acc[item[key]] = acc[item[key]] || []).push(item);
        return acc;
    }, {});


const progressBar = ({percent}) => (
    <div className="skill-row">
        <div className="progress-bar">
            <div className="progress-fill" style={{width: `${percent}%` }}/>
        </div>
        <span className="progress-label"> {percent}% </span>
    </div>
)

export const handleIntro = () => (
    <div className="output">
        <pre className="ascii-banner">{`
         _          _                 _               _     
| |        | |               | |             | |    
| | ___   _| | __ _ _ __  ___| | ____ _ ___  | |__  
| |/ / | | | |/ _\` | '_ \\/ __| |/ / _\` / __| | '_ \\ 
|   <| |_| | | (_| | | | \\__ \\   < (_| \\__ \\ | | | |
|_|\\_\\\\__,_|_|\\__,_|_| |_|___/_|\\_\\__,_|___/ |_| |_|
        `}</pre>

        <p className="intro-title"> {owner.title}</p>
        <p className="intro-hint">
            Type <span className="cmd-highlight">help</span> to see available commands
        </p>
    </div>
);

export const handleHelp = () => (
    <div className="output">
        <p className="section-label"> // available commands</p>
        <table className="help-table">
            <tbody>
                {[
                    ['intro', 'Display the welcome banner'],
                    ['about', 'Background, education and experience'],
                    ['skills', 'Languages, frameworks and tools with proficiency levels'],
                    ['Projects', 'Notable projects with descriptions and links'],
                    ['Contact', 'How to reach me'],
                    ['Resume', 'Download my CV'],
                    ['Clear', 'Clear the terminal'],
                ].map(([cmd, desc]) => (
                    <tr key={cmd}>
                        <td className="cmd-col">
                            <span className="cmd-highlight">{cmd}</span>
                        </td>

                        <td className="desc-col">{desc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export const handleAbout = () => (
    <div className="output">
        <p className="section-label">// about</p>
        {bio.about.map((para, i) => (
            <p key={i} className="about-para">{}para</p>
        ))}
    
    <div className="about-meta">
        <p> <span className="meta-key">Location</span>Nairobi, Kenya</p>
        <p> <span className="meta-key">Education</span>KCA University · BBIT (Degree Holder)</p>
        <p> <span className="meta-key">Training</span>Moringa School · Software Engineering</p>
    </div>
    </div>
);

export const handleSkills = () => {
    const grouped = groupBy(skills, 'category');
    return(
        <div>
            <p className="section-label">// skills</p>
            {Object.entries(grouped).map(([category, items]) => (
                <div key={category} className="skill-group">
                    <p className="skill-category">{category}</p>
                    {items.map((skill) => (
                        <div key={skill.name} className="skill-item">
                            <span className="skill-name">{skill.name}</span>
                            <ProgressBar percent={skill.percent} />
                        </div>
                    ))}
                </div>
            ))}
            <p className="skills-note">= {skillsNote}</p>
        </div>
    );
};


export const handleProjects = () => (
    <div className="output">
        <p className="section-label">// projects</p>
        {projects.map((p) => (
            <div key={p.id} className="project-card">
                <p className="project-name">
                    <span className="project-id"> [{String(p.id).padStart(2, '0')}]  </span> {p.name}
                </p>

                <p className="project-meta"> {p.type} · {p.stack.join(" · ")}</p>
                <p className="project-desc"> {p.description} </p>
                <div className="project-links">
                    {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">github</a>
                    )}
                    {p.live && (
                        <a href={p.live} target='_blank' rel="noopener noreferrer" className="project-link">live</a>
                    )}
                </div>

            </div>
        ))}
    </div>
);

export const handleContact = () => (
    <div className="output">
        <p className="section-label">// contact</p>
        <div className="contact-list">
            <div className="contact-row">
                <span className="meta-key">email</span>
                <a href={`mailto:${owner.email}`} className="contact-val">{owner.email}</a>
            </div>

            <div className="contact-row">
                <span className="meta-key">github</span>
                <a href={owner.github} target="_blank" rel="noopener noreferrer" className="contact-val">
                    {owner.github.replace('https://', '')}
                </a>
            </div>
        </div>

    </div>
);

export const handleResume = () => {
    if (resumeFile.url) {
        const a = document.createElement('a');
        a.href = resumeFile.url;
        a.download = resumeFile.label;
        a.click();
        return (
            <div className="output">
                <p className="success-text">Downloading {resumeFile.label}.pdf ...</p>
            </div>
        );
    }

    return (
        <div className="'output">
            <p className="warn-text">CV not uploaded -- check back soon.</p>
            <p className="muted-text">
                Or reach out directly: {" "}
                <a href={`mailto:${owner.email}`} className="contact-val"> {owner.email} </a>
            </p>
        </div>
    );
};


export const handleNotFound = (input) => (
    <div className="output">
        <p className="error-text">
            command not found: <span className="cmd-highlight"> {input} </span>
        </p>
        <p className="muted-text">
            Type <span className="cmd-highlight">help</span> to see available commands.
        </p>
    </div>
);

