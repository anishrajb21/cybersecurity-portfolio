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