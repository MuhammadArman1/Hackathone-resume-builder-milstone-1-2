function toggleSkill():void{
const toggleButton = document.getElementById("toggle") as HTMLButtonElement
const skill = document.getElementById("skill") as HTMLElement

    if (skill.style.display === 'none') {
        skill.style.display = 'block';
    } else {
        skill.style.display = 'none';
    }
    }
