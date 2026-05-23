let certificateIndex = 3;
let badgeIndex = 3;

async function loadSkills(){

    const response =
        await fetch("data/skills.json");

    const skillData =
        await response.json();

    const container =
        document.getElementById(
            "skills-container"
        );

    skillData.forEach(category=>{

        let skillsHTML = "";

        category.skills.forEach(skill=>{

            skillsHTML += `
                <li>${skill}</li>
            `;
        });

        container.innerHTML += `

        <div class="skill-card">

            <h3>
                ${category.category}
            </h3>

            <ul>
                ${skillsHTML}
            </ul>

        </div>
        `;
    });
}

async function loadCertificates(){

    const response =
        await fetch("data/certificates.json");

    const certificates =
        await response.json();

    const container =
        document.getElementById(
            "certificates-container"
        );

    container.innerHTML = "";

    certificates
        .slice(0, certificateIndex)
        .forEach(cert=>{

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

    if(certificateIndex < certificates.length){

        container.innerHTML += `

        <div class="certificate-card"
            style="
                display:flex;
                justify-content:center;
                align-items:center;
            ">

            <button
                onclick="showMoreCertificates()"
                class="btn">

                + More

            </button>

        </div>
        `;
    }
}

async function showMoreCertificates(){

    const response =
        await fetch("data/certificates.json");

    const certificates =
        await response.json();

    certificateIndex += 3;

    if(certificateIndex > certificates.length){

        certificateIndex =
            certificates.length;
    }

    loadCertificates();
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

async function loadBadges(){

    const response =
        await fetch("data/badges.json");

    const badges =
        await response.json();

    const container =
        document.getElementById(
            "badges-container"
        );

    container.innerHTML = "";

    badges
        .slice(0, badgeIndex)
        .forEach(badge=>{

        container.innerHTML += `

        <div class="certificate-card">

            <img src="${badge.image}"
                style="
                    width:100px;
                    margin-bottom:20px;
                ">

            <h3>${badge.title}</h3>

            <p class="platform">
                ${badge.issuer}
            </p>

            <a href="${badge.link}"
                target="_blank"
                class="btn">

                View Badge

            </a>

        </div>
        `;
    });

    if(badgeIndex < badges.length){

        container.innerHTML += `

        <div class="certificate-card"
            style="
                display:flex;
                justify-content:center;
                align-items:center;
            ">

            <button
                onclick="showMoreBadges()"
                class="btn">

                + More

            </button>

        </div>
        `;
    }
}

async function showMoreBadges(){

    const response =
        await fetch("data/badges.json");

    const badges =
        await response.json();

    badgeIndex += 3;

    if(badgeIndex > badges.length){

        badgeIndex =
            badges.length;
    }

    loadBadges();
}

window.onload = ()=>{

    loadSkills();

    loadCertificates();

    loadProjects();

    loadBadges();
};