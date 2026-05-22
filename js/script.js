async function loadCertificates(){

    const response =
        await fetch("data/certificates.json");

    const certificates =
        await response.json();

    const container =
        document.getElementById(
            "certificates-container"
        );

    certificates.forEach(cert=>{

        container.innerHTML += `

        <div class="certificate-card ${cert.featured ? 'featured' : ''}">

            <div class="certificate-icon">

                <i class="${cert.icon}"></i>

            </div>

            <h3>${cert.title}</h3>

            <p class="platform">
                ${cert.platform}
            </p>

            <p class="date">
                ${cert.date}
            </p>

            <a href="${cert.link}"
                target="_blank"
                class="btn">

                View Certificate

            </a>

        </div>
        `;
    });
}

async function loadProjects(){

    const response =
        await fetch("data/projects.json");

    const projects =
        await response.json();

    const container =
        document.getElementById(
            "projects-container"
        );

    projects.forEach(project=>{

        let toolsHTML = "";

        project.tools.forEach(tool=>{

            toolsHTML += `
                <span>${tool}</span>
            `;
        });

        container.innerHTML += `

        <div class="project-card">

            <img src="${project.image}">

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <div class="project-tools">

                ${toolsHTML}

            </div>

            <a href="${project.github}"
                target="_blank"
                class="btn">

                GitHub

            </a>

        </div>
        `;
    });
}

window.onload = ()=>{

    loadCertificates();

    loadProjects();
};