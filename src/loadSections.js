
// load all html section on webpage as needed

export async function loadSection(id, fileName) {
    try {
        const res = await fetch(`/sections/${fileName}`);
        const data = await res.text();
        document.getElementById(id).innerHTML = data;
    } catch (err) {
        return console.error("Error loading:", file, err);
    }
}